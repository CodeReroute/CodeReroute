import React from 'react';
import { DesktopImage, MobileImage, Text } from '@/components/ui';
import backgroundDesktop from '../../../public/background-v2.png';
import backgroundMobile from '../../../public/background-mobile.png';
import Link from 'next/link';

const TechCompany = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row h-full p-6 lg:p-0">
      {/* Desktop: Left Side - Content */}
      <div className="flex sm:flex-[0_0_50%] sm:px-10">
        <div className="space-y-6 flex flex-col items-start w-full lg:w-2/3 justify-center">
          <Text variant="heading-md">ABOUT US</Text>
          <Text variant="body-sm">
            We&apos;re a fast-paced startup building new tech for{' '}
            <strong>restaurant discovery.</strong>
          </Text>
          <Text variant="body-sm">
            Made in-house and from scratch, mappetizer is transforming the
            restaurant industry and the way we go out to eat.
          </Text>
          <Text variant="body-sm">Launching soon.</Text>
          <Link href="mailto:press@mappetizer.com" className="hover:underline">
            <Text variant="body-sm">press@mappetizer.com</Text>
          </Link>
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
