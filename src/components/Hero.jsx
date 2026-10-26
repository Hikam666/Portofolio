import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import { siteConfig } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative w-full pt-6 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Giant Headline Typography (Reference 1 Style) */}
        <div className="text-center mb-6 select-none">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight uppercase leading-none flex flex-col items-center justify-center"
          >
            <span className="text-outline">MUHAMMAD</span>
            <span className="text-stone-900 -mt-2 sm:-mt-4 lg:-mt-6">AKLILUL HIKAM</span>
          </motion.h1>
        </div>

        {/* Center 3D Flip Card (clean, without bulky tags or flip button) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex justify-center -mt-4 sm:-mt-8 mb-8"
        >
          <FlipCard />
        </motion.div>

        {/* Bottom Hero Split (Role & Bio on Left, Social Pills on Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-6 border-t-2 border-stone-300">
          {/* Left Column: Role & Bio */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl space-y-3.5"
          >
            <div className="inline-block px-3 py-1 bg-blue-casual/15 text-blue-casual font-mono text-xs font-bold rounded-full border border-blue-casual/30">
              {lang === 'id' ? 'TENTANG SAYA // PROFIL' : 'ABOUT ME // PROFILE'}
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 leading-tight">
              {lang === 'id' ? 'Tentang Saya' : 'About Me'}
            </h2>

            <p className="font-display font-bold text-base sm:text-lg text-stone-900 leading-snug">
              {lang === 'id' ? 'Halo, saya Muhammad Aklilul Hikam' : "Hello, I'm Muhammad Aklilul Hikam"}
            </p>

            <div className="space-y-2.5 text-sm sm:text-[15px] text-stone-700 font-body leading-relaxed">
              <p>
                {lang === 'id'
                  ? 'Saya mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang, individu yang selalu penasaran dengan pertemuan antara teknologi dan strategi bisnis modern.'
                  : 'I am a Business Information Systems student at State Polytechnic of Malang, always curious about the intersection of modern technology and strategic business execution.'}
              </p>
              <p>
                {lang === 'id'
                  ? 'Perjalanan saya dimulai dari pengembangan web, lalu berkembang ke ekosistem Web3 dan Cryptocurrency. Berawal dari eksplorasi airdrop, saya menemukan minat mendalam pada teknologi blockchain dan bagaimana desentralisasi dapat mengubah masa depan ekonomi digital.'
                  : 'My journey began with web development, which naturally expanded into the Web3 and Cryptocurrency ecosystem. Starting from airdrop exploration, I developed a deep fascination with blockchain technology and how decentralization shapes the future of the digital economy.'}
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white hover:bg-blue-casual font-mono text-xs font-bold rounded-full transition-all shadow-md group"
              >
                <span>{lang === 'id' ? 'Mulai Kolaborasi' : "Let's collaborate"}</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Social Links Pill Buttons */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center justify-end gap-2.5"
          >
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white hover:bg-stone-900 hover:text-white border-2 border-stone-900 rounded-full font-mono text-xs font-semibold text-stone-800 transition-all shadow-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-casual" />
                <span>{social.label}</span>
                <span className="text-[10px] opacity-60">↗</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
