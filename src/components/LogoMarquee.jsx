// import React from 'react';

import Marquee from 'react-fast-marquee';
import { clientsLogo } from '@/contentData/utils';
import LazyImage from './LazyImage';

const LogoMarquee = () => {
  return (
    <div className="client-logo w-full overflow-x-hidden masking min-h-20">
      {/* {clientsLogo.map((cnLog) => (
    <div className="mx-4 flexy" key={cnLog.cLogoId}>
      <LazyImage
        src={cnLog.src}
        className="img-fluid min-w-32 max-w-40"
        alt=""
      />
    </div>
  ))} */}
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
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workair.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workasc.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workbayer.png"
            alt=""
            className="img-fluid h-16 w-16"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workbeachfox.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workbembien.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workcreactco.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workcsquad.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workfaizasteel.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workfaw.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workgetz.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workicipak.png"
            alt=""
            className="img-fluid h-16 w-20"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workiil.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workinverex.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workmazito.png"
            alt=""
            className="img-fluid h-16 w-20"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workmoosh.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/worknixon.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workrubies.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/worksoyoung.png"
            alt=""
            className="img-fluid h-16 w-40"
          />
        </div>
        <div className="flexy mx-4">
          <LazyImage
            src="/images/clientLogo/workup.png"
            alt=""
            className="img-fluid h-16 w-20"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
