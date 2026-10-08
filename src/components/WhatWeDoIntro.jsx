import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Quote, Target, Eye, CheckCircle2 } from 'lucide-react';

/**
 * WhatWeDoIntro — "ABOUT US, OUR MOTTO & WHAT WE DO"
 * 
 * Updated based on User Feedback:
 * 1. HIGH-DENSITY DEEP SPACE (MATCHING IMAGE 2):
 *    - Dense, rich starry cosmos covering the ENTIRE space with 1,800+ multi-spectral stars,
 *      micro-stardust, cross diffraction flares, soft cosmic nebulae, and shooting stars.
 *    - Zero empty black voids.
 * 2. COVERING THE CONTENT SPACE (MATCHING IMAGE 2):
 *    - Bold, commanding "ABOUT US" and "OUR MOTTO" typography in a bright radiant yellow shade (not dark).
 *    - Wide editorial text coverage (max-w-4xl to max-w-5xl) so content fills and balances the space.
 * 3. OUR MISSION BUTTON:
 *    - Interactive button placed under Our Motto opening the Our Mission modal.
 * 4. SMOOTH SCROLL ANIMATIONS:
 *    - About Us slides in from LEFT on scroll.
 *    - Our Motto slides in from RIGHT on scroll.
 */
export default function WhatWeDoIntro({ onOpenJoin }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const mottoRef = useRef(null);
  const visionSectionRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [mottoVisible, setMottoVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const scrollToVisionMission = () => {
    const el = document.getElementById('vision-mission');
    if (el) {
      const yOffset = -90; // accounts for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setVisionVisible(true);
    }
  };

  // -------------------------------------------------------------
  // 1. SCROLL REVEAL OBSERVER (ABOUT US, MOTTO, VISION & MISSION)
  // -------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setAboutVisible(true);
          }
          if (entry.target === mottoRef.current && entry.isIntersecting) {
            setMottoVisible(true);
          }
          if (entry.target === visionSectionRef.current && entry.isIntersecting) {
            setVisionVisible(true);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -50px 0px' }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (mottoRef.current) observer.observe(mottoRef.current);
    if (visionSectionRef.current) observer.observe(visionSectionRef.current);

    return () => observer.disconnect();
  }, []);

  // -------------------------------------------------------------
  // 2. DENSE, REALISTIC DEEP SPACE COSMOS ENGINE (MATCHING IMAGE 2)
  // -------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 2400);

    // Multi-spectral star color palettes (pure white, starlight ice blue, electric cyan, champagne gold)
    const STAR_PALETTES = [
      'rgba(255, 255, 255, ',     // Pure Starlight White (Dominant)
      'rgba(255, 255, 255, ',     // Pure Starlight White (Repeat for density)
      'rgba(224, 242, 254, ',     // Starlight Ice Sky Blue
      'rgba(186, 230, 253, ',     // Electric Cyan Dust
      'rgba(248, 230, 195, ',     // Soft Champagne Starlight
      'rgba(147, 197, 253, ',     // Astral Blue Shimmer
    ];

    // Calculate dynamic star count to densely cover the entire space (matching Image 2)
    const STAR_COUNT = Math.max(1600, Math.floor((width * height) / 2200));

    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const layer = Math.random() < 0.72 ? 1 : Math.random() < 0.92 ? 2 : 3;

      stars.push({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        layer,
        size:
          layer === 1
            ? Math.random() * 0.55 + 0.35 // Micro star dust
            : layer === 2
            ? Math.random() * 0.75 + 0.8  // Mid field star
            : Math.random() * 1.3 + 1.6,  // Foreground luminous star
        colorPrefix: STAR_PALETTES[Math.floor(Math.random() * STAR_PALETTES.length)],
        twinkleSpeed: 0.6 + Math.random() * 2.2,
        twinklePhase: Math.random() * Math.PI * 2,
        baseAlpha: layer === 1 ? 0.3 + Math.random() * 0.45 : layer === 2 ? 0.6 + Math.random() * 0.35 : 0.85 + Math.random() * 0.15,
        parallaxFactor: layer === 1 ? 0.015 : layer === 2 ? 0.04 : 0.08,
        hasSpikes: layer === 3 && Math.random() < 0.65,
      });
    }

    // Occasional shooting stars (meteors)
    const shootingStars = [];
    let lastShootingStarTime = 0;

    const spawnShootingStar = () => {
      const startX = Math.random() * width * 0.85 + width * 0.05;
      const startY = Math.random() * height * 0.5;
      const length = 110 + Math.random() * 120;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35;
      const speed = 14 + Math.random() * 8;

      shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        life: 1.0,
        decay: 0.024 + Math.random() * 0.018,
      });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - width / 2) / (width / 2);
      const y = (e.clientY - rect.top - height / 2) / (height / 2);
      mousePosRef.current.targetX = x * 24;
      mousePosRef.current.targetY = y * 24;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.016;

      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.05;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Periodically trigger shooting star
      if (time - lastShootingStarTime > 6 + Math.random() * 4) {
        spawnShootingStar();
        lastShootingStarTime = time;
      }

      // Draw all stars across canvas
      stars.forEach((s) => {
        const twinkle = s.baseAlpha * (0.55 + 0.45 * Math.sin(time * s.twinkleSpeed + s.twinklePhase));

        const px = (s.baseX + mousePosRef.current.x * s.parallaxFactor + width) % width;
        const py = (s.baseY + mousePosRef.current.y * s.parallaxFactor + height) % height;

        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `${s.colorPrefix}${twinkle})`;
        ctx.fill();

        // Foreground luminous stars get cross diffraction spikes & radial glow
        if (s.hasSpikes) {
          const spikeLen = s.size * 3.5 * twinkle;
          ctx.strokeStyle = `${s.colorPrefix}${twinkle * 0.5})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          // Horizontal spike
          ctx.moveTo(px - spikeLen, py);
          ctx.lineTo(px + spikeLen, py);
          // Vertical spike
          ctx.moveTo(px, py - spikeLen);
          ctx.lineTo(px, py + spikeLen);
          ctx.stroke();

          // Soft radiant aura
          ctx.beginPath();
          ctx.arc(px, py, s.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${s.colorPrefix}${twinkle * 0.18})`;
          ctx.fill();
        }
      });

      // Render shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const tailX = s.x - (s.dx / Math.hypot(s.dx, s.dy)) * s.length;
        const tailY = s.y - (s.dy / Math.hypot(s.dx, s.dy)) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.life * 0.95})`);
        grad.addColorStop(0.35, `rgba(56, 189, 248, ${s.life * 0.75})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        s.x += s.dx;
        s.y += s.dy;
        s.life -= s.decay;

        if (s.life <= 0) {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Use ResizeObserver to ensure canvas always precisely matches container size
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Shared headline gradient matching Image 3 (white top transitioning into warm champagne gold)
  const headlineGradientStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 62%, #F6EBCE 82%, #E8CA8C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 20px rgba(246, 227, 180, 0.14))',
  };

  // Exact E-CELL Hero Title Gradient & Glow from Image 2
  const heroEcellGradientStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))',
  };

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative pt-12 sm:pt-16 pb-28 sm:pb-36 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none"
    >
      {/* ================================================== */}
      {/* DENSE REALISTIC DEEP SPACE BACKGROUND CANVAS       */}
      {/* ================================================== */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Realistic Soft Cosmic Deep Navy & Cyan Nebula Clouds */}
      <div className="absolute top-[12%] left-[4%] w-[700px] h-[600px] bg-[#1E3A8A]/[0.15] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[42%] right-[4%] w-[650px] h-[550px] bg-[#0284C7]/[0.06] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[800px] h-[550px] bg-[#0B132B]/[0.65] rounded-full blur-[180px] pointer-events-none" />

      {/* Compact Original Spacing: About Us and Our Motto close together */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20 sm:space-y-28">
        
        {/* ================================================== */}
        {/* 1. ABOUT US (ANIMATES FROM LEFT FIRST)             */}
        {/* ================================================== */}
        <div
          ref={aboutRef}
          className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            aboutVisible
              ? 'opacity-100 translate-x-0 blur-0'
              : 'opacity-0 -translate-x-24 sm:-translate-x-32 blur-[2px] pointer-events-none'
          }`}
        >
          <div className="w-full max-w-5xl text-left">
            {/* Title with exact E-CELL Hero Gradient from Image 2 */}
            <h2
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] tracking-wider uppercase select-none mb-3"
              style={heroEcellGradientStyle}
            >
              ABOUT US
            </h2>

            {/* Increased headline size with Image 3 gradient */}
            <h3
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight leading-snug mb-5"
              style={headlineGradientStyle}
            >
              The startup heartbeat of WIT Solapur.
            </h3>

            {/* Horizontal Paragraph spreading across remaining space */}
            <p className="text-sm sm:text-base md:text-lg text-[#CBD5E1] font-light leading-relaxed tracking-wide max-w-4xl">
              E-Cell WIT is the premier student-driven entrepreneurship and innovation platform at Walchand Institute of Technology, Solapur. We provide the complete launchpad for young inquisitive minds to identify problems worth solving, transform concepts into durable ventures, and connect directly with alumni founders, angel networks, and national startup ecosystems.
            </p>
          </div>
        </div>

        {/* ================================================== */}
        {/* 2. OUR MOTTO (ANIMATES FROM RIGHT AFTER ABOUT US)  */}
        {/* ================================================== */}
        <div
          ref={mottoRef}
          className={`transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            mottoVisible
              ? 'opacity-100 translate-x-0 blur-0'
              : 'opacity-0 translate-x-24 sm:translate-x-32 blur-[2px] pointer-events-none'
          }`}
        >
          <div className="w-full max-w-5xl ml-auto text-left sm:text-right">
            {/* Title with exact E-CELL Hero Gradient from Image 2 */}
            <h2
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] tracking-wider uppercase select-none mb-3"
              style={heroEcellGradientStyle}
            >
              OUR MOTTO
            </h2>

            {/* Increased headline size with Image 3 gradient */}
            <h3
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight leading-snug mb-5 max-w-4xl sm:ml-auto"
              style={headlineGradientStyle}
            >
              “Dream with vision. Build with rigor. Launch with impact.”
            </h3>

            {/* Horizontal Paragraph spreading across remaining space */}
            <p className="text-sm sm:text-base md:text-lg text-[#CBD5E1] font-light leading-relaxed tracking-wide max-w-4xl sm:ml-auto">
              At Walchand Institute of Technology, we believe true entrepreneurship isn’t just about pitching ideas—it is about looking at real-world friction with the engineering courage to build solutions that endure. Every engineer who walks through our doors is challenged to think beyond the classroom, prototype relentlessly, and engineer value that lasts.
            </p>

            {/* "OUR MISSION" Action Button that smoothly scrolls/slides to Vision & Mission */}
            <div className="mt-8 flex sm:justify-end">
              <button
                onClick={scrollToVisionMission}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#F3E1B6]/50 hover:border-[#F3E1B6] bg-[#F3E1B6]/10 hover:bg-[#F3E1B6] text-[#F3E1B6] hover:text-[#020617] font-mono text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_24px_rgba(243,225,182,0.22)] hover:shadow-[0_0_36px_rgba(243,225,182,0.55)] active:scale-95 cursor-pointer"
              >
                <span>OUR MISSION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* 2.5 DEDICATED SECTION: VISION & MISSION            */}
        {/* Slide/Scroll target when clicking "OUR MISSION"    */}
        {/* ================================================== */}
        <div id="vision-mission" ref={visionSectionRef} className="pt-20 sm:pt-28 scroll-mt-28">
          {/* Header matching Image 2 size & Title Case, with Image 3 warm champagne gold gradient */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
              <span className="text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold">
                WHAT DRIVES US
              </span>
              <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
            </div>

            {/* Exactly matching Image 2 size and title-case, with Image 3 warm champagne gold gradient */}
            <h2
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 select-none"
              style={heroEcellGradientStyle}
            >
              Vision & Mission
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed max-w-2xl mx-auto">
              Our compass for building a generation of problem-solvers, risk-takers, and value creators across WIT Solapur.
            </p>
          </div>

          {/* Two Sleek Cards In Deep Navy + Black Space Theme with Unique Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Card 1: Our Vision (Slides in from Left + Interactive Hover) */}
            <div
              className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#081226]/60 hover:bg-[#0C1B38]/85 border border-white/[0.08] hover:border-[#38BDF8]/50 transition-all duration-700 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.22)] hover:-translate-y-2 overflow-hidden transform ${
                visionVisible
                  ? 'opacity-100 translate-y-0 translate-x-0'
                  : 'opacity-0 translate-y-12 -translate-x-8 pointer-events-none'
              }`}
            >
              {/* Top Starlight Accent Line that glows on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Ambient Radiant Nebula Glow in Corner */}
              <div className="absolute -top-24 -left-24 w-52 h-52 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                {/* Floating Icon Capsule */}
                <div className="relative w-14 h-14 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  <Eye className="w-6 h-6 text-[#38BDF8] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 group-hover:text-[#BAE6FD] transition-colors">
                  Our Vision
                </h3>

                {/* Paragraph */}
                <p className="text-sm sm:text-base text-[#CBD5E1] font-light leading-relaxed mb-8">
                  Transforming learners into visionary entrepreneurs by nurturing a mindset that identifies opportunities and drives innovation — leading to value creation. To provide a platform where aspiring entrepreneurs can nurture their creative ideas and transform them into viable business ventures.
                </p>

                {/* Checklist points with interactive slide and hover effects */}
                <div className="space-y-3 pt-6 border-t border-white/[0.07]">
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">National recognition through NEC IIT Bombay</span>
                  </div>
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">A startup-first campus culture at WIT Solapur</span>
                  </div>
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">Bridging local engineering talent to global platforms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Our Mission (Slides in from Right + Interactive Hover) */}
            <div
              className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#081226]/60 hover:bg-[#0C1B38]/85 border border-white/[0.08] hover:border-[#F3E1B6]/50 transition-all duration-700 delay-200 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(243,225,182,0.22)] hover:-translate-y-2 overflow-hidden transform ${
                visionVisible
                  ? 'opacity-100 translate-y-0 translate-x-0'
                  : 'opacity-0 translate-y-12 translate-x-8 pointer-events-none'
              }`}
            >
              {/* Top Starlight Accent Line that glows on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3E1B6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Ambient Radiant Nebula Glow in Corner */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#F3E1B6]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                {/* Floating Icon Capsule */}
                <div className="relative w-14 h-14 rounded-2xl bg-[#F3E1B6]/10 border border-[#F3E1B6]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_20px_rgba(243,225,182,0.18)] group-hover:shadow-[0_0_30px_rgba(243,225,182,0.4)]">
                  <Target className="w-6 h-6 text-[#F3E1B6] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 group-hover:text-[#FDFAD2] transition-colors">
                  Our Mission
                </h3>

                {/* Paragraph */}
                <p className="text-sm sm:text-base text-[#CBD5E1] font-light leading-relaxed mb-8">
                  To foster a vibrant and supportive environment for aspiring entrepreneurs within our institute — empowering students and nurturing innovations to create a thriving entrepreneurial ecosystem that benefits both our college community and the wider economy.
                </p>

                {/* Checklist points with interactive slide and hover effects */}
                <div className="space-y-3 pt-6 border-t border-white/[0.07]">
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">Hands-on entrepreneurship education & maker labs</span>
                  </div>
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">Mentorship from IIT Bombay & serial founders</span>
                  </div>
                  <div className="group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="transition-colors group-hover/item:text-white">Pitch competitions & venture capital funding exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
