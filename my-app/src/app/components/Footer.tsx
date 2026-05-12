import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-violet-200 py-6 border-t border-violet-100">
      <div className="flex items-center justify-center gap-4">

        <Link
          href="https://github.com/SheebaZaim"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white border border-purple-200 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200"
        >
          <Image src="/Images/github.png" alt="GitHub" width={20} height={20} className="opacity-70 group-hover:invert" />
        </Link>

        <Link
          href="https://linkedin.com/in/sheebazaim"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white border border-purple-200 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200"
        >
          <Image src="/Images/linkedin-icon.png" alt="LinkedIn" width={20} height={20} className="opacity-70 group-hover:invert" />
        </Link>

      </div>
    </footer>
  )
}

export default Footer
