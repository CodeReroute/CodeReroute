'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const bgColor = pathname === '/' ? 'lg:bg-[#101010]' : 'bg-[#101010]';

  return (
    <>
      <MobileHeader isOpen={isMobileMenuOpen} />

      <header
        className={cn(
          'relative z-50 w-full',
          'px-4 py-3 lg:py-6 sm:px-6 lg:px-0',
          className,
          bgColor,
        )}
      >
        <div className="w-full">
          {/* Mobile Menu Button */}
          <div className="flex justify-between w-full lg:hidden">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/mappetizer.svg"
                  alt="Code Reroute Logo"
                  width={45}
                  height={45}
                  priority
                />
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <DesktopHeader />
        </div>
      </header>
    </>
  );
};
