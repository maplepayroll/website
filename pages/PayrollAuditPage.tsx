
import React, { useState } from 'react';
import { PageType } from '../App';

interface PayrollAuditPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'results' | 'cta';

const PayrollAuditPage: React.FC<PayrollAuditPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<any>({});

  const next = (answer?: any) => {
    if (answer) {
      setAnswers({ ...answers, [currentStep]: answer });
    }
    
    const sequence: Step[] = ['intro', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'results', 'cta'];
    const currentIndex = sequence.indexOf(currentStep);
    if (currentIndex < sequence.length - 1) {
      setCurrentStep(sequence[currentIndex + 1]);
    }
  };

  const getPainProfile = () => {
    const q1 = parseInt(answers.q1 || "5");
    const q2 = answers.q2 || "";
    const q3 = parseInt(answers.q3 || "0");
    
    if (q1 <= 3 || q3 >= 10) return "The Overwhelmed Administrator";
    if (q2 === "owner") return "The Support Bottleneck";
    return "The High-Risk Compliance Candidate";
  };

  const constructAuditSummary = () => {
    const profile = getPainProfile();
    const hours = answers.q3 || "unknown";
    const questionFriction = answers.q2 === 'owner' ? 'Owner handles T4 questions' : answers.q2 === 'portal' ? 'Employee portal friction' : 'Provider direct';
    
    // This string is parsed by ContactForm.tsx
    return `AUDIT_BRIEF: Profile: ${profile} | Friction: ${questionFriction} | Time Loss: ${hours} hrs/mo`;
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'q1':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              1. How "hands-off" is your current payroll process?
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                <button 
                  key={val}
                  onClick={() => next(val)}
                  className="w-full text-left p-4 border border-slate-200 hover:border-red-600 hover:bg-red-50 transition-all flex items-center justify-between group"
                >
                  <span className="font-bold text-slate-700">{val} — {val <= 3 ? "I do everything" : val >= 8 ? "I don't even think about it" : "Somewhere in between"}</span>
                  <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">Select →</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'q2':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              2. When an employee has a question about a deduction or their T4, what is the first thing they do?
            </h2>
            <div className="grid gap-4">
              {[
                { id: 'portal', label: 'They log into the payroll portal.', icon: '💻' },
                { id: 'owner', label: 'They ask me / my office manager.', icon: '👤' },
                { id: 'provider', label: 'They call the payroll provider directly.', icon: '📞' }
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => next(opt.id)}
                  className="p-8 border border-slate-200 bg-white text-left hover:border-red-600 hover:shadow-xl transition-all group"
                >
                  <span className="text-3xl mb-4 block">{opt.icon}</span>
                  <span className="font-bold text-xl text-slate-900 block">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'q3':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              3. Roughly how many hours a month do you spend resolving payroll issues?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { val: 1, label: 'Less than 1 hour' },
                { val: 3, label: '1 - 4 hours' },
                { val: 7, label: '5 - 10 hours' },
                { val: 15, label: '10+ hours' }
              ].map(opt => (
                <button 
                  key={opt.val}
                  onClick={() => next(opt.val)}
                  className="p-10 border border-slate-200 bg-white text-center hover:border-red-600 transition-all font-black uppercase tracking-widest text-slate-900"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'q4':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              4. When was the last time you felt anxious about a CRA filing or a deadline?
            </h2>
            <div className="grid gap-4">
              {[
                { id: 'recent', label: 'Within the last 30 days.' },
                { id: 'year', label: 'Last year-end (T4 season).' },
                { id: 'never', label: 'I never worry, I trust my system.' }
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => next(opt.id)}
                  className="p-6 border border-slate-200 bg-white text-left hover:border-red-600 transition-all font-bold text-slate-800"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'q5':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              5. If you have a problem, how long does it take to reach a human who actually knows your business?
            </h2>
            <div className="grid gap-4">
              {[
                { id: 'instant', label: 'Instantly (Personal contact).' },
                { id: 'hours', label: 'A few hours (Ticketing).' },
                { id: 'days', label: 'Days (Call centre queues).' },
                { id: 'unknown', label: 'I have no idea who my contact is.' }
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => next(opt.id)}
                  className="p-6 border border-slate-200 bg-white text-left hover:border-red-600 transition-all font-bold text-slate-800"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'q6':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
              6. Final Thought: If you could never hear a payroll-related question again, would you be willing to pay more for it?
            </h2>
            <div className="grid gap-4">
              {[
                { id: 'yes', label: 'Yes, whatever it takes to reclaim my time.' },
                { id: 'maybe', label: 'Depending on the cost/benefit.' },
                { id: 'no', label: 'No, I prefer saving money over saving time.' }
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => next(opt.id)}
                  className="p-10 border border-slate-200 bg-white text-center hover:border-red-600 transition-all font-black uppercase tracking-widest text-slate-900"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'results':
        const profile = getPainProfile();
        return (
          <div className="animate-in zoom-in-95 duration-700">
            <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-4">Diagnosis Complete</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
              Your Pain Profile: <br/>
              <span className="text-red-600">{profile}</span>
            </h3>
            
            <div className="bg-slate-900 p-10 text-white mb-12 border-l-8 border-red-600">
               <p className="text-lg font-medium leading-relaxed mb-6">
                 Based on your answers, your current payroll setup is acting as a <strong>time-leak</strong> in your business. {
                   profile === "The Support Bottleneck" 
                   ? "You are currently the 'Human-in-the-Middle' answering questions that an expert concierge should be handling." 
                   : "Your administrative burden is high because your 'software' isn't actually a service—it's just a tool you have to operate yourself."
                 }
               </p>
               <div className="space-y-4">
                 <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Recommended Action:</p>
                 <ul className="space-y-2">
                   <li className="flex items-center gap-3 text-sm font-bold">
                     <span className="text-red-500">→</span> Transition to Direct Employee Support to reclaim 5+ hours/month.
                   </li>
                   <li className="flex items-center gap-3 text-sm font-bold">
                     <span className="text-red-500">→</span> Implement a Compliance Guarantee to eliminate CRA anxiety.
                   </li>
                 </ul>
               </div>
            </div>

            <button 
              onClick={() => setCurrentStep('cta')}
              className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-200"
            >
              Get My Full Audit Report
            </button>
          </div>
        );

      case 'cta':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Let's solve this <br/> in <span className="text-red-600">15 minutes.</span></h2>
             <p className="text-xl text-slate-600 mb-12 font-medium">
               Book a discovery call to review your audit results. We'll show you exactly how Maple can act as your "External Payroll Department" so you never have to log into a portal again.
             </p>
             <button 
                onClick={() => onNavigate('home', constructAuditSummary())}
                className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl"
              >
                Schedule Consultation
              </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {currentStep === 'intro' ? (
        // Standardized Hero Section
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000" 
              alt="Payroll Audit" 
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
                Free 2-Minute Diagnostic
              </div>
              <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
                Is Your Payroll <br/>
                <span className="text-red-500">Actually Managed?</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10 max-w-xl">
                 Most "managed" services still leave the hard work to you. Take this quick audit to find the friction points costing you time and money.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => next()}
                  className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
                >
                  Begin Frustration Audit
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Active Audit with Dark Header
        <div className="min-h-screen flex flex-col">
          {/* Header Section for Audit Steps */}
          <section className="bg-slate-900 pt-32 pb-16 px-4 relative overflow-hidden">
             {/* Background elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800"></div>

             <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                   <div>
                     <button onClick={() => onNavigate('home')} className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-red-600 transition-colors mb-4 block">Home / Diagnostic</button>
                     <h1 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter">
                       {currentStep === 'results' || currentStep === 'cta' ? 'Audit Complete' : 'Diagnostic In Progress'}
                     </h1>
                   </div>
                   
                   {/* Progress Indicator */}
                   {currentStep !== 'results' && currentStep !== 'cta' && (
                     <div className="min-w-[200px]">
                       <div className="flex justify-between items-end mb-3">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                           Step {Object.keys(answers).length + 1} of 6
                         </p>
                         <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">
                           {Math.round((Object.keys(answers).length / 6) * 100)}%
                         </p>
                       </div>
                       <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                           className="h-full bg-red-600 transition-all duration-500" 
                           style={{ width: `${(Object.keys(answers).length / 6) * 100}%` }}
                          />
                       </div>
                     </div>
                   )}
                </div>
             </div>
          </section>

          {/* Content Section */}
          <div className="flex-grow bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollAuditPage;
