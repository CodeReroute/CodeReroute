import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui';
import { TEAM_MEMBERS } from '@/constants';
import { cn } from '@/components/lib/utils';
import { TeamMember } from '@/types';
// import { OPEN_ROLES } from '@/constants';
// import { OpenRole } from '@/types';
// import Link from 'next/link';
// import { Button } from '@/components/ui';

const gridStyles = cn(
  'grid  place-items-center',
  // Below lg breakpoint
  'grid-cols-[repeat(auto-fit,minmax(100px,1fr))]',
  'sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]',
  'md:grid-cols-[repeat(auto-fit,minmax(165px,1fr))]',
  'gap-3 sm:gap-5',
  // lg breakpoint and above
  'lg:grid-cols-3 lg:overflow-hidden',
  '2xl:gap-10'
);

const imageStyles = cn(
  'aspect-square relative rounded-full overflow-hidden',
  // Below lg breakpoint
  'w-24 h-24',
  'sm:w-36 sm:h-36',
  // lg breakpoint and above
  'lg:w-44 lg:h-44',
  'xl:w-50 xl:h-50'
);

const page = () => {
  return (
    <div className="relative place flex flex-col-reverse lg:flex-row h-full p-6 lg:p-0 overflow-hidden">
      {/* Content Section */}
      <section className="flex flex-[0_0_40%] lg:flex-[0_0_45%] sm:px-10">
        <div className="space-y-6 flex flex-col items-start w-full lg:w-2/3 justify-center">
          <Text variant="heading-md" as="h1">
            JOIN US
          </Text>

          <Text variant="body-sm">
            We&apos;re a fast-paced startup with a <strong>mission</strong> to
            build the world&apos;s biggest restaurant app.
          </Text>

          <Text variant="body-sm">
            If you are a <strong>problem solver</strong>, an excellent{' '}
            <strong>communicator</strong>, a <strong>logical thinker</strong>{' '}
            and an awesome <strong>team player</strong>, we want to work with
            you.
          </Text>

          {/* {OPEN_ROLES.map((role: OpenRole, index: number) => (
            <Link key={index} href={role.roleUrl}>
              <Button variant="mappetizer">{role.title.toUpperCase()}</Button>
            </Link>
          ))} */}

          <Text variant="body-sm">No open positions at this time</Text>
        </div>
      </section>

      {/* Image Grid Section */}
      <section
        className="flex flex-1 h-full items-center justify-center"
        aria-label="Team photos"
      >
        <div
          className={cn('w-full lg:w-fit h-fit sm:h-full lg:h-fit', gridStyles)}
        >
          {TEAM_MEMBERS.map((image: TeamMember) => (
            <div key={image.name} className={imageStyles}>
              <Image
                src={image.image}
                alt={image.name}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, (max-width: 1280px) 176px, 200px"
                className="object-cover"
                placeholder="blur"
                priority
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
