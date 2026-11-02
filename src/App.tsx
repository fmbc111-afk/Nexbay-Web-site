import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { Language, Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualModuleShowcase } from './components/DualModuleShowcase';
import { IndustrySolutions } from './components/IndustrySolutions';
import { WhyDifferent } from './components/WhyDifferent';
import { AIFeatures } from './components/AIFeatures';
import { BeforeAfter } from './components/BeforeAfter';
import { ExecutiveCockpit } from './components/ExecutiveCockpit';
import { MultiStoreAndSecurity } from './components/MultiStoreAndSecurity';
import { InteractiveDeviceDemo } from './components/InteractiveDeviceDemo';
import { BentoGridFeatures } from './components/BentoGridFeatures';
import { HardwareEcosystem } from './components/HardwareEcosystem';
import { QuickStartGuide } from './components/QuickStartGuide';
import { RoiCalculator } from './components/RoiCalculator';
import { SocialProof } from './components/SocialProof';
import { Faq } from './components/Faq';
import { DownloadCta } from './components/DownloadCta';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>('XOF');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [apkNoticeVisible, setApkNoticeVisible] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A2540] text-slate-100 flex flex-col font-sans selection:bg-[#00D4B2] selection:text-[#0A2540]">
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenDemo={() => setDemoModalOpen(true)}
        onApkDownload={() => setApkNoticeVisible(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
          onApkDownload={() => setApkNoticeVisible(true)}
        />

        {/* 2. Dual Engine Architecture (Module A Commerce & Module B Services) */}
        <DualModuleShowcase
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 3. Industry Vertical Solutions (Quincaillerie, Moto/Garage, SAV High-Tech, Mode/Couture) */}
        <IndustrySolutions
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 4. Pourquoi Nexbay est Différent (Liaisons ZAP & Simulateur d'Investissement In-App) */}
        <WhyDifferent
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 5. Nexbay Intelligence de Terrain (IA Multimodale Gemini, OCR Factures & Vente Vocale) */}
        <AIFeatures
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 6. Transformation Radicale (Avant le Carnet Papier vs Avec Nexbay) */}
        <BeforeAfter
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 7. Le Cockpit Décisionnel du Propriétaire (RH, Produits Gagnants, Tranches, Factures & Dépenses) */}
        <ExecutiveCockpit
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 7. Multi-Boutiques Centralisées & Sécurité Téléphone Volé / Cloud Restore */}
        <MultiStoreAndSecurity
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 8. Live Functional Simulator */}
        <InteractiveDeviceDemo
          currentLang={currentLang}
          currency={currency}
        />

        {/* 9. Deep Bento Grid Features */}
        <BentoGridFeatures
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 10. Hardware Ecosystem & Bluetooth Printers */}
        <HardwareEcosystem
          currentLang={currentLang}
        />

        {/* 11. Quick Start Guide (Opérationnel en 5 Minutes) */}
        <QuickStartGuide
          currentLang={currentLang}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 12. Measurable ROI Calculator */}
        <RoiCalculator
          currentLang={currentLang}
          currency={currency}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 13. Merchant Stories & Trust */}
        <SocialProof
          currentLang={currentLang}
        />

        {/* 14. Comprehensive FAQ */}
        <Faq
          currentLang={currentLang}
        />

        {/* 15. Final Conversion & Download CTA */}
        <DownloadCta
          currentLang={currentLang}
          onOpenDemo={() => setDemoModalOpen(true)}
          onApkDownload={() => setApkNoticeVisible(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Interactive Live Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        currentLang={currentLang}
        currency={currency}
        onApkDownload={() => setApkNoticeVisible(true)}
      />

      {apkNoticeVisible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 items-start gap-3 rounded-2xl border border-[#00D4B2]/40 bg-[#081e35] px-4 py-4 text-sm text-slate-100 shadow-2xl shadow-black/40"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4B2]" aria-hidden="true" />
          <p className="flex-1">
            {currentLang === 'fr'
              ? 'Le téléchargement de l’APK est temporairement suspendu pendant la stabilisation de l’application. Il sera bientôt disponible.'
              : 'APK downloads are temporarily paused while we stabilize the app. It will be available again soon.'}
          </p>
          <button
            type="button"
            onClick={() => setApkNoticeVisible(false)}
            className="rounded-lg px-2 py-1 font-semibold text-[#00D4B2] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D4B2]"
            aria-label={currentLang === 'fr' ? 'Fermer le message' : 'Dismiss message'}
          >
            {currentLang === 'fr' ? 'Fermer' : 'Dismiss'}
          </button>
        </div>
      )}
    </div>
  );
}
