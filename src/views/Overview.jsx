import React from 'react';

import { Link } from 'react-router-dom';
import DashboardBanner from '@/components/DashboardBanner';

const Overview = () => {
  return (
    <div className="relative w-full h-full overview">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-8 mt-5">
        <DashboardBanner />

        <div className="grid grid-cols-12 grid-flow-col w-full h-full gap-6 mx-auto">
          <div className="md:row-span-3 col-span-12 md:col-span-6 w-full bg-white relative rounded-lg">
            <div className="flexy items-center p-5">
              <h3>dsasd</h3>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 w-full bg-white"></div>
          <div className="col-span-12 md:col-span-6 w-full bg-white"></div>
          <div className="col-span-12 md:col-span-6 w-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
