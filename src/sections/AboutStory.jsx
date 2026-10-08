import React, { useState } from 'react';
import { Lightbulb, Search, Cpu, Terminal, DollarSign, Rocket, ArrowRight } from 'lucide-react';

export default function AboutStory() {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    {
      step: '01',
      title: 'IDEA',
      subtitle: 'Raw Curiosity',
      icon: Lightbulb,
      tagline: 'EVERY VENTURE BEGINS AS A WEIRD QUESTION.',
      desc: 'You notice something broken, inefficient, or painful in the real world. We don’t ask you for a 50-page business plan on day one—we help you articulate the hypothesis clearly.',
    },
    {
      step: '02',
      title: 'PROBLEM',
      subtitle: 'Market Truth',
      icon: Search,
      tagline: 'FALL IN LOVE WITH THE PROBLEM, NOT YOUR FIRST GUESS.',
      desc: 'Talking to actual users, farmers, shopkeepers, or engineers. Discovering if anyone genuinely cares enough to pay or change their habit for your fix.',
    },
    {
      step: '03',
      title: 'SOLUTION',
      subtitle: 'Architecture',
      icon: Cpu,
      tagline: 'DE-RISKING THE TECHNICAL & COMMERCIAL FEASIBILITY.',
      desc: 'Pairing software with hardware, engineering unit economics, and picking the right stack. Stripping away bloat so you can test the critical value loop fast.',
    },
    {
      step: '04',
      title: 'PROTOTYPE',
      subtitle: 'Working MVP',
      icon: Terminal,
      tagline: 'TALK IS CHEAP. SHOW THE RUNNING CODE OR HARDWARE.',
      desc: 'Soldering circuits in our labs, spinning up cloud endpoints, 3D printing housings, or testing alpha APKs with 20 peers in your hostel room.',
    },
    {
      step: '05',
      title: 'PITCH',
      subtitle: 'Pressure Test',
      icon: DollarSign,
      tagline: 'DEFENDING YOUR METRICS BEFORE ACTIVE CAPITAL.',
      desc: 'Standing on stage in front of angel investors and founders. Getting roasted on churn rates, margins, and distribution channels until your story is bulletproof.',
    },
    {
      step: '06',
      title: 'IMPACT',
      subtitle: 'Venture Reality',
      icon: Rocket,
      tagline: 'FROM CAMPUS EXPERIMENT TO INCUBATED STARTUP.',
      desc: 'Incorporating, winning non-dilutive innovation grants, patent filings, and bringing Solapur’s talent to national venture ecosystems.',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#060608] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
          <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
            // 01 · THE MANIFESTO
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
            WE DON'T JUST TALK ABOUT ENTREPRENEURSHIP.{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#FF8A00] to-white">
              WE EXPERIENCE IT.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-4xl">
            Most college committees organize seminars and print certificates.
            We operate like a campus incubator. We believe the best way for an
            engineer to understand business, risk, and product architecture is
            to <span className="text-white font-semibold">build something real from scratch</span>.
          </p>
        </div>

        {/* Ecosystem Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-[#FF5722]/40 transition-all duration-300 group">
            <span className="text-xs font-mono text-[#FF5722] tracking-widest uppercase">// 01 CULTURE</span>
            <h3 className="mt-3 font-display font-bold text-xl text-white group-hover:text-[#FF5722] transition-colors">
              Radical Curiosity & Action
            </h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              We eliminate the intimidation around starting. No pedigree required.
              If you’re willing to stay late in the lab, test assumptions, and take ownership, you belong here.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-[#FF5722]/40 transition-all duration-300 group">
            <span className="text-xs font-mono text-[#FF8A00] tracking-widest uppercase">// 02 RIGOR</span>
            <h3 className="mt-3 font-display font-bold text-xl text-white group-hover:text-[#FF8A00] transition-colors">
              Direct Founder Feedback
            </h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              No participation trophies. We bring battle-hardened entrepreneurs and WIT alumni to grill
              prototypes on distribution loops, unit economics, and defensibility.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-[#FF5722]/40 transition-all duration-300 group">
            <span className="text-xs font-mono text-[#FFA000] tracking-widest uppercase">// 03 CAPITAL</span>
            <h3 className="mt-3 font-display font-bold text-xl text-white group-hover:text-[#FFA000] transition-colors">
              Launchpad to Real Capital
            </h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              From college ideathons to external angel rounds, seed grants, and patent filings. We connect
              validated ideas to actual resources that help them scale.
            </p>
          </div>
        </div>

        {/* Interactive Lifecycle Pipeline */}
        <div className="mt-24 pt-16 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // THE ARCHITECTURE OF A VENTURE
              </span>
              <h3 className="mt-2 font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                From Raw Spark to Campus Venture
              </h3>
            </div>
            <p className="mt-2 md:mt-0 text-xs font-mono text-zinc-400">
              CLICK ANY PHASE TO EXPLORE METHODOLOGY ↓
            </p>
          </div>

          {/* Pipeline Interactive Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-[#09090D] p-2 rounded-2xl border border-white/[0.08]">
            {pipeline.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#FF5722] text-black shadow-[0_0_20px_rgba(255,87,34,0.4)]'
                      : 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  data-cursor-text="STEP"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-black/80' : 'text-zinc-400'}`}>
                      PHASE {item.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-zinc-400'}`} />
                  </div>
                  <div className="mt-4">
                    <div className="font-display font-bold text-base tracking-tight leading-none">
                      {item.title}
                    </div>
                    <div className={`text-[10px] font-mono mt-1 ${isActive ? 'text-black/80' : 'text-zinc-400'}`}>
                      {item.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pipeline Card Detail */}
          <div className="mt-6 p-8 sm:p-10 rounded-2xl bg-[#0e0e14] border border-white/10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-[160px] font-display font-black text-white/[0.02] select-none leading-none pointer-events-none pr-6">
              {pipeline[activeStep].step}
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF8A00] font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
                <span>STAGE {pipeline[activeStep].step}</span>
                <span>·</span>
                <span>{pipeline[activeStep].title}</span>
              </div>

              <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                "{pipeline[activeStep].tagline}"
              </h4>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                {pipeline[activeStep].desc}
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs font-mono text-zinc-400">
                <span>E-Cell Focus: Applied execution</span>
                <span>·</span>
                <span className="text-[#FF5722]">Walchand Institute of Technology Campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
