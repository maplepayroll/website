import React from 'react';
import { PageType } from '../App';

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const resourceCategories = [
    {
      title: "Pillar Guides: Outsourced Services",
      items: [
        { title: "Choosing a Provider", desc: "How to select an outsourced payroll provider for your business.", link: 'buyer-guide' as PageType, icon: "🏢", badge: "Pillar Content" },
        { title: "DIY Cost Audit", desc: "Calculate the ROI of using an outsourced payroll department.", link: 'diy-calculator' as PageType, icon: "📉", badge: "Interactive" },
        { title: "Software Audit", desc: "A concierge review of the top 12 Canadian payroll platforms.", link: 'best-payroll-software' as PageType, icon: "🤝" }
      ]
    },
    {
      title: "Compliance Quick-Glance",
      items: [
        { title: "2026 Rate Changes", desc: "Quick breakdown of YMPE and CPP2 ceilings.", link: 'payroll-2026-changes' as PageType, icon: "📈" },
        { title: "Stat Holiday Map", desc: "Reference guide for 2026 statutory holiday pay.", link: 'public-holidays-2026' as PageType, icon: "🗓️" },
        { title: "Break Regulations", desc: "Mandatory eating periods and provincial rest rules.", link: 'breaks-and-eating-periods' as PageType, icon: "☕" }
      ]
    },
    {
      title: "Expert Compliance",
      items: [
        { title: "Audit Guardrails", desc: "Why your payroll review needs fixed limits to prevent catastrophic errors.", link: 'payroll-review-guide' as PageType, icon: "🥅", badge: "Strategic" },
        { title: "Vacation Pay Trap", desc: "The #1 compliance risk for salaried and commission staff.", link: 'vacation-pay-article' as PageType, icon: "🏖️" },
        { title: "Salary Continuance", desc: "The legal and tax rules for paying severance over time.", link: 'salary-continuance' as PageType, icon: "🌉" },
        { title: "Taxable Benefits", desc: "CRA rules on perks, parking, and non-cash gifts.", link: 'taxable-benefits' as PageType, icon: "💎" },
        { title: "Holidays & Vacation", desc: "Rules for holidays that fall during employee leave.", link: 'holiday-during-vacation' as PageType, icon: "📅" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">Certified Repository</div>
            <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Expert <br/> <span className="text-red-600">Resources.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Authoritative guides for businesses seeking an <strong>outsourced payroll provider</strong> or specialized compliance support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {resourceCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10 border-b border-slate-100 pb-4">
                {cat.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} onClick={() => onNavigate(item.link)} className="group p-10 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-50 transition-all duration-500 cursor-pointer relative">
                    {item.badge && <span className="absolute top-4 right-4 bg-red-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1">{item.badge}</span>}
                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-red-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">{item.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Explore Guide <span className="group-hover:translate-x-1 transition-transform">→</span></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;