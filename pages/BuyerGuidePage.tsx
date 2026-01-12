import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface BuyerGuidePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const BuyerGuidePage: React.FC<BuyerGuidePageProps> = ({ onNavigate }) => {
  const steps = [
    "Identify Internal Capacity: Determine if payroll's taking more than 5 hours per month.",
    "Assess Risk: Evaluate the cost of CRA penalties vs. the cost of a provider.",
    "Vet Technology: Ensure the provider's using modern cloud software like Wagepoint or ADP.",
    "Check for 'Human' Support: Verify you'll get a dedicated specialist, not a call centre.",
    "Verify Full Outsourcing: Ensure they're handling onboarding, ROEs, and CRA inquiries."
  ];

  const migrationSteps = [
    { week: "01", title: "Data Extraction", desc: "Our migration team pulls history from your current system (Manual, ADP, Ceridian) to ensure continuity." },
    { week: "02", title: "CRA Authorization", desc: "We'll set up 'Authorized Representative' status with the CRA and provincial bodies so we're able to handle filings." },
    { week: "03", title: "Parallel Testing", desc: "We run a test cycle alongside your current process to verify every penny and tax code matches perfectly." },
    { week: "04", title: "Live Launch", desc: "Your first managed pay run's here. You send hours, we'll do the rest. Your specialist's on standby." }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Select an Outsourced Payroll Provider in Canada",
      "description": "A comprehensive guide for Canadian SMEs looking to hire an outsourced payroll department. Includes compliance checklists and service comparisons.",
      "step": steps.map((s, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "text": s
      }))
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

  const guideFaqs = [
    {
      q: "What's an outsourced payroll provider?",
      a: "An outsourced payroll provider's an external firm that acts as your company's payroll department. Unlike software-only tools, they're managing calculations, remittances, onboarding, and employee support directly."
    },
    {
      q: "How does outsourcing differ from just using payroll software?",
      a: "Software's a tool you've got to operate. Outsourcing means a team of experts're operating the tool for you. You send updates (new hires, raises, hours), and they'll handle the data entry, compliance checks, and filings."
    },
    {
      q: "Is there a minimum employee count required for outsourcing?",
      a: "While many providers're focused on 50+ employees, Maple specialises in small-to-medium businesses (1-75 staff). Even with a single employee, the compliance risk and admin burden often're enough to justify outsourcing."
    },
    {
      q: "What should I look for in a service agreement?",
      a: "Ensure the contract's got a 100% Accuracy Guarantee. If the provider's made a filing error or's missed a CRA deadline, they've got to be contractually liable for the resulting penalties."
    },
    {
      q: "Do I lose control over my payroll data?",
      a: "Not with modern providers. You'll always have 'View' access to the underlying software. Outsourcing's adding a layer of expert management; it isn't taking away your transparency."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-40" 
            alt="Outsourced Payroll Guide" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest mb-8 hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 bg-red-600 text-white text-[10px] font-black tracking-[0.2em] mb-8 uppercase shadow-lg">
              Strategic Brief
            </div>
            <h1 className="text-4xl lg:text-[6rem] font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              The Case <br/> <span className="text-red-500">for Outsourcing.</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-8 mb-10 max-w-2xl">
              <p className="text-xl text-slate-200 leading-relaxed font-medium italic">
                In Canada, an <strong>outsourced payroll provider</strong>'s acting as your professional department. Small businesses reclaim an average of <strong>10.5 hours per month</strong>, shifting liability from the owner to a certified specialist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Outsourcing Quote')} 
                className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-red-700 transition-all transform hover:-translate-y-1"
              >
                Request Outsourced Quote
              </button>
              <button 
                onClick={() => onNavigate('diy-calculator')} 
                className="px-14 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
              >
                Calculate ROI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-slate-100 pb-4">The Compliance Shield</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
              DIY payroll's a high-stakes gamble. For a Canadian business with 15 employees, a single missed remittance can trigger a 10% penalty from the CRA, potentially costing over <strong>$1,500 in one afternoon</strong>. Outsourcing moves that risk to us.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-slate-50 border border-slate-100 group hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-black text-slate-900 uppercase text-sm mb-4">Liability Transfer</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Maple Managed's taking legal responsibility for the accuracy of your source deductions. If the CRA identifies an error we've made, <strong>we'll pay the fines and handle the audit.</strong>
                </p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 group hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="font-black text-slate-900 uppercase text-sm mb-4">Threshold Monitoring</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  We're proactively monitoring provincial health tax (EHT) thresholds and WSIB/WCB rate changes, ensuring you don't overpay or miss a reporting tier.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-slate-100 pb-4">A Seamless Migration</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
              The biggest fear of switching's the effort. We've standardised a 4-week "Concierge Onboarding" process designed to require less than 1 hour of your time.
            </p>

            <div className="space-y-4 mb-20">
              {migrationSteps.map((s, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-white border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-4xl font-black text-slate-200 group-hover:text-red-600 transition-colors uppercase tracking-widest">{s.week}</div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tight text-lg mb-2">{s.title}</h4>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 p-12 text-white border-l-8 border-red-600 mb-20">
               <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter leading-none">Administrative Recovery: <br/><span className="text-red-500">The 10-Hour Rule</span></h3>
               <p className="text-slate-400 font-medium leading-relaxed mb-8">
                 Owners of teams under 50 staff spend roughly 10.5 hours per month on "Shadow Admin" tasks. This includes chasing void cheques, answering T4 questions, and verifying stat pay math. Outsourcing recovers this time for <strong>revenue-generating activities.</strong>
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">40%</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Efficiency Gain</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">0%</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">CRA Penalty Risk</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">100%</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Employee Trust</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">$0</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Late Fees</p>
                  </div>
               </div>
            </div>

            <FAQ items={guideFaqs} title={<h2 className="text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-none">Outsourcing <br/><span className="text-red-600">Common Questions</span></h2>} />
          </div>

          <div className="lg:col-span-4">
             <div className="sticky top-24 space-y-8">
                <div className="bg-slate-50 p-8 border border-slate-200">
                   <h4 className="font-black text-slate-900 uppercase text-xs mb-6 tracking-widest flex items-center gap-2">
                     <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                     Concierge Insight
                   </h4>
                   <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 italic">
                     "Most providers focus on the math. Maple focuses on the people. When your employee's got a question about their tax code, they'll call us. That's the true case for outsourcing: removing the owner as the middle-man."
                   </p>
                   <div className="flex items-center gap-3">
                      <img src="https://picsum.photos/seed/merali/40/40" className="w-10 h-10 rounded-full" alt="Expert" />
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">Arshad Merali</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Founder, Maple Managed</p>
                      </div>
                   </div>
                </div>

                <div className="bg-red-600 p-8 text-white shadow-2xl shadow-red-200">
                  <h4 className="font-black uppercase text-xs text-white mb-4 tracking-[0.2em]">The Compliance Shield</h4>
                  <p className="text-sm font-bold text-red-100 leading-relaxed mb-6">
                    84% of Canadian small businesses under audit by the CRA've got manually managed or DIY systems. Outsourcing provides an instant verifiable audit trail.
                  </p>
                  <button 
                    onClick={() => onNavigate('home', 'System Audit')}
                    className="w-full py-4 bg-white text-slate-900 font-black uppercase text-[10px] tracking-widest hover:bg-slate-100 transition-colors"
                  >
                    Request Compliance Audit
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">Ready to reclaim <br/><span className="text-red-600">your Sunday nights?</span></h2>
           <p className="text-xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
             Get a custom quote for a professionally managed payroll department that's costing less than a single compliance mistake.
           </p>
           <button 
             onClick={() => onNavigate('home', 'Outsourcing Transition')}
             className="px-16 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all shadow-xl"
           >
             Start Your Transition
           </button>
        </div>
      </section>
    </div>
  );
};

export default BuyerGuidePage;