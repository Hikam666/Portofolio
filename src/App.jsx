import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import PixelCursor from './components/PixelCursor';
import SparkleTrail from './components/SparkleTrail';
import PixelClouds from './components/PixelClouds';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FolderTabs from './components/FolderTabs';
import LegoTimeline from './components/LegoTimeline';
import ArticlesGrid from './components/ArticlesGrid';
import InstagramShowcase from './components/InstagramShowcase';
import ContactSignpost from './components/ContactSignpost';
import CitySkylineFooter from './components/CitySkylineFooter';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream text-stone-900 relative selection:bg-blue-casual selection:text-white font-body w-full overflow-x-clip">
        {/* Global Interactive Cursor & Background Effects */}
        <PixelCursor />
        <SparkleTrail />
        <PixelClouds />

        {/* Floating Navbar (Gambar 2 Style with ID / EN switch) */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10 space-y-12 sm:space-y-16">
          <Hero />

          {/* Case Studies: Stacking Document Cards on Scroll */}
          <FolderTabs />

          {/* Experience: Falling and Stacking Lego Timeline */}
          <LegoTimeline />

          {/* Writings: Minimalist Grid Cards (21 Articles) */}
          <ArticlesGrid />

          {/* Instagram Visual Showcase: Live Post Previews */}
          <InstagramShowcase />

          {/* Contact: Wooden Signpost & Speech Bubbles */}
          <ContactSignpost />
        </main>

        {/* Footer: Architectural City Skyline */}
        <CitySkylineFooter />
      </div>
    </LanguageProvider>
  );
}
