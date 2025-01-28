import React from 'react';
import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CODE REROUTE</h1>
      <div>
        <h1 className={styles.subtitle}>
          Be among the first app users. Join the waitlist.
        </h1>
      </div>
      <button className={styles.button}>TO THE SITE</button>
    </div>
  );
};

export default page;
