import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';
import LazyImage from './LazyImage';

const PortfolioAppDD = () => {
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
            <LazyImage
              src="/images/workPort/adduiux-ubl.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Fintech - Easy & Smooth Transactions
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
            <LazyImage
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
          className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
        >
          <Link
            to={'/'}
            className="relative flexStart w-full innerEffect rounded-lg"
          >
            <LazyImage
              src="/images/workPort/adduiux-3legant.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-white p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Elegant - Timeless Furniture Designs
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
            <LazyImage
              src="/images/workPort/adduiux-mazito.png"
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
            <LazyImage
              src="/images/workPort/adduiux-wesave.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-600 p-8 flex">
              <h2 className="text-3xl font-monaBold">Wesavewith - App</h2>
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
            <LazyImage
              src="/images/workPort/adduiux-fashion.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-500 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Fashion - Walk In Style
              </h2>
            </div>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default PortfolioAppDD;
