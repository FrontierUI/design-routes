// import React from 'react';

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

import { homePortFolioUp, homePortFolioBot } from '@/contentData/utils';

import Typewriting from '@/components/Typewriting';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import PricingTabs from '@/components/PricingTabs';
import PricingAccordion from '@/components/PricingAccordion';
import Testimonials from '@/components/Testimonials';

const Pricing = () => {
  return (
    <div className="relative flexy flex-col w-full h-full">
      <div className="flexy flex-col w-full px-5 pt-20 lg:pt-28">
        <div className="flexy flex-col py-8 w-full space-y-5 text-center text-slate-900 lg:w-3/4">
          <h3 className="text-xl font-monaBold uppercase">
            <Typewriting text="Routes Design subscription" speed={80} />
          </h3>
          <div className="flexy flex-col space-y-2 leading-none">
            <h1 className="text-4xl lg:text-7xl font-monaBold text-primary">
              One subscription for all your creative needs
            </h1>

            <p className="text-base lg:text-lg">
              We will take care of all your creative needs. No inefficient
              freelancers. No lengthy hiring procedures. No contracts. Just your
              work getting done!
            </p>
          </div>
        </div>
      </div>

      <div className="flexy w-full">
        <PricingTabs />
      </div>

      <div className="relative bg-primary w-full h-full max-lg:mt-9 imac:mt-10 py-5 lg:py-8 px-5 flexy flex-col space-y-5">
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="right"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...homePortFolioUp].map((item) => (
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
            {[...homePortFolioBot].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="relative flexy flex-col w-full h-full mt-6 py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="font-monaBold text-center text-4xl">
            Got any questions?
          </h1>
        </div>

        <div className="px-5 w-full lg:w-2/3">
          <PricingAccordion />
        </div>
      </div>

      <div className="interested relative w-full h-full my-6 lg:my-10">
        <div className="flexy lg:px-12">
          <div className="relative w-full h-full flexy lg:max-h-[400px] max-sm:p-2 sm:p-10 overflow-hidden z-[2]">
            <div
              className="absolute w-full h-full rounded-xl bg-no-repeat bg-cover bg-center -z-[1]"
              style={{ backgroundImage: 'url(/images/interested.jpg)' }}
            />

            <div className="flexStart text-white flex-col w-full py-16 px-2 sm:px-10">
              <h1 className="text-5xl sm:text-6xl font-monaBold tracking-wider">
                Interested?
              </h1>
              <p className="my-2 w-auto font-monaMedium sm:w-3/5 pt-1">
                Just drop your contact info and we will get back to you as soon
                as possible.
              </p>

              <Link
                to={'https://koalendar.com/e/meet-with-routes-design'}
                target="_blank"
                className="relative lg:top-4 mt-4 interestedLink text-lg sm:text-xl"
              >
                book a call with a team
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default Pricing;
