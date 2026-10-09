import React from 'react';
import { VERIFIED_REVIEWS } from '../data/drinkData';
import { Star, Quote, Award, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="nutrition" className="py-20 md:py-28 bg-[#090f0c] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/40 text-emerald-400 text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Clinical & Sommelier Endorsement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Validated by Clinical Nutritionists & Drinkers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Real feedback from digestive clinicians, endurance athletes, and culinary sommeliers on the physiological impact of unheated A2 milk and cold-macerated fruit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_REVIEWS.map(rev => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl glass-panel border border-zinc-800/90 text-left flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata with separators (Rule 1.A) */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 font-mono">
                  <span className="text-emerald-400">{rev.drink}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>{rev.date}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-emerald-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400" />
                  ))}
                </div>

                {/* Quote prose */}
                <p className="text-sm text-zinc-200 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author attribution (Rule 1.H) */}
              <div className="pt-4 mt-6 border-t border-zinc-850">
                <p className="text-sm font-bold text-white font-display">{rev.author}</p>
                <p className="text-xs text-emerald-400 font-medium">{rev.title}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Standards Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/20 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div>
            <p className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Zero Chemical Policy</p>
            <h4 className="text-lg font-bold text-white mt-1">No Carrageenan or Gums</h4>
            <p className="text-xs text-zinc-400 mt-1">We never use gellan gum, xanthan gum, or emulsifying polysorbates.</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Low Glycemic Load</p>
            <h4 className="text-lg font-bold text-white mt-1">Unrefined Sweeteners</h4>
            <p className="text-xs text-zinc-400 mt-1">Only natural fruit fructose, organic raw agave, or wild wildflower honey.</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Cold Hydrostatic HPP</p>
            <h4 className="text-lg font-bold text-white mt-1">Live Enzyme Defense</h4>
            <p className="text-xs text-zinc-400 mt-1">Cold-chilled preservation protecting gut-friendly probiotics.</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Circular Glass Bottles</p>
            <h4 className="text-lg font-bold text-white mt-1">$1 Deposit Return</h4>
            <p className="text-xs text-zinc-400 mt-1">Sanitized apothecary bottles ensuring zero plastic leaching.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
