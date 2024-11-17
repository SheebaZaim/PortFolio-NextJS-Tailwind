 "use client"
import React, { useState } from 'react';

import Link from 'next/link';
import { NAV_LINKS } from '@/constant';
import Skills from '../Skills/page';
import Image from 'next/image';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='padding-containner relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-4 lg:py-0'>
    <div className='flex justify-between max-w-screen-lg mx-auto'>
         <Link href="/" className="bold-32 Capitalize relative text-xl">
         Sh<span className='text-xl text-blue-700'>eeba</span><span className='absolute top-[-0.3] right-[-1rem] h-5 w-5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full -z-10'></span>
        </Link>
        {/* Hamburger Icon for mobile */}
        <button
          className="lg:hidden block text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3 '>
          {
            NAV_LINKS.map((link)=>(
            <li key={link.key}>
              <Link href={link.href} className='flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>{link.label}
            </Link>
            </li>

            ))
          }
        </ul> 
        </div>
        {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-white py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2">
              <Link
                href={link.href}
                className="text-lg font-medium text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
        </nav>
  )
}

export default Navbar
