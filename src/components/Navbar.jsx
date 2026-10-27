import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: lang === 'id' ? 'Karya' : 'Work', href: '#work' },
    { label: lang === 'id' ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: lang === 'id' ? 'Keahlian' : 'Skills', href: '#skills' },
    { label: lang === 'id' ? 'Artikel' : 'Articles', href: '#articles' },
    { label: lang === 'id' ? 'Instagram' : 'Instagram', href: '#instagram' },
    { label: lang === 'id' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left Pill: Avatar + Full Name (Gambar 2 Style) */}
        <a
          href="#home"
          className="bg-white border-2 border-stone-900 rounded-full px-3 py-1.5 flex items-center gap-2.5 shadow-sm hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-stone-900 bg-stone-200 shrink-0">
            <img
              src="/images/profile.jpg"
              alt="Hikam"
              className="w-full h-full object-cover object-[center_52%]"
            />
          </div>
          <span className="font-display font-bold text-xs sm:text-sm text-stone-900 tracking-tight whitespace-nowrap">
            <span className="hidden sm:inline">Muhammad Aklilul Hikam</span>
            <span className="sm:hidden">M. Aklilul Hikam</span>
          </span>
        </a>

        {/* Center Pill: Navigation Menu (Gambar 2 Style) */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 bg-white border-2 border-stone-900 rounded-full px-5 py-2 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-display font-medium text-stone-800 hover:text-blue-casual transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Group: Language Switcher + Email Button (Gambar 2 Style) */}
        <div className="flex items-center gap-2">
          {/* Language Switch Button (ID / EN) */}
          <button
            onClick={toggleLang}
            className="bg-white border-2 border-stone-900 rounded-full px-3 py-1.5 text-xs font-mono font-bold text-stone-900 shadow-sm hover:bg-stone-100 transition-colors flex items-center gap-1.5"
            title="Ganti Bahasa / Switch Language"
            aria-label="Switch Language"
          >
            <svg className="w-3.5 h-3.5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className={lang === 'id' ? 'text-blue-casual font-extrabold' : 'text-stone-400'}>ID</span>
            <span className="text-stone-300">|</span>
            <span className={lang === 'en' ? 'text-blue-casual font-extrabold' : 'text-stone-400'}>EN</span>
          </button>

          {/* Email Pill Button */}
          <a
            href="mailto:aklilhikam6@gmail.com"
            className="hidden sm:flex bg-stone-950 text-white hover:bg-blue-casual rounded-full px-4 sm:px-5 py-2 text-xs font-mono font-semibold transition-colors shadow-sm items-center gap-2"
          >
            <span>aklilhikam6@gmail.com</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden bg-white border-2 border-stone-900 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-sm active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white border-2 border-stone-900 rounded-2xl p-4 shadow-xl flex flex-col gap-2 font-display text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-stone-100 font-semibold text-stone-900 flex justify-between items-center active:bg-stone-200 transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-stone-400">→</span>
            </a>
          ))}
          <a
            href="mailto:aklilhikam6@gmail.com"
            className="mt-2 text-center py-2.5 bg-stone-900 text-white rounded-xl font-mono text-xs font-bold active:bg-stone-800 transition-colors"
          >
            aklilhikam6@gmail.com
          </a>
        </div>
      )}
    </header>
  );
}
