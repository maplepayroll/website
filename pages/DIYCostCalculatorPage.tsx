
import React, { useState, useMemo } from 'react';
import { PageType } from '../App';

interface DIYCostCalculatorPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const DIYCostCalculatorPage: React.FC<DIYCostCalculatorPageProps> = ({ onNavigate }) => {
  const [hoursPerMonth, setHoursPerMonth] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(100);
  const [staffCount, setStaffCount] = useState<number>(12);
  const [selectedTier, setSelectedTier] = useState<"Lil' Kim" | "Biggie Smalls">("Biggie Smalls");

  const pricing = {
    "Lil' Kim": 295,
    "Biggie Smalls": 695
  };

  const perEmployeeFee = 10; 

  const calculations = useMemo(() => {
    const diyMonthly = hoursPerMonth * hourlyRate;
    const mapleMonthlyBase = pricing[selectedTier];
    const mapleMonthlyVariable = staffCount * perEmployeeFee;
    const mapleTotalMonthly = mapleMonthlyBase + mapleMonthlyVariable;
    
    const monthlySavings = diyMonthly - mapleTotalMonthly;
    const annualSavings = monthlySavings * 12;
    
    // Detailed itemized estimates
    const riskMitigationValue = staffCount * 150; // $150 per head in risk reduction
    const softwareConsolidationValue = 600; // Est. annual cost of standalone payroll/HR tools
    const totalAnnualBenefit = annualSavings + riskMitigationValue + softwareConsolidationValue;

    return {
      diyMonthly,
      mapleTotalMonthly,
      monthlySavings,
      annualSavings,
      riskMitigationValue,
      softwareConsolidationValue,
      totalAnnualBenefit
    };
  }, [hoursPerMonth, hourlyRate, staffCount, selectedTier]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-xs font-black uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Resources
            </button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              The True Cost <br/>
              <span className="text-red-600">of DIY Payroll</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Most business owners underestimate their "Shadow Admin" costs. Use this tool to see how much your time is actually worth vs. a managed concierge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-slate-50 p-8 lg:p-12 border border-slate-200">
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Monthly Admin Time</label>
                    <span className="text-2xl font-black text-slate-900">{hoursPerMonth} Hours</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="40" 
                    value={hoursPerMonth} 
                    onChange={(e) => setHoursPerMonth(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="mt-6 p-4 bg-white border border-slate-200 rounded-none shadow-sm">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-3">What's in those hours?</p>
                    <ul className="text-[10px] font-bold text-slate-500 space-y-2 uppercase tracking-tight">
                      <li className="flex items-center gap-2">⏱️ tracking hourly sheets & variations</li>
                      <li className="flex items-center gap-2">📞 Answering employee tax/pay questions</li>
                      <li className="flex items-center gap-2">📄 Processing ROEs and new hire TD1s</li>
                      <li className="flex items-center gap-2">⚖️ calculating stat pay & vacation math</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Hourly Value</label>
                    <span className="text-2xl font-black text-slate-900">${hourlyRate}/hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="500" 
                    step="10"
                    value={hourlyRate} 
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                    Tip: As an owner/manager, your value should be based on your "Highest Best Use" (Sales, Strategy, Billable Client Time).
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Team Size</label>
                    <span className="text-2xl font-black text-slate-900">{staffCount} People</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={staffCount} 
                    onChange={(e) => setStaffCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Target Maple Tier</label>
                  <div className="grid grid-cols-2 gap-4">
                    {(["Lil' Kim", "Biggie Smalls"] as const).map(tier => (
                      <button 
                        key={tier}
                        onClick={() => setSelectedTier(tier)}
                        className={`py-4 px-4 font-black text-xs uppercase tracking-widest border-2 transition-all ${selectedTier === tier ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-red-600'}`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-red-50 border-l-4 border-red-600">
               <h4 className="font-black text-red-900 uppercase text-xs mb-3 tracking-widest">The "Hidden" Software Cost</h4>
               <p className="text-red-800 text-sm leading-relaxed font-medium">
                 Are you paying for standalone payroll apps ($500+ / yr) plus separate HR storage? Maple clients often consolidate their tech stack, saving an additional <strong>$600+ annually</strong> in subscription fees.
               </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border-4 border-slate-900 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-8 py-2 text-[10px] font-black uppercase tracking-widest">Analysis Result</div>
              
              <div className="p-12 pb-0">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Manual Shadow-Cost</p>
                    <p className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{formatCurrency(calculations.diyMonthly)}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Monthly Resource Drain</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Maple Managed Fee</p>
                    <p className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{formatCurrency(calculations.mapleTotalMonthly)}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Monthly Fixed Investment*</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-8 leading-relaxed italic">
                  * Note: Maple managed fees do not include the separate costs of applicable payroll software platforms, which can vary based on selection.
                </p>

                <div className="space-y-6 mb-12">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">Annual Value Breakdown</h4>
                  <div className="flex justify-between items-center group">
                    <span className="text-sm font-bold text-slate-500">Direct Cash Reclaimed (Your Time)</span>
                    <span className="font-black text-slate-900">{formatCurrency(calculations.annualSavings)}</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-sm font-bold text-slate-500">Risk & Compliance Mitigation (Est.)</span>
                    <span className="font-black text-slate-900">{formatCurrency(calculations.riskMitigationValue)}</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-sm font-bold text-slate-500">Software & Tool Consolidation</span>
                    <span className="font-black text-slate-900">{formatCurrency(calculations.softwareConsolidationValue)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-12 text-center border-t-8 border-red-600">
                <p className="text-xs font-black text-red-500 uppercase tracking-[0.4em] mb-6">Total Annual Reclaimed Value</p>
                <h2 className="text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter mb-8 leading-none">
                  {formatCurrency(calculations.totalAnnualBenefit)}
                </h2>
                <div className="flex flex-col items-center gap-6">
                  <div className="bg-white/10 px-8 py-3 text-white text-xs font-black uppercase tracking-[0.2em] border border-white/20">
                    ROI on Maple Services: {Math.round((calculations.totalAnnualBenefit / (calculations.mapleTotalMonthly * 12)) * 100)}%
                  </div>
                  <p className="text-slate-400 text-sm font-medium italic max-w-sm leading-relaxed">
                    "This represents {hoursPerMonth * 12} hours per year—equivalent to <strong>3 full work weeks</strong>—returned to your core business goals."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">🛡️</div>
                <h4 className="font-black text-slate-900 uppercase text-sm mb-4">Zero-Penalty Guarantee</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  The CRA penalty for late remittance or misfiled T4s averages $2,500. Our calculator assumes a conservative $150/head risk profile. With Maple, we absorb 100% of the liability for errors we cause.
                </p>
              </div>
              <div className="p-10 bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="font-black text-slate-900 uppercase text-sm mb-4">Growth Scalability</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  As you scale from 10 to 50 employees, the time required for DIY payroll grows exponentially, not linearly. Managed services keep your internal costs flat while you scale your impact.
                </p>
              </div>
            </div>

            <div className="pt-12 text-center">
              <button 
                onClick={() => onNavigate('home', `DIY_CALC_SAVINGS: ${formatCurrency(calculations.totalAnnualBenefit)}`)}
                className="w-full lg:w-auto px-20 py-8 bg-red-600 text-white font-black uppercase tracking-[0.2em] text-xl hover:bg-red-700 transition-all shadow-[0_30px_60_px_-15px_rgba(220,38,38,0.3)] transform hover:-translate-y-2"
              >
                Claim This Reclaimed Value
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Grid */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">The Efficiency Gap</h2>
             <p className="text-slate-500 font-medium">How Maple Managed eliminates the friction points of traditional payroll.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10 border-b border-slate-200 pb-4">Manual DIY (Resource Drain)</p>
                {[
                  { t: "Banking Frustration", d: "Chasing void cheques via email and updating accounts manually." },
                  { t: "Compliance Stress", d: "Monitoring CRA thresholds for EHT, WSIB, and CPP2 ceilings." },
                  { t: "Support Burden", d: "You are the 'help desk' for every T4 or pay stub question." },
                  { t: "ROE Web Delay", d: "Struggling with the CRA portal to file departures within 5 days." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-red-500 font-black text-2xl flex-shrink-0 mt-1">✕</span>
                    <div>
                      <p className="font-black text-slate-900 uppercase text-xs mb-1">{item.t}</p>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-8">
                <p className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-10 border-b border-red-100 pb-4">Maple Managed (Concierge Care)</p>
                {[
                  { t: "Digital Onboarding", d: "Staff input their own banking and TD1 info via our secure link." },
                  { t: "Auto-Pilot Compliance", d: "Our algorithms and pros track all thresholds automatically." },
                  { t: "Dedicated Concierge", d: "Staff calls US. You never hear another payroll question again." },
                  { t: "24h ROE Turnaround", d: "Departures are handled immediately via our ROE Web integration." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-green-600 font-black text-2xl flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-black text-slate-900 uppercase text-xs mb-1">{item.t}</p>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-[10px] font-black tracking-[0.2em] mb-10 uppercase">
          Your Sunday Nights, Reclaimed
        </div>
        <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-[0.9]">
          Stop Trading Your <br/>
          <span className="text-red-600">Sanity for Admin.</span>
        </h2>
        <p className="text-xl text-slate-600 mb-16 font-medium leading-relaxed">
          Professional Canadian businesses deserve professional Canadian support. We handle the math, the filings, and the humans.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => onNavigate('pricing')}
            className="px-16 py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-xl"
          >
            Explore Plan Tiers
          </button>
          <button 
             onClick={() => onNavigate('home', 'General Quote')}
             className="px-16 py-6 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all"
          >
            Get Expert Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default DIYCostCalculatorPage;
