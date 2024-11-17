import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from "./SocialLink";
const Footer = () => {
  return (
  <footer>
     <hr className='border-none out-line-none h-[0.01rem] bg-gray-20 y-8'/>
     <div className='text-center mt-10 '>This template is created by Sheeba</div>
     
     <div className=" flex justify center mb-4 px-64 ml-96 mt-5">
      <SocialLinks/>
     </div>
     </footer>
  )
};
export default Footer



