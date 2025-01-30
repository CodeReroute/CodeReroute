'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { MobileSidebar } from './MobileHeader';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

            <Link
              href="/tech-company"
              className={`${styles.link} ${pathname === '/tech-company' ? styles.active : ''}`}
            >
              TECH COMPANY
            </Link>
            <div className={styles.middleLink}>
              <Link
                href="/mappetizer"
                className={`${styles.link} ${pathname === '/mappetizer' ? styles.active : ''}`}
              >
                MAPPETIZER
              </Link>
            </div>
            <Link
              href="/work-here"
              className={`${styles.link} ${pathname.startsWith('/work-here') ? styles.active : ''}`}
            >
              WORK HERE
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
