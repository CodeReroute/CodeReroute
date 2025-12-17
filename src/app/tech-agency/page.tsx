import React from 'react';
import { DesktopImage, MobileImage, Text } from '@/components/ui';
import backgroundDesktop from '../../../public/background-v2.png';
import backgroundMobile from '../../../public/background-mobile.png';
import Link from 'next/link';
import {
  contentWrapperStyles,
  headingStyles,
  pageContainerStyles,
} from '@/constants';

const TechCompany = () => {
  return (
    <div className={pageContainerStyles}>
      {/* Mobile: Image */}
      <MobileImage
        src={backgroundMobile}
        height="h-[40vh]"
        alt="Code Reroute"
        priority
      />

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
          <Text
            className={headingStyles}
            variant="heading-md"
            as="h1"
          >
            FEMALE-LED TECH AGENCY
          </Text>
          <Text variant="body-sm">
            We’re a fast-paced startup building new tech for restaurant
            discovery.
            <br />
            <br />
            Made in-house and from scratch, our product (mappetizer) is
            transforming the restaurant industry and the way we go out to eat.
          </Text>
          <Text variant="body-sm">Coming soon.</Text>
          <Link
            href="mailto:danielle@codereroute.com"
            className="hover:underline"
          >
            <Text variant="body-sm">danielle@codereroute.com</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechCompany;
