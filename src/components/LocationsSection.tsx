import React from 'react';
import { LOCATIONS, storeBarImg } from '../data/drinkData';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationsSectionProps {
  onSelectStoreForPickup: (storeName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectStoreForPickup }) => {
  return (
    <section id="locations" className="py-20 md:py-24 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-xs font-mono uppercase text-[#bef264] font-bold tracking-wider">
            Flagship Bars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-2">
            Visit Our Stores
          </h2>
          <p className="text-sm text-emerald-100/90 mt-2">
            Fresh milk taps and whole-fruit cold press stations across premier cultural hubs.
          </p>
        </motion.div>

        {/* Flagship Store Visual Banner with Viewport Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="cc-card overflow-hidden mb-10 shadow-lg relative group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-zinc-100">
              <img
                src={storeBarImg || LOCATIONS[0].image}
                alt="HealtyWay SoHo Flagship Drink Bar Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono uppercase bg-white/95 backdrop-blur px-3 py-1 rounded-full text-emerald-800 font-bold border border-zinc-200 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Flagship Reserve Experience</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 text-left space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-700 font-bold tracking-wider">
                  New York · SoHo Flagship
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 tracking-tight font-display mt-1">
                  The Chill & Oak Barista Lab
                </h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Experience our micro-filtered A2 milk taps, nitrogen-frothed botanical infusions, and chilled raw fruit maceration bar in person.
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-600 pt-2 border-t border-zinc-100">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>462 Broome St, New York, NY 10013</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mon–Sun: 7:00 AM – 9:00 PM</span>
                </p>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectStoreForPickup(LOCATIONS[0].name)}
                  className="btn-lime !py-2.5 !px-5 text-xs font-bold"
                >
                  <span>Select SoHo for Pickup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Locations Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCATIONS.slice(0, 3).map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="cc-card cc-card-hover p-6 text-left flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                    {store.city}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Now</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 tracking-tight font-display">
                  {store.name}
                </h3>

                <p className="text-xs text-zinc-600 mt-2 leading-relaxed flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>

                <p className="text-xs text-zinc-600 mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{store.hours}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectStoreForPickup(store.name)}
                  className="btn-ghost !w-full !py-2 text-xs flex items-center justify-center gap-1 cursor-pointer hover:!bg-zinc-100"
                >
                  <span>Select for Pickup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
