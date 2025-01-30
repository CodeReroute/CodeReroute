import { Colors } from '@/constants/Colors';
import React from 'react';
import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CODE REROUTE</h1>
      <div className={styles.textContainer}>
        <h1
          className={styles.text}
          style={{ backgroundColor: Colors.Black, lineHeight: '2' }}
        >
          Hi, we&apos;re a female-led tech company building the world&apos;s
          biggest restaurant app called mappetizer. We&apos;re nerdy, cool and
          mega-talented.
        </h1>
      </div>
    </div>
  );
};

export default page;
