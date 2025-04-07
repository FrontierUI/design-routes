import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

import { Check } from 'lucide-react';

import { smmPortfolioBot, smmPortfolioUp } from '@/contentData/utils';

import Typewriting from '@/components/Typewriting';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import FormatMastery from '@/components/FormatMastery';
import LogoMarquee from '@/components/LogoMarquee';
import SMMStrategies from '@/components/SMMStrategies';
import SMMAIEnhanced from '@/components/SMMAIEnhanced';
import SMPlatforms from '@/components/SMPlatforms';
import SMMCounter from '@/components/SMMCounter';
import Professionalism from '@/components/Professionalism';
import SMMPackage from '@/components/SMMPackage';
import SMMAccordion from '@/components/SMMAccordion';
import Testimonials from '@/components/Testimonials';

import { Helmet } from 'react-helmet-async';

const SocialMediaManagement = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productsPackages, setProductsPackages] = useState({});
  const [portfolios, setPortfolios] = useState([]); 

  useEffect(() => {
    fetchProductDetails();

    const timeoutId = setTimeout(() => {
      const element = document.querySelector('#root > main');
      if (element) {
        element.classList.remove('overflow-x-hidden');
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      const element = document.querySelector('#root > main');
      if (element) {
        element.classList.add('overflow-x-hidden');
      }
      setProductDetails({});
      setProductsPackages([]);
    };
  }, []);

  const fetchProductDetails = () => {
    const json = JSON.stringify({ slug: "social-media-management" });

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
        setPortfolios(response.data.portfolios);
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  }

  return (
    <>
      <Helmet>
        <title>Effective Social Media Management Services | Routes.Design</title>
        <meta name="description" content="Engage your audience and drive interaction with Routes.Design's social media management services, tailored to enhance your brand's online presence." />
      </Helmet>
      {productDetails.service_sub_title !== undefined 
      ?
      <div className="relative w-full h-full smmProduct">
        <div className="relative w-full h-full">
          <div
            className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${import.meta.env.VITE_BASE_API}/images/productsPages/creativeCampBann.svg)` }}
          />

          <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
            <div className="w-full flex flex-wrap items-center max-md:pt-24">
              <div className="w-full lg:w-1/2 lg:px-3">
                <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-slate-100">
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

              <div className="w-full lg:w-1/2 relative lg:top-5">
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
              {/* {[...smmPortfolioUp].map((item) => (
                <PortfolioMarquee
                  imgSrc={item.imgSrc}
                  href={item.href}
                  key={item.href}
                />
              ))} */}
              {[...portfolios].map((item,index) => (
                <PortfolioMarquee
                  imgSrc={import.meta.env.VITE_BASE_API+item.header_image}
                  href={`/our-work/${item.brand_slug}`}
                  key={index}
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
              {/* {[...smmPortfolioBot].map((item) => (
                <PortfolioMarquee
                  imgSrc={item.imgSrc}
                  href={item.href}
                  key={item.href}
                />
              ))} */}
              {[...portfolios].map((item,index) => (
                <PortfolioMarquee
                  imgSrc={import.meta.env.VITE_BASE_API+item.header_image}
                  href={`/our-work/${item.brand_slug}`}
                  key={index}
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
                    BUILT FOR COMMS, STRATEGY & MARKETING TEAMS
                  </h3>

                  <h1 className="text-5xl font-monaBold">
                    <Typewriting
                      text="Strategic social media creative"
                      speed={100}
                    />
                  </h1>

                  <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                    With multiple formats needed to fit each social media platform
                    and the pressure to maintain a consistent, engaging presence,
                    you also need a social media design partner who’s up to the
                    task.
                  </p>

                  <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                    Routes.Design brings you highly skilled social media
                    designers, trained on the latest tools and technologies to
                    scale social media creative, ensuring speed, consistency and,
                    most of all, impact from your creative.
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-5 xl:flex-row text-white">
                    <button className="transBorderBtn">
                      Cost-effective
                      <Check />
                    </button>
                    <button className="transBorderBtn">
                      Hassle-free
                      <Check />
                    </button>
                    <button className="transBorderBtn">
                      Built for speed & efficiency
                      <Check />
                    </button>
                  </div>
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
                    src={`${import.meta.env.VITE_BASE_API}/images/productsPages/socialmedia.png`}
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
                SOCIAL MEDIA FLUENCY
              </h3>
              <h1 className="text-5xl font-monaBold">
                <Typewriting
                  text="End-to-end social media management"
                  speed={70}
                />
              </h1>
            </div>
          </div>

          <SMMStrategies />
        </div>

        <div className="formatMastSect relative w-full h-full py-5 pb-5">
          <div className="flexy max-w-full px-5 pb-6">
            <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
              <h3 className="text-2xl uppercase font-monaSemibold">
                format Flexibility
              </h3>
              <h1 className="text-5xl font-monaBold">
                <Typewriting
                  text="Dynamic formats for social engagement"
                  speed={70}
                />
              </h1>
            </div>
          </div>

          <FormatMastery />
        </div>

        <div className="relative w-full h-full flexy py-6">
          <SMPlatforms />
        </div>

        <div className="enhanced relative w-full h-full py-6">
          <SMMAIEnhanced />
        </div>

        <div className="comprehensive relative w-full h-full py-6">
          <div className="flexy flex-col max-w-full px-5 pb-6">
            <div className="flexy flex-col space-y-5 text-center text-slate-900 w-full">
              <div className="flexy flex-col space-y-2 text-center text-slate-900 lg:w-2/3">
                <h3 className="text-2xl uppercase font-monaSemibold">
                  Proven Impact
                </h3>
                <h1 className="text-4xl font-monaBold">
                  <Typewriting
                    text="Data-driven success for our customers"
                    speed={70}
                  />
                </h1>

                <p className="pt-2">
                  Our track record speaks volumes. Dive into the metrics that
                  highlight our expertise and success in delivering social media
                  creative that makes a difference.
                </p>
              </div>

              <div className="flexy flex-wrap gap-x-5 gap-y-5 lg:flex-row w-full">
                <Link
                  to={'javascipt:void(0)'}
                  className="flexy tpBordPrim gap-x-1.5"
                >
                  <button className="font-monaSemibold text-lg">
                    Comprehensive Services
                  </button>
                  <Check className="w-7 h-7" />
                </Link>
                <Link
                  to={'javascipt:void(0)'}
                  className="flexy tpBordPrim gap-x-1.5"
                >
                  <button className="font-monaSemibold text-lg">
                    Consistent Quality
                  </button>
                  <Check className="w-7 h-7" />
                </Link>
                <Link
                  to={'javascipt:void(0)'}
                  className="flexy tpBordPrim gap-x-1.5"
                >
                  <button className="font-monaSemibold text-lg">
                    Extension of your team
                  </button>
                  <Check className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>

          <SMMCounter />
        </div>

        <div className="relative w-full h-full py-6">
          <Professionalism />
        </div>

        <div className="relative w-full h-full py-6">
          <SMMPackage  Packages={productsPackages}/>
        </div>

        <div className="relative flexy flex-col w-full h-full py-6">
          <div className="flexy px-5 pb-6">
            <h1 className="font-monaBold text-center text-4xl">
              Got any questions?
            </h1>
          </div>
          <div className="px-5 w-full lg:w-2/3">
            <SMMAccordion />
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
      </div>}
    </>
  );
};

export default SocialMediaManagement;
