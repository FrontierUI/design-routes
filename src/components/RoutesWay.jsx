// import React from 'react';

import ReactPlayer from 'react-player';

const RoutesWay = () => {
  return (
    <div className="routesWay relative flexy w-full h-full pt-10 pb-5">
      <div className="absolute bg-primary w-full h-full lg:h-[400px] -z-[1]" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white px-5 lg:px-12 z-10">
        <div className="relative w-full flex items-center justify-start lg:justify-end">
          <div className="flex flex-col items-start lg:items-end justify-center">
            <h4 className="font-monaMedium text-lg">Without Routes</h4>
            <h2 className="font-monaBold text-3xl">Old Way</h2>
            <h4 className="font-monaMedium text-lg">Classic Landing Page</h4>

            <ul className="flex flex-col items-start lg:items-end justify-center mt-6 space-y-2">
              <li className="flex items-start lg:items-center justify-center">
                <span className="text-lg">Basic design for mobile</span>
                <img
                  src="/images/icons/oldwayWrong.svg"
                  className="img-fluid ml-2 w-6"
                  alt=""
                />
              </li>
              <li className="flex items-start lg:items-center justify-center">
                <span className="text-lg">Long scroll navigation</span>
                <img
                  src="/images/icons/oldwayWrong.svg"
                  className="img-fluid ml-2 w-6"
                  alt=""
                />
              </li>
              <li className="flex items-start lg:items-center justify-center">
                <span className="text-lg">Endless form</span>
                <img
                  src="/images/icons/oldwayWrong.svg"
                  className="img-fluid ml-2 w-6"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex items-start justify-start w-full h-full lg:p-8">
          <div className="flex items-center justify-start rounded-lg w-full lg:w-[350px]">
            <img
              src="/images/OldPetz.png"
              className="img-fluid w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="relative flex items-start justify-start w-full">
          <div className="bg-transparent flexy w-full h-full">
            <ReactPlayer
              playing
              url={'/images/PetzMz.mp4'}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '1rem',
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
              }}
              config={{
                file: {
                  attributes: {
                    style: {
                      width: '100%',
                      height: '100%',
                      borderRadius: '1rem',
                      outline: 'none',
                      border: 'none',
                      backgroundColor: 'transparent',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="relative w-full flex items-center justify-start lg:pl-10 max-sm:pt-6">
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-monaMedium text-lg">With Routes</h4>
            <h2 className="font-monaBold text-3xl">New Way</h2>
            <h4 className="font-monaMedium text-lg">Mobile Experience</h4>

            <ul className="flex flex-col items-start justify-center mt-6 space-y-1">
              <li className="flex items-start lg:items-center justify-center">
                <img
                  src="/images/icons/newWayCheck.svg"
                  className="img-fluid mr-2 w-6"
                  alt=""
                />
                <span className="text-lg">User-friendly</span>
              </li>
              <li className="flex items-start lg:items-center justify-center">
                <img
                  src="/images/icons/newWayCheck.svg"
                  className="img-fluid mr-2 w-6"
                  alt=""
                />
                <span className="text-lg">Addictive UI/UX</span>
              </li>
              <li className="flex items-start lg:items-center justify-center">
                <img
                  src="/images/icons/newWayCheck.svg"
                  className="img-fluid mr-2 w-6"
                  alt=""
                />
                <span className="text-lg">Instant tap navigation</span>
              </li>
              <li className="flex items-start lg:items-center justify-center">
                <img
                  src="/images/icons/newWayCheck.svg"
                  className="img-fluid mr-2 w-6"
                  alt=""
                />
                <span className="text-lg">Engaging experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesWay;
