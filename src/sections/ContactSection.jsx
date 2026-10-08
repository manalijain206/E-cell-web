import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Linkedin,
  Instagram,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Lightbulb,
  Users,
  Building2,
  Rocket,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intent: 'Pitch an Idea',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Intent chips for instant one-click selection (no bulky dropdowns)
  const intents = [
    { label: 'Pitch an Idea', icon: Lightbulb },
    { label: 'Mentorship', icon: Users },
    { label: 'Partner / Sponsor', icon: Building2 },
    { label: 'Join E-Cell', icon: Rocket },
  ];

  // Exact Champagne Gold Gradient from website theme
  const heroEcellGradientStyle = {
    background:
      'linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter:
      'drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))',
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20"
    >
      {/* Background Soft Cosmic Nebulae */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#1E3A8A]/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[550px] h-[550px] bg-[#0284C7]/[0.05] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ================================================== */}
        {/* 1. SECTION HEADER (CLEAN, CENTERED & BALANCED)     */}
        {/* ================================================== */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.24em] text-[#38BDF8] uppercase font-semibold">
              DIRECT UPLINK
            </span>
          </div>

          {/* Title in Champagne Gold Gradient */}
          <h2
            className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-3"
            style={heroEcellGradientStyle}
          >
            Let’s Build Something Together
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed max-w-xl mx-auto">
            Got an idea, looking for mentors, or want to partner with E-Cell WIT? Send a direct transmission to our core team.
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. MODERN STREAMLINED TRANSMISSION CONSOLE         */}
        {/* ================================================== */}
        <div className="relative rounded-3xl bg-[#081226]/50 border border-white/[0.08] hover:border-[#38BDF8]/30 backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-colors duration-500">
          
          {/* Top Subtle Cyan Glow Accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent pointer-events-none" />

          {isSubmitted ? (
            /* Transmission Success Screen */
            <div className="py-12 sm:py-16 text-center animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                <CheckCircle2 className="w-8 h-8 text-[#38BDF8]" />
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-2">
                Transmission Received!
              </h3>
              <p className="text-sm text-[#CBD5E1] font-light max-w-md mx-auto mb-8 leading-relaxed">
                Thank you, <span className="text-[#38BDF8] font-semibold">{formData.name}</span>. Your message has reached the E-Cell WIT team. We will review it and get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    intent: 'Pitch an Idea',
                    message: '',
                  });
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Streamlined Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              
              {/* Intent Selection Chips (Instant 1-Click Tap) */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-3">
                  I'm reaching out to:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {intents.map(({ label, icon: Icon }) => {
                    const isSelected = formData.intent === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setFormData({ ...formData, intent: label })}
                        className={`group relative flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.25)] font-semibold'
                            : 'bg-white/[0.02] text-[#94A3B8] border border-white/[0.08] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#38BDF8]' : 'text-[#64748B] group-hover:text-white'}`} />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email in One Balanced Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2">
                    Your Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Aarav Kulkarni"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2">
                    Email Address <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="aarav@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2">
                  Your Message or Idea <span className="text-[#38BDF8]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share brief details about your idea, proposal, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none resize-none font-sans"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-[#020617] border-t-transparent animate-spin" />
                    <span>Sending Transmission...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* ================================================== */}
          {/* 3. SLEEK INLINE QUICK CHANNELS (MINIMAL & AIRY)    */}
          {/* ================================================== */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            {/* Campus Address Pill */}
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>WIT Solapur, Maharashtra</span>
            </div>

            {/* Email with copy */}
            <div
              onClick={() => handleCopy('ecell@witsolapur.org', 'email')}
              className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>ecell@witsolapur.org</span>
              {copiedField === 'email' ? (
                <Check className="w-3 h-3 text-[#38BDF8]" />
              ) : (
                <Copy className="w-3 h-3 opacity-60" />
              )}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>

              <span className="opacity-30">·</span>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
