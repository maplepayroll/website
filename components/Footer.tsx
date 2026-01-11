import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const copyrightYearDisplay = currentYear === 2024 ? "2024" : `2024–${currentYear}`;

  return (
    <footer className="bg-white py-32 border-t border-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M21.1 12.8c0 .1 0 .1-.1.2l-2.4 1.2 1 3-1.8-.8-1.5 2.3-1.3-3.2v-4l-1.3 1.7-1.2-1.7v4l-1.3 3.2-1.5-2.3-1.8.8 1-3-2.4-1.2c-.1-.1-.1-.1-.1-.2.1-.3.5-1.1 1-1.6L5 8.1l2.5.6L7.3 5l2.4 1.5 1.5-3.3 1.5 3.3 2.4-1.5-.2 3.7 2.5-.6-2.6 1.1c.5.5.9 1.3 1 1.6z M11.2 18.5h1.6V22h-1.6v-3.5z" />
                 </svg>
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">MAPLE</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-xs">
              Providing professional concierge payroll services to Canadian growth businesses. Reclaim your time.
            </p>
            <div className="space-y-4">
               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Connect</p>
               <a href="tel:1-416-252-1000" className="block font-black hover:text-red-600 transition-colors uppercase tracking-tight">1 (416) 252-1000</a>
               <a href="mailto:concierge@maplepayroll.ca" className="block font-black hover:text-red-600 transition-colors uppercase tracking-tight">concierge@maplepayroll.ca</a>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                9 AM – 5 PM Client Local Time
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-black text-[10px] text-slate-300 uppercase tracking-[0.2em] mb-10">Strategy</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-red-600 transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate?.('why-us')} className="hover:text-red-600 transition-colors text-left">Who We Are</button></li>
              <li><button onClick={() => onNavigate?.('what-we-do')} className="hover:text-red-600 transition-colors text-left">What We Do</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-red-600 transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => onNavigate?.('survey')} className="text-red-600 hover:text-red-700 transition-colors text-left">Operational Audit</button></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black text-[10px] text-slate-300 uppercase tracking-[0.2em] mb-10">Resources</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest">
              <li><button onClick={() => onNavigate?.('audit')} className="hover:text-red-600 transition-colors text-left">Payroll Audit</button></li>
              <li><button onClick={() => onNavigate?.('calculator')} className="hover:text-red-600 transition-colors text-left">Tax Calculator</button></li>
              <li><button onClick={() => onNavigate?.('resources')} className="hover:text-red-600 transition-colors text-left">Knowledge Hub</button></li>
              <li><button onClick={() => onNavigate?.('key-terms')} className="hover:text-red-600 transition-colors text-left">Glossary</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 bg-slate-50 p-8">
            <h4 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-6">Security & Trust</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
              All data is stored exclusively on secure Canadian servers and is fully PIPEDA compliant.
            </p>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-[10px] font-black">ON</span>
              <span className="w-8 h-8 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-[10px] font-black">BC</span>
              <span className="w-8 h-8 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-[10px] font-black">AB</span>
              <span className="w-8 h-8 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-[10px] font-black">QC</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
            © {copyrightYearDisplay} Maple Managed Payroll Services Inc.
          </p>
          <div className="flex gap-10">
            <button className="text-[10px] font-black text-slate-400 hover:text-red-600 transition-colors uppercase tracking-widest">Privacy</button>
            <button className="text-[10px] font-black text-slate-400 hover:text-red-600 transition-colors uppercase tracking-widest">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;