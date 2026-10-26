import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articlesData } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

const ITEMS_PER_PAGE = 6;

export default function ArticlesGrid() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  const countAll = articlesData.length;
  const countX = articlesData.filter((a) => a.platform === 'X').length;
  const countMedium = articlesData.filter((a) => a.platform === 'Medium').length;
  const countKompasiana = articlesData.filter((a) => a.platform === 'Kompasiana').length;

  const filters = [
    { key: 'ALL', label: `ALL (${countAll})` },
    { key: 'X', label: `X / Twitter (${countX})` },
    { key: 'Medium', label: `Medium (${countMedium})` },
    { key: 'Kompasiana', label: `Kompasiana (${countKompasiana})` },
  ];

  const handleFilterChange = (key) => {
    setFilter(key);
    setCurrentPage(1); // Reset to first page when changing filter
  };

  const filteredArticles =
    filter === 'ALL'
      ? articlesData
      : articlesData.filter((a) => a.platform.toLowerCase() === filter.toLowerCase());

  const totalItems = filteredArticles.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById('articles');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="articles" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase text-blue-casual tracking-widest">
              {lang === 'id' ? `TULISAN & RISET // ${countAll} ARTIKEL LENGKAP` : `WRITINGS & ESSAYS // ${countAll} CURATED ARTICLES`}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-stone-900 mt-1">
              {lang === 'id' ? 'Artikel & Opini' : 'Articles & Essays'}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`px-3 py-1.5 rounded-full transition-all border-2 text-xs font-bold ${
                  filter === f.key
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Grid Cards (Paginated 6 per page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[380px]">
          <AnimatePresence mode="wait">
            {paginatedArticles.map((article) => {
              const badgeColor =
                article.platform === 'X'
                  ? 'bg-stone-950 text-white'
                  : article.platform === 'Medium'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-sky-600 text-white';

              return (
                <motion.a
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-white border-2 border-stone-300/90 rounded-2xl hover:border-stone-900 hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${badgeColor}`}>
                        {article.platform}
                      </span>
                      <span className="text-xs font-mono text-stone-400 group-hover:text-blue-casual group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        ↗
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-display font-bold text-stone-900 group-hover:text-blue-casual transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                    {article.views > 0 ? (
                      <span className="flex items-center gap-1 text-stone-600 font-semibold">
                        <span className="text-stone-400">views:</span>
                        <span>{article.views.toLocaleString()}</span>
                      </span>
                    ) : (
                      <span className="text-stone-400">Opini Publik</span>
                    )}

                    <div className="flex items-center space-x-2.5">
                      {article.likes > 0 && (
                        <span className="flex items-center gap-1">
                          <span className="text-stone-400">likes:</span>
                          <span>{article.likes}</span>
                        </span>
                      )}
                      {article.shares > 0 && (
                        <span className="flex items-center gap-1">
                          <span className="text-stone-400">shares:</span>
                          <span>{article.shares}</span>
                        </span>
                      )}
                      <span className="text-blue-casual font-bold group-hover:translate-x-0.5 transition-transform">
                        Baca ↗
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-10 pt-6 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* Status Info */}
            <p className="text-stone-600 font-semibold">
              {lang === 'id'
                ? `Menampilkan ${startIndex + 1} - ${endIndex} dari ${totalItems} artikel`
                : `Showing ${startIndex + 1} - ${endIndex} of ${totalItems} articles`}
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                className="px-3 py-1.5 rounded-lg border-2 border-stone-900 font-bold bg-white text-stone-900 disabled:opacity-40 disabled:pointer-events-none hover:bg-stone-100 transition-colors shadow-sm flex items-center gap-1"
              >
                <span>←</span>
                <span>{lang === 'id' ? 'Sebelumnya' : 'Prev'}</span>
              </button>

              {/* Page Number Pills */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center ${
                      safeCurrentPage === pageNum
                        ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                className="px-3 py-1.5 rounded-lg border-2 border-stone-900 font-bold bg-white text-stone-900 disabled:opacity-40 disabled:pointer-events-none hover:bg-stone-100 transition-colors shadow-sm flex items-center gap-1"
              >
                <span>{lang === 'id' ? 'Selanjutnya' : 'Next'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
