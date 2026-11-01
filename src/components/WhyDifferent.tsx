import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { formatCurrency, calculateInvestmentSimulator } from '../utils/calculator';
import {
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users2,
  ArrowRightLeft,
  Calculator,
  ShieldCheck,
  Smartphone,
  Layers,
  ArrowRight,
  Sparkles,
  FileCheck,
  Eye,
  Lock,
} from 'lucide-react';

interface WhyDifferentProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const WhyDifferent: React.FC<WhyDifferentProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];

  // Interactive State for ZAP Live Demonstration
  const [zapAmountPaid, setZapAmountPaid] = useState<number>(250000);
  const [zapTotalDebt, setZapTotalDebt] = useState<number>(1000000);
  const [zapPaymentLogged, setZapPaymentLogged] = useState<boolean>(false);

  // Interactive State for In-App Investment Simulator
  const defaultPurchaseBudget = currency === 'XOF' ? 500000 : currency === 'EUR' ? 750 : 800;
  const defaultTransport = currency === 'XOF' ? 50000 : currency === 'EUR' ? 75 : 80;
  const defaultUnits = 100;
  const defaultTargetPrice = currency === 'XOF' ? 8500 : currency === 'EUR' ? 13 : 14;

  const [simPurchase, setSimPurchase] = useState<number>(defaultPurchaseBudget);
  const [simTransport, setSimTransport] = useState<number>(defaultTransport);
  const [simUnits, setSimUnits] = useState<number>(defaultUnits);
  const [simTargetPrice, setSimTargetPrice] = useState<number>(defaultTargetPrice);

  const simulation = calculateInvestmentSimulator(simPurchase, simTransport, simUnits, simTargetPrice);

  const handleSimulateZapPayment = () => {
    setZapPaymentLogged(true);
  };

  const handleResetZap = () => {
    setZapPaymentLogged(false);
  };

  const currentZapBalance = zapPaymentLogged ? zapTotalDebt - zapAmountPaid : zapTotalDebt;

  return (
    <section id="why-different" className="py-20 lg:py-28 bg-[#06182b] text-white relative border-y border-[#163c63]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#184570]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/40 text-xs font-semibold text-[#00D4B2] mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyDifferent.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {t.whyDifferent.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.whyDifferent.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 1: LA LIAISON ZAP (DOSSIER SYNCHRONISÉ ANTI-LITIGE DETTES/CRÉDITS) */}
        {/* ========================================================================= */}
        <div className="bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Explanation */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Technologie Exclusive Nexbay</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.whyDifferent.zapTitle}
              </h3>

              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.whyDifferent.zapSubtitle}
              </p>

              {/* The Real Problem */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Le Problème Réel sur le Terrain :</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.whyDifferent.zapProblem}
                </p>
              </div>

              {/* The Technological Solution */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4B2]" />
                  <span>La Solution ZAP Déployée :</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.whyDifferent.zapSolution}
                </p>
              </div>

              {/* The Direct Financial & Relationship Impact */}
              <div className="p-3.5 bg-[#051525] rounded-xl border border-[#163c63] text-xs text-slate-200 space-y-1">
                <span className="text-[#00D4B2] font-bold block">Résultat Concret :</span>
                <p className="text-slate-300">{t.whyDifferent.zapImpact}</p>
              </div>
            </div>

            {/* Right Live Interactive ZAP Demonstration */}
            <div className="lg:col-span-6 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-5">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00D4B2] animate-ping" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Dossier Partagé ZAP en Direct
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00D4B2] bg-[#0c2b4c] px-2 py-0.5 rounded">
                  Liaison ID #ZAP-9921
                </span>
              </div>

              {/* Dual Sync View: Merchant A <---> Supplier B */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* User 1: Commerçant A */}
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#16426d] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#00D4B2]">Commerçant A (Boutique)</span>
                    <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-300 font-semibold">
                    {currentLang === 'fr' ? 'Quincaillerie Partenaire' : 'Partner Hardware Store'}
                  </p>
                  <div className="bg-[#06182a] p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block">Dette Restante Due :</span>
                    <span className="text-sm font-black text-amber-300 font-mono">
                      {formatCurrency(currentZapBalance, currency, currentLang)}
                    </span>
                  </div>
                  <span className="text-[9px] text-emerald-400 block font-mono">
                    ✓ Écran Synchronisé en temps réel
                  </span>
                </div>

                {/* User 2: Fournisseur B */}
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#16426d] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-cyan-300">Partenaire B (Fournisseur)</span>
                    <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-300 font-semibold">
                    {currentLang === 'fr' ? 'Grossiste Pièces & Matériel' : 'Wholesale Supplier'}
                  </p>
                  <div className="bg-[#06182a] p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block">Créance à Recevoir :</span>
                    <span className="text-sm font-black text-cyan-300 font-mono">
                      {formatCurrency(currentZapBalance, currency, currentLang)}
                    </span>
                  </div>
                  <span className="text-[9px] text-emerald-400 block font-mono">
                    ✓ Écran Synchronisé en temps réel
                  </span>
                </div>
              </div>

              {/* Action Trigger in Live Simulator */}
              <div className="bg-[#09223a] p-3.5 rounded-xl border border-[#184570] space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Simuler une opération de règlement :</span>
                  <span className="font-mono text-[#00D4B2] font-bold">
                    Versement de {formatCurrency(zapAmountPaid, currency, currentLang)}
                  </span>
                </div>

                {!zapPaymentLogged ? (
                  <button
                    onClick={handleSimulateZapPayment}
                    className="w-full py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] text-xs font-black hover:bg-[#00bda0] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>Enregistrer Versement de 250 000 FCFA dans l'Application</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-400/40 text-[11px] text-emerald-300 flex items-center justify-between animate-fadeIn">
                      <span className="flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Dossier ZAP mis à jour chez les 2 commerçants !
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">Dossier Partagé</span>
                    </div>

                    <button
                      onClick={handleResetZap}
                      className="text-[10px] text-slate-400 hover:text-white underline block mx-auto pt-1 cursor-pointer"
                    >
                      Réinitialiser la simulation ZAP
                    </button>
                  </div>
                )}
              </div>

              <div className="p-2.5 bg-[#071c32] rounded-lg border border-[#163c63] flex items-center justify-between text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#00D4B2]" />
                  <span>{currentLang === 'fr' ? 'Preuve numérique partagée et signée' : 'Shared & signed digital record'}</span>
                </div>
                <span className="text-slate-300 font-mono">Horodatage SHA-256</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 2: LE VRAI CALCULATEUR DE RENTABILITÉ / SIMULATEUR D'INVESTISSEMENT */}
        {/* ========================================================================= */}
        <div className="bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Explanation */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Outil Embarqué dans l'Application</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.whyDifferent.investTitle}
              </h3>

              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.whyDifferent.investSubtitle}
              </p>

              {/* The Real Problem */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Le Danger des Investissements à Tâtons :</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.whyDifferent.investProblem}
                </p>
              </div>

              {/* The Technological Solution */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4B2]" />
                  <span>La Simulation Pré-Achat In-App :</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.whyDifferent.investSolution}
                </p>
              </div>

              {/* The Concrete Impact */}
              <div className="p-3.5 bg-[#051525] rounded-xl border border-[#163c63] text-xs text-slate-200 space-y-1">
                <span className="text-[#00D4B2] font-bold block">
                  {currentLang === 'fr' ? 'Sécurisation de vos marges :' : 'Securing your margins:'}
                </span>
                <p className="text-slate-300">{t.whyDifferent.investImpact}</p>
              </div>
            </div>

            {/* Right Live Interactive In-App Simulator Controls & Decision Engine */}
            <div className="lg:col-span-6 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#00D4B2]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Simulateur de Rentabilité In-App
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">Projet : Achat Lot Marchandises</span>
              </div>

              {/* Inputs */}
              <div className="space-y-3 text-xs">
                {/* Input 1: Purchase Budget */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Budget d'achat total du lot :</span>
                    <span className="font-mono font-bold text-[#00D4B2]">
                      {formatCurrency(simPurchase, currency, currentLang)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currency === 'XOF' ? 100000 : 150}
                    max={currency === 'XOF' ? 3000000 : 4500}
                    step={currency === 'XOF' ? 50000 : 50}
                    value={simPurchase}
                    onChange={(e) => setSimPurchase(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#09223a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
                  />
                </div>

                {/* Input 2: Transport & Freight */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Frais de transport & douane estimés :</span>
                    <span className="font-mono font-bold text-amber-300">
                      {formatCurrency(simTransport, currency, currentLang)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={currency === 'XOF' ? 500000 : 750}
                    step={currency === 'XOF' ? 10000 : 15}
                    value={simTransport}
                    onChange={(e) => setSimTransport(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#09223a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
                  />
                </div>

                {/* Input 3: Quantity */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Quantité d'unités dans le lot :</span>
                    <span className="font-mono font-bold text-white">{simUnits} unités</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={simUnits}
                    onChange={(e) => setSimUnits(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#09223a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
                  />
                </div>

                {/* Input 4: Target Selling Price */}
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Prix de vente unitaire prévu en boutique :</span>
                    <span className="font-mono font-bold text-white">
                      {formatCurrency(simTargetPrice, currency, currentLang)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currency === 'XOF' ? 1000 : 2}
                    max={currency === 'XOF' ? 25000 : 40}
                    step={currency === 'XOF' ? 250 : 0.5}
                    value={simTargetPrice}
                    onChange={(e) => setSimTargetPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#09223a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
                  />
                </div>
              </div>

              {/* Real-time Financial Breakdown Card */}
              <div className="bg-[#09223a] p-3.5 rounded-xl border border-[#184570] space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#06182a] p-2 rounded-lg border border-[#163c63]">
                    <span className="text-slate-400 block text-[10px]">Prix de Revient / Unité</span>
                    <span className="font-bold text-white font-mono text-xs">
                      {formatCurrency(simulation.costPerUnit, currency, currentLang)}
                    </span>
                  </div>

                  <div className="bg-[#06182a] p-2 rounded-lg border border-[#163c63]">
                    <span className="text-slate-400 block text-[10px]">Seuil Rentabilité (Point Mort)</span>
                    <span className="font-bold text-amber-300 font-mono text-xs">
                      Dès {simulation.breakEvenUnits} / {simUnits} ventes
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1 border-t border-[#163c63]">
                  <span className="text-slate-300">Bénéfice Brut Total Prévisionnel :</span>
                  <span
                    className={`font-black font-mono text-sm ${
                      simulation.grossProfit > 0 ? 'text-[#00D4B2]' : 'text-red-400'
                    }`}
                  >
                    {simulation.grossProfit > 0 ? '+' : ''}
                    {formatCurrency(simulation.grossProfit, currency, currentLang)} ({simulation.marginPercent}%)
                  </span>
                </div>
              </div>

              {/* In-App Diagnostic / Verdict */}
              <div
                className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 ${
                  simulation.verdict === 'loss'
                    ? 'bg-red-500/15 border-red-500/50 text-red-200'
                    : simulation.verdict === 'excellent'
                    ? 'bg-emerald-500/15 border-emerald-400/50 text-emerald-200'
                    : 'bg-cyan-500/15 border-cyan-400/50 text-cyan-200'
                }`}
              >
                {simulation.verdict === 'loss' ? (
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#00D4B2] shrink-0" />
                )}
                <div>
                  <p className="font-bold">
                    {simulation.verdict === 'loss'
                      ? (currentLang === 'fr' ? 'ALERTE : RISQUE DE MARGE NÉGATIVE' : 'WARNING: RISK OF NEGATIVE MARGIN')
                      : simulation.verdict === 'excellent'
                      ? (currentLang === 'fr' ? 'SIMULATION FAVORABLE (MARGE CONFIRMÉE)' : 'FAVORABLE SIMULATION (CONFIRMED MARGIN)')
                      : (currentLang === 'fr' ? 'PROJET ÉQUILIBRÉ' : 'BALANCED PROJECTION')}
                  </p>
                  <p className="text-[10px] opacity-90">
                    {currentLang === 'fr' ? simulation.adviceFR : simulation.adviceEN}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional 2 Differentiators Grid (Magasin <-> Atelier & 100% Offline) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#09223a] p-6 rounded-3xl border border-[#163c63] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#00D4B2]/15 text-[#00D4B2] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.whyDifferent.hybridTitle}</h4>
              <p className="text-xs text-[#00D4B2] font-semibold mb-2">{t.whyDifferent.hybridSubtitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{t.whyDifferent.hybridDesc}</p>
            </div>
          </div>

          <div className="bg-[#09223a] p-6 rounded-3xl border border-[#163c63] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.whyDifferent.offlineTitle}</h4>
              <p className="text-xs text-cyan-300 font-semibold mb-2">{t.whyDifferent.offlineSubtitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{t.whyDifferent.offlineDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
