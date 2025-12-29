
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface NonTaxableBenefitsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const NonTaxableBenefitsPage: React.FC<NonTaxableBenefitsPageProps> = ({ onNavigate }) => {
  const nonTaxableFaqs = [
    {
      q: "Do I need to keep receipts for moving expenses to be non-taxable?",
      a: "Absolutely. If you provide a flat 'moving allowance' without receipts, it is a taxable cash benefit. If you reimburse actual expenses based on receipts, it is non-taxable."
    },
    {
      q: "Can I pay for my employee's gym membership tax-free?",
      a: "Generally, no. Paying for a 3rd party gym membership is a taxable benefit. The only exception is if you provide an on-site fitness facility available to all employees."
    },
    {
      q: "Is tuition reimbursement always tax-free?",
      a: "No. It must be for training that primarily benefits the employer (e.g. upgrading skills for their job). If it's purely for personal interest (like a cooking class for a software developer), it is taxable."
    },
    {
      q: "What about providing coffee and snacks in the office?",
      a: "Subsidized meals or refreshments are generally not taxable if provided for all employees and the cost is reasonable (not extravagant)."
    },
    {
      q: "Can I give a $100 wedding gift to an employee tax-free?",
      a: "Yes, as long as it is a non-cash gift (not a gift card) and their total non-cash gifts for the year are under $500. Wedding gifts can also fall under a separate CRA administrative policy for 'Special Occasions'."
    },
    {
      q: "Are private health services plan (PHSP) premiums taxable?",
      a: "In most of Canada, employer-paid premiums for a private health plan are non-taxable. HOWEVER, in Quebec, these premiums ARE taxable for provincial income tax purposes."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
            alt="Happy employees in a modern office" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Tax-Efficiency Guide
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Which Employee Perks Are <br/>
              <span className="text-red-500">Non-Taxable Benefits?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Reward your team without increasing their tax burden. Learn how to leverage CRA-approved non-taxable perks to build a world-class culture efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Tax-Efficient Benefits Planning')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Plan Your Benefits
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
                A "Non-Taxable Benefit" is a perk provided to an employee that the CRA does not consider part of their income. These are powerful tools for recruitment and retention because they provide full value to the employee at zero tax cost.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">The "Non-Taxability Matrix"</h2>
              <p className="text-slate-600 mb-8">
                Most perks are non-taxable only if they meet specific criteria. Use this matrix as a starting point for your compensation strategy.
              </p>

              <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Perk Type</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Income Tax</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">CPP/EI</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Health & Dental Premiums</td>
                      <td className="px-6 py-4 text-center text-red-600">NO*</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Taxable for QC Provincial Tax</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Non-Cash Gifts & Awards</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Under $500 total/year</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Counseling Services</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Mental/Physical health focus</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Employer-Paid Tuition</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Must benefit the employer</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Relocation Expenses</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Reimbursed with receipts</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Safety Boots / Uniforms</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                      <td className="px-6 py-4 text-center text-slate-500 text-xs italic">Required for work duties</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Counseling and Wellness</h2>
              <p className="text-slate-600 mb-6">
                Employee Assistance Programs (EAPs) or employer-paid counseling for mental health, physical health, or career transition are generally non-taxable. This is one of the most cost-effective ways to support your team while improving productivity.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-red-600 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">What qualifies?</h4>
                 <ul className="text-slate-600 text-sm space-y-2 mb-0">
                   <li><strong>Mental Health:</strong> Sessions with a registered psychologist or social worker.</li>
                   <li><strong>Physical Health:</strong> Rehabilitation or wellness assessments required for the job.</li>
                   <li><strong>Retirement Planning:</strong> Fees paid for professional financial counseling for employees nearing retirement.</li>
                   <li><strong>Outplacement:</strong> Services to help a terminated employee find new employment.</li>
                 </ul>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. The "Gifts & Awards" Exemption</h2>
              <p className="text-slate-600 mb-6">
                While cash is always taxable, the CRA allows you to give non-cash gifts (like a tablet or a gourmet basket) and non-cash awards (for long service or safety) tax-free, up to a combined total of **$500 per year**.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">The "Hidden" Efficiency</h4>
                 <p className="text-slate-600 text-sm mb-4">
                   If you give an employee a $400 gift, they get $400 of value. If you give them a $400 bonus, after tax, they might only see $250 in their bank account.
                 </p>
                 <p className="text-green-600 font-bold text-sm">
                   PRO TIP: <span className="text-slate-600 font-normal">Small, non-cash gestures throughout the year are significantly more tax-efficient than small cash bonuses.</span>
                 </p>
                 <p className="text-xs text-slate-400 mt-4 italic font-bold">Important: Gift cards that can be used like cash (e.g., Visa/Mastercard prepaid) do NOT qualify and are always taxable.</p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Education & Professional Development</h2>
              <p className="text-slate-600 mb-6">
                If the employer pays for or reimburses tuition for a course that mainly benefits the employer, the benefit is non-taxable. This includes courses to maintain or upgrade job-related skills.
              </p>

              <div className="bg-slate-900 text-white p-8 mb-12">
                 <h4 className="font-bold text-white mb-4 text-xl uppercase tracking-tight">CRA Criteria for Non-Taxability</h4>
                 <ul className="space-y-4 text-sm">
                   <li className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-slate-400 uppercase tracking-widest text-[10px]">Specific Training</span>
                     <span className="font-bold">Directly related to current role</span>
                   </li>
                   <li className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-slate-400 uppercase tracking-widest text-[10px]">General Training</span>
                     <span className="font-bold">Required for future promotions</span>
                   </li>
                 </ul>
                 <p className="mt-6 text-xs text-slate-400 italic font-medium leading-relaxed">
                   *Personal interest courses (like a cooking class for an IT worker) are always taxable benefits.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Relocation Expenses</h2>
              <p className="text-slate-600 mb-6">
                Helping an employee move for work is a high-value perk. Reimbursing "reasonable" moving expenses—such as packing, transport, and temporary living costs—is non-taxable if handled correctly.
              </p>
              <p className="text-slate-600 mb-8">
                To remain non-taxable, you must ensure the employee provides receipts for all expenses. Simply providing a "lump sum" moving allowance without receipts is considered a taxable allowance and must be added to their T4.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-red-800 font-black mb-0 uppercase tracking-widest text-xs">The Quebec Health Tax Exception</p>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  Crucial for Quebec Employers: Health and dental premiums paid by the employer are <strong>taxable for Quebec provincial income tax</strong> purposes. This means while the federal T4 won't show it, the Quebec RL-1 slip must include the value of these premiums in Box J.
                </p>
              </div>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      Documentation is your defense. To keep a benefit non-taxable (like relocation or tuition), you MUST have receipts on file.
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Giving a flat monthly "allowance" (e.g. $100 for cell phone) without requiring receipts makes it 100% taxable income. Reimbursement based on actual bills is safer.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <FAQ items={nonTaxableFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Non-Taxable Perks <span className="text-red-600">FAQ</span></h2>} />

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                  <ul className="space-y-2">
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/gifts-awards-social-events/gifts-awards-long-service-awards.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              CRA Policy: Gifts, Awards, and Long-Service Awards <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-2-employers-employees/series-2-folio-3-benefits-allowances/income-tax-folio-s2-f3-c2-benefits-allowances-received-employment.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              Income Tax Folio S2-F3-C2: Benefits and Allowances <span>↗</span>
                          </a>
                      </li>
                  </ul>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Audit Your Benefits</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Are you missing out on tax-efficient ways to pay your team? Or accidentally reporting non-taxable perks as income?
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      onNavigate('home', 'Benefits Policy Review');
                    }}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg"
                  >
                    Request a Policy Review
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Maple's concierge team works with your benefits provider to ensure your deductions are coded correctly for both CRA and Revenu Québec, preventing year-end T4 amendments."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonTaxableBenefitsPage;
