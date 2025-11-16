'use client';
import React from 'react';
import { Button, DesktopImage, MobileImage, Text } from '@/components/ui';
import { Heading } from '@/components/Heading/Heading';
import mappetizerImage from '../../../public/mappetizer-mobile.png';

const Mappetizer = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row h-full p-6 lg:p-0">
      {/* Desktop: Left Side - Content */}
      <div className="flex sm:flex-[0_0_50%] pr-6 sm:px-6 lg:px-10">
        <div className="space-y-4 flex flex-col items-start justify-center">
          <Heading>DINE OUT</Heading>
          <Text variant="body">
            Discover + pin restaurants to your <strong>interactive map</strong>{' '}
            , see where your friends are eating and get{' '}
            <strong>personalized recommendations</strong> from around the world.
          </Text>
          <Text variant="body">
            Remove the words &apos;where should we eat?&apos; from your
            vocabulary.
          </Text>
          <Button variant="mappetizer">JOIN THE WAITLIST</Button>
        </div>
      </div>

      {/* Mobile: Image */}
      <MobileImage
        src={mappetizerImage.src}
        alt="Code Reroute"
        blurDataURL={mappetizerImage.blurDataURL}
        priority
      />

      {/* Desktop: Image */}
      <DesktopImage
        src={mappetizerImage.src}
        alt="Code Reroute"
        blurDataURL={mappetizerImage.blurDataURL}
        className="sm:flex flex-[0_0_50%]"
        priority
      />
    </div>
  );
};

export default Mappetizer;
