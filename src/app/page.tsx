import { Colors } from '@/constants/Colors';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
        style={{ color: Colors.text.white }}
      >
        CODE REROUTE
      </h1>
    </div>
  );
}
