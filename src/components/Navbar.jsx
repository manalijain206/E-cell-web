import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#overview' },
    { label: 'EVENTS', href: '#events' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'TEAM', href: '#team' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-8 lg:px-10 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-md py-3.5 sm:py-4'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Both Logos Equal Height, Centered & Shifted to Left */}
        <div className="flex items-center -ml-1 sm:-ml-2">
          {/* E-Cell Brand Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/assets/ecell-logo.png"
              alt="E-Cell Logo"
              className="h-13 sm:h-15 md:h-16 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Symmetrical Vertical Divider */}
          <div className="h-9 sm:h-11 w-[1px] bg-[#38BDF8]/35 mx-3.5 sm:mx-5" />

          {/* Official WIT College Logo (Identical Height & Equal Center Alignment) */}
          <div className="flex items-center gap-3 group/wit">
            <img
              src="/assets/college/wit-logo.png"
              alt="Walchand Institute of Technology"
              className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-transform duration-300 group-hover/wit:scale-105 drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)]"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base md:text-lg font-mono text-[#F8FAFC] tracking-wider uppercase font-bold leading-none">
                WIT
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#94A3B8] tracking-widest uppercase leading-none mt-1 hidden sm:block">
                SOLAPUR
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Links with Elegant Floating Glass Capsule & Glowing Accents */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#0B1528]/60 backdrop-blur-md shadow-[0_4px_25px_rgba(2,6,23,0.6)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 rounded-full text-xs lg:text-[13px] font-sans font-semibold tracking-[0.22em] text-[#F8FAFC] hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all duration-300 group flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
              <span>{link.label}</span>
              <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        {/* Right: Hexatech Logo (Prominent, Bold & Clear) */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenJoin?.();
            }}
            className="group flex items-center transition-all duration-300 hover:scale-105"
            title="HEXATECH"
          >
            <img
              src="/assets/hexatech-logo.svg"
              alt="Hexatech Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_18px_rgba(0,194,255,0.45)] group-hover:drop-shadow-[0_2px_24px_rgba(0,194,255,0.7)] transition-all"
            />
          </a>
        </div>

        {/* Mobile menu and Hexatech */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenJoin?.();
            }}
            className="flex items-center"
            title="HEXATECH"
          >
            <img
              src="/assets/hexatech-logo.svg"
              alt="Hexatech Logo"
              className="h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,194,255,0.35)]"
            />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#020617]/98 backdrop-blur-xl p-8 flex flex-col justify-between md:hidden z-40 border-t border-[#38BDF8]/15 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-semibold text-2xl text-[#F8FAFC] hover:text-[#38BDF8] tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#38BDF8]/15 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span>Walchand Institute of Technology</span>
            <span>© {new Date().getFullYear()} E-Cell</span>
          </div>
        </div>
      )}
    </header>
  );
}
