
import React from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface WhyUsPageProps {
  onNavigate: (page: PageType) => void;
}

const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate }) => {
  const whyUsFaqs = [
    {
      q: "Why not just use an accountant?",
      a: "Accountants are great for annual taxes, but they often lack the infrastructure for day-to-day employee support, benefits tracking, and bi-weekly compliance checks. We fill that gap."
    },
    {
      q: "What if I make a mistake submitting hours?",
      a: "With Maple, our team reviews your inputs before processing. We flag anomalies (like a 100-hour week) and verify with you, preventing costly errors before they happen."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We utilize bank-grade encryption for all data transmission and storage. All data resides on Canadian servers, fully compliant with PIPEDA regulations."
    },
    {
      q: "Can I upgrade my service tier later?",
      a: "Yes. As you grow, you can seamlessly upgrade to our Professional or Enterprise tiers to add HR support, benefits administration, and more complex reporting."
    },
    {
      q: "How are you different from a PEO?",
      a: "A PEO becomes the 'employer of record'. With Maple, YOU remain the employer, retaining full control and culture, while we act as your back-office payroll department."
    },
    {
      q: "Do I get a dedicated account manager?",
      a: "Yes. On Professional and Enterprise plans, you are assigned a specific NPI-certified expert who knows your business, not a rotating call centre agent."
    },
    {
      q: "What happens if my main payroll contact goes on vacation?",
      a: "Since we act as your department, we have built-in redundancy. Our team ensures your payroll runs smoothly 52 weeks a year, regardless of your internal staff availability."
    },
    {
      q: "How do you ensure confidentiality for executive payroll?",
      a: "We can set up restricted-access pay runs for executives, ensuring that general HR staff or managers only see the data they are authorized to see."
    },
    {
      q: "What qualifications do your experts have?",
      a: "Our team members hold NPI (National Payroll Institute) designations, such as PCP (Payroll Compliance Professional) or CPM (Certified Payroll Manager)."
    }
  ];

  return (
    <div className="bg-white">
      {/* Updated Hero Section to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" 
            alt="Trusted Professional Payroll Support" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          {/* Subtle Red Edge Accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Our Philosophy
            </div>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Payroll is a <br/>
              <span className="text-red-500">Human</span> Relationship.
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium mb-10 max-w-xl">
              We treat payroll as an employee trust problem, not just a data entry problem. When your staff has a question, they talk to a dedicated person who cares.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/30"
              >
                Talk to an Expert
              </button>
              {/* Corrected navigation target from 'features' to 'what-we-do' to match PageType defined in App.tsx */}
              <button 
                onClick={() => onNavigate('what-we-do')}
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-none text-lg font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                See Our Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">The Maple Difference</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Why we're the preferred choice for high-compliance Canadian businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-none border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-none flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                🧠
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Expertise-as-a-Service</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We don't just provide a portal; we provide a brain. Our NPI-certified specialists proactively catch errors before they result in CRA penalties.
              </p>
            </div>
            <div className="bg-white p-10 rounded-none border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-none flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero-Liability Guarantee</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We take full legal responsibility for the accuracy of your remittances. If there's a filing error, we pay the fines and handle the CRA dispute.
              </p>
            </div>
            <div className="bg-white p-10 rounded-none border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-none flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                ❤️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Employee Well-being</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                By handling your staff's questions directly, we remove you as the middle-man. This speeds up resolutions and keeps your relationship positive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-none overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 text-white">A note from our founder</h2>
            <p className="text-slate-400 text-lg mb-8 italic leading-relaxed">
              "After working with over 50 companies helping them improve their Canadian payroll operations, I started Maple to better help those stressed over getting the calculations right, being compliant with remittances, doing T4s and all other filings. With so many payroll products available, business owners are overwhelmed and end up making costly mistakes."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/founder/100/100" className="w-16 h-16 border-2 border-red-600" alt="Founder" />
              <div>
                <p className="font-bold text-xl text-white">Arshad Merali</p>
                <p className="text-red-500 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-red-600 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80 text-white">Our Track Record</p>
              <div className="text-6xl lg:text-8xl font-extrabold mb-4 text-white">100,000+</div>
              <p className="text-xl font-medium mb-8 text-white/90">Employees managed across Canada</p>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }}
                className="bg-white text-slate-900 px-8 py-4 rounded-none font-bold hover:bg-slate-100 transition-colors shadow-xl"
              >
                Join the Maple Family
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ 
        items={whyUsFaqs} 
        title={
          <>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Philosophy <span className="text-red-600">FAQ</span></h2>
            <p className="text-lg text-slate-600 font-medium">Questions about how we partner with your business.</p>
          </>
        } 
      />

      {/* Next Steps */}
      <section className="py-32 text-center bg-white">
        <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-10 leading-snug">Still curious about our "Human-in-the-Middle" approach?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Corrected navigation target from 'features' to 'what-we-do' to match PageType defined in App.tsx */}
          <button 
            onClick={() => onNavigate('what-we-do')}
            className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-none font-bold hover:bg-slate-50 transition-all"
          >
            Explore Detailed Features
          </button>
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => document.getElementById('scorecard')?.scrollIntoView(), 100);
            }}
            className="px-10 py-4 bg-red-600 text-white rounded-none font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100"
          >
            Take the Payroll Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
