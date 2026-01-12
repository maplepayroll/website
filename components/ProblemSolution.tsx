import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6">The Efficiency Gap</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
            Software isn't <br/><span className="text-slate-500">the whole solution.</span>
          </h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Most payroll tools still leave you with a part-time job as a data-entry clerk. Maple steps in to actually <span className="text-slate-900 font-bold italic">do the work</span> for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-12 lg:p-20 relative overflow-hidden">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-12">The DIY Burden</p>
            <ul className="space-y-10">
              {[
                { t: "The Sunday Night Slog", d: "You spend hours verifying timesheets and banking info." },
                { t: "The Support Desk", d: "Your staff calls YOU with their T4 and tax questions." },
                { t: "The Compliance Trap", d: "You cross your fingers every time you file with the CRA." }
              ].map((item, i) => (
                <li key={i} className="group">
                  <h4 className="text-lg font-black text-slate-500 uppercase tracking-tight mb-2 group-hover:text-slate-900 transition-colors">{item.t}</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-12">The Maple Managed Way</p>
            <ul className="space-y-10 relative z-10">
              {[
                { t: "Total Hands-Off", d: "You send us a quick update. We'll handle the data entry and the math." },
                { t: "Dedicated Concierge", d: "Your staff calls US. You won't ever hear a payroll question again." },
                { t: "Guaranteed Compliance", d: "We take full legal liability for the accuracy of every filing." }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {item.t}
                  </h4>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed ml-4.5">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;