
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ProblemSolution from './components/ProblemSolution';
import WhyChooseUs from './components/WhyChooseUs';
import Comparison from './components/Comparison';
import Features from './components/Features';
import ICPSection from './components/ICPSection';
import Scorecard from './components/Scorecard';
import KnowledgePreview from './components/KnowledgePreview';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import ScrollToTop from './components/ScrollToTop';
import FeaturesPage from './pages/FeaturesPage';
import WhoWeServePage from './pages/WhoWeServePage';
import AuditServicePage from './pages/AuditServicePage';
import PayrollCalculatorPage from './pages/PayrollCalculatorPage';
import DIYCostCalculatorPage from './pages/DIYCostCalculatorPage';
import VacationPayArticlePage from './pages/VacationPayArticlePage';
import ResourcesPage from './pages/ResourcesPage';
import TaxableBenefitsPage from './pages/TaxableBenefitsPage';
import NonTaxableBenefitsPage from './pages/NonTaxableBenefitsPage';
import PayrollAuditPage from './pages/PayrollAuditPage';
import CanadianPayrollSoftwareGuide from './pages/CanadianPayrollSoftwareGuide';
import KeyTermsPage from './pages/KeyTermsPage';
import BuyerGuidePage from './pages/BuyerGuidePage';
import EmployerSignUpPage from './pages/EmployerSignUpPage';
import PricingPage from './pages/PricingPage';
import WhyUsPage from './pages/WhyUsPage';
import PortalsPage from './pages/PortalsPage';
import EmployerPortalPage from './pages/EmployerPortalPage';
import PublicHolidaysPage from './pages/PublicHolidaysPage';
import Payroll2026ChangesPage from './pages/Payroll2026ChangesPage';
import BreaksAndEatingPeriodsPage from './pages/BreaksAndEatingPeriodsPage';
import HolidayDuringVacationPage from './pages/HolidayDuringVacationPage';
import FormulaManifestPage from './pages/FormulaManifestPage';
import SalaryContinuancePage from './pages/SalaryContinuancePage';
import PayrollReviewArticlePage from './pages/PayrollReviewArticlePage';
import PayrollOperationalAuditPage from './pages/PayrollOperationalAuditPage';
import AuditManagementPage from './pages/AuditManagementPage';

export type PageType = 
  | 'home' 
  | 'who-we-serve' 
  | 'why-us'
  | 'what-we-do' 
  | 'audit' 
  | 'calculator' // Default (Current Year)
  | 'calculator-2024'
  | 'calculator-2025'
  | 'calculator-2026'
  | 'formula-manifest' // Hidden Expert Page
  | 'diy-calculator'
  | 'resources' 
  | 'vacation-pay-article' 
  | 'taxable-benefits' 
  | 'non-taxable-benefits'
  | 'payroll-audit'
  | 'best-payroll-software'
  | 'key-terms'
  | 'buyer-guide'
  | 'signup'
  | 'pricing'
  | 'portals'
  | 'employer-portal'
  | 'public-holidays-2026'
  | 'payroll-2026-changes'
  | 'breaks-and-eating-periods'
  | 'holiday-during-vacation'
  | 'salary-continuance'
  | 'payroll-review-guide'
  | 'survey'
  | 'audit-dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactContext, setContactContext] = useState<string>('');
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  useEffect(() => {
    if (pendingAnchor) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingAnchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setPendingAnchor(null);
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [currentPage, pendingAnchor]);

  const handleNavigate = (page: PageType, context?: string, anchor?: string) => {
    setContactContext(context || '');
    const targetAnchor = anchor || (page === 'home' && context ? 'contact' : null);
    setPendingAnchor(targetAnchor);
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      {currentPage !== 'employer-portal' && currentPage !== 'audit-dashboard' && (
        <Navbar 
          onNavigate={handleNavigate} 
          currentPage={currentPage} 
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
      )}
      
      <main className="flex-grow">
        <div key={currentPage} className="animate-page-enter">
          {currentPage === 'home' ? (
            <>
              <Hero onNavigate={handleNavigate} />
              <Logos />
              <ProblemSolution />
              <WhyChooseUs />
              <Features />
              <Comparison />
              <ICPSection />
              <Scorecard onNavigate={handleNavigate} />
              <KnowledgePreview onNavigate={handleNavigate} />
              <FAQ />
              <ContactForm context={contactContext} />
            </>
          ) : currentPage === 'what-we-do' ? (
            <FeaturesPage onNavigate={handleNavigate} />
          ) : currentPage === 'who-we-serve' ? (
            <WhoWeServePage onNavigate={handleNavigate} />
          ) : currentPage === 'why-us' ? (
            <WhyUsPage onNavigate={handleNavigate} />
          ) : currentPage === 'audit' ? (
            <AuditServicePage onNavigate={handleNavigate} />
          ) : currentPage === 'calculator' ? (
            <PayrollCalculatorPage onNavigate={handleNavigate} defaultYear={2025} />
          ) : currentPage === 'formula-manifest' ? (
            <FormulaManifestPage onNavigate={handleNavigate} />
          ) : currentPage === 'diy-calculator' ? (
            <DIYCostCalculatorPage onNavigate={handleNavigate} />
          ) : currentPage === 'resources' ? (
            <ResourcesPage onNavigate={handleNavigate} />
          ) : currentPage === 'taxable-benefits' ? (
            <TaxableBenefitsPage onNavigate={handleNavigate} />
          ) : currentPage === 'non-taxable-benefits' ? (
            <NonTaxableBenefitsPage onNavigate={handleNavigate} />
          ) : currentPage === 'payroll-audit' ? (
            <PayrollAuditPage onNavigate={handleNavigate} />
          ) : currentPage === 'best-payroll-software' ? (
            <CanadianPayrollSoftwareGuide onNavigate={handleNavigate} />
          ) : currentPage === 'key-terms' ? (
            <KeyTermsPage onNavigate={handleNavigate} />
          ) : currentPage === 'buyer-guide' ? (
            <BuyerGuidePage onNavigate={handleNavigate} />
          ) : currentPage === 'signup' ? (
            <EmployerSignUpPage onNavigate={handleNavigate} initialTier={contactContext} />
          ) : currentPage === 'pricing' ? (
            <PricingPage onNavigate={handleNavigate} />
          ) : currentPage === 'portals' ? (
            <PortalsPage onNavigate={handleNavigate} />
          ) : currentPage === 'employer-portal' ? (
            <EmployerPortalPage onNavigate={handleNavigate} />
          ) : currentPage === 'public-holidays-2026' ? (
            <PublicHolidaysPage onNavigate={handleNavigate} />
          ) : currentPage === 'payroll-2026-changes' ? (
            <Payroll2026ChangesPage onNavigate={handleNavigate} />
          ) : currentPage === 'breaks-and-eating-periods' ? (
            <BreaksAndEatingPeriodsPage onNavigate={handleNavigate} />
          ) : currentPage === 'holiday-during-vacation' ? (
            <HolidayDuringVacationPage onNavigate={handleNavigate} />
          ) : currentPage === 'salary-continuance' ? (
            <SalaryContinuancePage onNavigate={handleNavigate} />
          ) : currentPage === 'payroll-review-guide' ? (
            <PayrollReviewArticlePage onNavigate={handleNavigate} />
          ) : currentPage === 'survey' ? (
            <PayrollOperationalAuditPage onNavigate={handleNavigate} />
          ) : currentPage === 'audit-dashboard' ? (
            <AuditManagementPage onNavigate={handleNavigate} />
          ) : (
            <VacationPayArticlePage onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      {currentPage !== 'employer-portal' && currentPage !== 'audit-dashboard' && !isMobileMenuOpen && (
        <>
          <Footer onNavigate={handleNavigate} />
          <Assistant />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default App;
