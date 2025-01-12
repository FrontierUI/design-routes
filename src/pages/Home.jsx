// import React from 'react';

import Hero from '../components/Hero';
import HomePortfolioMarquee from '../components/HomePortfolioMarquee';
import VideosCarousel from '../components/VideosCarousel';

import { homePortFolioUp, homePortFolioBot } from '../contentData/utils';

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
    </div>
  );
};

export default Home;
