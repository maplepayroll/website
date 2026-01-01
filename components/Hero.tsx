
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
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Business Payroll Management" 
          className="w-full h-full object-cover object-center grayscale-[0.2]"
        />
        {/* Header Legibility Overlay */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/80 to-transparent z-10"></div>
        
        {/* Deep Side Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40"></div>
        
        {/* Subtle Edge Accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 z-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="animate-fade-in-up max-w-5xl">
          <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-[10px] font-black tracking-[0.4em] mb-10 uppercase ring-1 ring-white/20">
            Maple Managed: Your Behind-the-Scenes Team
          </div>
          
          <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase text-balance">
            THE LAST TIME <br/>
            YOU'LL EVER <br/>
            <span className="text-red-600 text-nowrap">WORRY ABOUT PAYROLL.</span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed mb-14 max-w-3xl font-medium text-balance">
            Stop losing your Sunday nights to spreadsheets. Our certified specialists jump in to handle your <span className="text-white">onboarding, departures, and remittances</span> so you can focus on growing your dream. We're the humans behind your payroll.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onNavigate ? onNavigate('signup') : scrollTo('signup')}
              className="group relative inline-flex items-center justify-center px-14 py-6 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-colors overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Let's Chat Payroll</span>
            </button>
            <button 
              onClick={() => onNavigate ? onNavigate('payroll-audit') : scrollTo('scorecard')}
              className="inline-flex items-center justify-center px-14 py-6 bg-white/5 backdrop-blur-xl text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/15 transition-all border border-white/20 hover:border-white/40 cursor-pointer"
            >
              Check Your Setup
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
