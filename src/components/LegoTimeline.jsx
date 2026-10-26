import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { experienceData } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function LegoTimeline() {
  const { lang } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 4 Core Brick configurations matching career track record
  const brickConfigs = [
    {
      id: 1,
      brickName: 'Media Network',
      offsetX: '-20px',
      offsetXMobile: '-6px',
      color: '#d45d34', // Foren Orange
      hasLeftGrooves: true,
      hasDot: true,
      dotColor: '#eab308',
    },
    {
      id: 2,
      brickName: 'BarbarianX',
      offsetX: '24px',
      offsetXMobile: '8px',
      color: '#2f63e6', // Hydrogen Blue
      hasPixelChecker: true,
    },
    {
      id: 3,
      brickName: 'Infonomic',
      offsetX: '-14px',
      offsetXMobile: '-4px',
      color: '#18191f', // Earnipay Black
      hasLeftGrooves: true,
      hasDotTexture: true,
    },
    {
      id: 4,
      brickName: 'Polinema',
      offsetX: '12px',
      offsetXMobile: '4px',
      color: '#34a853', // OnePipe Green
      hasPixelChecker: true,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full pt-14 pb-20 px-4 sm:px-6 lg:px-8 bg-stone-100/70 border-y-2 border-stone-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header (owoetoni style) */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-casual mb-2">
            BUILT BRICK BY BRICK · 2023 → NOW
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-stone-900 tracking-tight">
            EXPERIENCE
          </h2>
          <p className="text-xs sm:text-sm font-mono text-stone-600 mt-2 max-w-lg mx-auto">
            {lang === 'id'
              ? 'Tumpukan karir, riset Web3, dan pendidikan akademik Sistem Informasi Bisnis. Klik balok untuk detail.'
              : 'Modular timeline of community growth, SEO strategies, and Business Information Systems studies. Click brick to expand.'}
          </p>
        </div>

        {/* Tightly Interlocking Lego Bricks Stack (6 Bricks matching Reference) */}
        <div className="flex flex-col items-center justify-center relative py-4">
          {experienceData.map((item, idx) => {
            const config = brickConfigs[idx] || brickConfigs[0];
            const isSelected = selectedId === item.id;
            // Bottom brick lands first (idx 5 -> 0s), then 4, 3, 2, 1, 0
            const staggerDelay = (experienceData.length - 1 - idx) * 0.1;

            return (
              <div
                key={item.id}
                className={`relative w-full max-w-xl transition-all ${idx !== 0 ? '-mt-2.5 sm:-mt-3' : ''}`}
                style={{ zIndex: 10 + idx }}
              >
                {/* Brick & Metadata Row */}
                <div
                  className="flex flex-row items-center justify-center gap-2.5 sm:gap-6"
                  style={{
                    transform: `translateX(${isMobile ? config.offsetXMobile : config.offsetX})`,
                  }}
                >
                  {/* The Physical Lego Brick (Reliable spring drop triggered by parent inView) */}
                  <motion.div
                    initial={{ y: -160, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -160, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                      mass: 0.9,
                      delay: staggerDelay,
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedId(isSelected ? null : item.id)}
                    className="relative w-[195px] xs:w-[225px] sm:w-[340px] h-16 sm:h-22 rounded-xl flex items-center justify-between px-3 sm:px-6 text-white font-mono font-bold cursor-pointer select-none transition-shadow duration-200 border-b-4 border-black/35 shadow-lg hover:shadow-2xl overflow-visible shrink-0"
                    style={{
                      backgroundColor: config.color,
                    }}
                  >
                    {/* Top Lego Studs (4 Round Pegs with 3D Bevel) */}
                    <div className="absolute -top-2 sm:-top-3 left-3 right-3 sm:left-6 sm:right-6 flex justify-between pointer-events-none z-20">
                      {[0, 1, 2, 3].map((pegIdx) => (
                        <div
                          key={pegIdx}
                          className="w-5 xs:w-6 sm:w-10 h-2 sm:h-3 rounded-t-md shadow-sm border-t border-x border-white/25"
                          style={{
                            backgroundColor: config.color,
                            filter: 'brightness(1.15)',
                          }}
                        />
                      ))}
                    </div>

                    {/* Left Decorative Grooves (≡) */}
                    {config.hasLeftGrooves && (
                      <div className="hidden xs:flex flex-col space-y-0.5 sm:space-y-1 opacity-70 -ml-1 sm:-ml-2 mr-1 sm:mr-2 pointer-events-none">
                        <span className="w-2.5 sm:w-4 h-0.5 sm:h-1 rounded-full bg-white/80" />
                        <span className="w-2.5 sm:w-4 h-0.5 sm:h-1 rounded-full bg-white/80" />
                        <span className="w-2.5 sm:w-4 h-0.5 sm:h-1 rounded-full bg-white/80" />
                        <span className="w-2.5 sm:w-4 h-0.5 sm:h-1 rounded-full bg-white/80" />
                        <span className="w-2.5 sm:w-4 h-0.5 sm:h-1 rounded-full bg-white/80" />
                      </div>
                    )}

                    {/* Dot Pattern Texture for Slate Brick */}
                    {config.hasDotTexture && (
                      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:8px_8px] rounded-xl" />
                    )}

                    {/* Brick Main Name & Dot */}
                    <div className="flex items-center gap-1.5 sm:gap-2.5 z-10 min-w-0">
                      <span className="text-sm xs:text-base sm:text-3xl font-display font-extrabold tracking-tight truncate max-w-[110px] xs:max-w-[140px] sm:max-w-none">
                        {config.brickName}
                      </span>
                      {config.hasDot && (
                        <span
                          className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full inline-block shadow-sm shrink-0"
                          style={{ backgroundColor: config.dotColor }}
                        />
                      )}
                    </div>

                    {/* 8-bit Checkerboard Accent on Bottom Right */}
                    {config.hasPixelChecker && (
                      <div className="absolute bottom-1 right-2 grid grid-cols-4 grid-rows-2 w-5 sm:w-7 h-2.5 sm:h-3.5 opacity-80 pointer-events-none">
                        <span className="bg-black" />
                        <span className="bg-white" />
                        <span className="bg-black" />
                        <span className="bg-white" />
                        <span className="bg-white" />
                        <span className="bg-black" />
                        <span className="bg-white" />
                        <span className="bg-black" />
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono tracking-wider opacity-90 z-10 px-1 xs:px-1.5 py-0.5 rounded bg-black/25 border border-white/20 shrink-0">
                      {isSelected ? 'CLOSE' : 'INFO'}
                    </span>
                  </motion.div>

                  {/* Clean Monospace Metadata Beside Brick */}
                  <div className="w-[105px] xs:w-[125px] sm:w-56 text-left font-mono shrink-0 pl-1">
                    <p className="text-[10px] xs:text-[11px] sm:text-sm font-bold text-stone-900 tracking-wider whitespace-nowrap">
                      {item.period}
                    </p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-semibold text-stone-600 uppercase tracking-tight leading-snug line-clamp-2 sm:line-clamp-none">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-3 sm:mt-4 max-w-lg mx-auto"
                    >
                      <div className="bg-white border-2 border-stone-900 rounded-2xl p-5 shadow-[4px_4px_0px_#1c1917] space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                          <span className="font-display font-bold text-sm text-stone-900">
                            {item.company}
                          </span>
                          <span className="font-mono text-xs font-bold text-blue-casual">
                            {item.role}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-body">
                          {lang === 'id' ? item.description.id : item.description.en}
                        </p>

                        {/* Interactive Project / Website Links */}
                        {item.links && item.links.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {item.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-stone-100 hover:bg-blue-casual hover:text-white border border-stone-800 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
                              >
                                <span>{link.label}</span>
                                <span className="text-[10px]">↗</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
