import React, { useState, useMemo } from 'react';
import { Sparkles, ShoppingBag, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { MILK_BASES, FRUIT_INGREDIENTS } from '../data/drinkData';

interface DrinkBuilderProps {
  onAddCustomToCart: (customItem: {
    name: string;
    description: string;
    price: number;
    calories: number;
    protein: number;
    sugar: number;
    vitC: number;
    details: {
      base: string;
      fruit: string;
      sweetness: number;
      ice: string;
      boosters: string[];
    };
  }) => void;
}

export const DrinkBuilder: React.FC<DrinkBuilderProps> = ({ onAddCustomToCart }) => {
  const [selectedBaseId, setSelectedBaseId] = useState<string>(MILK_BASES[0].id);
  const [selectedFruitId, setSelectedFruitId] = useState<string>(FRUIT_INGREDIENTS[0].id);
  const [sweetnessLevel, setSweetnessLevel] = useState<number>(25);
  const [added, setAdded] = useState<boolean>(false);

  const selectedBase = useMemo(
    () => MILK_BASES.find(b => b.id === selectedBaseId) || MILK_BASES[0],
    [selectedBaseId]
  );

  const selectedFruit = useMemo(
    () => FRUIT_INGREDIENTS.find(f => f.id === selectedFruitId) || FRUIT_INGREDIENTS[0],
    [selectedFruitId]
  );

  const totalCalories = useMemo(() => {
    return Math.round(selectedBase.calories + selectedFruit.calories + (sweetnessLevel / 100) * 30);
  }, [selectedBase, selectedFruit, sweetnessLevel]);

  const totalPrice = useMemo(() => {
    return Number((7.00 + selectedBase.priceDelta).toFixed(2));
  }, [selectedBase]);

  const handleAddToCart = () => {
    const customName = `${selectedFruit.name.split(' ')[0]} ${selectedBase.name.split(' ')[0]} Blend`;
    const desc = `${selectedBase.name} + ${selectedFruit.name} (${sweetnessLevel}% Agave, Chilled 4°C)`;

    onAddCustomToCart({
      name: customName,
      description: desc,
      price: totalPrice,
      calories: totalCalories,
      protein: selectedBase.protein,
      sugar: Math.round(selectedFruit.sugar + (sweetnessLevel / 100) * 8),
      vitC: selectedFruit.vitC,
      details: {
        base: selectedBase.name,
        fruit: selectedFruit.name,
        sweetness: sweetnessLevel,
        ice: 'Chilled 4°C',
        boosters: []
      }
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getMilkBaseColor = () => {
    switch (selectedBaseId) {
      case 'a2-pasture': return '#fdfbf7';
      case 'barista-oat': return '#f5edd6';
      case 'coconut-cream': return '#fafafa';
      case 'greek-kefir': return '#f0f4f8';
      default: return '#ffffff';
    }
  };

  return (
    <section id="customizer" className="py-20 md:py-24 border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-xs font-mono uppercase text-[#bef264] font-bold tracking-wider">
            Interactive Mixer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-2">
            Build Your Own Blend
          </h2>
          <p className="text-sm text-emerald-100/90 mt-2">
            Choose your liquid base, whole fruit infusion, and sweetness level.
          </p>
        </motion.div>

        {/* Simplified Clean Interactive Card with Motion Physics */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="cc-card p-6 sm:p-8 max-w-2xl mx-auto text-left space-y-7"
        >
          
          {/* Animated Visual Cup Simulation */}
          <div className="flex items-center justify-center py-2">
            <div className="relative w-32 h-44 rounded-b-3xl border-2 border-emerald-500/30 bg-zinc-950/80 p-2 overflow-hidden shadow-lg flex flex-col justify-end">
              {/* Cup rim */}
              <div className="absolute top-0 left-0 right-0 h-3 border-b border-white/10 bg-white/5" />
              
              {/* Dynamic Milk Base Layer */}
              <motion.div 
                layout
                animate={{
                  backgroundColor: getMilkBaseColor(),
                  height: `${55 + (sweetnessLevel / 100) * 10}%`
                }}
                transition={{ type: "spring", stiffness: 220, damping: 25 }}
                className="w-full rounded-b-2xl relative shadow-inner"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </motion.div>

              {/* Dynamic Fruit Infusion Swirl */}
              <motion.div
                animate={{
                  backgroundColor: selectedFruit.color,
                  height: `${35 + (selectedFruit.sugar * 2)}%`
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="w-full absolute bottom-8 left-0 right-0 blur-xs mix-blend-multiply opacity-80"
              />

              {/* Foam line */}
              <div className="absolute top-10 left-0 right-0 h-2 bg-white/50 blur-xs" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-zinc-900 bg-white/80 px-2 py-0.5 rounded font-bold shadow-xs">
                  HW · 4°C
                </span>
              </div>
            </div>
          </div>

          {/* Step 1: Milk Base */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                1. Select Liquid Base
              </label>
              <span className="text-xs text-emerald-600 font-mono font-semibold">{selectedBase.protein}g protein</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2.5">
              {MILK_BASES.map(b => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={b.id}
                  onClick={() => setSelectedBaseId(b.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBaseId === b.id
                      ? 'bg-emerald-50 border-emerald-500 text-zinc-900 shadow-2xs'
                      : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <p className="text-xs font-bold">{b.name}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{b.calories} kcal</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 2: Fruit Infusion */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                2. Choose Fresh Fruit
              </label>
              <span className="text-xs text-emerald-600 font-mono font-semibold">+{selectedFruit.vitC}% Vit C</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {FRUIT_INGREDIENTS.map(f => (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  key={f.id}
                  onClick={() => setSelectedFruitId(f.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all flex items-center gap-2 cursor-pointer ${
                    selectedFruitId === f.id
                      ? 'bg-emerald-50 border-emerald-500 text-zinc-900 shadow-2xs'
                      : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: f.color }}
                  />
                  <span className="text-xs font-semibold truncate">{f.name.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 3: Sweetness Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                3. Sweetness Level
              </label>
              <span className="text-xs font-mono font-bold text-emerald-700 tabular-nums">
                {sweetnessLevel}% {sweetnessLevel === 0 ? '(Unsweetened)' : sweetnessLevel === 25 ? '(Gentle Hint)' : sweetnessLevel === 50 ? '(Balanced)' : '(Sweet)'}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={sweetnessLevel}
              onChange={(e) => setSweetnessLevel(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Summary & Order CTA Row with Animated Numbers */}
          <div className="pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-zinc-500 font-mono">
                {totalCalories} kcal · {selectedBase.protein}g protein · Chilled 4°C
              </p>
              <motion.p 
                key={totalPrice}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-bold text-zinc-900 font-mono tabular-nums mt-0.5"
              >
                ${totalPrice.toFixed(2)}
              </motion.p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`btn-lime !py-3 !px-6 text-sm font-bold ${
                added ? '!bg-zinc-900 !text-white' : ''
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
