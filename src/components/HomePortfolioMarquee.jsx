// import React from 'react';

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

import { homePortFolioUp, homePortFolioBot } from '../contentData/utils';

const HomePortfolioMarquee = () => {
  return (
    <div className="w-full flexy flex-col space-y-5">
      <div className="relative flexy w-full h-full">
        <Marquee
          direction="right"
          autoFill={true}
          gradient={false}
          delay={1}
          speed={30}
          pauseOnHover={false}
        >
          {homePortFolioUp.map((homeUp) => (
            <div key={homeUp.homePortUpId} className="portfolioMarquee">
              <Link
                to={homeUp.href}
                className="w-full rounded-xl overflow-hidden"
              >
                <img
                  src={homeUp.src}
                  className="img-fluid transitAll scal105"
                  alt=""
                />
              </Link>
            </div>
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
          {homePortFolioBot.map((homeBot) => (
            <div key={homeBot.homePortBotId} className="portfolioMarquee">
              <Link
                to={homeBot.href}
                className="w-full rounded-xl overflow-hidden"
              >
                <img
                  src={homeBot.src}
                  className="img-fluid transitAll scal105"
                  alt=""
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomePortfolioMarquee;
