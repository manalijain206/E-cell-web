import React from 'react';
import { startupsData } from '../data/startups';
import { Terminal, ArrowUpRight, Flame, Layers } from 'lucide-react';

export default function StartupsShowcase({ onOpenJoinModal }) {
  return (
    <section className="relative py-28 bg-[#060608] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 09 · CAMPUS VENTURES & DEMOS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              IDEAS BORN HERE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-400 max-w-sm">
            Student-engineered prototypes and venture experiments incubated inside the WIT innovation ecosystem.
          </p>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {startupsData.map((venture) => (
            <div
              key={venture.id}
              className="p-8 rounded-3xl bg-[#0b0b10] border border-white/[0.08] hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Tag & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                    {venture.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30 text-[10px] font-mono font-bold text-[#FF8A00]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                    {venture.status}
                  </span>
                </div>

                {/* Venture Name */}
                <h3 className="font-display font-black text-2xl text-white tracking-tight group-hover:text-[#FF5722] transition-colors">
                  {venture.name}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  By {venture.founder}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-medium">
                  "{venture.tagline}"
                </p>

                {/* Problem & Solution Breakdown */}
                <div className="mt-6 space-y-4 pt-4 border-t border-white/[0.06]">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#FF5722] font-bold">
                      THE PROBLEM:
                    </div>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      {venture.problem}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#FFA000] font-bold">
                      THE SOLUTION:
                    </div>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      {venture.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-300">
                  {venture.metrics}
                </span>

                <button
                  onClick={onOpenJoinModal}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#FF5722] hover:text-white transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
