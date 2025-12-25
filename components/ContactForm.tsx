
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Ready to fire your payroll stress?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Book a 15-minute consultation to see how our "Human-in-the-Middle" service can reclaim 10+ hours of your life every month.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Phone", value: "1 (416) 252-1000", icon: "📞" },
                { label: "Email", value: "concierge@maplepayroll.ca", icon: "📧" },
                { label: "Office", value: "Toronto, ON & Calgary, AB", icon: "🏢" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-slate-600 italic font-medium">
                "Switching to Maple was the best decision I made for my law firm. I haven't answered a single T4 question since 2022."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img src="https://picsum.photos/seed/person/40/40" className="w-10 h-10 rounded-full" alt="Testimonial" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Managing Partner, Jenkins Law</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company Size</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none appearance-none bg-white">
                  <option>1-5 Employees</option>
                  <option>6-15 Employees</option>
                  <option>16-50 Employees</option>
                  <option>50+ Employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none h-32" placeholder="Tell us about your current payroll setup..."></textarea>
              </div>
              <button className="w-full py-4 bg-red-600 text-white rounded-xl text-lg font-bold hover:bg-red-700 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-red-200">
                Get Your Managed Quote
              </button>
              <p className="text-center text-xs text-slate-400 font-medium">
                🔒 Your data is stored on Canadian servers in compliance with PIPEDA.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
