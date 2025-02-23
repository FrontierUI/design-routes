// import React from 'react';

import Marquee from 'react-fast-marquee';
import { Check } from 'lucide-react';

import { pdPortfolioBot, pdPortfolioUp } from '@/contentData/utils';

import LogoMarquee from '@/components/LogoMarquee';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import ProvenExpertise from '@/components/ProvenExpertise';
import Professionalism from '@/components/Professionalism';
import SMMAccordion from '@/components/SMMAccordion';
import Testimonials from '@/components/Testimonials';
import PresentationPackage from '@/components/PresentationPackage';

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
                  Presentation Design Product
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  Engage, persuade and delight with Routes.design Presentation
                  Design Product. From on-point PowerPoints to pitch-perfect
                  pitch decks, we craft custom presentations and templates that
                  suit your needs.
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full relative top-6 p-4 h-auto transitAll scal105">
                <img
                  src="/images/productsPages/presentationHero.png"
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
            {[...pdPortfolioUp].map((item) => (
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
            {[...pdPortfolioBot].map((item) => (
              <PortfolioMarquee
                key={item.href}
                imgSrc={item.imgSrc}
                href={item.href}
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
                  Elevate your Presentations and sales decks with Routes
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  We do your ideas justice with beautifully designed
                  presentations that follow a logical structure, showcase your
                  data in a clear, compelling manner and convey your message in
                  the most persuasive way possible.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Whether you need a pitch deck to persuade VCs, templates for
                  internal communications or slides for a key event, our
                  world-class team of presentation designers will work with you
                  to deliver a stunning final product.
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
                  src="/images/productsPages/presentationHero.png"
                  className="img-flud"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-6">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <PresentationPackage />
      </div>

      <div className="relative w-full flexy h-full py-6">
        <div className="px-5 w-full lg:w-2/3">
          <SMMAccordion />
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default PresentationDesign;
