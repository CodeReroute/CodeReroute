import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '../Navigation';
import { SocialLink } from '../SocialLink';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/constants';

export interface DesktopHeaderProps {
  className?: string;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = () => {
  return (
    <div className="hidden lg:block w-full">
      <div className="flex items-center justify-between w-full mx-auto">
        <div className="flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/mappetizer.svg"
              alt="Code Reroute Logo"
              width={45}
              height={45}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Navigation items={NAV_ITEMS} variant="desktop" className="" />
          <div className="flex items-center space-x-2">
            {SOCIAL_LINKS.map(({ href, icon, platform }) => (
              <SocialLink
                key={href}
                href={href}
                icon={icon}
                platform={platform}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
