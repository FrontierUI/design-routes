import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

import { webPortfolioBot, webPortfolioUp } from '@/contentData/utils';

import Typewriting from '@/components/Typewriting';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import LogoMarquee from '@/components/LogoMarquee';
import WebStrategies from '@/components/WebStrategies';
import AIEnhancedWDD from '@/components/AIEnhancedWDD';
import Professionalism from '@/components/Professionalism';
import WebPricePackage from '@/components/WebPricePackage';
import WebDDAccordion from '@/components/WebDDAccordion';
import WebDDCounter from '@/components/WebDDCounter';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WebDesignDev = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productsPackages, setProductsPackages] = useState({});

  useEffect(() => {
    fetchProductDetails();

    return () => {
      setProductDetails({});
      setProductsPackages([]);
    };
  }, []);

  const fetchProductDetails = () => {
    const json = JSON.stringify({ slug: "web-design-and-development" });

    axios.post( `${import.meta.env.VITE_BASE_API}/api.php?action=get_service_details`,
      JSON.stringify({ params: json }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      if (response.data.success === 'true') {
        setProductDetails(response.data.service_details);
        setProductsPackages(response.data.service_packages);
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  }

  return (
    productDetails.service_sub_title !== undefined 
    ?
    <div className="relative w-full h-full wddProduct">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_BASE_API}/images/productsPages/lightBGE2.png)`,
          }}
        />

        <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-slate-100">
                <h3 className="text-2xl font-monaSemibold">Professional</h3>
                <h1 className="font-monaBold text-5xl">
                  <Typewriting
                    text={productDetails?.service_sub_title}
                    speed={150}
                  />
                </h1>
                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  {productDetails?.service_description}
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative lg:top-12">
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                transitionSpeed={800}
                gyroscope={true}
                scale={1.04}
                lassName="w-full p-5 h-auto"
              >
                <img
                  src={import.meta.env.VITE_BASE_API+productDetails?.service_images}
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
            {[...webPortfolioUp].map((item) => (
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
            {[...webPortfolioBot].map((item) => (
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
                <h3 className="text-2xl font-monaSemibold uppercase">
                  BUILT FOR BRAND, PERFORMANCE & MARKETING TEAMS
                </h3>

                <h1 className="text-5xl font-monaBold">
                  <Typewriting
                    text="Get streamlined web design that converts"
                    speed={80}
                  />
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  More than visually appealing web design, Routes.Design
                  delivers the strategic, user-centric solutions you need to
                  drive growth, improve user engagement and solidify your online
                  presence.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  From initial concept to final launch, our veteran web
                  designers will work closely with you to craft captivating,
                  user-friendly online experiences. The result? Web designs that
                  align with your business objectives and help you crush your
                  goals.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                transitionSpeed={800}
                gyroscope={true}
                scale={1.05}
                lassName="w-full p-8 h-auto"
              >
                <img
                  src={`${import.meta.env.VITE_BASE_API}/images/productsPages/websitemiddle.png`}
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
              RESPONSIVE SOLUTIONS
            </h3>
            <h1 className="text-5xl font-monaBold">
              <Typewriting
                text="Full Stack Web Design & Development Services"
                speed={80}
              />
            </h1>
          </div>
        </div>

        <WebStrategies />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <AIEnhancedWDD />
      </div>

      <div className="relative w-full h-full py-6">
        <div className="flexy flex-col w-full px-5 lg:px-12">
          <div className="flexy flex-col w-full pb-6 text-center space-y-2">
            <h2 className="text-2xl font-monaSemibold">SUCCESS METRICS</h2>
            <h1 className="text-4xl font-monaBold">
              <Typewriting
                text="Choose a web design agency with a proven track record"
                speed={70}
              />
            </h1>
            <p className="lg:w-3/4">
              Don’t go with any old web design company. Let data inform your
              decision and choose a web design partner proven to deliver
              results. With thousands of projects under our belt and happy
              customers across the board, you can trust in us.
            </p>
          </div>
          <WebDDCounter />
        </div>
      </div>

      <div className="relative w-full h-full py-4">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <WebPricePackage Packages={productsPackages}/>
      </div>

      <div className="relative flexy flex-col w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="font-monaBold text-center text-4xl">
            Got any questions?
          </h1>
        </div>

        <div className="px-5 w-full lg:w-2/3">
          <WebDDAccordion />
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
    :
    <div className="loading flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="w-32 h-32 animate-bounce">
          <img
            src="/images/routeslogo.svg"
            alt="Loading"
            className="w-32 h-32 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDesignDev;
