// import React from 'react';

import Marquee from 'react-fast-marquee';
import { clientsLogo } from '../contentData/utils';

const LogoMarquee = () => {
  return (
    <div className="client-logo w-full overflow-x-hidden">
      <Marquee
        direction="right"
        autoFill={true}
        delay={1}
        speed={25}
        pauseOnHover={false}
        className="w-full"
      >
        {clientsLogo.map((cnLog) => (
          <div className="mx-4 flexy" key={cnLog.cLogoId}>
            <img src={cnLog.src} className="img-fluid" alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
