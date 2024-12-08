// import React from 'react';

import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import vid from '/images/860x500.mp4';
import Video from './Video';

const Hero = () => {
  // let vidStyles = 'rounded-2xl';

  return (
    <section className="w-full h-screen bg-primary">
      <div className="flexy flex-col px-5 text-white relative top-36 text-center">
        <div className="flexy flex-col space-y-2.5">
          <div className="flexy">
            <hr className="horLine hidden lg:block lg:mr-3 " />
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
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="pt-1.5">Creative Cloud</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/figma.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="pt-1.5">Figma</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/vscode.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="pt-1.5">VS Code</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mx-2 lg:mx-3">
            <img
              src="/images/meta.png"
              className="w-16 h-16 object-cover"
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

        <div className="flexy relative my-5 w-full h-full lg:w-3/4 rounded-xl">
          <ReactPlayer
            playing
            loop={true}
            config={{
              file: {
                attributes: {
                  style: {
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
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
            }}
            muted={true}
            width="100%"
            height="100%"
            url={vid}
            controls
          />

          {/* <Video /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
