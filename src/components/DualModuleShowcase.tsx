import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { formatCurrency } from '../utils/calculator';
import {
  ShoppingBag,
  Wrench,
  Layers,
  ArrowRight,
  Barcode,
  CheckCircle,
  FileText,
  Clock,
  AlertTriangle,
  BadgePercent,
  Receipt,
  Users,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface DualModuleShowcaseProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const DualModuleShowcase: React.FC<DualModuleShowcaseProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'moduleA' | 'moduleB'>('moduleA');

  const basePrice = currency === 'XOF' ? 18500 : currency === 'EUR' ? 28 : 30;

  return (
    <section id="commerce" className="py-20 lg:py-28 bg-[#071b2f] text-white relative border-y border-[#163c63]">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.dualEngine.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.dualEngine.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.dualEngine.subtitle}
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto mb-12 bg-[#09223a] p-1.5 rounded-2xl border border-[#163c63]">
          <button
            onClick={() => setActiveTab('moduleA')}
            className={`flex-1 py-4 px-6 rounded-xl text-left sm:text-center transition-all cursor-pointer ${
              activeTab === 'moduleA'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-lg font-bold'
                : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-black">{t.dualEngine.tabModuleA}</span>
            </div>
            <p className={`text-xs ${activeTab === 'moduleA' ? 'text-[#07243c]' : 'text-slate-400'}`}>
              {t.dualEngine.tabModuleASub}
            </p>
          </button>

          <button
            id="services"
            onClick={() => setActiveTab('moduleB')}
            className={`flex-1 py-4 px-6 rounded-xl text-left sm:text-center transition-all cursor-pointer ${
              activeTab === 'moduleB'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-lg font-bold'
                : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-black">{t.dualEngine.tabModuleB}</span>
            </div>
            <p className={`text-xs ${activeTab === 'moduleB' ? 'text-[#07243c]' : 'text-slate-400'}`}>
              {t.dualEngine.tabModuleBSub}
            </p>
          </button>
        </div>

        {/* Module Content Panels */}
        {activeTab === 'moduleA' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#184570] shadow-2xl">
            {/* Left Specs List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                Module A — Gestion Commerciale & Ventes
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.dualEngine.moduleATitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.dualEngine.moduleADesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <Receipt className="w-4 h-4 text-[#00D4B2]" />
                    <span>Point de Vente & Panier</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Gestion des variantes (tailles/couleurs), unités sérialisées (IMEI), encaissements espèces & Mobile Money, mise en attente.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <Barcode className="w-4 h-4 text-[#00D4B2]" />
                    <span>Catalogue & Stock COGS</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Scan caméra direct, alertes automatiques de rupture, valorisation du coût d'achat et suivi chronologique des mouvements.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <CheckCircle className="w-4 h-4 text-[#00D4B2]" />
                    <span>Clôture Z & Caisse</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Ouverture/fermeture de sessions, virements internes, séparation stricte Cash / Wave / Orange Money, suivi rigoureux des écarts d'encaissement.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <TrendingUp className="w-4 h-4 text-[#00D4B2]" />
                    <span>Créances & Liaisons ZAP</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Carnet des crédits clients avec classification de solvabilité (VIP/Risque), dettes fournisseurs et facturation numérique ZAP.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] text-sm font-bold hover:bg-[#00bda0] transition-colors"
                >
                  <span>Tester le POS en direct</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Card */}
            <div className="lg:col-span-5 bg-[#051525] p-5 rounded-2xl border border-[#1d4c79] shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Session Caisse Ouverte</span>
                </div>
                <span className="text-xs font-mono text-[#00D4B2] bg-[#0c2b4c] px-2 py-0.5 rounded">Rapport Z en direct</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#184570] flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">Encaissements Espèces</span>
                    <span className="font-bold text-white text-sm">{formatCurrency(basePrice * 12, currency, currentLang)}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-300 font-bold px-2 py-1 rounded">
                    Tiroir vérifié
                  </span>
                </div>

                <div className="bg-[#09223a] p-3 rounded-xl border border-[#184570] flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">Encaissements Mobile Money (Wave / Orange)</span>
                    <span className="font-bold text-[#00D4B2] text-sm">{formatCurrency(basePrice * 8, currency, currentLang)}</span>
                  </div>
                  <span className="text-[10px] bg-cyan-500/15 text-cyan-300 font-bold px-2 py-1 rounded">
                    Auto-rapproché
                  </span>
                </div>

                <div className="bg-[#09223a] p-3 rounded-xl border border-[#184570] flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">Créances Clients Accordées (Crédits)</span>
                    <span className="font-bold text-amber-300 text-sm">{formatCurrency(basePrice * 2.5, currency, currentLang)}</span>
                  </div>
                  <span className="text-[10px] bg-amber-500/15 text-amber-300 font-bold px-2 py-1 rounded">
                    1 Client VIP
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#0c2b4c] rounded-xl border border-[#00D4B2]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00D4B2]" />
                  <span className="font-bold text-white">Écart de caisse Z :</span>
                </div>
                <span className="font-mono font-black text-emerald-400 text-sm">0 FCFA (Équilibré)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#184570] shadow-2xl">
            {/* Left Specs List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                Module B — Services & Atelier de Réparation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.dualEngine.moduleBTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.dualEngine.moduleBDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <FileText className="w-4 h-4 text-[#00D4B2]" />
                    <span>Fiches d'Intervention & Tickets</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Enregistrement de l'appareil, description de panne, photos de l'état entrant, date estimée et mode express pour réparations prioritaires.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <Layers className="w-4 h-4 text-[#00D4B2]" />
                    <span>Liaison Pièces & Stock Magasin</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Déduction en 1 clic des consommables et pièces détachées (écrans, câbles, filtres) directement depuis le stock du Module A.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <Clock className="w-4 h-4 text-[#00D4B2]" />
                    <span>Acomptes & Délais de Retrait</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Encaissement de l'acompte à la remise de l'appareil, impression du ticket thermique de dépôt, calcul automatique du solde dû.
                  </p>
                </div>

                <div className="bg-[#0c2b4c] p-4 rounded-xl border border-[#1b4e7e]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <BadgePercent className="w-4 h-4 text-[#00D4B2]" />
                    <span>Suivi des Dépenses d'Atelier</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Comptabilisation catégorisée des charges : électricité/carburant groupe, main-d'œuvre mécanicien, outillage et ratio dépenses/entrées.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] text-sm font-bold hover:bg-[#00bda0] transition-colors"
                >
                  <span>Créer un ticket d'atelier virtuel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Service Ticket Card */}
            <div className="lg:col-span-5 bg-[#051525] p-5 rounded-2xl border border-[#1d4c79] shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#00D4B2] font-mono">TICKET #SRV-8821</span>
                  <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-bold">
                    MODE EXPRESS
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-300">Retrait prévu : Aujourd'hui 17h</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#184570]">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>Générateur Diesel Kipor 5kVA</span>
                    <span className="text-[#00D4B2]">Technicien : Ousmane</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Diagnostic : Remplacement injecteur + Vidange complète</p>
                </div>

                <div className="bg-[#09223a] p-3 rounded-xl border border-[#184570] space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Pièces prélevées du Stock Boutique</span>
                  <div className="flex justify-between text-slate-300 text-[11px]">
                    <span>1x Injecteur Haute Pression</span>
                    <span className="text-white font-medium">{formatCurrency(basePrice * 1.8, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 text-[11px]">
                    <span>2L Huile Moteur 15W40</span>
                    <span className="text-white font-medium">{formatCurrency(basePrice * 0.6, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 text-[11px]">
                    <span>Main d'œuvre atelier</span>
                    <span className="text-white font-medium">{formatCurrency(basePrice * 0.8, currency, currentLang)}</span>
                  </div>
                </div>

                <div className="bg-[#0c2b4c] p-3 rounded-xl border border-[#1b4e7e] space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>Montant total de l'intervention :</span>
                    <span className="font-bold text-white">{formatCurrency(basePrice * 3.2, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Acompte encaissé à l'accueil (Wave) :</span>
                    <span>- {formatCurrency(basePrice * 1.5, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between text-white font-black text-sm pt-1 border-t border-[#184570]">
                    <span>Solde à encaisser au retrait :</span>
                    <span className="text-[#00D4B2]">{formatCurrency(basePrice * 1.7, currency, currentLang)}</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#06182a] rounded-lg border border-[#163c63] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Reçu d'atelier avec code de retrait :</span>
                <span className="text-[#00D4B2] font-bold">Imprimé 58mm</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
