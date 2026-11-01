import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateRoi,
  formatCurrency,
  calculateCartTotals,
  calculateZReportSummary,
  calculateInvestmentSimulator,
} from './calculator';

test('calculateRoi returns sensible positive metrics for standard shop', () => {
  const result = calculateRoi(45, 8000, 150000);
  assert.ok(result.hoursSavedMonth > 0, 'Hours saved should be positive');
  assert.ok(result.recoveredDebtAnnual > 0, 'Recovered debt should be positive');
  assert.ok(result.totalAnnualBenefit > 0, 'Total benefit should exceed 0');
});

test('calculateRoi handles minimal zero boundary gracefully', () => {
  const result = calculateRoi(0, 0, 0);
  assert.ok(result.hoursSavedMonth >= 12, 'Fallback min hours');
  assert.equal(result.recoveredDebtAnnual, 0);
});

test('formatCurrency handles FCFA, EUR and USD', () => {
  const fcfa = formatCurrency(25000, 'XOF', 'fr');
  assert.ok(fcfa.includes('FCFA'), 'Should include FCFA suffix');

  const eur = formatCurrency(100, 'EUR', 'fr');
  assert.ok(eur.includes('€') || eur.includes('EUR'), 'Should include Euro');

  const usd = formatCurrency(100, 'USD', 'en');
  assert.ok(usd.includes('$'), 'Should include Dollar');
});

test('calculateCartTotals calculates subtotal, discount, and total accurately', () => {
  const items = [
    { id: '1', name: 'Huile Moteur 1L', price: 6000, quantity: 2, category: 'Pièces' },
    { id: '2', name: 'Bougie NGK', price: 2500, quantity: 1, category: 'Pièces' },
  ];
  // Subtotal = 12000 + 2500 = 14500
  const totals = calculateCartTotals(items, 10);
  assert.equal(totals.subtotal, 14500);
  assert.equal(totals.discount, 1450);
  assert.equal(totals.total, 13050);
  assert.equal(totals.itemCount, 3);
});

test('calculateZReportSummary detects balanced and imbalanced cash drawers', () => {
  // Opening: 50,000, Cash Sales: 120,000, Withdrawals: 10,000 -> Expected: 160,000
  const balanced = calculateZReportSummary({
    openingCash: 50000,
    cashSales: 120000,
    mobileMoneySales: 80000,
    cashWithdrawals: 10000,
    countedCash: 160000,
  });
  assert.equal(balanced.expectedCash, 160000);
  assert.equal(balanced.variance, 0);
  assert.equal(balanced.isBalanced, true);
  assert.equal(balanced.totalTurnover, 200000);

  const missingCash = calculateZReportSummary({
    openingCash: 50000,
    cashSales: 120000,
    mobileMoneySales: 80000,
    cashWithdrawals: 10000,
    countedCash: 155000,
  });
  assert.equal(missingCash.variance, -5000);
  assert.equal(missingCash.isBalanced, false);
});

test('calculateInvestmentSimulator calculates unit cost, margin, and detects loss vs profitable', () => {
  // 500,000 CFA purchase + 50,000 CFA transport = 550,000 CFA total cost
  // 100 units -> cost per unit = 5,500 CFA
  // Selling at 8,500 CFA -> Revenue = 850,000 CFA -> Gross Profit = 300,000 CFA -> Margin = 35% (excellent)
  const profitable = calculateInvestmentSimulator(500000, 50000, 100, 8500);
  assert.equal(profitable.costPerUnit, 5500);
  assert.equal(profitable.totalCost, 550000);
  assert.equal(profitable.totalRevenue, 850000);
  assert.equal(profitable.grossProfit, 300000);
  assert.equal(profitable.verdict, 'excellent');
  assert.equal(profitable.breakEvenUnits, 65); // 550000 / 8500 = 64.7 -> 65 units

  // Selling at a loss (selling at 4,000 CFA when unit cost is 5,500 CFA)
  const lossCase = calculateInvestmentSimulator(500000, 50000, 100, 4000);
  assert.equal(lossCase.verdict, 'loss');
  assert.ok(lossCase.grossProfit < 0);
});

