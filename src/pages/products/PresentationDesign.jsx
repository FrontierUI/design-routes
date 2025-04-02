import { useState, useEffect } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

import { Check } from 'lucide-react';

import { pdPortfolioBot, pdPortfolioUp } from '@/contentData/utils';

import Typewriting from '@/components/Typewriting';
import LogoMarquee from '@/components/LogoMarquee';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import Professionalism from '@/components/Professionalism';
import Testimonials from '@/components/Testimonials';
import PresentationPackage from '@/components/PresentationPackage';
import PDAccordion from '@/components/PDAccordion';
import TailoredPD from '@/components/TailoredPD';
import PDCounter from '@/components/PDCounter';
import PDPitchDecks from '@/components/PDPitchDecks';
import PDPlatforms from '@/components/PDPlatforms';

const PresentationDesign = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productsPackages, setProductsPackages] = useState({});  

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
    const json = JSON.stringify({ slug: "presentation-design" });

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
    <div className="relative w-full h-full presentDes">
      <div className="relative w-full h-full pdHero">
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
                <h1 className="font-monaBold text-5xl">
                  <Typewriting text={productDetails?.service_sub_title} speed={150} />
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  {productDetails?.service_description}
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative lg:top-10">
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
            {[...pdPortfolioUp].map((item) => (
              <PortfolioMarquee
                key={item.href}
                imgSrc={item.imgSrc}
                href={item.href}
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
            {[...pdPortfolioBot].map((item) => (
              <PortfolioMarquee
                key={item.href}
                imgSrc={item.imgSrc}
                href={item.href}
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
                    text="Elevate your Presentations and sales decks with Routes"
                    speed={50}
                  />
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  We do your ideas justice with beautifully designed
                  presentations that follow a logical structure, showcase your
                  data in a clear, compelling manner and convey your message in
                  the most persuasive way possible.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Whether you need a pitch deck to persuade VCs, templates for
                  internal communications or slides for a key event, our
                  world-class team of presentation designers will work with you
                  to deliver a stunning final product.
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
                  src={`${import.meta.env.VITE_BASE_API}/images/productsPages/hassleFree.png`}
                  className="img-fluid"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      <div className="tailored relative w-full h-full py-6">
        <div className="flexy flex-col space-y-2 pt-3 pb-6 px-5 text-center">
          <h2 className="font-monaSemibold text-2xl uppercase">
            Tailored Business Solutions
          </h2>
          <h1 className="font-monaBold text-5xl">
            <Typewriting
              text="Extensive Presentation Design services"
              speed={70}
            />
          </h1>
        </div>

        <TailoredPD />
      </div>

      <div className="relative w-full h-full py-6">
        <div className="flexy flex-col w-full px-5 lg:px-12">
          <div className="flexy flex-col w-full pb-6 text-center space-y-2">
            <h2 className="text-2xl font-monaMedium">FORMAT FLUENCY</h2>
            <h1 className="text-4xl font-monaBold">
              <Typewriting
                text="Expertise across all Presentation Design platforms"
                speed={50}
              />
            </h1>
            <p className="lg:w-3/4">
              Our presentation designers can do it all. With expertise across
              all major presentation design platforms, we can adapt to your
              preferred tools and integrate with your creative workflows.
              Whether you’re a PowerPoint aficionado or Google Slides devotee,
              we’ll design in your platform of choice to deliver a powerful,
              high-impact presentation.
            </p>
          </div>

          <PDCounter />
        </div>
      </div>

      <div className="tailored relative w-full h-full py-6">
        <div className="flexy flex-col space-y-2 pt-3 pb-6 px-5 text-center">
          <h2 className="font-monaSemibold text-2xl uppercase">
            Tailored Pitch Deck Solutions
          </h2>
          <h1 className="font-monaBold text-5xl">
            Extensive Pitch Deck Design Services
          </h1>
        </div>

        <PDPitchDecks />
      </div>

      <div className="relative w-full h-full flexy py-6">
        <PDPlatforms />
      </div>

      <div className="relative w-full h-full py-6">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <PresentationPackage Packages={productsPackages}/>
      </div>

      <div className="relative flexy flex-col w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="font-monaBold text-center text-4xl">
            Got any questions?
          </h1>
        </div>
        <div className="px-5 w-full lg:w-2/3">
          <PDAccordion />
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

export default PresentationDesign;
