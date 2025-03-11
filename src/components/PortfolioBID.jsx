// import React from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

const PortfolioBID = () => {
  return (
    <div className="flexy w-full h-full">
      <div className="mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-damor.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-primary p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Damore - Luxurious Brand Identity Design
              </h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-250.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                250 F - Luxurious Brand Identity Design
              </h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-gu7.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Gearup7 Brand Identity &amp; UI/UX
              </h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-beyond.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                BEYOND - Boost your Progression
              </h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-aroma.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">Aroma - By Estilo</h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-sogusto.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">Sogusto Restaurant</h2>
            </div>
          </Link>
        </Tilt>

        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/bid-resort.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">Imperial Haven</h2>
            </div>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default PortfolioBID;
