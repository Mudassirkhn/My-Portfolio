import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'My Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black border-b border-white shadow-md' : 'bg-black bg-opacity-0 backdrop-blur-md'
      }`}
    >
      <div className="h-[15vh] flex items-center justify-between px-5 lg:px-20">
        {/* Logo */}
        <h1 className="text-white font-semibold text-2xl">
          Mudassir Khan<span className="text-pink-700 font-extrabold text-4xl"></span>
        </h1>

        {/* Desktop Links (border styling untouched) */}
        <ul className={`hidden lg:flex space-x-6 text-white font-semibold rounded-2xl px-10 py-3 gap-4 transition-all duration-300 ${
          scrolled ? '' : 'border border-white'
        }`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-400 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white text-2xl focus:outline-none">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-start pl-8 space-y-6 text-white">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
