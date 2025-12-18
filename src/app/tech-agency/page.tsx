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
import styles from '@/components/global.module.scss';

const TechCompany = () => {
  return (
    <div className={pageContainerStyles}>
      {/* Desktop: Image */}
      <DesktopImage
        src={backgroundDesktop}
        alt="Code Reroute"
        className="sm:flex flex-1"
        priority
      />

      {/* Desktop: Right Side - Content */}
      <div className="md:flex md:flex-1 sm:px-10 justify-center">
        <div className={contentWrapperStyles}>
          <Text
            className={headingStyles}
            variant="heading-md"
            as="h1"
          >
            FEMALE-LED TECH AGENCY
          </Text>
          <Text
            variant="body-sm"
            className={styles.mobileText}
          >
            We’re a fast-paced startup building new tech for restaurant
            discovery.
            <div className="h-4" />
            Made in-house and from scratch, our product (mappetizer) is
            transforming the restaurant industry and the way we go out to eat.
          </Text>
          <Link
            href="mailto:danielle@codereroute.com"
            className="hover:underline !mb-3 lg:!mb-0"
          >
            <Text variant="body-sm">danielle@codereroute.com</Text>
          </Link>
        </div>
      </div>
      {/* Mobile: Image */}
      <MobileImage
        src={backgroundMobile}
        height="h-[40vh]"
        alt="Code Reroute"
        priority
      />
    </div>
  );
};

export default TechCompany;
