
import React, { useState, useMemo } from 'react';
import { PageType } from '../App';
import { calculatePayroll, PROVINCES } from '../services/payrollCalculator';

interface PayrollCalculatorPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PayrollCalculatorPage: React.FC<PayrollCalculatorPageProps> = ({ onNavigate }) => {
  const [taxYear, setTaxYear] = useState<number>(2025);
  const [payRate, setPayRate] = useState<string>('60,000');
  const [payType, setPayType] = useState<'annual' | 'hourly'>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('40');
  const [displayFrequency, setDisplayFrequency] = useState<'daily' | 'weekly' | 'biweekly' | 'semi-monthly' | 'monthly' | 'annual'>('biweekly');
  const [selectedProvince, setSelectedProvince] = useState<string>('Ontario');

  const results = useMemo(() => {
    return calculatePayroll({
      income: parseFloat(payRate.replace(/,/g, '')) || 0,
      payType,
      province: selectedProvince,
      year: taxYear,
      frequency: displayFrequency,
      hoursPerWeek: parseFloat(hoursPerWeek) || 40
    });
  }, [payRate, payType, hoursPerWeek, displayFrequency, selectedProvince, taxYear]);

  const formatCurrency = (val: string | number) => {
    const num = typeof val === 'string' ? parseFloat(val.replace(/[^0-9.-]+/g,"")) : val;
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(num);
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator-tool')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Updated Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" 
            alt="Canadian Payroll Calculator" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Free Compliance Tool
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Canadian <br/>
              <span className="text-red-500">Payroll Calculator</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Accurate source deduction estimates for every province, including the latest 2025 CPP2 enhancements.
            </p>
             <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={scrollToCalculator}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Start Calculating
              </button>
              <button 
                onClick={() => onNavigate('home', 'General Quote')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Get Managed Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator-tool" className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16">
        {/* Controls */}
        <div className="lg:col-span-4 bg-slate-50 p-10 border border-slate-200">
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-8">Inputs</h3>
          
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tax Year</label>
              <select 
                value={taxYear}
                onChange={(e) => setTaxYear(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-lg outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Province</label>
              <select 
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-lg outline-none focus:ring-2 focus:ring-red-500"
              >
                {PROVINCES.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Salary / Wage</label>
              <div className="flex gap-2 mb-4">
                {['annual', 'hourly'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setPayType(t as any)}
                    className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${payType === t ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <input 
                type="text" 
                value={payRate} 
                onChange={(e) => setPayRate(e.target.value)}
                className="w-full bg-white border border-slate-200 px-6 py-4 rounded-none font-bold text-2xl outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Display Frequency</label>
              <div className="grid grid-cols-2 gap-2">
                {['daily', 'weekly', 'biweekly', 'semi-monthly', 'monthly', 'annual'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setDisplayFrequency(f as any)}
                    className={`py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${displayFrequency === f ? 'bg-red-600 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}
                  >
                    {f.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Display Results */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-slate-900 p-12 text-white border-l-8 border-red-600 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">
              {displayFrequency.replace('-', ' ')} Net Pay
            </div>
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-4">Estimated Take-Home</p>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter mb-4">{results.netPay}</h2>
            <div className="h-2 w-24 bg-red-600 mb-8"></div>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">Income Tax Breakdown</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-400">Federal Tax</span>
                    <span className="font-black text-red-500">-{results.deductions.fedTax}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-400">Provincial Tax ({selectedProvince})</span>
                    <span className="font-black text-red-500">-{results.deductions.provTax}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">Statutory Deductions</p>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-400">CPP (Base)</span>
                    <span className="font-black text-red-500">-{results.deductions.cppBase}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-400">CPP2 (Enhanced)</span>
                    <span className="font-black text-red-500">-{results.deductions.cpp2}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-400">EI Premium</span>
                    <span className="font-black text-red-500">-{results.deductions.ei}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 border border-slate-200">
             <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Compliance Context</h4>
             <p className="text-slate-600 font-medium leading-relaxed italic">
               Note: These values are professional estimates for {selectedProvince} in {taxYear}. Final paychecks depend on specific TD1 claim codes, group benefit premiums, and multi-entity exemptions which Maple manages for you.
             </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('home', constructCalcBrief(results, selectedProvince, taxYear))}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
            >
              Get This Managed by Maple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const constructCalcBrief = (results: any, province: string, year: number) => {
  return `CALC_BRIEF: Net ${results.netPay} | Gross ${results.grossPay} | Prov ${province} | Year ${year}`;
};

export default PayrollCalculatorPage;
