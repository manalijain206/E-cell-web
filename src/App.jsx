import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AfterLandingImpact from './components/AfterLandingImpact';
import WhatWeDoIntro from './components/WhatWeDoIntro';
import EventsSection from './sections/EventsSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#020617] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-[#020617] overflow-x-hidden">
      {/* Faint Organic Grain Texture Overlay */}
      <div className="fixed inset-0 grain-overlay z-[90] pointer-events-none" />

      {/* Subtle Custom Cursor */}
      <CustomCursor />

      {/* Minimal Top Navigation */}
      <Navbar onOpenJoin={() => setJoinModalOpen(true)} />

      {/* Main Screen: One Powerful Central E-Cell Identity */}
      <main className="relative z-10">
        <Hero onOpenJoin={() => setJoinModalOpen(true)} />

        {/* Live Ticker Marquee Strip & 5 Big Impact Numbers */}
        <AfterLandingImpact />

        {/* Subtle Scroll Continuation: What We Do, Our Motto & Vision/Mission */}
        <WhatWeDoIntro onOpenJoin={() => setJoinModalOpen(true)} />

        {/* Authentic Events Section: Photos, Names & INFO */}
        <EventsSection
          onSelectEvent={setSelectedEvent}
          onRegisterEvent={() => setJoinModalOpen(true)}
        />

        {/* Our Gallery: Captivating Moments Slideshow */}
        <GallerySection />

        {/* Let's Build Something Together: Contact & Transmission Hub */}
        <ContactSection />
      </main>

      {/* Sleek Minimal Footer */}
      <Footer />

      {/* Event Details Interactive Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegister={() => {
          setSelectedEvent(null);
          setJoinModalOpen(true);
        }}
      />

      {/* Minimal Application Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}
