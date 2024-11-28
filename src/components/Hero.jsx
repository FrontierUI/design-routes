// import React from 'react';

const Hero = () => {
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

        <div className="flexy w-full h-full gap-x-2 mt-4">
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out relative mr-3 lg:mx-3 lg:left-20">
            <img
              src="/images/creativeCloud.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="">Creative Cloud</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mr-3 lg:mx-3">
            <img
              src="/images/figma.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="">Figma</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out mr-3 lg:mx-3">
            <img
              src="/images/vscode.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="">VS Code</p>
          </div>
          <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out lg:mx-3">
            <img
              src="/images/meta.png"
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p className="">Meta</p>
          </div>
        </div>

        <div className="flexy"></div>
      </div>
    </section>
  );
};

export default Hero;
