
import React from 'react';
import FAQ from '../components/FAQ';

interface FeaturesPageProps {
  onNavigate: (page: any) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const detailedFeatures = [
    {
      title: "Automated Remittances",
      desc: "We calculate and pay your federal and provincial payroll taxes automatically. Never miss a CRA deadline again.",
      icon: "💰",
      details: ["CRA & Provincial Remittances", "Workplace Safety Filings (WSIB, WCB)", "EHT & Provincial Health Taxes"]
    },
    {
      title: "Direct Deposit & Pay Stubs",
      desc: "Seamless electronic payments to all major Canadian banks with digital pay stubs accessible via a secure portal we manage for you.",
      icon: "🏧",
      details: ["Next-day direct deposit", "Detailed digital stubs", "Year-end T4 portal access"]
    },
    {
      title: "Managed Onboarding",
      desc: "We take the administrative burden of hiring off your hands. We collect all necessary documents to ensure your team is compliant and ready to be paid from day one.",
      icon: "🤝",
      details: ["TD1 & Provincial Form Collection", "Direct Deposit Info Gathering", "Employment Contract Tracking"]
    },
    {
      title: "Year-End Processing",
      desc: "We handle the entire T4 filing process, including amendments and electronic submission to the government.",
      icon: "📅",
      details: ["T4 & T4A Preparation", "Quebec RL-1 & RL-2 filings", "CRA Summary Filings"]
    },
    {
      title: "Records of Employment (ROE)",
      desc: "Automated ROE filing via ROE Web. We ensure your outgoing employees get their benefits without delay.",
      icon: "📄",
      details: ["Same-day ROE filing", "ROE Web management", "Termination compliance audit"]
    },
    {
      title: "Dedicated Employee Support",
      desc: "Your staff speaks to our experts, not you. Support available for all provinces and territories.",
      icon: "🗣️",
      details: ["Dedicated phone line", "Email ticketing support", "Live chat for employees"]
    },
    {
      title: "CRA Representation",
      desc: "In the event of an audit or inquiry, our NPI-certified team speaks to the CRA on your behalf. We handle the paperwork.",
      icon: "🏛️",
      details: ["Audit assistance", "CRA portal management", "Penalty dispute handling"]
    }
  ];

  const featureFaqs = [
    {
      q: "Does your automated remittance service cover provincial health taxes?",
      a: "Yes. We automatically calculate and remit provincial health taxes (like the Ontario EHT and BC EHT) based on your total payroll thresholds, ensuring you never miss a filing."
    },
    {
      q: "Can I use my existing ROE Web account?",
      a: "We typically act as the primary contact on your ROE Web account to handle filings instantly. If you prefer to retain control, we can generate the files for you to upload."
    },
    {
      q: "How fast is the direct deposit funding?",
      a: "For most clients, we operate on a 3-day lead time. However, qualified accounts can access next-day funding to keep cash flow tight."
    },
    {
      q: "Do you handle T4s for contractors?",
      a: "Yes. We manage both T4s for employees and T4As for independent contractors, ensuring your entire workforce is compliant."
    },
    {
      q: "Do you integrate with time-tracking software?",
      a: "Yes. We can import data directly from TSheets, Deputy, 7Shifts, and other major time-tracking platforms to eliminate manual data entry errors."
    },
    {
      q: "How does Managed Onboarding work for remote staff?",
      a: "We send a secure digital package to the new hire. They upload their void cheque, sign their TD1s digitally, and we verify everything before their start date."
    },
    {
      q: "Is there an extra fee for year-end T4 adjustments?",
      a: "No. Unlike many bureaus that charge per slip or for 'amendments', our managed service includes year-end filing and reasonable adjustments at no extra cost."
    },
    {
      q: "Can you handle multiple Business Numbers (BNs)?",
      a: "Absolutely. We are experts in multi-entity management. We can run separate payrolls for different divisions while giving you a consolidated reporting view."
    },
    {
      q: "How do you handle garnishments or family support deductions?",
      a: "We calculate the correct garnishment amount based on provincial rules and remit payments directly to the appropriate court or agency on your behalf."
    }
  ];

  return (
    <div className="bg-white">
      {/* Full-Width Background Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Canadian Business Professional" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Legibility - Solid on left, fades to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          {/* Subtle Red Edge Accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Service Capabilities
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              FULL-SPECTRUM <br/>
              <span className="text-red-500">PAYROLL MANAGEMENT</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              From complex calculations to direct employee support, discover how we handle the heavy lifting for your business across all 13 provinces and territories.
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
              <button 
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Launch Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">Built for accuracy, delivered with care.</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Maple isn't a DIY platform. We are a professional services firm that uses industry-leading tools to manage your entire payroll department from A to Z. You don't just get a login; you get an entire NPI-certified team.
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

      {/* Complex Scenarios Section */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">Complex Payroll? <br/><span className="text-red-600">Consider it done.</span></h2>
               <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                 Many providers run away from complexity. At Maple, we thrive on it. Our team handles the specific nuances of Canadian labour law that software alone often misses.
               </p>
               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-6 border border-white/10 bg-white/5">
                    <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-2">Equity & Bonus</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Taxable benefits for stock options, bonuses, and non-cash gifts audited for compliance.</p>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5">
                    <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-2">Multi-Provincial</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Employees in QC, BC, and ON simultaneously? We handle the EHT, Health Tax, and RL filings.</p>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5">
                    <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-2">Vacation Accrual</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Complex 'Pay-Out' vs 'Accrual' logic managed per province to avoid labour disputes.</p>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5">
                    <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-2">Labour Tracking</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Department-level cost allocation and GL mapping verified by professional accountants.</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative">
                 <div className="absolute -inset-4 bg-red-600 opacity-20 blur-2xl"></div>
                 <div className="relative bg-white p-12 rounded-none border border-slate-200 shadow-2xl">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Security Standards</p>
                    <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Your Data, Protected.</h3>
                    <p className="text-slate-600 text-sm mb-8 font-medium leading-relaxed">
                      We utilize bank-grade encryption and adhere to strict PIPEDA standards. Our internal processes are SOC2 compliant, ensuring your payroll data never leaves Canadian soil.
                    </p>
                    <ul className="space-y-4">
                      {["End-to-end Encryption", "Strict Access Controls", "Canadian Data Residency", "SOC2 Compliant Processes"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-slate-900 font-bold text-xs uppercase tracking-widest">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Specific FAQ */}
      <FAQ 
        items={featureFaqs} 
        title={
          <>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Capabilities <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Specific questions about our operational features.</p>
          </>
        } 
      />

      {/* CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">Ready to see <br/> how we <span className="text-red-600">work?</span></h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">Join hundreds of Canadian business owners who have replaced their payroll stress with Maple's professional managed service.</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className="px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-200 transform hover:scale-105"
          >
            Request a Free Consultation
          </button>
          <button 
             onClick={() => onNavigate('home')}
             className="px-12 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-none text-lg font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
