import React from 'react';

const Dashboard = () => {
  return (
    <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-8">
      <div className="relative w-full h-full">
        <div
          className="absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(/images/dashBann.svg)' }}
        ></div>

        <div className="flex flex-col p-5"></div>
      </div>

      <div className="grid grid-cols-12 grid-flow-col w-full h-full gap-6 mx-auto">
        <div className="md:row-span-3 md:col-span-6 w-full bg-white"></div>
        <div className="md:col-span-6 w-full bg-white"></div>
        <div className="md:col-span-6 w-full bg-white"></div>
        <div className="md:col-span-6 w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
