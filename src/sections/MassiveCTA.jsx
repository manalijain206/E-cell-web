import React from 'react';
import { ArrowRight, Sparkles, Send, Flame } from 'lucide-react';

export default function MassiveCTA({ onOpenJoinModal }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 bg-[#060608] border-b border-white/[0.08] overflow-hidden text-center">
      {/* Background large fiery glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/15 rounded-full blur-[200px] pointer-events-none" />

      {/* Decorative ambient lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF5722] uppercase tracking-widest mb-6">
          <Flame className="w-3.5 h-3.5" />
          <span>ZERO REGRETS · 100% BUILDING</span>
        </div>

        {/* Large Statement Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
          GOT AN IDEA?
        </h2>

        <p className="mt-4 font-display font-black text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#FFA000] to-white tracking-tight">
          DON'T KEEP IT IN YOUR NOTES APP.
        </p>

        <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
          The difference between a student daydream and a defensible venture is taking
          the first step. Join the cohort, meet your co-founders, and build.
        </p>

        {/* Animated Directional Beam */}
        <div className="my-8 flex flex-col items-center">
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-transparent via-[#FF5722] to-[#FF8A00] animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_12px_#FF5722] -mt-1" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF5722] hover:bg-[#FF6E3A] text-black font-mono font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(255,87,34,0.5)] hover:shadow-[0_0_50px_rgba(255,87,34,0.7)] active:scale-95 transition-all group"
            data-cursor-text="JOIN"
          >
            <span>JOIN E-CELL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-mono font-bold text-sm tracking-wider uppercase transition-all"
          >
            COLLABORATE WITH US
          </button>
        </div>

        <div className="mt-8 text-xs font-mono text-zinc-400">
          Open to all engineering years & disciplines at Walchand Institute of Technology
        </div>
      </div>
    </section>
  );
}
