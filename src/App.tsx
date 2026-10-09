/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MenuSection } from './components/MenuSection';
import { DrinkBuilder } from './components/DrinkBuilder';
import { LocationsSection } from './components/LocationsSection';
import { DrinkDetailModal } from './components/DrinkDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { DRINKS_CATALOG, DrinkItem, LOCATIONS } from './data/drinkData';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hw_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedDrinkId, setSelectedDrinkId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [pickupLocation, setPickupLocation] = useState<string>(LOCATIONS[0].name);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('hw_cart_items', JSON.stringify(cartItems));
    } catch {
      // ignore storage errors
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (drink: DrinkItem, quantity: number = 1, instructions?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.cartId === drink.id && item.instructions === instructions);
      if (existing) {
        return prev.map(item =>
          item === existing ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          cartId: `${drink.id}-${Date.now()}`,
          name: drink.name,
          price: drink.price,
          quantity,
          calories: drink.calories,
          description: drink.tagline,
          instructions,
          image: drink.image
        }
      ];
    });
    showToast(`Added ${quantity}x "${drink.name}" to bag`);
  };

  const handleAddCustomToCart = (custom: {
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
  }) => {
    setCartItems(prev => [
      ...prev,
      {
        cartId: `custom-${Date.now()}`,
        name: custom.name,
        price: custom.price,
        quantity: 1,
        calories: custom.calories,
        description: custom.description
      }
    ]);
    showToast(`Added your custom blend to bag`);
  };

  const handleUpdateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const selectedDrink = selectedDrinkId
    ? DRINKS_CATALOG.find(d => d.id === selectedDrinkId) || null
    : null;

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-coincompass-green text-white flex flex-col justify-between selection:bg-[#bef264]/30 selection:text-[#bef264]">
      
      {/* Toast Notification with AnimatePresence */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0c361a]/95 border border-[#bef264]/40 text-white text-xs font-semibold px-4 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#bef264] animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navbar matching CoinCompass Screenshot */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBuilder={() => {
          const el = document.getElementById('customizer');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          featuredDrink={DRINKS_CATALOG[0]}
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBuilder={() => {
            const el = document.getElementById('customizer');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectDrink={(id) => setSelectedDrinkId(id)}
        />

        <FeaturesSection />

        <MenuSection
          onSelectDrink={(id) => setSelectedDrinkId(id)}
          onAddToCart={(drink) => handleAddToCart(drink, 1)}
        />

        <DrinkBuilder
          onAddCustomToCart={handleAddCustomToCart}
        />

        <LocationsSection
          onSelectStoreForPickup={(storeName) => {
            setPickupLocation(storeName);
            showToast(`Pickup store set to ${storeName}`);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Cart Drawer */}
      <DrinkDetailModal
        drink={selectedDrink}
        onClose={() => setSelectedDrinkId(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        pickupLocation={pickupLocation}
      />

    </div>
  );
}
