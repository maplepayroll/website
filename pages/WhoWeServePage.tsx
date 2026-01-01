
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface WhoWeServePageProps {
  onNavigate: (page: PageType) => void;
}

const WhoWeServePage: React.FC<WhoWeServePageProps> = ({ onNavigate }) => {
  const segments = [
    {
      title: "Medical & Dental Practices",
      icon: "🏥",
      desc: "High-compliance environments where employee trust is paramount. We manage complex hygienist and associate pay structures while you focus on patient care.",
      features: ["Associate pay splits", "Vacation pay tracking", "Uniform allowance handling"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Childcare & Early Learning",
      icon: "🧸",
      desc: "High-turnover environments with complex licensing and grant reporting needs. We manage your educator payroll and grant reconciliations so you can focus on the children.",
      features: ["Wage Enhancement Tracking", "Grant Reporting Support", "High-Turnover ROE Automation"],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Restaurants & Hospitality",
      icon: "🍽️",
      desc: "From controlled tips to seasonal hiring surges. We handle the unique complexities of the hospitality sector, ensuring tip allocations and stat holiday pay are 100% compliant.",
      features: ["Controlled Tip Allocation", "Stat Holiday Pay Logic", "Seasonal Surge Management"],
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Professional Service Firms",
      icon: "⚖️",
      desc: "Law firms, accounting practices, and consulting agencies. We provide the high-end, confidential support your partners and staff expect.",
      features: ["Disbursement tracking", "Partner draw support", "Multi-provincial filings"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Fitness & Wellness Centers",
      icon: "💪",
      desc: "Managing personal trainer commissions and diverse class schedules is an admin nightmare. We automate the math for your high-performance team across multiple locations.",
      features: ["Trainer Commission Splitting", "Multi-Location Pay Runs", "Sub-contractor Management"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Tech & Remote Teams",
      icon: "💻",
      desc: "Scaling fast and hiring across Canada? We handle the cross-provincial tax complexities (Ontario, BC, Alberta) so your HR can stay lean.",
      features: ["Remote work compliance", "Equity/Stock Option pay", "Inter-provincial EHT"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Non-Profits & Charities",
      icon: "🤝",
      desc: "Managing grants and restricted funding? We help track labour costs accurately for your reporting requirements.",
      features: ["Grant-specific reporting", "T4A filings", "CRA charity compliance"],
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  const industryFaqs = [
    {
      q: "Do you support medical professional corporations?",
      a: "Yes. We specialize in the unique structure of medical corporations, including handling dividend payments, associate splits, and complex vacation pay rules for hygienists/staff."
    },
    {
      q: "How do you handle tips in restaurants?",
      a: "We manage both controlled tips (which are subject to CPP/EI) and direct tips. Our specialists ensure that your business stays compliant with CRA's latest rulings on gratuities, which varies significantly between provinces like Quebec and the rest of Canada."
    },
    {
      q: "Can you manage daycare wage enhancement grants?",
      a: "Absolutely. We understand the administrative burden of tracking and reporting on provincial wage enhancement grants. We help reconcile these funds so your reporting to the Ministry is always accurate."
    },
    {
      q: "Can you handle remote workers in Quebec?",
      a: "Yes. We manage all Quebec-specific requirements including RL-1s, CNESST, QPP, and QPIP, ensuring full compliance for your Quebec-based remote staff."
    },
    {
      q: "I have 2 employees, is my business too small?",
      a: "Not at all. We support small businesses starting from their very first hire. Our 'Lil' Kim' tier is designed exactly for smaller teams needing professional support."
    },
    {
      q: "How do you handle multi-provincial payroll for remote companies?",
      a: "We are experts in cross-provincial compliance. If you have employees in BC, Ontario, and Alberta, we manage the specific EHT, Workers Comp, and tax rates for each jurisdiction within a single unified pay run."
    },
    {
      q: "Can you manage benefits reconciliation for larger teams?",
      a: "Yes. We don't just deduct premiums; we reconcile your monthly group insurance invoices against your payroll to ensure you aren't overpaying for terminated employees or missing deductions for new hires."
    },
    {
      q: "What security measures do you take to protect our sensitive employee data?",
      a: "We use bank-grade 256-bit encryption and all data resides on secure Canadian servers. We are fully PIPEDA compliant and employ multi-factor authentication for all concierge-level access."
    },
    {
      q: "Do you handle WSIB/WorkSafeBC filings and rate audits?",
      a: "Yes. We manage the periodic reporting and remittances to all provincial safety boards. We also perform an annual classification audit to ensure your business is being billed at the correct industry rate."
    },
    {
      q: "How long does it take to switch from a traditional provider like ADP or Ceridian?",
      a: "The migration typically takes 2-4 weeks. We handle the data export, parallel pay runs for testing, and the opening of new CRA/Provincial authorizations so there is zero interruption for your staff."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
            alt="Business sectors we serve" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Industry Solutions
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Built for <br/>
              <span className="text-red-500">Visionary</span> Business Owners
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              Maple is more than just a utility; it's a strategic partner for businesses where accuracy and support are non-negotiable.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Get an Industry Quote
              </button>
              <button 
                onClick={() => onNavigate('why-us')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Why Choose Maple
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-40">
        {segments.map((s, i) => (
          <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="text-5xl mb-6">{s.icon}</div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">{s.title}</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">{s.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-none border border-slate-100">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
               <div className={`absolute -inset-4 bg-red-600/5 rounded-none transition-transform group-hover:rotate-0 duration-500 ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}></div>
               <img src={s.image} alt={s.title} className="relative z-10 rounded-none shadow-2xl aspect-[4/3] object-cover w-full" />
            </div>
          </div>
        ))}
      </section>

      {/* The "Sweet Spot" section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Our <span className="text-red-600">Sweet Spot</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                While we can handle larger teams, our services are optimized for small-to-medium enterprises who want a dedicated department feel without the internal overhead.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="p-10 rounded-none bg-white/5 border border-white/10 text-center">
                 <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-6">Team Size</p>
                 <p className="text-4xl lg:text-5xl font-extrabold mb-2 text-white">5 - 75</p>
                 <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Employees</p>
              </div>
              <div className="p-10 rounded-none bg-white/5 border border-white/10 text-center">
                 <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-6">Geography</p>
                 <p className="text-4xl lg:text-5xl font-extrabold mb-2 text-white">13/13</p>
                 <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Provinces & Territories</p>
              </div>
              <div className="p-10 rounded-none bg-white/5 border border-white/10 text-center">
                 <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-6">Retention</p>
                 <p className="text-4xl lg:text-5xl font-extrabold mb-2 text-white">98.4%</p>
                 <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry FAQ */}
      <FAQ 
        items={industryFaqs} 
        title={
          <>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Industry <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Common questions from the sectors we serve.</p>
          </>
        } 
      />

      {/* CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4 bg-white">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Ready for a payroll partner who <span className="text-red-600">understands</span> your sector?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
            }} 
            className="px-12 py-5 bg-red-600 text-white rounded-none text-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200 transform hover:scale-105"
          >
            Get an Industry-Specific Quote
          </button>
          <button 
             onClick={() => onNavigate('home')}
             className="px-12 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-none text-xl font-bold hover:bg-slate-50 transition-all"
          >
            Explore Case Studies
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServePage;
