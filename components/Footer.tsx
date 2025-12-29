
import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center shadow-xl shadow-red-600/20">
                 <svg className="w-8 h-8 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M23.3,11.5L20,10.7L20.4,7L17,8L15,4L13,8L12,1L11,8L9,4L7,8L3.6,7L4,10.7L0.7,11.5L3,14L0,15L5,16L4.5,21L8,19L11,23L13,19L16.5,21L16,16L21,15L18,14L23.3,11.5Z" />
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
            © 2025 Maple Managed Payroll Services Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
