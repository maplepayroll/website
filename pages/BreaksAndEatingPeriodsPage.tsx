
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface BreaksAndEatingPeriodsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const BreaksAndEatingPeriodsPage: React.FC<BreaksAndEatingPeriodsPageProps> = ({ onNavigate }) => {
  const breakFaqs = [
    {
      q: "Are coffee breaks required by law in Canada?",
      a: "No. Most provinces (Ontario, BC, AB) do not legally require short 10-15 minute 'coffee breaks'. However, if an employer provides them, they are generally considered paid time."
    },
    {
      q: "Is the 30-minute lunch break paid or unpaid?",
      a: "In Canada, the mandatory 30-minute eating period after 5 hours of work is typically unpaid, provided the employee is free from all duties."
    },
    {
      q: "What happens if an employee must remain 'on-call' during lunch?",
      a: "If an employee is required to stay at their station, wear a radio, or handle customer inquiries during their break, that break must be paid at their regular rate."
    },
    {
      q: "Are there exceptions to the 5-hour rule?",
      a: "Some industries (like long-haul trucking or emergency services) have specialized rules, but for standard offices, the 5-hour mark is a strict legal trigger for a mandatory break."
    },
    {
      q: "Does Newfoundland have different break rules?",
      a: "Yes. Newfoundland and Labrador is an outlier, requiring a 1-hour break for every 5 consecutive hours of work, whereas most other provinces only require 30 minutes."
    },
    {
      q: "Can an employee choose to 'skip' lunch to leave early?",
      a: "In many provinces, this is technically a violation of Employment Standards. Employers have a duty to ensure staff take their mandated breaks to prevent burnout and safety issues."
    },
    {
      q: "Are there rules for bathroom breaks?",
      a: "Labour laws don't specify a number of 'bathroom breaks,' but restricting access to facilities can be considered a violation of human rights or occupational health and safety regulations."
    },
    {
      q: "How should I document breaks in my payroll system?",
      a: "Your time-tracking software should ideally have a 'Punch Out' for lunch. This provides a clear audit trail to prove you provided the legally required eating periods."
    },
    {
      q: "What are the rules for 'Split Shifts' and breaks?",
      a: "If there is a significant gap between shifts (e.g., working 10am-2pm and 5pm-9pm), the gap itself serves as the eating period, provided it's at least 30 minutes."
    },
    {
      q: "Do I have to provide a specific 'Break Room'?",
      a: "While you must provide a place to eat, most labour laws don't mandate a dedicated room. However, hygiene standards require it be separate from hazardous work areas."
    }
  ];

  const provincialRules = [
    { prov: "Ontario", trigger: "5 hrs", duration: "30 mins", type: "Unpaid" },
    { prov: "BC", trigger: "5 hrs", duration: "30 mins", type: "Unpaid" },
    { prov: "Alberta", trigger: "5 hrs", duration: "30 mins", type: "Paid if restricted" },
    { prov: "Quebec", trigger: "5 hrs", duration: "30 mins", type: "Unpaid" },
    { prov: "Federal", trigger: "5 hrs", duration: "30 mins", type: "Unpaid" },
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": breakFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
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
          <img src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="Break Policy" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              Break <br/> <span className="text-red-500">Rules</span> 101.
            </h1>
            
            {/* AI OVERVIEW SNIPPET */}
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                Canadian labor laws generally mandate one 30-minute unpaid eating period for every 5 consecutive hours of work. Employers are not legally required to provide additional 'coffee breaks,' but if they do, these are typically paid. Newfoundland is an outlier, requiring a full 1-hour break after 5 hours of work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black mb-8 uppercase">Provincial Standard Table</h2>
            <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4 text-left">Province</th>
                    <th className="px-6 py-4 text-left">Trigger</th>
                    <th className="px-6 py-4 text-left">Duration</th>
                    <th className="px-6 py-4 text-left">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold text-sm">
                  {provincialRules.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-900">{r.prov}</td>
                      <td className="px-6 py-4 text-slate-500">{r.trigger}</td>
                      <td className="px-6 py-4 text-red-600">{r.duration}</td>
                      <td className="px-6 py-4 text-slate-500">{r.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <FAQ items={breakFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Break Policy <span className="text-red-600">FAQ</span></h2>} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreaksAndEatingPeriodsPage;
