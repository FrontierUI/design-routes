// import React from 'react';

import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import vid from '/images/860x500.mp4';
import LogoMarquee from './LogoMarquee';
// import Video from './Video';

const Hero = () => {
  // let vidStyles = 'rounded-2xl';

  return (
    <section className="relative w-full h-full z-[1]">
      <div className="absolute w-full bg-primary bgPrimSm md:h-full lg:h-screen -z-[1]" />
      <div className="flexy flex-col px-5 text-white relative pt-28 lg:pt-32 text-center">
        <div className="flexy flex-col space-y-2.5">
          <div className="flexy">
            <hr className="horLine hidden lg:block lg:mr-3" />
            <h4 className="uppercase text-xl monaMedium">
              Full service design agency
            </h4>
          </div>
          <h1 className="text-5xl xl:text-6xl uppercase monaBold ">
            for agencies & for brands
          </h1>
          <p className="text-lg">We are the extension of your creative team</p>
        </div>

        <div className="flexy relative w-full gap-x-3 mt-4 right-4 lg:right-0">
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out relative lg:left-5 left-3 mx-2 lg:mx-3">
            <img
              src="/images/creativeCloud.png"
              className="w-16 h-16 object-cover img-fluid"
              alt=""
            />
            <p className="pt-1.5">Creative Cloud</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/figma.png"
              className="w-16 h-16 object-cover img-fluid"
              alt=""
            />
            <p className="pt-1.5">Figma</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/vscode.png"
              className="w-16 h-16 object-cover img-fluid"
              alt=""
            />
            <p className="pt-1.5">VS Code</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/meta.png"
              className="w-16 h-16 object-cover img-fluid"
              alt=""
            />
            <p className="pt-1.5">Meta</p>
          </div>
        </div>

        <div className="flexy relative mt-5">
          <Link
            to="/"
            target="_blank"
            className="text-primary bg-white flexy text-xl monaBold py-2 px-10 rounded-full transition-all duration-500 hover:scale-105"
          >
            Book a call
          </Link>
        </div>

        <div className="flexy relative my-5 w-full h-full lg:w-2/3 2xl:w-[65%] rounded-xl ">
          <ReactPlayer
            playing
            loop={true}
            config={{
              file: {
                attributes: {
                  style: {
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'shadow-lg',
                  },
                },
              },
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              outline: 'none',
              border: 'none',
              borderRadius: '1rem',
              boxShadow: 'shadow-lg',
            }}
            muted={true}
            width="100%"
            height="100%"
            url={vid}
            controls
            className="!shadow-lg"
          />
        </div>

        <div className="flexy py-5">
          <LogoMarquee />
        </div>

        <div className="flexy py-5 text-left text-black">
          <ul className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
            <li className="flex items-start justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-6"
                alt=""
              />
              <span className="text-md lg:text-lg monaMedium">
                Unlimited design for a flat monthly fee.
              </span>
            </li>
            <li className="flex items-start justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-6"
                alt=""
              />
              <span className="text-md lg:text-lg monaMedium">
                No lengthy hiring procedures.
              </span>
            </li>
            <li className="flex items-start justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-6"
                alt=""
              />
              <span className="text-md lg:text-lg monaMedium">
                We will take care of all your creative needs.
              </span>
            </li>
            <li className="flex items-start justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-6"
                alt=""
              />
              <span className="text-md lg:text-lg monaMedium">
                No inefficient freelancers.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
