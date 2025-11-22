'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/components/lib/utils';
import { Text } from '@/components/ui/Text';
import { NavItem } from '@/constants';

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'desktop' | 'mobile';
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className,
  orientation = 'horizontal',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'desktop',
}) => {
  const pathname = usePathname();

  const containerStyles = cn(
    'flex',
    orientation === 'horizontal'
      ? 'flex-row items-center space-x-8'
      : 'flex-col space-y-4',
    className,
  );

  return (
    <nav className={containerStyles}>
      {items.map(({ href, label, exact = true, external = false }) => {
        const isActive = exact ? pathname === href : pathname.startsWith(href);

        const linkStyles = cn(
          'inline-block font-semibold no-underline text-white',
          'transition-all duration-300 ease-in-out',
          '!border-0 !border-none !outline-none !shadow-none',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
          '[&:not(:focus-visible)]:ring-0',
          isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100',
          isActive ? '' : 'hover:scale-125',
        );

        return (
          <Link
            key={href}
            href={href}
            className={linkStyles}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            aria-current={isActive ? 'page' : undefined}
          >
            <Text variant="nav-link">{label}</Text>
          </Link>
        );
      })}
    </nav>
  );
};
