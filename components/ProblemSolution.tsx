
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            SOFTWARE HANDLES THE MATH. <br/><span className="text-red-600">WE HANDLE THE HEADACHES.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Most payroll software still leaves you with a part-time job. We step in to do the work, so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-10 lg:p-14 rounded-none border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 bg-slate-400 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">The Old Way</div>
            <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">The Admin Burden</h3>
            <ul className="space-y-6">
              {[
                "Answering 'Why is my net pay different?' over dinner",
                "Chasing down banking info for every new hire",
                "Panicking over CRA deadlines every single month",
                "Second-guessing your stat holiday pay math",
                "Wrestling with ROEs when someone moves on",
                "Handling a CRA audit entirely on your own"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 font-medium text-lg leading-tight">
                  <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-10 lg:p-14 rounded-none border border-slate-800 shadow-2xl relative overflow-hidden group transform hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">The Maple Way</div>
            <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">Real Human Support</h3>
            <ul className="space-y-6">
              {[
                "Your staff calls us with their questions, not you",
                "We handle the forms and filings for every new teammate",
                "CRA remittances are filed and guaranteed on time",
                "We reconcile your benefits bills automatically",
                "ROEs and final pay handled within 24 hours",
                "We act as your authorized representative with the CRA"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 font-medium text-lg leading-tight">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
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
