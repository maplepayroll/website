
import React, { useState } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface PublicHolidaysPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PublicHolidaysPage: React.FC<PublicHolidaysPageProps> = ({ onNavigate }) => {
  const [filterProvince, setFilterProvince] = useState('All');

  const holidays = [
    { date: "Jan 1, 2026", name: "New Year's Day", type: "National Statutory", validIn: "All Provinces" },
    { date: "Feb 16, 2026", name: "Family Day / Heritage Day", type: "Provincial Statutory", validIn: "AB, BC, NB, ON, SK, MB, PE, NS" },
    { date: "Apr 3, 2026", name: "Good Friday", type: "National Statutory", validIn: "All Provinces" },
    { date: "Apr 6, 2026", name: "Easter Monday", type: "Government / Optional", validIn: "QC (or Good Friday), Federal Gov" },
    { date: "May 18, 2026", name: "Victoria Day / Patriots' Day", type: "National Statutory", validIn: "All except NB, NS, NL" },
    { date: "Jun 21, 2026", name: "National Indigenous Peoples Day", type: "Territorial", validIn: "NT, YT" },
    { date: "Jun 24, 2026", name: "St. Jean Baptiste Day", type: "Provincial Statutory", validIn: "QC Only" },
    { date: "Jul 1, 2026", name: "Canada Day", type: "National Statutory", validIn: "All Provinces" },
    { date: "Aug 3, 2026", name: "Civic Holiday / BC Day", type: "Civic (Optional in some)", validIn: "AB, BC, SK, ON, NB, NU" },
    { date: "Sep 7, 2026", name: "Labour Day", type: "National Statutory", validIn: "All Provinces" },
    { date: "Sep 30, 2026", name: "National Day for Truth & Reconciliation", type: "Federal + Specific Prov", validIn: "Federal, BC, MB, PE, NT, NU, YT" },
    { date: "Oct 12, 2026", name: "Thanksgiving", type: "National Statutory", validIn: "All except NB, NS, NL" },
    { date: "Nov 11, 2026", name: "Remembrance Day", type: "Statutory (Varied)", validIn: "All except ON, QC, MB, NS" },
    { date: "Dec 25, 2026", name: "Christmas Day", type: "National Statutory", validIn: "All Provinces" },
    { date: "Dec 26, 2026", name: "Boxing Day", type: "Provincial Statutory", validIn: "ON Only (Federal Gov included)" }
  ];

  const holidayFaqs = [
    {
      q: "What is the difference between a Statutory and a Civic holiday?",
      a: "A Statutory holiday is legally mandated; you must give the day off with pay (or pay premium rates). A Civic holiday (like August long weekend in Ontario) is optional for employers, though many choose to honour it."
    },
    {
      q: "How is Statutory Holiday Pay calculated?",
      a: "It varies by province. In Ontario, it's the total wages earned in the 4 weeks prior to the holiday divided by 20. In BC, it's total wages (including commission) in the 30 days prior divided by days worked."
    },
    {
      q: "Is Remembrance Day a stat holiday in Ontario?",
      a: "No. While banks and government offices close, private sector employers in Ontario are not legally required to give November 11th off, though many do as a courtesy."
    },
    {
      q: "What happens if a holiday falls on a weekend?",
      a: "If a statutory holiday (like Canada Day) falls on a Saturday or Sunday, the next business day (usually Monday) is treated as the 'in-lieu' day for paid time off purposes."
    },
    {
      q: "Do I have to pay part-time employees for holidays?",
      a: "Yes, but the calculation ensures it is prorated. They receive an average day's pay based on their recent earnings, so a part-timer doesn't get a full 8 hours of pay if they usually work 4."
    },
    {
      q: "Can I substitute a statutory holiday for another day?",
      a: "Yes, in most provinces, you can substitute a holiday for another working day if the employee agrees in writing. The substitute day is then treated as the paid holiday."
    },
    {
      q: "What if an employee is on vacation during a statutory holiday?",
      a: "If a stat holiday falls during an employee's vacation, that day typically does not count as a vacation day. You must either give them an extra day off with pay or pay them holiday pay for that day."
    },
    {
      q: "Is Easter Sunday a statutory holiday?",
      a: "Surprisingly, no. Good Friday is a national statutory holiday, but Easter Sunday and Easter Monday are not statutory holidays in most provinces (though Quebec recognizes Easter Monday as an option)."
    },
    {
      q: "How does the 'Last Shift Before / First Shift After' rule work?",
      a: "In provinces like Ontario, to qualify for holiday pay, an employee must work their entire scheduled shift before and after the holiday, unless they have 'reasonable cause' (like a doctor's note) for missing it."
    },
    {
      q: "Do commissioned employees get holiday pay?",
      a: "Yes. Holiday pay is calculated based on 'wages earned' in the previous pay period(s). Since commissions are wages, they must be included in the calculation, often resulting in a higher payout than base salary alone."
    },
    {
      q: "What is the '5 of 9' rule in Alberta?",
      a: "In Alberta, this rule is used to determine if a holiday falls on a 'regular day of work' for employees with irregular schedules. If an employee has worked at least 5 of the last 9 days of the same name as the holiday (e.g., 5 of the last 9 Mondays), then that day is considered a regular working day, triggering specific holiday pay entitlements."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?auto=format&fit=crop&q=80&w=2000" 
            alt="Canadian Calendar" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-xs font-black uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase">
              2026 Reference Guide
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              When Are The <br/>
              <span className="text-red-500">2026 Holidays?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              The complete schedule of Federal and Provincial statutory holidays for Canadian employers. Know when to pay, when to close, and when it's optional.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Holiday Pay Audit')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                Audit Holiday Pay
              </button>
              <button 
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Payroll Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Master List</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Below is the schedule of holidays for the 2026 calendar year. Note that "National" holidays apply to most provinces, but exceptions (like Remembrance Day in Ontario) create compliance traps for multi-provincial employers.
              </p>

              <div className="overflow-hidden border border-slate-200 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Holiday</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Type</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Jurisdiction</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 font-medium">
                    {holidays.map((h, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{h.date}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-800">{h.name}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${h.type.includes('National') ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-700'}`}>
                            {h.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 text-xs font-bold uppercase tracking-tight leading-snug">{h.validIn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-50 p-8 border-l-4 border-red-600 mb-12">
               <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">The "Truth & Reconciliation" Rule</h3>
               <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                 September 30th is a <strong>federal statutory holiday</strong> for federally regulated workplaces (banks, airlines, telecom). 
               </p>
               <p className="text-slate-600 text-sm mb-0 leading-relaxed">
                 However, provinces like <strong>BC, Manitoba, and PEI</strong> have also adopted it as a provincial stat. Ontario and Quebec currently treat it as a regular working day for private sector employers. This patchwork compliance requirement is a major source of payroll error.
               </p>
            </div>

            {/* The Bottom Line Section */}
            <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                  <p className="text-lg font-bold leading-relaxed">
                    Never pay "8 hours" automatically. Most provinces require an "average daily wage" calculation based on earnings in the previous 2-4 weeks.
                  </p>
                </div>
                <div className="h-px bg-white/20 my-4"></div>
                <div>
                  <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                  <p className="text-sm font-medium leading-relaxed text-slate-300">
                    Assuming that if a holiday falls on a weekend, you don't have to pay it. In most cases, you must provide a substitute day off with pay or pay the holiday wages.
                  </p>
                </div>
              </div>
            </div>

            {/* References Section */}
            <div className="mt-16 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                <ul className="space-y-2">
                    <li>
                        <a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            Ontario ESA: Public Holidays <span>↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            BC Employment Standards: Statutory Holidays <span>↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.alberta.ca/alberta-general-holidays" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            Alberta General Holidays <span>↗</span>
                        </a>
                    </li>
                </ul>
            </div>

            <FAQ items={holidayFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Holiday Pay <span className="text-red-600">FAQ</span></h2>} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Avoid the Math</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Calculating "average daily wage" for stat holidays manually is prone to error, especially for employees with variable hours or commissions.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      onNavigate('home', 'General Quote');
                    }}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors"
                  >
                    Automate with Maple
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Our system automatically identifies which of your employees qualify for stat pay based on the specific 'first and last shift' rules of their province."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicHolidaysPage;
