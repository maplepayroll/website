
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Business Payroll Management" 
          className="w-full h-full object-cover object-center grayscale-[0.2]"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40"></div>
        {/* Subtle Edge Accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 z-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="animate-fade-in-up max-w-5xl">
          <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-[10px] font-black tracking-[0.4em] mb-10 uppercase shadow-2xl shadow-red-900/40 ring-1 ring-white/20">
            🇨🇦 Elite Canadian Payroll Concierge
          </div>
          
          <h1 className="text-5xl lg:text-[7rem] font-black text-white leading-[0.88] mb-10 tracking-tighter uppercase text-balance">
            THE LAST <br/>
            <span className="text-red-600">PAYROLL DEPT</span> <br/>
            YOU’LL EVER NEED.
          </h1>
          
          <p className="text-xl lg:text-3xl text-slate-300 leading-relaxed mb-14 max-w-2xl font-medium text-balance">
            We are not a software company. We are a professional service team that manages your employees, handles the CRA, and grants you back <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">10+ hours</span> every month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-14 py-6 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] overflow-hidden"
            >
              <span className="relative z-10">Talk to an Expert</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#scorecard" 
              className="inline-flex items-center justify-center px-14 py-6 bg-white/5 backdrop-blur-xl text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/15 transition-all border border-white/20 hover:border-white/40 shadow-2xl"
            >
              Audit Your Provider
            </a>
          </div>
          
          <div className="mt-20 flex items-center gap-6 opacity-60">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Client" />
               ))}
             </div>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
               Trusted by 800+ Canadian Businesses
             </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
