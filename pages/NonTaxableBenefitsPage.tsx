
import React, { useEffect } from 'react';
import { PageType } from '../App';
import FAQ from '../components/FAQ';

interface NonTaxableBenefitsPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const NonTaxableBenefitsPage: React.FC<NonTaxableBenefitsPageProps> = ({ onNavigate }) => {
  const nonTaxableFaqs = [
    {
      q: "Can I give a $500 non-cash gift tax-free?",
      a: "Yes. The CRA allows employers to provide non-cash gifts (like a physical item) up to a combined value of $500 per year tax-free. Gift cards are excluded from this rule."
    },
    {
      q: "Is employer-paid tuition taxable?",
      a: "Not if the training primarily benefits the employer (e.g., job-related skill upgrades). It is only taxable if it is for personal interest."
    },
    {
      q: "Are employee counseling services taxable?",
      a: "Generally no. Employee Assistance Programs (EAP) or specialized counseling for mental health or career outplacement are considered non-taxable benefits."
    },
    {
      q: "Is employer-provided safety equipment taxable?",
      a: "No. Mandatory safety gear like steel-toed boots, high-visibility vests, or protective eyewear is non-taxable as it is a requirement for the job."
    },
    {
      q: "Can I reimburse for professional membership dues?",
      a: "Yes. If membership in a professional association (like a Law Society or CPA body) is a requirement for the employee's position, the reimbursement is non-taxable."
    },
    {
      q: "Are relocation expenses taxable?",
      a: "Reimbursing reasonable moving expenses for an employee who relocates for work is generally non-taxable. This includes moving services and temporary living expenses."
    },
    {
      q: "What about in-house meals provided for late work?",
      a: "Occasional meals provided to employees working overtime are non-taxable, provided the value is reasonable and it happens infrequently."
    },
    {
      q: "Is a 'Work-from-Home' allowance taxable?",
      a: "It depends. If it's a flat monthly 'allowance,' it is taxable. If it's a reimbursement for specific tools or ergonomic equipment, it is typically non-taxable."
    },
    {
      q: "Are uniforms provided by the employer taxable?",
      a: "No, as long as the uniform is distinctive (has a logo) or is required for safety/hygiene and is not suitable for regular daily wear."
    },
    {
      q: "How do non-taxable benefits differ in Quebec?",
      a: "Quebec has unique rules. For example, employer-paid health and dental premiums are NON-TAXABLE federally but are TAXABLE for Quebec provincial income tax."
    }
  ];

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "CRA Non-Taxable Benefits Master Guide",
      "description": "Learn which employee perks can be provided tax-free in Canada, including health plans, non-cash gifts, and tuition.",
      "author": { "@type": "Person", "name": "Arshad Merali" }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center opacity-40" alt="Non Taxable Rewards" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <button onClick={() => onNavigate('resources')} className="text-slate-400 font-black uppercase text-xs mb-8 hover:text-white transition-colors">← Knowledge Hub</button>
            <h1 className="text-4xl lg:text-[5.5rem] font-black text-white mb-8 leading-none tracking-tighter uppercase">
              Tax-Free <span className="text-red-500">Rewards.</span>
            </h1>
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-6 max-w-2xl">
              <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                Non-taxable benefits in Canada allow employers to reward staff without increasing their tax bill. Key examples include employer-paid health and dental premiums, non-cash gifts under $500, and job-related training. Quebec has specific rules where health premiums remain taxable for provincial tax.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">The Efficiency Guide</h2>
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="font-bold text-slate-700">Leveraging non-taxable benefits is the most cost-effective way to build company culture.</p>
          <ul className="space-y-4 text-slate-600 font-medium">
            <li>• Private Health Services Plans (PHSP)</li>
            <li>• Counselor or Employee Assistance Programs</li>
            <li>• Professional Membership Dues</li>
          </ul>
        </div>
        <FAQ items={nonTaxableFaqs} title={<h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Non-Taxable <span className="text-red-600">FAQ</span></h2>} />
      </section>
    </div>
  );
};

export default NonTaxableBenefitsPage;
