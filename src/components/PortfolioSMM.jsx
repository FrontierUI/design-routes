import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

const PortfolioSMM = () => {
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
              src="/images/workPort/smm-mazito.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-800 p-8 flex">
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
              src="/images/workPort/smm-oral.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-800 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Oral - Until Dawn Dental Care
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
              src="/images/workPort/fnLushTomatoSocialMM.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-600 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                LUSH - Every Bite, Feels Right
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
              src="/images/workPort/smm-ill.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-500 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                International Industries Limited
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
              src="/images/workPort/smm-shortcast.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-gray-500 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Shortcast Club Podcast Channel
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
              src="/images/workPort/smm-caregiver.png"
              className="img-fluid"
              alt=""
            />
            <div className="absolute text-slate-700 p-8 flex">
              <h2 className="text-3xl font-monaBold">
                Caregiver - Elder Care Facility
              </h2>
            </div>
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default PortfolioSMM;
