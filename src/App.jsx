import { useEffect, useRef } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ContactDrawer from './components/overlays/ContactDrawer.jsx';
import NotifyDialog from './components/overlays/NotifyDialog.jsx';
import HomePage from './pages/HomePage.jsx';
import ItoiPage from './pages/ItoiPage.jsx';
import InstitutionalisePage from './pages/InstitutionalisePage.jsx';
import InvestablePage from './pages/InvestablePage.jsx';
import ScalePage from './pages/ScalePage.jsx';
import StudioAiPage from './pages/StudioAiPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import JourneyPage from './pages/JourneyPage.jsx';
import QuickDiagnosticPage from './pages/QuickDiagnosticPage.jsx';
import GrcDiagnosticPage from './pages/GrcDiagnosticPage.jsx';
import InvestabilityReportPage from './pages/InvestabilityReportPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import PartnerPage from './pages/PartnerPage.jsx';
import PublicationsPage from './pages/PublicationsPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import MediaPage from './pages/MediaPage.jsx';
import { initializeInteractions } from './runtime/initializeInteractions.js';

/**
 * Mount all route panels once, preserving the reference's hash navigation,
 * form state and animations. The effect owns the original interactive islands.
 */
export default function App() {
  const root = useRef(null);
  useEffect(() => initializeInteractions(root.current), []);
  return (
    <div ref={root}>
      <Header />
      <main id="app">
        <HomePage />
        <ItoiPage />
        <InstitutionalisePage />
        <InvestablePage />
        <ScalePage />
        <StudioAiPage />
        <ProductsPage />
        <JourneyPage />
        <QuickDiagnosticPage />
        <GrcDiagnosticPage />
        <InvestabilityReportPage />
        <LeadershipPage />
        <PartnerPage />
        <PublicationsPage />
        <CaseStudiesPage />
        <MediaPage />
      </main>
      <Footer />
      <ContactDrawer />
      <NotifyDialog />
    </div>
  );
}
