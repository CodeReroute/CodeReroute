import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui';
import backgroundImage from '../../../public/background-v2.png';

export const MobileHome: React.FC = () => {
  return (
    <div className="relative w-full h-full lg:hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        placeholder="blur"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Text variant="heading-md">CODE REROUTE</Text>
      </div>
    </div>
  );
};
