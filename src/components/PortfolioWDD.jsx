// import React from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

const PortfolioWDD = () => {
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
              src="/images/workPort/wdd-drkate.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Dr. Kate - Aesthetics & Skin Care
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
              src="/images/workPort/wdd-levelup.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Level UP - Keep Focused
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
              src="/images/workPort/wdd-shopco.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                SHOPCO - Find clothes that match your style
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
              src="/images/workPort/wdd-mazito.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-[#7d7697] p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Mazito - A Pet Community Platform
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
              src="/images/workPort/wdd-wesave.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">Wesavewith - Web</h2>
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
              src="/images/workPort/wdd-wehi.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-200 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Wehi - I'm High you High
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
              src="/images/workPort/wdd-ss.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Splendour Stone - Stone Solutions
              </h2>
            </div>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default PortfolioWDD;
