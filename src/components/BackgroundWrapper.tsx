'use client';

import { usePathname } from 'next/navigation';

export default function Background() {
  const pathname = usePathname();
  const showBackground =
    pathname === '/tech-company' ||
    pathname === '/' ||
    pathname === '/inquiery' ||
    pathname === '/mappetizer';

  if (!showBackground) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div className="flex h-full">
        <div className="w-1/2 bg-[#101010]"></div>
        <div
          className="w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.png)',
          }}
        ></div>
      </div>
    </div>
  );
}
