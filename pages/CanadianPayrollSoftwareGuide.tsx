
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface CanadianPayrollSoftwareGuideProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const CanadianPayrollSoftwareGuide: React.FC<CanadianPayrollSoftwareGuideProps> = ({ onNavigate }) => {
  // Alphabetically sorted companies based on the source article
  const companies = [
    {
      name: "ADP Canada",
      type: "Enterprise Bureau",
      bestFor: "Mid-to-Large Corporations",
      desc: "One of the most established names in payroll. ADP offers robust reporting and global scalability but is often cited for its complex interface and layered pricing.",
      mapleInsight: "We act as your 'Power User' in ADP, navigating their complex reporting engine so you don't have to."
    },
    {
      name: "Avanti",
      type: "HCM Platform",
      bestFor: "Mid-sized organizations (100+ employees)",
      desc: "A powerful Canadian-made HCM platform that integrates payroll, people management, and recruiting into one unified database.",
      mapleInsight: "We help manage the 'people data' flow in Avanti, ensuring your payroll stays in sync with your HR changes."
    },
    {
      name: "Dayforce",
      type: "Enterprise Cloud HCM",
      bestFor: "Complex Global Enterprises",
      desc: "A massive, feature-rich platform (formerly Ceridian) that combines payroll, benefits, and workforce management. Ideal for companies with thousands of employees.",
      mapleInsight: "Dayforce is high-complexity. Maple provides the specialized expertise needed to manage its deep configuration settings."
    },
    {
      name: "Desjardins (Employeur D)",
      type: "Regional Bureau",
      bestFor: "Quebec-based Businesses",
      desc: "The primary choice for many Quebec businesses, offering deep integration with Quebec's specific health and social programs.",
      mapleInsight: "We handle the dual-reporting nuances between CRA and Revenu Québec within the Desjardins environment."
    },
    {
      name: "Employment Hero",
      type: "All-in-one HR & Payroll",
      bestFor: "Small to Mid-sized Tech Firms",
      desc: "Formerly Humi, this is a modern, cloud-native platform that puts HR first. Great for companies that want a 'single source of truth' for all employee data.",
      mapleInsight: "We manage the payroll side of Employment Hero, letting your HR team focus on culture while we handle the remittances."
    },
    {
      name: "Knit",
      type: "Cloud Payroll & HR",
      bestFor: "Growing Small Businesses",
      desc: "A lightweight but powerful platform that handles payroll, benefits, and HR. Known for its user-friendly interface and Canadian focus.",
      mapleInsight: "Knit is perfect for our concierge model; we handle the admin while you enjoy the clean reporting."
    },
    {
      name: "Payworks",
      type: "Managed Payroll Service",
      bestFor: "SMEs looking for reliability",
      desc: "A Winnipeg-based company offering a balance between software and support. Very popular among Canadian non-profits and professional firms.",
      mapleInsight: "We interface with Payworks' dedicated reps, acting as your authorized contact to resolve issues faster."
    },
    {
      name: "QuickBooks Online Payroll",
      type: "Accounting Integration",
      bestFor: "Micro-businesses & Startups",
      desc: "If you already use QuickBooks for accounting, their payroll add-on is the simplest way to get started. Great for under 10 employees.",
      mapleInsight: "We specialize in auditing QBO Payroll setups, which are frequently misconfigured by DIY owners."
    },
    {
      name: "Rise",
      type: "HCM & Benefits",
      bestFor: "Employee-Experience Focused Firms",
      desc: "Rise is known for its beautiful interface and its focus on employee experience, specifically through its integrated benefits platform.",
      mapleInsight: "We manage the Rise platform to ensure your premium reconciliations and payroll deductions match perfectly."
    },
    {
      name: "UKG (Ultimate Kronos Group)",
      type: "Workforce Management",
      bestFor: "High-Headcount & Shift-Based Work",
      desc: "A heavyweight in time and attendance. UKG is often used by healthcare and manufacturing firms with complex shift rules.",
      mapleInsight: "We handle the complex shift-to-payroll conversion logic within UKG to ensure stat pay and OT are always accurate."
    },
    {
      name: "Wagepoint",
      type: "Pure-play Cloud Payroll",
      bestFor: "Small Businesses (1-50 employees)",
      desc: "The 'gold standard' for simple, cloud-based payroll in Canada. It focuses purely on getting people paid accurately and on time.",
      mapleInsight: "Wagepoint is our favorite tool for high-efficiency managed service. We handle the 100% of the processing for you."
    },
    {
      name: "Wave Payroll",
      type: "Freelancer/Micro-business Tool",
      bestFor: "Solopreneurs & Micro-teams",
      desc: "Integrated with Wave's free accounting software, their payroll service is a low-cost entry point for very small Canadian teams.",
      mapleInsight: "As micro-businesses grow, we help them transition from Wave to more robust systems without losing data integrity."
    }
  ];

  const softwareFaqs = [
    {
      q: "Is it safe to use cloud-based payroll software?",
      a: "Yes. Most modern cloud providers (like Wagepoint, Knit, and Xero) use bank-grade 256-bit encryption and are arguably more secure than hosting sensitive data on a local office server."
    },
    {
      q: "How long does it take to switch providers?",
      a: "Typical migration time is 2-4 weeks. This allows time to extract YTD data, set up the new system, verify tax numbers, and run a parallel pay cycle to ensure accuracy."
    },
    {
      q: "Do I need software if I outsource to Maple?",
      a: "Yes and no. You need a platform to process the calculations, but WE manage it. We can work with your existing software or set you up on our preferred partner platform included in your fee."
    },
    {
      q: "Can I import data from QuickBooks Desktop?",
      a: "Most cloud platforms have import tools for QuickBooks Desktop, Sage 50, and other legacy systems. We handle this data migration as part of our onboarding service."
    },
    {
      q: "Which software is best for construction companies?",
      a: "Construction has unique needs like job costing and union deductions. Platforms like Payworks or specialized configurations of ADP are often better suited than simple cloud tools like Wave."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
            alt="Canadian Payroll Software Comparison" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-4xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 text-xs font-black uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-black tracking-[0.2em] mb-8 uppercase shadow-lg">
              2025 Market Comparison
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              What is the best <br/>
              <span className="text-red-500">Payroll Software</span> <br/>
              in Canada?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10 max-w-2xl">
              From enterprise giants like ADP to cloud innovators like Wagepoint, we've audited the 12 top platforms on the Canadian market today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none mb-20">
          <p className="text-2xl font-bold text-slate-900 border-l-8 border-red-600 pl-8 mb-12 uppercase tracking-tighter italic">
            "Software is just the engine. Maple is the professional driver."
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Choosing the right payroll platform in Canada depends on your headcount, your industry, and how much HR functionality you need. While many of these platforms claim to be 'automated', they still require a professional to handle the edge cases, remittances, and support questions.
          </p>
        </div>

        <div className="space-y-12">
          {companies.map((c, i) => (
            <div key={i} className="group bg-slate-50 border border-slate-200 p-8 lg:p-16 relative overflow-hidden transition-all hover:bg-white hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-slate-900 text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">
                {c.type}
              </div>
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{c.name}</h3>
                  <div className="inline-block bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6">
                    Best for: {c.bestFor}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    {c.desc}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="bg-white p-8 lg:p-12 border-l-8 border-slate-900 shadow-sm group-hover:shadow-xl transition-all">
                    <h4 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Maple Concierge Insight</h4>
                    <p className="text-slate-800 text-lg font-bold italic leading-relaxed">
                      "{c.mapleInsight}"
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Compatibility: 100%</p>
                      <button 
                        onClick={() => onNavigate('home', `Software Inquiry: ${c.name}`)}
                        className="text-red-600 font-black uppercase text-xs tracking-widest hover:translate-x-2 transition-transform"
                      >
                        Ask about this setup →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Bottom Line Section */}
        <div className="bg-slate-900 text-white p-10 mt-24 shadow-xl border-l-8 border-red-600">
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The Bottom Line</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Golden Rule</p>
              <p className="text-lg font-bold leading-relaxed">
                Great software with bad inputs creates bad paychecks faster. You need a pilot, not just a plane.
              </p>
            </div>
            <div className="h-px bg-white/20 my-4"></div>
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-1">Compliance Trap</p>
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Relying on "Auto-Pilot" settings for statutory holidays without verifying the specific eligibility rules for your province (e.g. the "First and Last Shift" rule in Ontario) is the most common cause of underpayment penalties.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ items={softwareFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Software Selection <span className="text-red-600">FAQ</span></h2>} />

        {/* References Section */}
        <div className="mt-16 pt-8 border-t border-slate-200">
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Official References</h4>
            <ul className="space-y-2">
                <li>
                    <a href="https://www.canada.ca/en/revenue-agency/services/e-services/filing-information-returns-electronically-t4-t5-other-types-returns-overview.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        CRA: Filing Information Returns Electronically (Internet File Transfer) <span>↗</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm flex items-center gap-2">
                        CRA: Payroll Deductions Online Calculator (PDOC) <span>↗</span>
                    </a>
                </li>
            </ul>
        </div>

        {/* Conclusion / CTA */}
        <div className="mt-20 bg-slate-900 p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            Already have one <br/>
            of these systems?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
            Perfect. We don't want you to switch software. We want you to switch who <span className="text-white underline decoration-red-600 decoration-4">manages</span> it for you. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('home', 'General Quote')}
              className="px-14 py-6 bg-red-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-red-600/20"
            >
              Get a Managed Quote
            </button>
            <button 
              onClick={() => onNavigate('audit')}
              className="px-14 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Audit My Current Setup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadianPayrollSoftwareGuide;
