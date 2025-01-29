// import React from 'react';

const CreativeCampaigns = () => {
  return (
    <div className="relative w-full h-full creativeCampaigns">
      <div
        className="absolute top-0 w-full h-screen -z-[1] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
      />

      <div className="w-full items-center mx-auto px-5 lg:px-12">
        <div className="w-full lg:w-1/2 lg:space-x-3">
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCampaigns;
