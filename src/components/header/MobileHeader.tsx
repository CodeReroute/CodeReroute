'use client';
import Link from 'next/link';
import { X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'WORK HERE', href: '/work' },
  { label: 'THE TEAM', href: '/team' },
  { label: 'SAY HI', href: '/contact' },
];

const socialNavItems: NavItem[] = [
  { label: 'INSTAGRAM', href: 'https://instagram.com' },
  { label: 'LINKEDIN', href: 'https://linkedin.com' },
  { label: 'TIKTOK', href: 'https://tiktok.com' },
];

export function MobileSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transform bg-black transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            MAPPETIZER
          </Link>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav className="mt-16 space-y-8">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-3xl font-bold text-white hover:text-gray-300"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="mt-auto space-y-8 pb-8">
          {socialNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-2xl font-bold text-white hover:text-gray-300"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
