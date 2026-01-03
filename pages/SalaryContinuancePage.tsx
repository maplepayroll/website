
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface SalaryContinuancePageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const SalaryContinuancePage: React.FC<SalaryContinuancePageProps> = ({ onNavigate }) => {
  const continuanceFaqs = [
    {
      q: "Is CPP and EI deducted from salary continuance?",
      a: "Yes. Because the employee is technically still 'on payroll' during the notice period, the payments are considered regular employment income and attract mandatory CPP and EI withholdings."
    },
    {
      q: "When do I issue the ROE for salary continuance?",
      a: "You issue the Record of Employment (ROE) only after the continuance period ends and the final payment is made. You must include all the continuance earnings in the pay period fields of the ROE."
    },
    {
      q: "Can I stop benefits during salary continuance?",
      a: "Generally, employment standards require that benefits (health, dental, life) continue during the statutory notice period. Some employers choose to continue them for the entire continuance period to reduce legal risk."
    },
    {
      q: "What's the difference between this and a Retiring Allowance?",
      a: "A retiring allowance (severance) is usually a lump sum paid upon termination for loss of office. Salary continuance is a bridge where the employee stays on the regular pay cycle. Retiring allowances often have special tax-free transfer rules (to RRSPs) that salary continuance does not."
    },
    {
      q: "Does vacation pay accrue on salary continuance?",
      a: "Yes. In most provinces, an employee continues to accrue vacation pay on any earnings during the statutory notice period, even if they aren't physically in the office."
    }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Salary Continuance in Canada: Employers Guide",
      "description": "Understanding the tax, compliance, and ROE implications of salary continuance for Canadian businesses.",
      "author": { "@type": "Person", "name": "Arshad Merali" }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { 
      const existing = document.head.querySelector('script[type="application/ld+json"]');
      if (existing) document.head.removeChild(existing); 
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Bridge" 
            className="w-full h-full object-cover object-center opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <button 
              onClick={() => onNavigate('resources')} 
              className="group flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest mb-8 hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Knowledge Hub
            </button>
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg">
              Compliance Deep Dive
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              The Bridge: <br/>
              <span className="text-red-500">Salary Continuance.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-10">
              Salary continuance is a common but complex termination strategy in Canada. Unlike a lump-sum retiring allowance, continuance keeps the employee on your regular pay cycle, carrying unique implications for <strong>CPP, EI, and ROE timing.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('home', 'Termination Audit')}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl"
              >
                Audit Your Termination Logic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
            
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Defining the Continuance</h2>
            <p className="text-slate-600 mb-8">
              In a salary continuance arrangement, an employer agrees to pay a terminated employee their regular salary for a fixed period (the notice period) instead of paying a single lump-sum amount. From a payroll perspective, the employee is effectively <strong>"active but not working."</strong>
            </p>

            <div className="bg-slate-50 p-10 border-l-8 border-slate-900 mb-12 shadow-sm">
               <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight">The Statutory Difference</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-2">Salary Continuance</h4>
                    <p className="text-sm text-slate-600">Considered <strong>Employment Income</strong>. Deduct Income Tax, CPP, and EI. Issue ROE at the <em>end</em> of the period.</p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-2">Retiring Allowance (Lump Sum)</h4>
                    <p className="text-sm text-slate-600">Considered <strong>Severance</strong>. Deduct Income Tax. Usually <em>no</em> CPP/EI. Issue ROE <em>immediately</em> upon termination.</p>
                  </div>
               </div>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">ROE: The Compliance Trap</h2>
            <p className="text-slate-600 mb-6">
              One of the most frequent errors in Canadian payroll is issuing a Record of Employment (ROE) too early for a salary continuance. 
            </p>
            <p className="text-slate-600 mb-8">
              Service Canada dictates that for salary continuance, the ROE should only be issued when the final payment of the continuance is made. If you issue it on the "last day of work" but continue to pay them for 3 months, you are reporting conflicting data to the government, which can trigger an audit of your entire payroll account.
            </p>

            <div className="bg-red-50 p-8 border-l-4 border-red-600 my-12">
               <h4 className="text-red-900 font-black uppercase text-sm mb-3 tracking-widest flex items-center gap-2">
                 <span className="text-xl">⚠️</span> Concierge Warning
               </h4>
               <p className="text-red-800 text-sm font-bold leading-relaxed">
                 Employees often demand their ROE immediately so they can apply for EI. However, because they are receiving salary continuance, they are technically not yet entitled to EI benefits. Issuing the ROE early is a compliance violation that Maple Managed proactively prevents for our clients.
               </p>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Continuance vs. Lump Sum</h2>
            <div className="overflow-hidden border border-slate-200 mb-12">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Salary Continuance</th>
                    <th className="px-6 py-4 text-center">Lump Sum Severance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 font-bold text-sm">
                  <tr>
                    <td className="px-6 py-4">CPP/EI Deductions</td>
                    <td className="px-6 py-4 text-center text-green-600">YES</td>
                    <td className="px-6 py-4 text-center text-red-600">NO</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Benefits Extension</td>
                    <td className="px-6 py-4 text-center">Usually Continued</td>
                    <td className="px-6 py-4 text-center">Usually Ceased</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Vacation Accrual</td>
                    <td className="px-6 py-4 text-center text-green-600">YES (Stat period)</td>
                    <td className="px-6 py-4 text-center text-red-600">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FAQ items={continuanceFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Continuance <span className="text-red-600">FAQ</span></h2>} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight">Need a Termination Package Review?</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Calculating severance vs. continuance math is a leading cause of costly ROE amendments.
              </p>
              <button 
                onClick={() => onNavigate('home', 'Severance Audit')}
                className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-xl"
              >
                Request Expert Review
              </button>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Concierge Advantage</p>
                <p className="text-xs text-slate-700 italic font-medium">
                  "Maple managed clients simply send us the termination letter. We calculate the exact tax withholdings and manage the ROE schedule automatically."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom Line */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">The Bottom Line</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="p-8 bg-white/5 border border-white/10">
              <p className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-2">Golden Rule</p>
              <p className="text-lg font-bold">Salary continuance is employment income. Pay it like a regular cheque with all deductions applied.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <p className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-2">Compliance Trap</p>
              <p className="text-lg font-bold">Filing an ROE before the continuance period ends is the fastest way to trigger a Service Canada investigation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalaryContinuancePage;
