// import React from 'react';

import Marquee from 'react-fast-marquee';

const LogoMarquee = () => {
  return (
    <div className="client-logo">
      <Marquee
        direction="right"
        autoFill={true}
        delay={1}
        speed={25}
        pauseOnHover={false}
      >
        <div className="mx-3">
          <img
            src="/images/clientLogo/workbayer.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
