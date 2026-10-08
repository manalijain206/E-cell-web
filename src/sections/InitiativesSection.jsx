import React, { useState } from 'react';
import { initiativesData } from '../data/initiatives';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function InitiativesSection({ onOpenJoinModal }) {
  const [activeInitiative, setActiveInitiative] = useState(initiativesData[0].id);

  return (
    <section id="initiatives" className="relative py-28 bg-[#060608] border-b border-white/[0.06] overflow-hidden">
      {/* Background aura */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 05 · FLAGSHIP PROGRAMS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              OUR INITIATIVES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-400 max-w-sm">
            Structured tracks built to take students from casual curiosity to defensible venture validation.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiativesData.map((item) => {
            const isSelected = activeInitiative === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveInitiative(item.id)}
                className={`p-8 rounded-3xl bg-[#0b0b10] border transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#FF5722]/60 shadow-[0_15px_40px_-15px_rgba(255,87,34,0.25)]'
                    : 'border-white/[0.07] hover:border-white/20'
                }`}
                data-cursor-text="EXPAND"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#FF5722]">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                      {item.status}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    // {item.tagline}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-display font-black text-2xl text-white tracking-tight group-hover:text-[#FF5722] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Deep Description */}
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tags & Metrics */}
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono font-semibold text-[#FF8A00] mb-3">
                    {item.metrics}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] text-[10px] font-mono text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101017] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base">
                Have a concept not covered here?
              </div>
              <div className="text-xs font-mono text-zinc-400">
                We support multidisciplinary hardware, software, biotech, and civic projects.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#FF5722] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200"
          >
            PITCH TO IDEA LAB →
          </button>
        </div>
      </div>
    </section>
  );
}
