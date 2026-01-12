import React, { useState, useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface PublicHolidaysPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const PublicHolidaysPage: React.FC<PublicHolidaysPageProps> = ({ onNavigate }) => {
  const holidays = [
    { date: "Jan 1, 2026", name: "New Year's Day", type: "Statutory", valid: "All Provinces & Territories" },
    { date: "Jan 2, 2026", name: "Day after New Year's Day", type: "Observed / Bank", valid: "Quebec (Commonly Observed)" },
    { date: "Feb 16, 2026", name: "Family Day / Louis Riel / Heritage / Islander Day", type: "Statutory", valid: "BC, AB, SK, ON, NB, MB, PE, NS" },
    { date: "Apr 3, 2026", name: "Good Friday", type: "Statutory", valid: "All (QC choice between Fri/Mon)" },
    { date: "Apr 6, 2026", name: "Easter Monday", type: "Statutory", valid: "Quebec & Federal Employees" },
    { date: "May 18, 2026", name: "Victoria Day / National Patriots' Day", type: "Statutory", valid: "All except Atlantic" },
    { date: "Jun 24, 2026", name: "St. Jean Baptiste Day (Fête nationale)", type: "Statutory", valid: "Quebec Only" },
    { date: "Jul 1, 2026", name: "Canada Day", type: "Statutory", valid: "All Provinces & Territories" },
    { date: "Sep 7, 2026", name: "Labour Day", type: "Statutory", valid: "All Provinces & Territories" },
    { date: "Sep 30, 2026", name: "National Day for Truth and Reconciliation", type: "Statutory", valid: "Federal, BC, PEI, NWT, NU, YT" },
    { date: "Oct 12, 2026", name: "Thanksgiving", type: "Statutory", valid: "All except Atlantic" },
    { date: "Nov 11, 2026", name: "Remembrance Day", type: "Statutory", valid: "All except ON, QC, NS" },
    { date: "Dec 25, 2026", name: "Christmas Day", type: "Statutory", valid: "All Provinces & Territories" },
    { date: "Dec 26, 2026", name: "Boxing Day", type: "Statutory", valid: "Ontario & Federal Employees" }
  ];

  useEffect(() => {
    // SEO: Dynamic Page Metadata
    document.title = "Canadian Statutory Holiday Calendar 2026 | Maple Managed Payroll";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "The definitive 2026 Canadian Statutory Holiday Calendar. Includes Quebec-specific holidays like Jan 2 and St. Jean Baptiste, Family Day, and the Alberta '5 of 9' rule explained.");
    }

    // SEO: Enhanced JSON-LD Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Table",
      "name": "2026 Canadian Statutory Holiday List",
      "description": "Master list of Canadian public and statutory holidays for 2026 with provincial applicability. Managed by Maple Managed Payroll.",
      "about": holidays.map(h => ({
        "@type": "Event",
        "name": h.name,
        "startDate": h.date.split(',')[0] + " 2026",
        "location": {
          "@type": "Place",
          "name": h.valid
        },
        "description": `${h.type} holiday applicable in ${h.valid}. Ensure payroll compliance for statutory holiday pay.`
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
    return () => { 
      document.head.removeChild(script);
      document.title = "Maple Managed Payroll | Canadian Small Business Payroll Service";
    };
  }, []);

  const holidayFaqs = [
    {
      q: "What's the '5 of 9' rule for statutory holiday pay in Alberta?",
      a: "In Alberta, to determine if a statutory holiday falls on an employee's 'regular day of work,' the 5 of 9 rule's used. If the employee's worked that specific day of the week for at least 5 of the 9 weeks preceding the holiday, the holiday's considered a regular day of work. Employees who meet this criteria, and've worked for the employer for at least 30 days in the last 12 months, 're entitled to statutory holiday pay."
    },
    {
      q: "Is January 2nd a statutory holiday in Quebec?",
      a: "Technically, January 2nd isn't one of the 8 statutory holidays listed under the general Quebec 'Act respecting labour standards' for all private-sector employees. However, it's a mandatory holiday for many employees covered by specific collective agreements, industry decrees (like the construction or garment industry), and's a standard 'Bank Holiday' and civil service day. Many Quebec businesses choose to grant it as a discretionary paid day off."
    },
    {
      q: "How're you supposed to calculate statutory holiday pay in Ontario for 2026?",
      a: "In Ontario, statutory holiday pay's calculated by taking the total regular wages earned in the 4 weeks prior to the week of the holiday, plus any vacation pay payable for that period, and dividing the total by 20. This's known as the '1/20th rule'. Outsourcing your payroll to Maple ensures this rolling calculation's handled automatically."
    },
    {
      q: "What's special about Quebec's June 24th holiday?",
      a: "La Fête nationale du Québec (St. Jean Baptiste Day)'s a strict statutory holiday in Quebec. If it falls on a Sunday (as it'll in some future years), the following Monday has to be given as a paid holiday. For 2026, it falls on a Wednesday. If an employee works on this day, they're entitled to an indemnity or a substitute day off."
    },
    {
      q: "Is National Day for Truth and Reconciliation a stat holiday in BC?",
      a: "Yes. As of 2023, the National Day for Truth and Reconciliation (September 30)'s a provincial statutory holiday in British Columbia. It's also a federal statutory holiday for all federally regulated workplaces across Canada."
    },
    {
      q: "What happens if a statutory holiday falls on a weekend in 2026?",
      a: "When a statutory holiday falls on a Saturday or Sunday, employees're generally entitled to a substitute holiday—usually the following Monday—with pay. This ensures that the employee still receives their day off and the appropriate 'average daily wage' pay."
    },
    {
      q: "How does stat pay work for part-time and casual employees?",
      a: "Part-time and casual employees're entitled to statutory holiday pay in most provinces. Because the pay's based on their earnings in the preceding 4 weeks, their 'stat pay' amount's naturally pro-rated based on the hours they actually worked leading up to the holiday."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="2026 Canadian Statutory Holidays Calendar" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Canadian Holiday <br/> <span className="text-red-500">Calendar: 2026</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 mb-10 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                A comprehensive guide to <strong>2026 statutory holidays in Canada</strong>. From <strong>Family Day</strong> to <strong>National Day for Truth and Reconciliation</strong>, including Quebec-specific dates and the complex <strong>5 of 9 rule</strong> in Alberta. Managing provincial labor compliance's a critical task—Maple's specialists ensure your Average Daily Wage math's 100% accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">2026 Statutory Schedule</h2>
            <div className="overflow-hidden border border-slate-200 shadow-sm mb-12">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Holiday Name</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Applies To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold text-sm">
                  {holidays.map((h, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-900 whitespace-nowrap">{h.date}</td>
                      <td className="px-6 py-4 text-red-600">{h.name}</td>
                      <td className="px-6 py-4 text-slate-500">{h.type}</td>
                      <td className="px-6 py-4 text-slate-500 text-xs font-medium">{h.valid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-slate-50 p-10 mb-24 border-l-8 border-slate-900">
               <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The "August" Exception</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-6">
                 Note: The <strong>Civic Holiday (August 3, 2026)</strong>'s frequently confused with a statutory holiday. However, it isn't a statutory holiday under the Ontario Employment Standards Act or BC Employment Standards. While many Canadian businesses choose to close, pay for this day's <strong>discretionary</strong> unless specified otherwise in your employment contracts or collective agreements.
               </p>
               <button 
                onClick={() => onNavigate('calculator')}
                className="text-red-600 font-black uppercase text-xs hover:underline"
               >
                 Calculate Stat Pay with Our Tool →
               </button>
            </div>

            <FAQ items={holidayFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Compliance <span className="text-red-600">FAQ</span></h2>} />
          </div>

          {/* SEO Sidebar for internal linking */}
          <div className="lg:col-span-4">
             <div className="sticky top-24 space-y-8">
                <div className="bg-slate-900 text-white p-8 border-t-8 border-red-600 shadow-xl">
                   <h4 className="text-xl font-black uppercase tracking-tight mb-4">Reclaim Your <span className="text-red-600">Holiday.</span></h4>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                     Stop spending your public holidays calculating rolling 4-week averages for stat pay. Maple's <strong>outsourced payroll concierge</strong> manages the math, the filings, and the humans.
                   </p>
                   <button 
                    onClick={() => onNavigate('home')}
                    className="w-full py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                   >
                     Get a Managed Quote
                   </button>
                </div>

                <div className="bg-white border border-slate-200 p-8">
                   <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Compliance Guides</h4>
                   <ul className="space-y-4">
                      <li>
                         <button onClick={() => onNavigate('vacation-pay-article')} className="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors text-left uppercase">The Vacation Pay Trap →</button>
                      </li>
                      <li>
                         <button onClick={() => onNavigate('payroll-2026-changes')} className="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors text-left uppercase">2026 Rate Changes (YMPE/CPP2) →</button>
                      </li>
                      <li>
                         <button onClick={() => onNavigate('breaks-and-eating-periods')} className="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors text-left uppercase">Break & Meal Period Rules →</button>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SEO Bottom Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">How's Holiday Pay Calculated in Canada?</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
               <p className="mb-6">
                 Statutory holiday pay (or "public holiday pay") varies significantly by province. Generally, the calculation's based on the employee's average earnings in the weeks preceding the holiday. For <strong>Ontario businesses</strong>, you've got to calculate the total wages earned (including vacation pay) in the 4 weeks prior and divide by 20.
               </p>
               <p className="mb-6">
                 In <strong>Alberta</strong>, eligibility's often determined by whether the holiday falls on a regular day of work. The <strong>5 of 9 rule</strong>'s the standard test: if the employee's worked that specific day for at least 5 of the 9 weeks before the holiday, they're entitled to pay.
               </p>
               <p>
                 Keeping track of these varying formulas's a major administrative burden. Maple's <strong>dedicated certified payroll specialists</strong> handle these nuances across all 13 provinces and territories, ensuring your business stays compliant with the latest labor standards.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default PublicHolidaysPage;