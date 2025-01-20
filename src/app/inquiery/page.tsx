import { Colors } from '@/constants/Colors';
import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CODE REROUTE</h1>
      <div>
        <h1
          className={styles.email}
          style={{ backgroundColor: Colors.Black }}
        >
          hello@coderoute.com
        </h1>
      </div>
    </div>
  );
};

export default page;
