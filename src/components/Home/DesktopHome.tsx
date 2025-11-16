import React from 'react';
import { Heading } from '@/components/Heading/Heading';
import { DesktopImage } from '@/components/ui';
import backgroundImage from '../../../public/background-v2.png';

export const DesktopHome: React.FC = () => {
  return (
    <>
      {/* Desktop: Left Side - Content */}
      <div className="hidden lg:flex flex-[0_0_50%] justify-center items-center">
        <Heading>CODE REROUTE</Heading>
      </div>

      {/* Desktop: Right Side - Image */}
      <DesktopImage
        src={backgroundImage.src}
        alt="Background"
        blurDataURL={backgroundImage.blurDataURL}
        className="lg:flex flex-[0_0_50%]"
        priority
      />
    </>
  );
};
