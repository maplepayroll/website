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
      "description": "Comprehensive guide to 2026 Canadian payroll rate changes, including final CPP and EI contribution limits. Expertly managed by your outsourced payroll department.",
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
      q: "What's CPP2 and how's it working in 2026?",
      a: "CPP2's the second tier of Canada Pension Plan enhancement. In 2026, it applies a 4% employee and 4% employer rate on earnings between the first ceiling (YMPE - $72,700) and the second ceiling (YAMPE - $82,800)."
    },
    {
      q: "What's the YMPE for 2026?",
      a: "The Year's Maximum Pensionable Earnings (YMPE)'s $72,700 for 2026, up from $71,300 in 2025. This reflects the growth of wages in Canada and is a finalized figure from the CRA."
    },
    {
      q: "What're the EI rates and limits for 2026?",
      a: "The Maximum Insurable Earnings (MIE)'re $67,000 for 2026. The employee premium rate's holding steady at 1.64% (1.30% in Quebec), meaning employers pay a total of $1,538.32 per employee ($1.4x matching) at the max threshold."
    },
    {
      q: "How're these changes affecting an employee's take-home pay?",
      a: "Employees earning over $72,700'll see a decrease in net pay due to the CPP2 expansion. High earners reaching the $82,800 mark'll hit their total CPP contribution limit later in the year than in 2025."
    },
    {
      q: "Do I need to update my payroll software for 2026?",
      a: "Cloud-based tools update rates automatically. However, if you're using manual calculations or desktop software, you've got to ensure the finalized 2026 tax tables provided by the CRA're implemented."
    },
    {
      q: "Are there provincial tax changes for 2026?",
      a: "Provinces've indexed their tax brackets for 2026. This year, the federal and provincial indexing rate's 2.7%, meaning bracket thresholds've increased, allowing employees to earn more before moving into a higher tax percentage."
    },
    {
      q: "What's the Maximum Employer Contribution for CPP in 2026?",
      a: "The combined Base CPP ($4,117.40) and CPP2 ($404.00) employer contribution per employee's $4,521.40 for those earning at or above the YAMPE."
    },
    {
      q: "What's the Basic Personal Amount (BPA) for 2026?",
      a: "The federal BPA's $16,283 for 2026. This'll help offset the cost of higher pension contributions for lower-to-middle income earners."
    },
    {
      q: "How's the 'Clawback' working for high earners in 2026?",
      a: "For those earning over $184,857, the Basic Personal Amount's gradually reduced (clawed back). Our 2026 calculator handles this finalized tiered logic automatically."
    },
    {
      q: "What's an employer gotta do now to prepare for 2026?",
      a: "Budget for the finalized increase in total labour burden for high-earning staff. Ensure your payroll department's got a process for tracking YTD totals across the two separate CPP ceilings."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554224153-b6bda4e38f71?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="2026 Changes" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              What's Changing <br/> <span className="text-red-500">In 2026?</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                For 2026, Canadian payroll standards've been finalized with a YMPE (Year's Maximum Pensionable Earnings) of $72,700 and a YAMPE (Year's Additional Maximum Pensionable Earnings) of $82,800. EI maximum insurable earnings're $67,000, which'll increase the total employer labour burden for high-income staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 p-10 border-l-8 border-slate-900">
          <h2 className="text-2xl font-black mb-4 uppercase">The CPP2 Impact</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            2026's the third year of the CPP Enhancement. Employers've gotta deduct an additional 4% on earnings between the first ceiling ($72,700) and second ceiling ($82,800). This requires precise year-to-date tracking, which's a core specialty of an <strong>outsourced payroll provider</strong>.
          </p>
        </div>
        <div className="mt-12 mb-20">
          <button onClick={() => onNavigate('calculator')} className="px-8 py-4 bg-red-600 text-white font-black uppercase text-xs">Run 2026 Calculations</button>
        </div>
        <FAQ items={changesFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">2026 Compliance <span className="text-red-600">FAQ</span></h2>} />
      </section>
    </div>
  );
};

export default Payroll2026ChangesPage;