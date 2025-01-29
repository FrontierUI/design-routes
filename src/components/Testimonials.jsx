import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Star } from 'lucide-react';

import { clientTestimonials } from '../contentData/utils';

const Testimonials = () => {
  return (
    <div className="flexy px-5 lg:px-12 w-full h-full">
      <Swiper
        effect={'coverflow'}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{ delay: 2000 }}
        speed={3000}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        spaceBetween={0}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        breakpoints={{ 1024: { slidesPerView: 3 }, 640: { slidesPerView: 1 } }}
        className="w-full h-full"
      >
        {clientTestimonials.map((testt) => (
          <SwiperSlide
            key={testt.clientName}
            className="w-full max-h-full max-w-full mb-10 ml-10 shadow-drop-5 rounded-xl"
          >
            <div className="itemsStart flex-col max-w-full w-full min-w-full min-h-96 p-6 lg:p-8 mx-2 lg:mx-8 space-y-4 bg-white">
              <p>{testt.comment}</p>
              <div className="itemsStart w-full flex-col space-y-2">
                <div className="justStartCenter gap-x-5">
                  <img
                    src={testt.clAvatar}
                    className="img-fluid"
                    width={50}
                    alt=""
                  />

                  <h4 className="monaMedium text-lg">{testt.clientName}</h4>
                </div>
                <div className="justStartCenter gap-x-1">
                  <Star className="w-5 h-5  text-yellow-400" />
                  <Star className="w-5 h-5  text-yellow-400" />
                  <Star className="w-5 h-5  text-yellow-400" />
                  <Star className="w-5 h-5  text-yellow-400" />
                  <Star className="w-5 h-5  text-yellow-400" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
