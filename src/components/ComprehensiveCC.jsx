// import React from 'react';
import { comprehensive } from '@/contentData/utils';
import LazyImage from './LazyImage';

const ComprehensiveCC = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-x-5 gap-y-5">
        {comprehensive.map((comp) => (
          <div
            key={comp.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
              <LazyImage
                src={comp.src}
                width={48}
                alt=""
                className="img-fluid"
              />
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-monaSemibold leading-tight">
                  {comp.title}
                </h2>
                <p className="text-md mb-2">{comp.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveCC;
