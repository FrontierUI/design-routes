// import React from 'react';

import HomePortfolioMarquee from '../../components/HomePortfolioMarquee';

const CreativeCampaigns = () => {
  return (
    <div className="relative w-full h-full creativeCampaigns">
      <div
        className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
      />

      <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
        <div className="w-full flex flex-wrap items-center max-md:pt-24">
          <div className="w-full lg:w-1/2 lg:px-3">
            <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-white">
              <h1 className="monaBold text-5xl">
                Creative Campaign Design Product
              </h1>

              <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                From high-volume, multi-channel campaigns to testing and
                exploration, get the outstanding creative campaign Products you
                need. Plug-in a fully-stacked design team and start fueling your
                ad campaigns today.
              </p>

              <div className="justStartCenter">
                <button className="whiteButton">Get Started</button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="w-full p-3 h-auto transitAll scal105">
              <img
                src="/images/productsPages/Campaign.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-5 px-5">
        <HomePortfolioMarquee />
      </div>
    </div>
  );
};

export default CreativeCampaigns;
