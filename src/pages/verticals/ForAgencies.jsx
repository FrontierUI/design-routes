import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'react-helmet-async';

import { ArrowUpRight } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Typewriting from '@/components/Typewriting';
import LogoMarquee from '@/components/LogoMarquee';
import Services from '@/components/Services';
import Professionalism from '@/components/Professionalism';
import Testimonials from '@/components/Testimonials';

const ForAgencies = () => {
  return (
    <>
      <Helmet>
        <title>Design Solutions Tailored for Agencies | Routes.Design</title>
        <meta
          name="description"
          content="Discover how Routes.Design partners with agencies to provide scalable and reliable design services, acting as an extension of your creative team."
        />
      </Helmet>

      <Navbar />

      <div className="relative w-full h-full forAgencies">
        <div className="relative w-full h-full">
          <div
            className="absolute top-0 w-full h-full -z-[1] bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
          />

          <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
            <div className="w-full flex flex-wrap items-center max-md:pt-24">
              <div className="w-full lg:w-1/2">
                <div className="w-full flex-col sm:max-w-md lg:max-w-[40rem] space-y-3 md:space-y-5 text-white">
                  <h3 className="text-2xl font-monaSemibold uppercase">
                    Who is it for?
                  </h3>

                  <h1 className="font-monaBold text-4xl lg:text-5xl">
                    <Typewriting
                      text="Multiply your agency output without Multiplying your overhead costs"
                      speed={120}
                    />
                  </h1>

                  <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                    Overwhelmed? Overworked? Not anymore! Our vetted designers
                    can take care of your own or your clients requests, allowing
                    you to focus on what matters.
                  </p>

                  <ul className="flexStart flex-col space-y-2">
                    <li className="gap-x-3 justStartCenter">
                      <img
                        src="/images/icons/roundCheckWhite.svg"
                        className="img-fluid w-[25px]"
                        alt=""
                      />
                      <span className="text-md">
                        Save time and money on creative production
                      </span>
                    </li>
                    <li className="gap-x-3 justStartCenter">
                      <img
                        src="/images/icons/roundCheckWhite.svg"
                        className="img-fluid w-[25px]"
                        alt=""
                      />
                      <span className="text-md">
                        Scale up and down as needed
                      </span>
                    </li>
                    <li className="gap-x-3 justStartCenter">
                      <img
                        src="/images/icons/roundCheckWhite.svg"
                        className="img-fluid w-[25px]"
                        alt=""
                      />
                      <span className="text-md">
                        Hit unrealistic client deadlines
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
                    src="/images/productsPages/forAgencies.png"
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
            <div className="flexy flex-col pb-6 space-y-4">
              <h3 className="uppercase text-2xl font-monaSemibold">
                Inefficient Agencies and Freelancers Create Drag
              </h3>
              <h1 className="text-5xl font-monaBold">
                <Typewriting
                  text="Agency Barriers to Scaling Creative"
                  speed={100}
                />
              </h1>
              <p className="text-xl">
                Traditional creative agencies are more likely to work their way
                than your way.
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
                    src="/images/productsPages/slow.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">Slow</h2>
                    <p className="text-xl">Update uploading</p>
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
                    src="/images/productsPages/rigid.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">Rigid</h2>
                    <p className="text-xl">Abort course correction</p>
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
                    src="/images/productsPages/overruns.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">Cost Overruns</h2>
                    <p className="text-xl">Limitaions exceeded</p>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flexy py-6">
          <div className="flexy flex-col w-full px-5 lg:px-12">
            <div className="flexy flex-col pb-6 space-y-2 text-center">
              <h1 className="text-4xl font-monaBold">
                <Typewriting text="Freelancer Friction Points" speed={100} />
              </h1>
              <p className="text-lg">
                Traditional creative agencies are more likely to work their way
                than your way.
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
                    src="/images/productsPages/niche.png"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">Niche</h2>
                    <p className="text-xl">Expert mode only</p>
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
                    src="/images/productsPages/Individual.png"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">Individual</h2>
                    <p className="text-xl">Replication Failed</p>
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
                    src="/images/productsPages/Recalculating.png"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute text-white p-6 flex flex-col space-y-2 sm:space-y-4">
                    <h2 className="text-4xl font-monaBold">High touch</h2>
                    <p className="text-xl">Recalculating</p>
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
                <Typewriting
                  text="Only Creative as a Product Sets You Free! Work the way you need to work"
                  speed={60}
                />
              </h2>
              <p className="text-xl">
                Access a global talent pool with a full range of creative
                Products with turnarounds as fast as 12 to 24hours.
              </p>
            </div>

            <div className="justStartCenter pb-6 flex-col lg:!justify-between lg:flex-row">
              <h1 className="text-4xl font-monaBold">Our Services</h1>
              <Link
                to={'/our-work'}
                className="tpBordPrim text-xl font-monaSemibold"
              >
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
                  <h2 className="text-xl tracking-wider font-monaMedium uppercase">
                    Let’s work together
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

      <Footer />
    </>
  );
};

export default ForAgencies;
