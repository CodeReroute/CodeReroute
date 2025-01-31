import React from 'react';
import styles from './TextBlock.module.scss';

interface TextBlockProps {
  children: React.ReactNode;
  lineHeight?: string | number;
  width?: {
    medium?: string | number;
    large?: string | number;
  };
}

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  lineHeight = '1.3',
  width,
}) => {
  return (
    <div
      className={styles.textContainer}
      style={
        {
          '--medium-width': width?.medium ?? '670px',
          '--large-width': width?.large ?? '700px',
        } as React.CSSProperties
      }
    >
      <h1
        className={styles.text}
        style={{ lineHeight }}
      >
        {children}
      </h1>
    </div>
  );
};
