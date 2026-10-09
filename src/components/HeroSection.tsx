import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DrinkItem } from '../data/drinkData';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOpenBuilder: () => void;
  onSelectDrink: (drinkId: string) => void;
  featuredDrink: DrinkItem;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOpenBuilder,
  onSelectDrink,
  featuredDrink
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] radial-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag Pill with Fade & Slide */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold mb-6 shadow-sm backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
          <span>Cold-Pressed Fresh Everyday · 100% Pasture Milk</span>
        </motion.div>

        {/* Display Headline with Smooth Stagger */}
        <motion.h1 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto font-display"
          style={{ textWrap: 'balance' }}
        >
          Cold-Pressed Fruit. <br />
          <span className="text-[#bef264]">Fresh Pasture Milk.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Artisanal fruit and pasture-fresh milk elixirs, bottled chilled at 4°C with zero added cane sugar, preservatives, or artificial gums.
        </motion.p>

        {/* Action Buttons with Spring Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={onExploreMenu}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-lime text-sm px-7 py-3 font-bold"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={onOpenBuilder}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-ghost text-sm px-7 py-3 flex items-center gap-2 font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#bef264]" />
            <span>Build Your Blend</span>
          </motion.button>
        </motion.div>

        {/* Hero Visual Showcase Card with Smooth Zoom and Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="cc-card p-3 sm:p-4 overflow-hidden shadow-2xl relative group">
            
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-xl overflow-hidden bg-zinc-950">
              <img
                src={featuredDrink.image}
                alt={featuredDrink.name}
                loading="eager"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Soft Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Overlaid Pill Info */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
                <div>
                  <motion.span 
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="inline-block text-xs font-mono text-[#bef264] uppercase tracking-wider font-bold"
                  >
                    Signature Formulation
                  </motion.span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mt-0.5">
                    {featuredDrink.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-md">
                    {featuredDrink.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs font-mono text-zinc-300">Bottled Fresh</p>
                    <p className="text-lg font-bold text-white font-mono tabular-nums">
                      ${featuredDrink.price.toFixed(2)}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => onSelectDrink(featuredDrink.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-lime !py-2.5 !px-4 text-xs font-bold"
                  >
                    Quick View
                  </motion.button>
                </div>
              </div>

            </div>

          </div>

          {/* Clean Stat Row Below Showcase */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center border-t border-white/15 pt-6"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">100%</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">A2 Pasture Milk</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#bef264] font-mono tabular-nums">0g</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Added Cane Sugar</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">4°C</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Cold Pressed Daily</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
