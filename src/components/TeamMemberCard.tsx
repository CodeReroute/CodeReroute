import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from '@/types';
import styles from '../app/team/TeamSection.module.scss';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isMobile: boolean;
  onClick?: () => void;
}

const floatingAnimation = () => ({
  y: [0, -25, 0, -15, 0],
  x: [-15, 10, -8, 15, -15],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
    repeatType: 'mirror' as const,
    delay: Math.random() * 2,
    times: [0, 0.2, 0.5, 0.8, 1],
  },
});

export default function TeamMemberCard({
  member,
  index,
  isMobile,
  onClick,
}: TeamMemberCardProps) {
  const getMarginTop = () => {
    if (isMobile) return '0rem';
    return index % 2 === 0 ? '-13rem' : '10rem';
  };

  return (
    <motion.div
      className={styles.memberCard}
      style={{ marginTop: getMarginTop() }}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <motion.div
          className={styles.imageWrapper}
          animate={floatingAnimation()}
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
  );
}
