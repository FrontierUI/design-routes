import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import { Check } from 'lucide-react';

import { smmPortfolioBot, smmPortfolioUp } from '../../contentData/utils';

import LogoMarquee from '../../components/LogoMarquee';
import PortfolioMarquee from '../../components/PortfolioMarquee';
import FormatMastery from '../../components/FormatMastery';
import SMMStrategies from '../../components/SMMStrategies';
import SMMAIEnhanced from '../../components/SMMAIEnhanced';
import SMPlatforms from '../../components/SMPlatforms';
// import SMPlatforms from '../../components/SMPlatforms';

const SocialMediaManagement = () => {
  return (
    <div className="relative w-full h-full smmProduct">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
        />

        <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-slate-100">
                <h1 className="font-monaBold text-5xl">
                  Brand Identity Design Product
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  From brand exploration and development to refreshes and
                  rebrands, our world-class brand designers create cohesive,
                  scalable brand experiences. Learn more and book a call today.
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full relative top-6 p-4 h-auto transitAll scal105">
                <img
                  src="/images/productsPages/smmHero.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full max-lg:mt-9 imac:mt-10 py-5 px-5 flexy flex-col space-y-5">
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="right"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...smmPortfolioUp].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="left"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...smmPortfolioBot].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="strategyMarketing relative w-full h-full bg-primary text-white py-5 lg:py-10">
        <div className="flexy max-w-full mx-auto px-5 lg:px-12">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-2 sm:max-w-md lg:max-w-2xl md:space-y-5">
                <h3 className="text-2xl font-monaSemibold uppercase">
                  BUILT FOR COMMS, STRATEGY & MARKETING TEAMS
                </h3>

                <h1 className="text-5xl font-monaBold">
                  Strategic social media creative
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  With multiple formats needed to fit each social media platform
                  and the pressure to maintain a consistent, engaging presence,
                  you also need a social media design partner who’s up to the
                  task.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Routes.Design brings you highly skilled social media
                  designers, trained on the latest tools and technologies to
                  scale social media creative, ensuring speed, consistency and,
                  most of all, impact from your creative.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-5 xl:flex-row text-white">
                  <button className="transBorderBtn">
                    Cost-effective
                    <Check />
                  </button>
                  <button className="transBorderBtn">
                    Hassle-free
                    <Check />
                  </button>
                  <button className="transBorderBtn">
                    Built for speed & efficiency
                    <Check />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto transitAll scal110">
                <img
                  src="/images/productsPages/BrandingImage.png"
                  className="img-flud"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comprehensive relative w-full h-full py-5 pt-10">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
            <h3 className="text-2xl uppercase font-monaSemibold">
              SOCIAL MEDIA FLUENCY
            </h3>
            <h1 className="text-5xl font-monaBold">
              End-to-end social media management
            </h1>
          </div>
        </div>

        <SMMStrategies />
      </div>

      <div className="formatMastSect relative w-full h-full py-5 pb-5">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
            <h3 className="text-2xl uppercase font-monaSemibold">
              format Flexibility
            </h3>
            <h1 className="text-5xl font-monaBold">
              Dynamic formats for social engagement
            </h1>
          </div>
        </div>

        <FormatMastery />
      </div>

      <div className=" w-full h-full flexy py-6 lg:py-10">
        <SMPlatforms />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <SMMAIEnhanced />
      </div>

      <div className="comprehensive relative w-full h-full py-5 pt-10">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900 lg:w-2/3">
            <h3 className="text-2xl uppercase font-monaSemibold">
              Proven Impact
            </h3>
            <h1 className="text-4xl font-monaBold">
              Data-driven success for our customers
            </h1>

            <p className="pt-2">
              Our track record speaks volumes. Dive into the metrics that
              highlight our expertise and success in delivering social media
              creative that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
