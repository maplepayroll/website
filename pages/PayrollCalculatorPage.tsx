
import React, { useState, useMemo } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface PayrollCalculatorPageProps {
  onNavigate: (page: PageType) => void;
}

const PROVINCES = [
  { name: 'Ontario', taxRate: 0.0505 },
  { name: 'British Columbia', taxRate: 0.0506 },
  { name: 'Alberta', taxRate: 0.10 },
  { name: 'Manitoba', taxRate: 0.108 },
  { name: 'New Brunswick', taxRate: 0.094 },
  { name: 'Newfoundland and Labrador', taxRate: 0.087 },
  { name: 'Nova Scotia', taxRate: 0.0879 },
  { name: 'Prince Edward Island', taxRate: 0.098 },
  { name: 'Saskatchewan', taxRate: 0.105 },
  { name: 'Quebec', taxRate: 0.14 },
];

const PROVINCE_NOTES: Record<string, string> = {
  'Ontario': "Ontario employers remit 1.95% Employer Health Tax (EHT) on payroll exceeding the $1M exemption. Note: For remote employees living in Ontario but reporting to a Quebec-based office, payroll tax is withheld based on the 'Province of Employment' (QC), which often creates a tax imbalance at year-end that requires careful T4/RL-1 reconciliation.",
  'British Columbia': "BC EHT is 1.95% for total payroll over $1.5M. Between $500k and $1.5M, a 'notch' rate of 2.925% applies to the excess over $500k. WorkSafeBC premiums are mandatory for most employers. For staff moving between BC and other provinces, partial-year tax bracket adjustments must be audited to prevent over-withholding.",
  'Quebec': "Quebec's payroll is the most complex in Canada, requiring dual-reporting (CRA and Revenu Québec). HSF (Health Services Fund) rates range from 1.25% to 4.26% based on total payroll and sector. CNESST premiums cover both workplace safety and a mandatory 0.06% contribution for Labour Standards. Additionally, QPIP (Parental Insurance) is a unique, mandatory deduction for both parties. Inter-provincial tax treaties mitigate double-taxation for cross-border staff, but often result in significant year-end adjustments for the employee.",
  'Manitoba': "Manitoba's HE Levy (2.15%) applies to annual remuneration exceeding $2M. A notch rate applies for payroll between $2M and $4M. Unlike other provinces, Manitoba has specific tax-to-tax calculations for certain northern zone exemptions that software often miscalculates.",
  'Newfoundland and Labrador': "HAPSET (Health and Post-Secondary Education Tax) is 2.0% on total remuneration exceeding $2M. Smaller entities are exempt. WorkplaceNL premiums must be reviewed annually to ensure correct risk-category classification.",
  'Alberta': "Alberta maintains no payroll-based health tax, providing a competitive 'Alberta Tax Advantage' for high-headcount firms. However, WCB premium management is high-stakes; Maple's audit service frequently identifies overpayments in Alberta's construction and energy sectors.",
  'Saskatchewan': "No provincial health levy exists here, but Saskatchewan's statutory holiday pay logic (based on total wages vs. shifts) is unique and prone to calculation errors in standard software platforms. WCB assessments are required for all covered industries.",
  'Nova Scotia': "No employer health tax, but Nova Scotia has some of the highest provincial tax brackets in Canada. This results in significantly higher source deductions for employees compared to western provinces, often prompting inquiries to HR that Maple's concierge team handles directly.",
  'New Brunswick': "No health levy, but WorkSafeNB premiums are a primary cost. Specific rules apply to 'Construction' vs 'Non-Construction' status for statutory pay calculations, which affects both net pay and total employer liability.",
  'Prince Edward Island': "No employer health tax, but statutory holiday rules are extremely strict. PEI’s lower Basic Personal Amount (BPA) compared to federal levels means withholding starts earlier in the year, which can surprise new seasonal hires."
};

const YEARLY_RATES: Record<number, { 
  cpp: { ympe: number; exemption: number; rate: number; maxBase: number };
  cpp2: { yampe: number; rate: number; maxEnhanced: number };
  ei: { mie: number; rate: number; maxPremium: number };
  bpa: number; 
  inflation: number; 
}> = {
  2024: {
    cpp: { ympe: 68500, exemption: 3500, rate: 0.0595, maxBase: 3867.50 },
    cpp2: { yampe: 73200, rate: 0.0400, maxEnhanced: 188.00 },
    ei: { mie: 63200, rate: 0.0166, maxPremium: 1049.12 },
    bpa: 15705,
    inflation: 1.0
  },
  2025: {
    cpp: { ympe: 71300, exemption: 3500, rate: 0.0595, maxBase: 4034.10 },
    cpp2: { yampe: 81200, rate: 0.0400, maxEnhanced: 396.00 }, 
    ei: { mie: 65700, rate: 0.0164, maxPremium: 1077.48 }, 
    bpa: 15964, 
    inflation: 1.027
  },
  2026: {
    cpp: { ympe: 72700, exemption: 3500, rate: 0.0595, maxBase: 4117.30 },
    cpp2: { yampe: 82800, rate: 0.0400, maxEnhanced: 404.00 }, 
    ei: { mie: 67000, rate: 0.0164, maxPremium: 1098.80 }, 
    bpa: 16283, 
    inflation: 1.048
  }
};

type Frequency = 'annual' | 'monthly' | 'biweekly' | 'weekly' | 'daily';
type PayType = 'annual' | 'hourly';
type VacationType = 'paid' | 'accrued';

const PayrollCalculatorPage: React.FC<PayrollCalculatorPageProps> = ({ onNavigate }) => {
  const [taxYear, setTaxYear] = useState<number>(2025);
  const [payRate, setPayRate] = useState<string>('60000');
  const [payType, setPayType] = useState<PayType>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('40');
  const [displayFrequency, setDisplayFrequency] = useState<Frequency>('biweekly');
  const [selectedProvinceNames, setSelectedProvinceNames] = useState<string[]>(['Ontario']);
  
  const [totalCompanyPayroll, setTotalCompanyPayroll] = useState<string>('0');
  const [showEmployerCosts, setShowEmployerCosts] = useState<boolean>(false);
  const [expandedBreakdowns, setExpandedBreakdowns] = useState<Record<string, boolean>>({});

  const [vacationRate, setVacationRate] = useState<string>('4'); 
  const [vacationType, setVacationType] = useState<VacationType>('paid');
  const [hasStatHoliday, setHasStatHoliday] = useState<boolean>(false);

  const [taxableBenefits, setTaxableBenefits] = useState<string>('0');
  const [rrspContribution, setRrspContribution] = useState<string>('0');

  const provinceResults = useMemo(() => {
    const rates = YEARLY_RATES[taxYear];
    const rateNum = parseFloat(payRate) || 0;
    const hoursNum = parseFloat(hoursPerWeek) || 0;
    const vacRateNum = (parseFloat(vacationRate) || 0) / 100;
    const taxBenNum = parseFloat(taxableBenefits) || 0;
    const rrspNum = parseFloat(rrspContribution) || 0;
    const companyTotalNum = parseFloat(totalCompanyPayroll) || 0;

    const dividers: Record<Frequency, number> = {
      annual: 1,
      monthly: 12,
      biweekly: 26,
      weekly: 52,
      daily: 260
    };
    
    const displayDivider = dividers[displayFrequency];

    return selectedProvinceNames.map(name => {
      const province = PROVINCES.find(p => p.name === name) || PROVINCES[0];
      
      let periodRawBase = 0;
      let periodStatPay = 0;

      if (payType === 'annual') {
        periodRawBase = rateNum / displayDivider;
        if (hasStatHoliday) {
          periodStatPay = (rateNum / 260); 
        }
      } else {
        periodRawBase = (rateNum * hoursNum * 52) / displayDivider;
        if (hasStatHoliday) {
          periodStatPay = rateNum * (hoursNum / 5);
        }
      }

      let vacationableEarnings = periodRawBase;
      const periodVacation = vacationableEarnings * vacRateNum;

      let periodGross = periodRawBase + taxBenNum;
      if (payType === 'hourly') {
        periodGross += periodStatPay;
      }
      if (vacationType === 'paid') {
        periodGross += periodVacation;
      }

      const annualGrossEstimate = periodGross * displayDivider;
      const annualRrsp = rrspNum * displayDivider;
      
      const taxableIncomeAnnual = Math.max(0, annualGrossEstimate - annualRrsp);
      
      const insurableEarnings = Math.min(annualGrossEstimate, rates.ei.mie);
      const annualEI = Math.min(insurableEarnings * rates.ei.rate, rates.ei.maxPremium);

      const pensionableEarnings = annualGrossEstimate;
      const basePensionable = Math.min(pensionableEarnings, rates.cpp.ympe);
      const contributoryEarnings = Math.max(0, basePensionable - rates.cpp.exemption);
      const annualCPPBase = contributoryEarnings * rates.cpp.rate;

      let annualCPP2 = 0;
      if (pensionableEarnings > rates.cpp.ympe) {
        const enhancedContributory = Math.min(pensionableEarnings, rates.cpp2.yampe) - rates.cpp.ympe;
        annualCPP2 = Math.max(0, enhancedContributory * rates.cpp2.rate);
      }
      const totalAnnualCPP = annualCPPBase + annualCPP2;
      
      const fedTaxRate = 0.15; 
      let federalTax = 0;
      if (taxableIncomeAnnual > rates.bpa) {
         let effectiveRate = fedTaxRate + province.taxRate;
         if (taxableIncomeAnnual > 55000) effectiveRate += 0.05;
         if (taxableIncomeAnnual > 100000) effectiveRate += 0.05;
         if (taxableIncomeAnnual > 160000) effectiveRate += 0.04;
         const taxRaw = taxableIncomeAnnual * effectiveRate;
         const bpaCredit = rates.bpa * fedTaxRate; 
         federalTax = Math.max(0, taxRaw - bpaCredit);
      }
      
      const netCashAnnual = (annualGrossEstimate - taxBenNum * displayDivider) - federalTax - totalAnnualCPP - annualEI - annualRrsp;

      let annualEHT = 0;
      if (name === 'Ontario') {
        if (companyTotalNum > 1000000) {
          annualEHT = annualGrossEstimate * 0.0195;
        }
      } else if (name === 'British Columbia') {
        if (companyTotalNum > 500000 && companyTotalNum <= 1500000) {
          const totalCompanyEHT = 0.02925 * (companyTotalNum - 500000);
          annualEHT = (annualGrossEstimate / companyTotalNum) * totalCompanyEHT;
        } else if (companyTotalNum > 1500000) {
          annualEHT = annualGrossEstimate * 0.0195;
        }
      } else if (name === 'Quebec') {
        annualEHT = annualGrossEstimate * 0.025;
      }

      const employerCPP = totalAnnualCPP;
      const employerEI = annualEI * 1.4;

      return {
        provinceName: province.name,
        periodBase: periodRawBase,
        periodGross: periodGross,
        ei: annualEI / displayDivider,
        cpp: totalAnnualCPP / displayDivider,
        tax: federalTax / displayDivider,
        net: Math.max(0, netCashAnnual / displayDivider),
        employerCPP: employerCPP / displayDivider,
        employerEI: employerEI / displayDivider,
        employerEHT: annualEHT / displayDivider,
        totalEmployerCost: (annualGrossEstimate + employerCPP + employerEI + annualEHT) / displayDivider
      };
    });
  }, [payRate, payType, hoursPerWeek, vacationRate, vacationType, displayFrequency, selectedProvinceNames, taxableBenefits, rrspContribution, hasStatHoliday, taxYear, totalCompanyPayroll]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(val);

  const toggleProvince = (name: string) => {
    setSelectedProvinceNames(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name) 
        : [...prev, name]
    );
  };

  const toggleBreakdown = (name: string) => {
    setExpandedBreakdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const calculatorFaqs = [
    {
      q: "How does the 2024/2025 CPP2 enhancement affect my payroll?",
      a: "The CPP2 enhancement is an additional 4% contribution on earnings between the first ceiling (YMPE) and the second ceiling (YAMPE). For 2025, YMPE is $71,300 and YAMPE is $81,200. This is matched 1:1 by employers."
    },
    {
      q: "Why might an employee's actual paycheque differ from this calculator?",
      a: "This tool estimates base taxes and standard deductions. Actual pay varys due to specific TD1 claim codes, group benefit premiums, union dues, or local taxes (like Quebec's HSF or QPIP)."
    },
    {
      q: "What is the difference between Vacation Paid and Vacation Accrued?",
      a: "Vacation 'Paid each pay' adds the vacation percentage (e.g., 4%) to the gross pay of every cheque. 'Accrued' means the employer banks that money to be paid out when the employee actually takes time off."
    },
    {
      q: "Does the Employer Health Tax (EHT) apply to all businesses?",
      a: "No. EHT generally applies only after reaching a specific payroll threshold. For 2025 in Ontario, the exemption is $1,000,000. In BC, it is $500,000. Our calculator accounts for these thresholds if you provide your total company payroll."
    },
    {
      q: "How are RRSP contributions handled by the CRA?",
      a: "RRSP contributions are 'pre-tax' deductions. They reduce the amount of income subject to income tax immediately at the source, resulting in higher net pay compared to an after-tax contribution."
    },
    {
      q: "What exactly are Taxable Benefits?",
      a: "These are perks provided by an employer (like a company car or gym membership) that the CRA considers income. You don't receive cash, but you pay income tax on the monetary value of the perk."
    },
    {
      q: "How is Statutory Holiday pay calculated for hourly staff?",
      a: "Most provinces calculate it as 1/20th of the wages earned in the four weeks preceding the holiday. Our calculator uses this simplified standard for hourly estimates."
    },
    {
      q: "Why is EI matched at 1.4x by the employer?",
      a: "Unlike CPP which is matched 1:1, the employer pays 1.4 times the employee's EI premium. This higher rate funds the administration and availability of the Employment Insurance system."
    },
    {
      q: "Does this calculator handle Quebec-specific deductions?",
      a: "This calculator provides a high-level estimate for Quebec using the provincial tax rate, but actual Quebec payroll requires additional QPP, QPIP, and HSF logic which Maple manages for you."
    },
    {
      q: "What is the Basic Personal Amount (BPA)?",
      a: "The BPA is the amount of income an individual can earn before they start paying any federal income tax. For 2025, the federal BPA is $15,964."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Canadian Payroll Calculation" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Professional Calculation Tool
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Payroll <br/>
              <span className="text-red-500">Calculator</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              Precisely estimate employee take-home pay and employer costs based on annual salary or hourly wages across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Get a Managed Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Inputs Sidebar */}
          <div className="lg:col-span-2 space-y-8 bg-slate-50 p-8 lg:p-12 border border-slate-100">
            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">Payroll Config</h3>
              <div className="space-y-6">

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tax Year</label>
                  <select 
                    value={taxYear}
                    onChange={(e) => setTaxYear(parseInt(e.target.value))}
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none text-lg font-bold focus:ring-2 focus:ring-red-500 outline-none appearance-none"
                  >
                    <option value={2024}>2024 (Previous Year)</option>
                    <option value={2025}>2025 (Current Year)</option>
                    <option value={2026}>2026 (Next Year)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Rate & Type</label>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {(['annual', 'hourly'] as const).map(t => (
                      <button 
                        key={t}
                        onClick={() => setPayType(t)}
                        className={`py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${payType === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input 
                    type="number"
                    value={payRate}
                    onChange={(e) => setPayRate(e.target.value)}
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none text-xl font-bold focus:ring-2 focus:ring-red-500 outline-none"
                    placeholder="Compensation Amount"
                  />
                </div>

                {payType === 'hourly' && (
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Hours Per Week</label>
                    <input 
                      type="number"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(e.target.value)}
                      className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none text-xl font-bold focus:ring-2 focus:ring-red-500 outline-none"
                    />
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Pre-Tax Deductions & Benefits</label>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">RRSP Contribution (per {displayFrequency})</label>
                      <input 
                        type="number"
                        value={rrspContribution}
                        onChange={(e) => setRrspContribution(e.target.value)}
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="e.g. 500"
                      />
                      <p className="text-[9px] text-slate-400 mt-2 italic">Applied as a pre-tax deduction to reduce taxable income.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Provinces to Compare</label>
                  <div className="grid grid-cols-2 gap-2">
                    {PROVINCES.map(p => (
                      <button 
                        key={p.name}
                        onClick={() => toggleProvince(p.name)}
                        className={`text-[10px] py-2 px-3 border transition-all font-bold uppercase tracking-widest text-left flex items-center justify-between ${selectedProvinceNames.includes(p.name) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-100'}`}
                      >
                        <span>{p.name}</span>
                        {selectedProvinceNames.includes(p.name) && <span className="text-red-500">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Employer Health Tax (EHT)</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Company Annual Payroll ($)</label>
                      <input 
                        type="number"
                        value={totalCompanyPayroll}
                        onChange={(e) => setTotalCompanyPayroll(e.target.value)}
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="e.g. 1500000"
                      />
                      <p className="text-[9px] text-slate-400 mt-2 italic">Used to calculate provincial exemption thresholds for EHT/Levies.</p>
                    </div>
                    <button 
                      onClick={() => setShowEmployerCosts(!showEmployerCosts)}
                      className={`w-full py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${showEmployerCosts ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-600 border-slate-200'}`}
                    >
                      {showEmployerCosts ? 'Hide' : 'Show'} Employer Costs
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Show Results Per:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(['annual', 'monthly', 'biweekly', 'weekly', 'daily'] as const).map(f => (
                      <button 
                        key={f}
                        onClick={() => setDisplayFrequency(f)}
                        className={`py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${displayFrequency === f ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display Grid */}
          <div className="lg:col-span-3 space-y-8">
            {selectedProvinceNames.length === 0 ? (
              <div className="bg-slate-100 p-20 text-center border-2 border-dashed border-slate-300">
                <p className="text-slate-400 font-bold uppercase tracking-widest">Select one or more provinces to see calculations.</p>
              </div>
            ) : (
              <div className="grid gap-8">
                {provinceResults.map(res => (
                  <div key={res.provinceName} className="bg-white border-4 border-slate-900 p-8 lg:p-12 relative overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
                      {res.provinceName}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-12">
                        {/* Employee View */}
                        <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Employee Net Pay</p>
                          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-8">{formatCurrency(res.net)}</h2>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs">
                              <span className="text-slate-500 font-bold">Gross Pay</span>
                              <span className="text-slate-900 font-black">{formatCurrency(res.periodGross)}</span>
                            </div>
                            
                            {/* Collapsible Deduction Breakdown */}
                            <div className="mt-4">
                              <button 
                                onClick={() => toggleBreakdown(res.provinceName)}
                                className="w-full flex items-center justify-between py-3 px-4 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
                              >
                                <span>Deduction Breakdown</span>
                                <span className={`text-red-600 transition-transform duration-300 ${expandedBreakdowns[res.provinceName] ? 'rotate-180' : ''}`}>
                                  ▼
                                </span>
                              </button>
                              
                              <div className={`overflow-hidden transition-all duration-300 ${expandedBreakdowns[res.provinceName] ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <div className="space-y-2 py-2 px-4 border-l-2 border-red-500 bg-slate-50/50">
                                  <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-slate-400 font-bold">Income Tax</span>
                                    <span className="text-red-500 font-bold">-{formatCurrency(res.tax)}</span>
                                  </div>
                                  <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-slate-400 font-bold">CPP (Employee)</span>
                                    <span className="text-red-500 font-bold">-{formatCurrency(res.cpp)}</span>
                                  </div>
                                  <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-slate-400 font-bold">EI (Employee)</span>
                                    <span className="text-red-500 font-bold">-{formatCurrency(res.ei)}</span>
                                  </div>
                                  {parseFloat(rrspContribution) > 0 && (
                                    <div className="flex justify-between items-center text-[10px]">
                                      <span className="text-slate-400 font-bold">RRSP (Pre-Tax)</span>
                                      <span className="text-blue-600 font-bold">-{formatCurrency(parseFloat(rrspContribution))}</span>
                                    </div>
                                  )}
                                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-[10px]">
                                    <span className="text-slate-900 font-black uppercase">Total Deductions</span>
                                    <span className="text-red-600 font-black">-{formatCurrency(res.tax + res.cpp + res.ei + (parseFloat(rrspContribution) || 0))}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Employer View (Conditional) */}
                        {showEmployerCosts ? (
                          <div className="bg-slate-50 p-6 border-l-4 border-red-600">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Total Employer Cost</p>
                            <h2 className="text-2xl font-black text-red-600 tracking-tighter mb-6">{formatCurrency(res.totalEmployerCost)}</h2>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-slate-500 font-bold">CPP Match</span>
                                <span className="text-slate-900 font-bold">+{formatCurrency(res.employerCPP)}</span>
                              </div>
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-slate-500 font-bold">EI Match (1.4x)</span>
                                <span className="text-slate-900 font-bold">+{formatCurrency(res.employerEI)}</span>
                              </div>
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-slate-500 font-bold">Provincial Health Tax (EHT)</span>
                                <span className="text-red-600 font-bold">+{formatCurrency(res.employerEHT)}</span>
                              </div>
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-slate-200">
                              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2 text-red-600">Compliance Insight</p>
                              <p className="text-[10px] text-slate-600 leading-relaxed font-medium italic">
                                {PROVINCE_NOTES[res.provinceName]}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center border-2 border-dashed border-slate-100 text-center p-8">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Toggle 'Employer Costs' to see taxes and levies.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-slate-900 p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-red-600 shadow-xl">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Accuracy is a Professional Choice.</h4>
                <p className="text-slate-400 font-medium max-w-md">Maple's managed service ensures 100% accuracy on every filing, including EHT thresholds and multi-entity exemptions.</p>
              </div>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="whitespace-nowrap bg-red-600 text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl"
              >
                Get a Managed Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ 
        items={calculatorFaqs}
        title={<h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Calculator <span className="text-red-600">FAQ</span></h2>} 
      />
    </div>
  );
};

export default PayrollCalculatorPage;
