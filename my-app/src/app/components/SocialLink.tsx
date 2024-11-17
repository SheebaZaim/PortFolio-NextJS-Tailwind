// /app/components/SocialLinks.tsx
import Link from 'next/link';
import Image from 'next/image';
import {SOCIAL} from "@/constant";


const SocialLinks = () => {
  return (
    <div className="flex space-x-4  justify-center">
      {SOCIAL.map((social) => (
        <Link
          href={social.href}
          key={social.key}
          target='_blank'
          rel='noopener or noreferrer'
          className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12  border-[0.01rem] border-gray-200 flex justify-center items-center rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all"
        >
          <Image
            src={social.Image}
            alt={social.key}
            width={50}
            height={50}
            className="invert-[100]"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
