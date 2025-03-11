// import React from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

const PortfolioPD = () => {
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
              src="/images/workPort/pd-alj.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">AJL - Lubricants LTD</h2>
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
              src="/images/workPort/pd-darent.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-800 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Darent - Find top-notch properties in KSA
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
              src="/images/workPort/pd-freshbar.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-600 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Freshbar - Secret, of Health
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <img
              src="/images/workPort/pd-timhorton.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-500 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Tim Hortons - Flavorful Journey
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
              src="/images/workPort/pd-vita.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">VITA - Launch</h2>
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
              src="/images/workPort/pd-getz.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Getz - We care for your Health
              </h2>
            </div>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default PortfolioPD;
