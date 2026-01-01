
import React from 'react';
import { PageType } from '../App';

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const resourceCategories = [
    {
      title: "Interactive Tools",
      items: [
        { 
          title: "Payroll Calculator", 
          desc: "Calculate net pay and source deductions for any province.", 
          link: 'calculator' as PageType,
          icon: "🧮"
        },
        { 
          title: "DIY Cost Calculator", 
          desc: "Compare the true cost of manual payroll vs. managed concierge.", 
          link: 'diy-calculator' as PageType,
          icon: "📉",
          badge: "New"
        },
        { 
          title: "Payroll Audit", 
          desc: "A 2-minute diagnostic to find risks in your current setup.", 
          link: 'audit' as PageType,
          icon: "🎯"
        }
      ]
    },
    {
      title: "Compliance Guides",
      items: [
        { 
          title: "2026 Payroll Changes", 
          desc: "Everything you need to know about the new CPP/EI limits.", 
          link: 'payroll-2026-changes' as PageType,
          icon: "📈"
        },
        { 
          title: "Public Holiday Map", 
          desc: "2026 Master Calendar for all Canadian provinces.", 
          link: 'public-holidays-2026' as PageType,
          icon: "🗓️"
        },
        { 
          title: "Key Terms Glossary", 
          desc: "From YMPE to HSF: The Canadian payroll dictionary.", 
          link: 'key-terms' as PageType,
          icon: "📖"
        }
      ]
    },
    {
      title: "Strategy Articles",
      items: [
        { 
          title: "Vacation Pay Deep Dive", 
          desc: "How to avoid the #1 compliance trap in Canada.", 
          link: 'vacation-pay-article' as PageType,
          icon: "🏖️"
        },
        { 
          title: "Software Buyer's Guide", 
          desc: "How to choose between an app and a department.", 
          link: 'buyer-guide' as PageType,
          icon: "🤝"
        },
        { 
          title: "Taxable Benefits 101", 
          desc: "Which employee perks are actually income?", 
          link: 'taxable-benefits' as PageType,
          icon: "💎"
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Knowledge <br/>
              <span className="text-red-600">Hub</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Professional resources to help you master Canadian payroll compliance and business efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Resources */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {resourceCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10 border-b border-slate-100 pb-4">
                {cat.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div 
                    key={i}
                    onClick={() => onNavigate(item.link)}
                    className="group p-10 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-50 transition-all duration-500 cursor-pointer relative"
                  >
                    {item.badge && (
                      <span className="absolute top-4 right-4 bg-red-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-left">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      Explore Resource <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggestion CTA */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Need specific advice?</h2>
          <p className="text-slate-600 mb-10 font-medium leading-relaxed">
            Our certified specialists are constantly updating our knowledge base. If you have a specific scenario you'd like us to cover, or if you need immediate concierge support, we're here to help.
          </p>
          <button 
            onClick={() => onNavigate('home', 'Knowledge Hub Inquiry')}
            className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
          >
            Contact a Specialist
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
