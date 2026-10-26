import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    setRotateY((x / (card.width / 2)) * 6);
    setRotateX(-(y / (card.height / 2)) * 6);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="flex flex-col items-center">
      {/* 3D Perspective Card Container */}
      <div
        className="w-72 sm:w-80 md:w-96 h-88 sm:h-96 md:h-[430px] cursor-pointer select-none"
        style={{ perspective: '1200px' }}
        onClick={() => setIsFlipped((prev) => !prev)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{
            rotateX,
            rotateY: (isFlipped ? 180 : 0) + rotateY,
          }}
          transition={{
            duration: 0.32,
            ease: [0.2, 0.9, 0.3, 1], // Super snappy, fast flip
          }}
          className="flip-card-inner relative w-full h-full shadow-2xl rounded-3xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* SISI DEPAN: FOTO ASLI (REALITY) */}
          <div
            className="flip-card-front absolute inset-0 bg-stone-100 border-4 border-stone-900 rounded-3xl overflow-hidden shadow-xl"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <img
              src="/images/profile.jpg"
              alt="Muhammad Aklilul Hikam"
              className="w-full h-full object-cover object-[center_52%]"
            />

            {/* Bottom Info Pill */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-900/25 to-transparent flex items-end justify-between">
              <div>
                <p className="text-white font-display font-bold text-base leading-tight drop-shadow-md">
                  Muhammad Aklilul Hikam
                </p>
                <p className="text-stone-300 font-mono text-[11px] drop-shadow">
                  Malang, Indonesia
                </p>
              </div>
              <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-stone-900 text-[10px] font-mono font-bold rounded-full border border-stone-900 shadow flex items-center gap-1">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                <span>FLIP</span>
              </span>
            </div>
          </div>

          {/* SISI BELAKANG: AVATAR WEB3 (0xRAHVANAA) - Tidak ada tulisan 'Web3 Identity' */}
          <div
            className="flip-card-back absolute inset-0 bg-navy border-4 border-blue-600 rounded-3xl overflow-hidden shadow-xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <img
              src="/images/avatar-web3.jpg"
              alt="0xRahvanaa Avatar"
              className="w-full h-full object-cover object-center"
            />

            {/* Bottom Info Pill - Hanya handle, tanpa 'Web3 Identity' */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-900/25 to-transparent flex items-end justify-between">
              <div>
                <p className="text-white font-display font-bold text-base leading-tight drop-shadow-md">
                  @0xRahvanaa
                </p>
              </div>
              <span className="px-2.5 py-1 bg-amber-400 text-stone-950 text-[10px] font-mono font-bold rounded-full border border-stone-900 shadow flex items-center gap-1">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                <span>FLIP</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
