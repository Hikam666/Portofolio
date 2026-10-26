import React from 'react';
import { motion } from 'framer-motion';
import { signpostLinks } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSignpost() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-stone-200/50 border-t-2 border-stone-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Wooden Signpost (Reference 4 Style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex flex-col items-center py-8 select-none w-64">
              {/* Top Pole Cap */}
              <div className="w-5 h-5 rounded-full border-2 border-stone-800 bg-white z-20 mb-[-2px] shadow-sm" />

              {/* Wooden Pole */}
              <div className="absolute top-8 bottom-6 w-3.5 bg-amber-950 rounded-full shadow-inner" />

              {/* Decorative Geometric Badges Behind Signpost */}
              <div className="absolute top-16 -left-6 text-stone-400 opacity-40 text-xs font-mono pointer-events-none">
                [//]
              </div>
              <div className="absolute bottom-20 -right-6 text-stone-400 opacity-40 text-xs font-mono pointer-events-none">
                [//]
              </div>

              {/* Wooden Arrow Signs */}
              <div className="flex flex-col gap-3.5 z-10 w-full items-center my-4">
                {signpostLinks.map((item, idx) => {
                  const initialRot = idx % 2 === 0 ? -3 : 3;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      initial={{ rotate: initialRot }}
                      whileHover={{
                        rotate: idx % 2 === 0 ? 8 : -8,
                        scale: 1.07,
                        transition: { type: 'spring', stiffness: 350, damping: 10 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-52 py-2.5 px-4 rounded-xl shadow-md font-mono font-bold text-sm tracking-wider flex items-center justify-between border-b-2 border-black/25"
                      style={{ backgroundColor: item.bg, color: item.text }}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </span>
                      <span className="text-xs opacity-75">→</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Pole Base Plate */}
              <div className="w-20 h-4 bg-stone-900 rounded-full z-20 shadow-md mt-[-2px]" />
            </div>
          </div>

          {/* Right Column: Speech Bubbles CTA (Reference 4 Style) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Top Speech Bubble (Blue Wavy Pattern) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-blue-casual text-white shadow-xl overflow-hidden wavy-bg"
            >
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold leading-tight">
                {lang === 'id' ? 'Punya proyek yang ingin dibangun secara profesional? ✦' : 'Got something you want built properly? ✦'}
              </h3>
            </motion.div>

            {/* Middle Speech Bubble (Green Pattern) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative p-5 sm:p-6 rounded-3xl bg-emerald-600 text-white shadow-lg overflow-hidden"
            >
              <p className="text-sm sm:text-base font-body font-medium leading-relaxed">
                {lang === 'id'
                  ? 'Mencari rekanan untuk pertumbuhan ekosistem Web3, strategi konten SEO, atau pengembangan sistem informasi web? Saya siap berdiskusi.'
                  : "Hiring for Web3 ecosystem growth, SEO content strategy, or system design? I'd like to hear about it."}
              </p>
            </motion.div>

            {/* Bottom Speech Bubble with Action Buttons (Striped Pattern) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-6 rounded-3xl bg-amber-500 shadow-xl overflow-hidden flex flex-wrap items-center gap-4"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 12px, transparent 12px, transparent 24px)',
              }}
            >
              <a
                href="mailto:aklilhikam6@gmail.com?subject=Project%20Inquiry%20-%20Muhammad%20Aklilul%20Hikam"
                className="px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 font-mono text-xs sm:text-sm font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <span>{lang === 'id' ? 'Jadwalkan Diskusi' : 'Book a call'}</span>
                <span>↗</span>
              </a>

              <a
                href="mailto:aklilhikam6@gmail.com"
                className="px-6 py-3 bg-white text-stone-900 hover:bg-stone-100 font-mono text-xs sm:text-sm font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <span>{lang === 'id' ? 'Kirim Email' : 'Email me'}</span>
                <span>→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
