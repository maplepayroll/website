
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface KeyTermsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

interface GlossaryEntry {
  term: string;
  def: string;
  insight: string;
  tags: string[];
}

const KeyTermsPage: React.FC<KeyTermsPageProps> = ({ onNavigate }) => {
  const glossaryEntries: GlossaryEntry[] = [
    { 
      term: "BN", 
      def: "Business Number. A unique 9-digit number assigned by the CRA to identify your business entity for tax purposes.", 
      insight: "We link your payroll account (RP0001) to your BN for all federal remittances.", 
      tags: ["Federal", "Employer"] 
    },
    { 
      term: "CNT", 
      def: "Commission des normes du travail. The Quebec labour standards body governing employee rights.", 
      insight: "Maple ensures your Quebec payroll policies align with CNT mandates to avoid grievances.", 
      tags: ["Quebec", "Compliance"] 
    },
    { 
      term: "CPP", 
      def: "Canada Pension Plan. Mandatory contributions for retirement, disability, and survivor benefits.", 
      insight: "We manage the transition from base CPP to enhanced CPP (CPP2) without administrative friction.", 
      tags: ["Federal", "Statutory Deduction", "Employer Contribution"] 
    },
    { 
      term: "CRA", 
      def: "Canada Revenue Agency. The federal body responsible for collecting taxes and overseeing payroll compliance.", 
      insight: "Maple acts as your authorized representative for all CRA payroll inquiries and audits.", 
      tags: ["Federal", "Compliance"] 
    },
    { 
      term: "CRN", 
      def: "Corporate Registration Number. A unique number given to a corporation when it is incorporated in a province or federally.", 
      insight: "Necessary for setting up provincial accounts like WSIB or EHT.", 
      tags: ["Federal", "Provincial", "Employer"] 
    },
    { 
      term: "CSST", 
      def: "Commission de la santé et de la sécurité du travail (Quebec). Now part of CNESST, governing workplace safety.", 
      insight: "We manage the calculation and reporting of these premiums for your Quebec-based staff.", 
      tags: ["Quebec", "Employer Contribution"] 
    },
    { 
      term: "EFT", 
      def: "Electronic Funds Transfer. The process of depositing pay directly into an employee's bank account.", 
      insight: "Maple provides secure, multi-bank EFT processing for all clients, ensuring funds arrive on time.", 
      tags: ["National", "Payment Method"] 
    },
    { 
      term: "FTQ", 
      def: "Fonds de solidarité FTQ. A Quebec union-sponsored fund that appears as a voluntary deduction.", 
      insight: "We support specialized deductions like FTQ to help your employees save for the future.", 
      tags: ["Quebec", "Employee Deduction"] 
    },
    { 
      term: "Gross Pay", 
      def: "Total earnings before any taxes, union dues, or other deductions are subtracted.", 
      insight: "Our specialists verify gross pay accuracy against employment contracts every single cycle.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "HAPSET", 
      def: "Health and Post-Secondary Education Tax. A provincial payroll tax applied in Manitoba and Newfoundland.", 
      insight: "We monitor your total annual payroll to determine when you cross the exemption threshold.", 
      tags: ["MB", "NL", "Employer Contribution"] 
    },
    { 
      term: "HET", 
      def: "Health and Education Tax. Similar to HAPSET, specific to Manitoba and certain Atlantic provinces.", 
      insight: "HET is often calculated on the cumulative payroll of associated employers—we manage that link.", 
      tags: ["MB", "NL", "Employer Contribution"] 
    },
    { 
      term: "HOL", 
      def: "Holiday Pay. Compensation for statutory holidays as dictated by provincial labour standards.", 
      insight: "Stat holiday math is a leading cause of compliance errors; we handle the calculations for you.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "HSA", 
      def: "Health Spending Account. A pre-tax benefit account provided by employers for medical expenses.", 
      insight: "We coordinate HSA deductions and employer-funded deposits with your benefits provider.", 
      tags: ["National", "Employer Contribution", "Benefit"] 
    },
    { 
      term: "HSF", 
      def: "Health Services Fund. A Quebec-specific employer contribution based on total annual payroll.", 
      insight: "We monitor your HSF rate thresholds to ensure you're paying the correct percentage based on revenue.", 
      tags: ["Quebec", "Employer Contribution"] 
    },
    { 
      term: "Net Pay", 
      def: "Take-home pay. The amount an employee receives after all statutory and voluntary deductions.", 
      insight: "Maple's concierge team answers all employee 'Net Pay' questions directly to save you time.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "OT", 
      def: "Overtime. Hours worked beyond the daily or weekly provincial maximum, usually paid at 1.5x.", 
      insight: "Our system handles complex provincial OT logic (like the 8/44 rule) automatically.", 
      tags: ["Provincial", "Earning"] 
    },
    { 
      term: "Pay Stub", 
      def: "Earnings Statement. A detailed breakdown of hours, rates, and deductions provided to the employee.", 
      insight: "Our digital stubs meet all provincial labour requirements for transparency and accessibility.", 
      tags: ["National", "Compliance"] 
    },
    { 
      term: "PPIP / QPIP", 
      def: "Quebec Parental Insurance Plan. Mandatory insurance for parental, paternity, and adoption benefits.", 
      insight: "We reconcile QPIP premiums alongside federal EI to ensure total compliance for Quebec staff.", 
      tags: ["Quebec", "Statutory Deduction", "Employer Contribution"] 
    },
    { 
      term: "PTO", 
      def: "Paid Time Off. A bank of hours an employee can use for vacation or sick leave while still receiving pay.", 
      insight: "We manage the reconciliation of PTO banks so you always know your outstanding liability.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "QPP", 
      def: "Quebec Pension Plan. The provincial equivalent to CPP for employees working in the province of Quebec.", 
      insight: "Dual-jurisdiction employees are handled with precision in our multi-provincial setup.", 
      tags: ["Quebec", "Statutory Deduction", "Employer Contribution"] 
    },
    { 
      term: "REG", 
      def: "Regular Hours. The standard hours worked by an employee within the normal work week.", 
      insight: "We track REG hours against your specific provincial threshold to ensure compliance.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "Remittance", 
      def: "The act of sending withheld payroll taxes and employer contributions to the government.", 
      insight: "Maple manages the timing and electronic payment of all remittances to prevent late fees.", 
      tags: ["Federal", "Provincial", "Compliance"] 
    },
    { 
      term: "RL-1", 
      def: "Relevé 1. The Quebec provincial tax slip equivalent to the federal T4 for reporting income.", 
      insight: "We provide unified T4/RL-1 packages for seamless year-end for Quebec-based businesses.", 
      tags: ["Quebec", "Compliance", "Tax Form"] 
    },
    { 
      term: "ROE", 
      def: "Record of Employment. A mandatory document filed whenever an employee has an interruption in earnings.", 
      insight: "We file ROEs electronically via ROE Web within 5 days of any termination or leave.", 
      tags: ["Federal", "Compliance", "Form"] 
    },
    { 
      term: "RRSP / RSP", 
      def: "Registered Retirement Savings Plan. A tax-advantaged account for retirement savings.", 
      insight: "We handle group RRSP deductions and match contributions directly on the pay run.", 
      tags: ["Federal", "Employee Deduction", "Employer Contribution"] 
    },
    { 
      term: "SIN", 
      def: "Social Insurance Number. A 9-digit number required to work in Canada.", 
      insight: "We verify SIN validity during our Managed Onboarding process to ensure accurate filings.", 
      tags: ["Federal", "Compliance"] 
    },
    { 
      term: "T4", 
      def: "Statement of Remuneration Paid. The standard annual federal tax slip for employment income.", 
      insight: "T4 generation and electronic distribution are included in all Maple service tiers.", 
      tags: ["Federal", "Compliance", "Tax Form"] 
    },
    { 
      term: "T4A", 
      def: "Statement of Pension, Retirement, Annuity, and Other Income. Often used for reporting contractor pay.", 
      insight: "We help identify which contractors require T4As to avoid CRA misclassification audits.", 
      tags: ["Federal", "Compliance", "Tax Form"] 
    },
    { 
      term: "VAC", 
      def: "Vacation Pay. The mandatory percentage (4% or 6%) of gross earnings paid to employees.", 
      insight: "We ensure vacation pay is calculated on ALL earnings, including bonuses and commissions.", 
      tags: ["National", "Earning"] 
    },
    { 
      term: "WSDRF", 
      def: "Workplace Safety Insurance Development and Relief Fund. Related to safety board rebates or programs.", 
      insight: "We help interpret and apply safety board credits directly to your account accurately.", 
      tags: ["ON", "Provincial", "Employer"] 
    },
    { 
      term: "YTD", 
      def: "Year-to-Date. Cumulative earnings or deductions from the start of the calendar year to now.", 
      insight: "YTD tracking is critical for monitoring when employees reach CPP and EI maximums.", 
      tags: ["National", "Tracking"] 
    }
  ];

  // Sort alphabetically
  const sortedEntries = [...glossaryEntries].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Documentation" 
            className="w-full h-full object-cover object-center grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-xs font-black uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-black tracking-[0.2em] mb-8 uppercase shadow-lg">
              Educational Resource
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              The <span className="text-red-500">Lexicon</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
              The A-Z of Canadian Payroll. Every acronym and term defined alphabetically for your reference.
            </p>
          </div>
        </div>
      </section>

      {/* Flat Alphabetical List */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {sortedEntries.map((item, idx) => (
            <div key={idx} className="group border-b border-slate-100 pb-12 last:border-0 last:pb-0">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                {/* Term and Tags */}
                <div className="lg:w-1/4">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {item.term}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Definition and Insight */}
                <div className="lg:w-3/4">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                    {item.def}
                  </p>
                  <div className="bg-slate-50 p-6 border-l-4 border-slate-900 relative">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Concierge Perspective</p>
                    <p className="text-slate-800 font-bold italic leading-relaxed">"{item.insight}"</p>
                    <div className="absolute top-4 right-6 text-slate-200 text-4xl select-none">"</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Bottom Line Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-10 mb-20 shadow-xl border-l-8 border-red-600">
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
              <p className="text-lg font-bold leading-relaxed">
                If you don't understand the acronym, don't deduct it. Guesswork on tax forms is the fastest way to an audit.
              </p>
            </div>
            <div className="h-px bg-white/20 my-4"></div>
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Misclassifying "Independent Contractors" (who don't pay CPP/EI) versus "Employees" (who do) is the single largest financial risk for Canadian employers.
              </p>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="mb-24 pt-8 border-t border-slate-200">
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
            <ul className="space-y-2">
                <li>
                    <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4001.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        CRA Guide T4001: Employers' Guide - Payroll Deductions and Remittances <span>↗</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.payroll.ca/" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        National Payroll Institute (NPI) - Professional Definitions <span>↗</span>
                    </a>
                </li>
            </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            Terms are just the start. <br/>
            <span className="text-red-600">Compliance is the Goal.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Dedicated certified payroll specialists are included in your service and will help you keep your payroll compliant with these regulations. No need to worry about onboarding, departures, terminations; send the updates to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('home', 'General Quote')}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-red-600/20"
            >
              Get a Managed Quote
            </button>
            <button 
              onClick={() => onNavigate('calculator')}
              className="px-14 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Try our Calculator
            </button>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default KeyTermsPage;
