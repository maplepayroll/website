
import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import { calculatePayroll } from "./payrollCalculator";

// Always initialize the GoogleGenAI instance with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const payrollTool: FunctionDeclaration = {
  name: "calculatePayroll",
  parameters: {
    type: Type.OBJECT,
    description: "Calculate estimated net pay and deductions for Canadian payroll based on user inputs.",
    properties: {
      income: { type: Type.NUMBER, description: "The annual salary amount or hourly wage." },
      payType: { type: Type.STRING, description: "Either 'annual' or 'hourly'. Default is annual." },
      province: { type: Type.STRING, description: "The Canadian province (e.g. Ontario, British Columbia). Default is Ontario." },
      year: { type: Type.NUMBER, description: "The tax year (2024, 2025). Default is 2024." },
      frequency: { type: Type.STRING, description: "Pay frequency: 'annual', 'monthly', 'biweekly', or 'weekly'. Default is biweekly." },
      hoursPerWeek: { type: Type.NUMBER, description: "Hours worked per week (only if hourly). Default is 40." }
    },
    required: ["income"]
  }
};

export interface ChatResponse {
  text: string;
  payrollData?: ReturnType<typeof calculatePayroll>;
}

export interface HistoryMessage {
  role: 'user' | 'bot';
  text: string;
}

export const getPayrollAdvice = async (history: HistoryMessage[], userPrompt: string): Promise<ChatResponse> => {
  if (!process.env.API_KEY) {
    return { text: "Our concierge is currently taking a coffee break. Please contact our human experts directly!" };
  }

  const systemInstruction = `You are the Maple Managed Payroll AI Assistant, an elite concierge for Canadian business owners.
  Maple is a HIGH-END PROFESSIONAL SERVICE COMPANY, not a software company.
  
  YOUR MISSION:
  - Demonstrate deep empathy for business owners who are overwhelmed by admin.
  - Explain the "Human-in-the-Middle" advantage: software handles the math, humans handle the exceptions and the support.
  - Use the 'calculatePayroll' tool for any numbers-related query.
  - After calling the tool, provide a very warm, concise response. 
  
  CONSTRAINTS:
  - Never mention technical details of how you work.
  - Keep responses punchy and professional.
  - Use Canadian spelling (e.g., labour, cheque).
  - Use plain text only (NO Markdown, NO asterisks, NO bolding with stars).
  - Focus on reliability and compliance peace of mind.`;

  try {
    // Upgrading to Pro for better reasoning on payroll complexities
    const model = 'gemini-3-pro-preview';
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });
    
    const response = await ai.models.generateContent({
      model,
      contents: contents,
      config: {
        tools: [{ functionDeclarations: [payrollTool] }],
        systemInstruction,
        // Adding a thinking budget to ensure calculations and reasoning are rock solid
        thinkingConfig: { thinkingBudget: 4000 }
      }
    });

    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      if (call.name === 'calculatePayroll') {
        const args = call.args as any;
        const result = calculatePayroll(args);
        
        const secondResponse = await ai.models.generateContent({
          model,
          config: { systemInstruction },
          contents: [
            ...contents,
            { role: 'model', parts: response.candidates?.[0]?.content?.parts || [] },
            { 
              role: 'function', 
              parts: [{ 
                functionResponse: {
                  name: 'calculatePayroll',
                  response: { result: result }
                }
              }] 
            }
          ]
        });
        
        return {
          text: secondResponse.text || "I have prepared that breakdown for you below.",
          payrollData: result
        };
      }
    }

    return { text: response.text || "I'm here to help with your payroll questions. Could you please provide more details?" };

  } catch (error) {
    console.error("Maple AI Error:", error);
    return { text: "Our systems are experiencing a heavy load of accuracy. Please reach out to our human specialists at concierge@maplepayroll.ca for immediate assistance." };
  }
};
