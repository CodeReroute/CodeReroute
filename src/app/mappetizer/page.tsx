'use client';
import React from 'react';
import { Button, DesktopImage, MobileImage, Text } from '@/components/ui';
import mappetizerImage from '../../../public/mappetizer-mobile.png';
import Link from 'next/link';
import { pageContainerStyles, contentWrapperStyles } from '@/constants';

const Mappetizer = () => {
  return (
    <div className={pageContainerStyles}>
      {/* Mobile: Image */}
      <MobileImage src={mappetizerImage} alt="Code Reroute" priority />

      {/* Desktop: Image */}
      <DesktopImage
        src={mappetizerImage}
        alt="Code Reroute"
        className="sm:flex flex-1"
        priority
      />

      {/* Desktop: Right Side - Content */}
      <div className="flex flex-1 sm:px-10 justify-center">
        <div className={contentWrapperStyles}>
          <Text variant="heading-md" as="h1" className="-mb-5">
            DINE OUT
          </Text>
          <Text variant="body-sm">
            Discover + pin restaurants to your <strong>interactive map</strong>,
            see <br /> where your friends are eating and get{' '}
            <strong>
              personalized <br /> recommendations
            </strong>{' '}
            from around the world.
          </Text>
          <Link href="https://mappetizer.com">
            <Button variant="mappetizer">VISIT THE SITE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mappetizer;
