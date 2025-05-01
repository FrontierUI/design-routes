// import React from 'react';

import { Link } from 'react-router-dom';

const DashboardBanner = () => {
  return (
    <div className="relative w-full h-full max-w-full z-[1]">
      <div
        className="absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center -z-[1] rounded-lg"
        style={{ backgroundImage: 'url(/images/dashBann.svg)' }}
      ></div>
      <div className="flex flex-col p-5 lg:p-10 space-y-5 w-full">
        <div className="flex flex-col font-monaSemibold text-xl md:text-3xl text-white">
          <h2>Experiencing Issues?</h2>
          <h2>Let us know about it</h2>
        </div>
        <Link
          to={'https://koalendar.com/e/meet-with-routes-design'}
          target="_blank"
          className="py-3 bg-white rounded-full text-gray-900 font-monaSemibold text-lg lg:w-1/3 flexy"
        >
          Book a call with a team
        </Link>
      </div>
    </div>
  );
};

export default DashboardBanner;
