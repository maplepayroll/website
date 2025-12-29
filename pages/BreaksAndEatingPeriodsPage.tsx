
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface BreaksAndEatingPeriodsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const BreaksAndEatingPeriodsPage: React.FC<BreaksAndEatingPeriodsPageProps> = ({ onNavigate }) => {
  const breakFaqs = [
    {
      q: "Are coffee breaks required by law?",
      a: "Generally, no. In most provinces (like Ontario and BC), employers are not legally required to provide 'coffee breaks' (short 10-15 minute rests). If an employer chooses to provide them, they must usually be paid."
    },
    {
      q: "Can an employee skip their break to leave 30 minutes early?",
      a: "No. Eating periods are designed for health and safety during the workday. They cannot be banked or used to shorten the work day unless explicitly agreed upon by the employer, though this is generally discouraged by labour boards."
    },
    {
      q: "Do I have to pay for the 30-minute lunch break?",
      a: "No. The statutory eating period (typically 30 minutes after 5 hours) is unpaid, provided the employee is completely free from work duties."
    },
    {
      q: "What if the employee eats at their desk?",
      a: "If they choose to eat at their desk but are free to leave, it is unpaid. However, if you require them to stay at the desk to answer phones while eating, it is considered work time and must be paid."
    },
    {
      q: "Can I split the 30-minute break into two 15-minute breaks?",
      a: "In many jurisdictions (like Ontario), yes—but only if the employee agrees (electronic or written agreement). Without agreement, the 30 minutes must be continuous."
    },
    {
      q: "Do employees get extra breaks for smoking?",
      a: "No. Employment standards do not provide for specific 'smoking breaks'. If an employee wishes to smoke, they must use their designated eating period or non-statutory rest breaks. Providing extra smoke breaks is at the employer's discretion."
    },
    {
      q: "Are bathroom breaks required to be paid?",
      a: "Yes. Short, reasonable trips to the washroom are considered part of the normal workday and are paid. Employers cannot dock pay for using the restroom unless the frequency or duration becomes an issue of time theft."
    },
    {
      q: "Can I require employees to stay on premises during their unpaid lunch?",
      a: "This is a risky area. Generally, if an employee is on an unpaid break, they must be free from work duties and control. Requiring them to stay on-site (e.g., for security reasons) may lead a Labour Board to rule that they are not truly 'free' and therefore must be paid for that time."
    },
    {
      q: "What happens if an employee works a double shift?",
      a: "The 5-hour rule typically resets. If an employee works 10 hours, they are usually entitled to a second 30-minute eating period after the second 5-hour block. Check your specific provincial overtime rules for meal allowance requirements."
    },
    {
      q: "What if an employee voluntarily works through their lunch to get paid?",
      a: "If they work, they MUST be paid. However, as an employer, you should enforce the break. The eating period is a statutory health and safety right. Allowing an employee to skip it (even by choice) puts you in violation of the 'mandatory break after 5 hours' rule, exposing you to compliance penalties."
    }
  ];

  const provincialRules = [
    { province: "Federal (CLC)", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Must be paid if employee required to be available." },
    { province: "Alberta", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Paid if employee cannot leave premises." },
    { province: "British Columbia", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Coffee breaks not mandatory." },
    { province: "Manitoba", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Break is unpaid unless work is required." },
    { province: "New Brunswick", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Must be free from work." },
    { province: "Newfoundland", trigger: "5 consec. hours", duration: "60 mins", paid: "No", notes: "Unique: Requires 1 hour break (not 30m)." },
    { province: "Nova Scotia", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Must be a continuous period." },
    { province: "Ontario", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Can be split into 2x15m with agreement." },
    { province: "PEI", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Unpaid meal break." },
    { province: "Quebec", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Coffee breaks (if given) must be paid." },
    { province: "Saskatchewan", trigger: "5 consec. hours", duration: "30 mins", paid: "No", notes: "Unpaid meal break." },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Break Time" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Employment Standards
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              What Are The <br/>
              Rules for <br/>
              <span className="text-red-500">Breaks?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Paid vs. Unpaid? Coffee vs. Lunch? Here is the definitive guide to eating periods and rest breaks across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Compliance Audit: Breaks')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Audit Your Policy
              </button>
              <button 
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Back to Knowledge Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed border-l-4 border-red-600 pl-6">
                One of the most common misconceptions in Canadian employment law is the difference between a "Coffee Break" and an "Eating Period." One is a right; the other is a luxury.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. The "5-Hour" Rule (Eating Periods)</h2>
              <p className="text-slate-600 mb-6">
                Under most provincial Employment Standards Acts (including Ontario and BC) and the Canada Labour Code, employers are required to provide an <strong>eating period of at least 30 minutes</strong> after every 5 consecutive hours of work.
              </p>
              
              <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-8">
                <h4 className="font-bold text-slate-900 mb-2">Key Characteristics of the Eating Period:</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                  <li><strong>It is Mandatory:</strong> You cannot agree to waive it entirely if it violates the 5-hour limit.</li>
                  <li><strong>It is Unpaid:</strong> Unless an employment contract states otherwise, you do not have to pay the employee for this time.</li>
                  <li><strong>It must be continuous:</strong> It should be a solid 30-minute block, not broken up, unless mutually agreed upon.</li>
                </ul>
              </div>

              {/* Visual Shift Timeline */}
              <div className="my-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide">Visualizing a Compliant Shift</h3>
                <div className="flex flex-col md:flex-row gap-1 w-full text-center text-xs font-bold text-white">
                  <div className="bg-slate-700 py-4 flex-1 relative group">
                    <span className="block mb-1">9:00 AM</span>
                    Work (Paid)
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Start Shift</div>
                  </div>
                  <div className="bg-slate-600 py-4 flex-1">
                    Work (Paid)
                  </div>
                  <div className="bg-red-600 py-4 w-20 md:w-32 relative group cursor-help">
                    <span className="block mb-1">Lunch</span>
                    Unpaid
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-3 py-1 rounded text-[10px] w-48 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Must be strictly free from work duties
                    </div>
                  </div>
                  <div className="bg-slate-600 py-4 flex-1">
                    Work (Paid)
                  </div>
                  <div className="bg-slate-700 py-4 flex-1 relative group">
                    <span className="block mb-1">5:00 PM</span>
                    Work (Paid)
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">End Shift</div>
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 px-1">
                  <span>Total Shift: 8.0 Hours</span>
                  <span>Paid Time: 7.5 Hours</span>
                </div>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. Coffee Breaks (Rest Periods)</h2>
              <p className="text-slate-600 mb-6">
                Contrary to popular belief, <strong>coffee breaks are not legally required</strong> in many jurisdictions (like Ontario). A 15-minute break in the morning and afternoon is a common perk, but not a statutory right.
              </p>
              <p className="text-slate-600 mb-6">
                <strong>However:</strong> If an employer <em>does</em> offer these short breaks (usually under 30 minutes), they are generally considered <strong>time worked</strong> and must be <strong>paid</strong>. You cannot dock an employee's pay for taking a permitted 10-minute smoke break or coffee run.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Provincial Comparison Table</h2>
              <p className="text-slate-600 mb-8">
                Break rules vary significantly by jurisdiction. Use this table to check the specific requirements for your province.
              </p>

              <div className="overflow-x-auto border border-slate-200 shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold uppercase tracking-widest">Jurisdiction</th>
                      <th className="px-4 py-3 text-left font-bold uppercase tracking-widest">Trigger</th>
                      <th className="px-4 py-3 text-left font-bold uppercase tracking-widest">Duration</th>
                      <th className="px-4 py-3 text-center font-bold uppercase tracking-widest">Paid?</th>
                      <th className="px-4 py-3 text-left font-bold uppercase tracking-widest">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {provincialRules.map((rule, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-bold text-slate-900">{rule.province}</td>
                        <td className="px-4 py-3 text-slate-600">{rule.trigger}</td>
                        <td className="px-4 py-3 text-slate-600">{rule.duration}</td>
                        <td className={`px-4 py-3 text-center font-bold ${rule.paid === 'Yes' ? 'text-green-600' : 'text-slate-400'}`}>{rule.paid}</td>
                        <td className="px-4 py-3 text-xs text-slate-500 italic">{rule.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. The "Freedom From Work" Test</h2>
              <p className="text-slate-600 mb-6">
                The most critical compliance trap for employers involves the "Unpaid" lunch. To qualify as unpaid, the employee must be <strong>completely free from work duties</strong>.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <h4 className="text-red-800 font-black mb-2 uppercase tracking-widest text-xs">The Receptionist Trap</h4>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  If you require a receptionist to eat their lunch at the front desk "just in case the phone rings," you are not providing a break. You are providing a "working lunch."
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-2">
                  In this scenario, the entire 30 minutes must be <strong>paid</strong>. Furthermore, since they technically didn't get a break, you may still be in violation of the "mandatory eating period" rule depending on the length of their shift.
                </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">5. Splitting the Break</h2>
              <p className="text-slate-600 mb-6">
                In many jurisdictions, the 30-minute eating period can be split into two 15-minute periods within the same 5-hour block.
              </p>
              <p className="text-slate-600 mb-6">
                <strong>Compliance Note:</strong> This usually requires an <strong>agreement</strong> (often in writing) between the employer and employee. You generally cannot unilaterally force employees to take split breaks without this agreement or established practice.
              </p>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      Control = Pay. If you control the employee's time or location during a break, you must pay for it.
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Never use "automatic lunch deductions" without a mechanism for employees to report if they worked through lunch. If an employee claims they worked through lunch 6 months ago and you have no proof otherwise, the Ministry will likely order you to pay it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <FAQ items={breakFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Break Rules <span className="text-red-600">FAQ</span></h2>} />

            {/* References Section */}
            <div className="mt-16 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                <ul className="space-y-2">
                    <li>
                        <a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/hours-work-and-eating-periods" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            Ontario ESA: Hours of Work & Eating Periods <span>↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hours" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            BC Employment Standards: Hours of Work <span>↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.alberta.ca/hours-work-rest" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            Alberta Employment Standards: Hours of Work & Rest <span>↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.canada.ca/en/employment-social-development/services/labour-standards/reports/hours-work.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                            Federal Labour Standards (Canada Labour Code) <span>↗</span>
                        </a>
                    </li>
                </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Scheduling Headaches?</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Managing paid vs. unpaid breaks manually often leads to "time theft" or accidental underpayment of overtime.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigate('home', 'Time & Attendance Inquiry')}
                    className="w-full py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-colors"
                  >
                    Automate Time Tracking
                  </button>
                  <button 
                    onClick={() => onNavigate('calculator')}
                    className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors"
                  >
                    Payroll Calculator
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "We sync directly with digital timeclocks to ensure 30-minute deductions only happen when the break is actually taken, keeping you compliant with Ministry standards."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreaksAndEatingPeriodsPage;
