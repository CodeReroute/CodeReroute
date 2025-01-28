'use client';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'TECH COMPANY', href: '/tech-company' },
  { label: 'MAPPETIZER', href: '/mappetizer' },
  { label: 'WORK HERE', href: '/work-here' },
  { label: 'THE TEAM', href: '/team' },
  { label: 'SAY HI', href: '/inquiery' },
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
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 transform bg-[#101010] transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-5">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block w-fit text-xl font-bold text-white "
              onClick={onClose}
            >
              <span className="relative z-10 p-2">{item.label}</span>
              <span
                className={`absolute inset-0 border-[3px] border-white transition-all duration-300 ${
                  pathname === item.href ||
                  (item.href === '/work-here' &&
                    pathname.startsWith('/work-here/')) ||
                  pathname === item.href
                    ? 'inset-[-4px] opacity-100'
                    : 'opacity-0 group-hover:inset-[-4px] group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        <nav className="mt-14 px-1 flex flex-col gap-4">
          {socialNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block w-fit text-xl font-bold text-white"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 py-1">{item.label}</span>
              {/* <span className="absolute inset-0 border-[12px] border-white opacity-0 transition-all duration-300 group-hover:inset-[-8px] group-hover:opacity-100" /> */}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
