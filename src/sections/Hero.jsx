import React, { useState, useEffect } from 'react';
import FluidIdeaField from '../components/FluidIdeaField';

export default function Hero({ onOpenJoin }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Normalized coordinates from -1 to 1
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 pt-28 pb-10 bg-[#020617] overflow-hidden select-none"
    >
      {/* 1. Living Fluid Idea Field Animation */}
      <FluidIdeaField />

      {/* 2. Deep Cosmic Navy & Stellar Cyan Ambient Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[560px] rounded-full blur-[140px] opacity-45 transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.14) 0%, rgba(30, 58, 138, 0.35) 45%, rgba(11, 19, 43, 0.6) 70%, transparent 85%)',
            transform: `translate(calc(-50% + ${mousePos.x * 24}px), calc(-50% + ${mousePos.y * 24}px))`,
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[320px] bg-[#38BDF8]/[0.04] rounded-full blur-[110px]" />
        <div className="absolute top-2/3 right-1/4 w-[380px] h-[300px] bg-[#1E3A8A]/[0.10] rounded-full blur-[120px]" />
      </div>

      {/* 4. MAIN CENTRAL SANCTUARY (THE E-CELL IDENTITY) */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-5xl mx-auto py-8">
        {/* Main E-CELL Title with Exact Warm Champagne Gold Gradient & Glow */}
        <h1
          className="font-display font-bold text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] tracking-tight leading-none select-none"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 25px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 65px rgba(232, 202, 140, 0.25))',
          }}
        >
          E-CELL
        </h1>

        {/* College Identity (Underneath, Refined, Spaced) */}
        <div className="mt-6 sm:mt-8">
          <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#F8FAFC]/95 font-medium">
            Walchand Institute of Technology
          </p>
        </div>

        {/* Short, Poetic Tagline */}
        <div className="mt-4">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#94A3B8] font-light tracking-wide max-w-lg">
            Where ideas transform into tangible impact.
          </p>
        </div>
      </div>

      {/* 5. Minimal Bottom Vertical Breathing Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-center text-[11px] font-mono tracking-widest text-[#94A3B8]/70 relative z-10">
        {/* Center: Delicate Scroll Line */}
        <button
          onClick={scrollToOverview}
          className="flex flex-col items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#94A3B8]/70 hover:text-[#F8FAFC] transition-colors group cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-[1.5px] h-8 bg-white/10 overflow-hidden rounded-full">
            <div className="w-full h-full bg-[#38BDF8] animate-scroll-line" />
          </div>
        </button>
      </div>
    </section>
  );
}
