
import React from 'react';

const ICPSection: React.FC = () => {
  const icps = [
    {
      title: "Professional Services",
      desc: "Law firms, dental offices, and clinics. High-value staff who deserve expert support, but owners have zero time for admin.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "The Growing 15",
      desc: "When you hit 15+ employees, owner-managed payroll breaks. We provide the professional department you now need.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "High-Growth Startups",
      desc: "Rapidly scaling your team? We handle the cross-provincial tax complexities so your HR can stay focused on hiring.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  return (
    <section id="icp" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Is Maple right for you?</h2>
          <p className="text-lg text-slate-600">We specialize in these three specific business types.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {icps.map((item, i) => (
            <div key={i} className="group rounded-none overflow-hidden border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ICPSection;
