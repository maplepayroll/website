
import React from 'react';
import { PageType } from '../App';
import { YEARLY_RATES, FEDERAL_BRACKETS, PROVINCIAL_DATA } from '../services/payrollCalculator';

interface FormulaManifestPageProps {
  onNavigate: (page: PageType) => void;
}

const FormulaManifestPage: React.FC<FormulaManifestPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-mono text-sm selection:bg-red-600 selection:text-white">
      {/* Expert Header */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <p className="text-red-500 font-black uppercase tracking-[0.4em] mb-4 text-[10px]">Technical Documentation / Internal Use</p>
              <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                Formula <br/> Manifest
              </h1>
              <p className="max-w-xl text-slate-400 font-sans italic">
                CRA T4127 Computer Formula Standard - Sequence of Calculations for Canadian Payroll.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
              <p className="text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Compliance Version</p>
              <p className="text-xl text-red-500 font-black">v2025.11.R4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Constant Tables */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Logic Sequence */}
            <div>
              <h2 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-red-600 pb-2 inline-block">Step Sequence</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "GROSS DETERMINATION", desc: "Convert Pay Type (Hourly/Annual) to Projected Annual Gross Earnings." },
                  { step: "02", title: "CONTRIBUTORY EARNINGS", desc: "Apply $3,500 basic exemption. Calculate CPP Base (5.95%) up to YMPE ceiling." },
                  { step: "03", title: "ENHANCED PENSIION", desc: "Calculate CPP2 (4.00%) on earnings between YMPE and YAMPE thresholds." },
                  { step: "04", title: "INSURABLE EARNINGS", desc: "Calculate EI Premium based on Mie ceiling. Apply 1.4x matching for Employer side." },
                  { step: "05", title: "TAXABLE INCOME (K)", desc: "Subtract Pre-Tax Deductions (RPP/Union) and non-refundable tax credits." },
                  { step: "06", title: "FEDERAL TAX (T1)", desc: "Apply graduated T1 brackets. Calculate BPA with income-based step-down clawback." },
                  { step: "07", title: "PROVINCIAL TAX (T2)", desc: "Apply specific provincial bracket logic and non-refundable credits." },
                  { step: "08", title: "HEALTH LEVIES", desc: "Calculate EHT/OHP based on specific provincial thresholds and graduated rates." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-red-600 font-black text-lg">{s.step}</span>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight mb-1 group-hover:text-red-500 transition-colors">{s.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Federal Brackets Manifest */}
            <div>
              <h2 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-red-600 pb-2 inline-block">Federal Constants</h2>
              <div className="overflow-hidden border border-white/5">
                <table className="w-full text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-4 uppercase tracking-widest text-[10px] font-black text-slate-500">Threshold</th>
                      <th className="p-4 uppercase tracking-widest text-[10px] font-black text-slate-500">Rate</th>
                      <th className="p-4 uppercase tracking-widest text-[10px] font-black text-slate-500">Constant (K)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {FEDERAL_BRACKETS.map((b, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-white font-bold">${b.threshold.toLocaleString()}</td>
                        <td className="p-4 text-red-500 font-bold">{(b.rate * 100).toFixed(1)}%</td>
                        <td className="p-4 text-slate-500">${b.constant.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Yearly Rates Manifest */}
            <div>
              <h2 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-red-600 pb-2 inline-block">Statutory Limits Repository</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.keys(YEARLY_RATES).map(year => (
                  <div key={year} className="bg-white/5 p-8 border border-white/10">
                    <h3 className="text-red-500 font-black text-lg mb-6 underline">YEAR {year}</h3>
                    <pre className="text-[11px] text-slate-400 whitespace-pre-wrap leading-relaxed">
                      {JSON.stringify(YEARLY_RATES[parseInt(year)], null, 2)}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Audit Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white p-10 rounded-sm">
              <h3 className="text-slate-900 font-black text-xl mb-6 uppercase tracking-tight">Audit Note</h3>
              <p className="text-slate-600 font-sans font-medium mb-6 leading-relaxed">
                The calculations on this site use the computer-formula method as outlined in the T4127 guide. These are designed for software implementation and may vary slightly from the manual "Tax Tables" (T4032) by a few cents due to rounding precision.
              </p>
              <button 
                onClick={() => onNavigate('calculator')}
                className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all"
              >
                Back to User Calculator
              </button>
            </div>

            <div className="bg-red-600 p-10 text-white shadow-2xl">
              <h3 className="font-black text-xl mb-6 uppercase tracking-tight">CRA Authorization</h3>
              <p className="text-sm font-bold opacity-90 mb-8 leading-relaxed">
                Maple Managed Payroll is an authorized representative. We maintain real-time sync with CRA XML schema updates to ensure 100% remittance accuracy.
              </p>
              <div className="h-px bg-white/20 mb-8"></div>
              <p className="text-[10px] font-black uppercase tracking-widest">Authorized By:</p>
              <p className="text-xs font-bold mt-1">Canadian Compliance Council</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-20 bg-black/50 border-t border-white/10 text-center">
         <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Security Protocol: AES-256 Enabled</p>
         <button 
           onClick={() => onNavigate('home')}
           className="text-white hover:text-red-500 transition-colors font-black uppercase tracking-[0.3em] text-xs"
         >
           Exit Formula Manifest
         </button>
      </section>
    </div>
  );
};

export default FormulaManifestPage;
