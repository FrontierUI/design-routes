import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioTabs from '@/components/PortfolioTabs';
import Testimonials from '@/components/Testimonials';

const OurWork = () => {
  return (
    <div className="relative w-full h-full ourWork">
      <div className="relative w-full h-full py-6">
        <div className="flexy w-full h-full px-5 lg:px-12 pt-12 pb-6 lg:mt-12">
          <div className="ourWorkTitles">
            <div className="flexStart w-full lg:w-3/5 mt-6 lg:mt-12">
              <h2 className="text-4xl font-monaSemibold">
                Finding your brand story, and then communicating it
              </h2>
            </div>
            <div className="flexStart lg:!justify-end">
              <h2 className="text-4xl font-monaSemibold">Explore our work</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="routesPortfolio relative w-full h-full">
        <div className="relative w-full h-full px-5 lg:px-12">
          <PortfolioTabs />
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
      <div className="relative w-full h-full py-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default OurWork;
