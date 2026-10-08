import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#060608] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 11 · STUDENT VOICES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              VOICES OF THE ECOSYSTEM
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-400 max-w-sm">
            Real student experiences from pitch stages, incubation rooms, and alumni careers.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-3xl bg-[#0c0c11] border border-white/[0.08] hover:border-[#FF5722]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FF5722]/30 mb-4 group-hover:text-[#FF5722] transition-colors" />

                <p className="text-base text-zinc-200 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#161622] border border-white/10 shrink-0">
                  <img
                    src={test.photo}
                    alt={test.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {test.name}
                  </div>
                  <div className="text-xs font-mono text-[#FF8A00]">
                    {test.role}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {test.department} · {test.batch}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
