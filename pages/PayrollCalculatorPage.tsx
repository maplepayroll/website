import React, { useState, useMemo, useEffect } from 'react';
import { PageType } from '../App';
import { calculatePayroll, PROVINCES, YEARLY_RATES, FEDERAL_BRACKETS } from '../services/payrollCalculator';
import FAQ from '../components/FAQ';

interface PayrollCalculatorPageProps {
  onNavigate: (page: PageType, context?: string) => void;
  defaultYear?: number;
}

const PayrollCalculatorPage: React.FC<PayrollCalculatorPageProps> = ({ onNavigate, defaultYear = new Date().getFullYear() }) => {
  const [taxYear, setTaxYear] = useState<number>(defaultYear);
  const [payRate, setPayRate] = useState<string>('65,000');
  const [payType, setPayType] = useState<'annual' | 'hourly'>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('40');
  const [displayFrequency, setDisplayFrequency] = useState<'daily' | 'weekly' | 'biweekly' | 'semi-monthly' | 'monthly' | 'annual'>('biweekly');
  const [selectedProvince, setSelectedProvince] = useState<string>('Ontario');
  const [perspective, setPerspective] = useState<'employee' | 'employer'>('employee');
  const [showAuditTrail, setShowAuditTrail] = useState(false);
  
  const [isCustomClaim, setIsCustomClaim] = useState(false);
  const [claimAmount, setClaimAmount] = useState<string>('15,964'); 
  const [preTaxDeductions, setPreTaxDeductions] = useState<string>('0');
  const [afterTaxDeductions, setAfterTaxDeductions] = useState<string>('0');
  const [taxableBenefits, setTaxableBenefits] = useState<string>('0');
  
  // Vacation State
  const [vacationRate, setVacationRate] = useState<number>(0.04);
  const [vacationMethod, setVacationMethod] = useState<'accrued' | 'paid_on_each_pay'>('accrued');
  const [isCustomVacation, setIsCustomVacation] = useState(false);

  useEffect(() => {
    if (defaultYear) setTaxYear(defaultYear);
  }, [defaultYear]);

  // Inject Schema Markup for AI/SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Maple Canadian Payroll Calculator",
      "operatingSystem": "Web",
      "applicationCategory": "FinanceApplication",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "CAD"
      },
      "description": "Professional-grade Canadian payroll calculator utilizing CRA computer formulas for 2024, 2025, and 2026. Calculates Net Pay, CPP, EI, and Federal/Provincial Income Tax.",
      "author": {
        "@type": "Person",
        "name": "Arshad Merali",
        "jobTitle": "Founder & Payroll Expert"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { 
      const existing = document.head.querySelector('script[type="application/ld+json"]');
      if (existing) document.head.removeChild(existing); 
    };
  }, []);

  const results = useMemo(() => {
    // Frequency Multiplier logic to ensure per-period amounts are annualized for the calculator service
    const frequencyMultipliers: Record<string, number> = {
      daily: 260,
      weekly: 52,
      biweekly: 26,
      'semi-monthly': 24,
      monthly: 12,
      annual: 1
    };
    const multiplier = frequencyMultipliers[displayFrequency] || 26;

    const rawPreTax = parseFloat(preTaxDeductions.replace(/,/g, '')) || 0;
    const rawAfterTax = parseFloat(afterTaxDeductions.replace(/,/g, '')) || 0;
    const rawTaxableBenefits = parseFloat(taxableBenefits.replace(/,/g, '')) || 0;

    return calculatePayroll({
      income: parseFloat(payRate.replace(/,/g, '')) || 0,
      payType,
      province: selectedProvince,
      year: taxYear,
      frequency: displayFrequency,
      hoursPerWeek: parseFloat(hoursPerWeek) || 40,
      claimAmount: isCustomClaim ? parseFloat(claimAmount.replace(/,/g, '')) : undefined,
      preTaxDeductions: rawPreTax * multiplier,
      afterTaxDeductions: rawAfterTax * multiplier,
      taxableBenefits: rawTaxableBenefits * multiplier,
      vacationRate,
      vacationMethod
    });
  }, [payRate, payType, hoursPerWeek, displayFrequency, selectedProvince, taxYear, isCustomClaim, claimAmount, preTaxDeductions, afterTaxDeductions, taxableBenefits, vacationRate, vacationMethod]);

  const scrollToCalculator = () => {
    document.getElementById('calculator-tool')?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatorFaqs = [
    {
      q: "What's CPP2 and why is it showing up in my 2025/2026 results?",
      a: "CPP2's the second tier of the Canada Pension Plan enhancement. It applies a 4% employee and 4% employer contribution only on earnings between the first ceiling (YMPE) and the second ceiling (YAMPE). Our calculator automatically triggers this once your projected annual income exceeds the YMPE."
    },
    {
      q: "Does this calculator handle the Basic Personal Amount (BPA) clawback?",
      a: "Yes. For high earners (typically over $184,857 in 2026), the Federal BPA's gradually reduced. This calculator uses the specific CRA step-down formula to ensure your tax estimates remain accurate for six-figure salaries."
    },
    {
      q: "How do Taxable Benefits like Life Insurance affect my net pay?",
      a: "Taxable benefits (non-cash perks) are added to your gross pay to calculate taxes and statutory deductions (CPP/EI). However, since they're non-cash, they're deducted from the 'Net Pay' result, as you've already received the benefit in value (e.g. your employer paid your life insurance premium or gave you a gift card balance)."
    },
    {
      q: "Why are the results for Quebec different from other provinces?",
      a: "Quebec manages its own pension plan (QPP) and parental insurance (QPIP) which have different rates and ceilings than the federal CPP and EI. Furthermore, Quebec income tax isn't integrated with the federal return in the same way, requiring separate T2 calculation logic which this tool supports."
    },
    {
      q: "What's the Ontario Health Premium (OHP)?",
      a: "The OHP's a provincial tax applied to individuals with taxable income above $20,000, introduced effective July 1, 2004. It's collected through the payroll system. This calculator includes the graduated OHP rates (up to $900/year) for all Ontario-based calculations."
    },
    {
      q: "What's the difference between 'Accrued' and 'Paid on Each Pay' vacation pay?",
      a: "'Accrued' means your vacation pay's banked and paid out only when you take time off or leave the company (common for salary). 'Paid on Each Pay' means you receive the 4% or 6% on every single paycheque (common for hourly or part-time staff)."
    },
    {
      q: "Can I use this for my year-end T4 reconciliation?",
      a: "While this tool's highly accurate, it's for estimation and projection. Year-end T4s require a full audit of every single pay run throughout the year to account for mid-year rate changes or status updates. Maple's managed service includes a full white-glove T4 audit as part of our core offering."
    },
    {
      q: "What are some examples of 'After-Tax Deductions'?",
      a: "After-tax deductions (also called non-statutory deductions) include items like garnishments (child support, CRA debt), social club or coffee fund contributions, repayment of company loans, and voluntary non-RRSP savings plans."
    },
    {
      q: "How accurate is this Canadian payroll calculator?",
      a: "This tool uses the CRA verified 'Computer Formula Standard'. Unlike basic calculators, it accounts for the BPA Step-Down (clawback) for high earners and provincial-specific health levies like the Ontario Health Premium."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" 
            alt="Accurate Canadian Payroll Calculator for Small Business" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-[10px] font-black tracking-[0.3em] mb-8 uppercase shadow-lg">
              Authorized Compliance Tool
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Free Canadian <br/>
              <span className="text-red-500">Payroll Calculator.</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                Calculate Canadian net pay, income tax, CPP, and EI premiums across all provinces using verified CRA formulas. This free tool supports yearly projections for 2024 through 2026, featuring precise calculations for the new CPP2 enhancement and provincial BPA clawback logic for high-earning individuals.
              </p>
            </div>

             <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={scrollToCalculator}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30"
              >
                Start Calculation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator-tool" className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-slate-50 p-10 border border-slate-200">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-8">Basic Pay Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Target Tax Year</label>
                <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
                  {Object.keys(YEARLY_RATES).map(yearStr => {
                    const y = parseInt(yearStr);
                    return (
                      <button 
                        key={y} 
                        onClick={() => setTaxYear(y)}
                        className={`px-4 py-2 text-[10px] font-black uppercase border transition-all ${taxYear === y ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-200 hover:border-red-200'}`}
                      >
                        {y}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Select Province</label>
                <select 
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-lg outline-none"
                >
                  {PROVINCES.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Gross Compensation</label>
                <div className="flex gap-2 mb-4">
                  {['annual', 'hourly'].map(t => (
                    <button key={t} onClick={() => setPayType(t as any)} className={`flex-1 py-3 text-[10px] font-black uppercase border transition-all ${payType === t ? 'bg-slate-900 text-white' : 'bg-white text-slate-500'}`}>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input type="text" value={payRate} onChange={(e) => setPayRate(e.target.value)} className="w-full bg-white border border-slate-200 pl-10 pr-6 py-4 rounded-none font-bold text-2xl" />
                </div>
              </div>

              {payType === 'hourly' && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Hours Per Week</label>
                  <input type="text" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-lg" />
                </div>
              )}

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Display Frequency</label>
                <select 
                  value={displayFrequency}
                  onChange={(e) => setDisplayFrequency(e.target.value as any)}
                  className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-lg outline-none"
                >
                  <option value="daily">Daily (260)</option>
                  <option value="weekly">Weekly (52)</option>
                  <option value="biweekly">Bi-Weekly (26)</option>
                  <option value="semi-monthly">Semi-Monthly (24)</option>
                  <option value="monthly">Monthly (12)</option>
                  <option value="annual">Annual (1)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 text-white border-l-4 border-red-600">
            <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-8">Vacation Pay</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                   <button 
                    onClick={() => setVacationMethod('accrued')}
                    className={`py-3 text-[9px] font-black uppercase border transition-all ${vacationMethod === 'accrued' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-500 border-slate-700'}`}
                   >
                     Accrued (Bank)
                   </button>
                   <button 
                    onClick={() => setVacationMethod('paid_on_each_pay')}
                    className={`py-3 text-[9px] font-black uppercase border transition-all ${vacationMethod === 'paid_on_each_pay' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-500 border-slate-700'}`}
                   >
                     Paid on Each Pay
                   </button>
                </div>
                {vacationMethod === 'paid_on_each_pay' && (
                  <div className="mt-4 p-3 bg-white/5 border border-white/10 animate-in fade-in slide-in-from-top-1 duration-300">
                     <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Written Agreement Required</p>
                     <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                       Written Agreement: For paying vacation pay on each cheque or during/after vacation, a written agreement with the employee's often required.
                     </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Vacation Rate (%)</label>
                <div className="flex gap-1 mb-4">
                  {[0.04, 0.06].map(rate => (
                    <button 
                      key={rate} 
                      onClick={() => {setVacationRate(rate); setIsCustomVacation(false);}}
                      className={`flex-1 py-2 text-[10px] font-black uppercase border transition-all ${!isCustomVacation && vacationRate === rate ? 'bg-red-600 text-white border-red-600' : 'bg-transparent text-slate-500 border-slate-700'}`}
                    >
                      {rate * 100}%
                    </button>
                  ))}
                  <button 
                    onClick={() => setIsCustomVacation(true)}
                    className={`flex-1 py-2 text-[10px] font-black uppercase border transition-all ${isCustomVacation ? 'bg-red-600 text-white border-red-600' : 'bg-transparent text-slate-500 border-slate-700'}`}
                  >
                    Custom
                  </button>
                </div>
                {isCustomVacation && (
                  <div className="relative animate-in slide-in-from-top-1 duration-200">
                    <input 
                      type="number" 
                      value={vacationRate * 100} 
                      onChange={(e) => setVacationRate(parseFloat(e.target.value) / 100)} 
                      className="w-full bg-slate-800 border border-slate-700 px-4 py-3 text-white font-bold" 
                      placeholder="e.g. 8"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">%</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Taxable (Non-Cash) Benefits</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Benefits (per pay period)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input type="text" value={taxableBenefits} onChange={(e) => setTaxableBenefits(e.target.value)} className="w-full bg-white border border-slate-200 pl-10 pr-4 py-3 text-slate-900 font-bold" />
                </div>
                <div className="mt-4 p-5 bg-slate-50 border-l-4 border-red-600">
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-3">Where're these received?</p>
                  <ul className="text-[10px] font-bold text-slate-500 space-y-3 uppercase tracking-tight">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">🛡️</span>
                      <span><strong>Life Insurance:</strong> Employer-paid premiums for group life or AD&D are taxable income.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">💳</span>
                      <span><strong>Card Balance:</strong> Gift cards or digital wallet balances given to staff are "near-cash" taxable benefits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">🚗</span>
                      <span><strong>Company Car:</strong> The value of personal use (standby charge)'s a non-cash taxable benefit.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 border border-slate-200">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">additional deductions</h3>
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Pre-Tax Deductions (per pay period)</label>
                <input type="text" value={preTaxDeductions} onChange={(e) => setPreTaxDeductions(e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 font-bold" />
                <div className="mt-3 p-4 bg-slate-100 rounded-none border-l-2 border-slate-300">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Examples:</p>
                  <ul className="text-[10px] font-bold text-slate-500 space-y-1 uppercase tracking-tight">
                    <li>🛡️ RPP (Registered Pension Plan)</li>
                    <li>🤝 Union Dues / Association Fees</li>
                    <li>💰 Group RRSP Contributions</li>
                    <li>🏢 Relocation Expenses (Moving)</li>
                  </ul>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">After-Tax Deductions (per pay period)</label>
                <input type="text" value={afterTaxDeductions} onChange={(e) => setAfterTaxDeductions(e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 font-bold" />
                <div className="mt-3 p-4 bg-slate-100 rounded-none border-l-2 border-slate-300">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Examples:</p>
                  <ul className="text-[10px] font-bold text-slate-500 space-y-1 uppercase tracking-tight">
                    <li>⚖️ Garnishments (FRO / child support)</li>
                    <li>💰 CRA debt repayment plans</li>
                    <li>☕ social club or coffee funds</li>
                    <li>🏠 repayment of company loans</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <button 
                  onClick={() => onNavigate('formula-manifest')}
                  className="text-[9px] text-slate-400 hover:text-red-500 transition-colors uppercase font-black tracking-widest flex items-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Inspect Math Sequence (CRA Verified)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="bg-slate-900 p-12 text-white border-l-8 border-red-600 shadow-2xl relative">
            <div className="flex justify-between items-center mb-12">
               <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Estimated Results for {taxYear}</p>
               <div className="flex bg-white/10 p-1 rounded-sm">
                  <button onClick={() => setPerspective('employee')} className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-all ${perspective === 'employee' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>Net Cash</button>
                  <button onClick={() => setPerspective('employer')} className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-all ${perspective === 'employer' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>Total Cost</button>
               </div>
            </div>

            <h2 className="text-6xl lg:text-[7rem] font-black tracking-tighter mb-4">
              {perspective === 'employee' ? results.netPay : results.totalEmployerCost}
            </h2>
            <p className="text-red-500 font-black uppercase tracking-widest mb-10">/ {displayFrequency.replace('-', ' ')} {perspective === 'employee' ? 'TAKE HOME CASH' : 'OUT-OF-POCKET'}</p>
            
            <div className="grid sm:grid-cols-2 gap-12 border-t border-white/10 pt-10">
              {perspective === 'employee' ? (
                <>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Income Breakdown</p>
                    <div className="space-y-4 text-sm font-medium">
                      <div className="flex justify-between"><span>Base Pay</span><span className="text-white">{results.basePay}</span></div>
                      {vacationMethod === 'paid_on_each_pay' && (
                        <div className="flex justify-between animate-in fade-in slide-in-from-top-1 duration-300">
                          <span>Vacation Pay ({vacationRate * 100}%)</span>
                          <span className="text-green-500">+{results.vacationPay}</span>
                        </div>
                      )}
                      {parseFloat(results.taxableBenefits.replace(/[^0-9.]/g, '')) > 0 && (
                        <div className="flex justify-between text-slate-400 italic">
                          <span>Taxable Benefits (Non-Cash)</span>
                          <span>+{results.taxableBenefits}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-white/5"><span>Federal Tax</span><span className="text-red-500">-{results.deductions.fedTax}</span></div>
                      <div className="flex justify-between"><span>Provincial Tax ({selectedProvince})</span><span className="text-red-500">-{results.deductions.provTax}</span></div>
                      {parseFloat(results.deductions.healthPremium.replace(/[^0-9.]/g, '')) > 0 && (
                        <div className="flex justify-between"><span>Health Premium (OHP)</span><span className="text-red-500">-{results.deductions.healthPremium}</span></div>
                      )}
                      {parseFloat(results.deductions.afterTax.replace(/[^0-9.]/g, '')) > 0 && (
                        <div className="flex justify-between border-t border-white/5 pt-2"><span>After-Tax Deductions</span><span className="text-red-500">-{results.deductions.afterTax}</span></div>
                      )}
                      {parseFloat(results.taxableBenefits.replace(/[^0-9.]/g, '')) > 0 && (
                        <div className="flex justify-between border-t border-white/5 pt-2 text-slate-500 text-[10px] uppercase font-black">
                          <span>Non-Cash Offset</span>
                          <span>-{results.taxableBenefits}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Statutory Contributions</p>
                    <div className="space-y-4 text-sm font-medium">
                      <div className="flex justify-between">
                        <span className="text-slate-400">{results.deductions.pensionLabel}</span>
                        <span className="text-red-500">-{results.deductions.pensionBase}</span>
                      </div>
                      {parseFloat(results.deductions.pension2.replace(/[^0-9.]/g, '')) > 0 && (
                        <div className="flex justify-between animate-in fade-in slide-in-from-top-1 duration-300">
                          <span className="text-slate-400">{results.deductions.pension2Label}</span>
                          <span className="text-red-500">-{results.deductions.pension2}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-400">EI Premium</span>
                        <span className="text-red-500">-{results.deductions.ei}</span>
                      </div>
                      {vacationMethod === 'accrued' && (
                        <div className="mt-8 p-4 bg-white/5 border border-white/10">
                           <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Accrual Note</p>
                           <p className="text-[11px] text-slate-300 font-medium">
                             {results.vacationPay}'s being held in your vacation bank this period.
                           </p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Employer Burden</p>
                    <div className="space-y-4 text-sm font-medium">
                      <div className="flex justify-between text-slate-300">
                        <span>{results.deductions.pensionLabel} Match</span>
                        <span className="text-red-500">+{results.employerBurden.cppBaseMatch}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>EI Match (1.4x)</span>
                        <span className="text-red-500">+{results.employerBurden.eiMatch}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Workplace Safety (Est.)</span>
                        <span className="text-red-500">+{results.employerBurden.wsib}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Vacation {vacationMethod === 'accrued' ? 'Accrual' : 'Payout'} ({vacationRate*100}%)</span>
                        <span className="text-red-500">+{results.employerBurden.vacation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-600/10 p-6 border border-red-600/20">
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4">Total Burden Profile</p>
                    <p className="text-3xl font-black text-white">+{Math.round((parseFloat(results.employerBurden.totalBurden.replace(/[^0-9.]/g, '')) / parseFloat(results.basePay.replace(/[^0-9.]/g, ''))) * 100)}%</p>
                    <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-tight">Relative to base gross</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-white p-10 border border-slate-100">
             <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">How's Canadian payroll calculated?</h2>
             <p className="text-slate-600 font-medium leading-relaxed mb-6">
               Calculating net pay in Canada involves a multi-step process prescribed by the Canada Revenue Agency (CRA). This calculator follows the <strong>How-To steps</strong> identified for computer-based payroll processing:
             </p>
             <ol className="space-y-4 mb-10">
               {[
                 { step: "Gross Determination", desc: "Convert hourly or annual rates into a total projected yearly income, including vacation pay (if paid on each pay) and non-cash taxable benefits (Life Insurance, etc.)." },
                 { step: "Statutory Deductions", desc: "Calculate CPP (5.95%) and EI (1.64%) up to the yearly maximum ceilings based on the total taxable gross." },
                 { step: "BPA Clawback", desc: "Apply the Basic Personal Amount reduction for incomes exceeding $184,857 (for 2026)." },
                 { step: "Graduated Tax Brackets", desc: "Apply both Federal T1 and Provincial T2 tax rates across specific income thresholds." }
               ].map((s, i) => (
                 <li key={i} className="flex gap-4">
                   <span className="w-6 h-6 bg-red-600 text-white flex-shrink-0 flex items-center justify-center font-black text-xs">{i+1}</span>
                   <p className="text-sm font-bold text-slate-700"><strong>{s.step}:</strong> <span className="font-medium text-slate-600">{s.desc}</span></p>
                 </li>
               ))}
             </ol>
          </div>
          
          <div className="flex justify-center pt-4">
            <button 
              onClick={() => onNavigate('home', constructCalcBrief(results, selectedProvince, taxYear))}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              Verify Calculations with Expert
            </button>
          </div>

          <div className="mt-16 p-8 bg-slate-50 flex flex-col md:flex-row items-center gap-8 border border-slate-200">
             <img src="https://picsum.photos/seed/payroll/100/100" className="w-20 h-20 rounded-full border-2 border-red-600" alt="Arshad Merali - Canadian Payroll Authority" />
             <div>
                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">Author & Expert Reviewer</p>
                <h4 className="text-xl font-black text-slate-900 uppercase">Arshad Merali</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  35 years of experience in Canadian compliance and NPI-certified operations. Regularly reviewed for accuracy against CRA guidelines.
                </p>
             </div>
          </div>
        </div>
      </section>

      <FAQ items={calculatorFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Calculator <span className="text-red-600">FAQ</span></h2>} />
    </div>
  );
};

const constructCalcBrief = (results: any, province: string, year: number) => {
  return `CALC_BRIEF: Net ${results.netPay} | Cost ${results.totalEmployerCost} | Prov ${province} | Year ${year}`;
};

export default PayrollCalculatorPage;