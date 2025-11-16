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
  variant = 'desktop',
}) => {
  const pathname = usePathname();

  const containerStyles = cn(
    'flex',
    orientation === 'horizontal'
      ? 'flex-row items-center space-x-8'
      : 'flex-col space-y-2',
    className
  );

  return (
    <nav className={containerStyles}>
      {items.map(({ href, label, exact = true, external = false }) => {
        const isActive = exact ? pathname === href : pathname.startsWith(href);

        const linkStyles = cn(
          'relative pb-0.5 text-xl font-semibold no-underline transition-all duration-300 text-white block',
          // Desktop underline effect
          variant === 'desktop' &&
            'after:content-[""] after:absolute after:w-[98%] after:rounded-[30px] after:h-[3px] after:bottom-[-3px] after:left-[2px] after:bg-current after:opacity-0 after:scale-x-0 after:origin-center after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:opacity-100',
          variant === 'desktop' &&
            isActive &&
            'after:scale-x-100 after:opacity-100',
          // Mobile styling
          variant === 'mobile' && isActive && 'border-2 border-white p-2',
          variant === 'mobile' &&
            'hover:border-2 hover:border-white hover:p-2 border-2 border-transparent p-2 transition-all duration-300'
        );

        return (
          <Link
            key={href}
            href={href}
            className={linkStyles}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            aria-current={isActive ? 'page' : undefined}
          >
            <Text variant="nav-link">
              <span>{label}</span>
            </Text>
          </Link>
        );
      })}
    </nav>
  );
};
