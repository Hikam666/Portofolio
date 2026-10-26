import React from 'react';
import { motion } from 'framer-motion';

export default function CitySkylineFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-stone-950 text-stone-300 relative overflow-hidden select-none border-t-2 border-stone-800">
      {/* City Skyline Silhouette with Flying Iron Man */}
      <div className="w-full relative h-36 sm:h-44 bg-gradient-to-t from-stone-950 via-stone-900/90 to-stone-950 overflow-hidden border-b border-stone-800">
        {/* Subtle Ambient Night Sky & Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

        {/* Flying Iron Man Patrol across City Skyline */}
        <motion.div
          animate={{
            x: ['-2vw', '84vw', '-2vw'],
            y: [0, -10, 5, -8, 0],
            scaleX: [-1, -1, 1, 1, -1], // Heading right when flying to 84vw, heading left when returning
          }}
          transition={{
            x: {
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.49, 0.5, 0.99, 1],
            },
            y: {
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scaleX: {
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.49, 0.5, 0.99, 1],
            },
          }}
          className="absolute top-4 w-14 sm:w-16 pointer-events-none z-20 flex flex-col items-center"
        >
          <img
            src="/images/ironman-flying.png"
            alt="Flying Iron Man"
            className="w-full h-auto drop-shadow-[0_4px_14px_rgba(56,189,248,0.6)]"
          />
          {/* Subtle Thruster Particle Glow */}
          <div className="w-4 h-1.5 bg-cyan-400 rounded-full blur-[2px] opacity-80 -mt-1 shadow-[0_0_8px_#38bdf8] animate-pulse" />
        </motion.div>

        {/* Back Layer of Skyscrapers (Distant City) */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-around opacity-30 pointer-events-none px-4">
          <div className="w-16 h-28 bg-stone-800 rounded-t-sm" />
          <div className="w-24 h-36 bg-stone-800/90 rounded-t-sm relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-stone-600" />
          </div>
          <div className="w-14 h-24 bg-stone-800 rounded-t-sm" />
          <div className="w-28 h-40 bg-stone-800 rounded-t-sm relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-stone-600" />
          </div>
          <div className="w-20 h-32 bg-stone-800 rounded-t-sm" />
          <div className="w-16 h-20 bg-stone-800 rounded-t-sm" />
          <div className="w-24 h-36 bg-stone-800 rounded-t-sm" />
        </div>

        {/* Foreground Layer of Buildings with Glowing Windows (Gedung-Gedung Arsitektur) */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between opacity-85 pointer-events-none px-2 sm:px-8">
          {/* Building 1 */}
          <div className="w-16 sm:w-24 h-24 sm:h-32 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md p-2 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-1.5 opacity-60">
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
            </div>
            <div className="w-full h-1 bg-cyan-400/30" />
          </div>

          {/* Building 2 (Tower with Spire) */}
          <div className="w-20 sm:w-28 h-32 sm:h-40 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md relative p-2.5 flex flex-col justify-between">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-stone-700 flex flex-col items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 opacity-70">
              <span className="w-2 h-2 rounded-xs bg-cyan-300/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-cyan-300/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
            </div>
            <div className="w-full h-1 bg-amber-400/40" />
          </div>

          {/* Building 3 (Mid-Rise Block) */}
          <div className="hidden sm:flex w-20 h-24 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md p-2 flex-col justify-around">
            <div className="grid grid-cols-2 gap-2 opacity-50">
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
            </div>
          </div>

          {/* Building 4 (High-Rise Center) */}
          <div className="w-24 sm:w-36 h-28 sm:h-36 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md p-3 flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-1.5 opacity-60">
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-cyan-300/70" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-cyan-300/70" />
            </div>
            <div className="w-full h-1 bg-blue-500/40" />
          </div>

          {/* Building 5 (Stepped Modern Roof) */}
          <div className="w-20 sm:w-28 h-26 sm:h-32 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md relative p-2.5 flex flex-col justify-between">
            <div className="absolute -top-3 left-3 right-3 h-3 bg-stone-800 border-t border-x border-stone-700" />
            <div className="grid grid-cols-2 gap-2 opacity-65 pt-2">
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-amber-200/80" />
            </div>
          </div>

          {/* Building 6 (Right Antenna Tower) */}
          <div className="hidden md:flex w-24 h-36 bg-stone-900 border-t-2 border-x-2 border-stone-800 rounded-t-md relative p-2 flex-col justify-between">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-stone-700 flex flex-col items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 opacity-60">
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
              <span className="w-2 h-2 rounded-xs bg-cyan-300/80" />
              <span className="w-2 h-2 rounded-xs bg-stone-800" />
            </div>
            <div className="w-full h-1 bg-emerald-400/30" />
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-stone-400 text-center sm:text-left">
          <span className="font-bold text-white tracking-wider">
            [HIKAM.DEV]
          </span>
          <span>© 2026 Muhammad Aklilul Hikam. All rights reserved.</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-2">
          <a
            href="https://x.com/0xRahvanaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
          <span className="text-stone-600">·</span>
          <a
            href="https://www.linkedin.com/in/muhammad-aklilul-hikam-541019331/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-stone-600">·</span>
          <a
            href="https://www.instagram.com/hikam.182/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <span className="text-stone-600">·</span>
          <button
            onClick={scrollToTop}
            className="px-3 py-1 bg-stone-800 hover:bg-blue-casual text-white rounded-full transition-all flex items-center gap-1 font-bold"
          >
            <span>TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
