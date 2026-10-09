import heroFruitMilkImg from '../assets/images/hero_fruit_milk_drink_1791498890956.jpg';
import matchaAvocadoImg from '../assets/images/drink_matcha_avocado_1791498903325.jpg';
import mangoPassionImg from '../assets/images/drink_mango_passion_1791498915368.jpg';
import blueberryOatImg from '../assets/images/drink_blueberry_oat_1791498926127.jpg';
import goldenTurmericImg from '../assets/images/drink_golden_turmeric_1791502428902.jpg';
import dragonfruitKefirImg from '../assets/images/drink_dragonfruit_kefir_1791502419853.jpg';
import craftFarmImg from '../assets/images/craft_sourcing_farm_1791498936618.jpg';
import storeBarImg from '../assets/images/store_flagship_bar_1791502437931.jpg';

export { craftFarmImg, storeBarImg };

export interface DrinkItem {
  id: string;
  name: string;
  tagline: string;
  category: 'all' | 'pasture-milk' | 'plant-oat' | 'cold-pressed' | 'functional';
  price: number;
  calories: number;
  protein: number; // in grams
  sugar: number; // in grams
  vitC: number; // % DV
  freshnessScore: number;
  image: string;
  badge?: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  origin: string;
  flavorProfile: {
    sweetness: number;
    creaminess: number;
    fruitiness: number;
    refreshment: number;
  };
}

export interface CustomBlend {
  baseId: string;
  fruitId: string;
  sweetness: number; // 0, 25, 50, 75, 100
  ice: string;
  boosters: string[];
}

export const DRINKS_CATALOG: DrinkItem[] = [
  {
    id: 'ruby-strawberry-cream',
    name: 'Ruby Strawberry Silk Cream',
    tagline: 'Fresh Tochigi berries blended with grass-fed Hokkaido A2 whole milk',
    category: 'pasture-milk',
    price: 7.50,
    calories: 220,
    protein: 9.5,
    sugar: 14,
    vitC: 85,
    freshnessScore: 99,
    image: heroFruitMilkImg,
    badge: "Guest Favorite",
    description: 'Our iconic signature blend. Whole hand-crushed sun-ripened organic strawberries layered over cold-pressed grass-fed A2 dairy with a whisper of organic Tahitian vanilla.',
    ingredients: ['Fresh Organic Strawberries', 'Pasture-Raised A2 Whole Milk', 'Organic Agave Nectar', 'Tahitian Vanilla Bean', 'Crushed Himalayan Pink Salt'],
    allergens: ['Dairy (A2 Casein)'],
    origin: 'Valley Springs Co-Op & Coastal Berry Farms',
    flavorProfile: {
      sweetness: 65,
      creaminess: 88,
      fruitiness: 95,
      refreshment: 80
    }
  },
  {
    id: 'ceremonial-matcha-avocado',
    name: 'Ceremonial Matcha Avocado Cloud',
    tagline: 'First-harvest Uji matcha paired with buttery Hass avocado & oat milk',
    category: 'plant-oat',
    price: 8.25,
    calories: 240,
    protein: 7.0,
    sugar: 8,
    vitC: 45,
    freshnessScore: 98,
    image: matchaAvocadoImg,
    badge: "Clean Energy",
    description: 'A velvety, sustained-energy powerhouse. Stone-ground Kyoto ceremonial matcha whipped into ripe California avocado and barista-grade micro-foamed oat milk.',
    ingredients: ['Ceremonial Grade Uji Matcha', 'Cold-Pressed Hass Avocado', 'Barista Whole Oat Milk', 'Pure Date Nectar', 'Chlorophyll Drops'],
    allergens: ['Gluten-Free Oats'],
    origin: 'Kyoto Prefecture & Ventura Groves',
    flavorProfile: {
      sweetness: 40,
      creaminess: 95,
      fruitiness: 50,
      refreshment: 85
    }
  },
  {
    id: 'golden-mango-passion',
    name: 'Alphonso Mango & Passion Velvet',
    tagline: 'Single-origin mango nectar with golden passion fruit & creamy coconut milk',
    category: 'cold-pressed',
    price: 7.95,
    calories: 210,
    protein: 5.5,
    sugar: 16,
    vitC: 110,
    freshnessScore: 99,
    image: mangoPassionImg,
    badge: "Immunity Boost",
    description: 'Golden tropical indulgence rich in natural beta-carotene and vitamin C. Hand-scooped Ratnagiri Alphonso mango pulp stirred with aromatic yellow passion fruit and light coconut milk.',
    ingredients: ['Alphonso Mango Puree', 'Fresh Passion Fruit Pulp', 'Pressed Coconut Milk', 'Cold-Pressed Valencia Orange Juice', 'Organic Mint'],
    allergens: ['Tree Nuts (Coconut)'],
    origin: 'Ratnagiri Estate & Hawaii Tropical Farms',
    flavorProfile: {
      sweetness: 75,
      creaminess: 70,
      fruitiness: 100,
      refreshment: 92
    }
  },
  {
    id: 'midnight-blueberry-oat',
    name: 'Wild Blueberry Lavender Oat Silk',
    tagline: 'Antioxidant-dense wild Maine blueberries infused with French lavender & oat milk',
    category: 'plant-oat',
    price: 7.75,
    calories: 195,
    protein: 6.8,
    sugar: 11,
    vitC: 60,
    freshnessScore: 97,
    image: blueberryOatImg,
    badge: "Cognitive Focus",
    description: 'Deep indigo antioxidant nectar. Wild forest blueberries cold-macerated with calming lavender buds and blended into velvety oat milk for deep cellular restoration.',
    ingredients: ['Wild Maine Blueberries', 'Cold-Steeped Organic Lavender', 'Barista Oat Milk', 'Blue Spirulina', 'Acacia Fiber'],
    allergens: ['Gluten-Free Oats'],
    origin: 'Downeast Barrens, Maine',
    flavorProfile: {
      sweetness: 50,
      creaminess: 78,
      fruitiness: 88,
      refreshment: 82
    }
  },
  {
    id: 'pure-pasture-golden-turmeric',
    name: 'Golden Radiance Spiced Milk',
    tagline: 'Warm-extracted organic turmeric, Ceylon cinnamon, and A2 grass-fed dairy',
    category: 'functional',
    price: 7.20,
    calories: 180,
    protein: 10.2,
    sugar: 7,
    vitC: 25,
    freshnessScore: 99,
    image: goldenTurmericImg,
    badge: "Anti-Inflammatory",
    description: 'Traditional Ayurvedic vitality tonic. Single-origin Lakadong turmeric rich in active curcumin, combined with ginger, Ceylon cinnamon, black pepper and warm pasture milk.',
    ingredients: ['Pasture-Raised A2 Milk', 'High-Curcumin Lakadong Turmeric', 'Cold-Pressed Ginger Root', 'Ceylon Cinnamon', 'Raw Wildflower Honey'],
    allergens: ['Dairy (A2 Casein)'],
    origin: 'Meghalaya Hills & Pasture Co-Op',
    flavorProfile: {
      sweetness: 45,
      creaminess: 85,
      fruitiness: 30,
      refreshment: 70
    }
  },
  {
    id: 'dragonfruit-lychee-kefir',
    name: 'Dragonfruit Lychee Bio-Kefir',
    tagline: 'Vibrant pink pitaya, delicate white lychee, and probiotic cultured milk kefir',
    category: 'functional',
    price: 8.50,
    calories: 175,
    protein: 11.5,
    sugar: 9,
    vitC: 95,
    freshnessScore: 100,
    image: dragonfruitKefirImg,
    badge: "Gut Health",
    description: 'Over 50 billion live CFU probiotics per bottle. Organic red pitaya provides dramatic natural magenta hues and prebiotic fiber, complemented by floral lychee.',
    ingredients: ['Pink Pitaya Puree', 'Whole Lychee Puree', 'Cultured A2 Milk Kefir', 'Pomegranate Reduction', 'Prebiotic Inulin'],
    allergens: ['Dairy (Fermented Kefir)'],
    origin: 'Okinawa Subtropical Gardens & Pacific Dairy',
    flavorProfile: {
      sweetness: 60,
      creaminess: 65,
      fruitiness: 95,
      refreshment: 96
    }
  }
];

export const MILK_BASES = [
  { id: 'a2-pasture', name: 'A2 Grass-Fed Whole Milk', calories: 140, protein: 9, priceDelta: 0, desc: '100% pasture-raised heritage cow milk with easy-to-digest A2 beta-casein' },
  { id: 'barista-oat', name: 'Stone-Ground Oat Silk', calories: 120, protein: 4, priceDelta: 0.50, desc: 'Organic whole Scandinavian oats with a creamy, naturally sweet body' },
  { id: 'coconut-cream', name: 'Raw Young Coconut Milk', calories: 110, protein: 2, priceDelta: 0.50, desc: 'Cold-pressed Thai Nam Hom young coconuts, intensely aromatic' },
  { id: 'greek-kefir', name: 'Probiotic Cultured Kefir Milk', calories: 130, protein: 11, priceDelta: 0.75, desc: 'Fermented live probiotic milk delivering 12 active bio-cultures' }
];

export const FRUIT_INGREDIENTS = [
  { id: 'tochigi-strawberry', name: 'Tochigi Sweet Strawberry', sugar: 9, vitC: 75, calories: 45, color: '#ef4444' },
  { id: 'alphonso-mango', name: 'Ratnagiri Alphonso Mango', sugar: 12, vitC: 65, calories: 60, color: '#f59e0b' },
  { id: 'wild-blueberry', name: 'Downeast Wild Blueberry', sugar: 8, vitC: 40, calories: 50, color: '#6366f1' },
  { id: 'ceremonial-matcha', name: 'Kyoto Ceremonial Uji Matcha', sugar: 1, vitC: 25, calories: 25, color: '#22c55e' },
  { id: 'hass-avocado', name: 'Ventura Ripe Avocado', sugar: 2, vitC: 15, calories: 85, color: '#84cc16' },
  { id: 'pink-dragonfruit', name: 'Okinawa Magenta Dragonfruit', sugar: 7, vitC: 55, calories: 40, color: '#ec4899' }
];

export const FUNCTIONAL_BOOSTERS = [
  { id: 'chia', name: 'Organic Chia Omega Seeds', calories: 30, protein: 1.5, price: 0.75, benefit: 'Omega-3 & Satiety' },
  { id: 'collagen', name: 'Marine Peptide Collagen', calories: 35, protein: 9.0, price: 1.50, benefit: 'Skin Elasticity & Joints' },
  { id: 'grass-whey', name: 'A2 Native Whey Isolate', calories: 60, protein: 15.0, price: 1.75, benefit: 'Lean Muscle Synthesis' },
  { id: 'aloe-vera', name: 'Fresh Aloe Vera Pulp', calories: 10, protein: 0.2, price: 0.75, benefit: 'Digestive Soothing' },
  { id: 'boba-konjac', name: 'Brown Agave Konjac Pearls', calories: 20, protein: 0, price: 0.85, benefit: 'Zero-Guilt Chewy Texture' }
];

export interface LocationItem {
  id: string;
  city: string;
  name: string;
  address: string;
  hours: string;
  status: string;
  waitTime: string;
  busyness: string;
  phone: string;
  image?: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    id: 'soho',
    city: 'New York',
    name: 'SoHo Flagship Drink Lab',
    address: '462 Broome St, New York, NY 10013',
    hours: 'Mon–Sun: 7:00 AM – 9:00 PM',
    status: 'Open Now',
    waitTime: '4 min wait',
    busyness: 'Low',
    phone: '+1 (212) 555-0182',
    image: storeBarImg
  },
  {
    id: 'beverly-hills',
    city: 'Los Angeles',
    name: 'Beverly Hills Botanical Bar',
    address: '9604 Wilshire Blvd, Beverly Hills, CA 90212',
    hours: 'Mon–Sun: 7:30 AM – 8:30 PM',
    status: 'Open Now',
    waitTime: '6 min wait',
    busyness: 'Moderate',
    phone: '+1 (310) 555-0199',
    image: storeBarImg
  },
  {
    id: 'shibuya',
    city: 'Tokyo',
    name: 'Shibuya Reserve & Cold Lab',
    address: '1-19-8 Jinnan, Shibuya-ku, Tokyo 150-0041',
    hours: 'Daily: 8:00 AM – 10:00 PM',
    status: 'Open Now',
    waitTime: '3 min wait',
    busyness: 'Low',
    phone: '+81 3-5555-0144',
    image: storeBarImg
  },
  {
    id: 'singapore',
    city: 'Singapore',
    name: 'Marina Bay Sands Wellness Bar',
    address: '10 Bayfront Ave, #01-14, Singapore 018956',
    hours: 'Daily: 8:00 AM – 9:30 PM',
    status: 'Open Now',
    waitTime: '8 min wait',
    busyness: 'Moderate',
    phone: '+65 6555 0122',
    image: storeBarImg
  }
];

export const VERIFIED_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Dr. Elena Rostova',
    title: 'Clinical Nutritionist & Author',
    location: 'New York, NY',
    drink: 'Ruby Strawberry Silk Cream',
    rating: 5,
    date: 'March 2026',
    quote: 'HealtyWay does what almost no commercial drink bar achieves: real pasture-raised A2 casein with zero industrial gums, stabilizers, or high-fructose syrups. The glycemic response is remarkably steady.'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    title: 'Marathoner & Founder',
    location: 'Venice, CA',
    drink: 'Ceremonial Matcha Avocado Cloud',
    rating: 5,
    date: 'February 2026',
    quote: 'The Matcha Avocado Cloud is my indispensable pre-run ritual. Healthy monounsaturated fats from California avocado slow the caffeine absorption for 5 hours of clean, jitter-free focus.'
  },
  {
    id: 'rev-3',
    author: 'Aiko Tanaka',
    title: 'Food & Beverage Sommelier',
    location: 'Tokyo, Japan',
    drink: 'Alphonso Mango & Passion Velvet',
    rating: 5,
    date: 'March 2026',
    quote: 'The aromatic purity of the Alphonso pulp paired with raw young coconut is exceptional. You taste the true brix of ripe orchard fruit, not cane sugar masquerading as flavor.'
  }
];
