import React from 'react';
import { X, Calendar, MapPin, Trophy, Clock, Users, ArrowUpRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';

export default function EventModal({ event, onClose, onRegister }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#081226] border border-[#38BDF8]/25 shadow-[0_25px_70px_rgba(2,6,23,0.95)] text-[#F8FAFC] p-6 sm:p-10 my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-[11px] font-bold uppercase tracking-wider">
            {event.category}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] font-mono text-[11px]">
            {event.badge || (event.isUpcoming ? 'UPCOMING' : 'COMPLETED')}
          </span>
          {event.metric && (
            <span className="px-3.5 py-1 rounded-full bg-[#F3E1B6]/10 border border-[#F3E1B6]/30 text-[#F3E1B6] font-mono text-[11px] font-semibold">
              {event.metric}
            </span>
          )}
        </div>

        {/* Event Title */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
          {event.title}
        </h2>

        {event.subtitle && (
          <p className="mt-2 text-sm sm:text-base text-[#94A3B8] font-mono">
            {event.subtitle}
          </p>
        )}

        {/* Quick Meta Row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#38BDF8]" />
            <div>
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Date & Timing</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{event.dateDisplay || event.date}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#38BDF8]" />
            <div>
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Venue Location</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{event.venue}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#F3E1B6]" />
            <div>
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Impact / Highlights</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{event.metric || event.prizePool || 'Recognized & Certified'}</div>
            </div>
          </div>
        </div>

        {/* Poster / Photo Banner */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-[#020617] relative aspect-[16/9] sm:aspect-[21/9]">
          {event.image ? (
            <>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs font-mono text-[#94A3B8] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  E-CELL WIT SOLAPUR · OFFICIAL EVENT ARCHIVE
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/70 via-[#071329] to-[#020617] relative text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <Sparkles className="w-6 h-6 text-[#38BDF8]" />
              </div>
              <p className="text-base sm:text-lg font-mono text-[#BAE6FD] font-semibold">{event.title}</p>
              <p className="text-xs font-mono text-[#94A3B8] mt-1">Official Event Media Archive · WIT Solapur</p>
            </div>
          )}
        </div>

        {/* Detailed Description */}
        <div className="mt-8">
          <h3 className="font-display font-bold text-lg text-white mb-2">
            About the Event
          </h3>
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-light">
            {event.description}
          </p>
        </div>

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {event.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E2E8F0] font-mono">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schedule Agenda */}
        {event.schedule && event.schedule.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#38BDF8]" />
              Schedule & Agenda
            </h3>
            <div className="space-y-3">
              {event.schedule.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-xs font-bold text-[#38BDF8] shrink-0 pt-0.5">
                    {item.time}
                  </span>
                  <span className="text-sm text-[#E2E8F0]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#94A3B8]">
            Walchand Institute of Technology · E-Cell Movement
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-xs font-mono uppercase text-[#CBD5E1] transition-colors cursor-pointer"
            >
              Close
            </button>
            {event.isUpcoming ? (
              <button
                onClick={() => {
                  onClose();
                  onRegister?.(event);
                }}
                className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#F3E1B6]/15 hover:bg-[#F3E1B6] border border-[#F3E1B6]/40 text-[#F3E1B6] hover:text-[#020617] font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>VIEWED RECAP</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
