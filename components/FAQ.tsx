
import React, { useState, useEffect } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: React.ReactNode;
}

const FAQ: React.FC<FAQProps> = ({ items, title }) => {
  const defaultFaqs = [
    {
      q: "Do I have to switch my accounting software?",
      a: "Nope. Maple is software-agnostic. We work with what you've already got. You keep your data; we just jump in to manage the heavy lifting for you."
    },
    {
      q: "How does the employee support actually work?",
      a: "We give you a dedicated email alias or your staff can call our concierge line directly. Our experts handle their questions about tax codes and pay stubs so you don't have to."
    },
    {
      q: "Are you insured against errors?",
      a: "Absolutely. We carry comprehensive insurance and we back every remittance we file with a 100% compliance guarantee. If we make a mistake, we own it."
    },
    {
      q: "Can you manage payroll across multiple legal entities?",
      a: "Yes! We specialize in complex setups. We can manage separate accounts for different divisions while giving you one clear view of your total labour costs."
    },
    {
      q: "What happens if the CRA sends me a notice?",
      a: "Just forward it to your Maple expert. As your authorized rep, we handle the phone calls and paperwork to sort it out—no extra charge."
    },
    {
      q: "Can you handle hiring paperwork for me?",
      a: "You bet. Our 'Managed Onboarding' takes care of the digital packages, banking info, and tax forms before your new hire even walks through the door."
    },
    {
      q: "Do you handle Quebec payroll (Revenu Québec)?",
      a: "Yes, we're pros at Quebec compliance. We handle RL-1s, CNESST, and all the unique provincial deductions just as easily as the rest of Canada."
    },
    {
      q: "How long does it take to switch over?",
      a: "We usually have you up and running in 2 to 4 weeks. We handle the data export and run parallel cycles to make sure everything is 100% perfect before the switch."
    },
    {
      q: "Do you handle Workers' Compensation (WSIB/WCB) reporting?",
      a: "Yes. We calculate your premiums every cycle based on actual gross pay and handle the periodic reporting and remittances to all provincial safety boards automatically."
    },
    {
      q: "Can you manage group benefits and RRSP deductions?",
      a: "Absolutely. We don't just deduct the premiums; we reconcile your monthly insurance invoices against your active payroll to ensure your billing is always accurate."
    },
    {
      q: "Is there a minimum number of employees required?",
      a: "No. We support businesses of all sizes, from your very first hire to teams of 100+. Our service tiers are designed to scale with your growth."
    },
    {
      q: "What kind of reporting do I get?",
      a: "You get a comprehensive reporting package every cycle, including payroll journals, department cost allocations, and detailed remittance summaries for your accountant."
    }
  ];

  const displayFaqs = items || defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // SEO: FAQ Schema Injection
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": displayFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.className = 'faq-schema';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.head.querySelector('.faq-schema');
      if (existing) document.head.removeChild(existing);
    };
  }, [displayFaqs]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title || (
            <>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Canadian Payroll <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Expert answers about Canadian payroll outsourcing and compliance.</p>
            </>
          )}
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-none overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                <span className={`text-red-600 text-2xl transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
              >
                <div className="p-6 pt-0 text-slate-700 font-medium border-t border-slate-50 bg-slate-50/50 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
