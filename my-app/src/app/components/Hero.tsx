"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-20 py-12 pb-32 md:gap-28 lg:py-20 lg:flex-row overflow-hidden hero-gradient'>

      {/* Background blobs */}
      <span className="absolute top-32 left-10 h-[200px] w-[600px] bg-indigo-400 rounded-full blur-[8rem] opacity-20 -z-10"></span>
      <span className="absolute bottom-10 right-10 h-[180px] w-[400px] bg-amber-300 rounded-full blur-[7rem] opacity-25 -z-10"></span>

      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-indigo-600 text-sm font-semibold">AI Agentic Expert &amp; ECED Specialist</span>
        </div>

        <h4 className='font-semibold text-[18px] text-gray-500'>Hello, I'm</h4>
        <h1 className='font-extrabold text-[48px] lg:text-[64px] bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 bg-clip-text text-transparent leading-tight'>
          Sheeba Zaim
        </h1>
        <h2 className='font-bold text-[22px] lg:text-[28px] text-gray-700 mt-1'>
          <span className='text-indigo-600'>
            <Typewriter
              words={['An Agentic AI Expert', 'A Full Stack Developer', 'A Primary Principal', 'A Curriculum Designer', 'An ECED Specialist']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h2>

        <p className='text-[16px] text-gray-600 max-w-[520px] my-5 leading-relaxed'>
          Dedicated educator and tech professional with 7+ years of academic leadership. Primary Principal, ECED Specialist, and Freelance AI &amp; Full Stack Developer — bridging education and intelligent technology.
        </p>

        {/* Stats */}
        <div className='flex flex-wrap gap-6 my-4'>
          <div className='flex flex-col'>
            <span className='text-2xl font-extrabold text-indigo-600'>7+</span>
            <span className='text-xs text-gray-500'>Years Leadership</span>
          </div>
          <div className='w-px bg-gray-200'></div>
          <div className='flex flex-col'>
            <span className='text-2xl font-extrabold text-teal-600'>365+</span>
            <span className='text-xs text-gray-500'>Students Managed</span>
          </div>
          <div className='w-px bg-gray-200'></div>
          <div className='flex flex-col'>
            <span className='text-2xl font-extrabold text-amber-500'>22+</span>
            <span className='text-xs text-gray-500'>Teachers Mentored</span>
          </div>
        </div>

        <div className='flex flex-row gap-3 py-6'>
          <Button
            type='button'
            title="Download CV"
            icon="/Images/download-icon.jpeg"
            variant='btn_blue'
          />
          <Button
            type='button'
            title='Contact Me'
            icon='/Images/arrow-right.png'
            variant='btn_dark_rounded'
          />
        </div>
      </div>

      {/* Right — Profile Image */}
      <div className='flex flex-1 items-center justify-center lg:justify-end'>
        <div className='relative'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-teal-400 blur-2xl opacity-30 scale-110'></div>
          <div className='relative w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-white shadow-2xl'>
            <Image
              src='/Images/pic.jpg'
              alt='Sheeba Zaim'
              fill
              className='object-cover'
            />
          </div>
          {/* Floating badges */}
          <div className='absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100'>
            <p className='text-xs text-gray-500'>Speciality</p>
            <p className='text-sm font-bold text-indigo-600'>🤖 AI + Education</p>
          </div>
          <div className='absolute -top-4 -right-6 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100'>
            <p className='text-xs text-gray-500'>Location</p>
            <p className='text-sm font-bold text-teal-600'>📍 Karachi, PK</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
