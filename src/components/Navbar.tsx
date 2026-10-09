import React, { useState } from 'react';
import { Home, Info, BookOpen, SlidersHorizontal, BarChart3, ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBuilder
}) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: Info, href: '#features' },
    { id: 'story', label: 'Story', icon: BookOpen, href: '#features' },
    { id: 'guides', label: 'Guides', icon: SlidersHorizontal, href: '#customizer' },
    { id: 'markets', label: 'Markets', icon: BarChart3, href: '#menu' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand with Concentric Compass Logo */}
        <motion.a 
          href="#" 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 focus-visible:outline-none group"
        >
          <div className="w-8 h-8 rounded-full border-[2.5px] border-[#bef264] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(190,242,100,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-2.5 h-2.5 rounded-full bg-[#bef264]" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
            HealtyWay
          </span>
        </motion.a>

        {/* Center: Sliding Magnetic Pill Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
        >
          {navItems.map(item => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-white/85 hover:text-white'
                }`}
              >
                {/* Sliding Magnetic Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                  />
                )}
                <IconComponent className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </motion.nav>

        {/* Right: Spring Neon Lime Action Button */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <motion.button
            onClick={onOpenCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#bef264] hover:bg-[#b0ec4e] text-zinc-950 font-bold text-xs tracking-tight shadow-[0_0_18px_rgba(190,242,100,0.45)] cursor-pointer whitespace-nowrap"
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            <span>Join Now</span>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-1 px-1.5 py-0.2 rounded-full bg-black text-[#bef264] text-[10px] font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>

          {/* Mobile menu hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2 rounded-full border border-white/20 bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </motion.button>
        </motion.div>

      </div>

      {/* Mobile nav drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mx-4 my-2 rounded-2xl border border-white/15 bg-black/55 backdrop-blur-xl px-5 py-4 space-y-2 text-left shadow-2xl"
          >
            {navItems.map(item => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-zinc-950 font-bold shadow-sm'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/15'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
