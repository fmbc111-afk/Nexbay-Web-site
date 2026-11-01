import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { formatCurrency } from '../utils/calculator';
import {
  Hammer,
  Wrench,
  Smartphone,
  Scissors,
  CheckCircle2,
  TrendingUp,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface IndustrySolutionsProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

type IndustryId = 'hardware' | 'mechanic' | 'tech' | 'fashion';

interface IndustryData {
  id: IndustryId;
  labelFr: string;
  labelEn: string;
  taglineFr: string;
  taglineEn: string;
  icon: React.ElementType;
  badgeColor: string;
  badgeBg: string;
  keyFeaturesFr: string[];
  keyFeaturesEn: string[];
  mockupData: {
    title: string;
    client: string;
    items: { name: string; qty: number; price: number; type: 'stock' | 'service' }[];
    status: string;
    deposit?: number;
    zapSync?: boolean;
  };
  metrics: { value: string; labelFr: string; labelEn: string };
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const [activeTab, setActiveTab] = useState<IndustryId>('hardware');
  const t = TRANSLATIONS[currentLang];

  const industries: IndustryData[] = [
    {
      id: 'hardware',
      labelFr: 'Quincaillerie & BTP',
      labelEn: 'Hardware & Building',
      taglineFr: 'Vente en gros, sacs de ciment, fer à béton et crédits maçons suivis au franc près',
      taglineEn: 'Bulk bags, rebar cuts, contractor site credit & zero-dispute supplier ledgers',
      icon: Hammer,
      badgeColor: 'text-amber-400',
      badgeBg: 'bg-amber-400/10 border-amber-400/30',
      keyFeaturesFr: [
        'Gestion des unités fractionnées (barres de fer, mètres de câble, sacs de ciment)',
        'Carnet ZAP partagé avec les maçons et chefs de chantier pour verrouiller les crédits',
        'Alertes automatiques avant rupture des produits phares à forte rotation',
        'Devis chantiers convertibles en facture payée en tranches en 1 clic',
      ],
      keyFeaturesEn: [
        'Fractional unit management (rebar bars, wire length, bulk cement bags)',
        'ZAP ledger synced directly with contractors and builders to freeze credit disputes',
        'Smart reorder warnings before stockouts on high-velocity builder staples',
        'Site quotations converted into milestone installment invoices in one tap',
      ],
      mockupData: {
        title: 'Vente Matériaux Chantier #CH-408',
        client: 'Chantier Résidence Nord (M. D.)',
        items: [
          { name: 'Ciment Dangote 50kg CPJ 42.5', qty: 20, price: 4600, type: 'stock' },
          { name: 'Fer à béton Ø 10mm (Barre 12m)', qty: 15, price: 3800, type: 'stock' },
          { name: 'Transport & Déchargement Chantier', qty: 1, price: 15000, type: 'service' },
        ],
        status: 'Crédit Partiel Enregistré',
        deposit: 50000,
        zapSync: true,
      },
      metrics: {
        value: 'Suivi Précis',
        labelFr: 'Des crédits chantiers documentés avec reçus',
        labelEn: 'Of contractor credit ledgers documented with receipts',
      },
    },
    {
      id: 'mechanic',
      labelFr: 'Atelier Moto & Auto',
      labelEn: 'Motorcycle & Auto Lab',
      taglineFr: 'Déduction automatique des pièces montées sur chaque engin et suivi des acomptes',
      taglineEn: 'Automatic spare parts deduction upon repair check-in and technician commission tracking',
      icon: Wrench,
      badgeColor: 'text-[#00D4B2]',
      badgeBg: 'bg-[#00D4B2]/10 border-[#00D4B2]/30',
      keyFeaturesFr: [
        'Fiche d\'intervention avec plaque d\'immatriculation, kilométrage et diagnostic',
        'Déstockage instantané des pièces (plaquettes, bougies, filtres, huiles) dès pose',
        'Suivi rigoureux de l\'acompte versé pour l\'achat des pièces avant travaux',
        'Impression de reçu thermique ESC/POS 58mm avec QR code pour le retrait du véhicule',
      ],
      keyFeaturesEn: [
        'Repair ticket with vehicle license plate, mileage, and technician diagnostics',
        'Instant inventory drop for spare parts (brake pads, spark plugs, oil filters) when installed',
        'Clear tracking of upfront cash deposits before purchasing special mechanical parts',
        'Thermal receipt printout with vehicle pickup QR code and remaining balance',
      ],
      mockupData: {
        title: 'Fiche Atelier Moto #T-1092',
        client: 'Client Atelier #42 (Yamaha 125 DT)',
        items: [
          { name: 'Plaquettes de frein avant OEM', qty: 1, price: 8500, type: 'stock' },
          { name: 'Bidon Huile 4T Total 1L', qty: 2, price: 4000, type: 'stock' },
          { name: 'Main d\'œuvre : Vidange & Purge freins', qty: 1, price: 6000, type: 'service' },
        ],
        status: 'En cours de réparation (70%)',
        deposit: 10000,
        zapSync: false,
      },
      metrics: {
        value: 'En direct',
        labelFr: 'Pièces détachées déstockées au fil des réparations',
        labelEn: 'Spare parts deducted as repairs proceed',
      },
    },
    {
      id: 'tech',
      labelFr: 'High-Tech & SAV',
      labelEn: 'High-Tech & Repairs',
      taglineFr: 'Traçabilité par numéro IMEI, garantie pièces et notification client par WhatsApp',
      taglineEn: 'Serialized IMEI tracking, parts warranty periods, and 1-tap WhatsApp pickup alert',
      icon: Smartphone,
      badgeColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-400/10 border-indigo-400/30',
      keyFeaturesFr: [
        'Enregistrement de l\'IMEI ou numéro de série dès la prise en charge de l\'appareil',
        'Check-list d\'état des lieux (vitre fêlée, code schéma, état de la batterie)',
        'Liaison pièces d\'origine (écrans OLED, nappes, connecteurs de charge)',
        'Alerte WhatsApp en 1 clic dès que la réparation est prête à être récupérée',
      ],
      keyFeaturesEn: [
        'Serial / IMEI logging upon repair intake to avoid device swap disputes',
        'Intake condition checklist (scratches, passcode, battery health indicator)',
        'Dedicated OEM spare parts linking (OLED panels, flex ribbons, charging ports)',
        '1-tap WhatsApp alert when the smartphone or laptop is repaired and tested',
      ],
      mockupData: {
        title: 'SAV Smartphone #SAV-883',
        client: 'Dossier SAV #SAV-883 (iPhone 13 - IMEI: 3548...)',
        items: [
          { name: 'Écran OLED Original + Pose', qty: 1, price: 45000, type: 'stock' },
          { name: 'Verre trempé 9H offert', qty: 1, price: 0, type: 'stock' },
          { name: 'Test étanchéité & Nettoyage connecteurs', qty: 1, price: 5000, type: 'service' },
        ],
        status: 'Prêt pour retrait client',
        deposit: 30000,
        zapSync: false,
      },
      metrics: {
        value: 'Rapide',
        labelFr: 'Retrouvez une fiche SAV par nom ou IMEI',
        labelEn: 'Lookup repair history by IMEI or phone',
      },
    },
    {
      id: 'fashion',
      labelFr: 'Mode & Couture',
      labelEn: 'Fashion & Tailoring',
      taglineFr: 'Tailles, couleurs, métrages de tissus et suivi des commandes sur-mesure',
      taglineEn: 'Sizes, color variations, fabric yardage, and custom tailoring commission dates',
      icon: Scissors,
      badgeColor: 'text-pink-400',
      badgeBg: 'bg-pink-400/10 border-pink-400/30',
      keyFeaturesFr: [
        'Gestion des variantes (tailles S/M/L/XL, coloris, types de pagnes)',
        'Fiche mensurations client & date promise d\'essayage ou de livraison',
        'Encaissement en tranches : acompte tissu à la commande, solde à la livraison',
        'Historique des achats clients avec classement VIP pour fidélisation ciblée',
      ],
      keyFeaturesEn: [
        'Variant matrix (sizes, colors, fabric yardage, wax prints)',
        'Customer measurement profile and scheduled fitting delivery date',
        'Installment plan: fabric down payment upfront, balance upon final pickup',
        'Customer lifetime value ranking to reward your most profitable buyers',
      ],
      mockupData: {
        title: 'Commande Couture Sur-Mesure #CT-204',
        client: 'Commande Client #CT-204 (Ensemble Grand Boubou)',
        items: [
          { name: 'Tissu Bazin Riche Getzner (5m)', qty: 1, price: 35000, type: 'stock' },
          { name: 'Fil à broderie dorée & Doublure', qty: 1, price: 6000, type: 'stock' },
          { name: 'Confection & Broderie d\'art', qty: 1, price: 25000, type: 'service' },
        ],
        status: 'Premier essayage validé',
        deposit: 40000,
        zapSync: false,
      },
      metrics: {
        value: '+35%',
        labelFr: 'De commandes sur-mesure livrées sans retard',
        labelEn: 'On-time delivery for bespoke tailoring',
      },
    },
  ];

  const current = industries.find((i) => i.id === activeTab) || industries[0];
  const itemsTotal = current.mockupData.items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const balanceRemaining = Math.max(0, itemsTotal - (current.mockupData.deposit || 0));

  return (
    <section id="industries" className="py-24 scroll-mt-20 bg-[#09223a]/90 relative overflow-hidden border-t border-[#163c63]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.industries.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.industries.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.industries.subtitle}
          </p>
        </div>

        {/* Trade Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col gap-2 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#113a63] to-[#0A2540] border-[#00D4B2] shadow-xl shadow-[#00D4B2]/10 ring-1 ring-[#00D4B2]'
                    : 'bg-[#081e35]/80 border-[#1a446c]/80 hover:bg-[#0c2a49] hover:border-[#235d96] text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2 rounded-xl transition-colors ${
                      isActive ? 'bg-[#00D4B2] text-[#0A2540]' : 'bg-[#103254] text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse"></span>}
                </div>
                <div>
                  <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {currentLang === 'fr' ? ind.labelFr : ind.labelEn}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {currentLang === 'fr' ? ind.taglineFr : ind.taglineEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="bg-gradient-to-br from-[#0c2a49] to-[#081d33] border border-[#1b4e7e] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Features & Strategic Workflow */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.badgeBg} ${current.badgeColor}`}>
                  {currentLang === 'fr' ? current.labelFr : current.labelEn}
                </span>
                <span className="text-xs text-slate-400">
                  {currentLang === 'fr' ? 'Adaptation métier pré-configurée' : 'Pre-configured workflow'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {currentLang === 'fr' ? current.taglineFr : current.taglineEn}
              </h3>

              <ul className="space-y-3.5">
                {(currentLang === 'fr' ? current.keyFeaturesFr : current.keyFeaturesEn).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4B2] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Metric Card */}
              <div className="pt-4 border-t border-[#163c63] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 text-[#00D4B2]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white tracking-tight">{current.metrics.value}</div>
                    <div className="text-xs text-slate-300">
                      {currentLang === 'fr' ? current.metrics.labelFr : current.metrics.labelEn}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] font-bold text-xs sm:text-sm hover:bg-[#00bda0] shadow-lg shadow-[#00D4B2]/20 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {currentLang === 'fr'
                      ? `Tester pour ${current.labelFr.split('&')[0]}`
                      : `Try for ${current.labelEn.split('&')[0]}`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Realistic In-App Trade Document Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#061726] border border-[#1b4b77] rounded-2xl p-5 shadow-2xl relative">
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#13385c]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00D4B2]"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400">Nexbay v2.4</span>
                  </div>
                  <span className="text-[10px] bg-[#00D4B2]/20 text-[#00D4B2] font-mono px-2 py-0.5 rounded-full font-bold">
                    100% Hors-Ligne
                  </span>
                </div>

                {/* Document Information */}
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{current.mockupData.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                      {current.mockupData.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span>Client :</span>
                    <span className="text-slate-200 font-medium">{current.mockupData.client}</span>
                  </div>
                </div>

                {/* Line Items List */}
                <div className="mt-4 space-y-2 border-t border-[#13385c] pt-3">
                  {current.mockupData.items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg bg-[#0a2035]/60 border border-[#143d63]/50">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          it.type === 'stock' ? 'bg-[#00D4B2]/15 text-[#00D4B2]' : 'bg-amber-400/15 text-amber-300'
                        }`}>
                          {it.type === 'stock' ? 'Article' : 'Prestation'}
                        </span>
                        <span className="text-slate-200 font-medium truncate max-w-[150px] sm:max-w-[180px]">
                          {it.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-white text-[11px]">
                          {formatCurrency(it.price * it.qty, currency)}
                        </div>
                        <div className="text-[9px] text-slate-400 font-mono">
                          {it.qty} × {formatCurrency(it.price, currency)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Financial Summary */}
                <div className="mt-4 pt-3 border-t border-[#13385c] space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Total Facturé :</span>
                    <span className="font-bold text-white">{formatCurrency(itemsTotal, currency)}</span>
                  </div>
                  {current.mockupData.deposit && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Acompte Reçu :</span>
                      <span>- {formatCurrency(current.mockupData.deposit, currency)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#00D4B2] font-bold pt-1 border-t border-[#13385c]">
                    <span>Reste à Payer :</span>
                    <span>{formatCurrency(balanceRemaining, currency)}</span>
                  </div>
                </div>

                {/* Security Tag */}
                <div className="mt-4 pt-3 border-t border-[#13385c] flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D4B2]" />
                    <span>Reçu Thermique ESC/POS Prêt</span>
                  </div>
                  {current.mockupData.zapSync && (
                    <span className="text-[#00D4B2] font-semibold text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2] animate-ping"></span>
                      ZAP Synchro Actif
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
