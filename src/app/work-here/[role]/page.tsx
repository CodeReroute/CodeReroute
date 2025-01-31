'use client';

import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import RoleDetails from '@/components/RoleDetail/RoleDetail';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const role = params.role as string;

  const formatting = role.split('-');

  const formattedRole = formatting.slice(0, -2).join('-').replace(/-/g, ' ');

  return (
    <div className="w-full h-full mt-[180px] sm:mt-0">
      <div className="flex flex-col lg:flex-row h-full justify-center items-center">
        {/* Left Side */}
        <div className="w-1/2 flex lg:pl-10 flex-col justify-center items-center">
          <div className="flex-1">
            <RoleDetails formattedRole={formattedRole} />
          </div>
        </div>
        {/* Vertical Line */}
        <div className="w-[3px] rounded-full h-[80%] hidden lg:block bg-white mx-8" />
        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex-1 m-10 lg:w-[80%]">
            <ApplicationForm id={role} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
