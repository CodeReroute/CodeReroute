'use client';
import React from 'react';
import { Button, DesktopImage, MobileImage, Text } from '@/components/ui';
import mappetizerImage from '../../../public/mappetizer-mobile.png';
import Link from 'next/link';

const Mappetizer = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row h-full p-6 lg:p-0">
      {/* Desktop: Left Side - Content */}
      <div className="flex sm:flex-[0_0_50%] pr-6 sm:px-6 lg:px-10">
        <div className="space-y-6 flex flex-col items-start justify-center w-full lg:w-2/3">
          <Text variant="heading-md">DINE OUT</Text>
          <Text variant="body-sm">
            Discover + pin restaurants to your <strong>interactive map</strong>{' '}
            , see where your friends are eating and get{' '}
            <strong>personalized recommendations</strong> from around the world.
          </Text>
          <Link href="https://mappetizer.com">
            <Button variant="mappetizer">VISIT THE SITE</Button>
          </Link>
        </div>
      </div>

      {/* Mobile: Image */}
      <MobileImage src={mappetizerImage} alt="Code Reroute" priority />

      {/* Desktop: Image */}
      <DesktopImage
        src={mappetizerImage}
        alt="Code Reroute"
        className="sm:flex flex-[0_0_50%]"
        priority
      />
    </div>
  );
};

export default Mappetizer;
