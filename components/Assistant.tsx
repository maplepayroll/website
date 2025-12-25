
import React, { useState, useRef, useEffect } from 'react';
import { getPayrollAdvice, ChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
  payrollData?: any; 
}

const CHAT_STORAGE_KEY = 'maple_concierge_history';

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

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput("");
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const botResponse = await getPayrollAdvice(messages, userMsg);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: botResponse.text,
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
              <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-red-900/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.92,10.63L20,10.5L20.5,9.5L18.5,8L18,9L15,8L15.5,5.5L14,5.5L13.5,7L12,2L10.5,7L10,5.5L8.5,5.5L9,8L6,9L5.5,8L3.5,9.5L4,10.5L2.08,10.63C1.65,10.68 1.45,11.22 1.8,11.5L4,13.5L3,14.5L5.5,16L6,15L9,16L8,20L11,19V22H13V19L16,20L15,16L18,15L18.5,16L21,14.5L20,13.5L22.2,11.5C22.55,11.22 22.35,10.68 21.92,10.63Z" />
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
                        <span className="font-black text-red-600 text-sm">-{m.payrollData.totalDeductions}</span>
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
                className="w-full pl-6 pr-14 py-4 bg-slate-100 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all border border-transparent focus:border-slate-200"
              />
              <button 
                onClick={handleSend}
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
