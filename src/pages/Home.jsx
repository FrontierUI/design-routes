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
// import HomePortTopThumbCard from '../components/HomePortTopThumbCard';
import VideosCarousel from '../components/VideosCarousel';

import {
  homeServiceDetails,
  homePortFolioUp,
  homePortFolioBot,
  srcFilesList,
  professionalism,
} from '../contentData/utils';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Services from '../components/Services';
import Strategies from '../components/Strategies';
import Testimonials from '../components/Testimonials';
import Professionalism from '../components/Professionalism';

const Home = () => {
  // const images = [
  //   '/images/portfolio/homePort/thumbnail-1.jpg',
  //   '/images/portfolio/homePort/thumbnail-2.jpg',
  //   '/images/portfolio/homePort/thumbnail-3.jpg',
  //   '/images/portfolio/homePort/thumbnail-4.jpg',
  //   '/images/portfolio/homePort/thumbnail-5.jpg',
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
  //   );
  // };

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
        <HomePortfolioMarquee />
      </div>

      <div className="w-full h-full py-10 px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
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
              <h3 className="text-lg font-monaSemibold leading-tight">
                {serviceDetail.title}
              </h3>
              <p>{serviceDetail.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flexy w-full h-full py-10">
        <div className="absolute bg-primary w-full h-full lg:h-[400px] -z-[1]" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white px-5 lg:px-12 z-10">
          <div className="relative w-full flex items-center justify-start lg:justify-end">
            <div className="flex flex-col items-start lg:items-end justify-center">
              <h4 className="font-monaMedium text-lg">Without Routes</h4>
              <h2 className="font-monaBold text-3xl">Old Way</h2>
              <h4 className="font-monaMedium text-lg">Classic Landing Page</h4>

              <ul className="flex flex-col items-start lg:items-end justify-center mt-6 space-y-2">
                <li className="flex items-start lg:items-center justify-center">
                  <span className="text-lg">Basic design for mobile</span>
                  <img
                    src="/images/icons/oldwayWrong.svg"
                    className="img-fluid ml-2 w-6"
                    alt=""
                  />
                </li>
                <li className="flex items-start lg:items-center justify-center">
                  <span className="text-lg">Long scroll navigation</span>
                  <img
                    src="/images/icons/oldwayWrong.svg"
                    className="img-fluid ml-2 w-6"
                    alt=""
                  />
                </li>
                <li className="flex items-start lg:items-center justify-center">
                  <span className="text-lg">Endless form</span>
                  <img
                    src="/images/icons/oldwayWrong.svg"
                    className="img-fluid ml-2 w-6"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex items-start justify-start w-full h-full lg:p-8">
            <div className="flex items-center justify-start rounded-lg w-full lg:w-[350px]">
              <img
                src="/images/OldPetz.png"
                className="img-fluid w-full h-full rounded-lg"
                alt=""
              />
            </div>
          </div>

          <div className="relative flex items-start justify-start w-full">
            <div className="bg-transparent flexy w-full h-full">
              <ReactPlayer
                playing
                url={'/images/PetzMz.mp4'}
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
                  backgroundColor: 'transparent',
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
                        backgroundColor: 'transparent',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="relative w-full flex items-center justify-start lg:pl-10 max-sm:pt-6">
            <div className="flex flex-col items-start justify-center">
              <h4 className="font-monaMedium text-lg">With Routes</h4>
              <h2 className="font-monaBold text-3xl">New Way</h2>
              <h4 className="font-monaMedium text-lg">Mobile Experience</h4>

              <ul className="flex flex-col items-start justify-center mt-6 space-y-1">
                <li className="flex items-start lg:items-center justify-center">
                  <img
                    src="/images/icons/newWayCheck.svg"
                    className="img-fluid mr-2 w-6"
                    alt=""
                  />
                  <span className="text-lg">User-friendly</span>
                </li>
                <li className="flex items-start lg:items-center justify-center">
                  <img
                    src="/images/icons/newWayCheck.svg"
                    className="img-fluid mr-2 w-6"
                    alt=""
                  />
                  <span className="text-lg">Addictive UI/UX</span>
                </li>
                <li className="flex items-start lg:items-center justify-center">
                  <img
                    src="/images/icons/newWayCheck.svg"
                    className="img-fluid mr-2 w-6"
                    alt=""
                  />
                  <span className="text-lg">Instant tap navigation</span>
                </li>
                <li className="flex items-start lg:items-center justify-center">
                  <img
                    src="/images/icons/newWayCheck.svg"
                    className="img-fluid mr-2 w-6"
                    alt=""
                  />
                  <span className="text-lg">Engaging experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="services relative w-full h-full py-6 bg-white">
        <div className="w-full h-full flexy flex-col px-5 lg:px-12">
          <div className="flexy flex-col pb-4 space-y-2 text-center">
            <p className="text-xl font-monaMedium">
              Our Full Stack Creative Products
            </p>
            <h2 className="text-2xl font-monaBold">
              With any subscription, you gain access to all our creative
              products
            </h2>
          </div>
          <Services />
        </div>
      </div>

      <div className="strategy relative w-full h-full p-5 bg-primary">
        <div className="text-white w-full space-y-5">
          <div className="w-full flex items-start lg:items-center justify-start flex-col lg:flex-row xl:justify-between max-md:space-y-3 lg:px-7">
            <div className="flexStart">
              <h1 className="font-monaSemibold text-2xl lg:text-3xl">
                Here's how to get started
              </h1>
            </div>
            <div className="flexy">
              <Link to={'/'} className="tpLink">
                see our plans
              </Link>
            </div>
          </div>

          <Strategies />
        </div>
      </div>

      <div className="interested relative w-full h-full lg:my-10 my-5">
        <div className="flexy flex-col px-5 lg:px-12 space-y-8">
          <div className="relative w-full h-full flexy lg:max-h-[400px] max-sm:p-3 lg:p-10 overflow-hidden z-[2]">
            <div
              className="absolute w-full h-full rounded-xl bg-no-repeat bg-cover bg-center -z-[1] transitAll scal105"
              style={{ backgroundImage: 'url(/images/interested.jpg)' }}
            />

            <div className="flexStart text-white flex-col w-full py-16 px-2 lg:px-10">
              <h1 className="text-5xl font-monaBold tracking-wider">
                Interested?
              </h1>
              <p className="my-2 w-auto font-monaMedium  lg:w-2/4 pt-1">
                Just drop your contact info and we will get back to you as soon
                as possible.
              </p>

              <Link
                to={'/'}
                target="_blank"
                className="relative lg:top-4 mt-4 interestedLink text-xl"
              >
                book a call with a team
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full grid grid-cols-12 max-md:space-y-5 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-5 flexStart flex-col space-y-4">
              <div className="flex items-center justify-start">
                <hr className="hrBlack" />
                <h3>see how we compare</h3>
              </div>
              <h1 className="font-monaSemibold text-3xl">
                What makes us different?
              </h1>
              <p className="text-lg font-monaMedium">
                We will take care of all your creative needs. No inefficient
                freelancers. No lengthy hiring procedures. No contracts. Just
                your work getting done!
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 flexStart w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-black text-lg font-monaMedium w-full">
                {srcFilesList.map((listing) => (
                  <li
                    key={listing.para}
                    className="flex items-center justify-start gap-x-2"
                  >
                    <img
                      src={listing.src}
                      className="img-fluid"
                      width={38}
                      alt=""
                    />
                    <p>{listing.para}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-6 lg:py-10">
        <Professionalism />
      </div>

      <div className="relative w-full h-full pt-6 pb-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
