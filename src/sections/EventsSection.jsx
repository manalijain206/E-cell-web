import React, { useState, useEffect, useRef } from 'react';
import { eventsList, eventCategories } from '../data/events';
import { Calendar, Users, ArrowUpRight, Sparkles, Trophy, Code2, Palette, CheckCircle2 } from 'lucide-react';

export default function EventsSection({ onSelectEvent, onRegisterEvent }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Filter events based on active category
  const filteredEvents = eventsList.filter((event) => {
    if (selectedCategory === 'ALL') return true;
    return event.category === selectedCategory;
  });

  // Exact E-CELL / Our Motto Champagne Gold Gradient from user's image
  const heroEcellGradientStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))',
  };

  // Helper icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'HACKATHONS':
        return Code2;
      case 'COMPETITIONS':
        return Palette;
      case 'FLAGSHIP':
        return Trophy;
      default:
        return Users;
    }
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20"
    >
      {/* Background Soft Cosmic Nebulae */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#1E3A8A]/[0.12] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[650px] h-[600px] bg-[#0284C7]/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================================================== */}
        {/* 1. SECTION HEADER (MATCHING USER REFERENCE IMAGE)  */}
        {/* ================================================== */}
        <div className="text-left mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
            <span className="text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold">
              CAMPUS INITIATIVES & EVENTS
            </span>
          </div>

          {/* Title in Champagne Gold Gradient */}
          <h2
            className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-3 select-none"
            style={heroEcellGradientStyle}
          >
            Events & Initiatives 2024–26
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed max-w-2xl">
            Click any event to explore full details, flow, speakers & impact.
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. INTERACTIVE CATEGORY FILTER TABS                */}
        {/* ================================================== */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {eventCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#38BDF8] text-[#020617] shadow-[0_0_25px_rgba(56,189,248,0.45)]'
                    : 'bg-[#081226]/80 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-[#38BDF8]/30 hover:bg-[#0B1733]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* 3. 3-COLUMN EVENT CARDS (MATCHING REFERENCE IMAGE) */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredEvents.map((event, idx) => {
            const CatIcon = getCategoryIcon(event.category);
            return (
              <div
                key={event.id}
                onClick={() => onSelectEvent?.(event)}
                className={`group relative flex flex-col justify-between rounded-3xl bg-[#081226]/60 hover:bg-[#0B1A3A]/90 border border-white/[0.08] hover:border-[#38BDF8]/50 transition-all duration-500 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.22)] hover:-translate-y-2 overflow-hidden cursor-pointer transform ${
                  sectionVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                {/* Top Glowing Ambient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle Internal Nebula Aura */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#38BDF8]/[0.07] rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-[#030816]">
                    {event.image ? (
                      <>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081226] via-transparent to-black/25 pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-[#0B1A3A]/70 via-[#071329] to-[#020617] border-b border-white/[0.05] p-6 text-center overflow-hidden">
                        {/* Subtle Starry Mesh Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                        <div className="absolute w-36 h-36 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                        {/* Category Icon Capsule */}
                        <div className="relative w-12 h-12 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#38BDF8]/60 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                          <CatIcon className="w-5 h-5 text-[#38BDF8]" />
                        </div>

                        {/* Placeholder Text */}
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#BAE6FD] font-semibold">
                            {event.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#94A3B8]/80 mt-1 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]/60" />
                            Add event photo in /public/assets/events/
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Status Badge in Top-Right */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      {event.badge === 'COMPLETED' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase font-bold">
                          <CheckCircle2 className="w-3 h-3 text-[#38BDF8]" />
                          <span>COMPLETED</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 backdrop-blur-md border border-[#38BDF8]/50 text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                          <span>{event.badge || 'UPCOMING'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Date / Month Tag */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-wider uppercase mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{event.date}</span>
                    </div>

                    {/* Event Name */}
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#BAE6FD] transition-colors tracking-tight mb-3">
                      {event.title}
                    </h3>

                    {/* Event Description (INFO) */}
                    <p className="text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div className="px-6 sm:px-7 py-4 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono text-[#94A3B8] bg-white/[0.01]">
                  <div className="flex items-center gap-2 group-hover:text-[#38BDF8] transition-colors">
                    <CatIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{event.metric || 'Explore Overview'}</span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#38BDF8]/20 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
