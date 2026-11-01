import React from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import {
  Sparkles,
  Smartphone,
  WifiOff,
  Printer,
  Barcode,
  Layers,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Users,
  Clock,
  Zap,
} from 'lucide-react';

interface BentoGridFeaturesProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const BentoGridFeatures: React.FC<BentoGridFeaturesProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#071c32] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.features.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.features.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.features.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 (Large - 8 cols): Point de Vente & Panier Dynamique */}
          <div className="md:col-span-8 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-6">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.posTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.features.posDesc}
              </p>
            </div>

            {/* Visual Micro UI inside Card */}
            <div className="mt-6 pt-6 border-t border-[#163c63] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#06182a] p-3 rounded-xl border border-[#14395e]">
                <span className="text-[#00D4B2] font-bold block mb-1">Variantes</span>
                <span className="text-slate-400 text-[11px]">Tailles, couleurs & lots</span>
              </div>
              <div className="bg-[#06182a] p-3 rounded-xl border border-[#14395e]">
                <span className="text-[#00D4B2] font-bold block mb-1">Unités Tracées</span>
                <span className="text-slate-400 text-[11px]">Numéros de série / IMEI</span>
              </div>
              <div className="bg-[#06182a] p-3 rounded-xl border border-[#14395e]">
                <span className="text-[#00D4B2] font-bold block mb-1">Paiements Mixtes</span>
                <span className="text-slate-400 text-[11px]">Cash + Mobile Money</span>
              </div>
              <div className="bg-[#06182a] p-3 rounded-xl border border-[#14395e]">
                <span className="text-[#00D4B2] font-bold block mb-1">Mise en attente</span>
                <span className="text-slate-400 text-[11px]">Paniers suspendus</span>
              </div>
            </div>
          </div>

          {/* Card 2 (4 cols): 100% Offline-First Engine */}
          <div className="md:col-span-4 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.offlineTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {t.features.offlineDesc}
              </p>
            </div>

            <div className="mt-6 bg-[#06182a] p-3.5 rounded-xl border border-[#14395e] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4B2] animate-pulse"></span>
              <span className="text-xs text-slate-300 font-mono">SQLite chiffré local + Sync auto</span>
            </div>
          </div>

          {/* Card 3 (4 cols): Bluetooth ESC/POS Printing */}
          <div className="md:col-span-4 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-6">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.hardwareTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {t.features.hardwareDesc}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 bg-[#06182a] p-3 rounded-xl border border-[#14395e]">
              <span>Rouleaux :</span>
              <span className="text-[#00D4B2] font-bold">58mm (Poche) & 80mm</span>
            </div>
          </div>

          {/* Card 4 (8 cols): Fiches d'Atelier & Tickets de Service */}
          <div className="md:col-span-8 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.ticketTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.features.ticketDesc}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#163c63] flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-[#0c2b4c] text-slate-200 border border-[#1b4e7e]">
                ✓ Diagnostic et constat entrant
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#0c2b4c] text-slate-200 border border-[#1b4e7e]">
                ✓ Acompte obligatoire ou différé
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#0c2b4c] text-slate-200 border border-[#1b4e7e]">
                ✓ Prélèvement automatique sur le stock magasin
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#0c2b4c] text-[#00D4B2] border border-[#00D4B2]/40 font-bold">
                ✓ Reçu de retrait avec QR / Barcode
              </span>
            </div>
          </div>

          {/* Card 5 (6 cols): Caisse & Clôture Z Rapprochement */}
          <div className="md:col-span-6 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.cashTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {t.features.cashDesc}
              </p>
            </div>

            <div className="mt-6 p-3 bg-[#06182a] rounded-xl border border-[#14395e] flex items-center justify-between text-xs">
              <span className="text-slate-300">Rapport Z de caisse :</span>
              <span className="text-emerald-400 font-bold">Zéro fuite de trésorerie</span>
            </div>
          </div>

          {/* Card 6 (6 cols): Liaisons ZAP & Hub Facturation Numérique */}
          <div className="md:col-span-6 bg-[#09223a] rounded-3xl p-6 sm:p-8 border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D4B2] transition-colors">
                {t.features.zapTitle}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {t.features.zapDesc}
              </p>
            </div>

            <div className="mt-6 p-3 bg-[#06182a] rounded-xl border border-[#14395e] flex items-center justify-between text-xs">
              <span className="text-slate-300">Synchronisation ZAP :</span>
              <span className="text-indigo-400 font-bold">Factures & encaissements sécurisés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
