import React, { useEffect } from 'react';
import { Sparkles, X, Terminal, Flame } from 'lucide-react';
import { triggerEasterEggConfetti } from '../utils/confetti';

export default function EasterEggModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      triggerEasterEggConfetti();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in zoom-in-95 duration-200">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-[#0c0c14] border-2 border-[#FF5722] text-white shadow-[0_0_60px_rgba(255,87,34,0.4)] text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Secret badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/20 border border-[#FF5722] text-[#FF8A00] font-mono text-[11px] font-bold uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>EASTER EGG UNLOCKED</span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
          YOU FOUND THE SECRET.
        </h3>

        <div className="my-6 p-5 rounded-2xl bg-[#14141e] border border-white/10 text-left">
          <p className="font-display font-bold text-lg text-[#FF8A00] leading-snug">
            “Every big company started as a crazy idea.”
          </p>
          <p className="mt-3 text-xs font-mono text-zinc-400 leading-relaxed">
            Airbnb started with three air mattresses in a living room. Apple started in a garage.
            Whatever wild thought you’re nursing in your engineering notebook right now—build the first prototype.
          </p>
        </div>

        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-full bg-[#FF5722] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#FF6E3A] transition-colors"
        >
          KEEP BUILDING
        </button>
      </div>
    </div>
  );
}
