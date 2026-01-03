
import React, { useState } from 'react';
import { PageType } from '../App';
import { PROVINCES } from '../services/payrollCalculator';

interface EmployerSignUpPageProps {
  onNavigate: (page: PageType) => void;
  initialTier?: string;
}

type SignUpStep = 'business' | 'team' | 'financials' | 'infrastructure' | 'service' | 'contact' | 'success';

const EmployerSignUpPage: React.FC<EmployerSignUpPageProps> = ({ onNavigate, initialTier }) => {
  const [step, setStep] = useState<SignUpStep>('business');
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    businessName: '',
    primaryProvince: 'Ontario',
    allProvinces: ['Ontario'] as string[],
    industry: '',
    // Headcount split
    hourlyCount: '0',
    salariedCount: '0',
    // Financials
    monthlyPayrollAmount: '$10,000 - $25,000',
    frequency: 'Bi-Weekly',
    // Infrastructure
    hasBenefits: 'No',
    benefitsCarrier: '',
    hasPension: 'No',
    pensionInstitution: '',
    // Service & Contact
    tier: (initialTier && ["Lil' Kim", "Biggie Smalls", "Lil' Enterprise"].includes(initialTier)) ? initialTier : 'Biggie Smalls',
    name: '',
    email: '',
    phone: ''
  });

  const validateStep = (): boolean => {
    const newErrors: string[] = [];

    if (step === 'business') {
      if (!formData.businessName.trim()) newErrors.push('businessName');
      if (!formData.industry) newErrors.push('industry');
    }

    if (step === 'team') {
      if (formData.hourlyCount === '0' && formData.salariedCount === '0') {
        newErrors.push('hourlyCount');
        newErrors.push('salariedCount');
        // Specific case: need at least one employee to run payroll
      }
    }

    if (step === 'financials') {
      if (formData.allProvinces.length === 0) newErrors.push('allProvinces');
    }

    if (step === 'infrastructure') {
      if (formData.hasBenefits === 'Yes' && !formData.benefitsCarrier) newErrors.push('benefitsCarrier');
      if (formData.hasPension === 'Yes' && !formData.pensionInstitution) newErrors.push('pensionInstitution');
    }

    if (step === 'contact') {
      if (!formData.name.trim()) newErrors.push('name');
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.push('email');
      if (!formData.phone.trim()) newErrors.push('phone');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const next = () => {
    if (!validateStep()) return;

    const steps: SignUpStep[] = ['business', 'team', 'financials', 'infrastructure', 'service', 'contact', 'success'];
    const currentIdx = steps.indexOf(step);
    if (currentIdx < steps.length - 1) setStep(steps[currentIdx + 1]);
    window.scrollTo(0, 0);
  };

  const back = () => {
    setErrors([]);
    const steps: SignUpStep[] = ['business', 'team', 'financials', 'infrastructure', 'service', 'contact', 'success'];
    const currentIdx = steps.indexOf(step);
    if (currentIdx > 0) setStep(steps[currentIdx - 1]);
    window.scrollTo(0, 0);
  };

  const update = (key: string, val: any) => {
    setFormData(prev => ({ ...prev, [key]: val }));
    // Clear error for this field if it exists
    if (errors.includes(key)) {
      setErrors(prev => prev.filter(e => e !== key));
    }
  };

  const handleProvinceToggle = (prov: string) => {
    const current = [...formData.allProvinces];
    let newVal;
    if (current.includes(prov)) {
      newVal = current.filter(p => p !== prov);
    } else {
      newVal = [...current, prov];
    }
    update('allProvinces', newVal);
  };

  const getErrorClass = (key: string) => {
    return errors.includes(key) ? 'border-red-600 ring-2 ring-red-50' : 'border-slate-100';
  };

  const renderStep = () => {
    switch (step) {
      case 'business':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Tell us about your <span className="text-red-600">Business</span></h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Legal Business Name <span className="text-red-600">*</span></label>
                <input 
                  type="text" 
                  value={formData.businessName}
                  onChange={e => update('businessName', e.target.value)}
                  placeholder="Acme Corp Inc."
                  className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold ${getErrorClass('businessName')}`}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Headquarters Province</label>
                  <select 
                    value={formData.primaryProvince}
                    onChange={e => update('primaryProvince', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold cursor-pointer"
                  >
                    {PROVINCES.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Industry Sector <span className="text-red-600">*</span></label>
                  <select 
                    value={formData.industry}
                    onChange={e => update('industry', e.target.value)}
                    className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold cursor-pointer ${getErrorClass('industry')}`}
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Team <span className="text-red-600">Composition</span></h2>
            <p className="text-slate-500 mb-8 font-medium">Specify the split between your hourly and salaried workforce. At least one employee is required.</p>
            <div className={`grid md:grid-cols-2 gap-8 p-4 rounded-xl border-2 transition-all ${errors.includes('hourlyCount') ? 'border-red-100 bg-red-50/30' : 'border-transparent'}`}>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Hourly Employees</label>
                <select 
                  value={formData.hourlyCount}
                  onChange={e => update('hourlyCount', e.target.value)}
                  className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold cursor-pointer text-lg ${getErrorClass('hourlyCount')}`}
                >
                  <option value="0">0 (None)</option>
                  <option value="1-5">1 - 5 Employees</option>
                  <option value="6-15">6 - 15 Employees</option>
                  <option value="16-50">16 - 50 Employees</option>
                  <option value="51-100">51 - 100 Employees</option>
                  <option value="100+">100+ Employees</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Salaried Employees</label>
                <select 
                  value={formData.salariedCount}
                  onChange={e => update('salariedCount', e.target.value)}
                  className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold cursor-pointer text-lg ${getErrorClass('salariedCount')}`}
                >
                  <option value="0">0 (None)</option>
                  <option value="1-5">1 - 5 Employees</option>
                  <option value="6-15">6 - 15 Employees</option>
                  <option value="16-50">16 - 50 Employees</option>
                  <option value="51-100">51 - 100 Employees</option>
                  <option value="100+">100+ Employees</option>
                </select>
              </div>
            </div>
            {errors.includes('hourlyCount') && (
              <p className="text-red-600 text-xs font-black uppercase tracking-widest mt-4">Please specify at least one employee category to continue.</p>
            )}
            <div className="mt-8 bg-slate-50 p-6 border-l-4 border-slate-900">
               <p className="text-sm font-bold text-slate-700 italic">"Different types of employees require different statutory logic (Vacation Accruals vs Pay-on-Cycle). We manage both simultaneously."</p>
            </div>
          </div>
        );
      case 'financials':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Financial <span className="text-red-600">Footprint</span></h2>
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Monthly Payroll Volume (CAD)</label>
                <select 
                  value={formData.monthlyPayrollAmount}
                  onChange={e => update('monthlyPayrollAmount', e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold cursor-pointer"
                >
                  <option value="<$10,000">Less than $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,001 - $50,000">$25,001 - $50,000</option>
                  <option value="$50,001 - $100,000">$50,001 - $100,000</option>
                  <option value="$100,001 - $250,000">$100,001 - $250,000</option>
                  <option value="$250,001 - $500,000">$250,001 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
              </div>
              <div>
                <label className={`block text-xs font-black uppercase tracking-widest mb-4 ${errors.includes('allProvinces') ? 'text-red-600' : 'text-slate-400'}`}>Provinces with Active Employees <span className="text-red-600">*</span></label>
                <div className={`bg-slate-50 p-6 border transition-all ${errors.includes('allProvinces') ? 'border-red-600 bg-red-50/20' : 'border-slate-100'}`}>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Select at least one:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {PROVINCES.map(p => (
                      <button 
                        key={p.name}
                        type="button"
                        onClick={() => handleProvinceToggle(p.name)}
                        className={`px-4 py-3 text-xs font-bold border-2 transition-all text-left flex items-center justify-between ${formData.allProvinces.includes(p.name) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-100 hover:border-red-200'}`}
                      >
                        {p.name}
                        {formData.allProvinces.includes(p.name) && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'infrastructure':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Infrastructure <span className="text-red-600">& Perks</span></h2>
            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Do you offer Group Health Benefits?</label>
                  <select 
                    value={formData.hasBenefits}
                    onChange={e => update('hasBenefits', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold cursor-pointer"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                {formData.hasBenefits === 'Yes' && (
                  <div className="animate-in slide-in-from-left-2 duration-300">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Benefits Carrier <span className="text-red-600">*</span></label>
                    <select 
                      value={formData.benefitsCarrier}
                      onChange={e => update('benefitsCarrier', e.target.value)}
                      className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold cursor-pointer ${getErrorClass('benefitsCarrier')}`}
                    >
                      <option value="">Select Carrier...</option>
                      <option value="Sun Life">Sun Life</option>
                      <option value="Manulife">Manulife</option>
                      <option value="Canada Life">Canada Life</option>
                      <option value="Desjardins">Desjardins Insurance</option>
                      <option value="Blue Cross">Blue Cross</option>
                      <option value="Green Shield">Green Shield Canada</option>
                      <option value="GroupSource">GroupSource</option>
                      <option value="Empire Life">Empire Life</option>
                      <option value="Industrial Alliance">Industrial Alliance</option>
                      <option value="Other">Other / TPA</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Do you offer Pensions / Group RRSP?</label>
                  <select 
                    value={formData.hasPension}
                    onChange={e => update('hasPension', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-red-600 outline-none transition-all font-bold cursor-pointer"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                {formData.hasPension === 'Yes' && (
                  <div className="animate-in slide-in-from-left-2 duration-300">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Financial Institution <span className="text-red-600">*</span></label>
                    <select 
                      value={formData.pensionInstitution}
                      onChange={e => update('pensionInstitution', e.target.value)}
                      className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold cursor-pointer ${getErrorClass('pensionInstitution')}`}
                    >
                      <option value="">Select Institution...</option>
                      <option value="Sun Life">Sun Life</option>
                      <option value="Manulife">Manulife</option>
                      <option value="Canada Life">Canada Life</option>
                      <option value="Industrial Alliance">Industrial Alliance</option>
                      <option value="Wealthsimple">Wealthsimple Work</option>
                      <option value="Common Wealth">Common Wealth</option>
                      <option value="RBC">RBC Royal Bank</option>
                      <option value="TD">TD Canada Trust</option>
                      <option value="BMO">BMO Bank of Montreal</option>
                      <option value="Scotiabank">Scotiabank</option>
                      <option value="CIBC">CIBC</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Choose your <span className="text-red-600">Concierge Tier</span></h2>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8">
              {(["Lil' Kim", "Biggie Smalls", "Lil' Enterprise"] as const).map(tier => (
                <button 
                  key={tier}
                  type="button"
                  onClick={() => update('tier', tier)}
                  className={`flex flex-col p-6 lg:p-8 border-2 text-left transition-all relative overflow-hidden ${formData.tier === tier ? 'bg-white border-red-600 shadow-xl' : 'bg-slate-50 border-transparent hover:border-red-200'}`}
                >
                  {tier === 'Biggie Smalls' && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest">Most Popular</div>
                  )}
                  <h4 className="font-black text-lg mb-1 uppercase tracking-tight">{tier}</h4>
                  <p className="text-2xl font-black text-slate-900 mb-4">{tier === "Lil' Enterprise" ? 'Custom' : tier === "Lil' Kim" ? '$295' : '$695'}<span className="text-xs font-bold text-slate-400">/mo</span></p>
                  <ul className="text-[11px] font-bold text-slate-500 space-y-2 mb-6 flex-grow">
                    <li className="flex items-start gap-2"><span className="text-red-600">✓</span> Full Processing</li>
                    <li className="flex items-start gap-2"><span className="text-red-600">✓</span> CRA Remittances</li>
                    <li className="flex items-start gap-2"><span className="text-red-600">✓</span> Year-End T4 Filings</li>
                    {tier !== "Lil' Kim" && <li className="flex items-start gap-2"><span className="text-red-600">✓</span> Managed Onboarding</li>}
                    {tier !== "Lil' Kim" && <li className="flex items-start gap-2"><span className="text-red-600">✓</span> Dedicated Specialist</li>}
                  </ul>
                </button>
              ))}
            </div>
            
            <div className="bg-slate-50 p-6 border-l-4 border-slate-400">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                * Note: Keep in mind that our managed fees do not include the separate costs of applicable payroll software, which can vary.
              </p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Pair with your <span className="text-red-600">Specialist</span></h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Your Full Name <span className="text-red-600">*</span></label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Sarah Jenkins"
                  className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold ${getErrorClass('name')}`}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Work Email <span className="text-red-600">*</span></label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="sarah@company.ca"
                    className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold ${getErrorClass('email')}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Direct Phone <span className="text-red-600">*</span></label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="(416) 000-0000"
                    className={`w-full px-6 py-4 bg-white border-2 focus:border-red-600 outline-none transition-all font-bold ${getErrorClass('phone')}`}
                  />
                </div>
              </div>
              <div className="bg-slate-900 p-6 text-white border-l-4 border-red-600">
                <p className="text-xs font-medium leading-relaxed opacity-80">
                  Your dedicated certified specialist will contact you within 2 business hours to finalize your account migration.
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
              Excellent. We've received your profile details. Check your email for next steps.
            </p>
            <div className="bg-slate-50 p-8 border border-slate-100 mb-12 text-left max-w-md mx-auto">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Your Profile Summary</p>
               <div className="space-y-2 text-sm font-bold text-slate-700">
                  <p>Business: <span className="text-slate-900">{formData.businessName}</span></p>
                  <p>Staff: <span className="text-slate-900">{formData.hourlyCount} Hourly / {formData.salariedCount} Salaried</span></p>
                  <p>Regions: <span className="text-slate-900">{formData.allProvinces.join(', ')}</span></p>
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

  const steps: SignUpStep[] = ['business', 'team', 'financials', 'infrastructure', 'service', 'contact', 'success'];
  const progress = ((steps.indexOf(step) + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {step === 'success' ? 'Welcome to Maple' : 'Concierge Onboarding'}
              </h1>
              <p className="text-slate-400 mt-4 font-medium italic">
                Setup your professional payroll department in minutes.
              </p>
            </div>
            {step !== 'success' && (
              <div className="min-w-[200px]">
                <div className="flex justify-between items-end mb-3">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Step {steps.indexOf(step) + 1} of 6</p>
                   <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">{Math.round(progress)}%</p>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 transition-all duration-700 ease-in-out" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 lg:py-16">
        <div className="min-h-0">
          {renderStep()}
          {errors.length > 0 && step !== 'success' && (
            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-600 animate-in fade-in duration-300">
               <p className="text-xs font-black text-red-600 uppercase tracking-widest">
                 Please complete all required fields (marked with *) before proceeding.
               </p>
            </div>
          )}
        </div>
        {step !== 'success' && (
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-8">
            <button 
              onClick={back}
              disabled={step === 'business'}
              className={`px-8 py-4 font-black uppercase tracking-widest text-sm transition-all ${step === 'business' ? 'opacity-0' : 'text-slate-400 hover:text-slate-900'}`}
            >
              ← Back
            </button>
            <button 
              onClick={next}
              className="px-14 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-sm hover:bg-red-700 shadow-xl transition-all transform hover:scale-105"
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
