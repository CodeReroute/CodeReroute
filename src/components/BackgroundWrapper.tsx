'use client';

import { usePathname } from 'next/navigation';

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
            pathname === '/tech-company' ||
            pathname === '/mappetizer' ||
            pathname === '/inquiery'
              ? 'hidden lg:block'
              : 'block'
          }`}
        ></div>
        {/* Image background - hidden on mobile for work-here, visible elsewhere */}
        <div
          className={`w-full lg:w-1/2 bg-cover bg-center bg-no-repeat ${
            pathname.startsWith('/work-here') ? 'hidden lg:block' : 'block'
          }`}
          style={{
            backgroundImage: 'url(/background.png)',
          }}
        ></div>
      </div>
    </div>
  );
}
