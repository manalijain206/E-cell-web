import React, { useState } from 'react';
import { BookOpen, Hammer, Trophy, Users2, FlaskConical, Rocket, ArrowUpRight } from 'lucide-react';

export default function WhatHappensHere() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      num: '01',
      title: 'LEARN',
      headline: 'Unfiltered Founder Talks & High-Yield Technical Masterclasses',
      subtitle: 'SKILLS & INSIGHT',
      icon: BookOpen,
      accent: '#FF5722',
      details:
        'Forget theoretical college lectures. We break down seed fundraising, product discovery, customer acquisition economics, and modern tech stacks through direct sessions with active operators.',
      bullets: [
        'Interactive founder firesides & candid teardowns',
        'Venture valuation & cap table modeling',
        'Rapid UI/UX heuristics & code architecture',
      ],
      previewTag: 'KNOWLEDGE TRANSFER',
    },
    {
      num: '02',
      title: 'BUILD',
      headline: '36-Hour Hackathons & Applied Prototype Labs',
      subtitle: 'HANDS-ON PRODUCTION',
      icon: Hammer,
      accent: '#FF6F00',
      details:
        'Ideas are worthless without running code or working hardware. We create intense sprint environments with soldering benches, cloud compute credits, and peer reviews to ship MVPs.',
      bullets: [
        'Hardware IoT benches & ESP32 / sensor kits',
        'Full-stack API sprints & micro-SaaS deployments',
        'Design sprints for frictionless onboarding',
      ],
      previewTag: 'RAPID PROTOTYPING',
    },
    {
      num: '03',
      title: 'COMPETE',
      headline: 'High-Stakes Pitch Arenas & Business Model Battles',
      subtitle: 'STAGE CRUCIBLE',
      icon: Trophy,
      accent: '#FF8A00',
      details:
        'Step outside the safety of the classroom. Pitch your venture to angel investors, regional seed partners, and alumni judges with equity-free cash prize pools on the line.',
      bullets: [
        'Rigorous 5-minute pitch deck grillings',
        'Direct angel term-sheet feedback',
        'Campus ideathons & state-level innovation cups',
      ],
      previewTag: 'PITCH WARS',
    },
    {
      num: '04',
      title: 'CONNECT',
      headline: 'Curated 1-on-1 Mentorship & Active Alumni Circles',
      subtitle: 'ECOSYSTEM TIES',
      icon: Users2,
      accent: '#FFA000',
      details:
        'Entrepreneurship is lonely without a tribe. We plug you into a network of former WIT grads who have raised capital, built high-growth engineering teams, or founded agencies.',
      bullets: [
        'Office hours with CTOs and seed founders',
        'Investor micro-roundtables',
        'Cross-disciplinary co-founder matching',
      ],
      previewTag: 'ALUMNI & ANGELS',
    },
    {
      num: '05',
      title: 'EXPERIMENT',
      headline: 'A Safe Haven to Test Bold Assumptions & Fail Fast',
      subtitle: 'SANDBOX FREEDOM',
      icon: FlaskConical,
      accent: '#FF7043',
      details:
        'Traditional academia penalizes failure; we treat it as an essential learning loop. Test pricing pages, fake-door MVPs, and crazy concepts before spending months building the wrong thing.',
      bullets: [
        'Low-cost smoke tests and landing page experiments',
        'Hypothesis validation matrices',
        'Zero stigma culture around early pivots',
      ],
      previewTag: 'DE-RISKING SPRINT',
    },
    {
      num: '06',
      title: 'LAUNCH',
      headline: 'Turning Student Projects into Real Registered Companies',
      subtitle: 'VENTURE BIRTH',
      icon: Rocket,
      accent: '#FF3D00',
      details:
        'When your prototype finds real user traction, we don’t let it collect dust. We assist with company incorporation, provisional patent filings, and seed accelerator applications.',
      bullets: [
        'Institutional incubation support at WIT',
        'Patent filing assistance for novel engineering IP',
        'Direct pipelines to national accelerator programs',
      ],
      previewTag: 'SCALE & INCUBATE',
    },
  ];

  const current = experiences[activeIndex];
  const IconComponent = current.icon;

  return (
    <section className="relative py-28 bg-[#060608] border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: current.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 03 · CORE EXPERIENCES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              WHAT HAPPENS HERE?
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            HOVER OR SELECT A TRACK TO EXPLORE ↓
          </p>
        </div>

        {/* Interactive Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Experience List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {experiences.map((exp, idx) => {
              const isActive = activeIndex === idx;
              const ExpIcon = exp.icon;
              return (
                <button
                  key={exp.num}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#101017] border-[#FF5722]/50 shadow-[0_0_25px_rgba(255,87,34,0.15)] translate-x-1.5'
                      : 'bg-[#0a0a0e]/50 border-white/[0.05] hover:border-white/20 hover:bg-[#0d0d12]'
                  }`}
                  data-cursor-text="EXPLORE"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold transition-colors ${
                        isActive ? 'text-[#FF5722]' : 'text-zinc-400 group-hover:text-zinc-400'
                      }`}
                    >
                      {exp.num}
                    </span>
                    <div>
                      <div
                        className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      >
                        {exp.title}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 tracking-wider">
                        {exp.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'scale-125' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      style={{ backgroundColor: exp.accent }}
                    />
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? 'text-[#FF5722] translate-x-0.5 -translate-y-0.5'
                          : 'text-zinc-400 group-hover:text-zinc-400'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Editorial Deep-Dive Spotlight Card */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0d0d14] border border-white/10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Giant Track Number */}
            <div className="absolute right-4 -top-8 text-[180px] sm:text-[220px] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
              {current.num}
            </div>

            <div className="relative z-10">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: current.accent }}
                  />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-300 font-bold">
                    {current.previewTag}
                  </span>
                </div>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg"
                  style={{
                    backgroundColor: `${current.accent}15`,
                    borderColor: `${current.accent}40`,
                  }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: current.accent }}
                  />
                </div>
              </div>

              {/* Title & Headline */}
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                // TRACK {current.num}
              </div>
              <h3 className="mt-2 font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                {current.headline}
              </h3>

              {/* Detailed Description */}
              <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {current.details}
              </p>

              {/* Actionable Outcomes Bullets */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Key Campus Deliverables:
                </div>
                {current.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-200">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: current.accent }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Open to all WIT Engineering Branches</span>
              <span className="text-[#FF5722]">Free Campus Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
