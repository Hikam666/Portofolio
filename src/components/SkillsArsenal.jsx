import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiAgentHighlight } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsArsenal() {
  const { lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="skills" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-stone-50/70 border-t-2 border-stone-300">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header (Tanpa kata 'Keahlian') */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 text-white font-mono text-xs font-bold rounded-full mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === 'id' ? 'ARSENAL TEKNIS // YANG BISA SAYA KERJAKAN' : 'TECHNICAL ARSENAL // WHAT I CAN BUILD'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
              Exploring AI Agent
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-stone-600 max-w-md">
            {lang === 'id'
              ? 'Eksplorasi orkestrasi agent otonom menggunakan Hermes, otomasi alur kerja multi-tahap, pengujian keamanan PoC, dan otomasi platform terprogram.'
              : 'Autonomous agent orchestration via Hermes, multi-step workflow automation, security PoC scripting, and programmatic system execution.'}
          </p>
        </div>

        {/* Dedicated 2-Column Showcase: Exploring AI Agent with Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-stone-950 text-white p-6 sm:p-8 lg:p-10 border-2 border-stone-800 shadow-[6px_6px_0px_#1c1917] overflow-hidden"
        >
          {/* Ambient Background Grid Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Status Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4 mb-8 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="font-bold text-emerald-400 tracking-wider">
                [HERMES_AGENT_ENGINE : ONLINE]
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold text-[11px] uppercase tracking-wider">
              {aiAgentHighlight.badge}
            </span>
          </div>

          {/* 2-Column Grid: Details on Left, Interactive Screenshot on Right */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: AI Agent Workflow & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-1 block">
                  ORCHESTRATION & RUNTIME
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight mb-3">
                  {lang === 'id' ? aiAgentHighlight.title : aiAgentHighlight.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-body leading-relaxed">
                  {lang === 'id' ? aiAgentHighlight.subtitle.id : aiAgentHighlight.subtitle.en}
                </p>
              </div>

              {/* 3 Pillars of Hermes Agent Capabilities */}
              <div className="space-y-3">
                {aiAgentHighlight.capabilities.map((cap, idx) => (
                  <div
                    key={cap.title}
                    className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between space-y-1.5 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-cyan-400 font-bold">PILLAR 0{idx + 1}</span>
                      <span className="text-stone-500 text-[11px]">AUTONOMOUS SYSTEM</span>
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
              <div className="pt-2 flex flex-wrap gap-2">
                {aiAgentHighlight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900 border border-stone-700/80 rounded-lg text-xs font-mono font-semibold text-stone-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Screenshot Window Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-stone-900 border-2 border-stone-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
                {/* Mockup Header Bar */}
                <div className="p-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] text-stone-400 truncate max-w-[180px]">
                    hermes-agent://rahvana/skills
                  </span>
                  <span className="text-[10px] text-cyan-400 font-bold">[PNG]</span>
                </div>

                {/* Screenshot Image Container */}
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-full bg-stone-950 p-2 cursor-pointer overflow-hidden flex items-center justify-center group-hover:brightness-105 transition-all"
                  title="Klik untuk memperbesar screenshot"
                >
                  <img
                    src={aiAgentHighlight.screenshot}
                    alt="Ringkasan Skill AI Agent Hermes"
                    className="w-full h-auto rounded-lg border border-stone-800 shadow-md object-contain max-h-[420px]"
                  />
                  {/* Subtle Zoom Badge Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 bg-stone-900/90 border border-cyan-400/60 rounded-full font-mono text-xs font-bold text-white shadow flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span>Perbesar Screenshot</span>
                    </span>
                  </div>
                </div>

                {/* Mockup Footer Caption */}
                <div className="p-3 bg-stone-950/90 border-t border-stone-800 flex items-center justify-between font-mono text-[11px] text-stone-400">
                  <span className="truncate max-w-[210px]">Hermes Agent Output Matrix</span>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Zoom</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[11px] font-mono text-stone-400 text-center">
                Snapshot interaksi terminal Hermes AI Agent merangkum matriks kemampuan teknis
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Screenshot Enlarge Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-stone-900 border-2 border-stone-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between font-mono text-xs text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold">HERMES AI AGENT · SNAPSHOT PREVIEW</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 flex items-center justify-center font-bold text-sm text-stone-200 transition-colors"
                  aria-label="Tutup"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image Content */}
              <div className="p-3 bg-stone-950 overflow-auto flex items-center justify-center max-h-[calc(92vh-110px)]">
                <img
                  src={aiAgentHighlight.screenshot}
                  alt="Hermes AI Agent Screenshot Full"
                  className="w-full h-auto object-contain rounded-xl border border-stone-800"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 bg-stone-950 border-t border-stone-800 flex items-center justify-between font-mono text-xs text-stone-400">
                <span>Output Respons Asli Hermes Agent</span>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg font-bold transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}