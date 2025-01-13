// import React from 'react';

import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import {
  animate,
  useMotionValue,
  motion,
  AnimatePresence,
} from 'framer-motion';

import Hero from '../components/Hero';
import HomePortfolioMarquee from '../components/HomePortfolioMarquee';
import HomePortTopThumbCard from '../components/HomePortTopThumbCard';
import VideosCarousel from '../components/VideosCarousel';

import {
  homeServiceDetails,
  homePortFolioUp,
  homePortFolioBot,
} from '../contentData/utils';
import { Link } from 'react-router-dom';

const Home = () => {
  // const images = [
  //   '/images/portfolio/homePort/thumbnail-1.jpg',
  //   '/images/portfolio/homePort/thumbnail-2.jpg',
  //   '/images/portfolio/homePort/thumbnail-3.jpg',
  //   '/images/portfolio/homePort/thumbnail-4.jpg',
  //   '/images/portfolio/homePort/thumbnail-5.jpg',
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
    );
  };

  // const upperMarqueePort = [
  //   '/images/portfolio/homePort/thumbnail-1.jpg',
  //   '/images/portfolio/homePort/thumbnail-2.jpg',
  //   '/images/portfolio/homePort/thumbnail-3.jpg',
  //   '/images/portfolio/homePort/thumbnail-4.jpg',
  //   '/images/portfolio/homePort/thumbnail-5.jpg',
  // ];

  // const FAST_DURATION = 25;
  // const SLOW_DURATION = 75;

  // const [duration, setDuration] = useState(FAST_DURATION);
  // const [mustFinish, setMustFinish] = useState(false);
  // const [rerender, setRerender] = useState(false);

  // let [ref, { width }] = useMeasure();

  // const xTranlation = useMotionValue(0);

  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2 - 3;

  //   if (mustFinish) {
  //     controls = animate(xTranlation, [xTranlation.get(), finalPosition], {
  //       ease: 'linear',
  //       duration: duration * (1 - xTranlation.get() / finalPosition),
  //       onComplete: () => {
  //         setMustFinish(false);
  //         setRerender(!rerender);
  //       },
  //     });
  //   } else {
  //     controls = animate(xTranlation, [0, finalPosition], {
  //       ease: 'linear',
  //       duration: duration,
  //       repeat: Infinity,
  //       repeatType: 'loop',
  //       repeatDelay: 0,
  //     });
  //   }

  //   return controls?.stop;
  // }, [xTranlation, width, duration, rerender, mustFinish]);

  return (
    <div className="relative w-full h-full">
      <Hero />

      <div className="w-full h-full px-5 lg:px-12">
        <VideosCarousel />
      </div>

      <div className="relative w-full h-full bg-primary py-6 px-5">
        {/* <HomePortfolioMarquee /> */}
        {/* <motion.div
          className="flex gap-4 w-full h-full"
          ref={ref}
          style={{ x: xTranlation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((item, idx) => (
            <HomePortTopThumbCard image={item} key={idx} />
          ))}
        </motion.div> */}

        {/* <motion.div
          className="flex gap-x-5"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {upperMarqueePort.map((image, index) => (
            <img src={image} className="img-fluid" key={index} />
          ))}
        </motion.div> */}

        {homePortFolioBot.map(({ href, homePortBotId, src }) => (
          <div className="flexy" key={homePortBotId}>
            <AnimatePresence>
              <motion.div
                // key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-64 rounded-xl"
              >
                <Link to={[currentIndex].href} className="block">
                  <img src={[currentIndex].src} className="img-fluid" alt="" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="w-full h-full py-10 px-5 lg:px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {homeServiceDetails.map((serviceDetail) => (
            <div
              className="relative p-4 rounded-lg flex flex-col items-start justify-center transitAll scal105 hover:bg-primary space-y-2 hover:text-white shadow-drop-2"
              key={serviceDetail.id}
            >
              <img
                src={serviceDetail.icon}
                className="img-fluid"
                width={45}
                alt=""
              />
              <h3 className="text-lg monaSemibold leading-tight">
                {serviceDetail.title}
              </h3>
              <p>{serviceDetail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
