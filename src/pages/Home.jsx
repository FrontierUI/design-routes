import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { Phone } from 'lucide-react';

import Hero from '@/components/Hero';
import VideosCarousel from '@/components/VideosCarousel';

import {
  homePortFolioUp,
  homePortFolioBot,
  srcFilesList,
} from '@/contentData/utils';

import Services from '@/components/Services';
import Strategies from '@/components/Strategies';
import Testimonials from '@/components/Testimonials';
import Professionalism from '@/components/Professionalism';
import WorkEthics from '@/components/WorkEthics';
import RoutesWay from '@/components/RoutesWay';
import PortfolioMarquee from '@/components/PortfolioMarquee';

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Hero />

      <div className="w-full h-full px-5 lg:px-12">
        <VideosCarousel />
      </div>

      <div className="relative bg-primary w-full h-full max-lg:mt-9 imac:mt-10 py-5 lg:py-8 px-5 flexy flex-col space-y-5">
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="right"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...homePortFolioUp].map((item) => (
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
            {[...homePortFolioBot].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="w-full h-full relative pt-10 pb-5">
        <WorkEthics />
      </div>

      <RoutesWay />

      <div className="services relative w-full h-full py-6 bg-white">
        <div className="w-full h-full flexy flex-col px-5 lg:px-12">
          <div className="flexy flex-col pb-4 space-y-2 text-center">
            <p className="text-xl font-monaMedium">
              Our Full Stack Creative Products
            </p>
            <h2 className="text-2xl font-monaBold">
              With any subscription, you gain access to all our creative
              products
            </h2>
          </div>
          <Services />
        </div>
      </div>

      <div className="strategy relative w-full h-full mt-5 p-5 bg-primary">
        <div className="text-white w-full space-y-5">
          <div className="w-full flex items-start lg:items-center justify-start flex-col lg:flex-row lg:justify-between max-md:space-y-3 lg:px-7 pt-5 pb-3">
            <div className="flexStart">
              <h1 className="font-monaSemibold text-2xl lg:text-3xl">
                Here's how to get started
              </h1>
            </div>
            <div className="flexy">
              <Link to={'/pricing'} className="tpLink">
                see our plans
              </Link>
            </div>
          </div>

          <Strategies />
        </div>
      </div>

      <div className="interested relative w-full h-full lg:my-10 my-5">
        <div className="flexy flex-col px-5 lg:px-12 space-y-8">
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
                to={'https://koalendar.com/e/meet-with-routes-design'}
                target="_blank"
                className="relative lg:top-4 mt-4 interestedLink text-lg sm:text-xl"
              >
                book a call with a team
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full grid grid-cols-12 max-md:space-y-5 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-5 flexStart flex-col space-y-4">
              <div className="flex items-center justify-start">
                <hr className="hrBlack" />
                <h3>see how we compare</h3>
              </div>
              <h1 className="font-monaSemibold text-3xl">
                What makes us different?
              </h1>
              <p className="text-lg font-monaMedium">
                We will take care of all your creative needs. No inefficient
                freelancers. No lengthy hiring procedures. No contracts. Just
                your work getting done!
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 flexStart w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-slate-900 text-lg font-monaMedium w-full">
                {srcFilesList.map((listing) => (
                  <li
                    key={listing.para}
                    className="flex items-center justify-start gap-x-2"
                  >
                    <img
                      src={listing.src}
                      className="img-fluid"
                      width={38}
                      alt=""
                    />
                    <p>{listing.para}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-6 lg:py-10">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6 lg:py-12 bg-primary">
        <div
          className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/formETrans.svg)' }}
        />

        <div className="flexy relative w-full h-full lg:py-6 px-5 lg:px-12">
          <div className="w-full h-full grid grid-cols-12 gap-10 ">
            <div className="col-span-12 lg:col-span-6 relative flexStart flex-col w-full space-y-5 lg:space-y-12 text-white">
              <div className="flexStart flex-col space-y-5 w-full">
                <h3 className="font-monaSemibold text-2xl">Connect with Us</h3>
                <div className="flexStart flex-col leading-loose">
                  <h2 className="font-monaLight text-5xl">We're Ready to</h2>
                  <h2 className="font-monaLight text-5xl">
                    Explore Opportunities
                  </h2>
                </div>
              </div>

              <div className="flexStart flex-col space-y-6 lg:space-y-12 w-full">
                <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                  <div className="flexStart flex-col w-full lg:w-10/12">
                    <h1 className="font-monaBold text-6xl">55%</h1>
                    <h3 className="font-monaRegular text-xl">
                      Years in Business
                    </h3>
                  </div>
                  <div className="flexStart flex-col w-full">
                    <h1 className="font-monaBold text-6xl">300+</h1>
                    <h3 className="font-monaRegular text-xl">Clients Served</h3>
                  </div>
                </div>
                <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                  <div className="flexStart flex-col w-full lg:w-10/12">
                    <h1 className="font-monaBold text-6xl">1200+</h1>
                    <h3 className="font-monaRegular text-xl">
                      Successfull Projects
                    </h3>
                  </div>
                  <div className="flexStart flex-col w-full">
                    <h1 className="font-monaBold text-6xl">96%</h1>
                    <h3 className="font-monaRegular text-xl">
                      Repeat Customer Rate
                    </h3>
                  </div>
                </div>
              </div>

              <Link
                to={'/'}
                className="flexy gap-x-2 transitAll scal105 py-2.5 px-6 rounded-full font-monaSemibold text-xl bg-white text-primary"
              >
                <Phone className="w-6 h-6" />
                <span className="pr-1">Call Us</span>
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-6 relative w-full h-full">
              <form className="service-form">
                <div className="service-formItem">
                  <label className="service-formLabel">Full Name</label>
                  <input
                    required
                    placeholder="Enter your Name"
                    type="text"
                    className="service-formInput"
                  />
                </div>
                <div className="service-formItem">
                  <label className="service-formLabel">Email Address</label>
                  <input
                    required
                    placeholder="Enter your Email"
                    type="email"
                    className="service-formInput"
                  />
                </div>
                <div className="service-formItem">
                  <label className="service-formLabel">Company Name</label>
                  <input
                    placeholder="https://yourcompany.xyz"
                    type="text"
                    className="service-formInput"
                  />
                </div>
                <div className="service-formItem">
                  <label className="service-formLabel">Phone</label>
                  <input
                    required
                    placeholder="+008 654 231"
                    type="tel"
                    className="service-formInput"
                  />
                </div>

                <div className="service-formSelect">
                  <label htmlFor="prodServices" className="service-formLabel">
                    Select your service
                  </label>
                  <select
                    id="prodServices"
                    name="prodServices"
                    required
                    className="service-select w-full"
                  >
                    <option value="" className="service-selectOpt">
                      Select your service
                    </option>
                    <option
                      value="creativeCampaign"
                      className="service-selectOpt"
                    >
                      Creative Campaign
                    </option>
                    <option value="brandIdentity" className="service-selectOpt">
                      Brand Identity & Design
                    </option>
                    <option value="socialMM" className="service-selectOpt">
                      Social Media Management
                    </option>
                    <option value="webDD" className="service-selectOpt">
                      Web Design & Development
                    </option>
                    <option value="appDD" className="service-selectOpt">
                      App Design & Development
                    </option>
                    <option
                      value="presentationDesign"
                      className="service-selectOpt"
                    >
                      Presentation Design
                    </option>
                  </select>
                </div>

                <div className="service-formSelect">
                  <label className="service-formLabel">Message</label>
                  <textarea
                    rows={5}
                    className="service-formInput"
                    placeholder="Briefly tell us about your project..."
                  />
                </div>
                <div className="service-formBtn">
                  <button type="submit" className="service-button">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full pt-6 pb-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
