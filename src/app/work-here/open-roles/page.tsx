import { Colors } from '@/constants/Colors';
import React from 'react';
import styles from './page.module.scss';
import { OPEN_ROLES } from '@/constants';
import Link from 'next/link';
import { OpenRole } from '@/types';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="flex h-full justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          {OPEN_ROLES.map((role: OpenRole, index: number) => (
            <Link
              key={index}
              href={role.roleUrl}
              className={styles.button}
              style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
            >
              {role.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
