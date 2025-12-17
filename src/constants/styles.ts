import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/components/lib/utils';

/**
 * =============================================================================
 * PAGE CONTAINER STYLES
 * =============================================================================
 * Page container with responsive flex direction breakpoints
 */
export const pageContainerVariants = cva(
  // Base styles
  cn(
    'relative flex flex-col h-full',
    'px-4 py-3 sm:px-6',
    'pb-5 lg:p-0',
    'gap-3 lg:gap-0',
    'overflow-auto lg:overflow-hidden',
  ),
  {
    variants: {
      flexBreakpoint: {
        sm: 'sm:flex-row',
        lg: 'lg:flex-row',
      },
    },
    defaultVariants: {
      flexBreakpoint: 'sm',
    },
  },
);

export type PageContainerVariants = VariantProps<typeof pageContainerVariants>;

/**
 * Get page container styles with specific flex breakpoint
 * @param flexBreakpoint - Breakpoint at which flex direction changes to row ('sm' | 'lg')
 * @returns Computed className string
 */
export const getPageContainerStyles = (flexBreakpoint: 'sm' | 'lg' = 'sm') => {
  return pageContainerVariants({ flexBreakpoint });
};

/**
 * Default page container styles (sm breakpoint)
 */
export const pageContainerStyles = getPageContainerStyles('sm');

/**
 * =============================================================================
 * CONTENT WRAPPER STYLES
 * =============================================================================
 * Text content sections with consistent spacing
 */
export const contentWrapperStyles = cn(
  'space-y-4 sm:space-y-6',
  'flex flex-col items-start lg:justify-center',
  'w-full lg:w-2/3',
);

/**
 * =============================================================================
 * TEAM MEMBER STYLES
 * =============================================================================
 */

/**
 * Team member grid - responsive grid layout
 */
export const teamGridStyles = cn(
  // Grid layout
  'grid place-items-center',
  // Responsive columns
  'grid-cols-[repeat(auto-fit,minmax(100px,1fr))]',
  'sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]',
  'md:grid-cols-[repeat(auto-fit,minmax(165px,1fr))]',
  'lg:grid-cols-3',
  // Gaps
  'gap-3 sm:gap-5 2xl:gap-10',
  // Overflow
  'lg:overflow-hidden',
);

/**
 * Team member image - circular profile images with responsive sizing
 */
export const teamImageStyles = cn(
  // Shape
  'aspect-square relative rounded-full overflow-hidden',
  // Mobile sizes
  'w-24 h-24',
  'sm:w-36 sm:h-36',
  // Desktop sizes
  'lg:w-44 lg:h-44',
  'xl:w-50 xl:h-50',
);

export const headingStyles = 'mt-5 lg:-mb-5 lg:mt-0';
