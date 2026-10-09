import React, { useState } from 'react';
import { DrinkItem } from '../data/drinkData';
import { X, Check, ShoppingBag, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DrinkDetailModalProps {
  drink: DrinkItem | null;
  onClose: () => void;
  onAddToCart: (drink: DrinkItem, quantity: number, instructions?: string) => void;
}

export const DrinkDetailModal: React.FC<DrinkDetailModalProps> = ({
  drink,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [instructions, setInstructions] = useState<string>('');
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = () => {
    if (!drink) return;
    onAddToCart(drink, quantity, instructions);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {drink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm"
          />

          {/* Modal Panel with Spring Physics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-zinc-200 shadow-2xl p-6 md:p-8 text-left text-zinc-900 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Media & Highlights */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm group">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-mono uppercase bg-white/95 backdrop-blur text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-zinc-200 shadow-xs">
                      Batch #204 Chilled
                    </span>
                  </div>
                </div>

                {/* Flavor Spectrum with Animated Bars */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-bold">Palate Profile</span>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="flex justify-between text-zinc-700 font-medium mb-1">
                        <span>Creaminess</span>
                        <span className="font-mono text-emerald-700 font-bold">{drink.flavorProfile.creaminess}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${drink.flavorProfile.creaminess}%` }}
                          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-700 font-medium mb-1">
                        <span>Fruit Intensity</span>
                        <span className="font-mono text-emerald-700 font-bold">{drink.flavorProfile.fruitiness}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${drink.flavorProfile.fruitiness}%` }}
                          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-700 font-medium mb-1">
                        <span>Sweetness (Natural)</span>
                        <span className="font-mono text-zinc-700 font-bold">{drink.flavorProfile.sweetness}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${drink.flavorProfile.sweetness}%` }}
                          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-zinc-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Origin */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs">
                  <p className="text-zinc-500 font-mono text-[11px] font-semibold">Primary Sourcing Partner:</p>
                  <p className="text-zinc-900 font-bold mt-0.5">{drink.origin}</p>
                </div>
              </div>

              {/* Right Column: Nutrition Facts & Order Panel */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {drink.badge && (
                      <span className="text-xs font-mono uppercase text-emerald-700 font-bold tracking-wider">
                        {drink.badge}
                      </span>
                    )}
                    <span className="text-zinc-300">·</span>
                    <span className="text-xs text-zinc-500 font-mono">12 fl oz (350ml)</span>
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 tracking-tight font-display">{drink.name}</h2>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{drink.description}</p>
                </div>

                {/* Nutrition Facts Table */}
                <div className="border border-zinc-200 rounded-2xl p-4 bg-zinc-50/60">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-200 font-mono text-xs">
                    <span className="font-bold text-zinc-900 uppercase">Nutritional Density Profile</span>
                    <span className="text-emerald-700 font-semibold">Standard Serving</span>
                  </div>

                  <div className="grid grid-cols-4 gap-3 py-3 border-b border-zinc-200 text-center font-mono">
                    <div>
                      <p className="text-[11px] text-zinc-500 font-medium">Calories</p>
                      <p className="text-base font-bold text-zinc-900 tabular-nums">{drink.calories}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-500 font-medium">Protein</p>
                      <p className="text-base font-bold text-emerald-700 tabular-nums">{drink.protein}g</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-500 font-medium">Fruit Sugar</p>
                      <p className="text-base font-bold text-zinc-900 tabular-nums">{drink.sugar}g</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-500 font-medium">Vit C (DV)</p>
                      <p className="text-base font-bold text-emerald-700 tabular-nums">{drink.vitC}%</p>
                    </div>
                  </div>

                  {/* Ingredients list */}
                  <div className="pt-3">
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-bold">Whole Ingredients:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {drink.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs text-zinc-700 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-full font-medium">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Allergen advisory */}
                  <div className="mt-3 pt-2 border-t border-zinc-200 flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Allergen Notice: {drink.allergens.join(', ')}</span>
                  </div>
                </div>

                {/* Special barista instructions */}
                <div>
                  <label htmlFor="barista-notes" className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Barista Preparation Preference (Optional)
                  </label>
                  <input
                    id="barista-notes"
                    type="text"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="e.g. Extra cold shaken, oat milk substitute, light ice"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Order row */}
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-zinc-200 rounded-full bg-zinc-50 p-1">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-7 h-7 flex items-center justify-center text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-white font-bold cursor-pointer"
                      >
                        -
                      </motion.button>
                      <motion.span 
                        key={quantity}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="w-8 text-center text-xs font-mono font-bold text-zinc-900 tabular-nums"
                      >
                        {quantity}
                      </motion.span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-white font-bold cursor-pointer"
                      >
                        +
                      </motion.button>
                    </div>

                    <div className="text-left font-mono">
                      <p className="text-[11px] text-zinc-500 font-medium">Total Price</p>
                      <p className="text-xl font-bold text-zinc-900 tabular-nums">
                        ${(drink.price * quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAdd}
                    className={`btn-lime !py-2.5 !px-5 text-xs font-bold ${
                      added ? '!bg-zinc-900 !text-white' : ''
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </motion.button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
