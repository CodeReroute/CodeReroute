'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Background() {
  const pathname = usePathname();
  const showBackground =
    pathname === '/tech-company' ||
    pathname === '/' ||
    pathname === '/inquiery' ||
    pathname === '/mappetizer' ||
    pathname === '/work-here';

  if (!showBackground) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div className="flex h-full">
        {/* Black background - hidden on mobile for tech-company, visible elsewhere */}
        <div
          className={`w-1/2 bg-[#101010] ${
            pathname === '/' ||
            pathname === '/tech-company' ||
            pathname === '/mappetizer' ||
            pathname === '/inquiery'
              ? 'hidden lg:block'
              : 'block'
          }`}
        ></div>
        {/* Image background - hidden on mobile for work-here, visible elsewhere */}
        <div
          className={`w-full lg:w-1/2 relative ${
            pathname.startsWith('/work-here') ? 'hidden lg:block' : 'block'
          }`}
        >
          <Image
            src="/background.png"
            alt="Background"
            fill
            placeholder="blur"
            blurDataURL="/background_optimized.png"
            className="object-cover"
            style={{
              boxShadow:
                'rgb(16 16 16 / var(--tw-bg-opacity, 1)) 18px 0px 17px inset',
            }}
          />
        </div>
      </div>
    </div>
  );
}
