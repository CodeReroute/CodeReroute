'use client';

import { useState, useEffect } from 'react';
import { TEAM_MEMBERS } from '@/constants';
import { TeamMember } from '@/types';
import { Colors } from '@/constants/Colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
            style={{
              marginTop: getMarginTop(index),
            }}
          >
            <div className={styles.imageContainer}>
              <motion.div
                className={styles.imageWrapper}
                animate={{
                  y: [0, -15, 0, -8, 0],
                  x: [-8, 5, -3, 8, -8],
                  transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror',
                    delay: Math.random() * 2,
                    times: [0, 0.2, 0.5, 0.8, 1],
                  },
                }}
              >
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  alt={`${member.name}'s avatar`}
                  className={styles.image}
                />
              </motion.div>
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
