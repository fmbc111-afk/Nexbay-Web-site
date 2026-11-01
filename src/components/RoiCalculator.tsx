import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { calculateRoi, formatCurrency } from '../utils/calculator';
import { Calculator, Clock, TrendingUp, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];

  const defaultSales = 45;
  const defaultTicket = currency === 'XOF' ? 7500 : currency === 'EUR' ? 12 : 14;
  const defaultCredit = currency === 'XOF' ? 250000 : currency === 'EUR' ? 380 : 420;

  const [dailySales, setDailySales] = useState(defaultSales);
  const [ticketValue, setTicketValue] = useState(defaultTicket);
  const [pendingCredit, setPendingCredit] = useState(defaultCredit);

  const roi = calculateRoi(dailySales, ticketValue, pendingCredit);

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#071c32] text-white relative border-t border-[#163c63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.roi.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.roi.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.roi.subtitle}
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-5xl mx-auto bg-[#09223a] border border-[#163c63] rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Daily Transactions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="daily-sales-range" className="text-xs font-bold text-slate-300">
                  {t.roi.dailySalesLabel}
                </label>
                <span className="text-sm font-black text-[#00D4B2] font-mono">
                  {dailySales} ventes / jour
                </span>
              </div>
              <input
                id="daily-sales-range"
                type="range"
                min="5"
                max="250"
                step="5"
                value={dailySales}
                onChange={(e) => setDailySales(Number(e.target.value))}
                className="w-full h-2 bg-[#06182a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
              />
            </div>

            {/* Slider 2: Average Ticket Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="ticket-value-range" className="text-xs font-bold text-slate-300">
                  {t.roi.ticketValueLabel}
                </label>
                <span className="text-sm font-black text-[#00D4B2] font-mono">
                  {formatCurrency(ticketValue, currency, currentLang)}
                </span>
              </div>
              <input
                id="ticket-value-range"
                type="range"
                min={currency === 'XOF' ? 1000 : 2}
                max={currency === 'XOF' ? 50000 : 80}
                step={currency === 'XOF' ? 500 : 1}
                value={ticketValue}
                onChange={(e) => setTicketValue(Number(e.target.value))}
                className="w-full h-2 bg-[#06182a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
              />
            </div>

            {/* Slider 3: Pending Customer Credit per month */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="pending-credit-range" className="text-xs font-bold text-slate-300">
                  {t.roi.unpaidCreditLabel}
                </label>
                <span className="text-sm font-black text-amber-300 font-mono">
                  {formatCurrency(pendingCredit, currency, currentLang)}
                </span>
              </div>
              <input
                id="pending-credit-range"
                type="range"
                min="0"
                max={currency === 'XOF' ? 1000000 : 1500}
                step={currency === 'XOF' ? 25000 : 25}
                value={pendingCredit}
                onChange={(e) => setPendingCredit(Number(e.target.value))}
                className="w-full h-2 bg-[#06182a] rounded-lg appearance-none cursor-pointer accent-[#00D4B2]"
              />
            </div>

            {/* Documented Model Methodology Box */}
            <div className="p-4 rounded-2xl bg-[#06182a] border border-[#163c63] space-y-2 text-[11px] text-slate-300">
              <span className="font-bold text-[#00D4B2] block uppercase tracking-wider text-[10px]">
                {currentLang === 'fr' ? 'Méthode & Hypothèses du Modèle Indicatif :' : 'Model Method & Assumptions:'}
              </span>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>
                  {currentLang === 'fr'
                    ? 'Temps gagné : base estimée à ~1,5 min par transaction par rapport au carnet papier + 15h de réconciliation mensuelle.'
                    : 'Time saved: estimated base of ~1.5 min per transaction vs paper notebooks + 15h of monthly reconciliation.'}
                </li>
                <li>
                  {currentLang === 'fr'
                    ? 'Recouvrement créances : projection indicative de récupération de 30% des crédits oubliés grâce au carnet structuré.'
                    : 'Debt recovery: indicative projection of 30% recovered on overdue credit tabs through organized statements.'}
                </li>
                <li>
                  {currentLang === 'fr'
                    ? 'Pertes d\'écritures : estimation indicative de ~1,2% du volume pour omissions de saisie en caisse manuelle.'
                    : 'Unrecorded variances: indicative ~1.2% rate for unrecorded manual cash register errors.'}
                </li>
              </ul>
              <p className="text-[10px] text-slate-500 italic pt-1 border-t border-[#123150]">
                {currentLang === 'fr'
                  ? '* Simulation indicative à vocation pédagogique. Les résultats réels dépendent de la gestion propre à chaque commerce et ne constituent pas un engagement contractuel.'
                  : '* Indicative simulation for educational purposes. Actual results vary based on store operations and do not constitute a contractual guarantee.'}
              </p>
            </div>
          </div>

          {/* Outputs (Right 5 cols) */}
          <div className="lg:col-span-5 bg-[#051525] p-6 rounded-2xl border border-[#1b4e7e] space-y-4 shadow-xl">
            <div className="space-y-3">
              {/* Metric 1 */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#00D4B2]" />
                  <span className="text-xs text-slate-300">{t.roi.monthlyHoursSaved}</span>
                </div>
                <span className="font-mono font-black text-white text-base">
                  +{roi.hoursSavedMonth} h
                </span>
              </div>

              {/* Metric 2 */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-slate-300">{t.roi.recoveredRevenue}</span>
                </div>
                <span className="font-mono font-black text-amber-300 text-sm">
                  {formatCurrency(roi.recoveredDebtAnnual, currency, currentLang)}
                </span>
              </div>
            </div>

            {/* Total Annual Benefit Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c2b4c] to-[#081e35] border border-[#00D4B2]/40 text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block">
                {t.roi.annualBenefit}
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#00D4B2] font-mono">
                {formatCurrency(roi.totalAnnualBenefit, currency, currentLang)}
              </div>
              <span className="text-[10px] text-slate-400 block">
                {currentLang === 'fr' ? '(Estimation théorique indicative)' : '(Indicative theoretical estimate)'}
              </span>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-xl bg-[#00D4B2] text-[#0A2540] text-xs font-black hover:bg-[#00bda0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>{t.roi.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
