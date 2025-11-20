import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/components/lib/utils';

export interface DesktopImageProps {
  src: StaticImageData | string;
  alt: string;
  blurDataURL?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export const DesktopImage: React.FC<DesktopImageProps> = ({
  src,
  alt,
  blurDataURL,
  className,
  imageClassName,
  priority = false,
}) => {
  return (
    <div className={cn('hidden h-full relative', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder={typeof src !== 'string' || blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={cn('bg-center bg-cover object-cover py-10', imageClassName)}
        style={{
          boxShadow:
            'rgb(16 16 16 / var(--tw-bg-opacity, 1)) 18px 0px 17px inset',
        }}
        priority={priority}
      />
    </div>
  );
};
