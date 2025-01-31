import styles from './Heading.module.scss';

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};
