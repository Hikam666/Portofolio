import React from 'react';
import { motion } from 'framer-motion';

export default function PixelDogFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-stone-900 text-stone-300 relative overflow-hidden select-none">
      {/* 8-Bit Pixel Fence Runway */}
      <div className="w-full relative h-16 border-b-2 border-stone-800 bg-stone-950/60 overflow-hidden">
        {/* Pixel Fence Posts */}
        <div className="absolute inset-0 pixel-fence opacity-30" />

        {/* Pixel Dog Walking Patrol (Framer Motion Animation Loop) */}
        <motion.div
          animate={{
            x: ['2vw', '88vw', '2vw'],
            scaleX: [1, 1, -1, -1, 1], // Flips direction when turning around
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.49, 0.5, 0.99, 1],
          }}
          className="absolute bottom-2 text-2xl"
          style={{ imageRendering: 'pixelated' }}
        >
          🐕
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
