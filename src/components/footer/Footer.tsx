import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import styles from './Footer.module.scss';
import { Colors } from '@/constants/Colors';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          href="/team"
          className={styles.link}
        >
          THE TEAM
        </Link>

        <div className={styles.socialLinks}>
          <Link
            href="https://instagram.com"
            className={styles.link}
          >
            <div className={styles.iconContainer} style={{ backgroundColor: Colors.Cream }}>
              <Instagram className={styles.icon} />
            </div>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://facebook.com"
            className={styles.link}
          >
            <div className={styles.iconContainer} style={{ backgroundColor: Colors.Cream }}>
              <Facebook className={styles.icon} />
            </div>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className={styles.link}
          >
            <div className={styles.iconContainer} style={{ backgroundColor: Colors.Cream }}>
              <Linkedin className={styles.icon} />
            </div>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <Link
          href="/inquiery"
          className={styles.link}
        >
          PRESS INQUIRIES
        </Link>
      </div>
    </footer>
  );
}
