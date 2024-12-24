import React from 'react';

import Hero from '../components/Hero';
import VideosCarousel from '../components/VideosCarousel';

// import VideosCarousel from '@/src';

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Hero />
      <div className="container w-full h-full px-5 lg:px-12 ">
        <VideosCarousel />
      </div>
    </div>
  );
};

export default Home;
