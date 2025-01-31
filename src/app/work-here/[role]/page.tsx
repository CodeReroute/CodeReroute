import React from 'react';
import RoleDetails from '@/components/RoleDetail/RoleDetail';
import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import { OPEN_ROLES_IDS } from '@/constants';

interface PageProps {
  id: string | undefined;
}

export function generateStaticParams() {
  return OPEN_ROLES_IDS.map((id) => ({ id }));
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const { id } = await params;

  if (!id) {
    return <div>No role found</div>;
  }

  const formatting = id.split('-');

  const formattedRole = formatting.slice(0, -2).join('-').replace(/-/g, ' ');

  return (
    <div className="w-full h-full mt-[250px] sm:mt-0">
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
            <ApplicationForm id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
