
import React from 'react';
import { PageType } from '../App';

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const resources = [
    {
      title: "How Vacation Pay Actually Works",
      category: "Compliance Guide",
      desc: "The definitive guide to 'Time Off' vs 'Vacation Pay' and the compliance traps regarding commissions and bonuses.",
      link: 'vacation-pay-article',
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Filing Deadlines",
      category: "Compliance Calendar",
      desc: "Never miss a remittance. A complete schedule of T4, RL-1, EHT, and WSIB deadlines for Canadian businesses.",
      link: 'cra-deadlines',
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800",
      readTime: "Reference",
      featured: false
    },
    {
      title: "Payroll Deductions Calculator",
      category: "Tool",
      desc: "Estimate net pay, CPP, EI, and income tax deductions for salaried and hourly employees in any province.",
      link: 'calculator',
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      readTime: "Interactive",
      featured: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero - Standardized to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Resources" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
             <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Knowledge Base
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Payroll <br/>
              <span className="text-red-500">Resources</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Expert guides, tools, and compliance calendars to help you navigate the complexities of Canadian employment law.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Subscribe to Alerts
              </button>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((res, i) => (
            <div key={i} onClick={() => onNavigate(res.link as PageType)} className={`group cursor-pointer border ${res.featured ? 'border-red-600 ring-4 ring-red-50' : 'border-slate-100'} bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative`}>
              {res.featured && (
                <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                  Featured Guide
                </div>
              )}
              <div className="overflow-hidden h-64 relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">
                  {res.category}
                </div>
                <img src={res.image} alt={res.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">{res.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{res.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{res.readTime}</span>
                  <span className="text-red-600 font-bold text-sm group-hover:translate-x-2 transition-transform">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter / CTA */}
       <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Don't miss a compliance update</h2>
          <p className="text-lg text-slate-600 mb-10">Join 5,000+ Canadian business owners who receive our monthly "Plain English" payroll alerts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-500" />
            <button className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-black transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
