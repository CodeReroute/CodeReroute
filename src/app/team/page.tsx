'use client';

import { useState, useEffect } from 'react';
import { TEAM_MEMBERS } from '@/constants';
import { TeamMember } from '@/types';
import { Colors } from '@/constants/Colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { floatingAnimation } from '@/lib/animations';
import styles from './TeamSection.module.scss';

export default function TeamSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMarginTop = (index: number) => {
    if (windowWidth <= 1024) {
      // mobile devices
      return '0rem';
    }
    return index % 2 === 0 ? '-13rem' : '10rem';
  };

  return (
    <div
      className={styles.section}
      style={{ backgroundColor: Colors.Black }}
    >
      {/* <div className={styles.container}></div> */}
      <div className={styles.grid}>
        {TEAM_MEMBERS.map((member: TeamMember, index: number) => (
          <motion.div
            key={member.name}
            className={styles.memberCard}
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            custom={index}
            style={{
              marginTop: getMarginTop(index),
            }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  alt={`${member.name}'s avatar`}
                  className={styles.image}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
