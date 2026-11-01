import { Currency, Language } from '../types';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface RoiResults {
  hoursSavedMonth: number;
  recoveredDebtAnnual: number;
  eliminatedVarianceAnnual: number;
  totalAnnualBenefit: number;
}

/**
 * Calculates concrete business ROI metrics for a hybrid retail/workshop store.
 */
export function calculateRoi(
  dailySalesCount: number,
  averageTicketValue: number,
  monthlyPendingCredit: number
): RoiResults {
  // Safe bounds
  const safeSalesCount = Math.max(1, dailySalesCount);
  const safeTicket = Math.max(100, averageTicketValue);
  const safeCredit = Math.max(0, monthlyPendingCredit);

  // Time saved: an automated POS saves ~1.5 minutes per transaction in counting, logging, and book-keeping
  // plus 15 hours/month on end-of-month manual reconciliation
  const monthlyTransactions = safeSalesCount * 30;
  const hoursSavedFromTransactions = Math.round((monthlyTransactions * 1.5) / 60);
  const hoursSavedMonth = Math.min(120, Math.max(12, hoursSavedFromTransactions + 15));

  // Debt recovery: automated credit reminders and customer ledger recover ~30% of otherwise forgotten debt
  const recoveredDebtAnnual = Math.round(safeCredit * 0.30 * 12);

  // Cash discrepancy savings: manual cash drawers leak ~1.2% in unrecorded discounts or cash errors
  const annualGrossTurnover = safeSalesCount * safeTicket * 365;
  const eliminatedVarianceAnnual = Math.round(annualGrossTurnover * 0.012);

  const totalAnnualBenefit = recoveredDebtAnnual + eliminatedVarianceAnnual;

  return {
    hoursSavedMonth,
    recoveredDebtAnnual,
    eliminatedVarianceAnnual,
    totalAnnualBenefit,
  };
}

/**
 * Currency formatter with appropriate locale and formatting for FCFA (XOF), USD, EUR
 */
export function formatCurrency(amount: number, currency: Currency = 'XOF', lang: Language = 'fr'): string {
  const rounded = Math.round(amount);

  if (currency === 'XOF') {
    // Format with non-breaking spaces for thousands
    const formatted = rounded.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US');
    return `${formatted} FCFA`;
  }

  if (currency === 'EUR') {
    return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(rounded);
  }

  return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(rounded);
}

/**
 * Cart calculation logic
 */
export function calculateCartTotals(
  items: CartItem[],
  discountPercent = 0
): { subtotal: number; discount: number; total: number; itemCount: number } {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round((subtotal * Math.min(100, Math.max(0, discountPercent))) / 100);
  const total = Math.max(0, subtotal - discount);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return { subtotal, discount, total, itemCount };
}

export interface InvestmentSimulation {
  costPerUnit: number;
  totalCost: number;
  totalRevenue: number;
  grossProfit: number;
  marginPercent: number;
  breakEvenUnits: number;
  verdict: 'excellent' | 'viable' | 'loss';
  adviceFR: string;
  adviceEN: string;
}

/**
 * In-App Investment Simulator & Margin Pre-Calculation
 * Used by merchants to simulate a new stock batch or product purchase BEFORE committing capital,
 * avoiding blind investments and preventing financial losses.
 */
export function calculateInvestmentSimulator(
  purchaseBudget: number,
  transportCost: number,
  unitsCount: number,
  targetSellingPrice: number
): InvestmentSimulation {
  const safeUnits = Math.max(1, unitsCount);
  const totalCost = Math.max(0, purchaseBudget) + Math.max(0, transportCost);
  const costPerUnit = Math.round(totalCost / safeUnits);
  const totalRevenue = safeUnits * targetSellingPrice;
  const grossProfit = totalRevenue - totalCost;
  const marginPercent = totalRevenue > 0 ? Math.round((grossProfit / totalRevenue) * 100) : 0;
  const breakEvenUnits = targetSellingPrice > 0 ? Math.ceil(totalCost / targetSellingPrice) : safeUnits;

  let verdict: 'excellent' | 'viable' | 'loss' = 'viable';
  let adviceFR = 'Projet rentable avec une marge saine.';
  let adviceEN = 'Viable investment with a healthy margin.';

  if (grossProfit <= 0 || targetSellingPrice < costPerUnit) {
    verdict = 'loss';
    adviceFR = 'Danger : Vente à perte ! Le prix de vente ne couvre pas le prix de revient (achat + transport).';
    adviceEN = 'Danger: Selling at a loss! Target price does not cover unit cost (purchase + freight).';
  } else if (marginPercent >= 28) {
    verdict = 'excellent';
    adviceFR = 'Excellente opportunité : forte marge bénéficiaire et seuil de rentabilité rapide.';
    adviceEN = 'Prime opportunity: strong profit margin and rapid break-even volume.';
  } else {
    verdict = 'viable';
    adviceFR = 'Marge correcte : surveiller la rotation du stock pour éviter l\'immobilisation de trésorerie.';
    adviceEN = 'Standard margin: monitor stock turnover speed to prevent cash flow lockup.';
  }

  return {
    costPerUnit,
    totalCost,
    totalRevenue,
    grossProfit,
    marginPercent,
    breakEvenUnits,
    verdict,
    adviceFR,
    adviceEN,
  };
}

/**
 * Z-Report reconciliation calculation
 */
export function calculateZReportSummary(params: {
  openingCash: number;
  cashSales: number;
  mobileMoneySales: number;
  cashWithdrawals: number;
  countedCash: number;
}): {
  expectedCash: number;
  countedCash: number;
  variance: number;
  isBalanced: boolean;
  totalTurnover: number;
} {
  const expectedCash = params.openingCash + params.cashSales - params.cashWithdrawals;
  const variance = params.countedCash - expectedCash;
  const totalTurnover = params.cashSales + params.mobileMoneySales;

  return {
    expectedCash,
    countedCash: params.countedCash,
    variance,
    isBalanced: Math.abs(variance) === 0,
    totalTurnover,
  };
}
