import React from 'react';
import { X, Calendar, Tag } from 'lucide-react';

export default function ImageLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-[#0c0c12] border border-white/10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative overflow-hidden bg-black flex items-center justify-center min-h-[300px] max-h-[65vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#0e0e16] border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono mb-2">
            <span className="text-[#FF5722] font-bold">[{item.category}]</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300">{item.year}</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
