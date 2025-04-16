import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import LogoMarquee from '@/components/LogoMarquee';
import Typewriting from '@/components/Typewriting';

import vid from '/images/860x500.mp4';

const Hero = () => {
  return (
    <section className="relative w-full h-full z-[1]">
      <div className="relative w-full h-full flexy flex-col">
        <div className="relative w-full h-screen bg-primary flexy flex-col">
          <div
            className="hidden xl:block absolute w-[430px] h-[430px] macbook:w-[530px] macbook:h-[530px] -right-48 top-32 macbook:top-40 macbook:-right-[15rem] bg-center bg-no-repeat bg-contain z-10"
            style={{ backgroundImage: 'url(/images/ewhiteGif.gif)' }}
          />
          <div
            className="hidden xl:block absolute w-[430px] h-[430px] macbook:w-[500px] macbook:h-[500px] -left-[17rem] bottom-20 macbook:bottom-16 macbook:-left-[20rem] bg-center bg-no-repeat bg-contain z-10"
            style={{
              backgroundImage: 'url(/images/icons/RoutesWhite.png)',
              transform: 'scaleX(-1)',
            }}
          />
          <div className="flexy flex-col px-5 text-white relative lg:-top-5 lapy:-top-10 text-center !overflow-hidden">
            <div className="flexy flex-col w-full overflow-hidden space-y-2.5">
              <div className="flexy">
                <hr className="horLine hidden lg:block lg:mr-3" />
                <h4 className="uppercase text-lg font-monaMedium">
                  Full service design agency
                </h4>
              </div>
              <h1 className="text-5xl lg:text-7xl font-monaBold">
                <Typewriting text="Design That Delivers" speed={150} />
              </h1>
              <p className="text-md">
                We are the extension of your creative team
              </p>
            </div>

            <div className="flexy relative max-sm:right-5 w-full max-w-[23rem] min-w-[20rem] gap-x-5 mt-5">
              <div className="flexy grow-1 flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out relative max-lg:left-6 left-5">
                <img
                  src="/images/creativeCloud.png"
                  className="w-16 h-16 object-cover img-fluid"
                  alt=""
                />
                <p className="pt-1.5">Creative Cloud</p>
              </div>
              <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out ">
                <img
                  src="/images/figma.png"
                  className="w-16 h-16 object-cover img-fluid"
                  alt=""
                />
                <p className="pt-1.5">Figma</p>
              </div>
              <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out ">
                <img
                  src="/images/Webflow.png"
                  className="w-16 h-16 object-cover img-fluid"
                  alt=""
                />
                <p className="pt-1.5">Webflow</p>
              </div>
              <div className="flexy flex-col space-y-1 cursor-pointer transition-all hover:scale-105 duration-500 ease-in-out ">
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
                to="/book-a-call"
                className="text-primary bg-white flexy text-xl font-monaBold py-2 px-10 rounded-full transition-all duration-500 hover:scale-105"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>

        <div className="flexy relative -mt-20 lg:-mt-32 lapy:-mt-48 w-full h-full lg:w-2/3 2xl:w-[65%] macbook:w-3/5 imac:w-1/2 rounded-xl max-lg:px-5">
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

        <div className="flexy py-5 overflow-hidden">
          <LogoMarquee />
        </div>

        <div className="flexy py-5 text-left text-slate-900">
          <ul className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
            <li className="flex items-center justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-5"
                alt=""
              />
              <span className="text-md lg:text-lg font-monaMedium">
                Unlimited design for a flat monthly fee.
              </span>
            </li>
            <li className="flex items-center justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-5"
                alt=""
              />
              <span className="text-md lg:text-lg font-monaMedium">
                No lengthy hiring procedures.
              </span>
            </li>
            <li className="flex items-center justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-5"
                alt=""
              />
              <span className="text-md lg:text-lg font-monaMedium">
                We will take care of all your creative needs.
              </span>
            </li>
            <li className="flex items-center justify-start gap-x-1.5">
              <img
                src="/images/icons/Right1.svg"
                className="img-fluid w-5"
                alt=""
              />
              <span className="text-md lg:text-lg font-monaMedium">
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
