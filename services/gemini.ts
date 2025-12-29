
import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import { calculatePayroll } from "./payrollCalculator";

// Exporting ChatResponse to fix the import error in Assistant.tsx
export interface ChatResponse {
  text?: string;
  payrollData?: any;
}

const payrollTool: FunctionDeclaration = {
  name: "calculatePayroll",
  parameters: {
    type: Type.OBJECT,
    description: "Calculate Canadian payroll deductions and net pay.",
    properties: {
      income: { type: Type.NUMBER },
      payType: { type: Type.STRING, description: "'annual' or 'hourly'" },
      province: { type: Type.STRING },
      year: { type: Type.NUMBER },
      frequency: { type: Type.STRING }
    },
    required: ["income"]
  }
};

export const getPayrollAdvice = async (history: any[], userPrompt: string): Promise<ChatResponse> => {
  if (!process.env.API_KEY) return { text: "Concierge is offline. Contact us directly." };

  // Initialize client inside the function as per guidelines for reliable key handling
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `You are the Maple Managed Payroll AI Concierge.
  Maple is an elite Canadian professional service firm.
  Be professional, warm, and highly accurate.
  Always use the 'calculatePayroll' tool for any math requests.
  Never use Markdown stars (* or **) in your output. Plain text only.
  Canadian spelling only. Focus on peace of mind and compliance.`;

  // Using gemini-3-pro-preview for complex reasoning and tool use
  const model = 'gemini-3-pro-preview';
  
  try {
    const contents = history.map(m => ({ 
      role: m.role === 'user' ? 'user' : 'model', 
      parts: [{ text: m.text }] 
    }));
    contents.push({ role: 'user', parts: [{ text: userPrompt }] });

    const response = await ai.models.generateContent({
      model,
      contents,
      config: { 
        tools: [{ functionDeclarations: [payrollTool] }], 
        systemInstruction,
        // Use thinking budget for complex payroll calculations
        thinkingConfig: { thinkingBudget: 4000 }
      }
    });

    // Check for function calls in the candidates
    const functionCalls = response.candidates?.[0]?.content?.parts?.filter(p => p.functionCall).map(p => p.functionCall);

    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      if (call) {
        const result = calculatePayroll(call.args as any);
        
        const secondResponse = await ai.models.generateContent({
          model,
          contents: [
            ...contents,
            { role: 'model', parts: response.candidates?.[0]?.content?.parts || [] },
            { 
              role: 'user', 
              parts: [{ 
                functionResponse: { 
                  name: 'calculatePayroll', 
                  response: { result } 
                } 
              }] 
            }
          ],
          config: { systemInstruction }
        });

        // Correctly accessing .text property
        return { text: secondResponse.text, payrollData: result };
      }
    }

    // Correctly accessing .text property
    return { text: response.text };
  } catch (err) {
    console.error("Gemini API Error:", err);
    return { text: "Our human experts are best suited for this. Please email concierge@maplepayroll.ca" };
  }
};
