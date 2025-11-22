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
      <MobileImage
        src={mappetizerImage}
        alt="Code Reroute"
        priority
      />

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
          <Text
            variant="heading-md"
            as="h1"
            className="-mb-5"
          >
            DINE OUT
          </Text>
          <Text variant="body-sm">
            ‘Going out to eat’ requires fragmented steps—saving a restaurant on
            social media, to googling the menu; reading unreliable online
            reviews to sending a link to the group chat and then making a
            reservation.
            <br />
            <br />
            It’s annoying figuring out <strong>where</strong> to eat.
            <br />
            <br />
            So, we built powerful <strong>restaurant discovery</strong> tech and
            streamlined the dining out process.
            <br />
            <br />
            Simply open the app, type in what you want to eat and our tech does
            the rest.
          </Text>
          <Link
            target="_blank"
            href="https://mappetizer.com"
          >
            <Button
              variant="outline"
              className="p-5"
            >
              VISIT THE SITE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mappetizer;
