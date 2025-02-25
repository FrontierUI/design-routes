import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

import { appPortfolioBot, appPortfolioUp } from '@/contentData/utils';

import PortfolioMarquee from '@/components/PortfolioMarquee';
import LogoMarquee from '@/components/LogoMarquee';

import Professionalism from '@/components/Professionalism';
import Testimonials from '@/components/Testimonials';
import APPStrategies from '@/components/APPStrategies';
import AIEnhancedAPP from '@/components/AIEnhancedAPP';
import AppPricePackage from '@/components/AppPricePackage';
import AppDDAccordion from '@/components/AppDDAccordion';

const AppDesignDev = () => {
  return (
    <div className="relative w-full h-full AppProduct">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
        />

        <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-slate-100">
                <h3 className="text-2xl font-monaSemibold">Professional</h3>
                <h1 className="font-monaBold text-5xl">
                  App UI/UX Design & Development Product
                </h1>
                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  App and product design is at the core of many of our products.
                  Almost every one of our multi-disciplinary team will tend to
                  work on a product project at some point in its design cycle.
                  Our aim is always simple, to design and deliver intuitive apps
                  which engage our clients audience and exceed their goals.
                </p>
                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative inset-0 lg:top-10">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={800}
                gyroscope={true}
                scale={1.07}
                lassName="w-full p-4 h-auto"
              >
                <img
                  src="/images/productsPages/appHero.png"
                  className="img-fluid"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full max-lg:mt-9 imac:mt-10 py-5 px-5 flexy flex-col space-y-5">
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="right"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...appPortfolioUp].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="left"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...appPortfolioBot].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="strategyMarketing relative w-full h-full bg-primary text-white py-5 lg:py-10">
        <div className="flexy max-w-full mx-auto px-5 lg:px-12">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-2 sm:max-w-md lg:max-w-2xl md:space-y-5">
                <h1 className="text-5xl font-monaBold">
                  We're always-on to deliver the design you want when you need
                  it
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  For App UI & UX Design & Development, Routes.Design provides
                  more than just visually appealing interfaces. We deliver
                  strategic, user-centric solutions designed to boost growth,
                  enhance user engagement, and strengthen your online presence.
                  From concept to launch, our experienced designers work closely
                  with you to create captivating, intuitive app experiences. The
                  result? Seamlessly designed apps that align with your business
                  goals and empower you to exceed your objectives.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={800}
                gyroscope={true}
                scale={1.05}
                lassName="w-full p-8 h-auto"
              >
                <img
                  src="/images/productsPages/websitemiddle.png"
                  className="img-fluid"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      <div className="comprehensive relative w-full h-full py-5 pt-10">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
            <h3 className="text-2xl uppercase font-monaSemibold">
              Amazing User experience
            </h3>
            <h1 className="text-5xl font-monaBold">
              Full-stack App design & development Product
            </h1>
          </div>
        </div>

        <APPStrategies />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <AIEnhancedAPP />
      </div>

      <div className="relative w-full h-full py-4">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <AppPricePackage />
      </div>

      <div className="relative flexy flex-col w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="font-monaBold text-center text-4xl">
            Got any questions?
          </h1>
        </div>

        <div className="px-5 w-full lg:w-2/3">
          <AppDDAccordion />
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default AppDesignDev;
