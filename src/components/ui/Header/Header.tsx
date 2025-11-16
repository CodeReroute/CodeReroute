'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { usePathname } from 'next/navigation';

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
          'fixed top-0 left-0 right-0 z-50 w-full lg:w-11/12 mx-auto',
          'px-6 py-6',
          className,
          bgColor
        )}
      >
        <div className="w-full">
          {/* Mobile Menu Button */}
          <div className="flex justify-end w-full lg:hidden">
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
