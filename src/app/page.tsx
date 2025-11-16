import React from 'react';
import { MobileHome, DesktopHome } from '@/components/Home';

export default function Home() {
  return (
    <div className="relative flex flex-col lg:flex-row h-full">
      <MobileHome />
      <DesktopHome />
    </div>
  );
}
