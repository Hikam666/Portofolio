import React from 'react';
import { motion } from 'framer-motion';

export default function IronmanFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-stone-950 text-stone-300 relative overflow-hidden select-none border-t-2 border-stone-800">
      {/* Iron Man Flight Runway */}
      <div className="w-full relative h-28 sm:h-32 border-b-2 border-stone-800 bg-stone-900/50 overflow-hidden">
        {/* Subtle Horizon / Grid Accent */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* Chibi Iron Man Flight Animation Loop */}
        <motion.div
          animate={{
            x: ['-4vw', '88vw', '-4vw'],
            y: [0, -10, 4, -6, 0], // Floating propulsion physics
            scaleX: [1, 1, -1, -1, 1], // Flips horizontally when changing direction
          }}
          transition={{
            x: {
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.49, 0.5, 0.99, 1],
            },
            y: {
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scaleX: {
              duration: 16,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.49, 0.5, 0.99, 1],
            },
          }}
          className="absolute bottom-3 w-20 sm:w-24 pointer-events-none z-10 flex flex-col items-center"
        >
          {/* Iron Man Character Sprite */}
          <img
            src="/images/ironman-transparent.png"
            alt="Iron Man Flying"
            className="w-full h-auto drop-shadow-[0_8px_16px_rgba(239,68,68,0.45)]"
          />

          {/* Repulsor Glow Beneath Boots */}
          <div className="w-8 h-2 bg-cyan-400 rounded-full blur-[3px] opacity-80 -mt-1 shadow-[0_0_12px_#38bdf8] animate-pulse" />
        </motion.div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-stone-400 text-center sm:text-left">
          <span className="font-bold text-white tracking-wider">
            [HIKAM.DEV]
          </span>
          <span>© 2026 Muhammad Aklilul Hikam. All rights reserved.</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/0xRahvanaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/muhammad-aklilul-hikam-541019331/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://www.instagram.com/hikam.182/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
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
