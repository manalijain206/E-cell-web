import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-300 select-none"
      onClick={onClose}
    >
      {/* Top Bar: Title, Counter & Close */}
      <div
        className="flex items-center justify-between z-20 max-w-7xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs font-semibold uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#94A3B8] hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage with Next/Prev Arrows */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 sm:my-6 max-w-6xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Media Container */}
        <div className="relative max-h-[65vh] sm:max-h-[70vh] w-full flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 bg-[#081226]/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {currentItem.image ? (
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-2xl transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full min-h-[350px] sm:min-h-[460px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/80 via-[#071329] to-[#020617] relative text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
              <div className="w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                <Sparkles className="w-8 h-8 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-2">
                {currentItem.title}
              </h3>
              <p className="text-sm text-[#94A3B8] font-mono max-w-md">
                {currentItem.caption}
              </p>
              <div className="mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#38BDF8]">
                Place your photograph in public/assets/gallery/
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Detail Strip & Thumbnail Navigation */}
      <div
        className="max-w-5xl mx-auto w-full z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 className="font-sans font-bold text-lg sm:text-xl text-white">
            {currentItem.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-light mt-0.5">
            {currentItem.caption}
          </p>
          <div className="flex items-center gap-4 mt-2 text-xs font-mono text-[#64748B]">
            {currentItem.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                {currentItem.date}
              </span>
            )}
            {currentItem.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                {currentItem.location}
              </span>
            )}
          </div>
        </div>

        {/* Mini Filmstrip Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full sm:max-w-md">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative shrink-0 w-12 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-[#38BDF8] ring-2 ring-[#38BDF8]/40 scale-105'
                  : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#081226] flex items-center justify-center text-[10px] font-mono text-[#38BDF8]">
                  {idx + 1}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
