import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw, MapPin, Truck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface CartItem {
  cartId: string;
  name: string;
  price: number;
  quantity: number;
  calories: number;
  description?: string;
  instructions?: string;
  image?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, quantity: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  pickupLocation: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  pickupLocation
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('450 Broome St, New York, NY');
  const [returningBottles, setReturningBottles] = useState<boolean>(true);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const bottleDepositCredit = returningBottles ? Math.min(totalItemsCount * 1.00, subtotal) : 0;
  const deliveryFee = fulfillmentType === 'delivery' ? 3.50 : 0;
  const finalTotal = Math.max(0, subtotal - bottleDepositCredit + deliveryFee);

  const handleCheckout = () => {
    const randomId = `HW-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(randomId);
    setOrderConfirmed(true);
  };

  const handleCloseConfirmation = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs cursor-pointer"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="w-screen max-w-md bg-white border-l border-zinc-200 shadow-2xl flex flex-col justify-between text-left text-zinc-900 pointer-events-auto"
            >
              
              {/* Drawer Top */}
              <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold text-zinc-900 tracking-tight font-display">
                    Your Fresh Bag
                  </h2>
                  <motion.span 
                    key={totalItemsCount}
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    className="text-xs font-mono bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold px-2 py-0.5 rounded-full tabular-nums"
                  >
                    {totalItemsCount}
                  </motion.span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Main Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {orderConfirmed ? (
                  /* Order Confirmation State */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="py-6 text-center space-y-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-md"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>

                    <div>
                      <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">
                        Order Transmitted
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 font-display mt-1">
                        Order #{confirmedOrderId} Confirmed!
                      </h3>
                      <p className="text-xs text-zinc-600 mt-2">
                        Our baristas are preparing your cold-pressed elixirs at 3.8°C, bottled in recyclable apothecary glass.
                      </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3 text-left">
                      <div className="flex items-center gap-2.5 text-xs text-emerald-800 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>Step 1: Fresh fruit cold-maceration started</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-zinc-600">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Step 2: Nitrogen-shaking with chilled pasture base</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-zinc-600">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>
                          {fulfillmentType === 'pickup' 
                            ? `Ready for pickup in ~6 mins at ${pickupLocation}` 
                            : `Cold insulated courier to ${deliveryAddress}`}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 flex justify-between font-bold">
                      <span>Paid Total:</span>
                      <span className="text-emerald-700">${finalTotal.toFixed(2)}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleCloseConfirmation}
                      className="btn-lime !w-full !rounded-full !py-3 font-bold"
                    >
                      Return to Storefront
                    </motion.button>
                  </motion.div>
                ) : items.length === 0 ? (
                  /* Empty Bag State */
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto text-zinc-400">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-900">Your bag is currently empty</h3>
                    <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                      Explore our signature pasture milk and fruit formulations or design your own bespoke elixir.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="btn-lime text-xs !py-2.5 !px-5 font-bold"
                    >
                      Start Exploring Menu
                    </motion.button>
                  </motion.div>
                ) : (
                  /* Active Bag Items */
                  <div className="space-y-4">
                    <motion.div layout className="space-y-3">
                      <AnimatePresence mode="popLayout">
                        {items.map(item => (
                          <motion.div
                            layout
                            key={item.cartId}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: 20 }}
                            transition={{ duration: 0.25 }}
                            className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200 flex flex-col justify-between gap-3 text-left"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-sm font-bold text-zinc-900 tracking-tight">{item.name}</h4>
                                {item.description && (
                                  <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{item.description}</p>
                                )}
                                {item.instructions && (
                                  <p className="text-[11px] text-emerald-700 mt-1 italic font-medium">Note: "{item.instructions}"</p>
                                )}
                                <p className="text-[11px] font-mono text-zinc-400 mt-1">
                                  {item.calories} kcal · ${(item.price).toFixed(2)} each
                                </p>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                                onClick={() => onRemoveItem(item.cartId)}
                                className="text-zinc-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                              <div className="flex items-center border border-zinc-200 rounded-full bg-white p-0.5 shadow-2xs">
                                <motion.button
                                  whileTap={{ scale: 0.85 }}
                                  onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                                  className="w-6 h-6 flex items-center justify-center text-zinc-600 hover:text-zinc-900 rounded-full text-xs font-bold cursor-pointer"
                                >
                                  -
                                </motion.button>
                                <motion.span 
                                  key={item.quantity}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="w-7 text-center text-xs font-mono font-bold text-zinc-900 tabular-nums"
                                >
                                  {item.quantity}
                                </motion.span>
                                <motion.button
                                  whileTap={{ scale: 0.85 }}
                                  onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                                  className="w-6 h-6 flex items-center justify-center text-zinc-600 hover:text-zinc-900 rounded-full text-xs font-bold cursor-pointer"
                                >
                                  +
                                </motion.button>
                              </div>

                              <span className="text-sm font-mono font-bold text-zinc-900 tabular-nums">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>

                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>

                    {/* Fulfillment Options */}
                    <div className="pt-4 border-t border-zinc-200 space-y-3">
                      <label className="block text-xs font-mono uppercase text-zinc-700 tracking-wider font-bold">
                        Fulfillment Method
                      </label>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setFulfillmentType('pickup')}
                          className={`p-2.5 rounded-full border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            fulfillmentType === 'pickup'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Lab Pickup (Free)</span>
                        </button>

                        <button
                          onClick={() => setFulfillmentType('delivery')}
                          className={`p-2.5 rounded-full border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            fulfillmentType === 'delivery'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                          }`}
                        >
                          <Truck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Cold Courier (+$3.50)</span>
                        </button>
                      </div>

                      {fulfillmentType === 'pickup' ? (
                        <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-center justify-between">
                          <div>
                            <p className="text-[11px] text-zinc-500 font-mono font-semibold">Pickup Station:</p>
                            <p className="font-bold text-zinc-900">{pickupLocation}</p>
                          </div>
                          <span className="text-[11px] text-emerald-700 font-mono font-bold">Ready in ~6m</span>
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="delivery-addr" className="block text-[11px] text-zinc-500 font-mono mb-1 font-bold">
                            Delivery Address (Insulated Box):
                          </label>
                          <input
                            id="delivery-addr"
                            type="text"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className="w-full px-3.5 py-2 text-xs rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                          />
                        </div>
                      )}

                      {/* Glass Bottle Recycling Incentive */}
                      <label className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={returningBottles}
                          onChange={(e) => setReturningBottles(e.target.checked)}
                          className="mt-0.5 accent-emerald-600 cursor-pointer"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-zinc-900 flex items-center gap-1.5">
                            <RotateCcw className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Apothecary Glass Return Deposit</span>
                          </span>
                          <p className="text-zinc-600 text-[11px] mt-0.5">
                            Returning rinsed bottles? Save -$1.00 credit per bottle on this order.
                          </p>
                        </div>
                      </label>
                    </div>

                  </div>
                )}

              </div>

              {/* Drawer Bottom / Subtotal */}
              {!orderConfirmed && items.length > 0 && (
                <div className="p-6 border-t border-zinc-200 space-y-4 bg-zinc-50/70">
                  <div className="space-y-1.5 text-xs text-zinc-600 font-mono">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-zinc-900 font-bold tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                    {bottleDepositCredit > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Glass Bottle Return Credit</span>
                        <span className="tabular-nums">-${bottleDepositCredit.toFixed(2)}</span>
                      </div>
                    )}
                    {deliveryFee > 0 && (
                      <div className="flex justify-between">
                        <span>Chilled Cold Courier</span>
                        <span className="text-zinc-900 font-bold tabular-nums">+${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-zinc-900 pt-2 border-t border-zinc-200">
                      <span>Total Due</span>
                      <motion.span 
                        key={finalTotal}
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        className="text-emerald-700 tabular-nums text-base"
                      >
                        ${finalTotal.toFixed(2)}
                      </motion.span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCheckout}
                    className="btn-lime !w-full !py-3.5 !rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Authorize & Send Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero contact cold chain · 100% satisfaction guarantee</span>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
