
import React from 'react';

const ICPSection: React.FC = () => {
  const icps = [
    {
      title: "Professional Services",
      desc: "Law firms, dental offices, and clinics. High-value teams who deserve expert support, so owners can stop playing part-time administrator.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "The Growing 15",
      desc: "When you hit 15+ employees, DIY payroll usually starts to break. We give you the professional department you now need to scale smoothly.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "High-Growth Startups",
      desc: "Scaling fast and hiring across provinces? We handle the cross-country tax math so your team can stay focused on the next big launch.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  return (
    <section id="icp" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Is Maple <span className="text-red-600">for you?</span></h2>
          <p className="text-lg text-slate-600 font-medium">We really shine when working with these types of businesses.</p>
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
