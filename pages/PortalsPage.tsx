
import React from 'react';
import { PageType } from '../App';

interface PortalsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PortalsPage: React.FC<PortalsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Secure Portal Access" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-black tracking-[0.2em] mb-8 uppercase shadow-lg">
              Secure Access Hub
            </div>
            <h1 className="text-4xl lg:text-[5rem] font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              CLIENT <br/>
              <span className="text-red-500">PORTALS</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl">
              Access your proprietary Maple dashboard to view compliance details, communicate with your specialist, and manage your account settings.
            </p>
          </div>
        </div>
      </section>

      {/* Access Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Employer Card */}
          <div className="bg-slate-50 border border-slate-200 p-12 lg:p-20 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6 text-center lg:text-left">Administrative</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter text-center lg:text-left">Employer Portal</h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium text-center lg:text-left">
              Securely access your Maple Client Hub. Manage your business details, view upcoming pay run schedules, and connect directly with your dedicated Concierge.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => onNavigate('employer-portal')}
                className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-xl"
              >
                Login to Maple Hub
              </button>
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mt-6">
                Need access? <button onClick={() => onNavigate('home', 'Portal Access Request')} className="text-red-600 hover:underline">Request account setup</button>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="text-4xl">🛡️</div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-1">Bank-Grade Security</p>
                <p className="text-slate-500 text-xs font-medium">All data is processed via 256-bit encrypted secure channels.</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="text-4xl">🍁</div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-1">PIPEDA Compliant</p>
                <p className="text-slate-500 text-xs font-medium">Data resides on secure Canadian servers at all times.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Need help logging in?</h4>
            <p className="text-slate-600 mb-10 font-medium">
              If you have forgotten your password or cannot find your specific portal link, please contact your dedicated Maple specialist or our central support desk.
            </p>
            <button 
              onClick={() => onNavigate('home', 'Portal Login Assistance')}
              className="px-12 py-5 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Support Desk
            </button>
         </div>
      </section>
    </div>
  );
};

export default PortalsPage;
