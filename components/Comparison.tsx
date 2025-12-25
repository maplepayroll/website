
import React from 'react';

const Comparison: React.FC = () => {
  const categories = [
    {
      feature: "Processing & Filings",
      diy: "You manually enter data",
      bureau: "You upload files to them",
      maple: "Full hands-off management"
    },
    {
      feature: "CRA/Provincial Remittances",
      diy: "Manual calculations & risk",
      bureau: "Automatic but rigid",
      maple: "Guaranteed & Optimized"
    },
    {
      feature: "Employee Support",
      diy: "Owner answers questions",
      bureau: "General call centre",
      maple: "Dedicated Expert Concierge"
    },
    {
      feature: "Year-End (T4/RL-1)",
      diy: "Stressful manual audit",
      bureau: "Automated batch processing",
      maple: "White-glove verification"
    },
    {
      feature: "Benefits & RRSP Sync",
      diy: "Manual tracking",
      bureau: "Basic integration",
      maple: "Full reconciliation service"
    },
    {
      feature: "Liability Protection",
      diy: "Owner is 100% liable",
      bureau: "Limited software warranty",
      maple: "Full E&O Coverage & Guarantee"
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">The <span className="text-red-600">Maple</span> Advantage</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Why high-growth Canadian companies are moving away from traditional bureaus.</p>
        </div>

        <div className="overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse bg-white rounded-none overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-8 py-6 font-black uppercase tracking-[0.2em] text-[10px] border-r border-slate-800">Operational Metric</th>
                <th className="px-8 py-6 font-black uppercase tracking-[0.2em] text-[10px] border-r border-slate-800">In-House / DIY</th>
                <th className="px-8 py-6 font-black uppercase tracking-[0.2em] text-[10px] border-r border-slate-800">Traditional Bureau</th>
                <th className="px-8 py-6 font-black uppercase tracking-[0.2em] text-[10px] bg-red-600">Maple Managed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {categories.map((cat, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-6 font-bold text-slate-900 text-sm border-r border-slate-100 uppercase tracking-tight">{cat.feature}</td>
                  <td className="px-8 py-6 text-slate-500 text-sm italic border-r border-slate-100">{cat.diy}</td>
                  <td className="px-8 py-6 text-slate-500 text-sm italic border-r border-slate-100">{cat.bureau}</td>
                  <td className="px-8 py-6 text-slate-900 font-black text-sm bg-red-50/30 group-hover:bg-red-50 transition-colors">{cat.maple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">
            "We aren't just a platform. We are your payroll department."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
