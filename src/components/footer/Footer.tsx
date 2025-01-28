'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          href="/team"
          className={`${styles.link} ${pathname === '/team' ? styles.active : ''}`}
        >
          THE TEAM
        </Link>

        <div className={styles.socialLinks}>
          <Link
            href="https://instagram.com"
            className={styles.link}
          >
            <div className={styles.iconContainer}>
              <Image
                src="/icons/insta.png"
                alt="TikTok"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://facebook.com"
            className={styles.link}
          >
            <div className={styles.iconContainer}>
              <Image
                src="/icons/tiktok.png"
                alt="TikTok"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <span className="sr-only">TikTok</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className={styles.link}
          >
            <div className={styles.iconContainer}>
              <Image
                src="/icons/linkedin.png"
                alt="TikTok"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <Link
          href="/inquiery"
          className={`${styles.link} ${pathname === '/inquiery' ? styles.active : ''}`}
        >
          PRESS INQUIRIES
        </Link>
      </div>
    </footer>
  );
}
