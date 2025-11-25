'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/ui';
import { cn } from '@/components/lib/utils';

interface RootShellProps {
  children: React.ReactNode;
}

export const RootShell: React.FC<RootShellProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <div
        className={cn(
          'min-h-[100svh] h-[100svh] flex-col bg-cover bg-center bg-fixed relative z-10 w-full lg:w-11/12 mx-auto',
          isHome ? 'hidden lg:flex' : 'flex',
        )}
      >
        <Header />
        <main className="flex-1 overflow-hidden ">{children}</main>
      </div>
      {isHome && <div className="lg:hidden h-[100svh] w-full">{children}</div>}
    </>
  );
};
