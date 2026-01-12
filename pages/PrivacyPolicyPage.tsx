import React from 'react';
import { PageType } from '../App';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageType) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section - Standardised to match Home Page */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Privacy and Security" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-red-600 text-white text-xs font-bold tracking-[0.2em] mb-8 uppercase shadow-lg shadow-red-900/20">
              Legal Compliance
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Privacy <br/>
              <span className="text-red-500">Policy</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              How Maple Managed Payroll Services Inc. protects your business and employee data in accordance with Canadian law.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Quick Nav */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Quick Summary</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">🍁</span>
                  <span className="text-sm text-slate-600 font-medium">Data resides on Canadian servers only.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">🔒</span>
                  <span className="text-sm text-slate-600 font-medium">Full PIPEDA & SOC2 compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">🛡️</span>
                  <span className="text-sm text-slate-600 font-medium">Bank-grade 256-bit encryption.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">🚫</span>
                  <span className="text-sm text-slate-600 font-medium">We never sell or share your data.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Privacy Officer</p>
                <p className="text-sm font-bold text-slate-900">privacy@maplepayroll.ca</p>
              </div>
            </div>
          </div>

          {/* Main Article Text */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Last Updated: May 20, 2024
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Introduction</h2>
              <p className="text-slate-600 mb-8">
                Maple Managed Payroll Services Inc. ("Maple", "we", "us", or "our") is committed to protecting the privacy and security of the personal information of our clients and their employees. This Privacy Policy describes how we collect, use, disclose, and protect personal information in accordance with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and other applicable Canadian provincial privacy laws.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. Accountability</h2>
              <p className="text-slate-600 mb-8">
                We are responsible for the personal information under our control. We have designated a Privacy Officer who is accountable for our compliance with this Privacy Policy and applicable privacy laws. Any inquiries or concerns regarding our privacy practices should be directed to our Privacy Officer at the contact information provided above.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                In order to provide managed payroll services, we collect various types of personal information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                <li><strong>Identity Information:</strong> Name, Social Insurance Number (SIN), date of birth, and home address.</li>
                <li><strong>Financial Information:</strong> Bank account details for direct deposit, salary/wage information, and tax brackets.</li>
                <li><strong>Employment Information:</strong> Job titles, start dates, termination dates, and benefit enrolment status.</li>
                <li><strong>Tax Information:</strong> TD1 forms, provincial tax forms, and record of remittances to the CRA and Revenu Québec.</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Purposes for Collection</h2>
              <p className="text-slate-600 mb-4">
                We collect personal information solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
                <li>Processing payroll and ensuring accurate direct deposits.</li>
                <li>Calculating and remitting source deductions to the CRA and provincial tax authorities.</li>
                <li>Filing Records of Employment (ROE) and year-end tax slips (T4, T4A, RL-1).</li>
                <li>Answering employee inquiries via our "Human-in-the-Middle" concierge service.</li>
                <li>Ensuring compliance with Canadian labour standards and tax laws.</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">5. Consent</h2>
              <p className="text-slate-600 mb-8">
                We collect personal information only with the consent of the individual, except where otherwise permitted or required by law. As a service provider, we rely on our clients (the employers) to obtain the necessary consent from their employees to share their personal information with us for the purpose of managing payroll.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">6. Data Residency & Safeguards</h2>
              <p className="text-slate-600 mb-6">
                <strong>Data Residency:</strong> All personal information collected by Maple is stored and processed on secure servers located exclusively within Canada. We do not transfer payroll data to jurisdictions outside of Canada.
              </p>
              <p className="text-slate-600 mb-8">
                <strong>Security:</strong> We employ bank-grade security measures to protect personal information, including 256-bit SSL encryption for data in transit and at rest, multi-factor authentication (MFA) for all staff access, and regular SOC2-compliant security audits.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">7. Disclosure to Third Parties</h2>
              <p className="text-slate-600 mb-8">
                We do not sell, rent, or trade personal information to third parties. We only disclose personal information to authorised government agencies (CRA, Revenu Québec, WSIB/WCB) as required for tax and compliance purposes, or to third-party service providers (such as bank clearing houses) necessary to complete pay transactions.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">8. Access and Correction</h2>
              <p className="text-slate-600 mb-8">
                Individuals have the right to access the personal information we hold about them and to request corrections if it is inaccurate or incomplete. Employees should typically contact their employer first, but Maple will facilitate such requests in accordance with our client agreements and applicable law.
              </p>

              <div className="bg-slate-900 text-white p-10 mt-16 border-l-8 border-red-600">
                <h3 className="text-xl font-bold mb-4">Questions about this policy?</h3>
                <p className="text-slate-400 mb-8">
                  Our dedicated privacy team is available to discuss our data handling practices and how we protect your business.
                </p>
                <button 
                  onClick={() => onNavigate('home')}
                  className="bg-white text-slate-900 px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors"
                >
                  Contact Privacy Team
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;