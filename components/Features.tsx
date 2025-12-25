import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Direct Employee Support",
      desc: "Your staff speaks to our experts, not you. We handle all pay, banking, and T4 inquiries directly.",
      icon: "👥",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Full Compliance",
      desc: "Comprehensive support for all provinces and territories, including Quebec (RL-1/RL-2) and BC (Health Tax).",
      icon: "🇨🇦",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Managed Onboarding",
      desc: "We collect TD1s, direct deposit info, and contracts. Your new hires are pay-ready before their first day.",
      icon: "📋",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Benefits & RRSP Sync",
      desc: "We reconcile your group insurance bills and RRSP contributions against payroll every single cycle.",
      icon: "🏥",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Taxable Benefits Audit",
      desc: "Automated tracking for company cars, life insurance, and other non-cash benefits for CRA compliance.",
      icon: "💎",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "ROE & Termination",
      desc: "Seamless ROE filing via ROE Web within 24 hours of any work interruption. Full final-pay compliance.",
      icon: "📄",
      color: "bg-slate-50 text-slate-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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