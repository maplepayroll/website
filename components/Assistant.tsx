
import React, { useState, useRef, useEffect } from 'react';
import { getPayrollAdvice, ChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
  payrollData?: any; 
}

const CHAT_STORAGE_KEY = 'maple_concierge_history';

const SUGGESTED_PROMPTS = [
  { label: "🧮 Calculate Pay", text: "Calculate biweekly payroll for an Ontario employee earning $75,000 annually in 2026." },
  { label: "🍁 2026 Rates", text: "What are the 2026 CPP and EI rates?" },
  { label: "🏖️ Vacation Pay", text: "Explain how vacation pay works on year-end bonuses for the 2026 cycle." },
  { label: "🛡️ EHT Thresholds", text: "What is the BC EHT threshold for 2026?" },
  { label: "📄 ROE Handling", text: "How does Maple handle ROE filings?" },
  { label: "🤝 Onboarding", text: "Tell me about your Managed Onboarding service." }
];

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello. I am the Maple Concierge. How can I help reclaim your time today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load history on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
  }, []);

  // Save history on change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (forcedText?: string) => {
    const userMsg = forcedText || input;
    if (!userMsg.trim() || isTyping) return;
    
    setInput("");
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const botResponse: ChatResponse = await getPayrollAdvice(messages, userMsg);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: botResponse.text || "I apologize, I am having trouble processing that request. Please try again or contact our human experts.",
        payrollData: botResponse.payrollData 
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I encountered a minor calculation hurdle. Our human experts are always available to help directly!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearHistory = () => {
    const initialMessage: Message[] = [{ role: 'bot', text: "History cleared. How else can I help reclaim your time today?" }];
    setMessages(initialMessage);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-[380px] sm:w-[420px] h-[600px] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out">
          {/* Header */}
          <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
                <svg className="w-7 h-7 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.1 12.8c0 .1 0 .1-.1.2l-2.4 1.2 1 3-1.8-.8-1.5 2.3-1.3-3.2v-4l-1.3 1.7-1.2-1.7v4l-1.3 3.2-1.5-2.3-1.8.8 1-3-2.4-1.2c-.1-.1-.1-.1-.1-.2.1-.3.5-1.1 1-1.6L5 8.1l2.5.6L7.3 5l2.4 1.5 1.5-3.3 1.5 3.3 2.4-1.5-.2 3.7 2.5-.6-2.6 1.1c.5.5.9 1.3 1 1.6z M11.2 18.5h1.6V22h-1.6v-3.5z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-widest">Maple Concierge</p>
                <div className="flex items-center gap-3">
                  <p className="text-[10px] text-red-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Support Active
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={clearHistory}
                title="Clear Chat History"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-red-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'}`}>
                  {m.text.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line.trim() !== "" ? <p className="mb-2 last:mb-0">{line}</p> : <div className="h-2"/>}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Payroll Data Card */}
                {m.payrollData && (
                  <div className="mt-4 bg-white rounded-[1.5rem] border border-slate-200 shadow-xl w-full max-w-[90%] overflow-hidden border-t-4 border-t-red-600 animate-in zoom-in-95 duration-500">
                    <div className="bg-slate-900 p-6 text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Estimated Net Pay</p>
                      <p className="text-4xl font-black text-white tracking-tighter">{m.payrollData.netPay}</p>
                      <p className="text-xs font-bold text-red-500 mt-2 uppercase tracking-widest">/ {m.payrollData.frequency}</p>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400 uppercase tracking-widest">Gross Income</span>
                        <span className="font-black text-slate-900">{m.payrollData.grossPay}</span>
                      </div>
                      
                      <div className="h-px bg-slate-100"></div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-400 uppercase tracking-widest">Federal Tax</span>
                          <span className="font-bold text-red-500">-{m.payrollData.deductions.fedTax}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-400 uppercase tracking-widest">Provincial Tax</span>
                          <span className="font-bold text-red-500">-{m.payrollData.deductions.provTax}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-400 uppercase tracking-widest">CPP (Base)</span>
                          <span className="font-bold text-red-500">-{m.payrollData.deductions.cppBase}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-400 uppercase tracking-widest">CPP2 (Enhanced)</span>
                          <span className="font-bold text-red-500">-{m.payrollData.deductions.cpp2}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-400 uppercase tracking-widest">EI Premium</span>
                          <span className="font-bold text-red-500">-{m.payrollData.deductions.ei}</span>
                        </div>
                      </div>
                      
                      <div className="h-px bg-slate-100"></div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-black text-slate-900 text-[10px] uppercase tracking-[0.2em]">Total Deductions</span>
                        <span className="font-black text-red-600 text-sm">-{m.payrollData.deductions.totalDeductions}</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic leading-tight">
                        *Professional estimate only. Final values subject to provincial claim codes and deductions.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Suggested Prompts Section - Shown when conversation has just started */}
            {messages.length <= 1 && !isTyping && (
              <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">Things you can ask me:</p>
                <div className="grid grid-cols-2 gap-2">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt.text)}
                      className="text-left p-3 bg-white border border-slate-200 rounded-2xl text-[11px] font-bold text-slate-600 hover:border-red-600 hover:bg-red-50 transition-all group"
                    >
                      <span className="block mb-1 group-hover:text-red-600 transition-colors">{prompt.label}</span>
                      <span className="text-[9px] font-medium text-slate-400 line-clamp-1 group-hover:text-slate-500">"{prompt.text}"</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can we help?" 
                className="w-full pl-6 pr-14 py-4 bg-white border border-slate-200 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all shadow-sm"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 active:scale-90 disabled:opacity-50 disabled:scale-100"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-[10px] text-center font-bold text-slate-300 uppercase tracking-widest">
              Secure & Confidential Payroll Assistant
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-18 h-18 bg-red-600 text-white rounded-3xl shadow-[0_20px_40px_rgba(220,38,38,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative p-5"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default Assistant;
