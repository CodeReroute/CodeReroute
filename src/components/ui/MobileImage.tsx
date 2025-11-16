import React from 'react';
import Image from 'next/image';
import { cn } from '@/components/lib/utils';

export interface MobileImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  height?: string;
}

export const MobileImage: React.FC<MobileImageProps> = ({
  src,
  alt,
  blurDataURL,
  className,
  imageClassName,
  priority = false,
  height = 'h-full',
}) => {
  return (
    <div className={cn('relative w-full sm:hidden', height, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={cn('object-cover object-center', imageClassName)}
        priority={priority}
      />
    </div>
  );
};
