// import React from 'react';
import { dynamicFormat } from '@/contentData/utils';

const DynamicFormats = () => {
  return (
    <div className="flexy w-full h-full relative px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-5 gap-y-5">
        {dynamicFormat.map((master) => (
          <div
            key={master.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
              <img src={master.src} className="img-fluid" width={48} alt="" />
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-monaSemibold leading-tight">
                  {master.title}
                </h2>
                <p className="text-md mb-2">{master.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicFormats;
