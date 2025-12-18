import React from 'react';
import { DesktopImage, Text } from '@/components/ui';
import backgroundImage from '../../../public/background-v2.png';

export const DesktopHome: React.FC = () => {
  return (
    <>
      {/* Desktop: Left Side - Content */}
      <div className="hidden lg:flex flex-[0_0_50%] justify-center items-center">
        <Text variant="heading-lg">CODE REROUTE</Text>
      </div>

      {/* Desktop: Right Side - Image */}
      <DesktopImage
        src={backgroundImage}
        alt="Background"
        className="w-full lg:flex flex-[0_0_50%]"
        imageClassName="object-cover w-full h-full"
        priority
      />
    </>
  );
};
