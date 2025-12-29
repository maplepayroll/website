
import React from 'react';
import { PageType } from '../App';

interface KnowledgePreviewProps {
  onNavigate: (page: PageType) => void;
}

const KnowledgePreview: React.FC<KnowledgePreviewProps> = ({ onNavigate }) => {
  const articles = [
    {
      title: "2026 Payroll Changes",
      desc: "New YMPE, CPP2 & EI maximums effective Jan 1st.",
      link: 'payroll-2026-changes' as PageType,
      icon: "📈",
      tag: "Compliance Alert"
    },
    {
      title: "2026 Holiday Calendar",
      desc: "Provincial statutory holiday schedules & pay rules.",
      link: 'public-holidays-2026' as PageType,
      icon: "🗓️",
      tag: "Reference"
    },
    {
      title: "Software Buyer's Guide",
      desc: "Compare ADP, Wagepoint, and more for Canadian SMEs.",
      link: 'best-payroll-software' as PageType,
      icon: "💻",
      tag: "Comparison"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-4">
              Resources
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Concierge <span className="text-red-600">Knowledge Hub</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Expert guides, compliance alerts, and tools to help you navigate Canadian employment law.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('resources')}
            className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all"
          >
            View All Resources
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(art.link)}
              className="bg-slate-50 p-8 border-l-4 border-transparent hover:border-red-600 hover:bg-white hover:shadow-xl transition-all cursor-pointer group relative"
            >
              <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-red-600 transition-colors">
                {art.tag}
              </div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{art.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-red-600 transition-colors">{art.title}</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">{art.desc}</p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgePreview;
