
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface VacationPayArticlePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const VacationPayArticlePage: React.FC<VacationPayArticlePageProps> = ({ onNavigate }) => {
  const vacationFaqs = [
    {
      q: "Can I pay vacation pay on every paycheque?",
      a: "Yes. This is common for hourly or casual staff. You must clearly separate the 'Vacation Pay' line item on the pay stub (usually 4%). You cannot simply say 'your hourly rate includes vacation pay' without a written agreement and clear breakdown."
    },
    {
      q: "Do I have to pay vacation pay on overtime earnings?",
      a: "Yes. Vacation pay is calculated on 'gross wages,' which includes overtime pay, public holiday pay, and commissions."
    },
    {
      q: "What happens to vacation pay when an employee quits?",
      a: "All accrued and unpaid vacation pay must be paid out on their final paycheque. This is a strict requirement under Employment Standards."
    },
    {
      q: "Can I enforce a 'Use it or Lose it' policy?",
      a: "You can generally enforce a 'use it or lose it' policy for the *time off*, but you CANNOT force them to lose the *money*. Any unpaid vacation pay must be paid out to the employee, even if they didn't take the days."
    },
    {
      q: "Does vacation pay accrue during a sick leave?",
      a: "Generally, no. Vacation pay is a percentage of *wages earned*. If the employee is on unpaid sick leave and earning $0, they are accruing $0 in vacation pay (though they may still accumulate 'years of service' for entitlement purposes)."
    },
    {
      q: "Is vacation pay pensionable (CPP) and insurable (EI)?",
      a: "Yes. When vacation pay is paid out, it is considered income. You must deduct CPP, EI, and Income Tax from it."
    },
    {
      q: "How does vacation pay work for part-time staff?",
      a: "Part-time staff are entitled to the same percentage (usually 4%) as full-time staff. Because it's a percentage of their earnings, it naturally pro-rates based on the hours they work."
    },
    {
      q: "When does the rate increase from 4% to 6%?",
      a: "In most provinces (like Ontario and BC), the entitlement increases to 3 weeks of time and 6% pay after 5 consecutive years of employment with the same employer."
    },
    {
      q: "Can I include vacation pay in an employee's salary?",
      a: "You can state that a salary is 'inclusive' of vacation pay, but you must ensure the base pay is high enough to cover the legal minimums. If they earn a bonus, you still owe 4% on that bonus regardless of the salary contract."
    },
    {
      q: "What is a 'Vacation Year'?",
      a: "It's a 12-month period you define (e.g., Jan-Dec or an employee's anniversary year) during which an employee earns their vacation time and pay to be used in the *following* year."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Standardized to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=2000" 
            alt="Relaxing on vacation" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Employer Compliance Guide
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              How Does Vacation Pay <br/>
              <span className="text-red-500">Actually Work?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              It's the #1 source of payroll discrepancies in Canada. Here is the definitive guide to "Time Off" vs "Vacation Pay" and the compliance traps most businesses miss regarding commissions, bonuses, and termination.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Vacation Pay Audit')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Audit Your Liability
              </button>
              <button 
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                View Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Text */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed border-l-4 border-red-600 pl-6">
                In Canada, the answer depends on how you structure your pay, but legally speaking, <strong>vacation pay is always earned in addition to your regular wages.</strong>
              </p>

              <p className="text-slate-600 mb-8">
                It is helpful to think of compensation as two separate buckets: <strong>Vacation Time</strong> (the days off) and <strong>Vacation Pay</strong> (the money). Under most provincial laws (like Ontario's <em>Employment Standards Act</em>), an employee with less than 5 years of service is entitled to 2 weeks of vacation time and <strong>4% vacation pay</strong>.
              </p>

              <hr className="my-12 border-slate-200" />

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. The Salaried Employee Trap</h2>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Myth: "My salary covers everything."</p>
              
              <p className="text-slate-600 mb-8">
                Most employers tell salaried staff: "You get $60,000 a year, and that includes your 2 weeks of vacation." This is compliant, <strong>provided the employee only earns their base salary.</strong>
              </p>
              <p className="text-slate-600 mb-6">
                The compliance trap snaps shut the moment that employee earns a performance bonus, overtime pay, or a commission. Vacation pay is calculated on <em>gross</em> wages, not just base salary.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">Scenario: The Year-End Bonus</h4>
                 <p className="text-slate-600 text-sm mb-4">
                   Jane earns a $60,000 salary. Her employer continues to pay her regular salary while she is away for 2 weeks in July. The vacation pay on her base salary is considered "paid."
                 </p>
                 <p className="text-slate-600 text-sm mb-4">
                   However, in December, Jane earns a <strong>$10,000 performance bonus</strong>.
                 </p>
                 <p className="text-red-600 font-bold text-sm">
                   THE MISTAKE: <span className="text-slate-600 font-normal">The employer pays her $10,000 and thinks they are done.</span>
                 </p>
                 <p className="text-green-600 font-bold text-sm">
                   THE LAW: <span className="text-slate-600 font-normal">Jane is owed 4% on <strong>all</strong> earnings. The employer owes her an additional <strong>$400</strong> (4% of the $10k bonus) as vacation pay. This is often missed, leading to cumulative liabilities over years.</span>
                 </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. The Commission Conundrum</h2>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">High Risk for Sales Organizations</p>

              <p className="text-slate-600 mb-6">
                Commissioned employees are the most frequently underpaid group regarding vacation pay. Because their income fluctuates, employers often fail to calculate the "time off" value of those commissions.
              </p>
              <p className="text-slate-600 mb-6">
                If a salesperson takes 2 weeks off, they typically earn $0 in commissions during that time. Therefore, their "Vacation Pay" bucket must be filled by the percentage earned on their closed deals throughout the year.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-red-600 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">Scenario: The Top Performer</h4>
                 <p className="text-slate-600 text-sm mb-4">
                   Mike is a sales rep earning 100% commission. He sells $200,000 worth of commissions in a year. 
                   <br/>
                   <span className="font-bold text-slate-900">Important Math:</span> The 4% vacation pay is calculated on the <span className="underline decoration-red-500 decoration-2 font-bold">full $200,000</span> of commissions. This means Mike is legally owed an additional <span className="font-bold text-red-600">$8,000</span> (4% of $200k) on top of his sales earnings.
                 </p>
                 <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <p className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Method A: Paid Per Cheque</p>
                        <p className="text-sm text-slate-600">
                          The employer adds 4% to every commission cheque. Mike gets $208,000 total cash. <br/><br/>
                          <strong>The Reality:</strong> When Mike takes 2 weeks off in August, he receives <strong>$0 pay</strong> for those weeks, because his vacation money was already paid out on every previous cheque. Mike must budget for this himself.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Method B: Accrued (Banked)</p>
                        <p className="text-sm text-slate-600">
                          The employer holds the 4% ($8,000) in a liability account. Mike earns $200,000 cash during the year. <br/><br/>
                          <strong>The Reality:</strong> When Mike takes 2 weeks off, the employer releases the <strong>$8,000</strong> to him so he gets a "paycheque" while sitting on the beach.
                        </p>
                    </div>
                 </div>
                 <p className="mt-6 text-sm font-bold text-slate-900 italic">
                   The Risk: Many employers simply pay the $200k commission and forget the 4% entirely. If Mike leaves, he can sue for that missing $8,000 (plus interest) for up to 2 years back.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. The Termination Pay Surprise</h2>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The "Compound Interest" of Firing</p>

              <p className="text-slate-600 mb-6">
                When an employee is terminated without cause, they are owed "pay in lieu of notice" (Termination Pay). In many jurisdictions (including Ontario and BC), <strong>vacation pay must be calculated on the termination pay itself.</strong>
              </p>
              <p className="text-slate-600 mb-6">
                Since termination pay is considered "wages" or "earnings" under the Employment Standards Act, it attracts vacation pay just like regular salary does.
              </p>

              <div className="bg-slate-900 text-white p-8 mb-6">
                 <h4 className="font-bold text-white mb-4 text-xl">The "Term Pay" Math</h4>
                 <ul className="space-y-3 text-sm text-slate-300">
                   <li className="flex justify-between border-b border-slate-700 pb-2">
                     <span>8 Weeks Pay in Lieu of Notice</span>
                     <span className="font-bold text-white">$10,000</span>
                   </li>
                   <li className="flex justify-between border-b border-slate-700 pb-2">
                     <span>Outstanding Vacation Accrual (Banked)</span>
                     <span className="font-bold text-white">$1,200</span>
                   </li>
                   <li className="flex justify-between items-center pt-2">
                     <span className="text-red-400 font-bold">Vacation Pay on Term Pay (4% of $10k)</span>
                     <span className="font-bold text-red-400 text-lg">+$400</span>
                   </li>
                 </ul>
                 <p className="mt-6 text-xs text-slate-400 italic">
                   *This $400 is frequently missed by DIY employers. If the employee files a Ministry claim, the employer is often audited for <strong>all</strong> employees, not just the one who was fired.
                 </p>
              </div>

              {/* Specific Note for Termination Pay Calculation */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-red-800 font-black mb-0 uppercase tracking-widest text-xs">Critical Compliance Note</p>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  Crucial: Vacation pay must be calculated on termination pay (pay in lieu of notice) just as it is on regular salary. 
                  In many legal disputes, failing to add this 4% or 6% to the termination amount results in "wrongful dismissal" findings and additional legal penalties.
                </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Can Employees Waive Vacation Pay?</h2>
              <p className="text-slate-600 mb-6">
                In Canada, the short answer is <strong>no</strong>. Employees cannot waive their legal right to vacation pay, even if they sign a contract agreeing to do so.
              </p>
              <p className="text-slate-600 mb-6">
                In the eyes of the law, vacation pay is a <strong>minimum standard</strong>, not a negotiable benefit. Here is how the law prevents you from "contracting out" of these obligations:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. The "No Contracting Out" Rule</h3>
              <p className="text-slate-600 mb-4">
                Most provincial laws (such as Ontario’s <em>Employment Standards Act</em>) and the federal <em>Canada Labour Code</em> have a specific "no contracting out" provision. This means:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>An employment contract is <strong>void</strong> if it offers less than the legal minimum.</li>
                <li>Even if an employee willingly signs a contract that says "I waive my 4% vacation pay," that clause is legally unenforceable.</li>
                <li>They cannot "trade" their vacation pay for other perks (like a slightly higher salary) if it brings their total compensation below the legal minimums + 4%.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Vacation Time vs. Vacation Pay</h3>
              <p className="text-slate-600 mb-4">
                There is a slight nuance between waiving <strong>time</strong> and waiving <strong>money</strong>:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Vacation Time:</strong> In some jurisdictions (like the Federal level or Ontario), you can sometimes allow an employee to waive their <strong>time off</strong> (the actual days away from work) if agreed in writing and approved by the Director (where applicable).</li>
                <li><strong>Vacation Pay:</strong> Even if they waive the <em>time off</em> and work through the year, you <strong>must still pay the 4%</strong>. They essentially get paid twice for those two weeks: once for the hours worked, and once for the 4% vacation pay earned.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. "Use It or Lose It" Policies</h3>
              <p className="text-slate-600 mb-4">
                Some employers have policies stating that if staff don't use vacation by year-end, they lose it.
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Legality:</strong> You can often force them to "lose" the <strong>time</strong> (i.e., you are not obligated to let them carry days over to next year).</li>
                <li><strong>The Catch:</strong> You <strong>cannot</strong> make them lose the <strong>pay</strong>. If they didn't take their vacation days, you must still pay out the accrued 4% (or 6% for long-term staff) at the end of the year or upon termination.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Using "Inclusive" Contracts</h3>
              <p className="text-slate-600 mb-4">
                Employers often try to write contracts stating that the annual salary is "inclusive of all vacation pay."
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Is this legal?</strong> Generally, yes, but only if the math works out. The base salary must be clearly high enough that the 4% is accounted for.</li>
                <li><strong>The Risk for Employers:</strong> If the contract is vague or if the employee earns "extra" money (like a bonus or overtime), you still owe 4% on that extra money. You cannot argue that the base salary covers 4% of a bonus they haven't earned yet.</li>
              </ul>

              <div className="bg-amber-50 p-6 border-l-4 border-amber-500 mb-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Strategic Note:</strong> Generally speaking, while this practice might be legally compliant, it is often perceived as <strong>not employee-friendly</strong>. It may not be a good business decision when trying to attract top talent. It is wise to consider your objective and what you are really trying to achieve with your compensation strategy.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6">Summary Table: Can they waive it?</h3>
              <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600">Feature</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600">Can employee waive?</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">4% Vacation Pay</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">NO</td>
                      <td className="px-6 py-4 text-sm text-slate-600">It must always be paid out, even if they work through vacation.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">Vacation Time (Days Off)</td>
                      <td className="px-6 py-4 text-sm font-bold text-amber-600">SOMETIMES</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Only with written agreement and, in some cases, government approval.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">Statutory Minimums</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">NO</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Contracts that offer less than the law are legally void.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mt-12 mb-8 uppercase tracking-tight">Summary Entitlements</h2>
              <div className="overflow-hidden border border-slate-200 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Employment Length</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Min. Vacation Time</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Min. Vacation Pay</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">0 – 5 Years</td>
                      <td className="px-6 py-4 text-sm text-slate-600">2 Weeks</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">4% of gross wages</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">5+ Years</td>
                      <td className="px-6 py-4 text-sm text-slate-600">3 Weeks</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">6% of gross wages</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">10+ Years*</td>
                      <td className="px-6 py-4 text-sm text-slate-600">4 Weeks</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">8% of gross wages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-4 italic mb-12">*Varies by province (e.g., Federal jurisdiction and some provinces increase to 8% after 10 years).</p>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      Vacation pay accrues on <strong>every dollar</strong> earned, including bonuses, commissions, and overtime.
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Failure to calculate vacation pay on "Termination Pay" (Pay in Lieu of Notice) is the #1 cause of Labour Board orders against small businesses after a dismissal.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <FAQ items={vacationFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Vacation Pay <span className="text-red-600">FAQ</span></h2>} />

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                  <ul className="space-y-2">
                      <li>
                          <a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/vacation" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              Ontario ESA: Vacation Pay Rules <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/time-off/vacation" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              BC Employment Standards: Annual Vacation <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.canada.ca/en/employment-social-development/services/labour-standards/reports/annual-vacation.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              Federal Labour Standards: Vacation (CLC) <span>↗</span>
                          </a>
                      </li>
                  </ul>
              </div>

            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Worried about your liability?</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Vacation accrual on variable income (bonuses, commissions) is the #1 reason for Ministry of Labour claims against small businesses. 
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigate('calculator')}
                    className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors"
                  >
                    Open Payroll Calculator
                  </button>
                  <button 
                    onClick={() => onNavigate('home', 'Vacation Pay Audit')}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg"
                  >
                    Get a Compliance Audit
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Maple's managed service automatically tracks vacation accrual on every bonus, commission, and overtime dollar, keeping you 100% compliant without spreadsheets."
                  </p>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VacationPayArticlePage;
