
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface HolidayDuringVacationPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const HolidayDuringVacationPage: React.FC<HolidayDuringVacationPageProps> = ({ onNavigate }) => {
  const faqs = [
    {
      q: "Does the employer choose between an extra day or a substitute day?",
      a: "Yes, in most jurisdictions, the employer has the final say on whether to extend the current vacation or provide a substitute day to be taken later. However, you must document this agreement to prevent future Ministry of Labour disputes."
    },
    {
      q: "What if the holiday isn't a 'stat' in my specific province?",
      a: "If the holiday is not a legally recognized statutory holiday in your province (e.g., Civic Holiday in some sectors or Boxing Day in certain provinces), it counts as a regular work day. If the staff member takes it off, it is deducted from their vacation bank as per your standard policy."
    },
    {
      q: "Are we required to pay premium (1.5x) rates if they are on vacation?",
      a: "No. Premium pay only applies to hours actually worked on the holiday. Since the employee is on vacation, you only owe regular statutory holiday pay (their average daily wage)."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Employer Compliance Planning" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 text-sm font-bold tracking-wide uppercase"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg">
              Employer Compliance Guide
            </div>
            <h1 className="text-4xl lg:text-[5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Statutory Holidays <br/>
              <span className="text-red-500">During Vacation</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              When a statutory holiday falls during an employee's scheduled vacation, the law forbids the "double-counting" of that day. Here is how to manage your payroll liability and remain compliant with provincial labour standards.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed border-l-4 border-red-600 pl-6">
                Across Canada, employment standards mandate that a statutory holiday is a stand-alone entitlement. It cannot be "absorbed" into a vacation period to the employer's benefit.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Managing the "Extension" Mandate</h2>
              <p className="text-slate-600 mb-6">
                Because a statutory holiday is a legal right to a paid day off, it must be accounted for separately from an employee's vacation bank. To remain compliant, employers must facilitate one of the following two procedures:
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100">
                  <div className="text-red-600 font-black text-2xl">01</div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Vacation Extension</h4>
                    <p className="text-slate-600 text-sm font-medium">The employee's vacation is extended by one working day. If a staff member takes a week off and Monday is a holiday, they return on the following Tuesday instead of Monday. This is the simplest method for tracking.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100">
                  <div className="text-red-600 font-black text-2xl">02</div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Substitution (Day in Lieu)</h4>
                    <p className="text-slate-600 text-sm font-medium">The employee returns from vacation as originally scheduled, but you must grant another paid day off to be used at a later date. This creates an "In-Lieu" liability in your payroll system that must be tracked meticulously.</p>
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. Accurately Calculating Pay Entitlement</h2>
              <p className="text-slate-600 mb-6">
                Employers are still required to pay <strong>Statutory Holiday Pay</strong> for that day, regardless of the staff member's vacation status. 
              </p>
              <p className="text-slate-600 mb-6">
                In most provinces, this is calculated as an average day's pay—typically 1/20th of the wages earned in the previous four weeks. 
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-10">
                <p className="text-slate-700 text-sm leading-relaxed font-bold uppercase tracking-tight mb-2">Internal Audit Warning:</p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Your payroll administrator must ensure that only 4 vacation days are deducted from the employee's bank if they take a 5-day week off that includes a statutory holiday. Deducting a full 5 days is a breach of provincial labour standards and creates a financial liability.
                </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Enforcing Eligibility: The "First and Last" Rule</h2>
              <p className="text-slate-600 mb-6">
                The standard eligibility rule applies even during vacation: an employee must work their "last scheduled shift before and first scheduled shift after" the holiday to qualify for holiday pay.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-4 mb-8 font-medium">
                <li><strong>Defining the Shifts:</strong> For a vacationing employee, the "last scheduled shift" is the day before their vacation commenced. The "first scheduled shift" is the day they are due back at their desk or station.</li>
                <li><strong>Consequences of Non-Attendance:</strong> If an employee fails to show up for their first shift back after vacation without reasonable cause, they may forfeit their right to the holiday pay for the stat that occurred while they were away.</li>
              </ul>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Complexity During the Christmas Season</h2>
              <p className="text-slate-600 mb-8">
                The multi-holiday nature of the December period requires precise configuration of your payroll software.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-8 text-white">
                  <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-4">Boxing Day Nuances</h4>
                  <p className="text-sm leading-relaxed opacity-80 font-medium">
                    In Ontario and for federally regulated employees, December 26th is a statutory holiday. However, in Alberta or BC, it is not a legal mandate. For multi-provincial firms, you must differentiate your vacation bank deductions based on the employee's primary province of employment.
                  </p>
                </div>
                <div className="bg-slate-900 p-8 text-white">
                  <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-4">Weekend Adjustments</h4>
                  <p className="text-sm leading-relaxed opacity-80 font-medium">
                    When Christmas falls on a weekend, the statutory observance usually shifts to the following Monday. If your team is on vacation that entire week, the "holiday" move ensures they only use 4 days of their vacation bank, even though they were away for 5.
                  </p>
                </div>
              </div>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-red-500">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Compliance Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      Statutory holiday entitlements take precedence over vacation scheduling. 
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Employer Liability</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Unrecorded "In-Lieu" days are one of the first things a Ministry of Labour officer looks for during a random audit. Ensure your tracking system distinguishes between vacation pay and statutory holiday pay line items on every cheque.
                    </p>
                  </div>
                </div>
              </div>

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official Labour References</h4>
                  <ul className="space-y-2">
                      <li>
                          <a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays#section-4" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              Ontario ESA: Public Holidays falling on vacation <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#vacation" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              BC Employment Standards: Holidays and Vacation <span>↗</span>
                          </a>
                      </li>
                  </ul>
              </div>

              <FAQ items={faqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Employer <span className="text-red-600">FAQ</span></h2>} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Audit Your Liability</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">
                  Miscalculating vacation bank deductions during holiday periods is the most common reason for year-end reconciliation errors.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      onNavigate('home', 'Liability Audit: Vacation Accruals');
                    }}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors"
                  >
                    Request Accrual Audit
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Our concierge team reconciles every vacation request against 13 provincial holiday calendars automatically, ensuring your general ledger always reflects your true outstanding liability."
                  </p>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HolidayDuringVacationPage;
