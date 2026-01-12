import React from 'react';
import { PageType } from '../App';

interface TermsOfServicePageProps {
  onNavigate: (page: PageType) => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Terms of Service" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg">
              Service Agreement
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Terms of <br/>
              <span className="text-red-500">Service</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              The professional framework governing the partnership between Maple Managed Payroll Services Inc. and our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">At a Glance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-sm text-slate-600 font-medium">Month-to-month service terms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-sm text-slate-600 font-medium">100% CRA Compliance Guarantee.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-sm text-slate-600 font-medium">Mutual non-disclosure of data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-sm text-slate-600 font-medium">Dedicated support standard.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Legal Inquiries</p>
                <p className="text-sm font-bold text-slate-900">legal@maplepayroll.ca</p>
              </div>
            </div>
          </div>

          {/* Main Article Text */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-12 leading-relaxed italic">
                Last Revised: May 20, 2024
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Services Provided</h2>
              <p className="text-slate-600 mb-8">
                Maple Managed Payroll Services Inc. ("Maple") provides professional managed payroll services, including but not limited to: payroll calculation, source deduction remittances, year-end filing (T4/RL-1), Record of Employment (ROE) processing, and direct employee support via our concierge desk. Maple acts as an authorised representative for the client with the Canada Revenue Agency (CRA) and applicable provincial bodies.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. Client Responsibilities</h2>
              <p className="text-slate-600 mb-4">
                The accuracy of payroll is dependent on the data provided by the Client. The Client is responsible for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                <li>Providing accurate and timely hours, rate changes, and employee status updates.</li>
                <li>Ensuring sufficient funds are available in the designated bank account for payroll funding and remittances.</li>
                <li>Reviewing and providing management sign-off on payroll variances prior to commitment.</li>
                <li>Notifying Maple of any changes to business ownership or legal structure.</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Fees and Payment</h2>
              <p className="text-slate-600 mb-8">
                Service fees are billed monthly on the 1st of each month via the credit card provided on file. Our fees are comprised of a base monthly subscription plus a per-employee processing fee. Fees for additional services (e.g. rush processing, manual ROEs) are billed as incurred. All fees are in Canadian Dollars (CAD) and are subject to applicable taxes.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Compliance Guarantee</h2>
              <p className="text-slate-600 mb-8">
                Maple guarantees the accuracy of all source deduction remittances and statutory filings, provided that the Client has submitted all necessary information by our established deadlines. In the event of a penalty or interest charge resulting from a clerical error by Maple, we will assume 100% liability for the resulting costs and represent the Client in any ensuing CRA dispute.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">5. Term and Termination</h2>
              <p className="text-slate-600 mb-8">
                Unless otherwise specified in a custom Enterprise Agreement, services are provided on a month-to-month basis. Either party may terminate the agreement with 30 days' written notice. Upon termination, Maple will facilitate the export of employee data and provide a final year-to-date summary for transition to a new provider.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">6. Limitation of Liability</h2>
              <p className="text-slate-600 mb-8">
                Except as provided in the Compliance Guarantee, Maple's total liability to the Client for any claim arising out of the performance or non-performance of services shall not exceed the total fees paid by the Client in the three (3) months preceding the event giving rise to the claim.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">7. Governing Law</h2>
              <p className="text-slate-600 mb-8">
                This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
              </p>

              <div className="bg-slate-900 text-white p-10 mt-16 border-l-8 border-red-600">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Need a hard copy?</h3>
                <p className="text-slate-400 mb-8">
                  Clients may request a formal, signed Service Level Agreement (SLA) for their procurement and compliance records.
                </p>
                <button 
                  onClick={() => onNavigate('home')}
                  className="bg-white text-slate-900 px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors"
                >
                  Return to Headquarters
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;