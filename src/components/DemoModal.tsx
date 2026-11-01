import React from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { InteractiveDeviceDemo } from './InteractiveDeviceDemo';
import { X, Sparkles, Smartphone, Download } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currency: Currency;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  currency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#071c32] border border-[#1b4e7e] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A2540] border-b border-[#163c63]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0d3156] border border-[#00D4B2]/40 p-1 flex items-center justify-center">
              <img src={BRAND_CONFIG.iconUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white">{BRAND_CONFIG.name} Interactive Lab</span>
                <span className="text-[10px] bg-[#00D4B2] text-[#0A2540] font-bold px-2 py-0.5 rounded-full">
                  LIVE DEMO
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {currentLang === 'fr'
                  ? 'Simulateur haute fidélité des Modules Commerce & Atelier'
                  : 'High-fidelity simulator of Commerce & Workshop Modules'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BRAND_CONFIG.social.directApkUrl}
              download
              onClick={onClose}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00D4B2] text-[#0A2540] text-xs font-bold hover:bg-[#00bda0] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Télécharger' : 'Download'}</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0d2e4f] text-slate-300 hover:text-white transition-colors"
              aria-label="Fermer la démo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#071c32]">
          <InteractiveDeviceDemo currentLang={currentLang} currency={currency} />
        </div>
      </div>
    </div>
  );
};
