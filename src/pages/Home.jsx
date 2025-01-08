// import React from 'react';

import Hero from '../components/Hero';
import VideosCarousel from '../components/VideosCarousel';

const Home = () => {
  return (
    <div className="relative max-w-full w-full h-full">
      <Hero />

      <div className="container w-full h-full px-5 lg:px-12">
        <VideosCarousel />
      </div>
    </div>
  );
};

export default Home;
