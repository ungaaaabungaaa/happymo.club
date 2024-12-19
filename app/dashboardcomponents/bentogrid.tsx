import React from 'react';
import RevenueCard from './revenue-card';
import DaysCard from './days-card';
import ProgressCard from './progress-card';
import TargetCard from './target-card';
import TeamMembersCard from './followers-card';

const BentoGrid = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      
      <div className="grid h-full w-full gap-4 p-2 rounded-lg
        grid-cols-1 grid-rows-none auto-rows-fr  /* Mobile: single column */
        sm:grid-cols-2                           /* Tablet: 2 columns */
        lg:grid-cols-4 lg:grid-rows-10          /* Desktop: 4 columns */
        ">
        <div 
          className="rounded-lg
            col-span-1 row-span-1                /* Mobile */
            sm:col-span-1 sm:row-span-2         /* Tablet */
            lg:col-span-1 lg:row-span-3         /* Desktop */"
        >
          <RevenueCard />
        </div>

        <div 
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <DaysCard />
        </div>

        <div 
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-2 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <ProgressCard />
        </div>

        <div 
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <TargetCard></TargetCard>
        </div>

        <div 
          className=" rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-4"
        >
          <TeamMembersCard></TeamMembersCard>
        </div>

        <div 
          className="bg-red-200 rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-2 sm:row-span-2
            lg:col-span-3 lg:row-span-4"
        >
          <p>Tomato</p>
        </div>

        <div 
          className="bg-gray-200 rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <p>Tofu</p>
        </div>

        <div 
          className="bg-yellow-100 rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-2 sm:row-span-2
            lg:col-span-2 lg:row-span-3"
        >
          <p>Tempura</p>
        </div>

        <div 
          className="bg-yellow-300 rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <p>Gyoza</p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;