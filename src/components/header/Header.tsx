'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';
import { MobileSidebar } from './MobileHeader';

export default function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: '/tech-agency', label: 'TECH AGENCY', exact: true },
    {
      href: '/mappetizer',
      label: 'MAPPETIZER',
      exact: true,
      className: styles.middleLink,
    },
    { href: '/work-here', label: 'WORK HERE', exact: false },
  ];

  return (
    <>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <nav className={styles.nav}>
        <div className="flex justify-end lg:hidden">
          <Menu
            className="h-10 w-10"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.navLinks}>
            <Link
              href="/"
              className={styles.logo}
            >
              <Image
                src="/mappetizer.svg"
                alt="logo"
                width={45}
                height={45}
              />
            </Link>

            {navLinks.map(({ href, label, exact, className }) => {
              const isActive = exact
                ? pathname === href
                : pathname.startsWith(href);

              return (
                <div
                  key={href}
                  className={className}
                >
                  <Link
                    href={href}
                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
