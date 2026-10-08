import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { galleryItems, galleryCategories } from '../data/gallery';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MapPin,
  Calendar,
  Camera,
} from 'lucide-react';
import GalleryLightbox from '../components/GalleryLightbox';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const containerRef = useRef(null);
  const AUTO_INTERVAL = 2600; // Snappier 2.6s auto spin (increased speed)

  // Filter gallery items by active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const total = filteredItems.length;

  // Reset index when category switches
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Autoplay loop (pauses when hovering)
  useEffect(() => {
    if (isHovered || total <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, total, handleNext]);

  // Mouse tilt on the active card
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 12,
      y: (x / rect.width) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Drag and swipe handling
  const onPointerDown = (e) => {
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const onPointerUp = (e) => {
    if (dragStartX === null) return;
    const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    const diff = dragStartX - clientX;
    if (diff > 45) handleNext();
    if (diff < -45) handlePrev();
    setDragStartX(null);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Champagne Gold Gradient from website theme
  const heroEcellGradientStyle = {
    background:
      'linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter:
      'drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))',
  };

  return (
    <section
      id="gallery"
      className="relative py-28 sm:py-36 px-4 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20"
    >
      {/* Background Soft Cosmic Nebulae */}
      <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-[#1E3A8A]/[0.12] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] bg-[#0284C7]/[0.08] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================================================== */}
        {/* 1. SECTION HEADER                                  */}
        {/* ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
            <span className="text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold">
              MOMENTS & MILESTONES
            </span>
            <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
          </div>

          {/* Title in Champagne Gold Gradient */}
          <h2
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4"
            style={heroEcellGradientStyle}
          >
            Our Gallery
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed">
            Snapshots from events, competitions, and the journey that made us.
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. CATEGORY FILTER TABS                            */}
        {/* ================================================== */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'ALL'
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#38BDF8] text-[#020617] shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-105'
                    : 'bg-[#081226]/80 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-[#38BDF8]/30 hover:bg-[#0B1733]'
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 text-[10px] opacity-75 font-mono">
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* 3. CRAZY 3D ORBITAL SLIDESHOW ENGINE               */}
        {/* ================================================== */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
          className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center perspective-[1400px] cursor-grab active:cursor-grabbing"
          style={{ perspective: '1400px' }}
        >
          {/* Ambient Cosmic Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-[#38BDF8]/[0.12] rounded-full blur-[140px] pointer-events-none" />

          {/* Cards arranged in 3D orbit */}
          {filteredItems.map((item, index) => {
            // Calculate circular distance from activeIndex
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isFarLeft = diff === -2;
            const isFarRight = diff === 2;
            const isVisible = Math.abs(diff) <= 2;

            // Compute dynamic 3D transform values
            let translateX = '0%';
            let translateZ = '0px';
            let rotateY = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;

            if (isCenter) {
              translateX = '0%';
              translateZ = '120px';
              rotateY = tilt.y;
              scale = 1;
              opacity = 1;
              zIndex = 40;
            } else if (isRight) {
              translateX = 'calc(62% + 20px)';
              translateZ = '-80px';
              rotateY = -28;
              scale = 0.85;
              opacity = 0.65;
              zIndex = 25;
            } else if (isLeft) {
              translateX = 'calc(-62% - 20px)';
              translateZ = '-80px';
              rotateY = 28;
              scale = 0.85;
              opacity = 0.65;
              zIndex = 25;
            } else if (isFarRight) {
              translateX = 'calc(110% + 40px)';
              translateZ = '-220px';
              rotateY = -45;
              scale = 0.7;
              opacity = 0.22;
              zIndex = 10;
            } else if (isFarLeft) {
              translateX = 'calc(-110% - 40px)';
              translateZ = '-220px';
              rotateY = 45;
              scale = 0.7;
              opacity = 0.22;
              zIndex = 10;
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isCenter) {
                    openLightbox(index);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                onMouseMove={isCenter ? handleMouseMove : undefined}
                className={`absolute w-[88vw] sm:w-[500px] md:w-[620px] lg:w-[680px] aspect-[16/10] rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isCenter
                    ? 'cursor-pointer ring-1 ring-[#38BDF8]/60 shadow-[0_25px_70px_rgba(2,6,23,0.95),0_0_55px_rgba(56,189,248,0.28)]'
                    : 'cursor-pointer hover:opacity-85 shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
                }`}
                style={{
                  transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg) ${
                    isCenter ? `rotateX(${tilt.x}deg)` : ''
                  } scale(${scale})`,
                  opacity: isVisible ? opacity : 0,
                  zIndex,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glowing Top Shimmer Edge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 z-30 ${
                    isCenter
                      ? 'bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-100'
                      : 'opacity-0'
                  }`}
                />

                {/* Media Container */}
                <div className="relative w-full h-full bg-[#030816] overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    /* Futuristic Cosmic Hologram Banner */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/95 via-[#071329] to-[#020617] relative text-center">
                      {/* Deep space coordinate grid */}
                      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-25 pointer-events-none" />
                      <div className="absolute w-44 h-44 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

                      {/* Floating glowing aperture lens */}
                      <div className="relative w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mb-4 shadow-[0_0_35px_rgba(56,189,248,0.35)]">
                        <Camera className="w-8 h-8 text-[#38BDF8]" />
                      </div>

                      <div className="relative z-10">
                        <span className="text-sm font-mono uppercase tracking-[0.25em] text-[#BAE6FD] font-semibold block">
                          {item.title}
                        </span>
                        <span className="text-[11px] font-mono text-[#94A3B8] mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                          Add photo in public/assets/gallery/
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Dramatic Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-black/35 pointer-events-none z-10" />

                  {/* Top Bar Pills */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest uppercase text-[#38BDF8] font-bold shadow-md">
                      {item.category}
                    </span>
                    {isCenter && (
                      <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-[#38BDF8] hover:text-[#020617] transition-colors shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Cinematic Information HUD */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none">
                    <div className="p-4 sm:p-6 rounded-2xl bg-[#081226]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                      <h3
                        className="font-sans font-bold text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight mb-2"
                        style={isCenter ? heroEcellGradientStyle : { color: '#F8FAFC' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] font-light line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>

                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                          {item.date}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Left/Right Stage Navigation Chevrons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* ================================================== */}
        {/* 4. CLEAN ORBITAL PAGINATION DOTS (NO CLUTTER)      */}
        {/* ================================================== */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-8 bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.7)]'
                  : 'w-2 bg-white/20 hover:bg-white/45'
              }`}
              aria-label={`Jump to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <GalleryLightbox
          isOpen={lightboxOpen}
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % total)}
          onPrev={() =>
            setLightboxIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
          }
          onSelectIndex={(index) => setLightboxIndex(index)}
        />

      </div>
    </section>
  );
}
