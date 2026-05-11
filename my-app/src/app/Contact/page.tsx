import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-gradient-to-br from-indigo-50 via-violet-50 to-amber-50">
    <div className='text-center bold-18 uppercase tracking-[1rem] text-indigo-600 pb-6'>CONTACT</div>
    <h1 className="text-3xl font-semibold mb-2">Get In Touch</h1>
    <p className="text-center text-gray-600 mb-10">Feel free to reach out — I'd love to connect!</p>

    <div className="flex flex-col items-center space-y-6">

      {/* Phone */}
      <div className="flex items-center space-x-3 bg-white rounded-2xl px-8 py-4 shadow-md w-full max-w-sm">
        <Image src="/Images/phone.png" alt="Phone" width={24} height={24} />
        <div>
          <p className='text-xs text-gray-400 uppercase tracking-widest'>Phone</p>
          <a href="tel:+923222715167" className="text-lg font-medium hover:text-indigo-600 transition-colors">
            0322-2715167
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-3 bg-white rounded-2xl px-8 py-4 shadow-md w-full max-w-sm">
        <Image src="/Images/email_icon.png" alt="Email" width={24} height={24} />
        <div>
          <p className='text-xs text-gray-400 uppercase tracking-widest'>Email</p>
          <a href="mailto:sheeba.zaim@gmail.com" className="text-lg font-medium hover:text-indigo-600 transition-colors">
            sheeba.zaim@gmail.com
          </a>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center space-x-3 bg-white rounded-2xl px-8 py-4 shadow-md w-full max-w-sm">
        <Image src="/Images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
        <div>
          <p className='text-xs text-gray-400 uppercase tracking-widest'>LinkedIn</p>
          <Link
            href="https://linkedin.com/in/sheebazaim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-indigo-600 transition-colors"
          >
            linkedin.com/in/sheebazaim
          </Link>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-3 bg-white rounded-2xl px-8 py-4 shadow-md w-full max-w-sm">
        <span className='text-2xl'>📍</span>
        <div>
          <p className='text-xs text-gray-400 uppercase tracking-widest'>Location</p>
          <span className="text-lg font-medium">Karachi, Pakistan</span>
        </div>
      </div>

    </div>
  </div>
);

export default Contact;
