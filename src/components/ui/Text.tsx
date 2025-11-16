import React from 'react';
import { cn } from '@/components/lib/utils';

export type TextVariant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'subheading'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'nav-link';

export interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

const variantStyles: Record<TextVariant, string> = {
  'heading-xl': 'text-6xl md:text-8xl font-bold leading-tight tracking-tight',
  'heading-lg': 'text-4xl md:text-6xl font-bold leading-tight tracking-tight',
  'heading-md': 'text-3xl md:text-4xl font-bold leading-tight',
  'heading-sm': 'text-2xl md:text-3xl font-semibold leading-tight',
  subheading: 'text-xl md:text-2xl font-medium leading-relaxed',
  'body-lg': 'text-lg md:text-xl leading-relaxed',
  body: 'text-base md:text-lg leading-relaxed',
  'body-sm': 'text-sm md:text-base leading-relaxed',
  caption: 'text-xs md:text-sm leading-normal',
  'nav-link': 'text-lg md:text-xl font-semibold tracking-wide uppercase',
};

const defaultElements: Record<TextVariant, TextProps['as']> = {
  'heading-xl': 'h1',
  'heading-lg': 'h1',
  'heading-md': 'h2',
  'heading-sm': 'h3',
  subheading: 'h4',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  'nav-link': 'span',
};

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  children,
  className,
  as,
  style,
}) => {
  const Component = (as || defaultElements[variant]) as React.ElementType;

  return React.createElement(
    Component,
    {
      className: cn(variantStyles[variant], className),
      style,
    },
    children
  );
};
