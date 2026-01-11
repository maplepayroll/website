
import React from 'react';
import { PageType } from '../App';

interface HeroProps {
  onNavigate?: (page: PageType, context?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Visual Background Element - Brighter restaurant kitchen scene */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Restaurant Kitchen Staff" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-slate-900/0 via-slate-900/60 to-slate-900"></div>
      </div>

      {/* Red accent line for consistency with other high-end pages */}
      <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-48">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-1.5 bg-red-600 text-white text-[10px] font-black tracking-[0.4em] mb-12 uppercase shadow-lg shadow-red-900/20">
            MANAGED PAYROLL CONCIERGE
          </div>
          
          <h1 className="text-5xl lg:text-[6.5rem] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase">
            Reclaim your <br/>
            <span className="text-red-600">Business.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-16 max-w-2xl font-medium text-balance">
            Maple is the dedicated payroll department you need. We handle the <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">math, the humans, and the CRA</span>, so you can focus on the vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <button 
              onClick={() => onNavigate ? onNavigate('signup') : scrollTo('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-6 bg-red-600 text-white rounded-none text-sm font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Meet Your Specialist
            </button>
            <button 
              onClick={() => onNavigate ? onNavigate('payroll-audit') : scrollTo('scorecard')}
              className="group flex items-center gap-3 text-slate-400 hover:text-white font-black uppercase tracking-widest text-xs transition-colors"
            >
              Take the Payroll ROI Audit
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-3xl font-black text-white">10h+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Monthly Time Reclaimed</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">CRA Compliance Guarantee</p>
            </div>
            <div className="hidden md:block">
              <p className="text-3xl font-black text-white">9-5</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Local Support Window</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
