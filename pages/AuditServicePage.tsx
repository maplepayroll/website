
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface AuditServicePageProps {
  onNavigate: (page: PageType) => void;
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
        "Record of Employment (ROE) Automation Check"
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
        "Data Migration & Integrity Audit"
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
        "Work-from-Home Reimbursement Review"
      ],
      icon: "👤"
    }
  ];

  const auditFaqs = [
    {
      q: "How long does a payroll audit take?",
      a: "Typically 3-5 business days. Once we have read-access to your software and CRA account, our NPI-certified team conducts the deep dive offline and presents the report within the week. Depending on the number of employees, the period being reviewed and the complexity of the payroll, the audit can take 1-2 weeks to complete once we have all the info, the entire process from start to finish usually takes 3-4 weeks."
    },
    {
      q: "Do you need access to my bank account for the audit?",
      a: "No. We only require 'Read-Only' access to your payroll platform (like QuickBooks, Xero) and your CRA My Business Account to verify remittance history."
    },
    {
      q: "Will this trigger a real CRA audit?",
      a: "No. This is a strictly private, internal review. Our goal is to identify and fix issues *before* the CRA ever notices them, protecting you from future penalties."
    },
    {
      q: "What happens if you find a major error?",
      a: "We will provide a 'Severity 1' alert immediately, along with a step-by-step mitigation plan. We can often help file voluntary disclosures to reduce potential penalties."
    },
    {
      q: "What if the audit finds that I owe money to the CRA?",
      a: "We calculate the exact amount and help you structure a voluntary disclosure. Often, showing proactive correction prevents the CRA from applying gross negligence penalties."
    },
    {
      q: "Can you audit previous tax years?",
      a: "Yes. We can review up to 7 years of historical data (the CRA's standard audit window) to find unrecoverable overpayments or hidden liabilities."
    },
    {
      q: "Is the audit confidential?",
      a: "Strictly. We sign a non-disclosure agreement before starting. The results are shared only with you and your designated authorized contacts."
    },
    {
      q: "Do I need to switch to Maple if I get an audit?",
      a: "No. You can purchase the audit as a standalone service. However, most clients choose to switch to us afterwards to prevent future issues."
    },
    {
      q: "How much does the audit cost?",
      a: "Our audit packages start at a fixed fee based on employee count. It is a one-time investment that often pays for itself by finding overpayments (like WSIB/WCB premiums)."
    }
  ];

  return (
    <div className="bg-white">
      {/* Updated Hero Section to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000" 
            alt="Expert Payroll System Audit" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          {/* Subtle Red Edge Accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Professional Service Offering
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Stop Wondering if <br/>
              <span className="text-red-500">Your Payroll is Right.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              We provide a 360° expert audit of your current payroll system, identifying hidden risks, config errors, and time-wasting manual workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Book Your Expert Audit
              </button>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('scorecard')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Take the Self-Audit First
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Audit? */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Software doesn't tell you <span className="text-red-600">where the gaps are.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Most businesses inherit their payroll configuration from a predecessor or an automated setup wizard. Years later, you're paying thousands in EHT you might not owe, or missing critical WCB classifications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-none border border-slate-100 shadow-sm">
                   <span className="w-10 h-10 bg-red-50 text-red-600 rounded-none flex items-center justify-center font-bold">✓</span>
                   <p className="font-bold text-slate-800 italic">"We saved one client $14,000 in missed EHT exemptions."</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-none border border-slate-100 shadow-sm">
                   <span className="w-10 h-10 bg-red-50 text-red-600 rounded-none flex items-center justify-center font-bold">✓</span>
                   <p className="font-bold text-slate-800 italic">"Corrected 3 years of WCB misclassification in 1 hour."</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-none text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Our Audit Process</h3>
              <div className="space-y-8">
                {[
                  { title: "Discovery Call", desc: "We review your current software (QuickBooks, Wagepoint, etc.) and your GL structure." },
                  { title: "The Deep Dive", desc: "Our NPI-certified experts audit your last 12 months of filings and employee data." },
                  { title: "Gap Report", desc: "You receive a clear, plain-English report of every config error and compliance risk." },
                  { title: "Optimization Plan", desc: "We provide a roadmap to fix errors and transition to a fully managed model." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 bg-red-600 rounded-none flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Checklist Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">The Maple Audit Checklist</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">We look at the 25+ points where Canadian businesses most often make mistakes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {auditPoints.map((point, i) => (
            <div key={i} className="bg-white p-10 rounded-none border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{point.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{point.category}</h3>
              <ul className="space-y-4">
                {point.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 font-bold">→</span>
                    <span className="text-slate-600 text-sm font-medium leading-relaxed">{item}</span>
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
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-10 leading-snug">Expertise across <span className="text-red-500">every major system.</span></h2>
          <p className="text-slate-400 text-lg mb-16 max-w-3xl mx-auto">
            Whether you're on legacy desktop software or the latest cloud platform, we know exactly how to audit the settings, mapping, and compliance triggers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {['QuickBooks', 'Xero', 'Sage', 'ADP', 'Ceridian', 'Wagepoint', 'Payworks', 'BambooHR', 'Gusto', 'Humi', 'Kollab', 'Deluxe'].map(brand => (
              <div key={brand} className="bg-white/5 p-6 rounded-none border border-white/10 flex items-center justify-center font-bold text-sm tracking-widest uppercase">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit FAQ */}
      <FAQ 
        items={auditFaqs} 
        title={
          <>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Audit Process <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Common questions about our compliance review.</p>
          </>
        } 
      />

      {/* CTA */}
      <section className="py-32 text-center bg-white max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-10 leading-snug">Ready for a professional second opinion on your payroll?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className="px-12 py-5 bg-red-600 text-white rounded-none text-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200 transform hover:scale-105"
          >
            Book Your Expert Audit
          </button>
          <button 
             onClick={() => onNavigate('home')}
             className="px-12 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-none text-xl font-bold hover:bg-slate-50 transition-all"
          >
            Take the Self-Audit First
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuditServicePage;
