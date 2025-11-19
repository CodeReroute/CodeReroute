import React from 'react';
import { DesktopImage, Text } from '@/components/ui';
import backgroundImage from '../../../public/background-v2.png';

export const DesktopHome: React.FC = () => {
  return (
    <>
      {/* Desktop: Left Side - Content */}
      <div className="hidden lg:flex flex-[0_0_50%] justify-center items-center">
        <Text variant="heading-md">CODE REROUTE</Text>
      </div>

      {/* Desktop: Right Side - Image */}
      <DesktopImage
        src={backgroundImage}
        alt="Background"
        className="lg:flex flex-[0_0_50%]"
        priority
      />
    </>
  );
};
