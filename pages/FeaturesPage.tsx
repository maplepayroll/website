
import React from 'react';
import FAQ from '../components/FAQ';

interface FeaturesPageProps {
  onNavigate: (page: any) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const detailedFeatures = [
    {
      title: "Automated Remittances",
      desc: "Dedicated certified payroll specialists are included in your service and will help you keep your payroll compliant with federal and provincial regulations.",
      icon: "💰",
      details: ["CRA & Provincial Remittances", "Workplace Safety Filings (WSIB, WCB)", "EHT & Provincial Health Taxes"]
    },
    {
      title: "Direct Deposit & Pay Stubs",
      desc: "Seamless electronic payments managed by your dedicated specialist. We handle the banking complexities so your team gets paid correctly every cycle.",
      icon: "🏧",
      details: ["Next-day direct deposit", "Detailed digital stubs", "Year-end T4 portal access"]
    },
    {
      title: "Managed Onboarding",
      desc: "No need to worry about employee onboarding; send the updates to us and our team will manage the complexities of TD1s and banking forms.",
      icon: "🤝",
      details: ["TD1 & Provincial Form Collection", "Direct Deposit Info Gathering", "Employment Contract Tracking"]
    },
    {
      title: "Year-End Processing",
      desc: "Our certified specialists handle the entire T4/RL-1 filing process, ensuring you stay compliant with payroll-related regulations.",
      icon: "📅",
      details: ["T4 & T4A Preparation", "Quebec RL-1 & RL-2 filings", "CRA Summary Filings"]
    },
    {
      title: "Departures & Terminations",
      desc: "No need to worry about employee departures or terminations; our team manages the ROE filing and statutory payout logic for you.",
      icon: "📄",
      details: ["Quick ROE Processing", "ROE Web management", "Termination compliance audit"]
    },
    {
      title: "Dedicated Employee Support",
      desc: "Your staff speaks to our certified specialists directly. We handle all pay-related questions while keeping your data confidential.",
      icon: "🗣️",
      details: ["Dedicated phone line", "Email ticketing support", "Live chat for employees"]
    }
  ];

  const featureFaqs = [
    {
      q: "How does the 'Dedicated Specialist' model work?",
      a: "Dedicated certified payroll specialists are included in your service and will help you keep your payroll compliant with all payroll-related regulations. You get a direct line to an expert who knows your business, not a generic call centre."
    },
    {
      q: "Do I have to manage onboarding forms?",
      a: "No need to worry about employee onboarding; send the hire details to us and our team will handle the collection of TD1s, direct deposit info, and required provincial tax forms."
    },
    {
      q: "What happens when someone leaves?",
      a: "No need to worry about departures or terminations; simply send the update to us and our team will manage the complexities of final pay, statutory holiday calculations, and ROE filings."
    },
    {
      q: "How do you handle CRA inquiries?",
      a: "Our certified specialists act as your authorized representative. If the CRA calls or sends a notice, we answer on your behalf, providing the necessary documentation to ensure compliance."
    },
    {
      q: "Can you manage payroll for employees in multiple provinces?",
      a: "Yes. We support all 13 provinces and territories. We handle the specific tax brackets, Workers' Comp rates, and provincial health taxes (like EHT in Ontario or BC) for each jurisdiction."
    },
    {
      q: "How do you handle benefits reconciliation?",
      a: "We reconcile your monthly group insurance invoices against your active payroll to ensure you aren't paying for terminated employees and that all new hire deductions are accurate."
    },
    {
      q: "What is the turnaround time for processing a pay run?",
      a: "We typically require your pay data 3 business days before the pay date to guarantee next-day direct deposit. Emergency rush processing is available for a small fee."
    },
    {
      q: "Do employees get a mobile app or portal for pay stubs?",
      a: "This is a function of the payroll software selected but most do offer this ability. Employees receive secure access to a digital portal where they can view and download their current and historical pay stubs, as well as year-end T4 or RL-1 slips."
    },
    {
      q: "Can you handle year-end T4/T4A and RL-1/RL-2 filings?",
      a: "Absolutely. Year-end processing is included. We generate, file, and distribute all required tax slips to both your employees and the federal/provincial governments."
    },
    {
      q: "Are remittances to CRA and WSIB/WCB handled automatically?",
      a: "Yes. We calculate the exact amounts owed, remit them electronically on your behalf, and provide you with clear reporting for your accounting records every cycle."
    }
  ];

  return (
    <div className="bg-white">
      {/* Full-Width Background Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Canadian Business Professional" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Service Capabilities
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              We Do <br/>
              Your <br/>
              <span className="text-red-500">Payroll</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              Dedicated certified payroll specialists are included in your service and will help you keep your payroll compliant with payroll-related regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Get a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Complexity Managed, <span className="text-red-600">Step by Step.</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            No need to worry about employee onboarding, departures, terminations; send the updates to us and our team will help you manage the complexities. We are your dedicated Canadian payroll department.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {detailedFeatures.map((f, i) => (
          <div key={i} className="p-10 rounded-none bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
            <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{f.title}</h3>
            <p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">{f.desc}</p>
            <ul className="space-y-3">
              {f.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-none"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <FAQ 
        items={featureFaqs} 
        title={
          <>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Service <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">How our specialists handle your business complexities.</p>
          </>
        } 
      />

      {/* CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">Send updates. <br/> <span className="text-red-600">We manage the rest.</span></h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">Dedicated certified payroll specialists are ready to keep you compliant and stress-free.</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className="px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-200"
          >
            Talk to a Specialist
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
