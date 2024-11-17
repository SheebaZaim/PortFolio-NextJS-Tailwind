"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image';
import Button from '../Button/Button'
import Link from 'next/link';
import Navbar from './Navbar';
import Skills from '../Skills/page';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap28 lg:py-20 lg:flex-row'>
<span className="max-container absolute top-44 left-14 h-[144px] w-[777px] bg-blue-600 rounded-full shadow-lg blur-[7rem] -z-20"></span>
    {/* Left */}
    <div className="relative z-20 flex flex-1 flex-col pt-16">
      
    <h4 className=' font-bold text-[20px]'>Hello,</h4>
    <h1 className=' font-bold text-[48px] lg:text-[64px] relative'>I'm Sheeba Zaim</h1>
    <h2 className=' font-bold text-[28px] lg:text-[32px]  capatalize'>A{''}
    <span> <Typewriter
            words={['Full stack developer', 'Programmer', 'Teacher', 'Academic Leader','Curriculum designer!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span>
          </h2>
          <p className='regular-16 max-w-[555px] my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vero autem reprehenderit recusandae quibusdam voluptatibus. Enim odit dicta ut dolorem perspiciatis quis aliquid aliquam autem atque, quaerat molestias, cum quasi.</p>
          <div className='my-5 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_,index)=>(
              <Image src="/Images/1star.jpeg"
              alt="star"
              key={index}
              height={24}
              width={24}
              />

            ))
              }
              </div>
          
          <p className="bold-18 lg:bold-20">500+
            <span className='regular-16 lg:regular-20'>Excellent Reviews</span>
            </p>
    </div>
    <div className='flex flex-row gap-1 py-6'>
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
    <div className='flex flex-1 xl:flexEnd'>
      <Image src='/Images/pic.jpg' alt='bg' width={400} height={200} className='w-auto rounded-full'/>

    </div>
    </section>
  )
}

export default Hero
