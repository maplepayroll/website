
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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M21.92,10.63L20,10.5L20.5,9.5L18.5,8L18,9L15,8L15.5,5.5L14,5.5L13.5,7L12,2L10.5,7L10,5.5L8.5,5.5L9,8L6,9L5.5,8L3.5,9.5L4,10.5L2.08,10.63C1.65,10.68 1.45,11.22 1.8,11.5L4,13.5L3,14.5L5.5,16L6,15L9,16L8,20L11,19V22H13V19L16,20L15,16L18,15L18.5,16L21,14.5L20,13.5L22.2,11.5C22.55,11.22 22.35,10.68 21.92,10.63Z" />
                 </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                MAPLE <span className="text-red-600">PAYROLL</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              We are Canada's premier "Human-in-the-Middle" payroll department. Providing hands-off payroll management for the modern entrepreneur.
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
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-red-500 transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate?.('who-we-serve')} className="hover:text-red-500 transition-colors text-left">Who We Serve</button></li>
              <li><button onClick={() => onNavigate?.('what-we-do')} className="hover:text-red-500 transition-colors text-left">What We Do</button></li>
              <li><button onClick={() => onNavigate?.('why-us')} className="hover:text-red-500 transition-colors text-left">Why Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate?.('resources')} className="hover:text-red-500 transition-colors text-left">Articles</button></li>
              <li><button onClick={() => onNavigate?.('audit')} className="hover:text-red-500 transition-colors text-left">Payroll Audit</button></li>
              <li><button onClick={() => onNavigate?.('calculator')} className="hover:text-red-500 transition-colors text-left">Payroll Calculator</button></li>
              <li><button onClick={() => onNavigate?.('privacy-policy')} className="hover:text-red-500 transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            © 2024 Maple Managed Payroll Services Inc. All rights reserved. Registered Third-Party CRA Submitter.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-xs font-medium">Made with 🍁 in Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
