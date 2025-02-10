import React from 'react';
import { designProcess } from '../contentData/utils';

const DesignProcess = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5 gap-y-5">
        {designProcess.map((process) => (
          <div
            key={process.title}
            className="flexStart shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
              <div className="itemsStart flex-col relative space-y-5">
                <div className="flexy gap-x-2.5 lg:gap-x-4">
                  <img
                    src={process.src}
                    className="img-fluid"
                    width={50}
                    alt=""
                  />
                  <h2 className="text-2xl lg:text-3xl font-monaSemibold">
                    {process.title}
                  </h2>
                </div>
                <div className="flexy ml-3">
                  <p className="text-md">{process.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignProcess;
