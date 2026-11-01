import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import {
  DownloadCloud,
  Barcode,
  Printer,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  Smartphone,
} from 'lucide-react';

interface QuickStartGuideProps {
  currentLang: Language;
  onOpenDemo: () => void;
}

export const QuickStartGuide: React.FC<QuickStartGuideProps> = ({
  currentLang,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];

  const steps = [
    {
      stepNumber: '01',
      title: t.quickStart.step1Title,
      desc: t.quickStart.step1Desc,
      icon: DownloadCloud,
      durationFr: '60 secondes',
      durationEn: '60 seconds',
      badgeFr: 'Application Mobile Optimisée',
      badgeEn: 'Optimized Mobile App',
      detailFr: 'Compatible dès Android 7.0 et smartphones d\'entrée de gamme. Pas besoin de connexion fibre.',
      detailEn: 'Runs on Android 7.0+ and low-cost smartphones. No fiber connection required.',
    },
    {
      stepNumber: '02',
      title: t.quickStart.step2Title,
      desc: t.quickStart.step2Desc,
      icon: Barcode,
      durationFr: '2 minutes',
      durationEn: '2 minutes',
      badgeFr: 'Scan Caméra Intégré',
      badgeEn: 'Built-in Camera Scanner',
      detailFr: 'Scannez directement les emballages avec votre appareil photo. Les prix de vente et d\'achat sont mémorisés.',
      detailEn: 'Scan product packages with your phone camera. Sales and purchase costs are logged instantly.',
    },
    {
      stepNumber: '03',
      title: t.quickStart.step3Title,
      desc: t.quickStart.step3Desc,
      icon: Printer,
      durationFr: '2 minutes',
      durationEn: '2 minutes',
      badgeFr: 'Bluetooth ESC/POS',
      badgeEn: 'Bluetooth ESC/POS',
      detailFr: 'Allumez votre mini-imprimante portable 58mm ou 80mm. Encaissez en espèces ou Mobile Money et imprimez le ticket !',
      detailEn: 'Power on your 58mm or 80mm mobile printer. Accept cash or Mobile Money and hand out official receipts!',
    },
  ];

  return (
    <section id="quickstart" className="py-24 scroll-mt-20 bg-[#0A2540] relative overflow-hidden border-t border-[#163c63]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.quickStart.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.quickStart.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.quickStart.subtitle}
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-[#0e3153] to-[#081e35] border border-[#1b4e7e] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00D4B2]/60 hover:shadow-2xl hover:shadow-[#00D4B2]/10 transition-all duration-300 relative group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-[#143e66]">
                  <span className="text-4xl font-black font-mono text-[#00D4B2]/40 group-hover:text-[#00D4B2] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#00D4B2]/15 text-[#00D4B2] border border-[#00D4B2]/30 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{currentLang === 'fr' ? step.durationFr : step.durationEn}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="my-6 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-xs text-slate-400 pt-2 border-t border-[#143e66]/50">
                    {currentLang === 'fr' ? step.detailFr : step.detailEn}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-[#143e66] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-300">
                    {currentLang === 'fr' ? step.badgeFr : step.badgeEn}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#00D4B2]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-2.5 rounded-2xl bg-[#09223a] border border-[#1b4b77]">
            <span className="text-xs sm:text-sm text-slate-200 px-4">
              {currentLang === 'fr'
                ? 'Envie de tester sans rien installer ?'
                : 'Want to try it without installing anything?'}
            </span>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] font-bold text-xs sm:text-sm hover:bg-[#00bda0] transition-all cursor-pointer shadow-lg shadow-[#00D4B2]/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>{currentLang === 'fr' ? 'Lancer la Démo Interactive' : 'Launch In-Browser Demo'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
