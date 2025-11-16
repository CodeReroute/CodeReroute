import React from 'react';
import { Heading } from '@/components/Heading/Heading';
import { DesktopImage, MobileImage, Text } from '@/components/ui';
import backgroundDesktop from '../../../public/background-v2.png';
import backgroundMobile from '../../../public/background-mobile.png';

const TechCompany = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row h-full p-6 lg:p-0">
      {/* Desktop: Left Side - Content */}
      <div className="flex sm:flex-[0_0_50%] sm:px-10">
        <div className="space-y-3 flex flex-col items-start justify-center">
          <Heading>ABOUT US</Heading>
          <Text variant="body">
            Hi, we&apos;re the <strong>female-led</strong> tech agency currently
            building mappetizer (the &apos;going out to eat&apos; app).
          </Text>
          <Text variant="body">
            Made in-house and from scratch, mappetizer is a delicious piece of
            tech that is <strong>transforming</strong> the restaurant industry
            and the way we go out to eat.
          </Text>
          <Text variant="body">Launching soon.</Text>
          <Text variant="body">press@mappetizer.com</Text>
        </div>
      </div>

      {/* Mobile: Image */}
      <MobileImage
        src={backgroundMobile.src}
        alt="Code Reroute"
        blurDataURL={backgroundMobile.blurDataURL}
        priority
      />

      {/* Desktop: Image */}
      <DesktopImage
        src={backgroundDesktop.src}
        alt="Code Reroute"
        blurDataURL={backgroundDesktop.blurDataURL}
        className="sm:flex flex-[0_0_50%]"
        priority
      />
    </div>
  );
};

export default TechCompany;
