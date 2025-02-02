import React from 'react';
import styles from './page.module.scss';
import { Heading } from '@/components/Heading/Heading';
import { TextBlock } from '@/components/TextBlock/TextBlock';

const page = () => {
  return (
    <div className={styles.container}>
      <Heading>CODE REROUTE</Heading>
      <div>
        <TextBlock width={{ medium: '260px', large: '300px' }}>
          <a href="mailto:press@codereroute.com">press@codereroute.com</a>
        </TextBlock>
      </div>
    </div>
  );
};

export default page;
