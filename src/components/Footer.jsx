import React from 'react';
import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUp,
  Trophy,
  Heart,
  Sparkles,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#overview' },
    { label: 'Vision & Mission', href: '#vision-mission' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const programLinks = [
    { label: 'NEC IIT Bombay', href: '#events' },
    { label: 'WEC 2025', href: '#gallery' },
    { label: 'Idea Ignite', href: '#events' },
    { label: 'Founders Expo', href: '#events' },
    { label: 'Illuminate Workshop', href: '#events' },
    { label: 'E-Summit 2026', href: '#events' },
  ];

  const ecosystemLinks = [
    { label: 'WIT Maker Space', href: '#overview' },
    { label: 'Alumni Founder Syndicate', href: '#contact' },
    { label: 'Innovation & IPR Council', href: '#events' },
    { label: 'E-Cell IIT Bombay Partner', href: '#overview' },
    { label: 'Pre-Incubation Center', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#010409] text-[#94A3B8] font-sans overflow-hidden select-none">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-20 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* ================================================== */}
          {/* 1. BRAND COLUMN                                    */}
          {/* ================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Header with WIT and E-Cell Identities */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <span className="font-mono font-black text-[#020617] text-sm tracking-tighter">
                    EC
                  </span>
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-lg tracking-tight">
                    E-Cell WIT
                  </span>
                  <span className="block text-[10px] font-mono text-[#38BDF8] tracking-widest uppercase">
                    Walchand Institute of Tech.
                  </span>
                </div>
              </div>

              {/* College Bio */}
              <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-6 max-w-sm">
                Entrepreneurship Cell of Walchand Institute of Technology, Solapur. Building the next wave of student innovators, builders & founders from Maharashtra — Annual Report 2025–26.
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* 2. NAVIGATE COLUMN                                 */}
          {/* ================================================== */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5">
              NAVIGATE
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================== */}
          {/* 3. PROGRAMS COLUMN                                 */}
          {/* ================================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5">
              PROGRAMS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {programLinks.map((prog) => (
                <li key={prog.label}>
                  <a
                    href={prog.href}
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block"
                  >
                    {prog.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================== */}
          {/* 4. ECOSYSTEM & PARTNERS COLUMN                     */}
          {/* ================================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5">
              WIT ECOSYSTEM
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {ecosystemLinks.map((partner) => (
                <li key={partner.label}>
                  <a
                    href={partner.href}
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block"
                  >
                    {partner.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================================================== */}
        {/* BOTTOM STRIP: COPYRIGHT & PODIUM BADGE             */}
        {/* ================================================== */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-[#64748B]">
          {/* Left copyright notice */}
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© 2024–26 E-Cell WIT Solapur. Made with</span>
            <Heart className="w-3.5 h-3.5 text-white/80 fill-white/80 inline" />
            <span>by students, for students.</span>
          </div>

          {/* Right: National Recognition Badge & Top Button */}
          <div className="flex items-center gap-4">
            {/* National Achievement Badge matching user screenshot */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081226] border border-white/10 text-[11px] text-[#E2E8F0] shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F3E1B6]" />
              <span>NEC IIT Bombay · WEC · 3× National Podium</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#38BDF8] text-[#94A3B8] hover:text-[#020617] border border-white/10 hover:border-[#38BDF8] transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
