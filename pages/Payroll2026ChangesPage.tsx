
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface Payroll2026ChangesPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const Payroll2026ChangesPage: React.FC<Payroll2026ChangesPageProps> = ({ onNavigate }) => {
  const comparisonData = [
    { label: "YMPE (First Ceiling)", val2025: "$71,300", val2026: "$72,700", change: "+$1,400" },
    { label: "YAMPE (Second Ceiling)", val2025: "$81,200", val2026: "$82,800", change: "+$1,600" },
    { label: "Basic Exemption", val2025: "$3,500", val2026: "$3,500", change: "No Change" },
    { label: "Max CPP (Employee)", val2025: "$4,034.10", val2026: "$4,117.40", change: "+$83.30" },
    { label: "Max CPP2 (Employee)", val2025: "$396.00", val2026: "$404.00", change: "+$8.00" },
    { label: "Max EI Insurable", val2025: "$65,700", val2026: "$67,000", change: "+$1,300" }
  ];

  const changesFaqs = [
    {
      q: "Why are the rates increasing again?",
      a: "The Canada Pension Plan is undergoing a multi-year enhancement to provide higher replacement income for future retirees. The increases in YMPE and YAMPE are also indexed to average wage growth in Canada."
    },
    {
      q: "What is CPP2?",
      a: "CPP2 is the 'Second Tranche' of contributions. It is an additional 4% contribution rate applied only to earnings that fall between the first ceiling ($72,700) and the second ceiling ($82,800)."
    },
    {
      q: "Do I need to update my payroll software?",
      a: "Yes. If you run manual payroll or use desktop software, you must update your tax tables before the first pay run of 2026. If you use a managed service like Maple, this is done automatically for you."
    },
    {
      q: "What happens if I under-deduct CPP?",
      a: "As the employer, you are liable for both the employee and employer share of any under-deduction. If caught during a PIER audit, you will have to pay the missing amount plus interest."
    },
    {
      q: "Did the $3,500 basic exemption change?",
      a: "No. The basic exemption amount remains frozen at $3,500. This means contributions start on the very first dollar earned above $3,500."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2000" 
            alt="Canadian Finance Chart" 
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
              Compliance Update
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              What Are The <br/>
              <span className="text-red-500">2026 Changes?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              A comprehensive guide to the finalized contribution limits for CPP, CPP2 (Enhanced), and Employment Insurance effective January 1, 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                Run 2026 Calculation
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
                The Canada Revenue Agency has confirmed the payroll contribution limits for the upcoming year. 2026 sees the continued maturation of the "CPP Enhanced" (CPP2) bracket with a finalized YAMPE of $82,800.
              </p>

              {/* Visual Breakdown Section */}
              <div className="bg-slate-50 border border-slate-200 p-8 mb-12 rounded-xl">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">2026 Impact Visualization</h3>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* Left: COLA Chart */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Inflation Adjustment Trend</h4>
                    <div className="flex items-end gap-4 h-48 border-b border-slate-300 pb-2">
                      <div className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-xs font-bold text-slate-400">6.5%</span>
                        <div className="w-full bg-slate-300 h-40 rounded-t-sm group-hover:bg-slate-400 transition-colors"></div>
                        <span className="text-xs font-black text-slate-600 uppercase">2023</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-xs font-bold text-slate-400">4.4%</span>
                        <div className="w-full bg-slate-300 h-28 rounded-t-sm group-hover:bg-slate-400 transition-colors"></div>
                        <span className="text-xs font-black text-slate-600 uppercase">2024</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-xs font-bold text-slate-400">2.7%</span>
                        <div className="w-full bg-slate-300 h-16 rounded-t-sm group-hover:bg-slate-400 transition-colors"></div>
                        <span className="text-xs font-black text-slate-600 uppercase">2025</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-xs font-bold text-red-600">2.0%</span>
                        <div className="w-full bg-red-600 h-12 rounded-t-sm"></div>
                        <span className="text-xs font-black text-red-600 uppercase">2026</span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 font-medium leading-relaxed">
                      The cost-of-living increase for CPP payments is projected to stabilize at 2% for 2026, a significant drop from the inflationary peaks of previous years.
                    </p>
                  </div>

                  {/* Right: Contribution Staircase */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">2026 Contribution Tiers</h4>
                    <div className="space-y-2">
                      {/* Tier 2 */}
                      <div className="flex items-center">
                        <div className="w-24 text-right pr-4 text-xs font-bold text-slate-400">$82,800</div>
                        <div className="flex-grow bg-red-600 text-white p-3 rounded-r-lg relative group">
                          <p className="text-xs font-black uppercase tracking-widest">Enhanced (CPP2)</p>
                          <p className="text-[10px] font-medium opacity-90">4.00% on earnings above $72,700</p>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 px-2 py-1 rounded text-[10px] font-bold">Max $404</div>
                        </div>
                      </div>
                      
                      {/* Tier 1 */}
                      <div className="flex items-center">
                        <div className="w-24 text-right pr-4 text-xs font-bold text-slate-400">$72,700</div>
                        <div className="flex-grow w-[85%] bg-amber-400 text-slate-900 p-3 rounded-r-lg shadow-sm relative group">
                          <p className="text-xs font-black uppercase tracking-widest">Base CPP</p>
                          <p className="text-[10px] font-medium opacity-80">5.95% on earnings above $3,500</p>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 px-2 py-1 rounded text-[10px] font-bold">Max $4,117</div>
                        </div>
                      </div>

                      {/* Tier 0 */}
                      <div className="flex items-center">
                        <div className="w-24 text-right pr-4 text-xs font-bold text-slate-400">$3,500</div>
                        <div className="flex-grow w-[15%] bg-slate-200 text-slate-500 p-2 rounded-r-lg">
                          <p className="text-[10px] font-black uppercase tracking-widest">Exempt</p>
                          <p className="text-[9px]">0%</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <div className="w-24"></div>
                        <div className="pl-2">
                           <p className="text-xs font-bold text-slate-900">
                             Total 2026 Max Contribution: <span className="text-red-600 font-black">$4,521.40</span>
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">At a Glance: 2025 vs 2026</h2>
              <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Metric</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest">2025</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest">2026</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest">Diff</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 font-medium">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 text-sm font-bold text-slate-900">{row.label}</td>
                        <td className="px-6 py-4 text-sm text-right text-slate-600">{row.val2025}</td>
                        <td className="px-6 py-4 text-sm text-right text-slate-900 font-bold">{row.val2026}</td>
                        <td className="px-6 py-4 text-sm text-right text-red-600 font-bold">{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. CPP & The YMPE</h2>
              <p className="text-slate-600 mb-6">
                The <strong>Year's Maximum Pensionable Earnings (YMPE)</strong> acts as the "first ceiling" for pension contributions. For 2026, this limit is confirmed at <strong>$72,700</strong>.
              </p>
              <p className="text-slate-600 mb-6">
                Employees and employers contribute 5.95% on earnings between the basic exemption ($3,500) and this YMPE ceiling. The maximum base contribution for 2026 is <strong>$4,117.40</strong> each.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. The "CPP2" Adjustment</h2>
              <p className="text-slate-600 mb-6">
                Introduced as part of the CPP Enhancement, the <strong>Year's Additional Maximum Pensionable Earnings (YAMPE)</strong> creates a second tier of contributions for higher earners.
              </p>
              <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-8">
                <h4 className="font-bold text-slate-900 mb-2">How CPP2 Works in 2026</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Tier 1:</strong> You pay 5.95% on income up to $72,700 (YMPE).</li>
                  <li><strong>Tier 2:</strong> You pay 4.00% on income <em>between</em> $72,700 and $82,800 (YAMPE).</li>
                  <li><strong>Result:</strong> High-income earners will see a separate deduction line item on their pay stubs once their year-to-date earnings cross the first threshold.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Wage Growth Indexing</h2>
              <p className="text-slate-600 mb-6">
                These increases aren't arbitrary. They are calculated based on the <strong>average weekly wages and salaries</strong> in Canada. As wages rise due to inflation and economic growth, the CRA indexes the YMPE to ensure the pension plan remains relevant to the cost of living.
              </p>
              <p className="text-slate-600 mb-6">
                For 2026, the YAMPE is set at approximately <strong>114%</strong> of the YMPE, solidifying the range for the second tranche of contributions.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Employment Insurance (EI)</h2>
              <p className="text-slate-600 mb-6">
                The Maximum Insurable Earnings (MIE) for EI also rises to <strong>$67,000</strong> for 2026. This means employers will pay premiums on a larger portion of each employee's salary.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  Employer Note: Remember that the employer portion of EI is 1.4x the employee contribution. With the MIE increasing to $67,000, your maximum liability per employee also increases.
                </p>
              </div>

              {/* The Bottom Line Section */}
              <div className="bg-slate-900 text-white p-8 my-12 shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
                    <p className="text-lg font-bold leading-relaxed">
                      CPP2 is here to stay. It is no longer "new," it is standard. High-income earners will see deductions continue later into the year.
                    </p>
                  </div>
                  <div className="h-px bg-white/20 my-4"></div>
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      Failing to update your payroll software tables by Dec 31st will result in under-deducting CPP2 in January, leaving you liable for the shortfall.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <FAQ items={changesFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2026 Changes <span className="text-red-600">FAQ</span></h2>} />

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
                  <ul className="space-y-2">
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-news-room/payroll-deductions-tables.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              CRA: Payroll Deductions Formulas for Computer Programs <span>↗</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                              CRA: CPP Contribution Rates, Maximums and Exemptions <span>↗</span>
                          </a>
                      </li>
                  </ul>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Budget for 2026</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  The increase in CPP2 and EI maximums means your fixed labour costs for high-earners will rise effectively on Jan 1st.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigate('calculator')}
                    className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors"
                  >
                    Use 2026 Calculator
                  </button>
                  <button 
                    onClick={() => onNavigate('home', 'General Quote')}
                    className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors"
                  >
                    Automate Updates
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Maple Advantage</p>
                  <p className="text-sm font-medium text-slate-700 italic">
                    "Our systems automatically update these rate tables at midnight on Dec 31st. You never have to manually adjust a deduction limit again."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payroll2026ChangesPage;
