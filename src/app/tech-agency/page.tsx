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
      <MobileImage
        src={backgroundMobile}
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
            className="-mb-5"
            variant="heading-md"
            as="h1"
          >
            ABOUT US
          </Text>
          <Text variant="body-sm">
            A female-led tech agency currently building mappetizer. The ‘going
            out to eat’ app.
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
