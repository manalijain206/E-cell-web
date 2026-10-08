import React from 'react';

export default function CommunityBanner() {
  const statements = [
    'A PLACE TO MEET',
    'A PLACE TO BUILD',
    'A PLACE TO FAIL',
    'A PLACE TO LEARN',
    'A PLACE TO BEGIN',
    'A PLACE TO LAUNCH',
  ];

  return (
    <section className="relative py-20 bg-[#07070b] border-y border-white/[0.08] overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#FF5722]/10 blur-[100px] pointer-events-none" />

      {/* Top micro subtitle */}
      <div className="text-center mb-6">
        <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
          // THE COMMUNITY DNA
        </span>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
          MORE THAN AN ORGANIZATION.
        </h3>
      </div>

      {/* Kinetic Infinite Marquee 1 */}
      <div className="relative flex overflow-x-hidden py-3">
        <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap">
          {statements.concat(statements).map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 tracking-tight">
                {text}.
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FF5722]" />
            </div>
          ))}
        </div>
      </div>

      {/* Kinetic Infinite Marquee 2 (Reverse & Outlined) */}
      <div className="relative flex overflow-x-hidden py-2 opacity-50">
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 whitespace-nowrap">
          {statements.concat(statements).reverse().map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display font-black text-2xl sm:text-4xl text-zinc-600 tracking-tight">
                {text}
              </span>
              <span className="text-[#FF8A00] font-mono text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
