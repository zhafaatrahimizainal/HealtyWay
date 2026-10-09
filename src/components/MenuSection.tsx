import React, { useState, useMemo } from 'react';
import { DRINKS_CATALOG, DrinkItem } from '../data/drinkData';
import { Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuSectionProps {
  onSelectDrink: (drinkId: string) => void;
  onAddToCart: (drink: DrinkItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDrink, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const filteredDrinks = useMemo(() => {
    if (activeCategory === 'all') return DRINKS_CATALOG;
    return DRINKS_CATALOG.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  const handleQuickAdd = (drink: DrinkItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(drink);
    setAddedIds(prev => [...prev, drink.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== drink.id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 md:py-24 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-mono uppercase text-[#bef264] font-bold tracking-wider">
            Bottled Fresh Daily
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-2">
            Signature Formulations
          </h2>
          <p className="text-sm text-emerald-100/90 mt-2 leading-relaxed">
            Crafted with whole fruit, pasture-grazed milk, and zero artificial stabilizers.
          </p>
        </motion.div>

        {/* Clean Filter Tabs with Animated Sliding Pill */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Drinks' },
            { id: 'pasture-milk', label: 'A2 Pasture Milk' },
            { id: 'plant-oat', label: 'Plant & Oat Milk' },
            { id: 'cold-pressed', label: 'Cold-Pressed Nectar' },
            { id: 'functional', label: 'Functional Elixirs' }
          ].map(tab => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="menu-category-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-full -z-20" />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Drinks Grid with layout morphing and AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDrinks.map(drink => {
              const isAdded = addedIds.includes(drink.id);
              return (
                <motion.div
                  layout
                  key={drink.id}
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectDrink(drink.id)}
                  className="cc-card cc-card-hover overflow-hidden flex flex-col justify-between text-left cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    
                    {drink.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-mono uppercase bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-emerald-800 font-bold border border-zinc-200/50 shadow-xs">
                          {drink.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="text-[11px] font-mono text-zinc-100 font-medium">
                        {drink.calories} kcal · {drink.protein}g protein
                      </span>
                      <span className="text-[11px] font-mono text-[#bef264] font-bold">
                        {drink.vitC}% Vit C
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors font-display">
                        {drink.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                        {drink.tagline}
                      </p>
                    </div>

                    {/* Price and Add Button */}
                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-base font-mono font-bold text-zinc-900 tabular-nums">
                        ${drink.price.toFixed(2)}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={(e) => handleQuickAdd(drink, e)}
                        className={`btn-lime !py-1.5 !px-3.5 text-xs font-semibold ${
                          isAdded ? '!bg-zinc-900 !text-white' : ''
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
