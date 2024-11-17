import React from 'react'
import Button from '../Button/Button';
import Navbar from '../components/Navbar';
import Image from 'next/image';
const About=()=>{
    return(
        <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#CCFFFF]">
            <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-600 pb-20'>ABOUT</div>
        <div className='flex flex-col gap-20 md:gap-28 xl:flex-row'>
        <div className="flex-1  flexCenter flex-col m:auto">
        <p className='mb-8'><span className='font-extrabold'>Lorem ipsum</span>dolor sit amet consectetur adipisicing elit. Illum rerum nobis molestias distinctio voluptatibus dolorem in. Accusantium dolorem consequuntur deleniti magnam soluta suscipit? Possimus assumenda magnam blanditiis aliquid voluptate sit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in, nisi reprehenderit est laboriosam commodi exercitationem distinctio corrupti excepturi quod blanditiis incidunt quos labore recusandae, quaerat assumenda delectus consectetur id.</p>
        <Button
        type='button'
        title='Read more'
        icon='/Images/more.png'
        variant='btn_blue_rounded'/>
          
        
        </div>
        </div>
        </section>
       

    )
}
export default About;

