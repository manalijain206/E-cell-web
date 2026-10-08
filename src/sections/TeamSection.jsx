import React, { useState } from 'react';
import { teamData, teamCategories } from '../data/team';
import { Network, Grid3X3, GitFork, Linkedin, Instagram, Mail, ExternalLink, X, Sparkles } from 'lucide-react';

export default function TeamSection() {
  const [viewMode, setViewMode] = useState('NETWORK'); // 'NETWORK' | 'EDITORIAL' | 'ORGCHART'
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const hoveredMember = teamData.find((m) => m.id === hoveredNodeId);

  // Group members for editorial view
  const leadership = teamData.filter((m) => m.category === 'leadership');
  const coreLeads = teamData.filter((m) => m.category === 'leads');
  const associates = teamData.filter((m) => m.category === 'associates');

  return (
    <section id="team" className="relative py-28 bg-[#060608] border-b border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-[#FF5722]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase">
                // 07 · THE HUMAN ENGINE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              THE PEOPLE BEHIND THE IDEAS
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-[#FF8A00]">
              20 minds. One ecosystem.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 rounded-xl bg-[#0e0e15] border border-white/10">
            <button
              onClick={() => setViewMode('NETWORK')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'NETWORK'
                  ? 'bg-[#FF5722] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Interactive Ecosystem Network"
            >
              <Network className="w-3.5 h-3.5" />
              <span>NETWORK GRAPH</span>
            </button>

            <button
              onClick={() => setViewMode('EDITORIAL')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'EDITORIAL'
                  ? 'bg-[#FF5722] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Editorial Roster Wall"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>ROSTER WALL</span>
            </button>

            <button
              onClick={() => setViewMode('ORGCHART')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'ORGCHART'
                  ? 'bg-[#FF5722] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Interactive Organization Hierarchy Chart"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>STRUCTURE</span>
            </button>
          </div>
        </div>

        {/* --- VIEW 1: INTERACTIVE ECOSYSTEM NETWORK GRAPH --- */}
        {viewMode === 'NETWORK' && (
          <div className="relative rounded-3xl bg-[#0a0a0f] border border-white/10 p-4 sm:p-8 overflow-hidden min-h-[580px] flex flex-col justify-between">
            {/* Guide top-bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-zinc-400 gap-2 mb-4 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping" />
                <span>INTERACTIVE ECOSYSTEM GRAPH: Hover nodes to reveal connections & roles</span>
              </div>
              <div className="text-[11px] text-[#FFA000]">
                Click node to view full profile card
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative w-full h-[520px] rounded-2xl bg-tech-dots bg-[#060608]/90 border border-white/5 overflow-hidden">
              <svg className="w-full h-full absolute inset-0 pointer-events-none">
                {/* Connecting lines between nodes */}
                {teamData.map((node) => {
                  if (!node.connections) return null;
                  return node.connections.map((targetId) => {
                    const target = teamData.find((m) => m.id === targetId);
                    if (!target) return null;
                    const isConnectedToHovered =
                      hoveredNodeId &&
                      (hoveredNodeId === node.id ||
                        hoveredNodeId === target.id ||
                        node.connections?.includes(hoveredNodeId));

                    return (
                      <line
                        key={`${node.id}-${target.id}`}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${target.x}%`}
                        y2={`${target.y}%`}
                        stroke={
                          isConnectedToHovered
                            ? '#FF5722'
                            : 'rgba(255, 255, 255, 0.08)'
                        }
                        strokeWidth={isConnectedToHovered ? 2 : 0.8}
                        strokeDasharray={isConnectedToHovered ? 'none' : '3 3'}
                        className="transition-all duration-300"
                      />
                    );
                  });
                })}
              </svg>

              {/* Render Nodes */}
              {teamData.map((member) => {
                const isHovered = hoveredNodeId === member.id;
                const isSelected = selectedMember?.id === member.id;
                const isLead = member.category === 'leadership';

                return (
                  <div
                    key={member.id}
                    style={{
                      left: `${member.x}%`,
                      top: `${member.y}%`,
                    }}
                    onMouseEnter={() => setHoveredNodeId(member.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedMember(member)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-transform duration-200 hover:scale-125"
                    data-cursor-text="MEMBER"
                  >
                    {/* Node Core Circle */}
                    <div
                      className={`relative rounded-full flex items-center justify-center transition-all ${
                        isHovered || isSelected
                          ? 'w-12 h-12 bg-[#FF5722] ring-4 ring-[#FF5722]/30 shadow-[0_0_20px_#FF5722]'
                          : isLead
                          ? 'w-10 h-10 bg-[#1e1e28] border-2 border-[#FF5722]'
                          : 'w-7 h-7 bg-[#14141c] border border-white/20'
                      }`}
                    >
                      {/* Avatar preview on hover */}
                      <img
                        src={member.photo}
                        alt={member.role}
                        className={`w-full h-full object-cover rounded-full ${
                          isHovered || isSelected ? 'opacity-90' : 'opacity-60'
                        }`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="sr-only">{member.role}</span>
                    </div>

                    {/* Small Label Pin */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap pointer-events-none transition-all ${
                        isHovered
                          ? 'bg-[#FF5722] text-black font-bold scale-105 z-30'
                          : 'bg-black/75 text-zinc-400 opacity-60'
                      }`}
                    >
                      {member.role.split('/')[0]}
                    </div>
                  </div>
                );
              })}

              {/* Node Inspector Overlay Card */}
              {hoveredMember && (
                <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-black/90 border border-[#FF5722]/40 backdrop-blur-md max-w-xs z-30 shadow-2xl pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#1e1e28] border border-white/10 shrink-0">
                      <img
                        src={hoveredMember.photo}
                        alt={hoveredMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#FF8A00] font-bold">
                        {hoveredMember.role}
                      </div>
                      <div className="font-display font-bold text-sm text-white">
                        {hoveredMember.name}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-zinc-400">
                    {hoveredMember.department} · {hoveredMember.year}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- VIEW 2: EDITORIAL ROSTER WALL --- */}
        {viewMode === 'EDITORIAL' && (
          <div className="space-y-16">
            {/* Leadership Tier */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  EXECUTIVE LEADERSHIP
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadership.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="p-6 rounded-2xl bg-[#0c0c11] border border-white/10 hover:border-[#FF5722]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      {/* Photo Container */}
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#161620] mb-4 border border-white/5">
                        <img
                          src={member.photo}
                          alt={member.role}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#FF8A00]">
                            {member.role.split('/')[0]}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-[#FF5722] font-semibold">
                        {member.role}
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mt-1">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {member.department}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>{member.year}</span>
                      <span className="text-[#FF5722] group-hover:underline">Profile →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Domain Leads */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  CORE DOMAIN HEADS
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreLeads.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="p-5 rounded-2xl bg-[#0c0c11] border border-white/10 hover:border-[#FF8A00]/50 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-[#161620] shrink-0 border border-white/5">
                      <img
                        src={member.photo}
                        alt={member.role}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#FF8A00] font-bold">
                        {member.role}
                      </div>
                      <div className="font-display font-bold text-base text-white mt-0.5">
                        {member.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 mt-1">
                        {member.department}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Associates & Team Executives */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  TEAM ASSOCIATES & EXECUTIVES
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {associates.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="p-4 rounded-xl bg-[#0c0c11] border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
                  >
                    <div className="text-[10px] font-mono text-zinc-400">
                      {member.role}
                    </div>
                    <div className="font-display font-bold text-sm text-white mt-0.5 group-hover:text-[#FF5722] transition-colors">
                      {member.name}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 mt-1">
                      {member.department}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 3: INTERACTIVE ORGANIZATIONAL STRUCTURE --- */}
        {viewMode === 'ORGCHART' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0f] border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-[#FF5722] uppercase tracking-widest">
                // GOVERNANCE HIERARCHY
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                E-Cell Leadership Architecture
              </h3>
            </div>

            <div className="flex flex-col items-center space-y-6">
              {/* President */}
              <div className="p-4 px-8 rounded-2xl bg-[#14141e] border-2 border-[#FF5722] text-center shadow-[0_0_25px_rgba(255,87,34,0.3)]">
                <div className="text-xs font-mono text-[#FF8A00] font-bold">EXECUTIVE CHAIR</div>
                <div className="font-display font-bold text-lg text-white">President</div>
                <div className="text-[11px] font-mono text-zinc-400">[Member Name]</div>
              </div>

              <div className="w-0.5 h-6 bg-[#FF5722]" />

              {/* Vice President & Secretary */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="p-3 px-6 rounded-xl bg-[#101018] border border-white/20 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">OPERATIONAL EXEC</div>
                  <div className="font-display font-bold text-sm text-white">Vice President</div>
                </div>
                <div className="p-3 px-6 rounded-xl bg-[#101018] border border-white/20 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">COORDINATION</div>
                  <div className="font-display font-bold text-sm text-white">Secretary / Joint Sec</div>
                </div>
              </div>

              <div className="w-0.5 h-6 bg-white/20" />

              {/* Functional Domain Wings */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 w-full">
                {[
                  { domain: 'TECH & WEB', lead: 'Tech Head', color: '#FF5722' },
                  { domain: 'EVENTS', lead: 'Events Head', color: '#FF8A00' },
                  { domain: 'MARKETING', lead: 'Marketing Head', color: '#FFA000' },
                  { domain: 'PR & OUTREACH', lead: 'PR Head', color: '#FF7043' },
                  { domain: 'CREATIVE', lead: 'Design Head', color: '#FF5722' },
                  { domain: 'FINANCE', lead: 'Finance Head', color: '#FFA000' },
                  { domain: 'STRATEGY', lead: 'Strategy Head', color: '#FF6F00' },
                ].map((wing) => (
                  <div
                    key={wing.domain}
                    className="p-3 rounded-xl bg-[#0e0e15] border border-white/10 text-center"
                  >
                    <div
                      className="text-[9px] font-mono font-bold uppercase tracking-wider"
                      style={{ color: wing.color }}
                    >
                      {wing.domain}
                    </div>
                    <div className="text-xs font-semibold text-zinc-200 mt-1">
                      {wing.lead}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 mt-0.5">
                      + Associates
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Member Profile Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#0e0e14] border border-[#FF5722]/40 text-white shadow-2xl">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-20 rounded-xl overflow-hidden bg-[#161622] border border-white/10 shrink-0">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded bg-[#FF5722]/15 text-[#FF8A00] font-mono text-[10px] font-bold">
                    {selectedMember.role}
                  </span>
                  <h3 className="font-display font-bold text-xl mt-1">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400">
                    {selectedMember.department} · {selectedMember.year}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Socials & Email */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#FF5722] hover:text-black transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={selectedMember.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#FF5722] hover:text-black transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#FF5722] hover:text-black transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Data editing instructions */}
        <div className="mt-12 text-center text-[11px] font-mono text-zinc-400">
          * Roster entries loaded dynamically from <code className="text-[#FF8A00] bg-black/40 px-1 py-0.5 rounded">src/data/team.js</code>. Insert actual photos in <code className="text-[#FF5722]">/public/assets/team/</code>.
        </div>
      </div>
    </section>
  );
}
