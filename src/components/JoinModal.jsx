import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Computer Science & Engg',
    year: 'First Year',
    interests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#020617]/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-[#0B1528] border border-[#38BDF8]/30 text-[#F8FAFC] shadow-[0_20px_60px_rgba(2,6,23,0.9)] my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2 text-[#38BDF8] font-mono text-xs uppercase font-medium tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE ECOSYSTEM</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#F8FAFC]">
          Walchand E-Cell Cohort
        </h3>
        <p className="mt-1 text-xs font-mono text-[#94A3B8]">
          Walchand Institute of Technology, Solapur
        </p>

        {submitted ? (
          <div className="py-12 text-center animate-in zoom-in-95">
            <CheckCircle2 className="w-12 h-12 text-[#38BDF8] mx-auto mb-3" />
            <h4 className="font-display font-bold text-xl text-[#F8FAFC]">
              Transmission Received
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-sm mx-auto font-light">
              Our team will review your application and connect with you via email. Welcome to the movement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Patil"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. rahul@wit.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5">
                  Department
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#38BDF8]"
                >
                  <option>Computer Science & Engg</option>
                  <option>Information Technology</option>
                  <option>Electronics & Telecomm</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>First Year</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5">
                  Year
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#38BDF8]"
                >
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Final Year</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5">
                What are you curious about building or learning?
              </label>
              <textarea
                rows={3}
                required
                placeholder="Briefly describe your interest in tech, prototyping, venture building, or events..."
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              <span>SUBMIT APPLICATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
