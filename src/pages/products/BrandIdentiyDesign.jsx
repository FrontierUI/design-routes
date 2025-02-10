import React from 'react';
import Marquee from 'react-fast-marquee';

import LogoMarquee from '../../components/LogoMarquee';
import PortfolioMarquee from '../../components/PortfolioMarquee';

import { brandPortFolioBot, brandPortFolioUp } from '../../contentData/utils';
import { Check } from 'lucide-react';
import FullScope from '../../components/FullScope';
import AIEnhanced from '../../components/AIEnhanced';
import AIEnhancedBrandIdentity from '../../components/AIEnhancedBrandIdentity';
import DesignProcess from '../../components/DesignProcess';

const BrandIdentiyDesign = () => {
  return (
    <div className="relative w-full h-full brandIdenDes">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/lightBGE2.png)',
          }}
        />

        <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
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
                  src="/images/productsPages/GM2.png"
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
            {[...brandPortFolioUp].map((item) => (
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
            {[...brandPortFolioBot].map((item) => (
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
                  BUILT FOR BRAND, CREATIVE & MARKETING TEAMS
                </h3>

                <h1 className="text-5xl font-monaBold">
                  Strategic branding for every business
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Brands are fueled by a mixture of emotion and strategy. The
                  true art of branding design is combining both—to stand out
                  from the competition and forge memorable connections.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Our global team of brand experts, who’ve worked at top brand
                  design agencies and well-known brands, will help you grow and
                  elevate your brand. Whether it's a logo or a complete brand
                  development, we help you express what makes your brand unique.
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
              MULTIFACETED SOLUTIONS
            </h3>
            <h1 className="text-5xl font-monaBold">
              Full-scope Branding Product
            </h1>
          </div>
        </div>

        <FullScope />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <AIEnhancedBrandIdentity />
      </div>

      <div className="bid relative w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <div className="flexy flex-col space-y-4 text-center text-slate-900">
            <div className="flex flex-col space-y-0">
              <h1 className="text-5xl font-monaBold">Our Brand Identity</h1>
              <h1 className="text-5xl font-monaBold">Design Process:</h1>
            </div>
            <div className="mt-3 lg:w-3/5 leading-tight">
              <p>
                Branding design services start with a purpose. The primary goal
                is to effectively communicate the brand's values and essence.
                Our brand identity services make sure that the visual elements
                align with the brand's personality and speak to the target
                audience. This helps to:
              </p>
            </div>
          </div>
        </div>

        <DesignProcess />
      </div>
    </div>
  );
};

export default BrandIdentiyDesign;
