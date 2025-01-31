'use client';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.scss';

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
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/code_reroute/' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/code-reroute/' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/@mappetizer' },
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
          <Link
            href="/"
            className={styles.logo}
            onClick={onClose}
          >
            <Image
              src="/mappetizer.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <X className="h-10 w-10" />
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
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
