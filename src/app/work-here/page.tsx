import React from 'react';
import styles from './page.module.scss';
import { TextBlock } from '@/components/TextBlock/TextBlock';

const page = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div className="flex flex-col-reverse lg:flex-row h-full justify-center items-center">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          {/*  {OPEN_ROLES.map((role: OpenRole, index: number) => (
            <Link
              key={index}
              href={role.roleUrl}
              className={styles.button}
              style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
            >
              {role.title.toUpperCase()}
            </Link>
          ))} */}
          {/* add a white text that No open positions at this time */}
          <div className="text-white lg:text-xl font-bold">
            No open positions at this time
          </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className={styles.textContainer}>
            <div>
              <TextBlock width={{ medium: '350px', large: '538px' }}>
                Work in an exciting atmosphere with a team that makes an impact.
                Fully remote and flexible hours.
              </TextBlock>
            </div>
            <div>
              <TextBlock width={{ medium: '350px', large: '533px' }}>
                Together, we are focused on building innovative tech and writing
                clean code. We are highly collaborative, self-motivated, and
                constantly curious.
              </TextBlock>
            </div>
            <div>
              <TextBlock width={{ medium: '350px', large: '533px' }}>
                We value open communication, helping each other with complex
                logic and mentoring each other to be the best
                developers/designers in the industry.
              </TextBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
