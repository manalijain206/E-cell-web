import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [text, setText] = useState('E');
  const [progress, setProgress] = useState(10);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const stages = [
      { t: 'E', p: 25, delay: 200 },
      { t: 'EC', p: 50, delay: 450 },
      { t: 'E-C', p: 75, delay: 750 },
      { t: 'E-CELL', p: 100, delay: 1050 },
    ];

    const timeouts = stages.map(({ t, p, delay }) =>
      setTimeout(() => {
        setText(t);
        setProgress(p);
      }, delay)
    );

    const finishTimeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onComplete();
      }, 350); // smooth exit fade
    }, 1350);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#060608] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#FF5722]/10 blur-[120px] pointer-events-none" />

      {/* Main Kinetic Typography */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-1 font-display font-black text-6xl md:text-8xl tracking-tight text-white select-none">
          <span>{text}</span>
          <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF5722] animate-ping" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
            INCUBATING ECOSYSTEM
          </span>
          <span className="text-zinc-600 font-mono text-[11px]">/</span>
          <span className="text-[11px] font-mono font-bold text-[#FF5722]">
            {progress}%
          </span>
        </div>

        {/* Minimal progress line */}
        <div className="mt-6 w-48 h-[2px] bg-zinc-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF5722] to-[#FFA000] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
