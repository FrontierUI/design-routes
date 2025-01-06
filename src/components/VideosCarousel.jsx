import React, { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import ReactPlayer from 'react-player';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Link } from 'react-router-dom';

import { smallVids, largeVids } from '../contentData/utils';

const VideosCarousel = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flexy py-6">
        <div className="grid grid-cols-12 gap-4 w-full h-full max-h-full">
          <div className="col-span-12 lg:col-span-6 relative w-full h-full flex items-center justify-start">
            <div className="w-full h-full flex flex-col items-start justify-start space-y-5">
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
                  effect={'coverflow'}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  loop={true}
                  speed={700}
                  autoplay={{ delay: 1500 }}
                  freeMode={true}
                  spaceBetween={12}
                  centeredSlides={true}
                  grabCursor={true}
                  modules={[Autoplay, EffectCoverflow]}
                  pagination={{ clickable: true, el: '' }}
                  // initialSlide={1}
                  breakpoints={{
                    1024: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                  }}
                  className="w-full h-full swiper_container"
                >
                  {smallVids.map((smvid) => (
                    <SwiperSlide
                      className="w-full h-full rounded-2xl"
                      key={smvid.smVidId}
                    >
                      <ReactPlayer
                        playing
                        url={smvid.src}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="100%"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '1rem',
                          outline: 'none',
                          border: 'none',
                        }}
                        config={{
                          file: {
                            attributes: {
                              style: {
                                width: '100%',
                                height: '100%',
                                borderRadius: '1rem',
                                outline: 'none',
                                border: 'none',
                              },
                            },
                          },
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 relative w-full max-h-full h-full">
            <div className="w-full h-full">
              <Swiper
                effect={'coverflow'}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                autoplay={{ delay: 1500 }}
                speed={1200}
                loop={true}
                freeMode={true}
                centeredSlides={true}
                spaceBetween={12}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectCoverflow]}
                // initialSlide={1}
                breakpoints={{
                  1024: { slidesPerView: 2 },
                  640: { slidesPerView: 1 },
                }}
                className="w-full swiper_container"
              >
                {largeVids.map((largeVids) => (
                  <SwiperSlide
                    key={largeVids.vidId}
                    className="w-full h-full rounded-2xl"
                  >
                    <ReactPlayer
                      playing
                      url={largeVids.src}
                      loop={true}
                      muted={true}
                      width="100%"
                      height="100%"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '1rem',
                        outline: 'none',
                        border: 'none',
                      }}
                      config={{
                        file: {
                          attributes: {
                            style: {
                              width: '100%',
                              height: '100%',
                              borderRadius: '1rem',
                              outline: 'none',
                              border: 'none',
                            },
                          },
                        },
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCarousel;
