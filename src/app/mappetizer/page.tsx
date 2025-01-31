'use client';
import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CODE REROUTE</h1>
      <div>
        <h1 className={styles.subtitle}>
          Be among the first app users. Join the waitlist.
        </h1>
      </div>
      <Link href="https://www.mappetizer.com/">
        <button className={styles.button}>TO THE SITE</button>
      </Link>
    </div>
  );
};

export default Page;
