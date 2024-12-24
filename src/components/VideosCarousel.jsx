import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import { smallVids } from '../contentData/utils';
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import uiux from '../assets/images/uiuxblog.png';

const VideosCarousel = () => {
  return (
    <div className="relative w-full h-full">
      <div className="container flexy py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="flex flex-col items-start justify-start space-y-5">
              <div className="flex flex-col items-start justify-start space-y-3">
                <h2 className="monaBold text-4xl">Be Proud of your team</h2>
                <p className="text-md monaRegular">
                  Routes.Design is a creative subscription service, trusted by
                  leading agencies and brands to deliver exceptional design
                  faster, more reliably, and at scale.
                </p>
                <p className="text-md monaRegular">
                  Collaborate with dedicated top-tier creatives and tech
                  experts, trained in the latest AI tools—without the cost and
                  complexity of working with traditional agencies or
                  freelancers.
                </p>

                <div className="flexy">
                  <Link
                    to="/"
                    className="bord smallBtn transitAll scal105 text-primary"
                  >
                    Our Plans
                  </Link>
                </div>
              </div>

              <div className="w-full h-full">
                <Swiper
                  // effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={{ el: '.swiper-pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                >
                  <SwiperSlide>
                    <img
                      src={uiux}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={uiux}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={uiux}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={uiux}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={uiux}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>

                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      <ChevronRight />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ChevronLeft />
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full flexy">
            <div className="w-full h-full">
              <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <img
                    src={uiux}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={uiux}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={uiux}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={uiux}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={uiux}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <ArrowBigLeft />
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ArrowBigRight />
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCarousel;
