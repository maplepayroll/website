import React, { useState } from 'react';
import { PageType } from '../App';
import { PROVINCES } from '../services/payrollCalculator';

interface PayrollOperationalAuditPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success';

const STORAGE_KEY = 'maple_operational_audits';

const COMMON_UNIONS = [
  "CUPE (Public Employees)",
  "UNIFOR",
  "PSAC (Public Service)",
  "UFCW (Food & Commercial)",
  "USW (Steelworkers)",
  "SEIU (Service Employees)",
  "BCGEU (BC General)",
  "ONA (Ontario Nurses)",
  "CLAC (Christian Labour)",
  "OPSEU (Ontario Public)",
  "Teamsters Canada"
];

const TOP_20_PAYROLL_SYSTEMS = [
  "ADP (Workforce Now / Run)",
  "Dayforce (Ceridian)",
  "Wagepoint",
  "Payworks",
  "UKG (Pro / Ready)",
  "Sage (Accounting / HR)",
  "QuickBooks Online Payroll",
  "Xero Payroll",
  "Employment Hero (Humi)",
  "Rise People",
  "Knit People",
  "Wave Payroll",
  "Avanti",
  "Push Operations",
  "Collage HR",
  "PaymentEvolution",
  "Deluxe Payroll",
  "Gusto",
  "Rippling",
  "BambooHR Payroll",
  "Excel / Manual Spreadsheet"
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const TIMES = ["Morning (9 AM - 12 PM)", "Afternoon (1 PM - 4 PM)"];

const PayrollOperationalAuditPage: React.FC<PayrollOperationalAuditPageProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [loadingText, setLoadingText] = useState('Cataloging Infrastructure...');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    tenure: '',
    workspaceType: 'On-site',
    payrollTeamSize: '1',
    reportingStructure: 'Finance',
    additionalOpinion: '',
    totalEmployees: '',
    fullTimeCount: '',
    partTimeCount: '',
    hourlyCount: '',
    salariedCount: '',
    hasUnions: 'No',
    selectedUnions: [] as string[],
    otherUnionName: '',
    jurisdictions: [] as string[],
    software: '',
    otherSoftwareName: '',
    activeModules: '',
    likes: '',
    dislikes: '',
    favouriteReport: '',
    missingReport: '',
    frequency: 'Bi-weekly',
    processingTime: '',
    commitmentDeadline: '',
    approvalWorkflow: '',
    otherResponsibilities: '',
    monthlyHires: '',
    monthlyTerminations: '',
    onboardingProcess: '',
    reconcilesBenefits: 'No',
    hasHadPenalties: 'No',
    yearEndEffort: '',
    timeTrackingIntegration: 'Manual Entry',
    stubDistributionMethod: 'Online Portal',
    remittanceEffort: 'Automated by Software',
    wsibEffort: 'Manual Entry',
    ehtEffort: 'Manual Tracking',
    benefitsEffort: 'Manual Reconcile',
    paymentExecution: 'Direct EFT from Software',
    // Next Steps Fields
    interestLevel: 'Review existing system',
    canContact: 'Yes',
    contactMethod: 'Email',
    contactPhone: '',
    availability: {} as Record<string, boolean> // key format: "Day-Time"
  });

  const update = (key: string, val: any) => setFormData(prev => ({ ...prev, [key]: val }));

  const handleUnionToggle = (union: string) => {
    const current = [...formData.selectedUnions];
    if (current.includes(union)) {
      update('selectedUnions', current.filter(u => u !== union));
    } else {
      update('selectedUnions', [...current, union]);
    }
  };

  const handleAvailabilityToggle = (day: string, time: string) => {
    const key = `${day}-${time}`;
    const current = { ...formData.availability };
    current[key] = !current[key];
    update('availability', current);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const steps = [
      "Cataloging Infrastructure...", 
      "Analyzing Workforce Composition...", 
      "Mapping Technology Stack...", 
      "Applying Internal Control Benchmarks...",
      "Triggering Automated Notifications...",
      "Dispatching Audit Copy to Client..."
    ];

    for (const stepText of steps) {
      setLoadingText(stepText);
      await new Promise(r => setTimeout(r, 700));
    }

    // PERSIST TO DATABASE (SIMULATED)
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const submission = {
      ...formData,
      finalSoftware: formData.software === 'Other' ? formData.otherSoftwareName : formData.software,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      status: 'New'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([submission, ...existing]));

    console.log("SIMULATED_NOTIFICATION: New Audit Received from " + formData.company);
    console.log("SIMULATED_AUTO_EMAIL: Sent summary copy to " + formData.email);

    setStatus('success');
  };

  // High Contrast Style Definitions
  const inputClasses = "w-full px-6 py-4 bg-white border-2 border-slate-300 rounded-none text-slate-900 font-bold placeholder-slate-500 focus:border-red-600 outline-none transition-all shadow-sm focus:shadow-md";
  const labelClasses = "block text-[11px] font-black text-slate-800 uppercase tracking-widest mb-3";
  const sectionTitleClasses = "text-2xl font-black text-slate-900 uppercase tracking-tight mb-10 pb-4 border-b-4 border-slate-200 inline-block";

  if (status === 'success') {
    return (
      <div className="bg-white min-h-screen pt-40 pb-24 px-4 text-center">
        <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-700">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-10">✓</div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">Audit <br/><span className="text-red-600">Transmitted.</span></h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
            Your operational footprint has been successfully cataloged. We have automatically emailed a copy of these results to <strong>{formData.email}</strong> for your internal records.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="px-16 py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-2xl"
          >
            Return to Headquarters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Strategy" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-[10px] font-black tracking-[0.3em] mb-8 uppercase shadow-lg">
              Operational Maturity Audit
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              The Strategic <br/>
              <span className="text-red-500">Payroll Survey.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10 max-w-2xl">
              Complete this comprehensive profile to help us understand your business's administrative architecture and identify friction points in your current lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {status === 'submitting' ? (
          <div className="flex flex-col items-center justify-center py-40 animate-pulse">
            <div className="w-20 h-20 border-4 border-slate-100 border-t-red-600 rounded-full animate-spin mb-10"></div>
            <p className="text-slate-900 font-black uppercase tracking-[0.3em] text-sm">{loadingText}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-24">
            
            {/* Section 1: Professional Identity */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className={sectionTitleClasses}>01. Professional Profile</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => update('name', e.target.value)} className={inputClasses} placeholder="Alex Hamilton" />
                </div>
                <div>
                  <label className={labelClasses}>Work Email (For Audit Copy Receipt)</label>
                  <input required type="email" value={formData.email} onChange={e => update('email', e.target.value)} className={inputClasses} placeholder="alex@company.ca" />
                </div>
                <div>
                  <label className={labelClasses}>Organization Name</label>
                  <input required type="text" value={formData.company} onChange={e => update('company', e.target.value)} className={inputClasses} placeholder="Acme Logistics Ltd." />
                </div>
                <div>
                  <label className={labelClasses}>Professional Title</label>
                  <input required type="text" value={formData.title} onChange={e => update('title', e.target.value)} className={inputClasses} placeholder="Chief Operations Officer" />
                </div>
                <div>
                  <label className={labelClasses}>Tenure in Current Role</label>
                  <input type="text" value={formData.tenure} onChange={e => update('tenure', e.target.value)} className={inputClasses} placeholder="e.g. 4 Years" />
                </div>
                <div>
                  <label className={labelClasses}>Primary Workspace Type</label>
                  <select value={formData.workspaceType} onChange={e => update('workspaceType', e.target.value)} className={inputClasses}>
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Internal Payroll Team Size</label>
                  <input type="number" value={formData.payrollTeamSize} onChange={e => update('payrollTeamSize', e.target.value)} className={inputClasses} placeholder="1" />
                </div>
                <div>
                  <label className={labelClasses}>Departmental Reporting Line</label>
                  <select value={formData.reportingStructure} onChange={e => update('reportingStructure', e.target.value)} className={inputClasses}>
                    <option>Finance / Accounting</option>
                    <option>Human Resources</option>
                    <option>Operations / GM</option>
                    <option>Direct to Owner</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Workforce Architecture */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <h2 className={sectionTitleClasses}>02. Workforce Composition</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <label className={labelClasses}>Total Workforce (Active)</label>
                  <input required type="number" value={formData.totalEmployees} onChange={e => update('totalEmployees', e.target.value)} className={inputClasses} placeholder="25" />
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Full-Time Count</label>
                    <input type="number" value={formData.fullTimeCount} onChange={e => update('fullTimeCount', e.target.value)} className={inputClasses} placeholder="20" />
                  </div>
                  <div>
                    <label className={labelClasses}>Part-Time Count</label>
                    <input type="number" value={formData.partTimeCount} onChange={e => update('partTimeCount', e.target.value)} className={inputClasses} placeholder="5" />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Hourly Employee Count</label>
                    <input type="number" value={formData.hourlyCount} onChange={e => update('hourlyCount', e.target.value)} className={inputClasses} placeholder="15" />
                  </div>
                  <div>
                    <label className={labelClasses}>Salaried Employee Count</label>
                    <input type="number" value={formData.salariedCount} onChange={e => update('salariedCount', e.target.value)} className={inputClasses} placeholder="10" />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Union Participation</label>
                  <select value={formData.hasUnions} onChange={e => update('hasUnions', e.target.value)} className={inputClasses}>
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>

              {formData.hasUnions === 'Yes' && (
                <div className="mb-12 animate-in slide-in-from-top-4 duration-500">
                  <label className={labelClasses}>Collective Agreements (Select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-50 p-8 border-2 border-slate-200">
                    {COMMON_UNIONS.map(u => (
                      <label key={u} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 accent-red-600"
                          checked={formData.selectedUnions.includes(u)}
                          onChange={() => handleUnionToggle(u)}
                        />
                        <span className="text-[11px] font-bold text-slate-700 uppercase group-hover:text-slate-900 transition-colors">{u}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 accent-red-600"
                        checked={formData.selectedUnions.includes('Other')}
                        onChange={() => handleUnionToggle('Other')}
                      />
                      <span className="text-[11px] font-bold text-slate-700 uppercase group-hover:text-slate-900 transition-colors">Other (Specify)</span>
                    </label>
                  </div>
                  {formData.selectedUnions.includes('Other') && (
                    <div className="mt-4 animate-in fade-in duration-300">
                      <input 
                        type="text" 
                        value={formData.otherUnionName} 
                        onChange={e => update('otherUnionName', e.target.value)} 
                        className={inputClasses} 
                        placeholder="Please enter the union name(s)..." 
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="mb-12 bg-red-50 p-8 border-2 border-red-100">
                <label className="block text-[11px] font-black text-red-700 uppercase tracking-widest mb-3">Risk History Profile</label>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                   <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800 leading-relaxed mb-4">Have you received any CRA or Provincial payroll-related penalties/notices in the last 24 months?</p>
                      <select value={formData.hasHadPenalties} onChange={e => update('hasHadPenalties', e.target.value)} className={inputClasses}>
                        <option>No</option>
                        <option>Yes (Minor Notices)</option>
                        <option>Yes (Substantial Penalties)</option>
                      </select>
                   </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Jurisdictional Footprint (Provinces/Territories)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-8 border-2 border-slate-200">
                  {PROVINCES.map(p => (
                    <label key={p.name} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 accent-red-600"
                        checked={formData.jurisdictions.includes(p.name)}
                        onChange={e => {
                          const list = e.target.checked 
                            ? [...formData.jurisdictions, p.name] 
                            : formData.jurisdictions.filter(x => x !== p.name);
                          update('jurisdictions', list);
                        }}
                      />
                      <span className="text-[11px] font-bold text-slate-700 uppercase group-hover:text-slate-900 transition-colors">{p.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Technical Ecosystem */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <h2 className={sectionTitleClasses}>03. Infrastructure & Technology</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClasses}>Current Primary Payroll Platform</label>
                    <select 
                      required 
                      value={formData.software} 
                      onChange={e => update('software', e.target.value)} 
                      className={inputClasses}
                    >
                      <option value="">Select Platform...</option>
                      {TOP_20_PAYROLL_SYSTEMS.map(sys => (
                        <option key={sys} value={sys}>{sys}</option>
                      ))}
                      <option value="Other">Other (Please specify...)</option>
                    </select>
                    {formData.software === 'Other' && (
                      <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <input 
                          type="text" 
                          required 
                          value={formData.otherSoftwareName} 
                          onChange={e => update('otherSoftwareName', e.target.value)} 
                          className={inputClasses} 
                          placeholder="Platform Name..." 
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses}>Time-Tracking Workflow</label>
                    <select value={formData.timeTrackingIntegration} onChange={e => update('timeTrackingIntegration', e.target.value)} className={inputClasses}>
                      <option>Manual Entry (Paper/Excel)</option>
                      <option>Integrated API (Auto-Sync)</option>
                      <option>CSV Import/Export</option>
                    </select>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 text-white">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] font-black text-red-500 uppercase tracking-widest mb-3">Benefits Reconciliation Audit</p>
                      <p className="text-sm text-slate-300 mb-6">Do you manually reconcile your monthly insurance invoices (e.g. SunLife/Manulife) against your active payroll?</p>
                      <select value={formData.reconcilesBenefits} onChange={e => update('reconcilesBenefits', e.target.value)} className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white font-bold outline-none hover:bg-white/10 transition-colors">
                        <option className="bg-slate-900">No, we trust the billing is correct</option>
                        <option className="bg-slate-900">Yes, it's a manual monthly task</option>
                        <option className="bg-slate-900">It happens sporadically</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-red-500 uppercase tracking-widest mb-3">Data Distribution Method</p>
                      <p className="text-sm text-slate-300 mb-6">How are sensitive employee pay stubs and T4s currently delivered to your workforce?</p>
                      <select value={formData.stubDistributionMethod} onChange={e => update('stubDistributionMethod', e.target.value)} className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white font-bold outline-none hover:bg-white/10 transition-colors">
                        <option className="bg-slate-900">Online Secure Portal</option>
                        <option className="bg-slate-900">Encrypted Email</option>
                        <option className="bg-slate-900">Unencrypted Email Attachment</option>
                        <option className="bg-slate-900">Physical Printed Stubs</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50/50 p-8 border-2 border-green-200">
                    <label className="block text-[11px] font-black text-green-700 uppercase tracking-widest mb-3">Operational Strengths (What works well?)</label>
                    <textarea value={formData.likes} onChange={e => update('likes', e.target.value)} className={`${inputClasses} h-32 resize-none`} placeholder="Three aspects you enjoy..." />
                  </div>
                  <div className="bg-red-50/50 p-8 border-2 border-red-200">
                    <label className="block text-[11px] font-black text-red-700 uppercase tracking-widest mb-3">Operational Friction (Frustrations?)</label>
                    <textarea value={formData.dislikes} onChange={e => update('dislikes', e.target.value)} className={`${inputClasses} h-32 resize-none`} placeholder="Three pain points..." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClasses}>Essential Current Reporting</label>
                    <input type="text" value={formData.favouriteReport} onChange={e => update('favouriteReport', e.target.value)} className={inputClasses} placeholder="Which report is most valuable?" />
                  </div>
                  <div>
                    <label className={labelClasses}>Reporting Gaps (Desired Insights)</label>
                    <input type="text" value={formData.missingReport} onChange={e => update('missingReport', e.target.value)} className={inputClasses} placeholder="What data view are you missing?" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Operational Lifecycle */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <h2 className={sectionTitleClasses}>04. Lifecycle & Performance</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <label className={labelClasses}>Pay Cycle Frequency</label>
                  <select value={formData.frequency} onChange={e => update('frequency', e.target.value)} className={inputClasses}>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Semi-monthly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Administrative Cycle Time (Hrs)</label>
                  <input type="text" value={formData.processingTime} onChange={e => update('processingTime', e.target.value)} className={inputClasses} placeholder="Time per pay run" />
                </div>
                <div>
                  <label className={labelClasses}>Year-End Reconciliation Effort (Hrs)</label>
                  <input type="text" value={formData.yearEndEffort} onChange={e => update('yearEndEffort', e.target.value)} className={inputClasses} placeholder="Total time for T4 season" />
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <label className={labelClasses}>Authorization Workflow (Approval Process)</label>
                  <textarea value={formData.approvalWorkflow} onChange={e => update('approvalWorkflow', e.target.value)} className={`${inputClasses} h-32 resize-none`} placeholder="Describe the steps for final sign-off..." />
                </div>
                <div className="bg-slate-900 p-10 border-l-8 border-red-600 text-white">
                  <label className="block text-[11px] font-black text-red-500 uppercase tracking-widest mb-3">Core Strategic Focus (Outside of Payroll)</label>
                  <p className="text-slate-300 text-sm font-medium mb-6">What primary responsibilities occupy your time when you are not managing payroll?</p>
                  <textarea value={formData.otherResponsibilities} onChange={e => update('otherResponsibilities', e.target.value)} className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white font-bold placeholder-white/20 focus:border-red-600 outline-none transition-all shadow-sm h-32 resize-none" placeholder="e.g. Revenue strategy, legal, recruitment..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className={labelClasses}>Avg. Monthly Onboarding Volume</label>
                  <input type="number" value={formData.monthlyHires} onChange={e => update('monthlyHires', e.target.value)} className={inputClasses} placeholder="New hires per month" />
                </div>
                <div>
                  <label className={labelClasses}>Avg. Monthly Departure Volume</label>
                  <input type="number" value={formData.monthlyTerminations} onChange={e => update('monthlyTerminations', e.target.value)} className={inputClasses} placeholder="Terminations per month" />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Employee Onboarding Workflow</label>
                <textarea value={formData.onboardingProcess} onChange={e => update('onboardingProcess', e.target.value)} className={`${inputClasses} h-32 resize-none`} placeholder="From 'Offer Signed' to 'First Payday'..." />
              </div>
            </div>

            {/* Section 5: Manuality & Statutory Friction Audit */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <h2 className={sectionTitleClasses}>05. Manuality & Friction Audit</h2>
              <p className="text-slate-600 text-sm font-bold mb-12 leading-relaxed">
                Many businesses underestimate the time spent on "Shadow Admin" tasks. Please specify the manuality level of these critical statutory processes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className={labelClasses}>Source Deduction Remittances (CRA/RQ)</label>
                  <select value={formData.remittanceEffort} onChange={e => update('remittanceEffort', e.target.value)} className={inputClasses}>
                    <option>Fully Automated by Software</option>
                    <option>Manual Submission (CRA My Business Account)</option>
                    <option>Manual Bank Payment (Online Banking)</option>
                    <option>Third Party (Accountant/Bookkeeper)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Workers' Compensation (WSIB/WCB/CSST)</label>
                  <select value={formData.wsibEffort} onChange={e => update('wsibEffort', e.target.value)} className={inputClasses}>
                    <option>Automated Calculation & Submission</option>
                    <option>Manual Monthly/Quarterly Return</option>
                    <option>Manual Annual Reconciliation</option>
                    <option>Not Registered / Unknown</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className={labelClasses}>Employer Health Tax (EHT / HSF / HAPSET)</label>
                  <select value={formData.ehtEffort} onChange={e => update('ehtEffort', e.target.value)} className={inputClasses}>
                    <option>Manual Tracking of Thresholds</option>
                    <option>Annual Manual Return</option>
                    <option>Integrated in Payroll Software</option>
                    <option>Exempt / Below Threshold</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Group Benefits Reconciliation</label>
                  <select value={formData.benefitsEffort} onChange={e => update('benefitsEffort', e.target.value)} className={inputClasses}>
                    <option>Automated (API/Sync)</option>
                    <option>Manual Monthly Comparison (Excel)</option>
                    <option>I trust the insurance carrier invoice</option>
                    <option>Not Offered</option>
                  </select>
                </div>
              </div>

              <div className="bg-red-50 p-10 border-2 border-red-100">
                <label className="block text-[11px] font-black text-red-700 uppercase tracking-widest mb-3 text-center">Funds Distribution & Payment Execution</label>
                <p className="text-slate-800 text-sm font-bold text-center mb-8">How are funds physically moved to your employees' bank accounts?</p>
                <div className="grid md:grid-cols-3 gap-4">
                   {[
                     { id: 'Software EFT', label: 'Direct EFT via Software', desc: 'Money moves automatically from our bank.' },
                     { id: 'Manual Banking', label: 'Manual Online Banking', desc: 'We upload a file or key in amounts manually.' },
                     { id: 'Manual Cheque', label: 'Physical Cheques', desc: 'Hand-signed paper cheques per person.' }
                   ].map(opt => (
                     <button 
                       key={opt.id}
                       type="button"
                       onClick={() => update('paymentExecution', opt.id)}
                       className={`p-6 border-2 transition-all text-left group ${formData.paymentExecution === opt.id ? 'bg-white border-red-600 shadow-xl scale-[1.02]' : 'bg-white border-slate-300 hover:border-red-300'}`}
                     >
                       <p className="font-black text-slate-900 uppercase text-[11px] mb-2">{opt.label}</p>
                       <p className="text-[11px] text-slate-600 font-medium leading-tight">{opt.desc}</p>
                     </button>
                   ))}
                </div>
              </div>

              <div className="mt-16 bg-slate-50 p-10 border-2 border-slate-200 flex flex-col items-center text-center">
                 <h3 className="text-xl font-black text-slate-900 uppercase mb-4">Final Infrastructure Notes</h3>
                 <p className="text-slate-600 text-sm font-bold mb-8 max-w-lg">Any additional context or internal opinions on your current payroll setup that we should be aware of?</p>
                 <textarea value={formData.additionalOpinion} onChange={e => update('additionalOpinion', e.target.value)} className={`${inputClasses} h-32 resize-none`} placeholder="Global thoughts on efficiency or risks..." />
              </div>
            </div>

            {/* Section 6: Next Steps & Consultation */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <h2 className={sectionTitleClasses}>06. Next Steps & Consultation</h2>
              <p className="text-slate-600 text-sm font-bold mb-12 leading-relaxed">
                We will automatically send a high-fidelity copy of this operational audit report to <strong>{formData.email || '[email not yet provided]'}</strong>. 
                Our senior specialists are also available to provide a professional analysis of your current infrastructure.
              </p>

              <div className="space-y-12">
                <div>
                   <label className={labelClasses}>Primary Consultation Interest</label>
                   <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { id: 'Review existing system', label: 'Talk about existing system', desc: 'Review current friction points.' },
                        { id: 'Looking at new system', label: 'Look at a new system', desc: 'Explore alternative platforms.' },
                        { id: 'None', label: 'Not at this time', desc: 'Only send the audit copy.' }
                      ].map(opt => (
                        <button 
                          key={opt.id}
                          type="button"
                          onClick={() => update('interestLevel', opt.id)}
                          className={`p-6 border-2 transition-all text-left group ${formData.interestLevel === opt.id ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]' : 'bg-white border-slate-300 hover:border-red-300'}`}
                        >
                          <p className={`font-black uppercase text-[11px] mb-2 ${formData.interestLevel === opt.id ? 'text-white' : 'text-slate-900'}`}>{opt.label}</p>
                          <p className={`text-[11px] font-bold leading-tight ${formData.interestLevel === opt.id ? 'text-slate-300' : 'text-slate-600'}`}>{opt.desc}</p>
                        </button>
                      ))}
                   </div>
                </div>

                {formData.interestLevel !== 'None' && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-500 space-y-12">
                    <div className="grid md:grid-cols-2 gap-8">
                       <div>
                          <label className={labelClasses}>Communication Preference</label>
                          <select value={formData.contactMethod} onChange={e => update('contactMethod', e.target.value)} className={inputClasses}>
                            <option>Email</option>
                            <option>Phone Call</option>
                          </select>
                       </div>
                       <div>
                          <label className={labelClasses}>
                            {formData.contactMethod === 'Phone Call' ? 'Direct Phone Number' : 'Contact Email Address'}
                          </label>
                          {formData.contactMethod === 'Phone Call' ? (
                            <input 
                              type="tel" 
                              value={formData.contactPhone} 
                              onChange={e => update('contactPhone', e.target.value)} 
                              className={inputClasses} 
                              placeholder="(416) 000-0000" 
                              required={formData.contactMethod === 'Phone Call'}
                            />
                          ) : (
                            <input 
                              type="email" 
                              value={formData.email} 
                              onChange={e => update('email', e.target.value)} 
                              className={inputClasses} 
                              placeholder="alex@company.ca" 
                              required={formData.contactMethod === 'Email'}
                            />
                          )}
                       </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Best Times for Consultation (Select all that apply)</label>
                      <div className="bg-slate-50 border-2 border-slate-300 overflow-hidden">
                        <table className="w-full text-center border-collapse">
                          <thead>
                             <tr className="bg-slate-100 border-b-2 border-slate-300">
                               <th className="p-4 text-[11px] font-black text-slate-700 uppercase tracking-widest text-left border-r-2 border-slate-300">Window</th>
                               {DAYS.map(day => (
                                 <th key={day} className="p-4 text-[11px] font-black text-slate-900 uppercase tracking-widest">{day}</th>
                               ))}
                             </tr>
                          </thead>
                          <tbody>
                            {TIMES.map(time => (
                              <tr key={time} className="border-b-2 border-slate-300 last:border-0 group hover:bg-white transition-colors">
                                <td className="p-4 text-[11px] font-black text-slate-800 uppercase tracking-widest text-left border-r-2 border-slate-300 bg-slate-100">
                                  {time}
                                </td>
                                {DAYS.map(day => (
                                  <td key={`${day}-${time}`} className="p-4">
                                    <input 
                                      type="checkbox"
                                      className="w-6 h-6 accent-red-600 cursor-pointer"
                                      checked={!!formData.availability[`${day}-${time}`]}
                                      onChange={() => handleAvailabilityToggle(day, time)}
                                    />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-12 border-t-2 border-slate-200 flex flex-col items-center">
              <button 
                type="submit"
                className="px-20 py-8 bg-red-600 text-white font-black uppercase tracking-[0.3em] text-xl hover:bg-red-700 transition-all shadow-2xl shadow-red-100 transform hover:-translate-y-1 active:scale-95"
              >
                Transmit Operational Audit
              </button>
              <p className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                🔒 Secure PIPEDA-Compliant Data Processing
              </p>
            </div>

          </form>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
              Stop Guessing. <br/> <span className="text-red-600">Start Managing.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Our specialists review every survey personally to identify structural inefficiencies and automation gaps.
            </p>
         </div>
      </section>
    </div>
  );
};

export default PayrollOperationalAuditPage;