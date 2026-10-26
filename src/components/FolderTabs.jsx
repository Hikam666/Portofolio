import React from 'react';
import { portfolioData } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export default function FolderTabs() {
  const { lang } = useLanguage();

  // 6 Tab horizontal offsets (percentage) so each consecutive tab reveals side-by-side
  // Exactly matching media_1793020057633_2cec310c.png, media_1793020078438_416b6b3f.png, media_1793020091617_fea2db24.png
  const tabPositions = [
    { left: '0%', width: '16%' },
    { left: '16.5%', width: '16%' },
    { left: '33%', width: '16%' },
    { left: '49.5%', width: '16%' },
    { left: '66%', width: '16%' },
    { left: '82.5%', width: '17.5%' },
  ];

  const scrollToCard = (index) => {
    const el = document.getElementById(`project-card-${index}`);
    if (el) {
      const navOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="work" className="w-full relative px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      {/* Section Header (No 'terpilih') */}
      <div className="max-w-5xl mx-auto mb-10">
        <span className="font-mono text-xs font-bold uppercase text-blue-casual tracking-widest">
          {lang === 'id' ? 'STUDI KASUS // ARSIP BERKAS FISIK' : 'CASE STUDIES // ARCHIVED WORKS'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-900 mt-1">
          {lang === 'id' ? 'Proyek' : 'Projects'}
        </h2>
        <p className="text-xs sm:text-sm font-mono text-stone-600 mt-2 max-w-xl">
          {lang === 'id'
            ? 'Arsip berkas bertumpuk bergantian. Gulir ke bawah untuk melihat berkas proyek menumpuk satu per satu, dari IRyS hingga Jejak On-Chain.'
            : 'Interactive sequential folder stack. Scroll down to see project folders stack one by one, from IRyS down to Jejak On-Chain.'}
        </p>
      </div>

      {/* Sequential Stacking Cards Container */}
      <div className="max-w-5xl mx-auto relative pb-8">
        {portfolioData.map((project, idx) => {
          const tabPos = tabPositions[idx] || { left: `${idx * 16.5}%`, width: '16.5%' };

          return (
            <div
              key={project.id}
              id={`project-card-${idx}`}
              className="sticky top-16 sm:top-28 w-full transition-all duration-300"
              style={{
                zIndex: 10 + idx,
                // Every card has the necessary runway to travel all the way to top-16 and stack completely
                marginBottom: '46vh',
              }}
            >
              {/* Tab Header Row for this specific card */}
              <div className="relative h-10 sm:h-11 w-full pointer-events-none -mb-[1px]">
                {/* The Folder Tab itself */}
                <button
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  style={{
                    left: tabPos.left,
                    width: tabPos.width,
                    backgroundColor: project.color,
                  }}
                  className="absolute bottom-0 h-10 sm:h-11 px-1 sm:px-3 text-[10px] sm:text-xs font-mono font-bold uppercase pointer-events-auto rounded-t-xl border-t-2 border-x-2 border-stone-900 text-white shadow-md flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 transition-transform hover:brightness-110 active:scale-95"
                  title={`Buka ${project.title}`}
                >
                  <img
                    src="/images/folder-icon-transparent.png"
                    alt="Folder"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain shrink-0"
                  />
                  <span className="hidden lg:inline tracking-wider truncate">{project.tabLabel}</span>
                  <span className="hidden sm:inline lg:hidden tracking-wider truncate text-[10px]">{project.shortLabel || project.tabLabel}</span>
                  <span className="sm:hidden tracking-wider truncate text-[9px] xs:text-[10px] font-bold">{project.number}</span>
                </button>
              </div>

              {/* Main Folder Document Body */}
              <div
                className="relative w-full rounded-2xl p-4 sm:p-10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 border-stone-900 overflow-hidden min-h-[auto] sm:min-h-[500px] flex flex-col justify-between"
                style={{ backgroundColor: project.color }}
              >
                {/* Subtle Paper Grain Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Folder Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
                  {/* Left Column: Project Details & Case Study Summary */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
                    <div>
                      {/* Case Study Tag with Deployment Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase opacity-90 font-bold">
                          ● {project.title.toUpperCase()} · {lang === 'id' ? 'STUDI KASUS' : 'CASE STUDY'}
                        </span>
                        {project.deployType && (
                          <span className="px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-mono font-bold bg-black/35 border border-white/20 text-white">
                            {project.deployType}
                          </span>
                        )}
                      </div>

                      {/* Bold Headline (owoetoni style) */}
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-3 sm:mb-4 tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-base opacity-95 font-body leading-relaxed max-w-xl text-stone-100">
                        {lang === 'id' ? project.description.id : project.description.en}
                      </p>
                    </div>

                    {/* Tech Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-black/25 backdrop-blur-sm text-[11px] sm:text-xs font-mono font-semibold rounded-full border border-white/20 text-white"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct Case Study Action Link */}
                    <div className="pt-1 sm:pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-base font-mono font-bold tracking-wider underline underline-offset-8 hover:opacity-80 transition-opacity"
                      >
                        <span>
                          {project.isDeployed
                            ? lang === 'id' ? 'BUKA WEBSITE / DEMO' : 'OPEN LIVE WEBSITE'
                            : project.link.includes('github')
                            ? lang === 'id' ? 'LIHAT REPOSITORY GITHUB' : 'VIEW GITHUB REPO'
                            : lang === 'id' ? 'BUKA ARSIP PROYEK' : 'VIEW ARCHIVE'}
                        </span>
                        <span className="text-sm sm:text-lg">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Taped Polaroid Mockup Card (Matches Screenshots 1, 2, 3) */}
                  <div className="lg:col-span-5 flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full max-w-xs sm:max-w-sm bg-white p-2.5 sm:p-4 rounded-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 block cursor-pointer"
                    >
                      {/* Top Masking Tape Strip */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-white/85 backdrop-blur border border-stone-300/60 -rotate-2 shadow-sm pointer-events-none rounded-sm" />

                      {/* Inner Browser / Mockup Window Frame */}
                      <div className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-lg p-3 sm:p-5 min-h-[200px] sm:min-h-[240px] flex flex-col justify-between border border-stone-800 relative overflow-hidden text-left">
                        {/* Ambient Glow */}
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{ backgroundColor: project.color }}
                        />

                        {/* Top Browser Bar (Window Dots + URL Badge) */}
                        <div className="relative z-10 flex items-center justify-between border-b border-stone-800 pb-2 mb-2 sm:mb-3">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80 inline-block" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono text-stone-400 truncate max-w-[140px] sm:max-w-[170px]">
                            {project.link.replace(/^https?:\/\//, '')}
                          </span>
                        </div>

                        {/* Center Visual & Real Image Preview */}
                        <div className="relative z-10 w-full h-28 xs:h-32 sm:h-44 md:h-48 rounded-lg overflow-hidden bg-stone-950 border border-stone-800 my-1 group-hover:scale-[1.02] transition-transform flex items-center justify-center">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-center p-4">
                              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-mono font-extrabold text-white mb-2 border border-white/15">
                                {project.code}
                              </div>
                              <h4 className="font-display font-bold text-sm text-white mb-0.5">
                                {project.title}
                              </h4>
                              <p className="font-mono text-[9px] text-stone-400">
                                {project.category}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Bottom Status / Action Pill */}
                        <div className="relative z-10 mt-2 sm:mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                            <span className="truncate max-w-[120px]">{project.deployType || 'ONLINE'}</span>
                          </span>
                          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/10 group-hover:bg-blue-casual rounded-full border border-white/20 text-[9px] sm:text-[10px] font-mono text-stone-200 group-hover:text-white flex items-center gap-1 transition-colors shrink-0">
                            <span>Periksa</span>
                            <span className="text-amber-400 group-hover:text-white font-bold">⬈</span>
                          </span>
                        </div>
                      </div>

                      {/* Bottom Masking Tape Strip */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-white/80 backdrop-blur border border-stone-300/60 rotate-1 shadow-sm pointer-events-none rounded-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
