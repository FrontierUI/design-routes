// import React from 'react';

import { provenExpert } from '@/contentData/utils';

import CounterNumbers from '@/components/CounterNumbers';

const ProvenExpertise = () => {
  return (
    <div className="flexy max-w-full px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-5 gap-y-5">
        {provenExpert.map((prov) => (
          <div
            key={prov.id}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg text-gray-800 hover:text-white duration-500">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-monaSemibold uppercase">
                  {prov.title}
                </h2>
                <CounterNumbers
                  start={0}
                  end={prov.numbering}
                  duration={2000}
                  decimals={
                    prov.numbering.toString().includes('.')
                      ? prov.numbering.toString().split('.')[1].length
                      : 0
                  }
                />
                <p className="text-md mb-2">{prov.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvenExpertise;
