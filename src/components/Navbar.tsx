import React, { useState, useRef, useEffect } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import {
  Globe,
  Menu,
  X,
  Smartphone,
  Sparkles,
  ChevronDown,
  ShoppingBag,
  Wrench,
  Zap,
  Users,
  Printer,
  Calculator,
  Layers,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currency,
  onCurrencyChange,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [innovationsOpen, setInnovationsOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const innovationsRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang];

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (innovationsRef.current && !innovationsRef.current.contains(event.target as Node)) {
        setInnovationsOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setCurrencyDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0A2540]/90 border-b border-[#163c63]/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00D4B2] rounded-lg p-1 shrink-0"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d3156] to-[#0A2540] border border-[#00D4B2]/40 p-1 flex items-center justify-center shadow-lg shadow-[#00D4B2]/10 group-hover:border-[#00D4B2] transition-colors">
            <img
              src={BRAND_CONFIG.iconUrl}
              alt={`${BRAND_CONFIG.name} Logo`}
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                {BRAND_CONFIG.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse"></span>
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#00D4B2]/90">
              Commerce & Services
            </span>
          </div>
        </a>

        {/* Desktop Grouped Navigation: Elegant Mega-Dropdowns Solving Header Crowding Without Deleting Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300"
          aria-label="Navigation principale"
        >
          {/* Dropdown 1: Modules & Solutions */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setInnovationsOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                solutionsOpen
                  ? 'text-[#00D4B2] bg-[#0e3153]'
                  : 'text-slate-200 hover:text-white hover:bg-[#0c2847]'
              }`}
              aria-expanded={solutionsOpen}
            >
              <ShoppingBag className="w-4 h-4 text-[#00D4B2]" />
              <span>{t.nav.modulesTitle}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsOpen ? 'rotate-180 text-[#00D4B2]' : 'text-slate-400'
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-[#081e35] border border-[#1b4e7e] rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn">
                <a
                  href="#commerce"
                  onClick={() => setSolutionsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#00D4B2]/15 text-[#00D4B2] group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.commerce}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.modulesSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#services"
                  onClick={() => setSolutionsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.services}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.servicesSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#industries"
                  onClick={() => setSolutionsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amber-400/15 text-amber-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.industriesTitle}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.industriesSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#cockpit"
                  onClick={() => setSolutionsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.cockpit}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.cockpitSub}
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Dropdown 2: Exclusivités & Plateforme */}
          <div className="relative" ref={innovationsRef}>
            <button
              onClick={() => {
                setInnovationsOpen(!innovationsOpen);
                setSolutionsOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                innovationsOpen
                  ? 'text-[#00D4B2] bg-[#0e3153]'
                  : 'text-slate-200 hover:text-white hover:bg-[#0c2847]'
              }`}
              aria-expanded={innovationsOpen}
            >
              <Sparkles className="w-4 h-4 text-[#00D4B2]" />
              <span>{t.nav.innovationsTitle}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  innovationsOpen ? 'rotate-180 text-[#00D4B2]' : 'text-slate-400'
                }`}
              />
            </button>

            {innovationsOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-[#081e35] border border-[#1b4e7e] rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn max-h-[85vh] overflow-y-auto">
                <a
                  href="#why-different"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#00D4B2]/20 text-[#00D4B2] group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                        {t.nav.whyDifferent}
                      </span>
                      <span className="text-[9px] bg-[#00D4B2]/20 text-[#00D4B2] font-black px-1.5 py-0.2 rounded">
                        ZAP
                      </span>
                    </div>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.whyDifferentSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#ai-features"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-[#00D4B2] group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                        {t.nav.aiTitle}
                      </span>
                      <span className="text-[9px] bg-cyan-500/20 text-cyan-300 font-black px-1.5 py-0.2 rounded">
                        GEMINI
                      </span>
                    </div>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.aiSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#transformation"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-pink-500/15 text-pink-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.transformationTitle}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.transformationSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#multistore"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.multistoreTitle}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.multistoreSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#quickstart"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.quickstartTitle}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.quickstartSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#calculator"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.calculator}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.calculatorSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#features"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.features}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.featuresSub}
                    </span>
                  </div>
                </a>

                <a
                  href="#hardware"
                  onClick={() => setInnovationsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0c2d4d] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300 group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] transition-colors">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                      {t.nav.hardware}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {t.nav.hardwareSub}
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Direct FAQ Link */}
          <a
            href="#faq"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-[#0c2847] transition-all"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>{t.nav.faq}</span>
          </a>
        </nav>

        {/* Right Action Controls: Unified, Compact & Perfectly Proportioned */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {/* Currency Selector */}
          <div className="relative" ref={currencyRef}>
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0e3153] border border-[#1b4875] text-xs font-semibold text-slate-200 hover:text-white hover:border-[#00D4B2]/50 transition-all cursor-pointer"
              aria-label="Sélectionner la devise"
            >
              <span>{currency === 'XOF' ? 'FCFA' : currency}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-32 bg-[#09223a] border border-[#1b4875] rounded-xl shadow-2xl py-1 z-50 animate-fadeIn">
                {(['XOF', 'EUR', 'USD'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-[#00D4B2]/10 hover:text-[#00D4B2] transition-colors flex items-center justify-between cursor-pointer ${
                      currency === curr ? 'text-[#00D4B2] font-semibold bg-[#00D4B2]/5' : 'text-slate-300'
                    }`}
                  >
                    <span>{curr === 'XOF' ? 'FCFA (CFA)' : curr}</span>
                    {currency === curr && <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2]"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-[#0e3153] border border-[#1b4875] rounded-lg p-0.5">
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                currentLang === 'fr'
                  ? 'bg-[#00D4B2] text-[#0A2540] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#00D4B2] text-[#0A2540] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Interactive Demo CTA */}
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#113a63] to-[#164a7e] border border-[#235d96] hover:border-[#00D4B2]/60 hover:shadow-lg hover:shadow-[#00D4B2]/10 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D4B2]" />
            <span className="hidden xl:inline">{t.nav.tryDemo}</span>
            <span className="xl:hidden">Démo</span>
          </button>

          {/* Primary Download CTA */}
          <a
            href="#download"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0A2540] bg-[#00D4B2] hover:bg-[#00bda0] shadow-lg shadow-[#00D4B2]/20 hover:shadow-[#00D4B2]/40 transition-all cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.nav.download}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile language toggle */}
          <button
            onClick={() => onLanguageChange(currentLang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0e3153] border border-[#1b4875] text-xs font-bold text-[#00D4B2]"
            aria-label="Changer de langue"
          >
            <Globe className="w-3 h-3" />
            <span>{currentLang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0e3153] text-slate-200 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Organized into Clear Groups, Preserving Every Single Section) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2540] border-b border-[#163c63] px-5 py-6 space-y-5 max-h-[85vh] overflow-y-auto">
          {/* Group 1: Modules */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#00D4B2] uppercase tracking-wider block">
              {currentLang === 'fr' ? 'Modules Opérationnels' : 'Operational Modules'}
            </span>
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-200 pl-2 border-l border-[#1b4875]">
              <a
                href="#commerce"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.commerce}</span>
                <span className="text-[10px] text-slate-400">POS & Stock</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.services}</span>
                <span className="text-[10px] text-slate-400">Atelier & Tickets</span>
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{currentLang === 'fr' ? 'Solutions par Métier' : 'Industry Solutions'}</span>
                <span className="text-[10px] text-slate-400">4 Profils</span>
              </a>
              <a
                href="#cockpit"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.cockpit}</span>
                <span className="text-[10px] text-slate-400">RH & Rentabilité</span>
              </a>
            </div>
          </div>

          {/* Group 2: Innovations & Outils */}
          <div className="space-y-2 pt-2 border-t border-[#163c63]/60">
            <span className="text-[10px] font-bold text-[#00D4B2] uppercase tracking-wider block">
              {currentLang === 'fr' ? 'Innovations Exclusives' : 'Exclusive Innovations'}
            </span>
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-200 pl-2 border-l border-[#1b4875]">
              <a
                href="#why-different"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#00D4B2] font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.nav.whyDifferent}</span>
                </div>
                <span className="text-[9px] bg-[#00D4B2]/20 text-[#00D4B2] px-1.5 py-0.5 rounded font-bold">
                  ZAP
                </span>
              </a>
              <a
                href="#transformation"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{currentLang === 'fr' ? 'Avant vs Avec Nexbay' : 'Before vs With Nexbay'}</span>
                <span className="text-[10px] text-slate-400">Transformation</span>
              </a>
              <a
                href="#multistore"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{currentLang === 'fr' ? 'Multi-Boutiques & Sécurité' : 'Multi-Store & Security'}</span>
                <span className="text-[10px] text-slate-400">Cloud Restore</span>
              </a>
              <a
                href="#quickstart"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{currentLang === 'fr' ? 'Démarrage en 5 Minutes' : '5-Min Quick Start'}</span>
                <span className="text-[10px] text-slate-400">3 Étapes</span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.calculator}</span>
                <span className="text-[10px] text-slate-400">Simulateur Marge</span>
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.features}</span>
                <span className="text-[10px] text-slate-400">Bento Grid</span>
              </a>
              <a
                href="#hardware"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2] flex items-center justify-between"
              >
                <span>{t.nav.hardware}</span>
                <span className="text-[10px] text-slate-400">Bluetooth ESC/POS</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#00D4B2]"
              >
                {t.nav.faq}
              </a>
            </div>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-4 border-t border-[#163c63] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{currentLang === 'fr' ? 'Devise d\'affichage :' : 'Display Currency:'}</span>
              <div className="flex gap-1.5">
                {(['XOF', 'EUR', 'USD'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      currency === curr ? 'bg-[#00D4B2] text-[#0A2540]' : 'bg-[#0e3153] text-slate-300'
                    }`}
                  >
                    {curr === 'XOF' ? 'FCFA' : curr}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#113a63] border border-[#235d96]"
            >
              <Sparkles className="w-4 h-4 text-[#00D4B2]" />
              <span>{t.nav.tryDemo}</span>
            </button>

            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-[#0A2540] bg-[#00D4B2]"
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.nav.download}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
