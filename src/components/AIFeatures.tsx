import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { Sparkles, Camera, Mic, TrendingUp, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, Cpu, Zap } from 'lucide-react';

interface AIFeaturesProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const AIFeatures: React.FC<AIFeaturesProps> = ({ currentLang, currency, onOpenDemo }) => {
  const t = TRANSLATIONS[currentLang].aiFeatures;
  const [activeTab, setActiveTab] = useState<'scan' | 'voice'>('scan');
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<any>(null);

  const handleRunSimulation = (type: 'scan' | 'voice') => {
    setActiveTab(type);
    setSimulating(true);
    setSimResult(null);
    setTimeout(() => {
      setSimulating(false);
      if (type === 'scan') {
        setSimResult({
          type: 'invoice',
          supplier: 'Grossiste CFAO Abidjan / Dantokpa',
          date: '31/10/2026',
          items: [
            { name: 'Ciment CPA 42.5 (Sac 50kg)', qty: 50, price: 4800, total: 240000 },
            { name: 'Tôles Ondulées 3m (Calibre 28)', qty: 30, price: 6500, total: 195000 },
          ],
          totalAmount: 435000,
          status: 'Validé & Synchronisé (ZAP Dette Fournisseur)',
        });
      } else {
        setSimResult({
          type: 'voice',
          transcript: '« 3 batteries moto 12V et 2 bidons huile 5L pour client Atelier Koffi, crédit 40% »',
          parsed: {
            customer: 'Atelier Koffi (VIP)',
            items: [
              { name: 'Batterie Moto 12V 9Ah', qty: 3, price: 12500, total: 37500 },
              { name: 'Huile Moteur 5L Semi-Synthèse', qty: 2, price: 14000, total: 28000 },
            ],
            total: 65500,
            paid: 26200,
            credit: 39300,
          },
          status: 'Ticket thermique généré & Dossier ZAP mis à jour',
        });
      }
    }, 1200);
  };

  return (
    <section id="ai-features" className="py-24 bg-[#0A2540] relative overflow-hidden scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D4B2]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,212,178,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            {t.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: Vision OCR */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-[#00D4B2]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,178,0.1)] group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4B2] to-[#0A2540] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4B2] transition-colors">
              {t.visionTitle}
            </h3>
            <p className="text-sm font-semibold text-[#00D4B2] mb-3">{t.visionSubtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.visionDesc}
            </p>
          </div>

          {/* Pillar 2: Voice Commerce */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-[#00D4B2]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,178,0.1)] group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4B2] to-[#0A2540] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Mic className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4B2] transition-colors">
              {t.voiceTitle}
            </h3>
            <p className="text-sm font-semibold text-[#00D4B2] mb-3">{t.voiceSubtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.voiceDesc}
            </p>
          </div>

          {/* Pillar 3: Stock Prediction */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-[#00D4B2]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,178,0.1)] group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4B2] to-[#0A2540] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4B2] transition-colors">
              {t.stockPredictionTitle}
            </h3>
            <p className="text-sm font-semibold text-[#00D4B2] mb-3">{t.stockPredictionSubtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.stockPredictionDesc}
            </p>
          </div>

          {/* Pillar 4: Anti-Coulage */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-[#00D4B2]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,178,0.1)] group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4B2] to-[#0A2540] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4B2] transition-colors">
              {t.auditTitle}
            </h3>
            <p className="text-sm font-semibold text-[#00D4B2] mb-3">{t.auditSubtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.auditDesc}
            </p>
          </div>
        </div>

        {/* Technical Architecture Boundary Notice */}
        <div className="mb-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 text-xs text-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#00D4B2] font-semibold shrink-0">
            <Cpu className="w-4 h-4" />
            <span>{currentLang === 'fr' ? 'Architecture Technique :' : 'Technical Architecture:'}</span>
          </div>
          <div className="flex-1 text-[11px] text-slate-400 space-y-1">
            <p>
              <strong className="text-white">{currentLang === 'fr' ? 'Local sur appareil (Offline) :' : 'Local on device (Offline):'}</strong>{' '}
              {currentLang === 'fr'
                ? 'Caisse POS, catalogue, calculs de panier, reçus thermiques Bluetooth et base SQLite.'
                : 'POS register, product catalog, cart calculations, Bluetooth printing, and SQLite database.'}
            </p>
            <p>
              <strong className="text-white">{currentLang === 'fr' ? 'Services connectés (Cloud API) :' : 'Connected Services (Cloud API):'}</strong>{' '}
              {currentLang === 'fr'
                ? 'Analyse optique de factures manuscrites (Gemini Vision), saisie vocale et sauvegardes distantes.'
                : 'Handwritten invoice optical parsing (Gemini Vision), speech transcription, and cloud backups.'}
            </p>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-1 rounded shrink-0">
            {currentLang === 'fr' ? 'Banc d\'essai interactif' : 'Interactive Test Bench'}
          </span>
        </div>

        {/* Live Interactive AI Playground Widget */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0A2540] border-2 border-[#00D4B2]/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,212,178,0.15)] relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#00D4B2] text-sm font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4" />
                <span>{currentLang === 'fr' ? 'Simulateur de Démonstration' : 'Interactive Demo Simulator'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.demoTitle}</h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleRunSimulation('scan')}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'scan'
                    ? 'bg-[#00D4B2] text-[#0A2540] shadow-[0_0_20px_rgba(0,212,178,0.4)]'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Camera className="w-4 h-4" />
                {t.demoScanBtn}
              </button>
              <button
                onClick={() => handleRunSimulation('voice')}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'voice'
                    ? 'bg-[#00D4B2] text-[#0A2540] shadow-[0_0_20px_rgba(0,212,178,0.4)]'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Mic className="w-4 h-4" />
                {t.demoVoiceBtn}
              </button>
            </div>
          </div>

          {/* Simulation Output Box */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 min-h-[220px] flex flex-col justify-center relative">
            {simulating ? (
              <div className="flex flex-col items-center justify-center py-10">
                <RefreshCw className="w-10 h-10 text-[#00D4B2] animate-spin mb-4" />
                <p className="text-slate-300 font-medium animate-pulse">
                  {activeTab === 'scan' ? t.scanningText : t.voiceText}
                </p>
              </div>
            ) : simResult ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4B2]" />
                    <span className="text-white font-bold text-sm sm:text-base">{t.demoResultTitle}</span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#00D4B2]/20 text-[#00D4B2] font-semibold">
                    {simResult.status}
                  </span>
                </div>

                {simResult.type === 'invoice' ? (
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>{currentLang === 'fr' ? 'Fournisseur :' : 'Supplier:'} <strong className="text-white">{simResult.supplier}</strong></span>
                      <span>{currentLang === 'fr' ? 'Date :' : 'Date:'} <strong className="text-white">{simResult.date}</strong></span>
                    </div>
                    <div className="bg-slate-900 rounded-xl p-4 divide-y divide-slate-800">
                      {simResult.items.map((item: any, idx: number) => (
                        <div key={idx} className="py-2.5 flex justify-between items-center text-sm">
                          <div>
                            <span className="text-slate-200 font-medium">{item.name}</span>
                            <span className="text-xs text-slate-400 block">Qté : {item.qty} × {item.price.toLocaleString()} CFA</span>
                          </div>
                          <span className="text-[#00D4B2] font-bold">{item.total.toLocaleString()} CFA</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-2 font-bold text-white">
                      <span>{currentLang === 'fr' ? 'Total Facture :' : 'Total Invoice:'}</span>
                      <span className="text-xl text-[#00D4B2]">{simResult.totalAmount.toLocaleString()} CFA</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-slate-300 italic text-sm">
                      {simResult.transcript}
                    </div>
                    <div className="bg-slate-900 rounded-xl p-4 space-y-2">
                      <div className="text-xs text-slate-400 font-medium">Client : <strong className="text-white">{simResult.parsed.customer}</strong></div>
                      {simResult.parsed.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between text-sm text-slate-200">
                          <span>{item.qty}x {item.name}</span>
                          <span className="font-semibold">{item.total.toLocaleString()} CFA</span>
                        </div>
                      ))}
                      <div className="border-t border-slate-800 pt-2 flex justify-between text-xs font-semibold">
                        <span className="text-slate-400">{currentLang === 'fr' ? 'Versement (40%) :' : 'Deposit (40%):'} <span className="text-[#00D4B2]">{simResult.parsed.paid.toLocaleString()} CFA</span></span>
                        <span className="text-amber-400">Crédit ZAP : {simResult.parsed.credit.toLocaleString()} CFA</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Zap className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400 text-sm mb-4">
                  {t.defaultPrompt}
                </p>
                <button
                  onClick={() => handleRunSimulation('scan')}
                  className="px-6 py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] font-bold text-sm inline-flex items-center gap-2 hover:bg-[#00bda0] transition-colors"
                >
                  {t.testAiBtn} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
