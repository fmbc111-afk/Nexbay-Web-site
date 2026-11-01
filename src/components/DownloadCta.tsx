import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { Smartphone, Download, Sparkles, ShieldCheck, ArrowRight, Play } from 'lucide-react';

interface DownloadCtaProps {
  currentLang: Language;
  onOpenDemo: () => void;
}

export const DownloadCta: React.FC<DownloadCtaProps> = ({ currentLang, onOpenDemo }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="download" className="py-20 lg:py-28 bg-gradient-to-b from-[#0A2540] via-[#071c33] to-[#041220] text-white relative border-t border-[#163c63]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e3153] border border-[#00D4B2]/40 text-xs font-semibold text-[#00D4B2] mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.ctaSection.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {t.ctaSection.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.ctaSection.subtitle}
        </p>

        {/* Download Buttons Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Google Play Store Badge Button (Bientôt disponible) */}
          <div
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#09223a]/80 border border-[#1b4e7e] opacity-90 shadow-xl text-left cursor-default relative"
            title={currentLang === 'fr' ? 'Bientôt disponible sur Google Play (En cours de validation)' : 'Coming soon to Google Play (Under review)'}
          >
            <div className="absolute -top-2.5 right-3 bg-amber-500 text-[#0A2540] text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {currentLang === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#00D4B2]/15 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.347.348-.952.122-.952-.365V2.18c0-.487.605-.713.951-.366z" fill="#00D4B2"/>
                <path d="M17.48 15.688l-3.688-3.688L3.61 22.186c.334.335.882.355 1.239.043l12.631-6.541z" fill="#FFC107"/>
                <path d="M17.48 8.312L4.849 1.771C4.492 1.459 3.944 1.479 3.61 1.814L13.792 12l3.688-3.688z" fill="#2196F3"/>
                <path d="M20.354 10.638l-2.874-1.492-3.688 3.688 3.688 3.688 2.874-1.492c.792-.411.792-1.536 0-1.947z" fill="#FF5722"/>
              </svg>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Google Play</span>
              <span className="block text-sm font-bold text-slate-300">
                {currentLang === 'fr' ? 'Bientôt sur le Play Store' : 'Coming to Play Store'}
              </span>
            </div>
          </div>

          {/* Apple App Store Badge Button (Bientôt disponible) */}
          <div
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#09223a]/80 border border-[#1b4e7e] opacity-90 shadow-xl text-left cursor-default relative"
            title={currentLang === 'fr' ? 'Bientôt disponible sur l\'App Store (En cours de développement)' : 'Coming soon to App Store (In development)'}
          >
            <div className="absolute -top-2.5 right-3 bg-amber-500 text-[#0A2540] text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {currentLang === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.85 5.92c.62-.75 1.04-1.79.93-2.83-.92.04-2.03.62-2.67 1.37-.58.67-1.1 1.74-.96 2.77 1.03.08 2.08-.51 2.7-1.31z"/>
              </svg>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">App Store</span>
              <span className="block text-sm font-bold text-slate-300">
                {currentLang === 'fr' ? 'Bientôt sur l\'App Store' : 'Coming to App Store'}
              </span>
            </div>
          </div>

          {/* Android Pilot Access Button */}
          <a
            href={BRAND_CONFIG.social.directApkUrl}
            download
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0e3153] border border-[#00D4B2]/40 hover:border-[#00D4B2] transition-all transform hover:-translate-y-0.5 shadow-xl group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#00D4B2] flex items-center justify-center text-[#0A2540]">
              <Download className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-[10px] text-[#00D4B2] uppercase font-bold">
                {currentLang === 'fr' ? 'Programme Pilote' : 'Pilot Program'}
              </span>
              <span className="block text-sm font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                {currentLang === 'fr' ? 'Télécharger Android APK' : 'Download Android APK'}
              </span>
            </div>
          </a>
        </div>

        {/* Instant Web Demo CTA */}
        <div className="mt-8">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00D4B2] hover:text-[#38efd4] underline underline-offset-4 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.ctaSection.instantWebDemo}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* Security and Guarantee Statement */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#00D4B2]" />
          <span>{t.ctaSection.guarantee}</span>
        </div>
      </div>
    </section>
  );
};
