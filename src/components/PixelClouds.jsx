import React from 'react';
import { motion } from 'framer-motion';

export default function PixelClouds() {
  const clouds = [
    { id: 1, top: '12%', scale: 1.1, duration: 45, delay: 0, opacity: 0.25 },
    { id: 2, top: '28%', scale: 0.8, duration: 60, delay: 15, opacity: 0.18 },
    { id: 3, top: '55%', scale: 1.2, duration: 52, delay: 8, opacity: 0.22 },
    { id: 4, top: '78%', scale: 0.9, duration: 65, delay: 25, opacity: 0.16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: '-20vw' }}
          animate={{ x: '110vw' }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
          className="absolute pixel-cloud select-none"
          style={{
            top: cloud.top,
            transform: `scale(${cloud.scale})`,
            opacity: cloud.opacity,
          }}
        >
          {/* Pixel Cloud SVG (retro pixel aesthetic) */}
          <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="24" y="8" width="56" height="32" fill="#cbd5e1" />
            <rect x="40" y="0" width="32" height="16" fill="#e2e8f0" />
            <rect x="72" y="12" width="32" height="24" fill="#cbd5e1" />
            <rect x="96" y="20" width="16" height="16" fill="#cbd5e1" />
            <rect x="8" y="20" width="24" height="20" fill="#94a3b8" />
            <rect x="16" y="16" width="88" height="24" fill="#ffffff" />
            <rect x="32" y="4" width="40" height="20" fill="#ffffff" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
