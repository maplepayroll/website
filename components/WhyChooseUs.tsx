
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const flowSteps = [
    {
      step: "01",
      title: "Employee Support Request",
      desc: "Your staff contacts Maple directly for all pay, T4, and banking inquiries.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      step: "02",
      title: "Expert Resolution",
      desc: "Our NPI-certified specialists handle the processing and CRA compliance behind the scenes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      step: "03",
      title: "Owner Peace of Mind",
      desc: "You get 10+ hours back monthly to focus on growth, not administrative friction.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Because <span className="text-red-600 italic">"Good Enough"</span> Software Isn't Enough for Your People.
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Automated software handles the math, but it doesn't handle the <span className="font-bold text-slate-900 underline decoration-red-500 decoration-2 underline-offset-4">exceptions</span>. 
              In the world of Canadian payroll, exceptions are where the risk lives.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-none hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-none flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Personalized Support</h4>
                  <p className="text-slate-600 text-sm">You don't get a ticket number. You get a dedicated NPI-certified payroll expert who knows your name and your business.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-none hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-none flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Compliance Intelligence</h4>
                  <p className="text-slate-600 text-sm">CRA rules change. Provincial health tax thresholds shift. We proactively audit your data for compliance every cycle.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-red-600 rounded-none rotate-3 translate-x-4 translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Dedicated Support Specialist" 
              className="rounded-none shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-none shadow-xl border border-slate-100 z-20 max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Now</span>
              </div>
              <p className="text-slate-900 font-bold italic text-sm">"Don't worry about that T4 amendment, I've already filed it for you."</p>
              <p className="text-xs text-slate-500 mt-2">— Your Dedicated Specialist</p>
            </div>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="py-20 bg-slate-50 rounded-none px-8 lg:px-12 mb-24 border border-slate-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">The "Human-in-the-Middle" Flow</h3>
            <p className="text-slate-600 font-medium">How we take the burden off your plate, step-by-step.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0"></div>
            
            {flowSteps.map((f, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-none ${f.bg} ${f.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 border border-white`}>
                  {f.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-none flex items-center justify-center text-xs font-bold border-4 border-slate-50">
                    {f.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-[250px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[10rem] font-serif text-slate-100 select-none leading-none">“</div>
          <div className="bg-slate-900 rounded-none p-10 lg:p-20 text-center relative z-10 shadow-2xl">
            <p className="text-2xl lg:text-4xl text-white font-medium mb-12 leading-relaxed">
              "I used to spend my Sundays dreading payroll. Since switching to Maple, I haven't logged into a payroll portal once. They handle everything, even the complex parental leave questions my hygienist had. It's not just software; <span className="text-red-400">it's like having an HR department in the next room.</span>"
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Dr. Emily Chen" 
                className="w-24 h-24 rounded-none border-4 border-slate-800 mb-4 object-cover"
              />
              <h5 className="text-xl font-bold text-white">Dr. Emily Chen</h5>
              <p className="text-slate-400 font-medium">Founder, Bright Path Dental Clinic</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
