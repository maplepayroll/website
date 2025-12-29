
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface AuditServicePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const AuditServicePage: React.FC<AuditServicePageProps> = ({ onNavigate }) => {
  const auditPoints = [
    {
      category: "Compliance & Remittance",
      items: [
        "CRA Payroll Account Verification",
        "Provincial Health Tax (EHT) Threshold Audit",
        "WSIB/WCB Classification Check",
        "Remittance Timing & Frequency Review",
        "Record of Employment (ROE) Automation Check",
        "Statutory Holiday Pay Calculation Verification",
        "Overtime Logic & Provincial Standard Matching",
        "Garnishment & Family Support Remittance Review",
        "Federal vs Provincial Tax Account Reconciliation",
        "Year-End T4/RL-1 Filing Accuracy Review",
        "CSST/CNESST Rate & Filing Audit (Quebec)",
        "Late Filing Penalty Risk Exposure Analysis"
      ],
      icon: "⚖️"
    },
    {
      category: "System & Software Config",
      items: [
        "General Ledger (GL) Mapping Analysis",
        "Departmental Labour Cost Allocation",
        "Holiday & Vacation Accrual Logic",
        "Electronic Pay Stub Accessibility",
        "Data Migration & Integrity Audit",
        "Custom Earning/Deduction Code Taxability Setup",
        "Automatic Termination Pay Calculation Logic",
        "Time-Sheet Integration & API Verification",
        "User Permission & Sensitivity Audit",
        "Audit Trail & Change Tracking Integrity",
        "Multi-Entity Consolidation Flow Review",
        "Payroll Bank Reconciliation Process Audit"
      ],
      icon: "⚙️"
    },
    {
      category: "Employee Data & Benefits",
      items: [
        "TD1 & Provincial Tax Form Audit",
        "Taxable Benefit Calculation Check",
        "Group Insurance Premium Handling",
        "Director Fee & Bonus Compliance",
        "Work-from-Home Reimbursement Review",
        "Executive Compensation Confidentiality Review",
        "RRSP/RPP Match & Limit Verification",
        "Severance & Final Pay Package Audit",
        "Leaves of Absence (Parental, Sick) Tracking Review",
        "Multi-Provincial Residency & Tax Status Check",
        "Union Dues & Collective Agreement Compliance",
        "Share-Based Compensation Tax Reporting Audit"
      ],
      icon: "👤"
    }
  ];

  const systems = [
    'ADP', 
    'BambooHR', 
    'Collage HR', 
    'Dayforce', 
    'Employment Hero', 
    'Gusto', 
    'Knit', 
    'Payworks', 
    'Push', 
    'QuickBooks', 
    'Rise', 
    'Sage', 
    'UKG', 
    'Wagepoint', 
    'Wave', 
    'Xero'
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000" 
            alt="Expert Audit" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-red-600 text-white text-[10px] font-black tracking-[0.4em] mb-10 uppercase">
              Professional Service Deep Dive
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              YOUR PAYROLL, <br/>
              <span className="text-red-600">AUDITED BY EXPERTS.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl font-medium">
              Dedicated certified payroll specialists will review your current system to identify hidden risks and ensure you are compliant with all regulations.
            </p>
            <button 
              onClick={() => onNavigate('home', 'System Audit')}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30"
            >
              Book Your Expert Audit
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Maple <span className="text-red-600">35-Point</span> Checklist</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Our specialists help you stay compliant. We manage the complexities, you enjoy the results.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {auditPoints.map((point, i) => (
            <div key={i} className="bg-slate-50 p-12 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="text-6xl mb-10 group-hover:scale-110 transition-transform">{point.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tighter border-b-4 border-red-600 pb-2 inline-block">
                {point.category}
              </h3>
              <ul className="space-y-6">
                {point.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="text-red-600 font-black transition-transform group-hover/item:translate-x-1">→</span>
                    <span className="text-slate-600 font-bold text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* System Expertise */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-10 leading-snug uppercase tracking-tight">Expertise across <span className="text-red-500">every major system.</span></h2>
          <p className="text-slate-400 text-lg mb-16 max-w-3xl mx-auto">
            Our dedicated certified payroll specialists know exactly how to audit the settings, mapping, and compliance triggers across all platforms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {systems.map(brand => (
              <div key={brand} className="bg-white/5 p-6 rounded-none border border-white/10 flex items-center justify-center font-bold text-[10px] tracking-widest uppercase text-center">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-10 uppercase tracking-tight">Software handles the math. <br/><span className="text-red-600">Our specialists handle the liability.</span></h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12">
            No need to worry about employee onboarding, departures, terminations; send the updates to us and our team will help you manage the complexities discovered in your audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('home', 'System Audit')}
              className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => onNavigate('calculator')}
              className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white/5"
            >
              Try Our Calculator
            </button>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default AuditServicePage;
