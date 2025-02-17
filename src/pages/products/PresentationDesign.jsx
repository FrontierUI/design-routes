// import React from 'react';

import Marquee from 'react-fast-marquee';

import LogoMarquee from '@/components/LogoMarquee';
import PortfolioMarquee from '@/components/PortfolioMarquee';

const PresentationDesign = () => {
  return (
    <div className="relative w-full h-full presentDes">
      <div className="relative w-full h-full pdHero">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/lightBGE2.png)',
          }}
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
                key={item.href}
                imgSrc={item.imgSrc}
                href={item.href}
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
    </div>
  );
};

export default PresentationDesign;
