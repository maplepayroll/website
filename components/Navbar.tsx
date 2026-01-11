
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Who We Are', id: 'why-us' },
    { label: 'What We Do', id: 'what-we-do' },
  ];

  const handleMobileNav = (id: PageType) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-white border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div 
            onClick={() => handleMobileNav('home')} 
            className="flex items-center gap-3 group cursor-pointer relative z-[70]"
          >
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110">
               <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M21.1 12.8c0 .1 0 .1-.1.2l-2.4 1.2 1 3-1.8-.8-1.5 2.3-1.3-3.2v-4l-1.3 1.7-1.2-1.7v4l-1.3 3.2-1.5-2.3-1.8.8 1-3-2.4-1.2c-.1-.1-.1-.1-.1-.2.1-.3.5-1.1 1-1.6L5 8.1l2.5.6L7.3 5l2.4 1.5 1.5-3.3 1.5 3.3 2.4-1.5-.2 3.7 2.5-.6-2.6 1.1c.5.5.9 1.3 1 1.6z M11.2 18.5h1.6V22h-1.6v-3.5z" />
               </svg>
            </div>
            <span className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`}>
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
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors relative z-[70] ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-700 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        {/* Explicit Close Button in Overlay Top Right */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-4 text-slate-400 hover:text-red-600 transition-colors z-[80]"
          aria-label="Close menu overlay"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" />
          </svg>
        </button>

        <div className="h-full w-full flex flex-col justify-center items-center px-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
          
          <nav className="flex flex-col gap-8 text-center relative z-10">
            {navLinks.map((link, idx) => (
              <button 
                key={link.id}
                onClick={() => handleMobileNav(link.id)}
                className={`font-black text-4xl sm:text-6xl uppercase tracking-tighter transition-all duration-300 hover:text-red-600 ${currentPage === link.id ? 'text-red-600' : 'text-slate-900'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleMobileNav('employer-portal')}
              className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-slate-400 hover:text-slate-900 transition-all duration-300"
            >
              Client Login
            </button>
            
            <div className="mt-12 flex flex-col gap-4">
              <button 
                onClick={() => handleMobileNav('signup')}
                className="bg-red-600 text-white font-black px-12 py-6 text-xl uppercase tracking-widest shadow-2xl shadow-red-200 active:scale-95 transition-all"
              >
                Sign Up Now
              </button>
              <button 
                onClick={() => handleMobileNav('resources')}
                className="text-slate-400 font-black uppercase text-xs tracking-widest hover:text-slate-900 transition-colors"
              >
                Browse Resources
              </button>
            </div>
          </nav>

          <div className="absolute bottom-12 text-center">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Dedicated Support</p>
            <p className="text-sm font-bold text-slate-900">1 (416) 252-1000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
