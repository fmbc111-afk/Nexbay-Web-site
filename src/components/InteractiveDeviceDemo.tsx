import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants/translations';
import { BRAND_CONFIG } from '../constants/brand';
import { formatCurrency, CartItem, calculateCartTotals } from '../utils/calculator';
import {
  Smartphone,
  Plus,
  Minus,
  Trash2,
  Printer,
  CreditCard,
  Zap,
  CheckCircle2,
  Receipt,
  RotateCcw,
  Wrench,
  Clock,
  Sparkles,
  Barcode,
} from 'lucide-react';

interface InteractiveDeviceDemoProps {
  currentLang: Language;
  currency: Currency;
}

export const InteractiveDeviceDemo: React.FC<InteractiveDeviceDemoProps> = ({
  currentLang,
  currency,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'pos' | 'workshop' | 'zreport'>('pos');
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);
  const [showThermalReceipt, setShowThermalReceipt] = useState(false);

  // Available catalog items for demo
  const catalog = [
    {
      id: 'p1',
      name: currentLang === 'fr' ? 'Batterie Moto 12V 9Ah' : '12V 9Ah Moto Battery',
      price: currency === 'XOF' ? 24000 : currency === 'EUR' ? 36 : 40,
      category: 'Stock',
      serial: '#SN-99824',
    },
    {
      id: 'p2',
      name: currentLang === 'fr' ? 'Huile Moteur 4T 1L' : '4T Engine Oil 1L',
      price: currency === 'XOF' ? 6500 : currency === 'EUR' ? 10 : 11,
      category: 'Fluides',
      serial: '#LOT-2026B',
    },
    {
      id: 'p3',
      name: currentLang === 'fr' ? 'Bougie Allumage NGK' : 'NGK Spark Plug',
      price: currency === 'XOF' ? 3000 : currency === 'EUR' ? 5 : 5,
      category: 'Pièces',
      serial: '#EAN-7881',
    },
    {
      id: 'p4',
      name: currentLang === 'fr' ? 'Câble Embrayage Renforcé' : 'Clutch Cable Pro',
      price: currency === 'XOF' ? 4500 : currency === 'EUR' ? 7 : 8,
      category: 'Pièces',
      serial: '#CBL-441',
    },
  ];

  // Active cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 'p1', name: catalog[0].name, price: catalog[0].price, quantity: 1, category: 'Stock' },
    { id: 'p2', name: catalog[1].name, price: catalog[1].price, quantity: 2, category: 'Fluides' },
  ]);

  const { total, subtotal, itemCount } = calculateCartTotals(cartItems);

  const addItemToCart = (item: (typeof catalog)[0]) => {
    setPaymentSuccess(null);
    setShowThermalReceipt(false);
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1, category: item.category }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setPaymentSuccess(null);
    setShowThermalReceipt(false);
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleCheckout = (method: 'momo' | 'cash') => {
    const methodLabel =
      method === 'momo'
        ? currentLang === 'fr'
          ? 'Mobile Money (Wave / Orange)'
          : 'Mobile Money'
        : currentLang === 'fr'
        ? 'Espèces'
        : 'Cash';

    setPaymentSuccess(methodLabel);
    setShowThermalReceipt(true);
  };

  const resetCart = () => {
    setCartItems([
      { id: 'p1', name: catalog[0].name, price: catalog[0].price, quantity: 1, category: 'Stock' },
    ]);
    setPaymentSuccess(null);
    setShowThermalReceipt(false);
  };

  return (
    <section id="simulator" className="py-20 lg:py-28 bg-[#0A2540] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2e4f] border border-[#00D4B2]/30 text-xs font-semibold text-[#00D4B2] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.simulator.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t.simulator.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* Interactive Device Shell & Live Screen */}
        <div className="max-w-4xl mx-auto bg-[#071d33] border border-[#163c63] rounded-3xl p-4 sm:p-8 shadow-2xl">
          {/* Top Control Bar for Simulator */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#163c63] pb-4 mb-6">
            <div className="flex items-center gap-2 bg-[#09223a] p-1 rounded-xl border border-[#184570]">
              <button
                onClick={() => setActiveTab('pos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'pos' ? 'bg-[#00D4B2] text-[#0A2540] shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.simulator.tabPos}
              </button>
              <button
                onClick={() => setActiveTab('workshop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'workshop' ? 'bg-[#00D4B2] text-[#0A2540] shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.simulator.tabWorkshop}
              </button>
              <button
                onClick={() => setActiveTab('zreport')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'zreport' ? 'bg-[#00D4B2] text-[#0A2540] shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.simulator.tabZReport}
              </button>
            </div>

            <button
              onClick={resetCart}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser la démo</span>
            </button>
          </div>

          {/* Tab 1: POS Experience */}
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Catalog items to click & add */}
              <div className="md:col-span-6 space-y-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Catalogue & Articles en Stock
                  </span>
                  <span className="text-[11px] text-[#00D4B2] flex items-center gap-1 font-mono">
                    <Barcode className="w-3.5 h-3.5" />
                    Scan Caméra Actif
                  </span>
                </div>

                {catalog.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#09223a] p-3 rounded-xl border border-[#163c63] hover:border-[#00D4B2]/60 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#00D4B2] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {item.serial} • {item.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-200">
                        {formatCurrency(item.price, currency, currentLang)}
                      </span>
                      <button
                        onClick={() => addItemToCart(item)}
                        className="p-1.5 rounded-lg bg-[#00D4B2]/20 hover:bg-[#00D4B2] text-[#00D4B2] hover:text-[#0A2540] transition-colors cursor-pointer"
                        title="Ajouter au panier"
                        aria-label={`Ajouter ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Dynamic Cart & Checkout */}
              <div className="md:col-span-6 bg-[#051525] p-4 rounded-2xl border border-[#184570] flex flex-col min-h-[380px]">
                <div className="flex justify-between items-center border-b border-[#163c63] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[#00D4B2]" />
                    <span className="text-xs font-bold text-white">Panier Client en cours ({itemCount})</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Caisse #1
                  </span>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 space-y-2 overflow-y-auto max-h-[180px] pr-1">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8 text-xs text-slate-400">
                      Le panier est vide. Cliquez sur un article à gauche pour l'ajouter !
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#09223a] p-2.5 rounded-lg border border-[#163c63] flex items-center justify-between text-xs"
                      >
                        <div className="flex-1 mr-2">
                          <p className="font-semibold text-slate-100 truncate">{item.name}</p>
                          <p className="text-[10px] text-[#00D4B2]">
                            {formatCurrency(item.price * item.quantity, currency, currentLang)}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 bg-[#071d33] p-1 rounded-md border border-[#163c63]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-0.5 text-slate-400 hover:text-white"
                            aria-label="Diminuer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-4 text-center font-bold text-white text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-0.5 text-slate-400 hover:text-white"
                            aria-label="Augmenter"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Checkout Summary */}
                <div className="border-t border-[#163c63] pt-3 mt-3 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Sous-total :</span>
                    <span className="text-slate-200 font-semibold">{formatCurrency(subtotal, currency, currentLang)}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm font-black text-white">
                    <span>{t.simulator.totalLabel} :</span>
                    <span className="text-base text-[#00D4B2]">{formatCurrency(total, currency, currentLang)}</span>
                  </div>

                  {/* Payment Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => handleCheckout('momo')}
                      disabled={cartItems.length === 0}
                      className="py-2.5 px-2 rounded-xl bg-[#00D4B2] text-[#0A2540] text-xs font-black hover:bg-[#00bda0] disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{t.simulator.payMoMo}</span>
                    </button>

                    <button
                      onClick={() => handleCheckout('cash')}
                      disabled={cartItems.length === 0}
                      className="py-2.5 px-2 rounded-xl bg-[#0e3153] border border-[#1c4c7c] text-white text-xs font-bold hover:bg-[#133e68] disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-[#00D4B2]" />
                      <span>{t.simulator.payCash}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Workshop Experience */}
          {activeTab === 'workshop' && (
            <div className="space-y-4">
              <div className="bg-[#09223a] p-4 rounded-2xl border border-[#184570] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#00D4B2]">FICHE ATELIER #TK-891</span>
                  <h3 className="text-base font-black text-white">
                    {currentLang === 'fr' ? 'Moto Yamaha Crypton 115 (Client #C-882)' : 'Yamaha Crypton 115 (Client #C-882)'}
                  </h3>
                  <p className="text-xs text-slate-300">Panne déclarée : Démarrage difficile & bruit de chaîne</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {t.simulator.statusReady}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#051525] p-4 rounded-xl border border-[#163c63] space-y-2 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Pièces consommées (Déduites du stock POS)</span>
                  <div className="flex justify-between py-1 border-b border-[#163c63]">
                    <span className="text-slate-200">1x Bougie Allumage NGK</span>
                    <span className="font-semibold text-white">{formatCurrency(3000, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#163c63]">
                    <span className="text-slate-200">1L Huile Moteur Synthèse</span>
                    <span className="font-semibold text-white">{formatCurrency(6500, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#163c63]">
                    <span className="text-slate-200">1x Kit Chaîne & Pignon</span>
                    <span className="font-semibold text-white">{formatCurrency(14000, currency, currentLang)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-300">
                    <span>Main d'œuvre mécanicien (2h)</span>
                    <span className="font-semibold text-white">{formatCurrency(8000, currency, currentLang)}</span>
                  </div>
                </div>

                <div className="bg-[#051525] p-4 rounded-xl border border-[#163c63] space-y-2 text-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Suivi Financier de l'Intervention</span>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex justify-between text-slate-300">
                        <span>Montant total des travaux :</span>
                        <span className="font-bold text-white">{formatCurrency(31500, currency, currentLang)}</span>
                      </div>
                      <div className="flex justify-between text-emerald-400 font-semibold">
                        <span>Acompte versé au dépôt (Orange Money) :</span>
                        <span>- {formatCurrency(15000, currency, currentLang)}</span>
                      </div>
                      <div className="flex justify-between text-white font-black text-sm pt-2 border-t border-[#163c63]">
                        <span>Reste à payer au retrait :</span>
                        <span className="text-[#00D4B2]">{formatCurrency(16500, currency, currentLang)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setPaymentSuccess(currentLang === 'fr' ? 'Retrait & Solde Atelier Séquencé' : 'Workshop Settled');
                      setShowThermalReceipt(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#00D4B2] text-[#0A2540] font-black text-xs hover:bg-[#00bda0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-3"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{t.simulator.printReceipt} (58mm)</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Z-Report Experience */}
          {activeTab === 'zreport' && (
            <div className="space-y-4">
              <div className="bg-[#09223a] p-4 rounded-2xl border border-[#184570] flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono text-[#00D4B2] font-bold">RAPPORT Z #Z-048</span>
                  <h3 className="text-base font-black text-white">Clôture Quotidienne de Caisse</h3>
                  <p className="text-xs text-slate-400">
                    {currentLang === 'fr' ? 'Date : 31 Octobre 2026 • Caissier : Caisse #1' : 'Date: October 31, 2026 • Cashier: Register #1'}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  SESSION CONFORME
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#051525] p-3 rounded-xl border border-[#163c63]">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Fond de Caisse Départ</span>
                  <p className="text-base font-black text-white mt-1">{formatCurrency(50000, currency, currentLang)}</p>
                </div>
                <div className="bg-[#051525] p-3 rounded-xl border border-[#163c63]">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Ventes Espèces</span>
                  <p className="text-base font-black text-emerald-400 mt-1">{formatCurrency(135000, currency, currentLang)}</p>
                </div>
                <div className="bg-[#051525] p-3 rounded-xl border border-[#163c63]">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Ventes Wave / Orange Money</span>
                  <p className="text-base font-black text-[#00D4B2] mt-1">{formatCurrency(92000, currency, currentLang)}</p>
                </div>
              </div>

              <div className="bg-[#06182a] p-3.5 rounded-xl border border-[#00D4B2]/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00D4B2]" />
                  <div>
                    <p className="font-bold text-white">Total Caisse Espèces Compté vs Théorique</p>
                    <p className="text-[10px] text-slate-400">185 000 FCFA comptés = 185 000 FCFA attendus</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setPaymentSuccess('Rapport Z Clôturé');
                    setShowThermalReceipt(true);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#0e3153] border border-[#00D4B2]/50 text-[#00D4B2] font-bold text-xs hover:bg-[#133e68] flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimer Clôture Z</span>
                </button>
              </div>
            </div>
          )}

          {/* Animated Bluetooth Thermal Receipt Slip */}
          {showThermalReceipt && (
            <div className="mt-6 p-4 bg-white text-slate-900 rounded-xl shadow-2xl max-w-sm mx-auto font-mono text-[11px] border border-slate-300 animate-fadeIn">
              <div className="text-center pb-2 border-b border-dashed border-slate-400 space-y-0.5">
                <p className="font-black text-xs tracking-wider uppercase">{BRAND_CONFIG.name.toUpperCase()} PRO</p>
                <p className="text-[10px] text-slate-600">Boutique & Atelier Central</p>
                <p className="text-[9px] text-slate-500">ESC/POS 58mm Thermal Print</p>
                <p className="text-[9px] text-slate-500">Date: 31/10/2026 - 10:14</p>
              </div>

              <div className="py-2 space-y-1 border-b border-dashed border-slate-400">
                <div className="flex justify-between font-bold">
                  <span>Opération :</span>
                  <span>{paymentSuccess}</span>
                </div>
                <div className="flex justify-between">
                  <span>Montant réglé :</span>
                  <span className="font-bold">{formatCurrency(total || 31500, currency, currentLang)}</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-600">
                  <span>Rapprochement :</span>
                  <span>{currentLang === 'fr' ? 'Session équilibrée (Conforme)' : 'Balanced Session (Verified)'}</span>
                </div>
              </div>

              <div className="pt-2 text-center text-[9px] text-slate-600">
                <p>Merci pour votre confiance !</p>
                <p className="font-mono pt-1 text-[8px] text-slate-400">||||| | |||| ||| ||||||| ||||</p>
              </div>

              <button
                onClick={() => setShowThermalReceipt(false)}
                className="mt-3 w-full py-1 text-center text-[10px] font-sans font-bold text-slate-500 hover:text-slate-800 underline"
              >
                Fermer le reçu
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
