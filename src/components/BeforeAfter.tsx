import React from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  ArrowRight,
  FileQuestion,
  FileCheck,
  TrendingDown,
  TrendingUp,
  Clock,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

interface BeforeAfterProps {
  currentLang: Language;
  currency: Currency;
  onOpenDemo: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({
  currentLang,
  currency,
  onOpenDemo,
}) => {
  const t = TRANSLATIONS[currentLang];

  const comparisons = [
    {
      topicFr: 'Dettes & Crédits Fournisseurs',
      topicEn: 'Debts & Supplier Credits',
      before: {
        titleFr: 'Le carnet froissé et les litiges amers',
        titleEn: 'Torn notebooks and bitter arguments',
        descFr: 'Cahier de dettes perdu ou pages arrachées. Le client affirme : "Je devais 500 000 FCFA et non 1 000 000 !". Aucun moyen de prouver les versements intermédiaires.',
        descEn: 'Lost debt books or torn pages. The client claims: "I owed 500,000 CFA not 1,000,000!". No proof of intermediate partial payments.',
      },
      after: {
        titleFr: 'Liaison ZAP synchronisée en direct',
        titleEn: 'Real-time synced ZAP shared ledger',
        descFr: 'Le commerçant et le fournisseur partagent le même dossier dans Nexbay. Quand l\'un enregistre un versement, le solde s\'actualise dans le dossier partagé avec horodatage pour prévenir les litiges.',
        descEn: 'Merchant and supplier share a verified digital record. When one logs a payment, the balance updates with timestamps to prevent debt disputes.',
      },
    },
    {
      topicFr: 'Bénéfice Réel vs Faillite Cachée',
      topicEn: 'Real Profit vs Hidden Bankruptcy',
      before: {
        titleFr: 'L\'illusion des recettes en caisse',
        titleEn: 'The optical illusion of gross sales',
        descFr: 'L\'argent rentre mais disparaît mystérieusement. Le loyer, le carburant du groupe électrogène et les retraits personnels ne sont pas comptabilisés. Découverte de la perte en fin d\'année.',
        descEn: 'Cash enters the drawer but vanishes. Store rent, generator fuel, and informal owner withdrawals are not tracked. Net losses discovered when it\'s too late.',
      },
      after: {
        titleFr: 'Vrai Bénéfice Net déduit en continu',
        titleEn: 'True Net Profit deducted continuously',
        descFr: 'Toutes les charges fixes et variables sont déduites en temps réel de votre chiffre d\'affaires brut. Vous connaissez votre marge nette exacte chaque soir pour sécuriser votre trésorerie.',
        descEn: 'All overheads and operational expenses are deducted in real-time from gross sales. You know your exact take-home profit every night.',
      },
    },
    {
      topicFr: 'Recherche de Factures & Preuves',
      topicEn: 'Invoice History & Warranty Proof',
      before: {
        titleFr: '45 minutes à fouiller des cartons poussiéreux',
        titleEn: '45 minutes digging through dusty boxes',
        descFr: 'Un client revient pour une réclamation ou une garantie : impossible de remettre la main sur le reçu carbone froissé ou détrempé par la saison des pluies.',
        descEn: 'A customer returns with a warranty issue: impossible to find the damp or faded duplicate paper slip lost in messy filing cartons.',
      },
      after: {
        titleFr: 'Retrouvé en 2 secondes chrono',
        titleEn: 'Found in 2 seconds on your phone',
        descFr: 'Recherche instantanée par nom de client, numéro de téléphone, date ou référence article. Réimpression thermique Bluetooth ou envoi direct du PDF sur WhatsApp.',
        descEn: 'Instant search by customer name, phone, date or product tag. Print a Bluetooth receipt or send a branded PDF invoice directly via WhatsApp.',
      },
    },
    {
      topicFr: 'Stocks Gagnants & Péremptions',
      topicEn: 'Winning Products & Expiry Risks',
      before: {
        titleFr: 'Achats à tâtons & pertes sèches',
        titleEn: 'Blind purchases & dead capital',
        descFr: 'Réapprovisionnement au hasard selon l\'humeur. Ruptures répétées sur les articles qui rapportent le plus, pendant que des invendus prennent la poussière et périment en réserve.',
        descEn: 'Restocking based on gut feeling. Frequent stockouts on your high-margin bestsellers, while slow items expire silently in dark storage.',
      },
      after: {
        titleFr: 'Classement de rentabilité & alertes préventives',
        titleEn: 'Profit ranking & proactive expiry alarms',
        descFr: 'Nexbay identifie mathématiquement votre "Top 10 Produits Gagnants" pour concentrer vos capitaux là où vous gagnez. Alertes 30 jours avant péremption pour liquider à temps.',
        descEn: 'Nexbay ranks your highest-margin winners so you reinvest capital with certainty, alongside 30-day alerts before products expire.',
      },
    },
    {
      topicFr: 'Personnel & Sécurité de Caisse',
      topicEn: 'Staff Accountability & Cash Security',
      before: {
        titleFr: 'Écarts de caisse & retards dissimulés',
        titleEn: 'Unexplained cash gaps & hidden tardiness',
        descFr: 'Plusieurs employés touchent au tiroir sans traçabilité. Les retards ne sont pas enregistrés et il est impossible de savoir qui a fait quelle vente ou accordé une remise non autorisée.',
        descEn: 'Multiple workers share a physical till without identity stamps. Arrivals are not tracked, making cash discrepancies and unauthorized discounts untraceable.',
      },
      after: {
        titleFr: 'Pointage par PIN & Clôture Z verrouillée',
        titleEn: 'Staff PIN login & structured Z-Closing',
        descFr: 'Chaque vendeur dispose de son code PIN et de droits limités (interdiction de voir les marges). Le rapport Z journalier réconcilie chaque franc en espèces et chaque transaction Mobile Money.',
        descEn: 'Each cashier logs in with a secure PIN with restricted permissions. Daily Z-reports reconcile every cash coin and Mobile Money payment down to the cent.',
      },
    },
  ];

  return (
    <section id="transformation" className="py-24 scroll-mt-20 bg-[#0A2540] relative overflow-hidden border-t border-[#163c63]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-[#00D4B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.beforeAfter.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Column Headers for Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-8">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-950/30 border border-red-500/30 text-red-300">
            <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                {t.beforeAfter.beforeTag}
              </span>
              <h3 className="text-lg font-bold text-white">{t.beforeAfter.beforeTitle}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#00D4B2]/10 border border-[#00D4B2]/40 text-[#00D4B2]">
            <div className="p-2 rounded-xl bg-[#00D4B2]/20 text-[#00D4B2]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4B2]">
                {t.beforeAfter.afterTag}
              </span>
              <h3 className="text-lg font-bold text-white">{t.beforeAfter.afterTitle}</h3>
            </div>
          </div>
        </div>

        {/* Comparison Cards Stack */}
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-[#081e35] border border-[#163c63] rounded-3xl p-6 sm:p-8 hover:border-[#1e5488] transition-all shadow-xl"
            >
              {/* Feature Topic Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#143d63]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D4B2]"></span>
                  <span className="text-sm font-bold text-white tracking-wide uppercase">
                    {currentLang === 'fr' ? item.topicFr : item.topicEn}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Piller #{index + 1}</span>
              </div>

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* BEFORE (Red) */}
                <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-2">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>{currentLang === 'fr' ? item.before.titleFr : item.before.titleEn}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentLang === 'fr' ? item.before.descFr : item.before.descEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-red-500/20 flex items-center justify-between text-[11px] text-red-400 font-medium">
                    <span>Résultat : Pertes invisibles & stress</span>
                    <TrendingDown className="w-4 h-4" />
                  </div>
                </div>

                {/* AFTER (Turquoise/Nexbay) */}
                <div className="bg-[#0c2a49]/80 border border-[#00D4B2]/40 rounded-2xl p-5 flex flex-col justify-between shadow-lg shadow-[#00D4B2]/5">
                  <div>
                    <div className="flex items-center gap-2 text-[#00D4B2] font-bold text-sm mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{currentLang === 'fr' ? item.after.titleFr : item.after.titleEn}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {currentLang === 'fr' ? item.after.descFr : item.after.descEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#00D4B2]/20 flex items-center justify-between text-[11px] text-[#00D4B2] font-bold">
                    <span>
                      {currentLang === 'fr'
                        ? 'Résultat : Visibilité accrue et maîtrise de votre marge'
                        : 'Result: Enhanced visibility and margin control'}
                    </span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#113a63] via-[#0e3153] to-[#0A2540] border border-[#00D4B2]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00D4B2] text-[#0A2540] flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-[#00D4B2]/30">
              ⚡
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {currentLang === 'fr'
                  ? 'Prêt à remplacer les cahiers par la sérénité Nexbay ?'
                  : 'Ready to replace messy notebooks with Nexbay peace of mind?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentLang === 'fr'
                  ? 'Configuration en 5 minutes. Vos données restent 100% à vous, chiffrées et sécurisées.'
                  : 'Setup in 5 minutes. Your business data remains 100% yours, private and encrypted.'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00D4B2] text-[#0A2540] font-bold text-sm hover:bg-[#00bda0] shadow-xl shadow-[#00D4B2]/20 transition-all shrink-0 cursor-pointer"
          >
            <span>{currentLang === 'fr' ? 'Tester la Transformation' : 'Test the Transformation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
