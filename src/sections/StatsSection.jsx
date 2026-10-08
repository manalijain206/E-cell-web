import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/stats';
import { TrendingUp, Users, Target, Rocket, Award, Network } from 'lucide-react';

const icons = [Users, Target, Rocket, TrendingUp, Award, Network];

function AnimatedCounter({ endValue, duration = 1800, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration, isVisible]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#08080c] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Background tech glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-[#FF5722]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 02 · BY THE NUMBERS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Impact at a Glance
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-400 max-w-sm">
            Continuous campus velocity. Measurable student outcomes across software, hardware, and venture tracks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.id}
                className={`relative p-8 rounded-2xl bg-[#0c0c11] border transition-all duration-300 group hover:-translate-y-1 ${
                  stat.highlight
                    ? 'border-[#FF5722]/40 shadow-[0_10px_30px_-15px_rgba(255,87,34,0.3)]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Tech corner accent */}
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#FF5722] transition-colors" />
                </div>

                {/* Animated Number */}
                <div className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight flex items-baseline">
                  <AnimatedCounter endValue={stat.value} isVisible={isInView} />
                  <span className="text-[#FF5722] ml-1">{stat.suffix}</span>
                </div>

                {/* Label & Description */}
                <h3 className="mt-4 font-display font-bold text-lg text-zinc-100 tracking-tight">
                  {stat.label}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                  {stat.description}
                </p>

                {/* Micro accent bar */}
                <div className="mt-6 w-full h-[2px] bg-white/[0.04] overflow-hidden rounded-full">
                  <div
                    className={`h-full ${
                      stat.highlight
                        ? 'bg-gradient-to-r from-[#FF5722] to-[#FFA000]'
                        : 'bg-zinc-700 group-hover:bg-[#FF5722]'
                    } transition-colors duration-300`}
                    style={{ width: `${Math.min(100, 30 + idx * 15)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Configuration Notice for Real E-Cell Updates */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono text-zinc-400">
            * Data synchronized from <code className="text-[#FF8A00] bg-black/40 px-1.5 py-0.5 rounded">src/data/stats.js</code>. Easily update counters as new cohorts launch.
          </p>
        </div>
      </div>
    </section>
  );
}
