
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface PublicHolidaysPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PublicHolidaysPage: React.FC<PublicHolidaysPageProps> = ({ onNavigate }) => {
  const holidays = [
    { date: "Jan 1, 2026", name: "New Year's Day", type: "Statutory", valid: "All" },
    { date: "Feb 16, 2026", name: "Family Day", type: "Statutory", valid: "Most (except QC, PE, NL)" },
    { date: "Apr 3, 2026", name: "Good Friday", type: "Statutory", valid: "All (except QC Eastern)" },
    { date: "May 18, 2026", name: "Victoria Day", type: "Statutory", valid: "All (except Atlantic)" },
    { date: "Jul 1, 2026", name: "Canada Day", type: "Statutory", valid: "All" },
    { date: "Sep 7, 2026", name: "Labour Day", type: "Statutory", valid: "All" },
    { date: "Oct 12, 2026", name: "Thanksgiving", type: "Statutory", valid: "All (except Atlantic)" },
    { date: "Dec 25, 2026", name: "Christmas", type: "Statutory", valid: "All" }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Table",
      "name": "2026 Canadian Statutory Holiday Calendar",
      "description": "Master list of Canadian stat holidays for 2026. Managed by Maple, your outsourced payroll provider.",
      "about": holidays.map(h => ({
        "@type": "SpecialAnnouncement",
        "name": h.name,
        "startDate": h.date,
        "description": `${h.type} holiday valid in ${h.valid}`
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const holidayFaqs = [
    {
      q: "How do you calculate stat holiday pay in Ontario?",
      a: "In Ontario, you take the total regular wages earned in the 4 weeks prior to the week of the holiday, plus any vacation pay payable for that period, and divide the total by 20. An outsourced payroll department like Maple automates this '1/20th rule' for every employee."
    },
    {
      q: "What happens if an employee works on a statutory holiday?",
      a: "If an employee works on a stat, they are generally entitled to 'Premium Pay' (usually 1.5x their regular rate) for all hours worked, PLUS their regular statutory holiday pay. Alternatively, with a written agreement, they can be paid regular rates for the hours worked and receive a substitute day off with pay."
    },
    {
      q: "Are part-time and casual employees eligible for holiday pay?",
      a: "Yes. Under modern Employment Standards in most provinces (like Ontario and BC), there is no longer a minimum 'days worked' requirement to qualify. As long as they have an employment relationship, they are entitled to a pro-rated amount based on their recent earnings."
    },
    {
      q: "What is the 'First and Last' rule?",
      a: "To qualify for holiday pay, employees must generally work their last regularly scheduled shift before the holiday and their first regularly scheduled shift after the holiday, unless they have reasonable cause for the absence (like an approved leave)."
    },
    {
      q: "What happens if a statutory holiday falls on a weekend?",
      a: "When a holiday like Canada Day or Christmas falls on a Saturday or Sunday, the employer must provide the next working day (usually the following Monday) as a paid holiday in lieu, ensuring employees still receive their day off and pay."
    },
    {
      q: "Do I owe holiday pay to an employee currently on vacation?",
      a: "Yes. If a stat holiday falls during an employee's vacation, that day is treated as a holiday, not a vacation day. You must pay them for the holiday and they retain that vacation day for future use."
    },
    {
      q: "How do holiday rules differ for Federal vs Provincial employees?",
      a: "Federal employees (banks, airlines, telecommunications) follow the Canada Labour Code, which may recognize different holidays (like Easter Monday or National Day for Truth and Reconciliation) compared to provincial standards. Maple manages both jurisdictional rule sets."
    },
    {
      q: "Is Truth and Reconciliation Day (Sept 30) a stat holiday?",
      a: "It is a statutory holiday for federally regulated workplaces and some provinces (like BC and PEI). However, it is not currently a statutory holiday under the Ontario Employment Standards Act. We ensure your system is configured for your specific jurisdiction."
    },
    {
      q: "Are bonuses and overtime included in the 4-week calculation?",
      a: "Generally, no. Most provincial formulas specify 'regular wages' for the calculation of holiday pay, which excludes overtime, shift premiums, and discretionary bonuses. However, vacation pay paid out in those 4 weeks IS often included."
    },
    {
      q: "What is a 'Substitute Holiday'?",
      a: "A substitute holiday is another working day that is designated to replace a statutory holiday. If an employee works the stat, you can 'switch' the holiday to a different day within a certain timeframe (usually 3 months) if both parties agree in writing."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="2026 Holidays" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              2026 <br/> <span className="text-red-500">Stat Holidays.</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                For 2026, Canada recognizes 8 major national and provincial statutory holidays, including Family Day (Feb 16), Good Friday (Apr 3), and Canada Day (Jul 1). Employers must pay eligible staff 'average daily wages' for these days. Using an <strong>outsourced payroll provider</strong> ensures these complex rolling 4-week averages are calculated accurately and compliant with provincial standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-8 uppercase">2026 Schedule</h2>
        <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Holiday</th>
                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Valid In</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-bold text-sm">
              {holidays.map((h, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-900">{h.date}</td>
                  <td className="px-6 py-4 text-red-600">{h.name}</td>
                  <td className="px-6 py-4 text-slate-500">{h.type}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{h.valid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FAQ items={holidayFaqs} />
      </section>
    </div>
  );
};

export default PublicHolidaysPage;
