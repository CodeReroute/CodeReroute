'use client';

import { Colors } from '@/constants/Colors';
import Link from 'next/link';
import { OPEN_ROLES } from '@/constants';

const role = OPEN_ROLES[0];

export default function RoleDetails({
  formattedRole,
}: {
  formattedRole: string;
}) {
  return (
    <div className="space-y-8 flex flex-col items-center justify-center">
      <Link
        href=""
        style={{ color: Colors.text.white, fontWeight: 'bold' }}
      >
        {formattedRole.toUpperCase()}
      </Link>

      <div className="space-y-6 text-[18px] text-white w-[350px] lg:w-[500px] text-base px-3 sm:px-0">
        <div className="space-y-2 text-center lg:text-left">
          {Array.isArray(role.initialReview) ? (
            role.initialReview.map((review: string) => (
              <p key={review}>{review}</p>
            ))
          ) : (
            <p>{role.initialReview}</p>
          )}
        </div>

        <ul className="space-y-2 list-disc pl-6">
          {Array.isArray(role.process)
            ? role.process.map((process: string) => (
                <li key={process}>{process}</li>
              ))
            : role.process}
        </ul>
      </div>
    </div>
  );
}
