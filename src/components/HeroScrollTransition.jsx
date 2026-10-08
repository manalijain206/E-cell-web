import React from 'react';
import { ArrowUpRight, Zap, Target, Flame, Sparkles } from 'lucide-react';

export default function HeroScrollTransition({ onOpenJoin }) {
  const steps = [
    {
      num: '01',
      title: 'IDEAS',
      subtitle: 'Raw Curiosities',
      desc: 'The unpolished questions sparked in hostel dorms, lecture halls, and lab benches.',
      color: '#00F0FF',
    },
    {
      num: '02',
      title: 'ENERGY',
      subtitle: 'Student Momentum',
      desc: 'Uniting software builders, hardware engineers, and designers in intense sprints.',
      color: '#38BDF8',
    },
    {
      num: '03',
      title: 'ACTION',
      subtitle: 'Applied Engineering',
      desc: 'Shipping working code, soldering prototypes, and validating unit economics with real users.',
      color: '#818CF8',
    },
    {
      num: '04',
      title: 'IMPACT',
      subtitle: 'Venture Reality',
      desc: 'From campus ideathon winner to registered entity, patent filing, or funded company.',
      color: '#6366F1',
    },
  ];

  return (
    <section
      id="details-preview"
      className="relative py-28 px-6 sm:px-12 bg-[#080B16] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#00F0FF]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
                // THE ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              THE IDEA ENGINE.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
            How curiosities transform into measurable technological and entrepreneurial momentum at WIT.
          </p>
        </div>

        {/* 4 Pillars of the Metaphor: IDEAS → ENERGY → ACTION → IMPACT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#0D1224]/50 border border-white/[0.07] hover:border-[#00F0FF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-[#00F0FF] transition-colors">
                    {step.num}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  {step.subtitle}
                </div>

                <h3 className="mt-1 font-display font-bold text-2xl text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>STAGE {step.num}</span>
                <span className="text-slate-400 group-hover:text-white">Active →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quick Action Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#10172A] via-[#0D1224] to-[#080B16] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-xl sm:text-2xl text-white">
              Ready to ignite your idea?
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
              Join the student innovation movement at Walchand Institute of Technology.
            </div>
          </div>

          <button
            onClick={onOpenJoin}
            className="px-8 py-3.5 rounded-full bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all shrink-0 active:scale-95"
          >
            <span>JOIN E-CELL ECOSYSTEM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
