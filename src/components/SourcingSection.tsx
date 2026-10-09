import React, { useState } from 'react';
import { ShieldCheck, Leaf, Droplets, RotateCcw, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { craftFarmImg } from '../data/drinkData';

export const SourcingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 'a2-dairy',
      title: 'A2 Pasture-Raised Dairy',
      subtitle: 'Single-source heritage cows on rotational pastures',
      stat: '100% A2 Beta-Casein',
      statLabel: 'Zero Digestive Distress',
      desc: 'Conventional milk predominantly contains A1 beta-casein, which can trigger inflammatory peptides during digestion. Our heritage Guernsey and Jersey cows produce strictly A2 beta-casein, naturally gentler on digestion and twice as rich in conjugated linoleic acid (CLA).',
      points: [
        'Regenerative rotational grazing across 450+ certified organic acres',
        'Cows free-range on fresh clover, timothy grass, and wild chicory',
        'Zero synthetic growth hormones (rBST), zero prophylactic antibiotics'
      ]
    },
    {
      id: 'tree-ripened',
      title: 'Peak-Season Whole Orchard Harvest',
      subtitle: 'Tree-ripened fruits cold-pressed within 24 hours of harvest',
      stat: '14.2° Brix',
      statLabel: 'Peak Natural Sugar Level',
      desc: 'Most drink shops use commercial fruit concentrates reconstituted with water and citric acid. We partner with single-estate growers who harvest fruit only when natural sugars (Brix) and phytonutrients hit physiological maturity, pressing whole fruit skin-and-pulp intact.',
      points: [
        'Tochigi strawberries hand-selected for natural anthocyanin concentration',
        'Ratnagiri Alphonso mangoes ripened on the tree without calcium carbide',
        'Batch-tested for over 220 agricultural chemical residues'
      ]
    },
    {
      id: 'hpp-cold',
      title: 'Non-Thermal Cold Processing (HPP)',
      subtitle: '6,000 atmospheres of isostatic pressure at 4°C',
      stat: '99.4%',
      statLabel: 'Enzyme & Vit C Retention',
      desc: 'Standard commercial pasteurization heats milk and juice to 72°C–140°C, denaturing delicate heat-sensitive vitamins and enzymes. We utilize High-Pressure Processing (HPP), applying cold hydrostatic pressure that neutralizes bacteria while keeping vitamins and bioactive enzymes 100% intact.',
      points: [
        'Preserves delicate live lactoferrin and digestive amylase enzymes',
        'Zero heat-induced flavor degradation or caramelization off-notes',
        'Guarantees 30-day chilled bottle stability purely through cold pressure'
      ]
    },
    {
      id: 'circular-glass',
      title: 'Zero-Waste Circular Apothecary Glass',
      subtitle: 'Pharmaceutical-grade amber and flint glass bottles',
      stat: '$1.00 Back',
      statLabel: 'Per Returned Bottle',
      desc: 'Plastic bottles leach microplastics and phthalates into acidic fruit juices and lipid-rich milk. Every HealtyWay formulation is poured into thick recycled apothecary glass. Return your rinsed bottles to any lab for a $1.00 credit towards your next elixir.',
      points: [
        '100% infinitely recyclable, lead-free flint and amber glass',
        'Prevents over 340,000 single-use plastic cups annually across our shops',
        'Sanitized in closed-loop pharmaceutical-grade washers'
      ]
    }
  ];

  return (
    <section id="sourcing" className="py-20 md:py-28 bg-[#090f0c] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/40 text-emerald-400 text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Farm-to-Bottle Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            The Purity Verification Standard
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            We reject the industrial supply chain of powdered milk formulas, synthetic fruit syrups, and artificial shelf-life extenders. Here is how our four-pillar cold chain guarantees vitality.
          </p>
        </div>

        {/* Big Farm Banner Showcase (Generated high-res visual) */}
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-zinc-800 mb-12 group">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full bg-zinc-900 relative">
            <img
              src={craftFarmImg}
              alt="Organic pasture dairy and fruit orchard"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            
            {/* Visual Callout Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-zinc-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  Pasture Co-Op Partner #07 · Hudson Valley
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-display">
                  Where Pure Heritage Grass Meets Tree-Ripened Sunshine
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2">
                  Every drop of our A2 milk begins with pasture-grazed Guernsey cows grazing on organic clover, bottled within 48 hours.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-left">
                  <p className="text-[11px] font-mono text-zinc-400">Total Regenerative Acres</p>
                  <p className="text-lg font-bold text-white font-mono tabular-nums">480+ Acres</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-left">
                  <p className="text-[11px] font-mono text-zinc-400">Farm Dispatch Time</p>
                  <p className="text-lg font-bold text-emerald-400 font-mono tabular-nums">04:30 AM</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive 4 Pillars Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selector Buttons (Left, 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-950/50 border-emerald-500/60 shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-850 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">0{idx + 1}.</span>
                    <span className="text-xs font-mono text-zinc-400 tabular-nums">{pillar.stat}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1 font-display">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{pillar.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display (Right, 7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 text-left space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  Pillar 0{activeTab + 1} Specification
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                  {pillars[activeTab].title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums block">
                  {pillars[activeTab].stat}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  {pillars[activeTab].statLabel}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {pillars[activeTab].desc}
            </p>

            {/* Checkpoints */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Audited Quality Benchmarks:
              </h5>
              <div className="space-y-2">
                {pillars[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific certificate footer note */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Third-party laboratory tested</span>
              <span className="text-emerald-400">Zero Synthetic Compounds</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
