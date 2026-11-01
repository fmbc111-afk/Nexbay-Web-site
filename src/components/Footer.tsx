import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { Heart, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051525] text-slate-400 text-xs border-t border-[#163c63] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#163c63]/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0d3156] border border-[#00D4B2]/40 p-1 flex items-center justify-center">
                <img
                  src={BRAND_CONFIG.iconUrl}
                  alt={`${BRAND_CONFIG.name} Icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-sans">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-[11px] text-slate-500">
              {t.footer.designedFor}
            </p>
          </div>

          {/* Quick Links Column 1: Modules */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Modules</h4>
            <ul className="space-y-2">
              <li>
                <a href="#commerce" className="hover:text-[#00D4B2] transition-colors">
                  Point de Vente (POS)
                </a>
              </li>
              <li>
                <a href="#commerce" className="hover:text-[#00D4B2] transition-colors">
                  Gestion de Stock COGS
                </a>
              </li>
              <li>
                <a href="#commerce" className="hover:text-[#00D4B2] transition-colors">
                  Caisse & Clôture Z
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D4B2] transition-colors">
                  Tickets Atelier & Suivi
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Ecosystem */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Écosystème</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hardware" className="hover:text-[#00D4B2] transition-colors">
                  Imprimantes ESC/POS
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-[#00D4B2] transition-colors">
                  Lecteur Codes-barres
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#00D4B2] transition-colors">
                  Calculateur de Rentabilité
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00D4B2] transition-colors">
                  Foire Aux Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Language & Support Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Langue & Région</h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currentLang === 'fr'
                    ? 'bg-[#00D4B2] text-[#0A2540]'
                    : 'bg-[#0d2d4d] text-slate-300 hover:text-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#00D4B2] text-[#0A2540]'
                    : 'bg-[#0d2d4d] text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
            <p className="text-[11px] text-slate-400 pt-2">
              Domaine officiel : <span className="text-[#00D4B2] font-mono">{BRAND_CONFIG.domain}</span>
            </p>
            <p className="text-[11px] text-slate-400">
              Support technique : <span className="text-slate-200">{BRAND_CONFIG.social.supportEmail}</span>
            </p>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-200 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#privacy" className="hover:text-slate-200 transition-colors">
              {t.footer.privacy}
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#00D4B2] hover:text-white transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
