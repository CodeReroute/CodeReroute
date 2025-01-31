import React from 'react';
import styles from './page.module.scss';
import { Heading } from '@/components/Heading/Heading';
import { TextBlock } from '@/components/TextBlock/TextBlock';

const TechCompany = () => {
  return (
    <div className={styles.container}>
      <Heading>CODE REROUTE</Heading>
      <TextBlock>
        Hi, we&apos;re a female-led tech company building the world&apos;s
        biggest restaurant app called mappetizer. We&apos;re nerdy, cool and
        mega-talented.
      </TextBlock>
    </div>
  );
};

export default TechCompany;
