// import React from 'react';

import Hero from '../components/Hero';
import HomePortfolioMarquee from '../components/HomePortfolioMarquee';
import VideosCarousel from '../components/VideosCarousel';

import { homeServiceDetails } from '../contentData/utils';

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Hero />

      <div className="w-full h-full px-5 lg:px-12">
        <VideosCarousel />
      </div>

      <div className="relative w-full h-full bg-primary py-6 px-5">
        <HomePortfolioMarquee />
      </div>

      <div className="w-full h-full py-10 px-5 lg:px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {homeServiceDetails.map((serviceDetail) => (
            <div
              className="relative p-4 rounded-lg flex flex-col items-start justify-center transitAll scal105 hover:bg-primary space-y-2 hover:text-white shadow-drop-2"
              key={serviceDetail.id}
            >
              <img
                src={serviceDetail.icon}
                className="img-fluid"
                width={45}
                alt=""
              />
              <h3 className="text-lg monaSemibold leading-tight">
                {serviceDetail.title}
              </h3>
              <p>{serviceDetail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
