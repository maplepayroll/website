
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface CanadianPayrollSoftwareGuideProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const CanadianPayrollSoftwareGuide: React.FC<CanadianPayrollSoftwareGuideProps> = ({ onNavigate }) => {
  const companies = [
    {
      name: "Wagepoint",
      type: "Pure-play Cloud Payroll",
      bestFor: "Small Businesses (1-50 employees)",
      desc: "The 'gold standard' for simple, cloud-based payroll in Canada. It focuses purely on getting people paid accurately and on time.",
      mapleInsight: "Wagepoint is our favorite tool for high-efficiency managed service. We handle 100% of the processing for you."
    },
    {
      name: "ADP Canada",
      type: "Enterprise Bureau",
      bestFor: "Mid-to-Large Corporations",
      desc: "One of the most established names in payroll. ADP offers robust reporting and global scalability but has a steeper learning curve.",
      mapleInsight: "We act as your 'Power User' in ADP, navigating their complex reporting engine so you don't have to."
    },
    {
      name: "Knit",
      type: "Cloud Payroll & HR",
      bestFor: "Growing Small Businesses",
      desc: "A lightweight but powerful platform that handles payroll, benefits, and HR. Known for its user-friendly interface.",
      mapleInsight: "Knit is perfect for our concierge model; we handle the admin while you enjoy the clean reporting."
    },
    {
      name: "Employment Hero",
      type: "All-in-one HR & Payroll",
      bestFor: "Small to Mid-sized Tech Firms",
      desc: "Formerly Humi, this is a modern, cloud-native platform that puts HR first. Great for 'single source of truth' data.",
      mapleInsight: "We manage the payroll side of Employment Hero, letting your HR team focus on culture."
    },
    {
      name: "Payworks",
      type: "Managed Payroll Service",
      bestFor: "SMEs looking for reliability",
      desc: "A Winnipeg-based company offering a balance between software and support. Very popular among Canadian non-profits.",
      mapleInsight: "We interface with Payworks' dedicated reps, acting as your authorized contact to resolve issues faster."
    },
    {
      name: "QuickBooks Online Payroll",
      type: "Accounting Integration",
      bestFor: "Micro-businesses & Startups",
      desc: "If you already use QuickBooks for accounting, their payroll add-on is the simplest way to get started.",
      mapleInsight: "We specialize in auditing QBO Payroll setups, which are frequently misconfigured by DIY owners."
    }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Best Canadian Payroll Software 2026",
      "description": "Expert comparison of Wagepoint, ADP, Knit, and Payworks for Canadian small businesses.",
      "itemListElement": companies.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": c.name,
        "description": c.desc
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const softwareFaqs = [
    {
      q: "Which payroll software is easiest for a small business?",
      a: "Wagepoint and Knit consistently rank highest for user experience among Canadian SMEs. They are purpose-built for the Canadian market and don't include the 'bloat' found in global enterprise tools."
    },
    {
      q: "Does all payroll software handle T4s automatically?",
      a: "Most cloud platforms will 'generate' the files, but you are still responsible for reviewing them for accuracy and hitting the submission button. Maple's managed service takes this a step further by performing the audit and filing them for you."
    },
    {
      q: "Can I integrate payroll with Xero or QuickBooks?",
      a: "Yes. Modern platforms like Wagepoint and Employment Hero have direct APIs that push your payroll journal entries into your accounting software automatically, ensuring your books are always in sync."
    },
    {
      q: "Do employees get a mobile app to see their pay stubs?",
      a: "Most modern providers (Knit, Employment Hero, Wagepoint) offer a mobile-responsive employee portal or dedicated iOS/Android app where staff can download stubs and T4s securely."
    },
    {
      q: "How does the software handle ROEs?",
      a: "The best platforms integrate directly with 'ROE Web' from Service Canada. This allows the system to transmit the departure data electronically, eliminating the need for manual paper forms."
    },
    {
      q: "Is ADP better than Wagepoint for my business?",
      a: "ADP is superior for complex reporting, unionized environments, and teams over 100. Wagepoint is far superior for speed, simplicity, and cost-effectiveness for teams under 50."
    },
    {
      q: "Can I switch software mid-year?",
      a: "Yes, but it's more complex as you must migrate 'Year-to-Date' (YTD) balances to ensure T4s are correct. This is why many businesses hire Maple to manage the mid-year migration for them."
    },
    {
      q: "Does Canadian payroll software handle benefits deductions?",
      a: "Most allow you to set up recurring deductions, but very few 'sync' with your insurance carrier. This means if a premium changes, you must update the software manually—unless you have a managed service like Maple."
    },
    {
      q: "What is the typical 'per-employee' cost for software?",
      a: "Expect to pay a base fee of $20-$40 per month plus $2-$5 per employee per run. This is for the software license only; managed services (labor) are an additional investment."
    },
    {
      q: "What is the biggest risk of 'DIY' software setup?",
      a: "Misconfigured 'Earning Codes'. If you accidentally set a bonus to be exempt from EI when it should be taxable, you could face thousands in back-taxes and penalties during a CRA audit."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38+f71?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="Best Payroll Software Canada" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <div className="inline-flex items-center px-4 py-1.5 bg-red-600 text-white text-[10px] font-black tracking-[0.2em] mb-8 uppercase">2026 Market Audit</div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              Best <br/> <span className="text-red-500">Payroll Software</span> <br/> in Canada.
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                For small businesses (1-50 employees), <strong>Wagepoint</strong> and <strong>Knit</strong> are the top cloud-based choices due to ease of use. Larger firms requiring robust reporting typically choose <strong>ADP</strong> or <strong>Payworks</strong>. For micro-businesses already using Intuit, <strong>QuickBooks Online Payroll</strong> offers the best accounting integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {companies.map((c, i) => (
            <div key={i} className="group bg-slate-50 border border-slate-200 p-10 lg:p-16 relative transition-all hover:bg-white hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-slate-900 text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">{c.type}</div>
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{c.name}</h3>
                  <div className="inline-block bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6">Best for: {c.bestFor}</div>
                  <p className="text-slate-600 font-medium leading-relaxed">{c.desc}</p>
                </div>
                <div className="lg:col-span-7">
                  <div className="bg-white p-8 border-l-8 border-slate-900 shadow-sm">
                    <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4">Concierge Insight</h4>
                    <p className="text-slate-800 text-lg font-bold italic leading-relaxed">"{c.mapleInsight}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Author Bio for E-E-A-T */}
        <div className="mt-20 p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 border-l-8 border-red-600">
           <img src="https://picsum.photos/seed/expert/100/100" className="w-20 h-20 rounded-full border-2 border-red-600" alt="Payroll Expert" />
           <div>
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Reviewed by Authority</p>
              <h4 className="text-xl font-black uppercase">Arshad Merali, PCP</h4>
              <p className="text-sm text-slate-400 font-medium">Founder of Maple Managed Payroll with 15+ years experience in Canadian compliance software configuration.</p>
           </div>
        </div>
      </section>
      <FAQ items={softwareFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Software <span className="text-red-600">FAQ</span></h2>} />
    </div>
  );
};

export default CanadianPayrollSoftwareGuide;
