
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = (page: PageType) => `
    text-sm font-bold transition-all relative py-2
    ${scrolled 
      ? (currentPage === page ? 'text-red-600' : 'text-slate-600 hover:text-red-600') 
      : (currentPage === page ? 'text-white' : 'text-white/80 hover:text-white')}
  `;

  const underlineClass = (page: PageType) => `
    absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300
    ${currentPage === page ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
  `;

  const handleMobileNavigate = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Who We Serve', id: 'who-we-serve' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Calculator', id: 'calculator' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white shadow-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className={`w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${scrolled || mobileMenuOpen ? 'shadow-red-600/20' : 'shadow-none'}`}>
               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M21.92,10.63L20,10.5L20.5,9.5L18.5,8L18,9L15,8L15.5,5.5L14,5.5L13.5,7L12,2L10.5,7L10,5.5L8.5,5.5L9,8L6,9L5.5,8L3.5,9.5L4,10.5L2.08,10.63C1.65,10.68 1.45,11.22 1.8,11.5L4,13.5L3,14.5L5.5,16L6,15L9,16L8,20L11,19V22H13V19L16,20L15,16L18,15L18.5,16L21,14.5L20,13.5L22.2,11.5C22.55,11.22 22.35,10.68 21.92,10.63Z" />
               </svg>
            </div>
            <span className={`font-black text-xl tracking-tighter transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
              MAPLE <span className="text-red-600">PAYROLL</span>
            </span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => onNavigate(link.id)} className={`group ${navItemClass(link.id)}`}>
              {link.label}
              <span className={underlineClass(link.id)}></span>
            </button>
          ))}
          <button 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className={`
              px-6 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95
              ${scrolled 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700' 
                : 'bg-white text-slate-900 shadow-xl shadow-black/10 hover:bg-slate-50'}
            `}
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || mobileMenuOpen ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleMobileNavigate(link.id)}
              className={`text-left px-4 py-3 rounded-lg font-bold text-lg ${currentPage === link.id ? 'bg-red-50 text-red-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
             onClick={() => {
              handleMobileNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className="mt-2 w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 active:scale-95 transition-transform"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
