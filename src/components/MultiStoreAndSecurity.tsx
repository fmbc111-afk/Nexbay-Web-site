import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { formatCurrency } from '../utils/calculator';
import {
  Building2,
  ShieldCheck,
  RefreshCw,
  Lock,
  ArrowRightLeft,
  Smartphone,
  CheckCircle2,
  AlertOctagon,
  CloudLightning,
  Sparkles,
  ArrowRight,
  Database,
  Store,
} from 'lucide-react';

interface MultiStoreAndSecurityProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const MultiStoreAndSecurity: React.FC<MultiStoreAndSecurityProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'branch1' | 'branch2' | 'depot'>('all');
  const t = TRANSLATIONS[currentLang];

  const branches = [
    {
      id: 'branch1',
      name: currentLang === 'fr' ? 'Boutique #1 - Centre Ville' : 'Store #1 - Downtown Central',
      location: currentLang === 'fr' ? 'Abidjan Plateau' : 'Abidjan Central',
      todaySales: 385000,
      stockValue: 8450000,
      activeStaff: 3,
      status: 'Ouvert • Clôture Z en attente',
    },
    {
      id: 'branch2',
      name: currentLang === 'fr' ? 'Boutique #2 - Marché Principal' : 'Store #2 - Main Market',
      location: currentLang === 'fr' ? 'Treichville' : 'South District',
      todaySales: 512000,
      stockValue: 12200000,
      activeStaff: 4,
      status: 'Ouvert • Flux élevé',
    },
    {
      id: 'depot',
      name: currentLang === 'fr' ? 'Entrepôt & Dépôt de Gros' : 'Central Warehouse & Depot',
      location: currentLang === 'fr' ? 'Zone Industrielle' : 'Industrial Hub',
      todaySales: 1140000,
      stockValue: 34800000,
      activeStaff: 2,
      status: 'Stockage & Préparation Expéditions',
    },
  ];

  const totalConsolidatedSales = branches.reduce((acc, b) => acc + b.todaySales, 0);
  const totalStockValue = branches.reduce((acc, b) => acc + b.stockValue, 0);

  return (
    <section id="multistore" className="py-24 scroll-mt-20 bg-[#09223a] relative overflow-hidden border-t border-[#163c63]">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.multiStoreSecurity.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.multiStoreSecurity.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.multiStoreSecurity.subtitle}
          </p>
        </div>

        {/* Pillar 1: Multi-Store & Warehouse Interactive Cockpit */}
        <div className="mb-16 bg-[#081e35] border border-[#1b4e7e] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#143d63]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D4B2] uppercase tracking-wider mb-2">
                <Store className="w-4 h-4" />
                <span>Multi-Points de Vente & Entrepôts</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.multiStoreSecurity.multiStoreTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                {t.multiStoreSecurity.multiStoreDesc}
              </p>
            </div>

            {/* Quick KPI Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-3 rounded-2xl bg-[#0c2a49] border border-[#1b4b77]">
                <div className="text-xs text-slate-400">Total Ventes Consolidées</div>
                <div className="text-xl font-black text-[#00D4B2] font-mono">
                  {formatCurrency(totalConsolidatedSales, currency)}
                </div>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#0c2a49] border border-[#1b4b77]">
                <div className="text-xs text-slate-400">Valeur Totale Stock</div>
                <div className="text-xl font-black text-white font-mono">
                  {formatCurrency(totalStockValue, currency)}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Branch Switcher */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {branches.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBranch(b.id as any)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedBranch === b.id
                    ? 'bg-gradient-to-b from-[#113a63] to-[#0A2540] border-[#00D4B2] shadow-xl shadow-[#00D4B2]/10 ring-1 ring-[#00D4B2]'
                    : 'bg-[#0a2138] border-[#163e66] hover:bg-[#0c2946] text-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">{b.name}</h4>
                    <span className="text-xs text-slate-400">{b.location}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                    {b.activeStaff} vendeurs
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-[#163e66] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Ventes du jour :</span>
                    <span className="font-mono font-bold text-[#00D4B2]">
                      {formatCurrency(b.todaySales, currency)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Valeur stock :</span>
                    <span className="font-mono text-slate-200">
                      {formatCurrency(b.stockValue, currency)}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2] animate-pulse"></span>
                  <span>{b.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Inter-Store Transfer Protocol Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-[#071829] border border-[#1b4b77] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#00D4B2]/20 text-[#00D4B2] shrink-0">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white block">
                  {currentLang === 'fr'
                    ? 'Transfert de Stock Inter-Boutiques avec Validation Numérique'
                    : 'Inter-Branch Stock Transfer with Digital Sign-off'}
                </span>
                <span className="text-slate-300 text-xs">
                  {currentLang === 'fr'
                    ? 'Le dépôt central expédie 50 sacs ou 20 écrans : la boutique réceptrice doit valider les quantités reçues pour éviter toute disparition lors du trajet.'
                    : 'Depot ships 50 bags or 20 screens: the destination branch must digitally confirm counts upon arrival to eliminate in-transit losses.'}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] whitespace-nowrap">
              {currentLang === 'fr' ? 'Double Validation Sécurisée' : 'Secure Double Validation'}
            </span>
          </div>
        </div>

        {/* Pillar 2: Phone Stolen or Broken - Cloud Recovery Guarantee */}
        <div className="bg-gradient-to-br from-[#0b2742] via-[#092138] to-[#07192a] border border-[#00D4B2]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Security Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentLang === 'fr' ? 'Résilience & Continuité des Données' : 'Data Resilience & Continuity'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.multiStoreSecurity.securityTitle}
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {t.multiStoreSecurity.securityDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#061726]/80 border border-[#143d63] flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#00D4B2]/15 text-[#00D4B2] shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Moteur SQLite Local Chiffré</h5>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Fonctionne même sans connexion. Vos données restent intouchables en cas de vol du matériel.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#061726]/80 border border-[#143d63] flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-300 shrink-0 mt-0.5">
                    <CloudLightning className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Restauration en 3 Minutes</h5>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Sur n'importe quel nouveau smartphone Android : installez l'app, tapez votre PIN et reprenez la vente.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#061726]/80 border border-[#143d63] flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/15 text-amber-300 shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Verrouillage Rôles & PIN</h5>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Vos vendeurs n'ont jamais accès à vos marges ni au bénéfice net du propriétaire.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#061726]/80 border border-[#143d63] flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Sauvegarde Cloud Automatique</h5>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Dès qu'une connexion 3G/4G ou Wi-Fi est détectée, tout votre historique est sauvegardé sans effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Device Recovery Flow */}
            <div className="lg:col-span-5">
              <div className="bg-[#051421] border border-[#1a4a75] rounded-3xl p-6 shadow-2xl relative">
                <div className="text-center pb-4 border-b border-[#123658]">
                  <span className="text-[10px] font-bold text-[#00D4B2] uppercase tracking-wider block">
                    Simulation de Restauration d'Urgence
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">
                    Ancien téléphone perdu → Nouveau téléphone prêt
                  </h4>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092238] border border-[#143e66]">
                    <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-white block">Incident sur le terrain</span>
                      <span className="text-slate-400">Smartphone volé ou écran brisé au marché</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092238] border border-[#143e66]">
                    <div className="w-7 h-7 rounded-full bg-[#00D4B2]/20 text-[#00D4B2] flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-white block">Installation rapide</span>
                      <span className="text-slate-400">Installation de l'application sur le nouvel appareil</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0c2e4f] border border-[#00D4B2]/40 shadow-lg shadow-[#00D4B2]/5">
                    <div className="w-7 h-7 rounded-full bg-[#00D4B2] text-[#0A2540] flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-[#00D4B2] block">Connexion Sécurisée</span>
                      <span className="text-slate-200">Restauration des stocks, écritures et dettes synchronisées</span>
                    </div>
                  </div>
                </div>

                {/* Assurance Footer */}
                <div className="mt-6 pt-4 border-t border-[#123658] flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Procédure de récupération guidée et rapide</span>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="text-[#00D4B2] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tester</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
