
import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const copyrightYearDisplay = currentYear === 2024 ? "2024" : `2024–${currentYear}`;

  return (
    <footer className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center shadow-xl shadow-red-600/20">
                 <svg className="w-8 h-8 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M21.1 12.8c0 .1 0 .1-.1.2l-2.4 1.2 1 3-1.8-.8-1.5 2.3-1.3-3.2v-4l-1.3 1.7-1.2-1.7v4l-1.3 3.2-1.5-2.3-1.8.8 1-3-2.4-1.2c-.1-.1-.1-.1-.1-.2.1-.3.5-1.1 1-1.6L5 8.1l2.5.6L7.3 5l2.4 1.5 1.5-3.3 1.5 3.3 2.4-1.5-.2 3.7 2.5-.6-2.6 1.1c.5.5.9 1.3 1 1.6z M11.2 18.5h1.6V22h-1.6v-3.5z" />
                 </svg>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                MAPLE<span className="text-red-600">PAYROLL</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              In addition to doing your payroll, we manage onboarding, leaves, and terminations - freeing you up to focus on your business.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:1-416-252-1000" className="text-lg font-bold text-white hover:text-red-500 transition-colors">
                1 (416) 252-1000
              </a>
              <a href="mailto:concierge@maplepayroll.ca" className="text-slate-400 hover:text-white transition-colors font-medium">
                concierge@maplepayroll.ca
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-tight">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-red-500 transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate?.('why-us')} className="hover:text-red-500 transition-colors text-left">Who We Are</button></li>
              <li><button onClick={() => onNavigate?.('what-we-do')} className="hover:text-red-500 transition-colors text-left">What We Do</button></li>
              <li><button onClick={() => onNavigate?.('who-we-serve')} className="hover:text-red-500 transition-colors text-left">Who We Serve</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-red-500 transition-colors text-left">Pricing & Tiers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-tight">
              <li><button onClick={() => onNavigate?.('audit')} className="hover:text-red-500 transition-colors text-left">Payroll Audit</button></li>
              <li><button onClick={() => onNavigate?.('key-terms')} className="hover:text-red-500 transition-colors text-left">Glossary of Terms</button></li>
              <li><button onClick={() => onNavigate?.('calculator')} className="hover:text-red-500 transition-colors text-left">Payroll Calculator</button></li>
              <li><button onClick={() => onNavigate?.('resources')} className="hover:text-red-500 transition-colors text-left">Knowledge Hub</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            © {copyrightYearDisplay} Maple Managed Payroll Services Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
