import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface PayrollReviewArticlePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PayrollReviewArticlePage: React.FC<PayrollReviewArticlePageProps> = ({ onNavigate }) => {
  const reviewFaqs = [
    {
      q: "What defines an 'Audit Guardrail' in payroll?",
      a: "An audit guardrail is a predefined limit for variations in your payroll data. For example, 'Flag any employee whose pay increases by more than 15% from the previous cycle' or 'Flag any overtime exceeding 20 hours.' It sets the boundaries for what is considered legitimate."
    },
    {
      q: "How does Maple mimic Sarbanes-Oxley (SOX) compliance?",
      a: "While SOX is for public companies, Maple applies the same core principles: Separation of Duties (the person entering data is not the person approving it) and a Verifiable Audit Trail. Every variance must have a documented reason code and a digital timestamp of approval before funds are moved."
    },
    {
      q: "What is 'Management Representation' in payroll?",
      a: "It is a formal acknowledgement from the business owner or CFO that they have reviewed the variances flagged by Maple's guardrails and confirm they are legitimate business expenses (e.g., an approved bonus or promotion)."
    },
    {
      q: "Is a 'Software Alert' enough of a guardrail?",
      a: "Rarely. Software alerts are often 'clicked through' by busy administrators. A true guardrail requires a human-in-the-middle to investigate the 'why' behind the flag and obtain a secondary sign-off."
    },
    {
      q: "How often should a full Guardrail review occur?",
      a: "A primary review should happen every single pay cycle before the funding is released. A more comprehensive 'Global Review'—checking YTD totals and deduction balancing—should occur at least once per quarter."
    },
    {
      q: "What is the most commonly missed guardrail?",
      a: "The termination logic. Businesses often stop paying an employee but fail to check if they were accidentally left on the benefits enrollment or if their final vacation pay math was audited by a second set of eyes."
    },
    {
      q: "Does this strategy apply to micro-businesses (1-5 staff)?",
      a: "Yes. Even if you only have two employees, the guardrail is simply the contract. If a paycheque deviates from the agreed-upon salary by even $1.00, it should trigger a documented explanation."
    },
    {
      q: "How do I document a sign-off if I work remotely?",
      a: "Digital trails are preferred. Maple's portal provides a 'Variance Summary' where the Manager clicks to approve individual flags, creating a legal audit trail for CRA or internal purposes."
    },
    {
      q: "What happens if a guardrail is missed and an error occurs?",
      a: "This is a 'Control Failure.' You should immediately conduct a root-cause analysis. Was the threshold too high? Adjust the guardrail settings to ensure it doesn't happen twice."
    },
    {
      q: "Can I automate the guardrail checking process entirely?",
      a: "Automation identifies the flags, but the 'validation' must remain human. True compliance requires professional judgment to determine if a variance is legitimate or an error."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Structured Business Review" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest mb-8 hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg">
              Internal Control Framework
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              The Importance <br/>
              of Audit <span className="text-red-500">Guardrails.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              To move beyond just identifying what changed and move toward verifying that those changes are legitimate, you need to establish specific "Audit Guardrails."
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'System Audit')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl"
              >
                Request a Control Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-900 mb-12 leading-relaxed border-l-4 border-red-600 pl-6">
                Most businesses treat payroll as a "check-the-box" task. But without a rigorous framework for variance review and documented sign-offs, your business is one data-entry error away from a catastrophe.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">The $1.6M Cautionary Tale</h2>
              <p className="text-slate-600 mb-12">
                A recent <a href="https://www.hrreporter.com/focus-areas/payroll/health-pei-payroll-probe-flags-costly-hr-control-gaps/393911" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold underline">probe into Health PEI</a> revealed significant HR control gaps that led to widespread payroll overpayments. Errors in data entry and unauthorized rate changes went undetected for months because no one was required to explain <em>why</em> a specific pay period deviated from the norm.
              </p>

              {/* The Maple Standard Section */}
              <div className="bg-slate-900 p-12 text-white my-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h2 className="text-xs font-black text-red-500 uppercase tracking-[0.4em] mb-6">The Maple Managed Standard</h2>
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
                  Applying <span className="text-red-500">Sarbanes-Oxley Discipline</span> <br/> to Private Business.
                </h3>
                <p className="text-slate-400 font-medium mb-12 leading-relaxed">
                  In the public markets, the Sarbanes-Oxley (SOX) Act mandates strict internal controls over financial reporting. We believe private Canadian SMEs deserve the same protection. Maple implements a "Three-Key" validation system for every pay cycle:
                </p>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  <div className="bg-white/5 p-6 border border-white/10">
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-4">Key 01: Specialist</p>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Data Entry & Flagging</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">Our specialists input changes and run automated guardrail checks to identify any variance exceeding 5% or $50.</p>
                  </div>
                  <div className="bg-white/5 p-6 border border-white/10">
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-4">Key 02: Verification</p>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Human Investigation</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">A secondary expert investigates the "Why." We cross-reference flags against offer letters, contracts, and timesheet reports.</p>
                  </div>
                  <div className="bg-white/5 p-6 border border-white/10">
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-4">Key 03: Owner</p>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Management Rep</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">The business owner receives a clean Variance Summary and provides a digital sign-off, confirming the "Legitimacy" of the spend.</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Control Result: Total Separation of Duties</p>
                   <div className="bg-green-500/20 text-green-400 px-4 py-1 text-[10px] font-black uppercase tracking-widest border border-green-500/30">
                     Audit Readiness: High
                   </div>
                </div>
              </div>

              <div className="my-16 space-y-12">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Essential Guardrail Parameters</h3>
                
                <div className="space-y-10">
                  <div className="group">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm">1</span>
                      Headcount Reconciliation (The "Leaver/Joiner" Check)
                    </h4>
                    <p className="text-slate-600 mb-4">Comparing the total number of employees isn't enough; you need to account for the "in and out" movement.</p>
                    <ul className="space-y-3 pl-12 text-slate-600 text-sm font-medium">
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Starters:</strong> Match the "New Employee" variance against signed offer letters and HR contracts.</li>
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Leavers:</strong> Ensure "Terminated" employees have a final pay calculation (including accrued vacation payout) and that their status is "Inactive" to prevent "ghost employee" fraud.</li>
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Static Count:</strong> If the headcount is the same but the cost is different, you know the variance is purely rate or hour-based.</li>
                    </ul>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm">2</span>
                      Gross Pay Logic (Rate vs. Volume)
                    </h4>
                    <p className="text-slate-600 mb-4">When Gross Pay varies, you must determine if it’s because people worked more or are being paid more.</p>
                    <ul className="space-y-3 pl-12 text-slate-600 text-sm font-medium">
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Rate Changes:</strong> Filter for any employee whose base hourly rate or annual salary changed. Is there a promotion letter or a cost-of-living adjustment (COLA) on file?</li>
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Overtime (Volume):</strong> If Gross Pay is up but rates are flat, check the Overtime report. Cross-reference this with a manager-approved timesheet report.</li>
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Retroactive Pay:</strong> Look for "back-pay" entries. These are common culprits for massive, one-time Gross Pay spikes.</li>
                    </ul>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm">3</span>
                      "Legitimacy" Thresholds (The 5% Rule)
                    </h4>
                    <p className="text-slate-600 mb-4">Professional auditors often use a Tolerance Threshold.</p>
                    <div className="bg-slate-50 p-6 border border-slate-200 ml-12">
                      <p className="text-sm font-bold text-slate-700 italic">"Example: You might decide that any individual variance under $50 or 2% is 'noise' (minor rounding or tax adjustments), but anything over 5% requires a mandatory comment or 'reason code' (e.g., 'Annual Bonus', 'Unpaid Leave')."</p>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm">4</span>
                      Categorized Benefit/Leave Variances
                    </h4>
                    <p className="text-slate-600 mb-4">Break down your "Holiday" and "Vacation" checks into these specific buckets:</p>
                    <ul className="space-y-3 pl-12 text-slate-600 text-sm font-medium">
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Statutory vs. Discretionary:</strong> Did a public holiday occur in this period? If so, the "Holiday Pay" variance should be consistent across the entire hourly population.</li>
                      <li className="flex gap-3"><span className="text-red-600">■</span> <strong>Vacation Accrual vs. Paid:</strong> Ensure that "Vacation Pay" paid out matches a corresponding reduction in the employee's vacation balance. If they got paid vacation but their balance didn't drop, that is an illegitimate variance (overpayment).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mt-20 mb-8 uppercase tracking-tight">Summary Checklist for Variance Validation</h2>
              <div className="overflow-hidden border border-slate-200 shadow-sm mb-16">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Parameter</th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">What to Verify</th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Evidence Needed</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 text-sm font-black text-slate-900">Gross Pay</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Is the increase due to a rate change or more hours?</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">Updated Contract or Approved Timesheet</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-black text-slate-900">Holiday Pay</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Does the variance align with a calendar public holiday?</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">Company Holiday Calendar</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-black text-slate-900">Net Pay</td>
                      <td className="px-6 py-4 text-sm text-slate-600">If Gross is the same but Net is lower, why?</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">Tax code changes or new benefit deductions</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-black text-slate-900">Manual Checks</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Were any "Off-cycle" payments made?</td>
                      <td className="px-6 py-4 text-sm font-bold text-red-600">Manual check log and CFO approval</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-8 my-12">
                <p className="text-red-800 font-bold leading-relaxed italic">
                  "The Health PEI situation was a failure of visibility. You cannot manage what you do not measure. Establishing documented guardrails for variances is the single most effective way to protect your business's bank account."
                </p>
                <p className="text-xs font-black text-red-600 uppercase tracking-widest mt-4">— Arshad Merali, Founder</p>
              </div>

              <FAQ items={reviewFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Audit Framework <span className="text-red-600">FAQ</span></h2>} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight">Does your review have teeth?</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                If you aren't using rigid thresholds and signed checklists, your "review" is just a formality.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('home', 'System Audit')}
                  className="w-full py-4 bg-red-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-all shadow-xl"
                >
                  Request a Control Audit
                </button>
                <button 
                  onClick={() => onNavigate('calculator')}
                  className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all"
                >
                  Run Variance Simulations
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Internal Control Standard</p>
                <div className="p-4 bg-white border border-slate-100 rounded-sm mb-6">
                  <p className="text-xs font-black text-red-600 uppercase mb-2">Audit Readiness Score</p>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">Maple Managed clients score 98% higher on external audits due to our mandatory sign-off protocols.</p>
                </div>
                <a 
                  href="https://www.hrreporter.com/focus-areas/payroll/health-pei-payroll-probe-flags-costly-hr-control-gaps/393911" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-red-600 flex items-center gap-2 group"
                >
                  Health PEI Payroll Probe Analysis
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
              Set the Guardrails. <br/> <span className="text-red-600">Secure your Cash.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              We don't just run payroll; we guard it. Let us build your "Audit Guardrail" strategy today.
            </p>
            <button 
              onClick={() => onNavigate('home', 'Outsourcing Transition')}
              className="px-16 py-6 bg-white text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all"
            >
              Partner with Maple
            </button>
         </div>
      </section>
    </div>
  );
};

export default PayrollReviewArticlePage;