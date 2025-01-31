import Link from 'next/link';
import Image from 'next/image';
import styles from '../Footer/Footer.module.scss'; // You might want to create a separate styles file

interface SocialLinkProps {
  href: string;
  icon: string;
  platform: string;
}

export default function SocialLink({ href, icon, platform }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className={styles.link}
    >
      <div className={styles.iconContainer}>
        <Image
          src={`/icons/${icon}.png`}
          alt={platform}
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
      <span className="sr-only">{platform}</span>
    </Link>
  );
}
