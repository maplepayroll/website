
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface CRADeadlinesPageProps {
  onNavigate: (page: PageType) => void;
}

const CRADeadlinesPage: React.FC<CRADeadlinesPageProps> = ({ onNavigate }) => {
  const deadlines = [
    {
      title: "CRA Monthly Remittances",
      date: "15th of every month",
      desc: "Federal source deductions (Income Tax, CPP, EI) must be received by the CRA. Late payments trigger immediate penalties.",
      impact: "High Penalty Risk",
      tip: "Maple manages the calculation and electronic transfer automatically for you."
    },
    {
      title: "Quebec RL-1 & RL-2 Slips",
      date: "Last day of February",
      desc: "Mandatory provincial tax slips for all employees working in Quebec. These must be filed with Revenu Québec.",
      impact: "Quebec Compliance",
      tip: "We handle dual T4/RL-1 generation for your Quebec-based team."
    },
    {
      title: "Federal T4 & T4A Slips",
      date: "Last day of February",
      desc: "Deadline to provide T4 and T4A slips to employees and file the return with the CRA for the previous calendar year.",
      impact: "Annual Requirement",
      tip: "Our portal gives employees 24/7 access to their historical tax slips."
    },
    {
      title: "RLZ-1.S-V (Quebec Summary)",
      date: "Last day of February",
      desc: "The Summary of Source Deductions and Employer Contributions for Revenu Québec. Reconciles QPP, QPIP, and HSF.",
      impact: "Quebec Audit Risk",
      tip: "We perform a line-by-line reconciliation of HSF and QPIP before filing."
    },
    {
      title: "Ontario EHT Annual Return",
      date: "March 15th",
      desc: "Annual return for employers with Ontario remuneration exceeding the $1,000,000 exemption threshold.",
      impact: "Provincial Health Tax",
      tip: "Maple tracks your year-to-date total to trigger the return precisely on time."
    },
    {
      title: "BC EHT Annual Return",
      date: "March 31st",
      desc: "Employers with BC payroll over $500,000 must file. Installment payments may be required quarterly.",
      impact: "BC Compliance",
      tip: "We manage both your annual filing and your quarterly installments."
    },
    {
      title: "WSIB / WCB Annual Returns",
      date: "Feb 28th - Mar 31st",
      desc: "Reporting of insurable earnings to provincial safety boards (WSIB, WorkSafeBC, CNESST, etc.).",
      impact: "Operational Risk",
      tip: "We audit your rate codes annually to ensure you aren't overpaying."
    },
    {
      title: "Manitoba H&E Levy",
      date: "Monthly / Annual",
      desc: "Health and Post-Secondary Education Tax for employers with Manitoba payroll exceeding $2M.",
      impact: "Manitoba Specific",
      tip: "We calculate the 'notch' rate accurately for mid-sized firms."
    },
    {
      title: "Records of Employment (ROE)",
      date: "Within 5 calendar days",
      desc: "Must be filed whenever there is an interruption of earnings. Essential for employee EI benefits.",
      impact: "Labour Standards",
      tip: "Same-day ROE Web filing is included in every Maple tier."
    }
  ];

  const deadlinesFaqs = [
    {
      q: "What makes Quebec payroll deadlines different?",
      a: "Quebec requires a separate set of slips (RL-1s) and a unique summary return (RLZ-1.S-V) in addition to federal T4s. They also have unique provincial deductions like QPIP and HSF that must be reconciled annually."
    },
    {
      q: "How do you handle the different EHT thresholds across provinces?",
      a: "Each province (Ontario, BC, Manitoba, Newfoundland) has its own exemption threshold. Maple's system monitors your cumulative annual payroll across all entities to ensure we start remitting and file annual returns only when required."
    },
    {
      q: "Is there a penalty for late T4 filing?",
      a: "Yes. The CRA applies a penalty based on the number of slips and the number of days late, ranging from $100 up to $2,500 per return. Provincial penalties for RL-1s in Quebec can be even higher."
    },
    {
      q: "Do I need to file a nil return if I had no employees?",
      a: "If you have an open payroll account with the CRA or Revenu Québec, you are generally expected to file a return or inform them of a 'Nil' status to avoid automated non-filer notices."
    },
    {
      q: "What is CNESST and when is it due?",
      a: "CNESST is Quebec's workplace health and safety board. Periodic payments are usually made with your source deductions, and a final reconciliation is filed by March 15th each year."
    },
    {
      q: "When are T4A slips required for contractors?",
      a: "If you paid a contractor more than $500 for services in a calendar year, you are generally required to issue a T4A slip by the last day of February."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=2000" 
            alt="Canadian Payroll Filing Deadlines" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6 text-sm font-bold tracking-wide uppercase"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              National Compliance Calendar
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              When Are My <br/>
              <span className="text-red-500">Filing Deadlines?</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              From CRA source deductions to Quebec's RL-1 requirements, stay ahead of every provincial and federal deadline with our comprehensive guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Guarantee Your Compliance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Deadline Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Essential <span className="text-red-600">Dates</span></h2>
          <p className="text-slate-600 font-medium">Federal and Provincial mandates for the current tax year.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deadlines.map((d, i) => (
            <div key={i} className="flex flex-col border border-slate-100 p-8 rounded-none bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 border border-red-100">
                  {d.impact}
                </span>
                <span className="text-2xl">🍁</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-tight">{d.title}</h3>
              <p className="text-red-600 font-black mb-6 text-base">{d.date}</p>
              <p className="text-slate-600 mb-10 text-sm leading-relaxed font-medium flex-grow">
                {d.desc}
              </p>
              <div className="bg-white p-6 border-l-4 border-slate-900 rounded-none shadow-sm">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Maple Advantage</p>
                 <p className="text-slate-800 font-bold text-xs italic">"{d.tip}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quebec Deep Dive */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 lg:p-20 shadow-2xl border-t-8 border-red-600">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">Focus on <span className="text-red-600">Quebec Compliance</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Quebec operates a dual-reporting system that is significantly more complex than the rest of Canada. Employers must remit to both the CRA and Revenu Québec, often with different calculation methods for each.
                </p>
                <ul className="space-y-4">
                  {[
                    "RL-1 slips must be issued for all taxable income earned in QC.",
                    "Health Services Fund (HSF) rates vary by total payroll size.",
                    "QPIP is a mandatory deduction unique to Quebec employers.",
                    "RLZ-1.S-V summary must match your monthly remittances exactly."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
                      <span className="text-red-600">→</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 p-8 text-white flex flex-col justify-center">
                 <p className="text-red-500 font-black uppercase tracking-widest text-xs mb-4">Pro Tip</p>
                 <p className="text-lg font-medium leading-relaxed italic">
                   "We manage your Revenu Québec account as your authorized representative, handling CNESST classifications and HSF rate adjustments proactively so you don't have to."
                 </p>
                 <p className="mt-6 text-slate-400 text-sm">— Maple Concierge Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-10 my-16 shadow-xl border-l-8 border-red-600">
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
              <p className="text-lg font-bold leading-relaxed">
                Remit source deductions on time, every time. The CRA penalty for late remittance starts at 3% immediately and climbs to 10% within days.
              </p>
            </div>
            <div className="h-px bg-white/20 my-4"></div>
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Failing to file a "Nil" remittance when you have no payroll for a month often triggers a specialized assessment or audit. Always tell the CRA if you are remitting $0.
              </p>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="mb-24 pt-8 border-t border-slate-200">
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
            <ul className="space-y-2">
                <li>
                    <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/remitting-source-deductions/how-when-remit-due-dates.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        CRA: How and when to remit (pay) source deductions <span>↗</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.revenuquebec.ca/en/businesses/source-deductions-and-employer-contributions/remitting-source-deductions-and-employer-contributions/remittance-schedules/" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        Revenu Québec: Remittance schedules <span>↗</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>

      {/* Deadlines FAQ */}
      <FAQ 
        items={deadlinesFaqs} 
        title={
          <>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Filing <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Detailed answers regarding provincial and federal requirements.</p>
          </>
        } 
      />

      {/* Final CTA */}
      <section className="py-32 text-center bg-white max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Never miss a <span className="text-red-600">filing</span> again.</h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Maple customers enjoy 100% peace of mind. We manage the timing, the dual-filings, and the remittances automatically across all 13 provinces and territories.
        </p>
        <button 
          onClick={() => {
            onNavigate('home');
            setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
          }}
          className="px-12 py-5 bg-red-600 text-white rounded-none text-xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-200"
        >
          Book Your Free Consultation
        </button>
      </section>
    </div>
  );
};

export default CRADeadlinesPage;
