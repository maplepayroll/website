
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            SOFTWARE IS A TOOL. <br/><span className="text-red-600">PEOPLE ARE THE SOLUTION.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Standard payroll software still leaves the heavy lifting to you. Our dedicated certified payroll specialists step in to handle the burden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-10 lg:p-14 rounded-none border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">The Admin Burden</div>
            <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Software-Only Platforms</h3>
            <ul className="space-y-6">
              {[
                "You answer every 'Why is my net pay different?' call",
                "You manually track vacation and stat holiday accruals",
                "You reconcile benefits bills against pay runs manually",
                "You represent yourself if the CRA initiates an audit",
                "You spend your Sunday nights chasing data entry",
                "You worry about onboarding, departures, and terminations"
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
            <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">The Maple Solution</div>
            <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">Certified Professional Support</h3>
            <ul className="space-y-6">
              {[
                "Dedicated certified payroll specialists handle every cycle",
                "We keep your payroll compliant with all regulations",
                "No need to worry about complex employee onboarding",
                "Departures and terminations handled by our team",
                "Send updates to us; we manage the complexities",
                "Authorized CRA representation included on all accounts"
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
