
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface TaxableBenefitsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const TaxableBenefitsPage: React.FC<TaxableBenefitsPageProps> = ({ onNavigate }) => {
  const benefitsFaqs = [
    {
      q: "Are gift cards always taxable?",
      a: "Yes. The CRA considers gift cards to be 'near-cash'. Even if it's a $25 coffee card, it is taxable income and must be reported on the employee's T4."
    },
    {
      q: "Is employer-paid parking taxable?",
      a: "If your office is in a high-density area where parking has Fair Market Value, it is generally a taxable benefit. Exceptions exist for scramble parking or disability requirements."
    },
    {
      q: "How does the 'Automobile Standby Charge' work?",
      a: "If an employee uses a company car for personal use (including commuting), you must calculate a Standby Charge and an Operating Cost benefit, adding them to their taxable income."
    },
    {
      q: "Are cell phone plans provided by the employer taxable?",
      a: "Generally no, as long as the plan is primarily for business use and the cost of the plan is reasonable. Personal use is considered 'incidental' and typically doesn't trigger a benefit."
    },
    {
      q: "Is employer-paid group life insurance taxable?",
      a: "Yes. Unlike health and dental premiums, life insurance premiums paid by the employer are a taxable benefit for federal tax and CPP purposes."
    },
    {
      q: "Are gym memberships taxable perks?",
      a: "Yes. Unless the gym facility is provided by the employer on-site for all staff, a reimbursed membership is a taxable benefit."
    },
    {
      q: "What about 'Service Awards' for long-tenure staff?",
      a: "A non-cash long-service award (like a watch) is non-taxable if it's for 5+ years of service and the value is under $500. This is separate from the annual $500 gift exemption."
    },
    {
      q: "Is tuition reimbursement taxable?",
      a: "If the training primarily benefits the employer (job-related), it is non-taxable. If it's for personal interest unrelated to the business, it is a taxable benefit."
    },
    {
      q: "Are low-interest loans to employees taxable?",
      a: "Yes. If you provide a loan below the CRA's prescribed interest rate, the difference is considered a taxable interest benefit to the employee."
    },
    {
      q: "How do I report these on the T4?",
      a: "Most taxable benefits are reported in Box 14 (Employment Income) and often have a specific code in the 'Other Information' section (e.g., Code 40 for other taxable allowances)."
    }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Complete Guide to CRA Taxable Benefits in Canada",
      "description": "Expert breakdown of taxable vs non-taxable employee benefits, including rules for gift cards, parking, and company cars.",
      "author": { "@type": "Person", "name": "Arshad Merali" }
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
          <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="CRA Benefits" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              Taxable <span className="text-red-500">Benefits</span> 101.
            </h1>
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                A taxable benefit occurs when an employer pays for or provides a perk to an employee. Common examples include gift cards, board and lodging, and automobile standby charges. These must be included in the employee's income for CPP and income tax withholdings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">The Taxability Matrix</h2>
        <div className="overflow-hidden border border-slate-200 mb-12">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 text-left">Benefit Type</th>
                <th className="px-6 py-4 text-center">Income Tax</th>
                <th className="px-6 py-4 text-center">CPP</th>
                <th className="px-6 py-4 text-center">EI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 font-bold text-sm">
              <tr>
                <td className="px-6 py-4">Cash / Gift Cards</td>
                <td className="px-6 py-4 text-center text-green-600">YES</td>
                <td className="px-6 py-4 text-center text-green-600">YES</td>
                <td className="px-6 py-4 text-center text-green-600">YES</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Group Life Insurance</td>
                <td className="px-6 py-4 text-center text-green-600">YES</td>
                <td className="px-6 py-4 text-center text-green-600">YES</td>
                <td className="px-6 py-4 text-center text-red-600">NO</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Health & Dental Premiums</td>
                <td className="px-6 py-4 text-center text-red-600">NO*</td>
                <td className="px-6 py-4 text-center text-red-600">NO*</td>
                <td className="px-6 py-4 text-center text-red-600">NO</td>
              </tr>
            </tbody>
          </table>
          <p className="p-4 text-[10px] text-slate-400 italic bg-slate-50 border-t border-slate-200">*Except in Quebec, where employer-paid health premiums are taxable for provincial income tax (RL-1).</p>
        </div>
        <FAQ items={benefitsFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Taxable Benefits <span className="text-red-600">FAQ</span></h2>} />
      </section>
    </div>
  );
};

export default TaxableBenefitsPage;
