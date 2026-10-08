import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor-text]');

      if (clickable) {
        setIsHovered(true);
        const customText = clickable.getAttribute('data-cursor-text') || '';
        setHoverText(customText);
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Central Stellar Cyan Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#38BDF8] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Trailing follower circle */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#38BDF8]/40 flex items-center justify-center transition-all duration-150 ease-out ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-[#38BDF8]/15 backdrop-blur-[1px] border-[#38BDF8]'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {hoverText && (
          <span className="text-[8px] font-mono font-medium tracking-widest text-[#38BDF8] uppercase px-1">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
}
