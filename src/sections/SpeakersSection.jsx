import React from 'react';
import { speakersData } from '../data/speakers';
import { Mic2, Linkedin, ExternalLink } from 'lucide-react';

export default function SpeakersSection() {
  return (
    <section id="speakers" className="relative py-28 bg-[#08080c] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 08 · MENTORS & GUEST BUILDERS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              PEOPLE WHO HAVE BEEN HERE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-400 max-w-sm">
            Founders, venture investors, patent attorneys, and alumni leaders who challenge and advise our community.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakersData.map((sp) => (
            <div
              key={sp.id}
              className="p-6 rounded-2xl bg-[#0c0c11] border border-white/[0.08] hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#161622] mb-5 border border-white/5">
                  <img
                    src={sp.photo}
                    alt={sp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#FF8A00] font-bold border border-white/10">
                      {sp.badge}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#FF5722] font-semibold">
                  {sp.role}
                </div>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  {sp.name}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  {sp.company}
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-zinc-300 italic">
                  "{sp.topic}"
                </div>
              </div>

              {/* Bottom footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="truncate">{sp.event}</span>
                <a
                  href={sp.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-[#FF5722] hover:text-black transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-[11px] font-mono text-zinc-400">
          * Guest speaker slots configured in <code className="text-[#FF8A00] bg-black/40 px-1 py-0.5 rounded">src/data/speakers.js</code>. Insert actual photos in <code className="text-[#FF5722]">/public/assets/speakers/</code>.
        </div>
      </div>
    </section>
  );
}
