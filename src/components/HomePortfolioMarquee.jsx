// import React from 'react';

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

import { homePortFolioUp, homePortFolioBot } from '../contentData/utils';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper';

// SwiperCore.use([Autoplay]);

const HomePortfolioMarquee = () => {
  return (
    <div className="w-full flexy flex-col space-y-5">
      {/* <div className="relative flexy">
        <Marquee
          direction="right"
          autoFill={true}
          delay={1}
          speed={25}
          pauseOnHover={false}
        >
          {homePortFolioUp.map((homeUp) => (
            <div
              key={homeUp.homePortUpId}
              className="flexy mx-2.5 rounded-xl overflow-hidden"
            >
              <Link
                to={homeUp.href}
                className="w-full transitAll scale105 rounded-xl"
              >
                <img src={homeUp.src} className="img-fluid" alt="" />
              </Link>
            </div>
          ))}
        </Marquee>
      </div> */}

      <div className="relative flexy w-full">
        <Swiper
          loop={true}
          freeMode={true}
          slidesPerView={'1'}
          className="w-full swiper_container"
          speed={6500}
          pagination={false}
          // initialSlide={1}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{ delay: 50 }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
          {homePortFolioBot.map((botPort) => (
            <SwiperSlide
              key={botPort.homePortBotId}
              className="overflow-hidden rounded-xl"
            >
              <Link
                to={botPort.href}
                className="w-full flexy transitAll scal105"
              >
                <img src={botPort.src} className="img-fluid" alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePortfolioMarquee;
