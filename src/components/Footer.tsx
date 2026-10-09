import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="border-t border-white/10 bg-[#092b15]/95 text-emerald-100/80 text-xs py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-7 h-7 rounded-full border-2 border-[#bef264] flex items-center justify-center shadow-[0_0_10px_rgba(190,242,100,0.35)]">
                <div className="w-2 h-2 rounded-full bg-[#bef264]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                HealtyWay
              </span>
            </motion.a>
            <p className="text-emerald-100/70 text-xs leading-relaxed max-w-sm">
              Artisanal milk and cold-pressed fresh fruit drinks. Pasture-raised A2 dairy and whole tree-ripened fruit bottled daily at 4°C.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-[#bef264] tracking-wider font-bold">
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs text-white/80 font-medium">
              <li>
                <a href="#menu" className="hover:text-[#bef264] transition-colors inline-block py-0.5">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#bef264] transition-colors inline-block py-0.5">
                  Our Sourcing Standards
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-[#bef264] transition-colors inline-block py-0.5">
                  Drink Customizer
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#bef264] transition-colors inline-block py-0.5">
                  Store Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#bef264] tracking-wider font-bold">
              Seasonal Drops
            </h4>
            <p className="text-xs text-emerald-100/70">
              Get notified when limited-batch seasonal fruits arrive at our bars.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-emerald-200/50 focus:outline-none focus:border-[#bef264] focus:bg-white/15 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-lime !py-2 !px-3.5 !rounded-full text-xs font-bold shrink-0"
              >
                <AnimatePresence mode="wait">
                  {subscribed ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="arrow"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-200/60">
          <p>© {new Date().getFullYear()} HealtyWay. All rights reserved.</p>
          <div className="flex items-center gap-4 font-medium">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <span>·</span>
            <a href="#features" className="hover:text-white transition-colors">Standards</a>
            <span>·</span>
            <a href="#locations" className="hover:text-white transition-colors">Locations</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
