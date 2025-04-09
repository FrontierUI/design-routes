import Marquee from 'react-fast-marquee';

import Tilt from 'react-parallax-tilt';

import { homePortFolioBot, homePortFolioUp } from '@/contentData/utils';

import Typewriting from '@/components/Typewriting';
import ComprehensiveCC from '@/components/ComprehensiveCC';
import FormatMastery from '@/components/FormatMastery';
import LogoMarquee from '@/components/LogoMarquee';
import Professionalism from '@/components/Professionalism';
import Testimonials from '@/components/Testimonials';
import AIEnhanced from '@/components/AIEnhanced';
import ProvenExpertise from '@/components/ProvenExpertise';
import CreativeCampaignPackage from '@/components/CreativeCampaignPackage';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import CCAccordion from '@/components/CCAccordion';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';

const CreativeCampaigns = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productsPackages, setProductsPackages] = useState({});
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchProductDetails();

    return () => {
      setProductDetails({});
      setProductsPackages([]);
    };
  }, []);

  const fetchProductDetails = () => {
    const json = JSON.stringify({ slug: 'creative-campaigns' });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_service_details`,
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
  };

  return (
    <>
      <Helmet>
        <title>Innovative Creative Campaign Services | Routes.Design</title>
        <meta
          name="description"
          content="Captivate your audience with Routes.Design's creative campaign services, delivering compelling and innovative solutions tailored to your business goals."
        />
      </Helmet>
      {productDetails.service_sub_title !== undefined ? (
        <div className="relative w-full h-full creativeCampaigns">
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_BASE_API
                }/images/productsPages/creativeCampBann.svg)`,
              }}
            />

            <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
              <div className="w-full flex flex-wrap items-center max-md:pt-24">
                <div className="w-full lg:w-1/2 lg:px-3">
                  <div className="w-full flex-col sm:max-w-md lg:max-w-xl macbook:max-w-2xl space-y-3 md:space-y-5 text-white">
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

                <div className="w-full lg:w-1/2 relative lg:top-6">
                  <Tilt
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    transitionSpeed={800}
                    gyroscope={true}
                    scale={1.04}
                    lassName="w-full p-12 h-auto"
                  >
                    <img
                      src={
                        import.meta.env.VITE_BASE_API +
                        productDetails?.service_images
                      }
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
                {/* {[...homePortFolioUp].map((item) => (
                <PortfolioMarquee
                  imgSrc={item.imgSrc}
                  href={item.href}
                  key={item.href}
                />
              ))} */}
                {[...portfolios].map((item, index) => (
                  <PortfolioMarquee
                    imgSrc={import.meta.env.VITE_BASE_API + item.header_image}
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
                {/* {[...homePortFolioBot].map((item) => (
                <PortfolioMarquee
                  imgSrc={item.imgSrc}
                  href={item.href}
                  key={item.href}
                />
              ))} */}
                {[...portfolios].map((item, index) => (
                  <PortfolioMarquee
                    imgSrc={import.meta.env.VITE_BASE_API + item.header_image}
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
                      built for comms, strategy & marketing teams
                    </h3>

                    <h1 className="text-5xl font-monaBold">
                      <Typewriting
                        text="Ad creative for campaigns that perform"
                        speed={80}
                      />
                    </h1>

                    <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                      The need for compelling ad creative has never been
                      greater. But, when your biggest challenge is getting to
                      market, the best solution is plugging into Routes.Design
                      flexible ad design Products.
                    </p>

                    <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                      In a world where talent is hard to find, ours has no
                      borders. Our global team of highly skilled ad designers
                      can help with everything from market research and concept
                      development to applying the latest AI, AR and 3D overlays.
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                  <Tilt
                    tiltMaxAngleX={13}
                    tiltMaxAngleY={13}
                    transitionSpeed={800}
                    gyroscope={true}
                    scale={1.08}
                    lassName="w-full p-8 h-auto"
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_BASE_API
                      }/images/productsPages/Ads2.png`}
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
                  MULTIFACETED SOLUTIONS
                </h3>
                <h1 className="text-4xl font-monaBold">
                  <Typewriting
                    text="Comprehensive Creative Campaign Product"
                    speed={60}
                  />
                </h1>
              </div>
            </div>

            <ComprehensiveCC />
          </div>

          <div className="formatMastSect relative w-full h-full py-5 pb-5">
            <div className="flexy max-w-full px-5 pb-6">
              <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
                <h3 className="text-2xl uppercase font-monaSemibold">
                  format mastery
                </h3>
                <h1 className="text-4xl font-monaBold">
                  Mix and match multiple ad formats for maximum impact
                </h1>
              </div>
            </div>

            <FormatMastery />
          </div>

          <div className="enhanced relative w-full h-full py-6">
            <AIEnhanced />
          </div>

          <div className="provenExpert relative w-full h-full py-6">
            <div className="flexy max-w-full px-5 pb-6">
              <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
                <h3 className="text-2xl uppercase font-monaSemibold">
                  PROVEN EXPERTISE
                </h3>
                <h2 className="text-3xl font-monaBold">
                  <Typewriting
                    text="An extension of your creative team, an accelerator for your ad design pipeline"
                    speed={50}
                  />
                </h2>
              </div>
            </div>

            <ProvenExpertise />
          </div>

          <div className="relative w-full h-full py-4">
            <Professionalism />
          </div>

          <div className="relative w-full h-full py-6">
            <CreativeCampaignPackage Packages={productsPackages} />
          </div>

          <div className="relative flexy flex-col w-full h-full py-6">
            <div className="flexy px-5 pb-6">
              <h1 className="font-monaBold text-center text-4xl">
                Got any questions?
              </h1>
            </div>

            <div className="flexy px-5 lg:min-w-[66.666667%] lg:max-w-[66.6670%]">
              <CCAccordion />
            </div>
          </div>

          <div className="relative w-full h-full pb-6">
            <Testimonials />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CreativeCampaigns;
