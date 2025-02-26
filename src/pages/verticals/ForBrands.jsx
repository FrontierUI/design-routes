import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { ArrowUpRight } from 'lucide-react';

import LogoMarquee from '@/components/LogoMarquee';
import Services from '@/components/Services';
import Professionalism from '@/components/Professionalism';
import Testimonials from '@/components/Testimonials';

const ForBrands = () => {
  return (
    <div className="relative w-full h-full forBrands">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-full -z-[1] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
        />

        <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-white">
                <h3 className="text-2xl font-monaSemibold uppercase">
                  Who is it for?
                </h3>

                <h1 className="font-monaBold text-4xl lg:text-5xl">
                  Position your Brand for Rapid Growth
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  Reach your marketing goals without getting bogged down by
                  graphics! You provide the ideas and concepts, and we deliver
                  top-notch marketing materials.
                </p>

                <ul className="flexStart flex-col space-y-2">
                  <li className="gap-x-3 justStartCenter">
                    <img
                      src="/images/icons/roundCheckWhite.svg"
                      className="img-fluid w-[25px]"
                      alt=""
                    />
                    <span className="text-md">
                      Eliminate creative bottlenecks
                    </span>
                  </li>
                  <li className="gap-x-3 justStartCenter">
                    <img
                      src="/images/icons/roundCheckWhite.svg"
                      className="img-fluid w-[25px]"
                      alt=""
                    />
                    <span className="text-md">
                      Get your creative to market 3x faster
                    </span>
                  </li>
                  <li className="gap-x-3 justStartCenter">
                    <img
                      src="/images/icons/roundCheckWhite.svg"
                      className="img-fluid w-[25px]"
                      alt=""
                    />
                    <span className="text-md">
                      Supplement your existing graphic design process
                    </span>
                  </li>
                </ul>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative lg:top-6 lg:py-12">
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                transitionSpeed={800}
                gyroscope={true}
                scale={1.04}
                lassName="w-full p-8 lg:p-12 h-auto"
              >
                <img
                  src="/images/productsPages/BrandsDigitalMarketing.png"
                  className="img-fluid"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 mt-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="relative w-full h-full flexy py-6">
        <div className="flexy flex-col w-full px-5 lg:px-12">
          <div className="flexy flex-col pb-6 space-y-4 lg:w-3/4 text-center">
            <h1 className="text-3xl font-monaBold">
              A Single Subscription to Replace Your Company’s Design Departments
            </h1>
            <p className="text-lg">
              With one subscription, we handle all your business's design needs
              across every department. Your projects will be overseen by a
              dedicated manager, and our expert team of graphic designers, web
              designers, UX/UI specialists, and motion designers will
              efficiently meet any of your demands.
            </p>
          </div>

          <div className="w-full h-full grid grid-cols-12 gap-6">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.03}
              className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
            >
              <div className="flexStart w-full rounded-lg relative innerEffect">
                <img
                  src="/images/productsPages/customPowerPoint.png"
                  className="img-fluid w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                  <h2 className="text-4xl font-monaBold">Slow</h2>
                  <p className="text-lg">
                    No more in-house design departments or full-time designers
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.03}
              className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
            >
              <div className="flexStart w-full rounded-lg relative innerEffect">
                <img
                  src="/images/productsPages/presentTemplate.png"
                  className="img-fluid w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 sm:space-y-4">
                  <h2 className="text-4xl font-monaBold">Rigid</h2>
                  <p className="text-lg">
                    Significant time savings for your managers
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.03}
              className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
            >
              <div className="flexStart w-full rounded-lg relative innerEffect">
                <img
                  src="/images/productsPages/investorDecks.png"
                  className="img-fluid w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                  <h2 className="text-4xl font-monaBold">Cost Overruns</h2>
                  <p className="text-lg">
                    Reduced costs on salaries and recruitment
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>

      <div className="services relative w-full h-full py-6 bg-white">
        <div className="w-full h-full flex flex-col px-5 lg:px-12">
          <div className="flexy flex-col pb-6 space-y-2 text-center">
            <h2 className="text-3xl font-monaBold">
              Only Creative as a Product Sets You Free!
            </h2>
            <p className="text-lg">
              Access a global talent pool with a full range of creative Products
              with turnarounds as fast as 12 to 24hours.
            </p>
          </div>

          <div className="justStartCenter pb-3 flex-col lg:!justify-between lg:flex-row">
            <h1 className="text-4xl font-monaBold">Our Services</h1>
            <Link to={'/'} className="tpBordPrim text-xl font-monaSemibold">
              Our Works
            </Link>
          </div>

          <Services />
        </div>
      </div>

      <div className="relative w-full h-full py-6">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <div className="w-full flexy lg:px-12">
          <div className="flexy relative text-white w-full p-5 md:p-12">
            <div
              className="absolute w-full h-full -z-[1] bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: 'url(/images/interested.jpg)' }}
            />

            <div className="flexStart flex-col w-full px-2 lg:px-10 py-16">
              <div className="flexy flex-col lg:!items-start lg:!justify-start w-full space-y-4">
                <h2 className="text-xl font-monaMedium uppercase">
                  Let's work together
                </h2>
                <h1 className="text-5xl lg:text-7xl font-monaBold">
                  Contact Us
                </h1>

                <p className="text-lg">
                  Know what you want? Great. Got questions? Even better.
                </p>
                <Link
                  to={'https://koalendar.com/e/meet-with-routes-design'}
                  target="_blank"
                  className="flexy bookCallNow gap-x-3 relative top-4"
                >
                  <span>Book a call now</span>
                  <ArrowUpRight className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default ForBrands;
