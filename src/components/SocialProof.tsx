import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { ShieldCheck, CheckCircle, Store, Wrench, Cpu, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface SocialProofProps {
  currentLang: Language;
}

export const SocialProof: React.FC<SocialProofProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const useCases = [
    {
      title: t.social.useCase1Title,
      profile: t.social.useCase1Profile,
      need: t.social.useCase1Need,
      solution: t.social.useCase1Solution,
      icon: Store,
      badge: currentLang === 'fr' ? 'Cas Pilote #1' : 'Pilot Case #1',
    },
    {
      title: t.social.useCase2Title,
      profile: t.social.useCase2Profile,
      need: t.social.useCase2Need,
      solution: t.social.useCase2Solution,
      icon: Wrench,
      badge: currentLang === 'fr' ? 'Cas Pilote #2' : 'Pilot Case #2',
    },
    {
      title: t.social.useCase3Title,
      profile: t.social.useCase3Profile,
      need: t.social.useCase3Need,
      solution: t.social.useCase3Solution,
      icon: Cpu,
      badge: currentLang === 'fr' ? 'Cas Pilote #3' : 'Pilot Case #3',
    },
  ];

  return (
    <section id="pilot" className="py-20 lg:py-28 bg-[#0A2540] text-white relative border-t border-[#163c63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.social.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.social.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.social.subtitle}
          </p>
        </div>

        {/* 3 Use-Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#071d33] p-6 sm:p-8 rounded-3xl border border-[#163c63] hover:border-[#00D4B2]/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#00D4B2] bg-[#0c2b4c] border border-[#16426d] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#00D4B2] font-medium mb-4">
                    {item.profile}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#163c63]/60 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold block mb-1">
                        {currentLang === 'fr' ? 'Défi Opérationnel :' : 'Operational Challenge:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {item.need}
                      </p>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-semibold block mb-1">
                        {currentLang === 'fr' ? 'Réponse Nexbay :' : 'Nexbay Approach:'}
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pilot Program Enrollment Box */}
        <div className="mt-12 bg-gradient-to-r from-[#0c2b4c] via-[#09223a] to-[#071d33] border border-[#00D4B2]/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D4B2] uppercase tracking-wider mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>{currentLang === 'fr' ? 'Accès Anticipé Réservé' : 'Early Pilot Access'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t.social.pilotBoxTitle}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {t.social.pilotBoxDesc}
            </p>
          </div>

          <a
            href={`mailto:${BRAND_CONFIG.social.supportEmail}?subject=Candidature%20Programme%20Pilote%20Nexbay`}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#00D4B2] text-[#0A2540] text-sm font-bold hover:bg-[#00bda0] shadow-xl shadow-[#00D4B2]/20 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>{t.social.pilotBoxCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Technical Architecture Guarantees & Contact */}
        <div className="mt-16 bg-[#071c32] rounded-2xl border border-[#163c63] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#00D4B2]/15 text-[#00D4B2] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLang === 'fr' ? 'Données Locales sur l\'Appareil' : 'Local Device Storage'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {currentLang === 'fr'
                  ? 'Base de données SQLite locale chiffrée. Vos données d\'encaissement et de catalogue restent sur votre smartphone.'
                  : 'Encrypted local SQLite database. Your checkout and catalog data remain stored on your device.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#00D4B2]/15 text-[#00D4B2] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLang === 'fr' ? 'Continuité Hors Ligne' : 'Offline Continuity'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {currentLang === 'fr'
                  ? 'Conçu pour continuer les ventes et impressions de tickets même en cas de coupure de réseau ou d\'électricité.'
                  : 'Engineered to maintain sales and thermal ticket printing even during cellular or electricity blackouts.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#00D4B2]/15 text-[#00D4B2] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {currentLang === 'fr' ? 'Canal de Contact Direct' : 'Direct Contact Channel'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {currentLang === 'fr'
                  ? `Assistance par email (${BRAND_CONFIG.social.supportEmail}) pour vous guider dans l'installation et l'appairage Bluetooth.`
                  : `Email support (${BRAND_CONFIG.social.supportEmail}) for setup guidance and Bluetooth peripheral pairing.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

