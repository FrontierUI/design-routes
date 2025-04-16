import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Marquee from 'react-fast-marquee';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideosCarousel from '@/components/VideosCarousel';
import { srcFilesList } from '@/contentData/utils';
import Typewriting from '@/components/Typewriting';
import Services from '@/components/Services';
import Strategies from '@/components/Strategies';
import Testimonials from '@/components/Testimonials';
import Professionalism from '@/components/Professionalism';
import WorkEthics from '@/components/WorkEthics';
import RoutesWay from '@/components/RoutesWay';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import ServicesForm from '@/components/ServicesForm';

const Home = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfoliosForHome();

    return () => {
      setPortfolios([]);
    };
  }, []);

  const fetchPortfoliosForHome = () => {
    const json = JSON.stringify({ limit: 1000 });

    axios
      .post(
        `${
          import.meta.env.VITE_BASE_API
        }/api.php?action=get_portfolio_for_home`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          console.log(response.data.portfolios);
          setPortfolios(response.data.portfolios);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  // More flexible chunk function
  const splitIntoChunks = (array, numberOfChunks = 2) => {
    const chunkSize = Math.ceil(array.length / numberOfChunks);
    return Array.from({ length: numberOfChunks }, (_, index) =>
      array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  };

  // Get specific chunk (0-based index)
  const getChunk = (array, chunkIndex = 0, totalChunks = 2) => {
    const chunks = splitIntoChunks(array, totalChunks);
    return chunks[chunkIndex] || [];
  };

  // Usage with useMemo
  const firstChunk = useMemo(() => getChunk(portfolios, 0), [portfolios]);
  const secondChunk = useMemo(() => getChunk(portfolios, 1), [portfolios]);

  return (
    <div className="relative w-full h-full">
      <Helmet>
        <title>
          Routes.Design — Top Design Agency for the Modern World | Unlimited
          Creative Solutions for All Businesses
        </title>
        <meta
          name="description"
          content="Discover Routes.Design — the USA’s go-to creative partner for unlimited, high-speed design solutions. Powered by a global team, we deliver premium branding, UI/UX, and digital assets on-demand. Future-ready design, delivered daily."
        />
      </Helmet>

      <Navbar />

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
            {/* {[...homePortFolioUp].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))} */}
            {[...firstChunk].map((item, index) => (
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
            {[...secondChunk].map((item, index) => (
              <PortfolioMarquee
                imgSrc={import.meta.env.VITE_BASE_API + item.header_image}
                href={`/our-work/${item.brand_slug}`}
                key={index}
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
            <h2 className="text-2xl font-monaBold leading-none">
              <Typewriting
                text="With any subscription, you gain access to all our creative
              products"
                speed={70}
              />
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
                <Typewriting text="Here's how to get started" speed={50} />
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
                <h3 className="font-monaMedium">see how we compare</h3>
              </div>
              <h1 className="font-monaSemibold text-3xl">
                <Typewriting text="What makes us different?" speed={80} />
              </h1>
              <p className="text-lg">
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

      <ServicesForm />

      <div className="relative w-full h-full pt-6 pb-10">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
