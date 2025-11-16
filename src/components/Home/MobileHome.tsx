import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/Heading/Heading';
import backgroundImage from '../../../public/background-v2.png';

export const MobileHome: React.FC = () => {
  return (
    <div className="relative w-full h-full lg:hidden">
      <Image
        src={backgroundImage.src}
        alt="Background"
        fill
        placeholder="blur"
        blurDataURL={backgroundImage.blurDataURL}
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Heading>CODE REROUTE</Heading>
      </div>
    </div>
  );
};
