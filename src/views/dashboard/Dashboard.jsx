import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-8">
      <div className="relative w-full h-full">
        <div
          className="absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(/images/dashBann.svg)' }}
        ></div>

        <div className="flex flex-col p-5 lg:p-10 space-y-5 w-full">
          <div className="flex flex-col font-monaMedium text-2xl">
            <h2>Experiencing Issues?</h2>
            <h2>Let us know about it</h2>
          </div>
          <Link
            to={'https://koalendar.com/e/meet-with-routes-design'}
            target="_blank"
            className="py-3 px-5 bg-white rounded-full text-gray-900"
          >
            Book a call with a team
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 grid-flow-col w-full h-full gap-6 mx-auto">
        <div className="md:row-span-3 md:col-span-6 w-full bg-white relative ">
          <div className="flexy items-center p-5">
            <h3>dsasd</h3>
          </div>
        </div>

        <div className="md:col-span-6 w-full bg-white"></div>
        <div className="md:col-span-6 w-full bg-white"></div>
        <div className="md:col-span-6 w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
