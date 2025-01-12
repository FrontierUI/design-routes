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
      <div className="relative flexy w-full h-full">
        <Marquee
          direction="right"
          autoFill={false}
          gradient={false}
          delay={1}
          speed={100}
          pauseOnHover={false}
          className=""
        >
          {homePortFolioUp.map((homeUp) => (
            <div
              key={homeUp.homePortUpId}
              className="rounded-xl lg:max-w-[33.33%] mx-2 overflow-hidden"
            >
              <Link
                to={homeUp.href}
                className="w-full rounded-xl overflow-hidden"
              >
                <img
                  src={homeUp.src}
                  className="img-fluid transitAll scal105"
                  alt=""
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>

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
