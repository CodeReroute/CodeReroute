'use client';
import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import { TextBlock } from '@/components/TextBlock/TextBlock';

const Mappetizer = () => {
  return (
    <div className={styles.container}>
      <div>
        <TextBlock width={{ medium: '440px', large: '480px' }}>
          Join the waitlist.
        </TextBlock>
      </div>
      <Link href="https://www.mappetizer.com/">
        <button className={styles.button}>TO THE SITE</button>
      </Link>
    </div>
  );
};

export default Mappetizer;
