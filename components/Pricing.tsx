
import React from 'react';
import { PageType } from '../App';

interface PricingProps {
  onNavigate?: (page: PageType) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const tiers = [
    {
      name: "Core Managed",
      price: "150",
      period: "per month",
      desc: "Perfect for small teams needing reliable, hands-off processing.",
      features: [
        "Full Payroll Processing",
        "Direct Deposit Management",
        "CRA & Provincial Remittances",
        "Year-End T4/T4A Filings",
        "ROE Web Submissions",
        "Email Employee Support"
      ],
      notIncluded: [
        "Managed Onboarding",
        "Benefits Admin Integration",
        "Workplace Safety Reporting",
        "Dedicated Account Expert",
        "Custom GL Mapping"
      ],
      cta: "Start with Core",
      highlighted: false
    },
    {
      name: "Professional",
      price: "295",
      period: "per month",
      desc: "Our most popular tier for growing businesses with complex needs.",
      features: [
        "Everything in Core",
        "Managed Employee Onboarding",
        "Benefits Admin Integration",
        "Workplace Safety Reporting",
        "Dedicated Account Expert",
        "Priority Phone Support"
      ],
      notIncluded: [
        "Multi-Entity Management",
        "Custom GL Mapping",
        "Labour Cost Analysis",
        "Audit Defence Representation"
      ],
      cta: "Go Professional",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote required",
      desc: "Complex multi-provincial entities with 50+ employees.",
      features: [
        "Everything in Professional",
        "Multi-Entity Management",
        "Custom GL Mapping",
        "Labour Cost Analysis",
        "Audit Defence Representation",
        "LMS & HR Integration"
      ],
      notIncluded: [],
      cta: "Talk to Sales",
      highlighted: false
    }
  ];

  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Transparent <span className="text-red-600">Investment</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Professional managed payroll that costs less than a single compliance error.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div key={i} className={`relative flex flex-col p-10 bg-white border ${t.highlighted ? 'border-red-600 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm'} rounded-none transition-all`}>
              {t.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">{t.name}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">{t.desc}</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-slate-900">{t.price !== 'Custom' ? `$${t.price}` : t.price}</span>
                {t.price !== 'Custom' && <span className="text-slate-400 font-bold ml-2">{t.period}</span>}
              </div>

              <div className="flex-grow mb-12 space-y-6">
                <ul className="space-y-4">
                  {t.features.map((f, idx) => (
                    <li key={`inc-${idx}`} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                
                {t.notIncluded && t.notIncluded.length > 0 && (
                  <>
                    <div className="h-px bg-slate-100 w-full"></div>
                    <ul className="space-y-4">
                      {t.notIncluded.map((f, idx) => (
                        <li key={`exc-${idx}`} className="flex items-center gap-3 text-sm font-medium text-slate-400">
                          <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="line-through decoration-slate-300 decoration-2">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <button 
                onClick={handleCtaClick}
                className={`w-full py-4 font-black uppercase tracking-widest text-sm transition-colors rounded-none ${t.highlighted ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-900 text-white hover:bg-black'}`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          * Base fees shown. Additional $5.00 to $10.00 per employee/month processing fee applies.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
