// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { smallVids } from '../contentData/utils';
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import uiux from '../assets/images/uiuxblog.png';
const VideosCarouselFixed = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flexy py-6">
        <div className="grid grid-cols-12 lg:gap-x-5">
          <div className="col-span-12 lg:col-span-6 relative w-full h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-4xl mb-2 monaBold text-start beProudTitle">
                  Be Proud of your creative team
                </h1>
                <p className="text-md monaMedium leading-6">
                  Routes.Design is a creative subscription service, trusted by
                  leading agencies and brands to deliver exceptional design
                  faster, more reliably, and at scale.
                </p>
                <p className="text-md monaMedium mt-2 leading-6">
                  Collaborate with dedicated top-tier creatives and tech
                  experts, trained in the latest AI tools—without the cost and
                  complexity of working with traditional agencies or
                  freelancers.
                </p>
                <Link
                  to="/pricing"
                  className="py-2 px-4 mt-2 outline outline-2 outline-[#0000ff] rounded-full monaSemibold"
                >
                  <button
                    type="button"
                    className="monaSemibold text-[#0000ff] text-lg"
                  >
                    Our Plans
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center pt-4">
              <Swiper
                loop={true} // Enable looping
                autoplay={{
                  delay: 1500, // Slide changes every 3.5 seconds
                  disableOnInteraction: false, // Keep autoplay even if the user interacts with the slides
                }}
                spaceBetween={10} // Space between slides
                slidesPerView={2} // Number of slides visible at once
                pagination={{ clickable: true }} // Enable pagination
                scrollbar={{ draggable: true }} // Enable draggable scrollbar
                modules={[Autoplay, Navigation]} // Use modules as needed
                breakpoints={{
                  640: {
                    slidesPerView: 2, // 1 slide visible on small screens
                  },
                  1024: {
                    slidesPerView: 3, // 3 slides visible on large screens
                  },
                }}
              >
                <SwiperSlide>
                  <div className="w-full h-full rounded-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web05.mp4"
                      className="object-cover w-full h-[18.75rem] rounded-2xl"
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full rounded-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web06.mp4"
                      className="object-cover w-full h-[18.75rem] rounded-2xl"
                    ></video>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full rounded-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web07.mp4"
                      className="object-cover w-full h-[18.75rem] rounded-2xl"
                    ></video>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full rounded-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web08.mp4"
                      className="object-cover w-full h-[18.75rem] rounded-2xl"
                    ></video>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 relative w-full h-full">
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full h-full flex">
                <Swiper
                  loop={true} // Enable looping
                  autoplay={{
                    delay: 1500, // Slide changes every 3.5 seconds
                    disableOnInteraction: false, // Keep autoplay even if the user interacts with the slides
                  }}
                  spaceBetween={10} // Space between slides
                  slidesPerView={2} // Number of slides visible at once
                  pagination={{ clickable: true }} // Enable pagination
                  scrollbar={{ draggable: true }} // Enable draggable scrollbar
                  modules={[Autoplay, Navigation]} // Use modules as needed
                  breakpoints={{
                    640: {
                      slidesPerView: 1, // 1 slide visible on small screens
                    },
                    768: {
                      slidesPerView: 2, // 2 slides visible on medium screens
                    },
                    1024: {
                      slidesPerView: 2, // 3 slides visible on large screens
                    },
                  }}
                  className="!h-full"
                >
                  <SwiperSlide className="h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web01.mp4"
                      className="object-cover w-full h-full rounded-2xl"
                    ></video>
                  </SwiperSlide>
                  <SwiperSlide className="h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web02.mp4"
                      className="object-cover w-full h-full rounded-2xl"
                    ></video>
                  </SwiperSlide>

                  <SwiperSlide className="h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web03.mp4"
                      className="object-cover w-full h-full rounded-2xl"
                    ></video>
                  </SwiperSlide>

                  <SwiperSlide className="h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      src="https://routes.design/assets/images/Web04.mp4"
                      className="object-cover w-full h-full rounded-2xl"
                    ></video>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCarouselFixed;
