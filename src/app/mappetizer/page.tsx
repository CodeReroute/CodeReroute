import { Colors } from '@/constants/Colors';
import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CODE REROUTE</h1>
      <div>
        <h1 className={styles.subtitle}>
          Be among the first app users. Join the waitlist.
        </h1>
      </div>
      <button
        className={styles.button}
        style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
      >
        TO THE SITE
      </button>
    </div>
  );
};

export default page;
