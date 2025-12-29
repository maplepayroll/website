
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface BuyerGuidePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const BuyerGuidePage: React.FC<BuyerGuidePageProps> = ({ onNavigate }) => {
  const deepInsights = [
    {
      title: "Full-Service Scope",
      desc: "A true provider handles far more than 'gross-to-net' math. They manage federal and provincial tax filings, withholding/paying garnishments, and full time & attendance syncing.",
      details: ["Garnishment Administration", "Provincial Health Taxes", "Time/Attendance Syncing"],
      icon: "🎯"
    },
    {
      title: "The Compliance Shield",
      desc: "T4, T4A, RL-1s—the paperwork list is exhausting. A high-quality partner takes the lead in filing and covers the costs of mistakes if they caused them.",
      details: ["Error Coverage Guarantee", "Quebec RL-1 Management", "Minimum Wage Tracking"],
      icon: "🛡️"
    },
    {
      title: "Employee Self-Service",
      desc: "Modern teams expect to look up stubs, manage withholdings, and clock in/out via mobile devices without waiting for you to answer them.",
      details: ["Mobile Pay Stubs", "Self-Managed Withholdings", "Geofenced Clock-Ins"],
      icon: "📱"
    },
    {
      title: "Strategic Integration",
      desc: "Payroll doesn't exist in a vacuum. Your provider must sync with RRSP contributions, benefits bills, and accounting software to reduce data entry errors.",
      details: ["QuickBooks/Xero/Wave Sync", "RRSP Contribution Flows", "GL Mapping Automation"],
      icon: "🔗"
    }
  ];

  const selfAssessmentMatrix = [
    {
      label: "The Scarcest Resource",
      options: [
        { name: "Time", icon: "⌛" },
        { name: "Peace of Mind", icon: "🧘" },
        { name: "Staff Capacity", icon: "👥" },
        { name: "Patience", icon: "💢" }
      ]
    },
    {
      label: "The Primary Pain Point",
      options: [
        { name: "Tax Compliance", icon: "⚖️" },
        { name: "Payroll Management", icon: "📑" },
        { name: "Calculating Withholdings", icon: "🧮" },
        { name: "Time Tracking", icon: "⏱️" },
        { name: "Employment Law", icon: "📜" }
      ]
    }
  ];

  const questionsToAsk = [
    {
      q: "What is your support window for urgent issues?",
      a: "The document recommends direct access to certified professionals available at least 8:00am–8:00pm EST. Don't settle for a 48-hour ticket response."
    },
    {
      q: "How do you handle pay if a disaster strikes?",
      a: "Cloud-based solutions are mandatory. Ensure your provider allows you to run payroll from any mobile device, regardless of local disruptions."
    },
    {
      q: "Will this play well with my accountant?",
      a: "A trusted provider facilitates seamless data reporting that empowers your accountant to work with greater efficiency on your higher-level strategy."
    },
    {
      q: "How do you handle provincial health taxes?",
      a: "Provincial health taxes (like EHT) vary by jurisdiction and can change based on your total payroll thresholds. We monitor these limits and handle the filings across all provinces."
    },
    {
      q: "What factors influence my total cost?",
      a: "Pay frequency, headcount, and how often you add/remove payees all influence the structure. Demand a clear, transparent pricing logic."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic Payroll Selection" 
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
              Strategy vs. Software
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Do You Need <br/>
              <span className="text-red-500">Software</span> or a <br/>
              <span className="text-red-500">Department?</span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed font-medium mb-12 max-w-2xl">
              "Running payroll is a critical responsibility, but it doesn’t have to be the most stressful." Learn how to identify a partner that saves you time and protects your liability.
            </p>
            <button 
              onClick={() => {
                onNavigate('home', 'Buyer Guide Inquiry');
              }}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-red-600/30"
            >
              Consult an Expert
            </button>
          </div>
        </div>
      </section>

      {/* The Definition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 p-12 lg:p-20 border border-slate-200">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">What is a Payroll Service Provider?</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              A full-service provider goes way beyond basic math. They should manage the most labour-intensive aspects of your business:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Automatic tax withholding & forwarding",
                "Electronic pay options (Direct Deposit)",
                "Garnishment administration",
                "Provincial and Federal tax filings",
                "Compliance with regulatory changes",
                "Integrated time and attendance systems"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-none"></div>
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specific Capability Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {deepInsights.map((insight, i) => (
            <div key={i} className="p-10 border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{insight.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">{insight.title}</h3>
              <p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed flex-grow">{insight.desc}</p>
              <div className="space-y-3 pt-6 border-t border-slate-50">
                {insight.details.map((detail, idx) => (
                  <p key={idx} className="text-[10px] font-black text-red-600 uppercase tracking-widest">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Assessment Matrix */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">Your <span className="text-red-600">Self-Assessment</span></h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">Before you decide, take a moment to consider your priorities across these critical metrics.</p>
          </div>

          <div className="space-y-20">
            {selfAssessmentMatrix.map((matrix, i) => (
              <div key={i} className="space-y-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 text-center">{matrix.label}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {matrix.options.map(opt => (
                    <div key={opt.name} className="bg-white/5 p-8 border border-white/10 text-center hover:bg-white/10 transition-all cursor-pointer group">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{opt.icon}</div>
                      <p className="text-xs font-bold uppercase tracking-widest">{opt.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/5 border border-white/10 text-center rounded-none max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 italic mb-8">
              "The majority of North American companies now outsource payroll tax prep (76%), year-end distribution (63%), and garnishment administration (52%)."
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">— Deloitte Payroll Operations Survey</p>
          </div>
        </div>
      </section>

      {/* Question to Ask / FAQ Details */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Questions to Ask <br/><span className="text-red-600">Any Potential Partner</span></h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto mb-20">
          {questionsToAsk.map((item, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-8 items-start group">
              <div className="md:col-span-1">
                <span className="text-3xl font-black text-slate-200 group-hover:text-red-600 transition-colors">0{i + 1}</span>
              </div>
              <div className="md:col-span-11 p-10 border border-slate-100 bg-slate-50 group-hover:bg-white group-hover:shadow-2xl transition-all">
                <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.q}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  <span className="text-red-600 font-black mr-2">A:</span> {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Bottom Line Section */}
        <div className="bg-slate-900 text-white p-10 mb-20 shadow-xl border-l-8 border-red-600">
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
              <p className="text-lg font-bold leading-relaxed">
                Payroll is not a software problem; it is a liability management problem. Choose the partner that takes the most risk off your plate.
              </p>
            </div>
            <div className="h-px bg-white/20 my-4"></div>
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Assuming your accountant is handling your payroll compliance when they are likely only looking at it once a year during tax season. Source deductions happen monthly.
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
                        CRA: T4001 Employers' Guide – Payroll Deductions and Remittances <span>↗</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.bdc.ca/en/articles-tools/business-strategy-planning/manage-business/payroll-how-manage-effectively" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        BDC: How to manage payroll effectively <span>↗</span>
                    </a>
                </li>
            </ul>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">
            Don't Choose an App. <br/>
            <span className="text-red-600">Choose a Strategy.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
            "There’s not much point to working with a payroll service provider that doesn’t save you time." Maple ensures you significantly reduce the amount of time you devote to the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('home', 'Strategic Consultation')}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => onNavigate('calculator')}
              className="px-14 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Try the Calculator
            </button>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default BuyerGuidePage;
