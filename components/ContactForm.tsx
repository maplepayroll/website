
import React, { useEffect, useState } from 'react';

interface ContactFormProps {
  context?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC<ContactFormProps> = ({ context }) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companySize, setCompanySize] = useState('6-15 Employees');
  const [currentSoftware, setCurrentSoftware] = useState('None');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [loadingText, setLoadingText] = useState('Transmitting...');

  useEffect(() => {
    if (context) {
      if (context.startsWith('AUDIT_BRIEF:')) {
        const parts = context.replace('AUDIT_BRIEF: ', '').split(' | ');
        const profile = parts[0]?.split(': ')[1];
        const friction = parts[1]?.split(': ')[1];
        const timeLoss = parts[2]?.split(': ')[1];

        setMessage(
          `Hello! I just completed the Payroll Frustration Audit. Here are my results:\n\n` +
          `• Pain Profile: ${profile}\n` +
          `• Primary Friction: ${friction}\n` +
          `• Estimated Time Loss: ${timeLoss}\n\n` +
          `I'd like to schedule a 15-minute call to discuss how Maple can solve these specific issues.`
        );
        return;
      }

      if (context.startsWith('CALC_BRIEF:')) {
        const parts = context.replace('CALC_BRIEF: ', '').split(' | ');
        const net = parts[0]?.split('Net ')[1];
        const gross = parts[1]?.split('Gross ')[1];
        const prov = parts[2]?.split('Prov ')[1];
        const year = parts[3]?.split('Year ')[1];

        setMessage(
          `Hello! I just used your Canadian Payroll Calculator with the following parameters:\n\n` +
          `• Province: ${prov}\n` +
          `• Tax Year: ${year}\n` +
          `• Estimated Gross: ${gross}\n` +
          `• Estimated Net: ${net}\n\n` +
          `I'd like to discuss how Maple can manage our payroll and ensure these source deductions are handled accurately.`
        );
        return;
      }

      const templates: Record<string, string> = {
        'Vacation Pay Audit': "I'm interested in an audit of my company's vacation pay liability and compliance logic.",
        'Taxable Benefits Audit': "I'd like to review our current non-cash perks to ensure we are correctly reporting taxable benefits to the CRA.",
        'System Audit': "I'm interested in a 360° professional audit of our current payroll software configuration.",
        'General Quote': "I'm looking for a managed payroll quote for my business. We currently have __ employees.",
        'Audit Results Followup': "I've just completed the Payroll Frustration Audit and would like to schedule a 15-minute call to discuss my results.",
        'Pricing Inquiry': "I have questions about your service tiers and would like to discuss a custom proposal for my business.",
        'Industry Inquiry': "I'd like to discuss how Maple handles the specific payroll complexities of my industry."
      };
      setMessage(templates[context] || `I'm interested in learning more about ${context}.`);
    }
  }, [context]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const steps = ["Encrypting sensitive data...", "Attaching diagnostic brief...", "Verifying CRA credentials...", "Connecting to Maple Concierge..."];
    for (const step of steps) {
      setLoadingText(step);
      await new Promise(r => setTimeout(r, 600));
    }

    console.log("LEAD CAPTURED:", {
      timestamp: new Date().toISOString(),
      source: context || 'Direct Inquiry',
      lead: { firstName, lastName, email, companySize, currentSoftware },
      content: message
    });

    setStatus('success');
  };

  const displayTitle = () => {
    if (status === 'success') return "Inquiry Received";
    if (!context) return "Ready to fire your payroll stress?";
    if (context.startsWith('AUDIT_BRIEF:')) return "Review Your Audit Results";
    if (context.startsWith('CALC_BRIEF:')) return "Review Your Calculation Results";
    return `Request your ${context}`;
  };

  const displayBadge = () => {
    if (!context) return null;
    if (context.startsWith('AUDIT_BRIEF:')) return "Frustration Audit Result";
    if (context.startsWith('CALC_BRIEF:')) return "Custom Calculation";
    return context;
  };

  const getButtonText = () => {
    if (!context) return "Get Your Managed Quote";
    if (context.startsWith('AUDIT_BRIEF:')) return "Discuss My Audit Results";
    if (context.startsWith('CALC_BRIEF:')) return "Review Calculation with Expert";
    return "Request Concierge Support";
  };

  const inputClasses = "w-full px-5 py-4 bg-white border-2 border-slate-300 rounded-none text-slate-900 font-bold placeholder-slate-500 focus:border-red-600 focus:ring-4 focus:ring-red-50 transition-all outline-none shadow-sm";

  return (
    <section id="contact" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              {displayTitle()}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {status === 'success' 
                ? "Your specific diagnostic results have been successfully transmitted to our senior concierge team. Expect a call or email within 2 business hours."
                : "Book a 15-minute consultation to see how our \"Human-in-the-Middle\" service can reclaim 10+ hours of your life every month."}
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Phone", value: "1 (416) 252-1000", icon: "📞" },
                { label: "Email", value: "concierge@maplepayroll.ca", icon: "📧" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
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
                <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full" alt="Testimonial" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Managing Partner, Jenkins Law</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-none shadow-xl border border-slate-100 relative min-h-[500px] flex flex-col justify-center">
            {context && status !== 'success' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] z-20 whitespace-nowrap">
                Inquiry: {displayBadge()}
              </div>
            )}

            {status === 'idle' && (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input required value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className={inputClasses} placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input required value={lastName} onChange={e => setLastName(e.target.value)} type="text" className={inputClasses} placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Work Email</label>
                  <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className={inputClasses} placeholder="john@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Company Size</label>
                    <select value={companySize} onChange={e => setCompanySize(e.target.value)} className={`${inputClasses} appearance-none cursor-pointer`}>
                      <option>1-5 Employees</option>
                      <option>6-15 Employees</option>
                      <option>16-50 Employees</option>
                      <option>50+ Employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Current Software</label>
                    <select value={currentSoftware} onChange={e => setCurrentSoftware(e.target.value)} className={`${inputClasses} appearance-none cursor-pointer`}>
                      <option value="None">None / Manual</option>
                      <option value="ADP">ADP</option>
                      <option value="QuickBooks">QuickBooks</option>
                      <option value="Xero">Xero</option>
                      <option value="Sage">Sage</option>
                      <option value="Wagepoint">Wagepoint</option>
                      <option value="Payworks">Payworks</option>
                      <option value="Dayforce">Dayforce</option>
                      <option value="Employment Hero">Employment Hero (Humi)</option>
                      <option value="Rise">Rise</option>
                      <option value="Knit">Knit</option>
                      <option value="Wave">Wave</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">How can we help?</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClasses} h-40 resize-none`} 
                    placeholder="Tell us about your current payroll setup..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest text-lg hover:bg-red-700 transition-all">
                  {getButtonText()}
                </button>
                <p className="text-center text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                  🔒 Secure PIPEDA-Compliant Processing
                </p>
              </form>
            )}

            {status === 'submitting' && (
              <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <div className="w-16 h-16 border-4 border-slate-100 border-t-red-600 rounded-full animate-spin mb-6"></div>
                <p className="text-slate-900 font-black uppercase tracking-widest text-sm">{loadingText}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900 text-center mb-4 uppercase tracking-tight">Lead Simulation Summary</h3>
                <p className="text-slate-600 text-sm text-center mb-8">This is the notification email sent to the Maple Concierge team:</p>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">From</p>
                      <p className="text-sm font-bold text-slate-900">{firstName} {lastName}</p>
                      <p className="text-xs text-slate-600">{email}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Infrastructure</p>
                      <p className="text-sm font-bold text-slate-900">{companySize}</p>
                      <p className="text-xs text-red-600 font-black uppercase tracking-tight">Software: {currentSoftware}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Attached Context</p>
                    <p className="text-xs font-bold text-red-600 bg-red-50 inline-block px-2 py-1 rounded">
                      {context || 'General Site Lead'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Message Payload</p>
                    <div className="text-[11px] text-slate-700 bg-white p-3 rounded-lg border border-slate-100 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                      {message}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 w-full py-3 text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
