'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/components/lib/utils';
import { Navigation } from '../Navigation';
import { NAV_ITEMS, SOCIAL_LINKS, NavItem } from '@/constants';

const socialNavItems: NavItem[] = SOCIAL_LINKS.map(({ href, platform }) => ({
  label: platform.toUpperCase(),
  href,
  external: true,
}));

export interface MobileHeaderProps {
  isOpen: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-[#101010] backdrop-blur-sm transition-all duration-300 lg:hidden',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          'h-full flex flex-col p-6 transform transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-start mb-12 invisible">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <Image
              src="/mappetizer.svg"
              alt="Code Reroute Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 flex flex-col">
          <Navigation
            items={NAV_ITEMS}
            variant="mobile"
            orientation="vertical"
            className="mb-12"
          />

          <nav
            className="mt-14 px-1 flex flex-col space-y-4"
            aria-label="Social media links"
          >
            {socialNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative block w-fit text-base font-semibold text-white hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 py-1">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
