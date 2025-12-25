
import React from 'react';
import { PageType } from '../App';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const addOns = [
    {
      title: "Garnishment Administration",
      price: "$100 Setup + $25",
      unit: "/ emp / run",
      desc: "We calculate, deduct, and remit payments to the Family Responsibility Office (FRO) or CRA for garnishment orders."
    },
    {
      title: "Rush Processing",
      price: "$250.00",
      unit: "/ occurrence",
      desc: "For payrolls submitted less than 3 business days before the pay date. Ensures same-day or next-day direct deposit."
    },
    {
      title: "Year-End Amendments",
      price: "$100.00",
      unit: "/ emp (min $500)",
      desc: "Corrections to T4s/RL-1s after the filing deadline."
    },
    {
      title: "ROE Filing (Manual)",
      price: "$100.00",
      unit: "/ ROE",
      desc: "Manual Record of Employment filings if not using software that automates the process."
    },
    {
      title: "Retroactive Pay Calc",
      price: "$125.00",
      unit: "/ hour",
      desc: "Complex manual calculations for retroactive salary adjustments spanning multiple tax years."
    }
  ];

  const pricingFaqs = [
    {
      q: "Is there a setup fee?",
      a: "Our standard setup fee is $250, which covers data migration from your previous provider, CRA authorization, and parallel testing. This fee is waived for annual contracts."
    },
    {
      q: "Do I pay for inactive employees?",
      a: "No. You only pay for active employees who received pay during the billing month. Terminated employees are stored for free for record-keeping purposes."
    },
    {
      q: "How does billing work?",
      a: "We only accept payment via credit card which is processed on the first of each month."
    },
    {
      q: "Are there long-term contracts?",
      a: "No. Our 'Core' and 'Professional' plans are month-to-month. You can cancel with 30 days' notice. Enterprise plans may have annual terms depending on complexity."
    },
    {
      q: "Does the price include T4s?",
      a: "Yes. Year-end T4 and T4A generation and filing are included in your monthly subscription fee at no extra cost if the payroll software used handles this automatically. If manual preparation is required, then our regular hourly rate applies."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Standardized to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" 
            alt="Transparent Payroll Pricing" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Simple & Transparent
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Pricing that <br/>
              <span className="text-red-500">Makes Sense</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-2xl">
              Professional managed payroll usually costs less than the penalties for getting it wrong. No hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                View Plans
              </button>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Components */}
      <div id="pricing-tiers">
        <Pricing />
      </div>

      {/* Additional Services Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Additional <span className="text-red-600">Services</span></h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Specific situations require specific solutions. These add-ons ensure you only pay for the complexity you actually have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((item, i) => (
              <div key={i} className="p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{item.title}</h3>
                  <div className="text-right">
                    <span className="block font-black text-red-600 text-lg whitespace-nowrap">{item.price}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.unit}</span>
                  </div>
                </div>
                <div className="h-0.5 w-12 bg-slate-200 mb-4 group-hover:w-full group-hover:bg-red-600 transition-all duration-500"></div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={pricingFaqs} 
        title={
          <>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Billing <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Common questions about how we charge for our services.</p>
          </>
        } 
      />

      {/* Final CTA */}
      <section className="py-32 text-center bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 uppercase tracking-tighter">Not sure which plan fits?</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Most of our clients have unique needs. We are happy to build a custom package that includes exactly what you need—nothing more, nothing less.
          </p>
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }}
            className="px-12 py-5 bg-red-600 text-white rounded-none text-xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-900/50"
          >
            Request Custom Proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
