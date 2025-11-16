import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/components/lib/utils';

export interface SocialLinkProps {
  href: string;
  icon: string;
  platform: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const sizeStyles = {
  sm: {
    container: 'w-6 h-6',
    icon: { width: 14, height: 14 },
  },
  md: {
    container: 'w-7 h-7',
    icon: { width: 16, height: 16 },
  },
  lg: {
    container: 'w-8 h-8',
    icon: { width: 18, height: 18 },
  },
};

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  platform,
  className,
  size = 'md',
  onClick,
}) => {
  const { container, icon: iconSize } = sizeStyles[size];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'bg-white hover:scale-125 transition-transform duration-300 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-white/50',
        container,
        className
      )}
      aria-label={`Visit our ${platform} page`}
      onClick={onClick}
    >
      <Image
        src={`/icons/${icon}.png`}
        alt={platform}
        width={iconSize.width}
        height={iconSize.height}
        className="object-contain"
      />
    </Link>
  );
};
