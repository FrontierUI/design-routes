import { Link } from 'react-router-dom';

import Typewriting from '@/components/Typewriting';
import LogoMarquee from '@/components/LogoMarquee';
import Services from '@/components/Services';
import Strategies from '@/components/Strategies';
import CounterNumbers from '@/components/CounterNumbers';

const About = () => {
  return (
    <div className="relative w-full h-full aboutUs">
      <div className="relative w-full h-full">
        <div className="w-full flexy flex-col px-5 py-10 pt-16 lg:pt-20 lg:mt-28 lg:mb-16">
          <div className="flexy flex-col lg:w-2/3 space-y-5 text-center">
            <h1 className="text-5xl lg:text-7xl font-monaExtra">
              <Typewriting text="Design That Delivers" speed={150} />
            </h1>
            <p className="text-lg">
              We specialize in delivering innovative solutions tailored to meet
              the unique needs of our clients. Delivering creative & digital
              solutions that drive results.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full bg-primary py-6 lg:py-12">
        <div className="flexy flex-col px-5 w-full">
          <div className="flexy flex-col text-center text-white space-y-5 lg:space-y-8 w-full lg:w-2/3">
            <h1 className="text-5xl font-monaBold">Who we are</h1>
            <p className="text-lg">
              We are a bunch of creatives and developers dedicated to partnering
              with leading digital agencies &amp; brands &amp; serving as their
              remote team, delivering cost-eective and high-quality solutions.
            </p>
            <p className="text-lg">
              Our mission is to seamlessly integrate with your operations,
              providing innovative digital experiences and strategic support to
              help you achieve exceptional outcomes
            </p>

            <Link to={'/'} className="transBtnHoverFill">
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 mt-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="count relative w-full h-full py-6">
        <div className="w-full md:px-12">
          <div className="flex items-center lg:items-start justify-center lg:!justify-between flex-col lg:flex-row max-lg:gap-y-6 lg:gap-x-10">
            <div className="relative founded flex items-center md:items-start justify-center md:justify-start flex-col space-y-7 lg:space-y-10 lapy:space-y-20 lg:pt-10 lg:max-w-[260px]">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-monaBold text-3xl">Founded</h3>
                <h1 className="font-filsonHeavy text-8xl">
                  <CounterNumbers start={0} end={2018} duration={2000} />
                </h1>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-monaBold text-3xl">Clients</h3>
                <h1 className="font-filsonHeavy text-8xl">
                  <CounterNumbers start={0} end={204} duration={2000} />
                </h1>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-monaBold text-3xl">Projects</h3>
                <h1 className="font-filsonHeavy text-8xl">
                  <CounterNumbers start={0} end={771} duration={2000} />
                </h1>
              </div>
            </div>

            <div className="relative w-full h-full flex items-center justify-center lg:items-end lg:justify-end">
              <div className="flexy w-full lg:w-[950px] max-lg:w-[1050px] lapy:w-[1100px] h-full max-h-full max-lapy:max-w-[1150px] md:min-h-[30rem] transitAll scal102">
                <img
                  src="/images/RoutesEIcons.png"
                  className="img-fluid min-h-96 lg:min-h-full w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services relative w-full h-full py-6 bg-white">
        <div className="w-full h-full flex flex-col px-5 lg:px-12">
          <div className="justStartCenter pb-3 flex-col lg:!justify-between lg:flex-row">
            <h1 className="text-4xl font-monaBold">Our Services</h1>
            <Link to={'/'} className="tpBordPrim text-xl font-monaSemibold">
              Our Works
            </Link>
          </div>

          <Services />
        </div>
      </div>

      <div className="strategy relative w-full h-full mt-5 p-5 bg-primary">
        <div className="text-white w-full space-y-5">
          <div className="w-full flex items-start lg:items-center justify-start flex-col lg:flex-row lg:justify-between max-md:space-y-3 lg:px-7 pt-5 pb-3">
            <div className="flexStart">
              <h1 className="font-monaSemibold text-2xl lg:text-3xl">
                <Typewriting text="Here's how to get started" speed={80} />
              </h1>
            </div>
            <div className="flexy">
              <Link to={'/'} className="tpLink">
                see our plans
              </Link>
            </div>
          </div>

          <Strategies />
        </div>
      </div>

      <div className="interested relative w-full h-full my-6 lg:my-10">
        <div className="flexy lg:px-12">
          <div className="relative w-full h-full flexy lg:max-h-[400px] max-sm:p-2 sm:p-10 overflow-hidden z-[2]">
            <div
              className="absolute w-full h-full rounded-xl bg-no-repeat bg-cover bg-center -z-[1]"
              style={{ backgroundImage: 'url(/images/interested.jpg)' }}
            />

            <div className="flexStart text-white flex-col w-full py-16 px-2 sm:px-10">
              <h1 className="text-5xl sm:text-6xl font-monaBold tracking-wider">
                Interested?
              </h1>
              <p className="my-2 w-auto font-monaMedium sm:w-3/5 pt-1">
                Just drop your contact info and we will get back to you as soon
                as possible.
              </p>

              <Link
                to={'/'}
                target="_blank"
                className="relative lg:top-4 mt-4 interestedLink text-lg sm:text-xl"
              >
                book a call with a team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
