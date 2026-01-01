
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "We Talk to Your Team",
      desc: "If your staff has a question about their pay or T4s, they call us. You stay out of the middle and keep your lunch break.",
      icon: "☕",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "CRA-Proof Compliance",
      desc: "We handle every provincial and federal filing. If the CRA has a question, we're the ones who answer the phone.",
      icon: "🛡️",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Easy Onboarding",
      desc: "Hire someone new? Just send us their name. We'll handle the tax forms and banking details before their first day.",
      icon: "✨",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Benefits & RRSP Sync",
      desc: "We reconcile your group insurance and savings plans every single cycle. No more manual data entry errors.",
      icon: "🏥",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Taxable Benefits Audit",
      desc: "Company cars? Life insurance? We make sure the 'perks' aren't creating a surprise tax bill at the end of the year.",
      icon: "💎",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Fast ROE Filings",
      desc: "When someone leaves, we handle the Record of Employment within 24 hours. No stress, just compliant departures.",
      icon: "📄",
      color: "bg-slate-50 text-slate-600"
    }
  ];

  return (
    <section id="features" className="pb-16 pt-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            WE DO THE <span className="text-red-600">WORK.</span> YOU DO THE <span className="text-red-600">VISION.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Think of us as your own internal payroll department, just a quick message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 rounded-none border border-slate-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-50 transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-none ${f.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
