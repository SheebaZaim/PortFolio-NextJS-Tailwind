"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constant';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-violet-200/95 backdrop-blur-md shadow-lg shadow-purple-200'
        : 'bg-violet-200'
    }`}>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-black text-lg">SZ</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-purple-900 font-bold text-[15px] tracking-wide">Sheeba Zaim</span>
            <span className="text-indigo-600 text-[10px] font-medium tracking-widest uppercase">AI · ECED · EdTech</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className='hidden lg:flex items-center gap-1'>
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className='text-[13px] font-semibold text-purple-900 hover:text-white px-4 py-2 rounded-lg hover:bg-indigo-600 cursor-pointer transition-all duration-200 tracking-wide'
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className='ml-3'>
            <Link
              href="/Contact"
              className='text-[13px] font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 shadow-md shadow-indigo-500/30'
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 text-purple-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-purple-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-purple-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-purple-900 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-violet-50 border-t border-violet-100 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[14px] font-semibold text-purple-900 hover:text-white px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/Contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center text-[14px] font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 rounded-full hover:opacity-90 transition-all"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
