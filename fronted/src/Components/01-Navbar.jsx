import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme-mode');
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme-mode', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="section-shell pt-4">
        <nav
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled ? 'nav-shell nav-shell-scrolled' : 'nav-shell'
          }`}
        >
          <div className="flex h-[74px] items-center justify-between px-5 md:px-8">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00c2a8] to-[#ff8f3f] font-bold text-[#081218]">
                MK
              </span>
              <div>
                <p className="text-sm text-soft">Portfolio</p>
                <h1 className="text-base font-bold text-[var(--text)]">Mudassir Khan</h1>
              </div>
            </a>

            <ul className="hidden items-center gap-2 lg:flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link rounded-full px-4 py-2 text-sm font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className="theme-toggle grid h-10 w-10 place-items-center rounded-xl border"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FaSun size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FaMoon size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="theme-toggle grid h-10 w-10 place-items-center rounded-xl border lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`nav-shell mt-2 overflow-hidden rounded-2xl border backdrop-blur transition-all duration-300 lg:hidden ${
            menuOpen ? 'max-h-96 p-4 opacity-100' : 'max-h-0 p-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link block rounded-xl px-3 py-2 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
