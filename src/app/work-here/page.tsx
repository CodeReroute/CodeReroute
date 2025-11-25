import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui';
import {
  TEAM_MEMBERS,
  getPageContainerStyles,
  contentWrapperStyles,
  teamGridStyles,
  teamImageStyles,
  headingStyles,
} from '@/constants';
import { cn } from '@/components/lib/utils';
import { TeamMember } from '@/types';
// import { OPEN_ROLES } from '@/constants';
// import { OpenRole } from '@/types';
// import Link from 'next/link';
// import { Button } from '@/components/ui';

const page = () => {
  return (
    <div className={getPageContainerStyles('lg')}>
      {/* Image Grid Section */}
      <section
        className="flex flex-1 h-full items-center justify-center"
        aria-label="Team photos"
      >
        <div className={cn('w-full lg:w-fit h-auto', teamGridStyles)}>
          {TEAM_MEMBERS.map((image: TeamMember) => (
            <div
              key={image.name}
              className={teamImageStyles}
            >
              <Image
                src={image.image}
                alt={image.name}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, (max-width: 1280px) 176px, 200px"
                className="object-cover"
                placeholder="blur"
                priority
                blurDataURL={image.blurDataURL ? image.blurDataURL : undefined}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-1 sm:justify-center sm:px-4 lg:px-0">
        <div className={contentWrapperStyles}>
          <Text
            className={headingStyles}
            variant="heading-md"
            as="h1"
          >
            JOIN US
          </Text>

          <Text variant="body-sm">
            We’re on a mission to build powerful restaurant discovery tech.
          </Text>

          <Text variant="body-sm">
            If you are a <strong>problem solver</strong>, an excellent{' '}
            <strong>communicator</strong>, a <br />{' '}
            <strong>logical thinker</strong> and an awesome{' '}
            <strong>team player</strong>, we want to <br /> work with you.
          </Text>

          {/* {OPEN_ROLES.map((role: OpenRole, index: number) => (
            <Link key={index} href={role.roleUrl}>
              <Button variant="mappetizer">{role.title.toUpperCase()}</Button>
            </Link>
          ))} */}

          <Text
            variant="body-sm"
            className="font-normal"
          >
            No open positions at this time.
          </Text>
        </div>
      </section>
    </div>
  );
};

export default page;
