
import React from 'react';
import { PageType } from '../App';

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const resources = [
    {
      title: "What Are the 2026 Payroll Changes for Maximums & Contributions?",
      category: "Compliance Alert",
      desc: "A detailed breakdown of the new YMPE, CPP2 (YAMPE), and EI limits effective Jan 1, 2026, driven by wage growth adjustments.",
      link: 'payroll-2026-changes',
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      featured: true
    },
    {
      title: "What Are The Rules in Canada for Breaks and Eating Periods?",
      category: "Employment Standards",
      desc: "Distinguishing between the 30-minute unpaid meal break and the paid coffee break. What are your actual legal obligations?",
      link: 'breaks-and-eating-periods',
      image: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "When Are the 2026 Canadian Public Holidays?",
      category: "Compliance Tool",
      desc: "A complete provincial breakdown of statutory vs. civic holidays for 2026, including Remembrance Day rules.",
      link: 'public-holidays-2026',
      image: "https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?auto=format&fit=crop&q=80&w=800",
      readTime: "Reference",
      featured: false
    },
    {
      title: "Do You Need a Payroll Software or a Payroll Department?",
      category: "Decision Support",
      desc: "Our definitive guide to selecting a partner, including self-assessment questions and the 'Must-Ask' checklist for small businesses.",
      link: 'buyer-guide',
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "What is the best Payroll Software in Canada? (2025)",
      category: "Software Review",
      desc: "An alphabetical comparison of the 12 top Canadian payroll providers, from Wave to UKG, with Maple Concierge insights.",
      link: 'best-payroll-software',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Canadian Payroll Glossary: Key Terms Defined",
      category: "Educational",
      desc: "From BPA to YMPE, we define the essential acronyms and terms every Canadian employer needs to know.",
      link: 'key-terms',
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "How Does Vacation Pay Actually Work?",
      category: "Compliance Guide",
      desc: "The definitive guide to 'Time Off' vs 'Vacation Pay' and the compliance traps regarding commissions and bonuses.",
      link: 'vacation-pay-article',
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Which Employee Perks Are Taxable Benefits?",
      category: "Compliance Guide",
      desc: "Identify the non-cash benefits that trigger CRA obligations, from company cars to life insurance premiums.",
      link: 'taxable-benefits',
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Which Employee Perks Are Non-Taxable Benefits?",
      category: "Compliance Guide",
      desc: "Discover the tax-efficient perks you can offer your team without increasing their T4 income, from counseling to certain gifts.",
      link: 'non-taxable-benefits',
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
             <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase">
              Concierge Knowledge Base
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Knowledge <br/>
              <span className="text-red-500">Hub</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Expert guides, compliance alerts, and tools to help you navigate the complexities of Canadian employment law.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
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
            <div key={i} onClick={() => onNavigate(res.link as PageType)} className={`group cursor-pointer border ${res.featured ? 'border-red-600 ring-4 ring-red-50' : 'border-slate-100'} bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full relative`}>
              {res.featured && (
                <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest z-20">
                  Featured
                </div>
              )}
              <div className="overflow-hidden h-64 relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">
                  {res.category}
                </div>
                <img src={res.image} alt={res.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors tracking-tight leading-tight">{res.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{res.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{res.readTime}</span>
                  <span className="text-red-600 font-bold text-sm group-hover:translate-x-2 transition-transform">Read Article →</span>
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
            <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-500 rounded-none" />
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
