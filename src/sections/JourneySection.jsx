import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Compass, Lightbulb, CheckSquare, Hammer, Mic, Rocket, Globe } from 'lucide-react';

export default function JourneySection({ onOpenJoinModal }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'IDEA',
      tagline: 'The Inception',
      icon: Lightbulb,
      description: 'You spot a persistent friction in agriculture, education, supply chains, or daily tech. You formulate a bold question rather than accepting how things are.',
      action: 'Submit your raw concept to E-Cell Idea Desk or pitch during informal coffee sessions.',
      accent: '#FF5722',
    },
    {
      step: '02',
      title: 'VALIDATE',
      tagline: 'Ground Truth',
      icon: CheckSquare,
      description: 'Step outside the campus gates. Conduct 20 user interviews. Validate whether this is an actual burning hair problem or just a hobby theory.',
      action: 'Leverage our customer discovery heuristic rubrics & mentor guidance.',
      accent: '#FF6F00',
    },
    {
      step: '03',
      title: 'BUILD',
      tagline: 'Engineering MVP',
      icon: Hammer,
      description: 'Strip every non-essential feature. Write the minimal clean codebase, solder the bare micro-controller, and deploy a testable alpha build.',
      action: 'Access campus labs, compute allowances, and peer developer co-founders.',
      accent: '#FF8A00',
    },
    {
      step: '04',
      title: 'PITCH',
      tagline: 'The Crucible',
      icon: Mic,
      description: 'Present the validated prototype before seed investors and founders. Receive unvarnished critique on business model, retention, and scaling vectors.',
      action: 'Compete in WIT Pitch Arena with equity-free capital grants on the line.',
      accent: '#FFA000',
    },
    {
      step: '05',
      title: 'LAUNCH',
      tagline: 'Market Exposure',
      icon: Rocket,
      description: 'Ship to your first 100 paying customers. Iterate on telemetry, fix breaking bugs in real time, and establish early distribution loops.',
      action: 'Product Hunt launches, institutional campus pilots, and press support.',
      accent: '#FF7043',
    },
    {
      step: '06',
      title: 'IMPACT',
      tagline: 'Venture Evolution',
      icon: Globe,
      description: 'Incorporate your startup, register engineering intellectual property, and transition into regional incubator cohorts or angel syndicates.',
      action: 'Incubation acceleration, patent clinic support, and venture network access.',
      accent: '#FF3D00',
    },
  ];

  const active = steps[currentStep];
  const StepIcon = active.icon;

  return (
    <section id="journey" className="relative py-28 bg-[#08080c] border-b border-white/[0.06] overflow-hidden">
      {/* Background glow tailored to active step */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: active.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#FF5722] uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>// 06 · THE FOUNDER'S ODYSSEY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            THE ENTREPRENEURIAL JOURNEY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            A continuous progression engineered to turn student potential into autonomous venture momentum.
          </p>
        </div>

        {/* Step Progress Bar Navigation */}
        <div className="relative mb-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-6 right-6 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-6 h-[2px] bg-gradient-to-r from-[#FF5722] to-[#FFA000] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 95}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
            {steps.map((s, idx) => {
              const isPast = idx < currentStep;
              const isCurrent = idx === currentStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(idx)}
                  className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-200 border ${
                    isCurrent
                      ? 'bg-[#12121a] border-[#FF5722] shadow-[0_0_20px_rgba(255,87,34,0.3)] scale-105'
                      : isPast
                      ? 'bg-[#0a0a0e] border-white/10 text-zinc-300'
                      : 'bg-[#060608] border-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                  data-cursor-text="STEP"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                      isCurrent
                        ? 'bg-[#FF5722] text-black shadow-lg'
                        : isPast
                        ? 'bg-zinc-800 text-white'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4 text-white" /> : s.step}
                  </div>

                  <span className={`mt-3 font-display font-bold text-sm tracking-tight ${
                    isCurrent ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {s.title}
                  </span>

                  <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                    {s.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Active Step Interactive Stage Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c12] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle watermark step number */}
          <div className="absolute right-6 -bottom-10 text-[180px] sm:text-[240px] font-display font-black text-white/[0.02] select-none pointer-events-none">
            {active.step}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${active.accent}15`,
                    borderColor: `${active.accent}40`,
                    color: active.accent,
                  }}
                >
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    STAGE {active.step} OF 06
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                    {active.title} — {active.tagline}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {active.description}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <span className="text-[#FF5722] font-mono font-bold text-xs uppercase pt-0.5 shrink-0">
                  CAMPUS ACTION:
                </span>
                <span className="text-xs sm:text-sm text-zinc-300">
                  {active.action}
                </span>
              </div>
            </div>

            {/* Right side navigation buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <div className="flex items-center justify-between gap-3">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-xs font-mono uppercase text-zinc-300 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-center"
                >
                  ← PREV STAGE
                </button>
                <button
                  disabled={currentStep === steps.length - 1}
                  onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#FF5722] hover:text-black text-white text-xs font-mono font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed transition-all text-center"
                >
                  NEXT STAGE →
                </button>
              </div>

              <div className="text-center text-[11px] font-mono text-zinc-400 mt-2">
                Use arrows to preview full venture evolution
              </div>
            </div>
          </div>
        </div>

        {/* Closing Journey Banner: YOUR IDEA COULD BE NEXT */}
        <div className="mt-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF8A00] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BECOME PART OF THE ARCHIVE</span>
          </div>
          <h4 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            YOUR IDEA COULD BE NEXT.
          </h4>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Don’t let hesitation keep you on the sidelines. Walchand Institute of Technology's E-Cell provides the sandbox.
          </p>

          <button
            onClick={onOpenJoinModal}
            className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF8A00] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_40px_rgba(255,87,34,0.6)] active:scale-95 transition-all"
            data-cursor-text="JOIN"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
