import React from 'react';

export default function FloatingNodes({ isEngaged }) {
  const nodes = [
    { text: '01 · IDEATE', x: '18%', y: '24%', delay: '0s', glow: '#00F0FF' },
    { text: '02 · BUILD', x: '82%', y: '28%', delay: '1.2s', glow: '#38BDF8' },
    { text: '03 · PITCH', x: '14%', y: '68%', delay: '2.4s', glow: '#818CF8' },
    { text: '04 · CREATE', x: '84%', y: '64%', delay: '0.8s', glow: '#00F0FF' },
    { text: '05 · FAIL', x: '26%', y: '84%', delay: '3.1s', glow: '#6366F1' },
    { text: '06 · LEARN', x: '72%', y: '82%', delay: '1.8s', glow: '#38BDF8' },
    { text: '07 · REPEAT', x: '50%', y: '16%', delay: '2.2s', glow: '#00F0FF' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {nodes.map((node, i) => (
        <div
          key={node.text}
          className="absolute -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080B16]/60 border border-white/[0.08] backdrop-blur-sm transition-all duration-700 select-none animate-float-slow"
          style={{
            left: node.x,
            top: node.y,
            animationDelay: node.delay,
            opacity: isEngaged ? 0.35 : 0.85,
            borderColor: isEngaged ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: node.glow, boxShadow: `0 0 8px ${node.glow}` }}
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
            {node.text}
          </span>
        </div>
      ))}
    </div>
  );
}
