'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.scss';
import SocialLink from '../SocialLink/SocialLink';
import { SOCIAL_LINKS } from '@/constants';
import { SocialLink as SocialLinkType } from '@/types';
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
          {SOCIAL_LINKS.map((link: SocialLinkType) => (
            <SocialLink
              key={link.platform}
              {...link}
            />
          ))}
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
