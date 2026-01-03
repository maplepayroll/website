
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface CRADeadlinesPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const CRADeadlinesPage: React.FC<CRADeadlinesPageProps> = ({ onNavigate }) => {
  const deadlines = [
    { title: "Monthly Remittances", date: "15th of every month", desc: "Federal source deductions (Income Tax, CPP, EI) must be received by the CRA." },
    { title: "T4 & T4A Filings", date: "Last day of February", desc: "Deadline to issue employee tax slips and file the return with the CRA." },
    { title: "Quebec RL-1 Slips", date: "Last day of February", desc: "Mandatory provincial tax slips for all Quebec-based employees." },
    { title: "Ontario EHT Return", date: "March 15th", desc: "Annual return for employers exceeding the $1M exemption threshold." }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Table",
      "name": "2026 Canadian Payroll Compliance Calendar",
      "about": deadlines.map(d => ({ "@type": "Event", "name": d.title, "startDate": "2026", "description": d.desc }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="CRA Deadlines" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              CRA <br/> <span className="text-red-500">Deadlines</span> 2026.
            </h1>
            
            {/* AI OVERVIEW SNIPPET */}
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                In 2026, the most critical Canadian payroll deadline is the <strong>15th of every month</strong> for source deduction remittances. Annual T4 and RL-1 slips must be filed by <strong>February 28, 2026</strong>. Late filing penalties start at 3% and can reach 10% of the amount owing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deadlines.map((d, i) => (
              <div key={i} className="p-8 border border-slate-100 bg-slate-50 hover:shadow-xl transition-all">
                <p className="text-red-600 font-black text-xs uppercase mb-4 tracking-widest">{d.date}</p>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{d.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{d.desc}</p>
              </div>
            ))}
         </div>
      </section>
      <FAQ />
    </div>
  );
};

export default CRADeadlinesPage;
