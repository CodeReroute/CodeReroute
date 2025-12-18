'use client';
import React from 'react';
import { Button, DesktopImage, MobileImage, Text } from '@/components/ui';
import mappetizerImage from '../../../public/mappetizer-mobile.png';
import Link from 'next/link';
import {
  pageContainerStyles,
  contentWrapperStyles,
  headingStyles,
} from '@/constants';
import styles from '@/components/global.module.scss';

const Content = () => {
  // Desktop: Right Side - Content
  return (
    <div className="flex flex-1 sm:px-10 justify-center">
      <div className={contentWrapperStyles}>
        <Text
          variant="heading-md"
          as="h1"
          className={headingStyles}
        >
          DINING OUT IS DRY
        </Text>
        <Text
          variant="body-sm"
          className={styles.mobileText}
        >
          It’s true.
          <div className="h-2" />
          Restaurants are reporting less in-person dining, so we made it our
          mission to fix that.
          <div className="h-2" />
          We built a powerful AI search experience— pulling data from local
          activity and the friends you follow.
          <div className="h-2" />
          The outcome? Recommendations that are personal. It’s word-of-mouth but
          better.
          <div className="h-2" />
          Next, we centralized and improved all ‘going out to eat’ steps so we
          can discover, save, plan and go.
          <div className="h-2" />
          Then, we integrated a mapping system to track visited restaurants and
          to save new spots for next time.
          <div className="h-2" />
          Simply open the app, type in what you want to eat and our tech does
          the rest.
        </Text>
        <Link
          target="_blank"
          href="https://mappetizer.com"
          className="!mt-5"
        >
          <Button
            variant="outline"
            className="p-5 mb-5"
          >
            COMING SOON
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Mappetizer = () => {
  return (
    <div className={pageContainerStyles}>
      {/* Desktop: Image */}
      <DesktopImage
        src={mappetizerImage}
        alt="mappetizer"
        className="sm:flex flex-1"
        priority
      />
      <Content />
      {/* Mobile: Image */}
      <MobileImage
        src={mappetizerImage}
        height="h-[40vh] flex-none"
        alt="mappetizer"
        priority
      />
    </div>
  );
};

export default Mappetizer;
