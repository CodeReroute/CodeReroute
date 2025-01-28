import React from 'react';
import styles from './page.module.scss';
import { Colors } from '@/constants/Colors';
import Link from 'next/link';

const page = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div className="flex flex-col-reverse lg:flex-row h-full justify-center items-center">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Link
            href="/work-here/open-roles"
            className={styles.button}
            style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
          >
            APPLY FOR OPEN ROLES
          </Link>
          <Link
            href=""
            className={styles.button}
            style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
          >
            APPLY FOR FUTURE ROLES
          </Link>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className={styles.textContainer}>
            <div>
              <h1
                className={styles.text}
                style={{ backgroundColor: Colors.Black }}
              >
                Work in an exciting atmosphere with a team that makes an impact.
                Fully remote and flexible hours.
              </h1>
            </div>
            <div>
              <h1
                className={styles.text}
                style={{ backgroundColor: Colors.Black }}
              >
                Together, we are focused on building innovative tech and writing
                clean code. We are highly collaborative, self-motivated, and
                constantly curious.
              </h1>
            </div>
            <div>
              <h1
                className={styles.text}
                style={{ backgroundColor: Colors.Black }}
              >
                We value open communication, helping each other with complex
                logic and mentoring each other to be the best
                developers/designers in the industry.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
