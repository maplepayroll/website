
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface Payroll2026ChangesPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const Payroll2026ChangesPage: React.FC<Payroll2026ChangesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "CRA 2026 Payroll Changes: YMPE and CPP2 Updates",
      "description": "Comprehensive guide to 2026 Canadian payroll rate changes, including new CPP and EI contribution limits. Expertly managed by your outsourced payroll department.",
      "author": { "@type": "Person", "name": "Arshad Merali" }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const changesFaqs = [
    {
      q: "What is CPP2 and how does it work in 2026?",
      a: "CPP2 is the second tier of Canada Pension Plan contributions. In 2026, it applies a 4% employee and 4% employer rate on earnings between the first ceiling (YMPE ~ $72,700) and the second ceiling (YAMPE ~ $82,800)."
    },
    {
      q: "How much will the YMPE increase in 2026?",
      a: "The Year's Maximum Pensionable Earnings (YMPE) is projected to rise to approximately $72,700 for 2026, up from $71,300 in 2025. This reflects the average growth of wages in Canada."
    },
    {
      q: "Will EI rates increase for employers in 2026?",
      a: "While the base rate is subject to annual review, the Maximum Insurable Earnings (MIE) are expected to rise to $67,000. This means employers will pay more in total premiums per employee compared to previous years."
    },
    {
      q: "How will these changes affect an employee's take-home pay?",
      a: "Employees earning over $73,000 will see a slight decrease in net pay due to the CPP2 expansion. High earners reaching the $83,000 mark will reach their total CPP contribution limit later in the year than before."
    },
    {
      q: "Do I need to update my payroll software for 2026?",
      a: "If you use a cloud-based tool like Wagepoint or Knit, the rates are updated automatically. However, if you use older desktop software, you must manually install the 2026 tax tables provided by the CRA."
    },
    {
      q: "Are there any provincial tax changes for 2026?",
      a: "Most provinces index their tax brackets to inflation. For 2026, expect a 2-3% shift in bracket thresholds, meaning employees will earn slightly more before moving into a higher tax percentage."
    },
    {
      q: "What is the Maximum Employer Contribution for CPP in 2026?",
      a: "Based on projections, the combined Base CPP and CPP2 employer contribution per employee will reach approximately $4,500 for those earning at or above the YAMPE."
    },
    {
      q: "Will the Basic Personal Amount (BPA) change in 2026?",
      a: "Yes. The federal BPA is set to rise to approximately $16,283. This helps offset some of the cost of higher pension contributions for lower-to-middle income earners."
    },
    {
      q: "How does the 'Clawback' work for high earners in 2026?",
      a: "For those earning over ~$185,000, the Basic Personal Amount is gradually reduced (clawed back). Our 2026 calculator handles this complex tiered logic automatically."
    },
    {
      q: "What should employers do now to prepare for 2026?",
      a: "Budget for a roughly 2-4% increase in total labor burden for high-earning staff. Ensure your payroll department has a process for tracking YTD totals across the two separate CPP ceilings."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="2026 Changes" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              What Changes <br/> <span className="text-red-500">In 2026?</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                In 2026, Canadian payroll shifts significantly with a projected YMPE (Year's Maximum Pensionable Earnings) of $72,700 and the continued rollout of CPP2 (Additional CPP contributions) for earnings up to $82,800. EI maximum insurable earnings are also set to rise, increasing the total employer burden per employee for high-income staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 p-10 border-l-8 border-slate-900">
          <h2 className="text-2xl font-black mb-4 uppercase">The CPP2 Impact</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            2026 marks the third year of the CPP Enhancement. Employers must deduct an additional 4% on earnings between the first and second ceilings. This requires precise year-to-date tracking, a core specialty of an <strong>outsourced payroll provider</strong>.
          </p>
        </div>
        <div className="mt-12 mb-20">
          <button onClick={() => onNavigate('calculator')} className="px-8 py-4 bg-red-600 text-white font-black uppercase text-xs">Run 2026 Projections</button>
        </div>
        <FAQ items={changesFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2026 Compliance <span className="text-red-600">FAQ</span></h2>} />
      </section>
    </div>
  );
};

export default Payroll2026ChangesPage;
