import React from 'react';
import { ShieldCheck, Thermometer, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#0a120e] border-b border-emerald-950/60 py-2.5 overflow-hidden text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        
        {/* Left: Fresh Batch Status */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -ml-3.5" />
            <span className="font-mono text-[11px] tracking-wider uppercase">Live Lab Telemetry</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Thermometer className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cold-Chain Temp:</span>
            <span className="font-mono text-emerald-300 font-semibold tabular-nums">3.8°C (Optimal)</span>
          </div>
        </div>

        {/* Center: Real Quality Verification */}
        <div className="hidden lg:flex items-center gap-6 text-zinc-300 text-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Grass-Fed A2 Beta-Casein Certified</span>
          </div>
          <span className="text-zinc-700">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Added Refined Sugars or Emulsifiers</span>
          </div>
        </div>

        {/* Right: Daily Statistics */}
        <div className="flex items-center gap-3 text-zinc-400 text-xs">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Today's Cold Press:</span>
            <span className="font-mono font-semibold text-zinc-200 tabular-nums">1,428 Bottles</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <span className="text-emerald-400 font-medium hidden sm:inline">4 Stores Open</span>
        </div>

      </div>
    </div>
  );
};
