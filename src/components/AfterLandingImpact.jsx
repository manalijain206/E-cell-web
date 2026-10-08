import React from 'react';
import {
  Users,
  Calendar,
  Rocket,
  TrendingUp,
  Award,
  MapPin,
  Building2,
  Sparkles,
} from 'lucide-react';

/**
 * AfterLandingImpact — "IMPACT MARQUEE & KEY METRICS STRIP"
 * 
 * Modeled after the reference layout:
 * 1. Infinite Ticker Tape with icons & live stats in our Deep Emerald + Soft Mint theme.
 * 2. 5 Big Bold Impact Numbers (3x, 15+, 35+, 8, 2.5K) with Champagne Gold gradient.
 * 3. Introduction lead-in ("— ABOUT US: The startup heartbeat of WIT Solapur").
 */
export default function AfterLandingImpact() {
  const tickerItems = [
    { icon: Users, text: '1,500+ EVENT ATTENDEES' },
    { icon: Calendar, text: '15+ EVENTS ORGANISED' },
    { icon: Rocket, text: '35+ STARTUPS PITCHED' },
    { icon: TrendingUp, text: '8+ STARTUPS FUNDED' },
    { icon: Award, text: 'NATIONAL PODIUMS · IIT BOMBAY' },
    { icon: MapPin, text: 'SOLAPUR, MAHARASHTRA' },
    { icon: Building2, text: 'HEXATECH & INDUSTRY PARTNERS' },
    { icon: Sparkles, text: 'WALCHAND INSTITUTE OF TECHNOLOGY' },
  ];

  const bigStats = [
    {
      value: '3x',
      label: 'National Podiums',
      subtext: 'NEC IIT Bombay Finals',
    },
    {
      value: '15+',
      label: 'Events Organised',
      subtext: 'Flagship Summits & Hackathons',
    },
    {
      value: '35+',
      label: 'Startups Pitched',
      subtext: 'To Angel & Seed Networks',
    },
    {
      value: '8',
      label: 'Startups Funded',
      subtext: 'Active Commercial Ventures',
    },
    {
      value: '2.5K',
      label: 'Community Reach',
      subtext: 'Engineers & Innovators',
    },
  ];

  return (
    <section className="relative w-full bg-[#020617] text-[#F8FAFC] overflow-hidden select-none pt-16 sm:pt-20 lg:pt-24">
      {/* ================================================== */}
      {/* 1. INFINITE RUNNING MARQUEE TICKER TAPE            */}
      {/* ================================================== */}
      <div className="relative w-full border-y border-white/[0.08] bg-[#050B18]/90 backdrop-blur-md py-4 overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee items-center gap-10 sm:gap-14">
          {/* First loop instance */}
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`m1-${idx}`}
                className="flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{item.text}</span>
                <span className="text-white/20 ml-4 font-sans">•</span>
              </div>
            );
          })}

          {/* Second duplicate instance for seamless infinite scrolling */}
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`m2-${idx}`}
                className="flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{item.text}</span>
                <span className="text-white/20 ml-4 font-sans">•</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================== */}
      {/* 2. 5-COLUMN IMPACT NUMBERS ROW (MATCHING REFERENCE) */}
      {/* ================================================== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-14 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {bigStats.map((stat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center text-center py-6 md:py-4 px-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stat Big Number - Crisp Pure White & Reduced Proportional Size */}
              <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                {stat.value}
              </span>

              {/* Clean Title-Case / Monospace Label */}
              <span className="mt-3 sm:mt-3.5 font-mono text-xs sm:text-sm text-[#94A3B8] tracking-wide group-hover:text-[#38BDF8] transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
