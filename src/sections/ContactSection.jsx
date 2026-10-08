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
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Student with an idea',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!formData.firstName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const roles = [
    'Student with an idea',
    'Mentor / Industry Expert',
    'Company / Sponsor',
    'Alumni Founder',
    'Event / Workshop Collaboration',
  ];

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20"
    >
      {/* Background Soft Cosmic Nebulae */}
      <div className="absolute top-[20%] left-[-10%] w-[650px] h-[650px] bg-[#1E3A8A]/[0.10] rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[650px] h-[650px] bg-[#0284C7]/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20 xl:gap-24 items-start">
          
          {/* ================================================== */}
          {/* LEFT COLUMN: TITLE, INFO & CLEAN AIRY CHANNELS     */}
          {/* ================================================== */}
          <div className="flex flex-col justify-between pt-2">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
                <span className="text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold">
                  GET IN TOUCH
                </span>
              </div>

              {/* Title in Champagne Gold Gradient */}
              <h2
                className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-5"
                style={heroEcellGradientStyle}
              >
                Let’s Build Something Together
              </h2>

              {/* Subtitle with generous line-height and width */}
              <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed max-w-xl mb-12 sm:mb-14">
                Whether you’re a student with an idea, a mentor who wants to give back, or an organization looking to partner — we’d love to connect.
              </p>
            </div>

            {/* Clean, Non-Congested Direct Channels (Matching Reference Image) */}
            <div className="space-y-8">
              {/* 1. Address */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] group-hover:bg-[#38BDF8]/10 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1">
                    Address
                  </span>
                  <p className="text-sm sm:text-base text-[#E2E8F0] font-sans leading-relaxed max-w-md">
                    Walchand Institute of Technology (WIT), Ashok Chowk, Solapur, Maharashtra 413006
                  </p>
                </div>
              </div>

              {/* 2. Email with One-Click Copy */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] group-hover:bg-[#38BDF8]/10 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1">
                    Email
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:ecell@witsolapur.org"
                      className="text-sm sm:text-base text-[#E2E8F0] font-mono hover:text-[#38BDF8] transition-colors"
                    >
                      ecell@witsolapur.org
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('ecell@witsolapur.org', 'email')}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-[#38BDF8]/20 text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. LinkedIn */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] group-hover:bg-[#38BDF8]/10 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1">
                    Linkedin
                  </span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#E2E8F0] font-mono hover:text-[#38BDF8] transition-colors"
                  >
                    <span>/company/e-cell-wit-solapur</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* 4. Instagram */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] group-hover:bg-[#38BDF8]/10 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#E2E8F0] font-mono hover:text-[#38BDF8] transition-colors"
                  >
                    <span>@ecell_wit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Beacon Indicator */}
            <div className="mt-12 flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
              </span>
              <span>
                Average response time: <span className="text-[#38BDF8] font-semibold">&lt; 24 hours</span>
              </span>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT COLUMN: SPACIOUS TRANSMISSION FORM           */}
          {/* ================================================== */}
          <div>
            <div className="relative rounded-3xl bg-[#081226]/60 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Top ambient highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent pointer-events-none" />

              {/* Form Title */}
              <div className="mb-8">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] font-mono mt-1">
                  Direct communications line to E-Cell Core Team
                </p>
              </div>

              {isSubmitted ? (
                /* Success Feedback State */
                <div className="py-14 text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-[#38BDF8]" />
                  </div>
                  <h4 className="font-sans font-bold text-2xl text-white mb-2">
                    Transmission Received!
                  </h4>
                  <p className="text-sm text-[#CBD5E1] font-light max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="text-[#38BDF8] font-semibold">{formData.firstName}</span>. Your message has been routed to the E-Cell WIT team. We will review it and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        role: 'Student with an idea',
                        message: '',
                      });
                    }}
                    className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Interactive Form Fields with Generous Spacing */
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2.5">
                        First Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="e.g. Aarav"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="e.g. Kulkarni"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2.5">
                      Email Address <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. aarav@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"
                    />
                  </div>

                  {/* I'm reaching out as a (Custom Dropdown) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2.5">
                      I’m reaching out as a
                    </label>
                    <div className="relative">
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#030816] border border-white/10 hover:border-white/20 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm transition-all outline-none font-sans appearance-none cursor-pointer"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r} className="bg-[#081226] text-white py-2">
                            {r}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#94A3B8]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2.5">
                      Message <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about yourself or your idea..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#020617] font-sans font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(255,255,255,0.18)] hover:shadow-[0_4px_35px_rgba(56,189,248,0.4)] active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-[#020617] border-t-transparent animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
