import { Colors } from '@/constants/Colors';
import Link from 'next/link';
import styles from './component.module.scss';

export default function RoleDetails() {
  return (
    <div className="space-y-8 mt-60 md:mt-0 lg:mt-0 flex flex-col items-center justify-center">
      <Link
        href=""
        className={styles.button}
        style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
      >
        APPLY FOR OPEN ROLES
      </Link>

      <div className="space-y-6 text-[18px] text-white w-[350px] lg:w-[500px]">
        <p className="">
          I review all skills as listed by the applicant and decide if they are
          applicable to the position. If they are, great we move to the next
          round. If they aren&apos;t, that&apos;s okay, I just let them know.
        </p>

        <ul className="space-y-2 list-disc pl-6">
          <li>In the next round, I review all portfolios.</li>
          <li>In the next round, I review all portfolios.</li>
          <li>This can range from 75 to 100+ portfolios.</li>
          <li>From that batch, I choose 10-15 that resonate the most.</li>
        </ul>

        <p className="">
          I review all skills as listed by the applicant and decide if they are
          applicable to the position. If they are, great we move to the next
          round. If they are not, that&apos;s okay, I just let them know.
        </p>
      </div>
    </div>
  );
}
