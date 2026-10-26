import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { instagramData, siteConfig } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function InstagramShowcase() {
  const { lang } = useLanguage();
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="instagram" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/50 border-t-2 border-stone-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase text-blue-casual tracking-widest">
              {lang === 'id' ? 'KREATIF & VISUAL // 6 KONTEN PILIHAN' : 'VISUAL & CREATIVE // 6 CURATED POSTS'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-900 mt-1">
              {lang === 'id' ? 'Galeri Instagram' : 'Instagram Showcase'}
            </h2>
          </div>
          <a
            href="https://www.instagram.com/hikam.182/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-stone-900 rounded-full font-mono text-xs font-bold text-stone-900 shadow-sm hover:bg-stone-50 hover:scale-105 transition-transform"
          >
            <svg className="w-3.5 h-3.5 text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@hikam.182</span>
            <span className="text-blue-casual font-extrabold">↗</span>
          </a>
        </div>

        {/* Subtitle / Note */}
        <p className="text-sm font-mono text-stone-600 mb-8 max-w-2xl">
          {lang === 'id'
            ? 'Koleksi eksplorasi visual, infografis carousel, dan aset branding kreatif. Klik kartu untuk melihat preview langsung atau buka postingan di tab baru.'
            : 'Visual design explorations, educational carousels, and creative branding assets. Click on any card for live preview or open directly in Instagram.'}
        </p>

        {/* Instagram Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border-2 border-stone-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_#1c1917] hover:shadow-[6px_6px_0px_#2563eb] transition-all flex flex-col group"
            >
              {/* Card Top Header */}
              <div className="p-3.5 bg-stone-50 border-b-2 border-stone-900 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block" />
                  <span className="font-bold text-stone-800">POST #{idx + 1}</span>
                </div>
                <span className="text-[11px] text-stone-500 font-semibold">{item.shortcode}</span>
              </div>

              {/* Embedded Live Preview Container */}
              <div className="relative w-full aspect-square bg-stone-100 overflow-hidden flex items-center justify-center border-b-2 border-stone-900">
                <iframe
                  src={`https://www.instagram.com/p/${item.shortcode}/embed`}
                  title={item.title}
                  className="w-full h-full border-0 pointer-events-auto"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 flex items-center justify-between gap-2 mt-auto bg-white">
                <button
                  type="button"
                  onClick={() => setSelectedPost(item)}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-900 rounded-lg text-xs font-mono font-bold text-stone-900 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3 h-3 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <span>{lang === 'id' ? 'Perbesar' : 'Enlarge'}</span>
                </button>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-casual hover:bg-blue-600 text-white rounded-lg text-xs font-mono font-bold transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>{lang === 'id' ? 'Buka di IG' : 'Open in IG'}</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner to see full profile */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white border-2 border-stone-900 rounded-2xl p-6 shadow-[5px_5px_0px_#1c1917] max-w-xl">
            <h3 className="font-display font-extrabold text-xl text-stone-900 mb-2">
              {lang === 'id' ? 'Ingin Melihat Lebih Banyak Konten Visual?' : 'Want to Explore More Visual Content?'}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-stone-600 mb-4">
              {lang === 'id'
                ? 'Kunjungi profil Instagram resmi untuk melihat arsip lengkap desain visual, proyek komunitas, dan update terbaru.'
                : 'Visit the official Instagram profile to discover full visual design archives, community projects, and latest updates.'}
            </p>
            <a
              href="https://www.instagram.com/hikam.182/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-mono text-xs sm:text-sm font-bold rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>{lang === 'id' ? 'Lihat Lainnya di Instagram @hikam.182' : 'Explore More on Instagram @hikam.182'}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enlarged Modal Preview */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-white border-2 border-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 bg-stone-100 border-b-2 border-stone-900 flex items-center justify-between font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-stone-900">
                    PREVIEW · {selectedPost.shortcode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="w-8 h-8 rounded-full bg-white border border-stone-900 flex items-center justify-center font-bold text-sm hover:bg-stone-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content / Iframe */}
              <div className="w-full flex-1 p-2 bg-stone-50 overflow-auto flex items-center justify-center">
                <iframe
                  src={`https://www.instagram.com/p/${selectedPost.shortcode}/embed`}
                  title={selectedPost.title}
                  className="w-full h-[520px] rounded-xl border border-stone-300"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t-2 border-stone-900 flex items-center justify-between">
                <a
                  href={selectedPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-casual hover:bg-blue-600 text-white font-mono text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>{lang === 'id' ? 'Buka Langsung di Instagram' : 'Open Directly in Instagram'}</span>
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-mono text-xs font-bold rounded-xl transition-colors"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
