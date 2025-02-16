import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import { Star } from 'lucide-react';

import Star from '/images/icons/star.svg';

import { clientTestimonials } from '../contentData/utils';

const Testimonials = () => {
  return (
    <div className="flexy px-5 lg:px-12 w-full h-full">
      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2000 }}
        speed={3000}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        // spaceBetween={45}
        grabCursor={true}
        // pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow]}
        breakpoints={{
          // 1857: { slidesPerView: 3, spaceBetween: 45 },
          1024: { slidesPerView: 2, spaceBetween: 45 },
          640: { slidesPerView: 1, spaceBetween: 20 },
        }}
        className="w-full h-full"
      >
        {clientTestimonials.map((testt) => (
          <SwiperSlide
            key={testt.clientName}
            className="w-full my-5 shadow-drop-5 rounded-xl px-4"
          >
            <div className="itemsStart flex-col w-full min-h-72 p-2 space-y-4 bg-white">
              <p>{testt.comment}</p>
              <div className="itemsStart w-full flex-col space-y-2">
                <div className="justStartCenter gap-x-5">
                  <img
                    src={testt.clAvatar}
                    className="img-fluid"
                    width={50}
                    alt=""
                  />

                  <h4 className="font-monaMedium text-lg">
                    {testt.clientName}
                  </h4>
                </div>
                <div className="justStartCenter gap-x-1">
                  <img src={Star} alt="" className="img-fluid w-5 h-5" />
                  <img src={Star} alt="" className="img-fluid w-5 h-5" />
                  <img src={Star} alt="" className="img-fluid w-5 h-5" />
                  <img src={Star} alt="" className="img-fluid w-5 h-5" />
                  <img src={Star} alt="" className="img-fluid w-5 h-5" />
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
