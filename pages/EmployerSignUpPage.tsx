
import React, { useState } from 'react';
import { PageType } from '../App';
import { PROVINCES } from '../services/payrollCalculator';

interface EmployerSignUpPageProps {
  onNavigate: (page: PageType) => void;
}

type SignUpStep = 'business' | 'team' | 'service' | 'contact' | 'success';

const EmployerSignUpPage: React.FC<EmployerSignUpPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<SignUpStep>('business');
  const [formData, setFormData] = useState({
    businessName: '',
    province: 'Ontario',
    industry: '',
    headcount: '1-5',
    frequency: 'Bi-Weekly',
    tier: 'Professional',
    name: '',
    email: '',
    phone: ''
  });

  const next = () => {
    const steps: SignUpStep[] = ['business', 'team', 'service', 'contact', 'success'];
    const currentIdx = steps.indexOf(step);
    if (currentIdx < steps.length - 1) setStep(steps[currentIdx + 1]);
  };

  const back = () => {
    const steps: SignUpStep[] = ['business', 'team', 'service', 'contact', 'success'];
    const currentIdx = steps.indexOf(step);
    if (currentIdx > 0) setStep(steps[currentIdx - 1]);
  };

  const update = (key: string, val: string) => {
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const renderStep = () => {
    switch (step) {
      case 'business':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Tell us about your <span className="text-red-600">Business</span></h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Legal Business Name</label>
                <input 
                  type="text" 
                  value={formData.businessName}
                  onChange={e => update('businessName', e.target.value)}
                  placeholder="Acme Corp Inc."
                  className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Primary Province</label>
                  <select 
                    value={formData.province}
                    onChange={e => update('province', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                  >
                    {PROVINCES.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Industry</label>
                  <select 
                    value={formData.industry}
                    onChange={e => update('industry', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                  >
                    <option value="">Select Industry...</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Medical/Dental">Medical / Dental</option>
                    <option value="Technology">Technology</option>
                    <option value="Non-Profit">Non-Profit</option>
                    <option value="Retail/Hospitality">Retail / Hospitality</option>
                    <option value="Construction/Trades">Construction / Trades</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Your <span className="text-red-600">Payroll Profile</span></h2>
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Total Employees</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['1-5', '6-15', '16-50', '50+'].map(val => (
                    <button 
                      key={val}
                      onClick={() => update('headcount', val)}
                      className={`py-4 font-bold border-2 transition-all ${formData.headcount === val ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-100 hover:border-red-600'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Typical Pay Frequency</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Weekly', 'Bi-Weekly', 'Monthly'].map(val => (
                    <button 
                      key={val}
                      onClick={() => update('frequency', val)}
                      className={`py-4 font-bold border-2 transition-all ${formData.frequency === val ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-100 hover:border-red-600'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Choose your <span className="text-red-600">Concierge Tier</span></h2>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {/* Core Tier */}
              <button 
                onClick={() => update('tier', 'Core')}
                className={`flex flex-col p-6 lg:p-8 border-2 text-left transition-all relative overflow-hidden ${formData.tier === 'Core' ? 'bg-white border-slate-900 shadow-xl' : 'bg-slate-50 border-transparent hover:border-red-200'}`}
              >
                <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Core Managed</h4>
                <p className="text-2xl font-black text-slate-900 mb-4">$150<span className="text-xs font-bold text-slate-400">/mo</span></p>
                <ul className="text-[11px] font-bold text-slate-500 space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> Full Processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> CRA Remittances
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> Year-End T4 Filings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> Email Support
                  </li>
                </ul>
                {formData.tier === 'Core' && <div className="absolute top-2 right-2 text-slate-900 font-bold">✓</div>}
              </button>

              {/* Professional Tier */}
              <button 
                onClick={() => update('tier', 'Professional')}
                className={`flex flex-col p-6 lg:p-8 border-2 text-left transition-all relative overflow-hidden ${formData.tier === 'Professional' ? 'bg-white border-red-600 shadow-xl' : 'bg-slate-50 border-transparent hover:border-red-200'}`}
              >
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest">Most Popular</div>
                <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Professional</h4>
                <p className="text-2xl font-black text-slate-900 mb-4">$295<span className="text-xs font-bold text-slate-400">/mo</span></p>
                <ul className="text-[11px] font-bold text-slate-600 space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span> Everything in Core
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span> Managed Onboarding
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span> Benefits Admin Sync
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span> Dedicated Specialist
                  </li>
                </ul>
                {formData.tier === 'Professional' && <div className="absolute bottom-4 right-4 text-red-600 font-bold">✓</div>}
              </button>

              {/* Enterprise Tier */}
              <button 
                onClick={() => update('tier', 'Enterprise')}
                className={`flex flex-col p-6 lg:p-8 border-2 text-left transition-all relative overflow-hidden ${formData.tier === 'Enterprise' ? 'bg-white border-slate-900 shadow-xl' : 'bg-slate-50 border-transparent hover:border-red-200'}`}
              >
                <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Enterprise</h4>
                <p className="text-2xl font-black text-slate-900 mb-4">Custom</p>
                <ul className="text-[11px] font-bold text-slate-500 space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900">✓</span> Everything in Pro
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900">✓</span> Multi-Entity Support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900">✓</span> Custom GL Mapping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900">✓</span> Audit Defence Rep
                  </li>
                </ul>
                {formData.tier === 'Enterprise' && <div className="absolute top-2 right-2 text-slate-900 font-bold">✓</div>}
              </button>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Pair with your <span className="text-red-600">Specialist</span></h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Your Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="sarah@company.ca"
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Direct Phone</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="(416) 000-0000"
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold"
                  />
                </div>
              </div>
              <div className="bg-slate-900 p-6 text-white border-l-4 border-red-600">
                <p className="text-xs font-medium leading-relaxed opacity-80">
                  By completing this onboarding, you are requesting a dedicated certified specialist who will contact you within 2 business hours to finalize your account migration.
                </p>
              </div>
            </div>
          </div>
        );
      case 'success':
        return (
          <div className="animate-in zoom-in-95 duration-700 text-center py-12">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8">✓</div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Onboarding Initiated</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto font-medium">
              Excellent. We've matched you with a specialist from our {formData.province} compliance team. Check your email for next steps.
            </p>
            <div className="bg-slate-50 p-8 border border-slate-100 mb-12 text-left max-w-md mx-auto">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Your Onboarding Brief</p>
               <div className="space-y-2 text-sm font-bold text-slate-700">
                  <p>Business: <span className="text-slate-900">{formData.businessName}</span></p>
                  <p>Headcount: <span className="text-slate-900">{formData.headcount}</span></p>
                  <p>Tier: <span className="text-red-600">{formData.tier} Managed</span></p>
               </div>
            </div>
            <button 
              onClick={() => onNavigate('home')}
              className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-black transition-all"
            >
              Return Home
            </button>
          </div>
        );
    }
  };

  const steps: SignUpStep[] = ['business', 'team', 'service', 'contact', 'success'];
  const progress = ((steps.indexOf(step) + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Onboarding Header */}
      <section className="bg-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-10">
             <button onClick={() => onNavigate('home')} className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-red-600 transition-colors">Home</button>
             <span className="text-slate-700">/</span>
             <span className="text-[10px] font-black text-white uppercase tracking-widest">Employer Onboarding</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {step === 'success' ? 'Welcome to Maple' : 'Concierge Onboarding'}
              </h1>
              <p className="text-slate-400 mt-4 font-medium italic">
                {step === 'success' ? 'Account verification in progress.' : 'Setup your professional payroll department in minutes.'}
              </p>
            </div>
            
            {step !== 'success' && (
              <div className="min-w-[200px]">
                <div className="flex justify-between items-end mb-3">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Step {steps.indexOf(step) + 1} of 4</p>
                   <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">{Math.round(progress)}%</p>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-600 transition-all duration-700 ease-in-out" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Content */}
        <div className="min-h-[500px]">
          {renderStep()}
        </div>

        {/* Controls */}
        {step !== 'success' && (
          <div className="mt-16 flex items-center justify-between border-t border-slate-100 pt-12">
            <button 
              onClick={back}
              disabled={step === 'business'}
              className={`px-8 py-4 font-black uppercase tracking-widest text-sm transition-all ${step === 'business' ? 'opacity-0' : 'text-slate-400 hover:text-slate-900'}`}
            >
              ← Back
            </button>
            <button 
              onClick={next}
              disabled={step === 'business' && !formData.businessName}
              className="px-14 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-sm hover:bg-red-700 shadow-xl shadow-red-100 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
            >
              {step === 'contact' ? 'Initiate Onboarding' : 'Next Step →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerSignUpPage;
