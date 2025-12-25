
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
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import ScrollToTop from './components/ScrollToTop';
import FeaturesPage from './pages/FeaturesPage';
import WhyUsPage from './pages/WhyUsPage';
import WhoWeServePage from './pages/WhoWeServePage';
import AuditServicePage from './pages/AuditServicePage';
import CRADeadlinesPage from './pages/CRADeadlinesPage';
import PayrollCalculatorPage from './pages/PayrollCalculatorPage';
import VacationPayArticlePage from './pages/VacationPayArticlePage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export type PageType = 'home' | 'what-we-do' | 'why-us' | 'who-we-serve' | 'audit' | 'cra-deadlines' | 'calculator' | 'vacation-pay-article' | 'resources' | 'pricing' | 'privacy-policy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Logos />
            <ProblemSolution />
            <WhyChooseUs />
            <Features />
            <Comparison />
            <ICPSection />
            <Scorecard />
            <FAQ />
            <ContactForm />
          </>
        ) : currentPage === 'what-we-do' ? (
          <FeaturesPage onNavigate={setCurrentPage} />
        ) : currentPage === 'why-us' ? (
          <WhyUsPage onNavigate={setCurrentPage} />
        ) : currentPage === 'who-we-serve' ? (
          <WhoWeServePage onNavigate={setCurrentPage} />
        ) : currentPage === 'audit' ? (
          <AuditServicePage onNavigate={setCurrentPage} />
        ) : currentPage === 'cra-deadlines' ? (
          <CRADeadlinesPage onNavigate={setCurrentPage} />
        ) : currentPage === 'calculator' ? (
          <PayrollCalculatorPage onNavigate={setCurrentPage} />
        ) : currentPage === 'resources' ? (
          <ResourcesPage onNavigate={setCurrentPage} />
        ) : currentPage === 'pricing' ? (
          <PricingPage onNavigate={setCurrentPage} />
        ) : currentPage === 'privacy-policy' ? (
          <PrivacyPolicyPage onNavigate={setCurrentPage} />
        ) : (
          <VacationPayArticlePage onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Assistant />
      <ScrollToTop />
    </div>
  );
};

export default App;
