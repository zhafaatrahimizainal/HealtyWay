import React from 'react';
import { Droplets, Leaf, ShieldCheck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { craftFarmImg } from '../data/drinkData';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Droplets className="w-5 h-5 text-emerald-600" />,
      title: '100% Pasture-Raised A2 Milk',
      description: 'Heritage Guernsey & Jersey cows produce gentle A2 beta-casein dairy, naturally free of the digestive discomfort caused by standard milk.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-600" />,
      title: 'Tree-Ripened Whole Fruit',
      description: 'Hand-picked organic fruits cold-macerated within 24 hours. Zero artificial fruit syrups, concentrates, or citric acid powders.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Non-Thermal Cold Press (4°C)',
      description: 'We use cold hydrostatic pressure instead of boiling heat pasteurization, preserving 99% of delicate live enzymes and vitamin C.'
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-emerald-600" />,
      title: 'Apothecary Glass Circularity',
      description: 'Poured in thick pharmaceutical-grade glass to prevent microplastic leaching. Return rinsed bottles for a $1.00 credit every time.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-24 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono uppercase text-[#bef264] font-bold tracking-wider">
            Why HealtyWay
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-2">
            Engineered for Real Vitality
          </h2>
          <p className="text-sm text-emerald-100/90 mt-3 leading-relaxed">
            Every bottle is crafted from scratch with verifiable organic ingredients and zero synthetic additives.
          </p>
        </motion.div>

        {/* Farm & Sourcing Visual Banner with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="cc-card overflow-hidden mb-12 shadow-lg group relative"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-zinc-100 overflow-hidden">
            <img
              src={craftFarmImg}
              alt="Pasture-raised cows and organic fruit orchard"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left text-white">
              <div className="max-w-lg">
                <span className="text-xs font-mono uppercase tracking-wider text-[#bef264] font-bold bg-white/20 backdrop-blur px-2.5 py-0.5 rounded-full">
                  100% Regenerative Pastures
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
                  Farm-to-Bottle Direct Cold Chain
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 mt-1">
                  Single-estate heritage dairy and tree-ripened orchard fruits dispatched at 04:30 AM to our cold labs.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-300 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                  480+ Certified Organic Acres
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid with Staggered Viewport Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="cc-card cc-card-hover p-6 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight font-display">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
