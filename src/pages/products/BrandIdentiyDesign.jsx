import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

import { Check } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Typewriting from '@/components/Typewriting';
import LogoMarquee from '@/components/LogoMarquee';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import FullScope from '@/components/FullScope';
import AIEnhancedBrandIdentity from '@/components/AIEnhancedBrandIdentity';
import DesignProcess from '@/components/DesignProcess';
import Professionalism from '@/components/Professionalism';
import BrandIdentityPackage from '@/components/BrandIdentityPackage';
import BIDCounter from '@/components/BIDCounter';
import BIDAccordion from '@/components/BIDAccordion';
import Testimonials from '@/components/Testimonials';

const BrandIdentiyDesign = () => {
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
    const json = JSON.stringify({ slug: 'brand-identity-designs' });

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
        <title>
          Comprehensive Brand Identity Design Services | Routes.Design
        </title>
        <meta
          name="description"
          content="Create a cohesive and compelling brand identity with Routes.Design's branding services, encompassing logo design and brand strategy."
        />
      </Helmet>
      <Navbar />
      {productDetails.service_sub_title !== undefined ? (
        <div className="relative w-full h-full brandIdenDes">
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_BASE_API
                }/images/productsPages/lightBGE2.png)`,
              }}
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

                <div className="w-full lg:w-1/2 relative lg:top-8">
                  <Tilt
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    transitionSpeed={800}
                    gyroscope={true}
                    scale={1.04}
                    lassName="w-full p-5 h-auto"
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
                      BUILT FOR BRAND, CREATIVE & MARKETING TEAMS
                    </h3>

                    <h1 className="text-5xl font-monaBold">
                      <Typewriting
                        text="Brand Identity Design Product"
                        speed={100}
                      />
                    </h1>

                    <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                      Brands are fueled by a mixture of emotion and strategy.
                      The true art of branding design is combining both—to stand
                      out from the competition and forge memorable connections.
                    </p>

                    <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                      Our global team of brand experts, who’ve worked at top
                      brand design agencies and well-known brands, will help you
                      grow and elevate your brand. Whether it’s a logo or a
                      complete brand development, we help you express what makes
                      your brand unique.
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
                    scale={1.08}
                    lassName="w-full p-8 h-auto"
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_BASE_API
                      }/images/productsPages/BrandingImage.png`}
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
                <h1 className="text-5xl font-monaBold">
                  <Typewriting text="Full-scope Branding Product" speed={100} />
                </h1>
              </div>
            </div>

            <FullScope />
          </div>

          <div className="enhanced relative w-full h-full py-6">
            <AIEnhancedBrandIdentity />
          </div>

          <div className="bid relative w-full h-full py-6">
            <div className="flexy px-5 pb-6">
              <div className="flexy flex-col space-y-4 text-center text-slate-900">
                <div className="flex flex-col space-y-0">
                  <h1 className="text-5xl font-monaBold">Our Brand Identity</h1>
                  <h1 className="text-5xl font-monaBold">Design Process:</h1>
                </div>
                <div className="mt-3 lg:w-3/5 leading-tight">
                  <p>
                    Branding design services start with a purpose. The primary
                    goal is to effectively communicate the brand’s values and
                    essence. Our brand identity services make sure that the
                    visual elements align with the brand’s personality and speak
                    to the target audience. This helps to:
                  </p>
                </div>
              </div>
            </div>

            <DesignProcess />
          </div>

          <div className="provenExpert relative w-full h-full py-6">
            <div className="flexy max-w-full px-5 pb-6">
              <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
                <h3 className="text-2xl uppercase font-monaSemibold">
                  STRIKE UP THE BRAND
                </h3>
                <h1 className="text-3xl lg:text-4xl font-monaBold">
                  <Typewriting
                    text="Branding product that maximize speed, value and impact"
                    speed={70}
                  />
                </h1>
              </div>
            </div>

            <BIDCounter />
          </div>

          <div className="relative w-full h-full py-4">
            <Professionalism />
          </div>

          <div className="relative w-full h-full py-6">
            <BrandIdentityPackage Packages={productsPackages} />
          </div>

          <div className="relative flexy flex-col w-full h-full py-6">
            <div className="flexy px-5 pb-6">
              <h1 className="font-monaBold text-center text-4xl">
                Got any questions?
              </h1>
            </div>
            <div className="flexy px-5 lg:min-w-[66.666667%] lg:max-w-[66.6670%]">
              <BIDAccordion />
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
      <Footer />
    </>
  );
};

export default BrandIdentiyDesign;
