
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface HolidayDuringVacationPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const HolidayDuringVacationPage: React.FC<HolidayDuringVacationPageProps> = ({ onNavigate }) => {
  const holidayFaqs = [
    {
      q: "Does a stat holiday count as a vacation day?",
      a: "No. Under Canadian employment standards, a statutory holiday must be treated separately. If an employee is on vacation during a stat holiday, that day does not count against their vacation entitlement."
    },
    {
      q: "Do I owe stat pay while they are away?",
      a: "Yes. You must still pay the employee their average daily wage for the holiday, even though they are on scheduled vacation time."
    },
    {
      q: "What is a 'Substitute Holiday'?",
      a: "If a stat falls during vacation, the employer can either extend the employee's vacation by one day or provide another day off with pay (a 'substitute holiday') within a reasonable timeframe (usually 3 months)."
    },
    {
      q: "What if the employee hasn't worked for me for very long?",
      a: "In most provinces (like Ontario and BC), there is no 'minimum tenure' to qualify for stat holiday pay. As long as they have an employment relationship, they are entitled to pro-rated pay for that day."
    },
    {
      q: "Does the 'First and Last' rule apply during vacation?",
      a: "No. Because the vacation is an 'authorized leave of absence,' the employee is considered to have worked their last scheduled shift before the holiday, even if that shift was several days prior to the vacation starting."
    },
    {
      q: "How do I calculate pay for a stat during vacation?",
      a: "You use the standard 'Average Daily Wage' formula (usually 1/20th of the regular wages earned in the 4 weeks prior). The fact that they are currently on vacation doesn't change this math."
    },
    {
      q: "What happens if a holiday falls on a Saturday during their vacation week?",
      a: "If Saturday is not a regular working day, the employer must still provide a substitute holiday (usually the following Monday) or pay the employee the average daily wage for that day."
    },
    {
      q: "Are part-time employees handled differently?",
      a: "No. Part-time staff are entitled to the holiday pay even during their vacation. Their pay will naturally be smaller since it's based on their lower average earnings in the prior 4 weeks."
    },
    {
      q: "Can I just pay the employee the 4% vacation pay and skip the stat pay?",
      a: "Absolutely not. Vacation pay (4%) and Stat Holiday pay are two separate legal entitlements. Paying one does not satisfy the obligation of the other."
    },
    {
      q: "What is the best way to track this in payroll software?",
      a: "You should code the holiday as 'Public Holiday Pay' and the rest of the week as 'Vacation Time'. This ensures your general ledger and T4 boxes are perfectly accurate."
    }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Handle Statutory Holidays During Employee Vacation",
      "description": "Legal rules for Canadian employers when a public holiday falls during an employee's vacation period.",
      "step": [
        { "@type": "HowToStep", "text": "Determine if the day is a statutory holiday in your province." },
        { "@type": "HowToStep", "text": "Do not deduct a vacation day from the employee's bank for that date." },
        { "@type": "HowToStep", "text": "Either extend the vacation by one day or provide a substitute day in lieu." }
      ]
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
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center opacity-40" alt="Holidays and Vacation" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              Holidays <br/> <span className="text-red-500">During Vacation.</span>
            </h1>
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                When a statutory holiday falls during an employee's vacation, the holiday is treated as a paid day off and is not deducted from their vacation bank. Employers must either extend the vacation by one day or provide a substitute day in lieu with pay at a later date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 p-10 border-l-8 border-slate-900 shadow-sm mb-12">
          <h2 className="text-2xl font-black mb-4 uppercase">The Extension Rule</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            If a staff member takes a 1-week vacation (Monday to Friday) and Monday is a holiday, only 4 vacation days should be processed. The Monday remains "Public Holiday Pay".
          </p>
        </div>
        <FAQ items={holidayFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Holiday Compliance <span className="text-red-600">FAQ</span></h2>} />
      </section>
    </div>
  );
};

export default HolidayDuringVacationPage;
