
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const flowSteps = [
    {
      step: "01",
      title: "The Hand-Off",
      desc: "Tell us about your team. We manage the migration from your current system with zero downtime."
    },
    {
      step: "02",
      title: "The Sync",
      desc: "Every cycle, you send us your updates. We run the math, file the taxes, and pay the team."
    },
    {
      step: "03",
      title: "The Freedom",
      desc: "You return to your business. We handle every staff question and CRA inquiry on your behalf."
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-6">The Client Experience</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
            How we partner <br/><span className="text-red-600">with your vision.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-24 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-slate-200 mt-4"></div>
          
          {flowSteps.map((f, i) => (
            <div key={i} className="relative group pt-12">
              <div className="absolute top-0 left-0 -translate-y-1/2 bg-slate-50 px-2 transition-transform group-hover:scale-110">
                <span className="text-4xl font-black text-slate-900 tracking-tighter">{f.step}</span>
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">{f.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              
              <div className="mt-12 h-1 bg-slate-200 w-12 group-hover:w-full group-hover:bg-red-600 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-40 bg-white p-12 lg:p-24 border border-slate-200 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 group-hover:w-4 transition-all"></div>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
                Your dedicated <br/> Specialist.
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                In a world of "Support Tickets," we give you a real human who knows your name. Available 9-5 your local time to ensure your team is always cared for.
              </p>
              <button className="text-xs font-black text-red-600 uppercase tracking-widest hover:underline">
                Meet the Team Behind Maple →
              </button>
            </div>
            <div className="lg:w-1/2 relative">
               <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Your Dedicated Specialist" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 max-w-xs shadow-2xl">
                 <p className="text-sm italic font-medium">"I treat every payroll cycle like it's my own business. You'll never be just a client ID to us."</p>
                 <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mt-6">— Jennifer McEwan, Payroll Specialist</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
