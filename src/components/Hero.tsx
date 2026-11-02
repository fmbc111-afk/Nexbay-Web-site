import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { formatCurrency } from '../utils/calculator';
import {
  Smartphone,
  Sparkles,
  CheckCircle2,
  Printer,
  WifiOff,
  TrendingUp,
  CreditCard,
  Barcode,
  ArrowRight,
  ShieldCheck,
  Zap,
  Store,
  Wrench,
} from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
  onApkDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, currency, onOpenDemo, onApkDownload }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeScreenTab, setActiveScreenTab] = useState<'pos' | 'service'>('pos');
  const [simulatedPrinted, setSimulatedPrinted] = useState(false);

  const mockCartTotal = currency === 'XOF' ? 47500 : currency === 'EUR' ? 72 : 78;

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-[#0A2540] text-white">
      {/* Background Atmosphere & Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#00D4B2]/15 blur-3xl" />
        <div className="absolute top-24 right-1/4 w-[450px] h-[450px] rounded-full bg-[#164a7e]/30 blur-3xl" />
      </div>

      {/* Grid Pattern Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e3153] border border-[#00D4B2]/30 shadow-inner text-xs font-semibold text-[#00D4B2] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              {t.hero.titleLine1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4B2] via-[#2ce6c9] to-[#70f7e4] underline decoration-[#00D4B2]/40 decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>{' '}
              <br className="hidden sm:inline" />
              {t.hero.titleLine2}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onApkDownload}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-[#0A2540] bg-[#00D4B2] hover:bg-[#00bda0] shadow-xl shadow-[#00D4B2]/25 hover:shadow-[#00D4B2]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Smartphone className="w-5 h-5" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-[#0e3153]/80 hover:bg-[#133e68] border border-[#1e5082] hover:border-[#00D4B2]/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#00D4B2]" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust and Sector Focus Sub-bar */}
            <div className="mt-8 pt-6 border-t border-[#163c63]/70 w-full flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                    <Store className="w-3.5 h-3.5" />
                  </span>
                  <span className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                    <Wrench className="w-3.5 h-3.5" />
                  </span>
                  <span className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300">
                    <Smartphone className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white block">{t.hero.trustRating}</span>
                  <span className="text-slate-400">{t.hero.trustSub}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300 bg-[#0c2847] px-3 py-1.5 rounded-lg border border-[#163c63]">
                <ShieldCheck className="w-4 h-4 text-[#00D4B2]" />
                <span>{currentLang === 'fr' ? 'Architecture locale chiffrée • Zéro abonnement forcé' : 'Local encrypted database • No forced subscription'}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="bg-[#081e35] p-3.5 rounded-xl border border-[#163c63]">
                <div className="text-2xl font-black text-[#00D4B2]">{t.hero.stat1Value}</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">{t.hero.stat1Label}</div>
              </div>
              <div className="bg-[#081e35] p-3.5 rounded-xl border border-[#163c63]">
                <div className="text-2xl font-black text-white">{t.hero.stat2Value}</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">{t.hero.stat2Label}</div>
              </div>
              <div className="bg-[#081e35] p-3.5 rounded-xl border border-[#163c63]">
                <div className="text-2xl font-black text-emerald-400">{t.hero.stat3Value}</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">{t.hero.stat3Label}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic, High-Fidelity Mobile App Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Backlight Behind Device */}
            <div className="absolute w-72 h-96 bg-gradient-to-tr from-[#00D4B2]/30 to-[#164a7e]/40 rounded-full blur-3xl -z-10" />

            {/* Floating Live Badge 1: ESC/POS Thermal Receipt */}
            <div className="absolute -top-4 -left-6 sm:-left-10 z-20 bg-[#09223a]/95 backdrop-blur-md border border-[#00D4B2]/50 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-bounce [animation-duration:5s]">
              <div className="w-9 h-9 rounded-lg bg-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2]">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">ESC/POS 58mm Connecté</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Bluetooth thermique actif
                </p>
              </div>
            </div>

            {/* Floating Live Badge 2: Mobile Money Reconciliation */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-[#09223a]/95 backdrop-blur-md border border-[#1b4e7e] rounded-xl p-3 shadow-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Wave & Orange Money</p>
                <p className="text-[10px] text-slate-300">
                  {currentLang === 'fr' ? 'Contrôle des flux & caisse Z' : 'Cash flow & Z-close tracking'}
                </p>
              </div>
            </div>

            {/* Smartphone Outer Chassis Frame */}
            <div className="relative w-[320px] sm:w-[350px] rounded-[44px] bg-[#030d17] p-3 shadow-2xl shadow-black/80 border-[4px] border-[#1e4873] ring-1 ring-[#00D4B2]/30">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#030d17] rounded-full z-30 flex items-center justify-end px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0a1829] border border-slate-700/60" />
              </div>

              {/* Screen Inner Viewport */}
              <div className="relative rounded-[36px] overflow-hidden bg-[#071d33] border border-[#163c63] text-white flex flex-col h-[650px] select-none font-sans">
                {/* Mobile Status Bar */}
                <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[11px] font-semibold text-slate-300 bg-[#0A2540]">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span title="Mode Hors-ligne Actif">
                      <WifiOff className="w-3 h-3 text-[#00D4B2]" />
                    </span>
                    <span className="text-[9px] font-bold text-[#00D4B2] bg-[#0e3153] px-1 rounded">LOCAL</span>
                    <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
                      <div className="w-2.5 h-1 bg-[#00D4B2] rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* App Internal Header */}
                <div className="px-4 py-3 bg-[#0A2540] border-b border-[#163c63] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={BRAND_CONFIG.iconUrl} alt="V" className="w-6 h-6 object-contain" />
                    <div>
                      <span className="text-xs font-black tracking-tight">{BRAND_CONFIG.name}</span>
                      <span className="block text-[9px] text-[#00D4B2] font-semibold">Boutique & Atelier Pro</span>
                    </div>
                  </div>

                  {/* Segmented Screen Switcher */}
                  <div className="flex bg-[#081e35] p-0.5 rounded-lg border border-[#163c63] text-[10px]">
                    <button
                      onClick={() => setActiveScreenTab('pos')}
                      className={`px-2 py-0.5 rounded-md font-bold transition-all ${
                        activeScreenTab === 'pos' ? 'bg-[#00D4B2] text-[#0A2540]' : 'text-slate-400'
                      }`}
                    >
                      Caisse POS
                    </button>
                    <button
                      onClick={() => setActiveScreenTab('service')}
                      className={`px-2 py-0.5 rounded-md font-bold transition-all ${
                        activeScreenTab === 'service' ? 'bg-[#00D4B2] text-[#0A2540]' : 'text-slate-400'
                      }`}
                    >
                      Atelier
                    </button>
                  </div>
                </div>

                {/* Screen Content: POS Mode */}
                {activeScreenTab === 'pos' && (
                  <div className="flex-1 flex flex-col justify-between p-3.5 overflow-y-auto space-y-3 bg-gradient-to-b from-[#071d33] to-[#051525]">
                    {/* Top KPI Card */}
                    <div className="bg-[#0b2744] p-3 rounded-xl border border-[#184570] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Chiffre du Jour</span>
                        <div className="text-lg font-black text-white">{formatCurrency(mockCartTotal * 6, currency, currentLang)}</div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" /> Caisse Ouverte
                        </span>
                        <span className="block text-[9px] text-slate-400 mt-0.5">Session #048</span>
                      </div>
                    </div>

                    {/* Scan Barcode Quick Trigger */}
                    <div className="bg-[#0d3156]/60 border border-[#00D4B2]/40 rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#00D4B2]/20 text-[#00D4B2]">
                          <Barcode className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Scanner Code-barres</p>
                          <p className="text-[9px] text-slate-300">Caméra prête (EAN-13 / Serial)</p>
                        </div>
                      </div>
                      <span className="text-[9px] bg-[#00D4B2] text-[#0A2540] font-bold px-2 py-1 rounded-md">
                        SCAN
                      </span>
                    </div>

                    {/* Active Cart Items */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                        <span>Articles au panier (3)</span>
                        <span className="text-[#00D4B2]">Mise en attente</span>
                      </div>

                      <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-slate-100">Batterie YTX9-BS 12V</p>
                          <p className="text-[9px] text-slate-400">Ref: YUASA-092 • Serial: #BT-8891</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00D4B2]">{formatCurrency(mockCartTotal * 0.55, currency, currentLang)}</p>
                          <span className="text-[9px] text-slate-400">Qté: 1</span>
                        </div>
                      </div>

                      <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-slate-100">Huile Moteur Synthèse 4T 1L</p>
                          <p className="text-[9px] text-slate-400">Stock restant: 14 blles</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00D4B2]">{formatCurrency(mockCartTotal * 0.25, currency, currentLang)}</p>
                          <span className="text-[9px] text-slate-400">Qté: 2</span>
                        </div>
                      </div>

                      <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-slate-100">Bougie Allumage NGK CR8E</p>
                          <span className="text-[9px] text-amber-400 bg-amber-500/10 px-1 rounded">Stock critique: 2</span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00D4B2]">{formatCurrency(mockCartTotal * 0.20, currency, currentLang)}</p>
                          <span className="text-[9px] text-slate-400">Qté: 1</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Checkout & Payment Triggers */}
                    <div className="bg-[#09223a] p-3 rounded-xl border border-[#1b4e7e] space-y-2 mt-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400 font-semibold">Total Panier</span>
                        <span className="text-base font-black text-white">{formatCurrency(mockCartTotal, currency, currentLang)}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => setSimulatedPrinted(true)}
                          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#00D4B2] text-[#0A2540] text-xs font-black shadow-md hover:bg-[#00bda0]"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Mobile Money</span>
                        </button>
                        <button
                          onClick={() => setSimulatedPrinted(true)}
                          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#0e3153] border border-[#1c4c7c] text-slate-100 text-xs font-bold hover:bg-[#133e68]"
                        >
                          <CreditCard className="w-3.5 h-3.5 text-[#00D4B2]" />
                          <span>Espèces</span>
                        </button>
                      </div>

                      {simulatedPrinted && (
                        <div className="bg-emerald-500/15 border border-emerald-400/50 p-2 rounded-lg text-[10px] text-emerald-300 flex items-center justify-between animate-fadeIn">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Reçu imprimé via ESC/POS 58mm
                          </span>
                          <button
                            onClick={() => setSimulatedPrinted(false)}
                            className="text-slate-400 hover:text-white text-[9px] underline"
                          >
                            Masquer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Screen Content: Service / Workshop Mode */}
                {activeScreenTab === 'service' && (
                  <div className="flex-1 flex flex-col justify-between p-3.5 overflow-y-auto space-y-3 bg-gradient-to-b from-[#071d33] to-[#051525]">
                    <div className="bg-[#0b2744] p-3 rounded-xl border border-[#184570] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Tickets Atelier Actifs</span>
                        <div className="text-lg font-black text-[#00D4B2]">7 En cours • 3 Prêts</div>
                      </div>
                      <span className="text-[9px] bg-red-500/20 text-red-300 font-bold px-2 py-0.5 rounded-full border border-red-500/40">
                        1 URGENT
                      </span>
                    </div>

                    {/* Active Intervention Ticket Card */}
                    <div className="bg-[#09223a] p-3 rounded-xl border border-[#00D4B2]/40 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[9px] text-[#00D4B2] font-mono font-bold">TICKET #TK-0429</span>
                          <h4 className="text-xs font-bold text-white mt-0.5">Moto Yamaha Crypton 115</h4>
                          <p className="text-[10px] text-slate-400">Client : Mamadou B. (VIP)</p>
                        </div>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Prêt pour retrait
                        </span>
                      </div>

                      <div className="bg-[#06182a] p-2 rounded-lg text-[10px] space-y-1 border border-[#163c63]">
                        <div className="flex justify-between text-slate-300">
                          <span>Diagnostic : Freins & Vidange</span>
                          <span className="text-[#00D4B2]">Validé</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Pièces déduites du stock :</span>
                          <span className="text-white">Huile 1L + Plaquettes</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Acompte versé à l'entrée :</span>
                          <span className="text-emerald-400 font-bold">{formatCurrency(mockCartTotal * 0.4, currency, currentLang)}</span>
                        </div>
                        <div className="flex justify-between text-slate-200 font-bold pt-1 border-t border-[#163c63]">
                          <span>Reste à payer :</span>
                          <span className="text-amber-400">{formatCurrency(mockCartTotal * 0.35, currency, currentLang)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSimulatedPrinted(true)}
                        className="w-full py-1.5 rounded-lg bg-[#0e3153] border border-[#00D4B2]/50 text-[#00D4B2] text-[10px] font-bold flex items-center justify-center gap-1.5"
                      >
                        <Printer className="w-3 h-3" />
                        Imprimer Reçu de Clôture Atelier
                      </button>
                    </div>

                    <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[10px] font-bold text-slate-400">Dépenses Opérationnelles Atelier</span>
                        <span className="text-[10px] text-slate-300">Ratio: 18%</span>
                      </div>
                      <div className="w-full bg-[#0e3153] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#00D4B2] h-1.5 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                      <p className="text-[9px] text-slate-400 pt-0.5">Loyer, pièces consommées & énergie sous contrôle</p>
                    </div>
                  </div>
                )}

                {/* Bottom App Bar */}
                <div className="px-4 py-2.5 bg-[#0A2540] border-t border-[#163c63] flex justify-around text-[10px] text-slate-400 font-medium">
                  <span className="text-[#00D4B2] font-bold">Ventes</span>
                  <span>Articles</span>
                  <span>Atelier</span>
                  <span>Caisse Z</span>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
