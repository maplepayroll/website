
import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import { calculatePayroll } from "./payrollCalculator";

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
      income: { 
        type: Type.NUMBER,
        description: "The gross income amount to calculate." 
      },
      payType: { 
        type: Type.STRING, 
        description: "The type of pay: 'annual' or 'hourly'." 
      },
      province: { 
        type: Type.STRING,
        description: "The Canadian province for calculation (e.g., 'Ontario')."
      },
      year: { 
        type: Type.NUMBER, 
        description: "The tax year to calculate for. Defaults to 2026." 
      },
      frequency: { 
        type: Type.STRING,
        description: "Pay frequency (e.g., 'biweekly', 'monthly')."
      }
    },
    required: ["income"]
  }
};

export const getPayrollAdvice = async (history: any[], userPrompt: string): Promise<ChatResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return { text: "The Maple Concierge is currently offline. Please reach out to us at concierge@maplepayroll.ca for direct assistance." };
  }

  // Create a new instance right before making an API call to ensure latest key usage
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are the Maple Managed Payroll AI Concierge.
  Maple is an elite Canadian professional service firm.
  Be professional, warm, and highly accurate.
  Always use the 'calculatePayroll' tool for any math or payroll projection requests.
  Prioritize the 2026 tax year for all current calculations and advice unless the user specifically asks for another year.
  Never use Markdown stars (* or **) in your output. Plain text only.
  Canadian spelling only. Focus on peace of mind, trust, and total compliance.`;

  const model = 'gemini-3-pro-preview';
  
  try {
    // Correctly map history to Gemini-compliant roles
    const contents: any[] = history.map(m => ({ 
      role: m.role === 'user' ? 'user' : 'model', 
      parts: [{ text: m.text }] 
    }));
    
    // Add the current user request
    contents.push({ role: 'user', parts: [{ text: userPrompt }] });

    const response = await ai.models.generateContent({
      model,
      contents,
      config: { 
        tools: [{ functionDeclarations: [payrollTool] }], 
        systemInstruction,
        thinkingConfig: { thinkingBudget: 4000 }
      }
    });

    // Check for tool calls using the recommended getter
    const calls = response.functionCalls;
    
    if (calls && calls.length > 0) {
      const call = calls[0];
      
      // Execute the local logic
      const args = { ...call.args, year: (call.args as any).year || 2026 };
      const result = calculatePayroll(args as any);
      
      // Crucial: Create the follow-up request with the mandatory tool response format (including ID)
      const secondResponse = await ai.models.generateContent({
        model,
        contents: [
          ...contents,
          { role: 'model', parts: response.candidates?.[0]?.content?.parts || [] },
          { 
            role: 'user', 
            parts: [{ 
              functionResponse: { 
                id: call.id, // Mandatory for stateful tool usage
                name: call.name, 
                response: { result } 
              } 
            }] 
          }
        ],
        config: { systemInstruction }
      });

      return { 
        text: secondResponse.text || "I have calculated those values for you below based on the current 2026 standards.", 
        payrollData: result 
      };
    }

    // Direct text response using the recommended getter
    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("Received empty response from the concierge engine.");
    }
    
    return { text: textOutput };
  } catch (err) {
    console.error("Maple Concierge Execution Error:", err);
    return { 
      text: "I encountered a minor technical hurdle. Please try again in a moment or contact our human specialists at concierge@maplepayroll.ca." 
    };
  }
};
