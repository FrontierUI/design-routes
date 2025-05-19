// import React from 'react';
import { homeServiceDetails } from '@/contentData/utils';
import LazyImage from './LazyImage';

const WorkEthics = () => {
  return (
    <div className="flexy w-full h-full relative px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-5 gap-y-5">
        {homeServiceDetails.map((servic) => (
          <div
            key={servic.id}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg leading-none">
              {/* <img src={servic.icon} className="img-fluid" width={48} alt="" /> */}
              <LazyImage
                src={servic.icon}
                className="img-fluid"
                width={48}
                alt=""
              />
              <div className="flex flex-col space-y-2 leading-none">
                <h3 className="text-lg font-monaSemibold leading-none">
                  {servic.title}
                </h3>
                <p className="text-md mb-2">{servic.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkEthics;
