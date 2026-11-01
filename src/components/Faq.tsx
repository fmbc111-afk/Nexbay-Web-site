import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqProps {
  currentLang: Language;
}

export const Faq: React.FC<FaqProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#071c32] text-white relative border-t border-[#163c63]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#09223a] rounded-2xl border border-[#163c63] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-1 focus:ring-[#00D4B2] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0e3153] flex items-center justify-center shrink-0 text-[#00D4B2] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00D4B2] text-[#0A2540]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#163c63]/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
