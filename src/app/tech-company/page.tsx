import React from 'react';
import { DesktopImage, MobileImage, Text } from '@/components/ui';
import backgroundDesktop from '../../../public/background-v2.png';
import backgroundMobile from '../../../public/background-mobile.png';
import Link from 'next/link';
import { contentWrapperStyles, getPageContainerStyles } from '@/constants';

const TechCompany = () => {
  return (
    <div className={getPageContainerStyles('sm')}>
      {/* Mobile: Image */}
      <MobileImage src={backgroundMobile} alt="Code Reroute" priority />

      {/* Desktop: Image */}
      <DesktopImage
        src={backgroundDesktop}
        alt="Code Reroute"
        className="sm:flex flex-1"
        priority
      />

      {/* Desktop: Right Side - Content */}
      <div className="flex flex-1 sm:px-10 justify-center">
        <div className={contentWrapperStyles}>
          <Text className="-mb-5" variant="heading-md" as="h1">
            ABOUT US
          </Text>
          <Text variant="body-sm">
            We&apos;re a fast-paced startup building new tech for <br />
            <strong>restaurant discovery.</strong>
          </Text>
          <Text variant="body-sm">
            Made in-house and from scratch, mappetizer is <br /> transforming
            the restaurant industry and <br /> the way we go out to eat.
          </Text>
          <Text variant="body-sm">Launching soon.</Text>
          <Link href="mailto:press@mappetizer.com" className="hover:underline">
            <Text variant="body-sm">press@mappetizer.com</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechCompany;
