import React from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import {
  Printer,
  Barcode,
  KeyRound,
  HardDrive,
  CheckCircle2,
  Cpu,
  Bluetooth,
  Smartphone,
} from 'lucide-react';

interface HardwareEcosystemProps {
  currentLang: Language;
}

export const HardwareEcosystem: React.FC<HardwareEcosystemProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="hardware" className="py-20 lg:py-28 bg-[#0A2540] text-white relative border-t border-[#163c63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.hardware.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.hardware.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.hardware.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Imprimante Thermique */}
          <div className="bg-[#071c32] p-6 rounded-3xl border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-5">
                <Printer className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 font-mono font-bold uppercase mb-1">
                <Bluetooth className="w-3 h-3 text-[#00D4B2]" />
                <span>ESC/POS Standard</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.hardware.printerTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.hardware.printerDesc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#163c63] text-[11px] text-[#00D4B2] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Compatible 58mm & 80mm</span>
            </div>
          </div>

          {/* Card 2: Scanner Intégré */}
          <div className="bg-[#071c32] p-6 rounded-3xl border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-5">
                <Barcode className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 font-mono font-bold uppercase mb-1">
                <Smartphone className="w-3 h-3 text-[#00D4B2]" />
                <span>Caméra Smartphone</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.hardware.scannerTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.hardware.scannerDesc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#163c63] text-[11px] text-[#00D4B2] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>EAN-13, QR & Codes 128</span>
            </div>
          </div>

          {/* Card 3: Code PIN & Rôles */}
          <div className="bg-[#071c32] p-6 rounded-3xl border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-5">
                <KeyRound className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 font-mono font-bold uppercase mb-1">
                <span>Contrôle d'Accès</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.hardware.multiUserTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.hardware.multiUserDesc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#163c63] text-[11px] text-[#00D4B2] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Journal d'Audit Horodaté</span>
            </div>
          </div>

          {/* Card 4: Base Locale Résiliente */}
          <div className="bg-[#071c32] p-6 rounded-3xl border border-[#163c63] hover:border-[#00D4B2]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-5">
                <HardDrive className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 font-mono font-bold uppercase mb-1">
                <span>Offline-First</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.hardware.offlineTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.hardware.offlineDesc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#163c63] text-[11px] text-[#00D4B2] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Chiffrement AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
