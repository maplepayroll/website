
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Who We Are', id: 'why-us' },
    { label: 'What We Do', id: 'what-we-do' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-red-600 flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110">
             <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
               <path d="M23.3,11.5L20,10.7L20.4,7L17,8L15,4L13,8L12,1L11,8L9,4L7,8L3.6,7L4,10.7L0.7,11.5L3,14L0,15L5,16L4.5,21L8,19L11,23L13,19L16.5,21L16,16L21,15L18,14L23.3,11.5Z" />
             </svg>
          </div>
          <span className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
            MAPLE<span className="text-red-600">PAYROLL</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => onNavigate(link.id)} 
              className={`text-sm font-black uppercase tracking-widest transition-all relative py-2 group ${scrolled ? (currentPage === link.id ? 'text-red-600' : 'text-slate-600 hover:text-red-600') : (currentPage === link.id ? 'text-white' : 'text-white/70 hover:text-white')}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          
          <div className="flex items-center gap-5 pl-6 border-l border-slate-200/20">
            <button 
              onClick={() => onNavigate('employer-portal')}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-900 hover:text-red-600' : 'text-white hover:text-white/80'}`}
            >
              Login
            </button>
            <span className={`h-4 w-px ${scrolled ? 'bg-slate-300' : 'bg-white/30'}`}></span>
            <button 
              onClick={() => onNavigate('signup')} 
              className={`px-6 py-3 rounded-none text-xs font-black uppercase tracking-widest transition-all ${scrolled ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-slate-900 hover:bg-slate-50'}`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 py-8 px-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => { onNavigate(link.id); setMobileMenuOpen(false); }}
              className={`text-left py-4 px-6 font-black text-xl uppercase tracking-tighter ${currentPage === link.id ? 'bg-red-50 text-red-600' : 'text-slate-900 border-b border-slate-50'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('employer-portal'); setMobileMenuOpen(false); }}
            className="text-left py-4 px-6 font-black text-xl uppercase tracking-tighter text-slate-900 border-b border-slate-50"
          >
            Client Login
          </button>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <button 
              onClick={() => { onNavigate('signup'); setMobileMenuOpen(false); }}
              className="bg-red-600 text-white font-black py-5 text-lg uppercase tracking-widest"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
