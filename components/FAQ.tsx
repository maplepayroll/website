
import React, { useState } from 'react';

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
      a: "No. Maple is software-agnostic. We work within your existing environment. You keep your data; we just manage the inputs and outputs on your behalf."
    },
    {
      q: "How does the employee support actually work?",
      a: "We provide you with a dedicated email alias (e.g., payroll@yourcompany.ca) or your staff can contact our concierge line. Our experts handle their questions about tax codes, net pay differences, and T4s directly."
    },
    {
      q: "Are you insured against errors?",
      a: "Yes. Unlike DIY software where 'User Error' is your responsibility, Maple carries comprehensive Errors & Omissions (E&O) insurance and we provide a 100% compliance guarantee on all remittances we file."
    },
    {
      q: "Can you manage payroll across multiple legal entities?",
      a: "Yes. We specialize in multi-entity structures. We can manage separate payroll accounts for different divisions or corporations while providing you with consolidated reporting for a clear view of your total labour costs."
    },
    {
      q: "What happens if I receive a CRA notice of assessment or audit?",
      a: "You simply forward it to your dedicated Maple expert. As your authorized representative, we handle all communication with the CRA, providing the necessary documentation and defending your filings at no extra cost."
    },
    {
      q: "How do you handle payroll for seasonal workers?",
      a: "Maple is designed for scalability. We handle high-volume hiring in peak seasons and mass ROE filings during off-seasons, ensuring seasonal fluctuations never impact your administrative bandwidth or compliance accuracy."
    },
    {
      q: "Can you handle hiring paperwork for me?",
      a: "Absolutely. Our Professional tier includes 'Managed Onboarding'. We send out the digital packages, collect banking info, and ensure all TD1 forms are signed and filed before their first day."
    },
    {
      q: "What about vacation pay and statutory holidays?",
      a: "We manage the accrual logic and ensure statutory pay is calculated correctly according to your specific province's labour standards, which can be surprisingly complex for hourly staff."
    },
    {
      q: "Do you handle Quebec payroll (Revenu Québec)?",
      a: "Yes. We are fully compliant with Revenu Québec and handle RL-1s, CNESST, QPP, and QPIP filings just as seamlessly as we do for the rest of Canada."
    },
    {
      q: "How do I switch from a provider like ADP or Ceridian?",
      a: "We handle the entire migration. We export your YTD data, set up the new system, and run parallel pay cycles to ensure 100% accuracy before the official switch."
    },
    {
      q: "Can employees access their own pay stubs?",
      a: "Generally yes... this is a function of the payroll software used for specific system capabilities, contact us to help you figure it out"
    },
    {
      q: "What is your processing turnaround time?",
      a: "We typically require payroll data 3 days before the pay date. However, for emergencies, we can often process same-day or next-day payments for a small rush fee."
    }
  ];

  const displayFaqs = items || defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title || (
            <>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Common <span className="text-red-600">Questions</span></h2>
            <p className="text-lg text-slate-600 font-medium">Everything you need to know about the transition to managed payroll.</p>
            </>
          )}
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-none overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                <span className={`text-red-600 text-2xl transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 font-medium border-t border-slate-50 bg-slate-50/50 leading-relaxed">
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
