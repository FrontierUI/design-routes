// import React from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

const AllPortfolio = () => {
  return (
    <div className="flexy w-full h-full">
      <div className="mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/cc-yap1.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                YAP - Unlock Surprises with Every Purchase
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/adduiux-dmart.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                DMART - Your product & our Rapid Delivery
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/pd-hnak.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                HNAK - A Beautiful Launch Story
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/cc-digitall.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-[#333333] p-8 flex">
              <h2 className="text-3xl font-monaBold">
                DIGITALL - Empowering Business
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/fnLushTomatoSocialMM.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-600 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                SHOPCO - Every Bite, Feels Right
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-5 parallax-effect rounded-lg"
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
      </div>
    </div>
  );
};

export default AllPortfolio;
