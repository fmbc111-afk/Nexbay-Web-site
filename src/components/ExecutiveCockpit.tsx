import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { formatCurrency } from '../utils/calculator';
import {
  TrendingUp,
  Users,
  CreditCard,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Search,
  Printer,
  ShieldCheck,
  Award,
  DollarSign,
  Briefcase,
  PieChart,
  ArrowUpRight,
  Flame,
  BadgeAlert,
} from 'lucide-react';

interface ExecutiveCockpitProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const ExecutiveCockpit: React.FC<ExecutiveCockpitProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'products' | 'installments' | 'staff' | 'expenses'>('products');
  const [searchInvoiceQuery, setSearchInvoiceQuery] = useState('');
  const [installmentSimTranche, setInstallmentSimTranche] = useState<number>(2);

  // Conversion factor for mock figures based on currency
  const scale = currency === 'XOF' ? 1 : currency === 'EUR' ? 0.0015 : 0.0017;

  return (
    <section id="cockpit" className="py-20 lg:py-28 bg-[#071b2f] text-white relative border-t border-[#163c63]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/40 text-xs font-semibold text-[#00D4B2] mb-4 shadow-inner">
            <PieChart className="w-3.5 h-3.5" />
            <span>{t.executiveCockpit.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {t.executiveCockpit.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.executiveCockpit.subtitle}
          </p>
        </div>

        {/* 4 Navigation Tabs for Executive View */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-12 bg-[#09223a] p-1.5 rounded-2xl border border-[#163c63]">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'products'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#0c2b4c]'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{t.executiveCockpit.tabProducts}</span>
          </button>

          <button
            onClick={() => setActiveTab('installments')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'installments'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#0c2b4c]'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>{t.executiveCockpit.tabInstallments}</span>
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'staff'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#0c2b4c]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{t.executiveCockpit.tabStaff}</span>
          </button>

          <button
            onClick={() => setActiveTab('expenses')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'expenses'
                ? 'bg-[#00D4B2] text-[#0A2540] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#0c2b4c]'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>{t.executiveCockpit.tabExpenses}</span>
          </button>
        </div>

        {/* TAB 1: PRODUITS GAGNANTS, RENTABILITÉ & ALERTES PÉREMPTION */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Analytics de Performance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.executiveCockpit.analyticsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.executiveCockpit.analyticsSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.executiveCockpit.analyticsDesc}
              </p>

              <div className="p-4 bg-[#051525] rounded-xl border border-[#163c63] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <BadgeAlert className="w-4 h-4" />
                  <span>Anticipation des Ruptures & Péremptions :</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Nexbay calcule la vitesse de vente de chaque article. L'application vous alerte 7 jours avant la rupture prévisible et vous signale les lots à date de péremption proche pour déclencher des promotions ciblées.
                </p>
              </div>
            </div>

            {/* Right Interactive Mockup: Leaderboard of Winning Products */}
            <div className="lg:col-span-7 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Classement de Rentabilité des Stocks
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00D4B2] bg-[#0c2b4c] px-2 py-0.5 rounded">
                  Calcul COGS Automatisé
                </span>
              </div>

              {/* Product 1: Winner */}
              <div className="bg-[#09223a] p-3.5 rounded-xl border border-[#00D4B2]/40 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-[#00D4B2] uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3" /> N°1 PRODUIT GAGNANT (À SURSTOCKER)
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      Batterie Moto 12V 9Ah YUASA
                    </h4>
                    <p className="text-[10px] text-slate-400">Coût d'achat : {formatCurrency(14000 * scale, currency, currentLang)} • Prix Vente : {formatCurrency(24000 * scale, currency, currentLang)}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-[#00D4B2] font-mono">+42% Marge</span>
                    <span className="block text-[9px] text-emerald-400">Vitesse : 4.8 / sem.</span>
                  </div>
                </div>
                <div className="w-full bg-[#06182a] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#00D4B2] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Product 2: High Volume */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">N°2 • Rotation Rapide</span>
                    <h4 className="text-xs font-bold text-slate-200">Huile Moteur 4T Synthèse 1L</h4>
                    <p className="text-[10px] text-slate-400">Coût : {formatCurrency(4500 * scale, currency, currentLang)} • Vente : {formatCurrency(6500 * scale, currency, currentLang)}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-cyan-300 font-mono">+31% Marge</span>
                    <span className="block text-[9px] text-slate-400">Stock restant : 14 blles</span>
                  </div>
                </div>
              </div>

              {/* Critical Alert Product: Approaching Expiry */}
              <div className="bg-[#241315] p-3 rounded-xl border border-red-500/40 space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-red-400 uppercase flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> ALERTE PÉREMPTION PROCHE (LOT #LT-890)
                    </span>
                    <h4 className="text-xs font-bold text-red-200">Colle Joint Moteur Haute Température</h4>
                    <p className="text-[10px] text-slate-400">8 tubes en stock • Date limite dans 14 jours</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-bold">
                      À Liquider
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-[#170a0c] rounded-lg text-[10px] text-slate-300 flex items-center justify-between">
                  <span>Action recommandée par Nexbay :</span>
                  <span className="text-amber-300 font-bold">Remise Flash -20% pour éviter perte</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PAIEMENTS EN TRANCHES & FACTURIER NUMÉRIQUE */}
        {activeTab === 'installments' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Facilité de Caisse Sécurisée</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.executiveCockpit.installmentsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.executiveCockpit.installmentsSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.executiveCockpit.installmentsDesc}
              </p>

              {/* Facturier Numérique Highlight */}
              <div className="p-4 bg-[#051525] rounded-xl border border-[#163c63] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#00D4B2] font-bold">
                  <FileText className="w-4 h-4" />
                  <span>{t.executiveCockpit.invoicesTitle}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {t.executiveCockpit.invoicesDesc}
                </p>
              </div>
            </div>

            {/* Right Interactive Mockup: Installment Schedule & Searchable Vault */}
            <div className="lg:col-span-7 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-5">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#00D4B2] font-bold">VENTE EN 3 TRANCHES #ECH-4402</span>
                  <h4 className="text-xs font-bold text-white">Client : Mamadou B. • Matériel Agricole / Groupe</h4>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                  En cours (Tranche 2/3)
                </span>
              </div>

              {/* Tranche Stepper Visual */}
              <div className="space-y-2.5 text-xs">
                {/* Tranche 1 */}
                <div className="bg-[#09223a] p-3 rounded-xl border border-emerald-500/40 flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-white">Tranche 1 (Comptant au départ)</p>
                      <p className="text-[10px] text-slate-400">Réglé via Wave • Reçu #REC-1049</p>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">
                    {formatCurrency(50000 * scale, currency, currentLang)}
                  </span>
                </div>

                {/* Tranche 2 */}
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#00D4B2]/40 flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#00D4B2]/20 text-[#00D4B2] flex items-center justify-center font-bold text-[10px]">
                      2
                    </div>
                    <div>
                      <p className="font-bold text-white">Tranche 2 (Échéance 15 jours)</p>
                      <p className="text-[10px] text-slate-400">Réglé Espèces • Reçu #REC-1088</p>
                    </div>
                  </div>
                  <span className="font-bold text-[#00D4B2] font-mono">
                    {formatCurrency(35000 * scale, currency, currentLang)}
                  </span>
                </div>

                {/* Tranche 3 */}
                <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
                      3
                    </div>
                    <div>
                      <p className="font-bold text-white">Tranche 3 (Solde final à venir)</p>
                      <p className="text-[10px] text-amber-300">Échéance : 10 Novembre 2026</p>
                    </div>
                  </div>
                  <span className="font-bold text-amber-300 font-mono">
                    {formatCurrency(35000 * scale, currency, currentLang)}
                  </span>
                </div>
              </div>

              {/* Instant Search Bar for Centralized Invoice Vault */}
              <div className="pt-2 border-t border-[#163c63] space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Recherche Rapide dans le Facturier Numérique Centralisé (Adieu au papier) :
                </span>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Rechercher par n° de facture, nom client, date ou montant..."
                    value={searchInvoiceQuery}
                    onChange={(e) => setSearchInvoiceQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#09223a] border border-[#163c63] rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00D4B2]"
                  />
                </div>
                <div className="p-2 bg-[#09223a] rounded-lg border border-[#163c63] text-[10px] text-slate-300 flex justify-between items-center">
                  <span>Facture #FAC-2026-091 • Mamadou B. (120 000 FCFA)</span>
                  <span className="text-[#00D4B2] font-semibold cursor-pointer hover:underline flex items-center gap-1">
                    <Printer className="w-3 h-3" /> Réimprimer 58mm
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GESTION PERSONNEL & CONTRÔLE D'ASSIDUITÉ */}
        {activeTab === 'staff' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Ressources Humaines & Rôles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.executiveCockpit.staffTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.executiveCockpit.staffSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.executiveCockpit.staffDesc}
              </p>

              <div className="p-4 bg-[#051525] rounded-xl border border-[#163c63] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#00D4B2] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sécurité des Rôles par Code PIN :</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Le caissier ne peut pas modifier les prix d'achat ni voir la marge brute totale. Le mécanicien ne voit que ses fiches de service atelier. Seul le propriétaire accède au journal d'audit complet et aux rapports de trésorerie.
                </p>
              </div>
            </div>

            {/* Right Interactive Mockup: Team Live Roster */}
            <div className="lg:col-span-7 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00D4B2]" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    Pointages & Performances du Jour (31 Octobre)
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">3 Collaborateurs Actifs</span>
              </div>

              {/* Staff Member 1 */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 font-black flex items-center justify-center text-xs border border-emerald-500/30">
                    C1
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Poste Caisse #1 (Caissière)</h4>
                    <p className="text-[10px] text-slate-400 font-mono">PIN: •••• • Rôle : Vente & Encaissements</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    Session Active
                  </span>
                  <span className="block text-[10px] text-slate-300 mt-0.5">38 Ventes traitées</span>
                </div>
              </div>

              {/* Staff Member 2 */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-300 font-black flex items-center justify-center text-xs border border-amber-500/30">
                    AT
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Chef d'Atelier (Réparations)</h4>
                    <p className="text-[10px] text-slate-400 font-mono">PIN: •••• • Rôle : Diagnostic & Réparation</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                    Session Active
                  </span>
                  <span className="block text-[10px] text-slate-300 mt-0.5">4 Tickets terminés</span>
                </div>
              </div>

              {/* Staff Member 3 */}
              <div className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-300 font-black flex items-center justify-center text-xs border border-cyan-500/30">
                    VP
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Vendeur Polyvalent (Rayon)</h4>
                    <p className="text-[10px] text-slate-400 font-mono">PIN: •••• • Rôle : Vente & Rayonnage</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    Session Active
                  </span>
                  <span className="block text-[10px] text-slate-300 mt-0.5">19 Ventes traitées</span>
                </div>
              </div>

              <div className="p-3 bg-[#06182a] rounded-xl border border-[#163c63] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Total Chiffre d'Affaires Réalisé par l'Équipe :</span>
                <span className="font-bold text-[#00D4B2] font-mono text-xs">
                  {formatCurrency(285000 * scale, currency, currentLang)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DÉPENSES & BÉNÉFICE NET RÉEL */}
        {activeTab === 'expenses' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#09223a] rounded-3xl p-6 sm:p-10 border border-[#1b4e7e] shadow-2xl">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Trésorerie & Marges Nettes</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.executiveCockpit.expensesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-semibold bg-[#0c2b4c] p-2.5 rounded-lg border border-[#16426d]">
                {t.executiveCockpit.expensesSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.executiveCockpit.expensesDesc}
              </p>

              <div className="p-4 bg-[#051525] rounded-xl border border-[#163c63] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Éviter l'Illusion du Chiffre d'Affaires :</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Faire 5 000 000 FCFA de ventes ne sert à rien si les charges en absorbent 4 800 000 FCFA. Nexbay déduit systématiquement le coût d'achat des marchandises (COGS) et toutes vos charges enregistrées pour afficher votre véritable bénéfice en poche.
                </p>
              </div>
            </div>

            {/* Right Interactive Mockup: Categorized Expenses & Net Bottom Line */}
            <div className="lg:col-span-7 bg-[#051525] p-5 sm:p-6 rounded-2xl border border-[#1d4c79] shadow-xl space-y-4 text-xs">
              <div className="flex justify-between items-center border-b border-[#163c63] pb-3">
                <span className="font-bold text-white uppercase tracking-wider">
                  Charges d'Exploitation Mensuelles Enregistrées
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Clôture du Mois</span>
              </div>

              <div className="space-y-2">
                <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center">
                  <span className="text-slate-300">Loyer Magasin & Local Atelier</span>
                  <span className="font-bold text-white font-mono">{formatCurrency(150000 * scale, currency, currentLang)}</span>
                </div>
                <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center">
                  <span className="text-slate-300">Carburant Groupe Électrogène & Électricité</span>
                  <span className="font-bold text-white font-mono">{formatCurrency(48000 * scale, currency, currentLang)}</span>
                </div>
                <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center">
                  <span className="text-slate-300">Salaires Fixes & Primes Personnel</span>
                  <span className="font-bold text-white font-mono">{formatCurrency(180000 * scale, currency, currentLang)}</span>
                </div>
                <div className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex justify-between items-center">
                  <span className="text-slate-300">Frais de Transport & Dédouanement Stock</span>
                  <span className="font-bold text-white font-mono">{formatCurrency(35000 * scale, currency, currentLang)}</span>
                </div>
              </div>

              {/* Bottom Line Calculation Card */}
              <div className="p-4 rounded-xl bg-[#0c2b4c] border border-[#00D4B2]/40 space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Chiffre d'Affaires Brut :</span>
                  <span className="font-bold text-white">{formatCurrency(2450000 * scale, currency, currentLang)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>- Coût Réel Marchandises Vendues (COGS) :</span>
                  <span>- {formatCurrency(1450000 * scale, currency, currentLang)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>- Total Dépenses d'Exploitation :</span>
                  <span>- {formatCurrency(413000 * scale, currency, currentLang)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#184570]">
                  <span className="font-black text-white text-sm">BÉNÉFICE NET RÉEL EN POCHE :</span>
                  <span className="text-base sm:text-lg font-black text-[#00D4B2] font-mono">
                    +{formatCurrency(587000 * scale, currency, currentLang)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
