// import React from 'react';

import Marquee from 'react-fast-marquee';
import { clientsLogo } from '@/contentData/utils';
import LazyImage from './LazyImage';

const LogoMarquee = () => {
  return (
    <div className="client-logo w-full overflow-x-hidden masking min-h-20">
      <Marquee
        direction="right"
        autoFill={true}
        delay={1}
        speed={25}
        gradient={true}
        gradientColor="#000"
        gradientWidth={100}
        pauseOnHover={false}
        className="w-full gap-4 flex items-center bg-transparent"
      >
        {clientsLogo.map((cnLog) => (
          <div className="mx-4 flexy" key={cnLog.cLogoId}>
            <LazyImage
              src={cnLog.src}
              className="img-fluid max-w-36 max-h-[72px]"
              alt=""
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
