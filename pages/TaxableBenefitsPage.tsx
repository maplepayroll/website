
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface TaxableBenefitsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const TaxableBenefitsPage: React.FC<TaxableBenefitsPageProps> = ({ onNavigate }) => {
  const benefitsFaqs = [
    {
      q: "Are gift cards always taxable?",
      a: "Yes. The CRA considers gift cards to be 'near-cash'. Even if it's a $25 coffee card, it is taxable income and must be reported on the T4."
    },
    {
      q: "Does a company cell phone count as income?",
      a: "Not necessarily. If the cell phone is primarily for work use and the personal use is incidental, it is generally not a taxable benefit. However, if you simply pay the employee a flat $50/month allowance without receipts, that allowance IS taxable."
    },
    {
      q: "Are transit passes taxable?",
      a: "Yes. Employer-paid transit passes are currently considered a taxable benefit (this rule has changed back and forth over the years, but currently, it is taxable)."
    },
    {
      q: "Do I have to deduct CPP and EI from taxable benefits?",
      a: "It depends on the benefit. Cash/Near-Cash benefits (like gift cards) require CPP, EI, and Income Tax. Non-cash benefits (like parking) typically require CPP and Income Tax, but NOT EI (unless the benefit is paid in cash)."
    },
    {
      q: "Is a team lunch considered a taxable benefit?",
      a: "Generally no. If it is an occasional social event for all employees (less than 6 times per year), it is not taxable. However, if you provide free meals every day, that subsidized meal is a taxable benefit."
    },
    {
      q: "What about a company car?",
      a: "If an employee drives a company car for personal use (including commuting to/from home), it is a taxable benefit. You must calculate the 'Standby Charge' and 'Operating Cost Benefit' annually."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000" 
            alt="Employee Benefits and Perks" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              CRA Compliance Deep Dive
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Which Employee Perks Are <br/>
              <span className="text-red-500">Taxable Benefits?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              If your employees receive a benefit "by virtue of their employment," the CRA likely wants a cut. Misclassifying non-cash perks is the fastest way to fail a payroll audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Taxable Benefits Audit')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Audit Your Benefits
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
                A "Taxable Benefit" occurs whenever you provide something of value to an employee that isn't cash, and they don't pay you the fair market value for it.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">The "Taxability Matrix"</h2>
              <p className="text-slate-600 mb-8">
                Not all benefits attract all types of payroll taxes. Some require CPP but not EI; others only attract income tax. Use this guide to determine your withholding requirements.
              </p>

              <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Benefit Type</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Income Tax</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">CPP</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">EI</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Group Life Insurance Premiums</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Employer-Paid Parking (Downtown)</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Automobile Standby Charge</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Board & Lodging</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Gifts & Awards (Cash)</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-900 font-bold">Cell Phone Service (Personal Use)</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-green-600">YES</td>
                      <td className="px-6 py-4 text-center text-red-600">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. The "Parking Trap"</h2>
              <p className="text-slate-600 mb-6">
                If your business is located in a high-density area (like downtown Toronto or Vancouver) and you provide free parking to employees, you are likely providing a taxable benefit. The CRA calculates this based on the **Fair Market Value (FMV)** of the parking spot.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-red-600 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">When is it NOT taxable?</h4>
                 <ul className="text-slate-600 text-sm space-y-2 mb-0">
                   <li><strong>Scramble Parking:</strong> You have significantly fewer spots than employees (ratio of 3:4 or less).</li>
                   <li><strong>Business Use:</strong> The employee regularly needs their car to perform work duties (commuting doesn't count).</li>
                   <li><strong>Disability:</strong> Parking provided for employees with disabilities.</li>
                   <li><strong>Nil Value:</strong> You are in a location where parking is free for everyone (e.g., a rural office).</li>
                 </ul>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. The "Gifts & Awards" Rule</h2>
              <p className="text-slate-600 mb-6">
                The CRA allows you to give unlimited non-cash gifts (like holiday hampers or watches) as long as the combined value stays under **$500 per year**. Once you cross that threshold, every dollar over $500 becomes taxable.
              </p>

              <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-12">
                 <h4 className="font-bold text-slate-900 mb-2">Example: The Holiday Season</h4>
                 <p className="text-slate-600 text-sm mb-4">
                   You give Mark a birthday gift (value $200) and a holiday gift (value $400).
                 </p>
                 <p className="text-red-600 font-bold text-sm">
                   THE LIABILITY: <span className="text-slate-600 font-normal">Mark's total gifts equal $600. The first $500 is tax-free. The remaining <strong>$100</strong> must be added to his gross income as a taxable benefit on his T4.</span>
                 </p>
                 <p className="text-xs text-slate-400 mt-4 italic font-bold">Note: Gift cards are almost always considered "near-cash" and are taxable from the first dollar.</p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Automobile Benefits</h2>
              <p className="text-slate-600 mb-6">
                If an employee takes a company-owned vehicle home at night, they are receiving an "Automobile Benefit." This is calculated using two components: the <strong>Standby Charge</strong> and the <strong>Operating Cost Benefit</strong>.
              </p>

              <div className="bg-slate-900 text-white p-8 mb-12">
                 <h4 className="font-bold text-white mb-4 text-xl uppercase tracking-tight">Calculated Complexity</h4>
                 <ul className="space-y-4 text-sm">
                   <li className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-slate-400 uppercase tracking-widest text-[10px]">Standby Charge</span>
                     <span className="font-bold">2% of cost per month</span>
                   </li>
                   <li className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-slate-400 uppercase tracking-widest text-[10px]">Operating Cost</span>
                     <span className="font-bold">$0.33 per personal km (2024 rate)</span>
                   </li>
                 </ul>
                 <p className="mt-6 text-xs text-slate-400 italic font-medium leading-relaxed">
                   *This calculation requires the employee to keep a detailed logbook. Without it, the CRA will often default to the maximum possible taxable benefit during an audit.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Life Insurance Premiums</h2>
              <p className="text-slate-600 mb-6">
                This is the most common benefit missed by DIY employers. While health and dental premiums are generally not taxable (outside of Quebec), <strong>Group Life Insurance premiums paid by the employer are 100% taxable.</strong>
              </p>
              <p className="text-slate-600 mb-8">
                Every month, you must add the value of these premiums to the employee's gross pay for tax and CPP purposes. If you only do this at year-end, you may face "failure to remit" penalties for the monthly source deductions you missed.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-red-800 font-black mb-0 uppercase tracking-widest text-xs">The "Gross-Up" Option</p>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  Sometimes employers want to give a perk (like a trip) where the employee doesn't have to pay the tax. To do this, you must "Gross Up" the payment, essentially paying the tax on the employee's behalf. This significantly increases the total cost of the perk to the employer.
                </p>
              </div>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      If it's cash or "near-cash" (like a Visa gift card), it's taxable. Always.
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Forgetting to include employer-paid Life Insurance premiums in your regular pay run is a red flag for CRA auditors.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <FAQ items={benefitsFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Taxable Benefits <span className="text-red-600">FAQ</span></h2>} />

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                  <ul className="space-y-2">
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4130.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              CRA Guide T4130: Employers' Guide - Taxable Benefits <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/benefits-chart-a-z.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              CRA Benefits Chart A-Z <span>↗</span>
                          </a>
                      </li>
                  </ul>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Audit Your Perks</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Are you 100% sure your parking, cell phone, and gym memberships are being reported correctly?
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      onNavigate('home', 'Taxable Benefits Audit');
                    }}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg"
                  >
                    Request a Benefits Audit
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Maple's NPI-certified team audits your benefits list annually to ensure you are compliant before the T4 deadline hits. We reconcile life insurance premiums every single pay run."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxableBenefitsPage;
