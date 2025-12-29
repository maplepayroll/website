
import React, { useState } from 'react';
import { PageType } from '../App';

interface ScorecardProps {
  onNavigate?: (page: PageType) => void;
}

const Scorecard: React.FC<ScorecardProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    "Do you spend more than 2 hours a month on payroll support questions from staff?",
    "Does your current provider guarantee you against CRA penalties?",
    "Does your staff have a direct person (not a call centre) they can call for pay questions?",
    "Do you handle your own ROEs and T4 filings manually?",
    "Are you confident your payroll setup is 100% compliant with latest provincial laws?",
    "Would your staff rate your current payroll experience as 'Delightful'?",
    "If your payroll person quit today, would you know exactly how to run the next cycle?"
  ];

  const handleAnswer = (ans: boolean) => {
    if (ans) setScore(score + 1);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  return (
    <section id="scorecard" className="py-16 bg-red-600 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">The 7-Question Payroll Audit</h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto font-medium">
          Find out if your current provider is failing the "Employee Support" test.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {step < questions.length ? (
            <div>
              <div className="mb-8">
                <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Question {step + 1} of 7</span>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${((step + 1) / 7) * 100}%` }}></div>
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-10 leading-snug">
                "{questions[step]}"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleAnswer(true)}
                  className="px-12 py-4 bg-red-600 text-white rounded-xl text-lg font-bold hover:bg-red-700 transition-all"
                >
                  Yes
                </button>
                <button 
                  onClick={() => handleAnswer(false)}
                  className="px-12 py-4 bg-slate-100 text-slate-600 rounded-xl text-lg font-bold hover:bg-slate-200 transition-all"
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="w-24 h-24 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Your Risk Score: {Math.round(((7 - score) / 7) * 100)}%</h3>
              <p className="text-slate-600 text-lg mb-8 font-medium">
                {score > 5 ? 
                  "You have a solid setup, but there's room for efficiency." : 
                  "Your current process is likely causing significant admin overhead and compliance risk."}
              </p>
              <button 
                onClick={() => onNavigate ? onNavigate('audit') : document.getElementById('contact')?.scrollIntoView()}
                className="px-8 py-4 bg-red-600 text-white rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100"
              >
                Get Your Full Audit Report
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Scorecard;
