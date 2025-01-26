import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import RoleDetails from '@/components/RoleDetail/RoleDetail';
import React from 'react';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row h-full justify-center items-center">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex-1">
            <RoleDetails />
          </div>
        </div>
        {/* Vertical Line */}
        <div className="w-px h-[80%] hidden lg:block bg-white/20 mx-8" />
        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex-1 m-10 lg:w-[80%]">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
