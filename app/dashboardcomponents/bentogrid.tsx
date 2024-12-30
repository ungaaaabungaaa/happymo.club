import React from "react";
import RevenueCard from "./revenue-card";
import BlankCard2 from "./days-card";
import ProgressCard from "./progress-card";
import TargetCard from "./target-card";
import TeamMembersCard from "./followers-card";
import CompoudingCalculator from "./compounding-calculator";
import LinkCard from "./links-switch";
import BlankCard from "./blankcard";
import TradesCard from "./trades-table";

const BentoGrid = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div
        className="grid h-full w-full gap-4 p-2 rounded-lg
        grid-cols-1 grid-rows-none auto-rows-fr  /* Mobile: single column */
        sm:grid-cols-2                           /* Tablet: 2 columns */
        lg:grid-cols-4 lg:grid-rows-10          /* Desktop: 4 columns */
        "
      >
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
          <BlankCard2 />
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
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-2 sm:row-span-2
            lg:col-span-3 lg:row-span-4"
        >
          <CompoudingCalculator></CompoudingCalculator>
        </div>

        <div
          className=" rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <LinkCard></LinkCard>
        </div>

        <div
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-2 sm:row-span-2
            lg:col-span-2 lg:row-span-3"
        >
          <TradesCard></TradesCard>
        </div>

        <div
          className="rounded-lg flex items-center justify-center
            col-span-1 row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-3"
        >
          <BlankCard></BlankCard>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
