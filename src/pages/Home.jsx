import React from 'react';

import Hero from '../components/Hero';
import VideosCarousel from '../components/VideosCarousel';
import VideosCarouselFixed from '../components/VideosCarouselFixed';

// import VideosCarousel from '@/src';

const Home = () => {
  return (
    <div className="relative max-w-full w-full h-full">
      <Hero />
      <div className="container w-full h-full px-5 lg:px-10">
        {/* <VideosCarousel /> */}
        <VideosCarouselFixed />
      </div>
    </div>
  );
};

export default Home;
