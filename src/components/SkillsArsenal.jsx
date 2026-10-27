import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategories, aiAgentHighlight } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsArsenal() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categoriesFilter = [
    { key: 'ALL', label: lang === 'id' ? 'SEMUA (8)' : 'ALL (8)' },
    { key: 'security', label: 'Security' },
    { key: 'automation', label: 'Automation' },
    { key: 'coding', label: 'Coding' },
    { key: 'web3', label: 'Web3' },
    { key: 'content-seo', label: 'SEO & Copy' },
    { key: 'infra', label: 'Infra' },
    { key: 'productivity', label: 'Productivity' },
    { key: 'media', label: 'Media' },
  ];

  const filteredCategories =
    activeCategory === 'ALL'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-stone-50/70 border-t-2 border-stone-300">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 text-white font-mono text-xs font-bold rounded-full mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === 'id' ? 'ARSENAL TEKNIS // YANG BISA SAYA KERJAKAN' : 'TECHNICAL TOOLKIT // CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
              {lang === 'id' ? 'Keahlian & Kapabilitas' : 'Skills & Capabilities'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-stone-600 max-w-md">
            {lang === 'id'
              ? 'Daftar kapabilitas teknis teruji mulai dari full-stack dev, web security, otomasi bot multi-akun, hingga eksplorasi AI agent otonom.'
              : 'Battle-tested capabilities spanning full-stack development, security testing, high-throughput bot automation, and autonomous AI agents.'}
          </p>
        </div>

        {/* Spotlight Feature: AI Agent Hermes Exploration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-stone-950 text-white p-6 sm:p-8 lg:p-10 border-2 border-stone-800 shadow-[6px_6px_0px_#1c1917] overflow-hidden"
        >
          {/* Ambient Background Grid Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Status Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="font-bold text-emerald-400 tracking-wider">
                [HERMES_AGENT_ENGINE : ACTIVE]
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold text-[11px] uppercase tracking-wider">
              {aiAgentHighlight.badge}
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="relative z-10 max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight mb-3">
              {lang === 'id' ? aiAgentHighlight.title : aiAgentHighlight.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-body leading-relaxed">
              {lang === 'id' ? aiAgentHighlight.subtitle.id : aiAgentHighlight.subtitle.en}
            </p>
          </div>

          {/* 3 Pillars of Hermes Agent Capabilities */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {aiAgentHighlight.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between space-y-2.5 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-stone-500 font-bold">PILLAR 0{idx + 1}</span>
                  <span className="text-cyan-400 font-bold">/03</span>
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  {cap.title}
                </h4>
                <p className="text-xs text-stone-400 font-body leading-relaxed">
                  {lang === 'id' ? cap.desc.id : cap.desc.en}
                </p>
              </div>
            ))}
          </div>

          {/* Hermes Monospace Tags */}
          <div className="relative z-10 pt-4 border-t border-stone-800/80 flex flex-wrap gap-2">
            {aiAgentHighlight.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-stone-900 border border-stone-700/80 rounded-lg text-xs font-mono font-semibold text-stone-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs pt-2">
          {categoriesFilter.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveCategory(f.key)}
              className={`px-3 py-1.5 rounded-full transition-all border-2 font-bold ${
                activeCategory === f.key
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 8 Technical Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="bg-white border-2 border-stone-900 rounded-2xl p-5 shadow-[4px_4px_0px_#1c1917] hover:shadow-[6px_6px_0px_#2563eb] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Glyph & Badge */}
                  <div className="flex items-center justify-between mb-3 font-mono text-xs">
                    <span
                      className="px-2 py-0.5 rounded font-bold text-white text-[10px]"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.glyph}
                    </span>
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-display font-extrabold text-lg text-stone-900 mb-2 group-hover:text-blue-casual transition-colors">
                    {lang === 'id' ? item.category : item.categoryEn}
                  </h3>

                  {/* Category Description */}
                  <p className="text-xs text-stone-600 font-body leading-relaxed mb-4">
                    {lang === 'id' ? item.description.id : item.description.en}
                  </p>
                </div>

                {/* Skills Tag Pills */}
                <div className="pt-3 border-t border-stone-200/80 flex flex-wrap gap-1.5 mt-auto">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-stone-100 border border-stone-300 rounded-md text-[11px] font-mono font-semibold text-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}