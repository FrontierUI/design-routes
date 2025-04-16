import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';
import axios from 'axios';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [portfoliosDetails, setPortfoliosDetails] = useState({});

  useEffect(() => {
    if (
      params.slug !== undefined &&
      params.slug !== null &&
      params.slug.toString().trim() !== ''
    )
      fetchPortfoliosDetails(params.slug);
    else {
      navigate(`/our-work`, { replace: true });
    }

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
    };
  }, []);

  const fetchPortfoliosDetails = (slug) => {
    const json = JSON.stringify({ brand_slug: slug });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_portfolio_details`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          console.log(response.data.portfolio);
          setPortfoliosDetails(response.data.portfolio);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-full caseStudies">
        <div className="flexy w-full h-full py-6 px-5 lg:px-12">
          <div className="flexy w-full h-full rounded-lg relative mt-24 overflow-hidden">
            <div className="flexy w-full h-full transitAll scal102 rounded-lg">
              <img
                src={portfoliosDetails?.header_image}
                className="img-fluid w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-full py-6">
          <section className="py-6">
            <div className="my-scroll-container">
              <div className="sticky-child flexStart flex-col space-y-4 md:sticky md:top-32 gap-10">
                <div className="itemsStart flex-col space-y-4 md:w-11/12">
                  <h1 className="text-5xl font-monaBold">
                    {portfoliosDetails?.brand_title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {portfoliosDetails.tags?.map((tag) => (
                      <span className="routes-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky-child controls-panel">
                <div className="content-wrapper w-full md:static">
                  <div className="lg:w-11/12 flex flex-col space-y-2 text-[16.5px]">
                    {portfoliosDetails?.brand_desc}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative w-full h-full pb-6">
          <div className="flexy w-full h-full px-5 lg:px-12 py-6">
            <div className="mx-auto grid grid-flow-dense grid-cols-12 gap-5">
              {portfoliosDetails.images?.map((image, index) =>
                image.type === 'focus' ? (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={1}
                    tiltMaxAngleY={1}
                    transitionSpeed={800}
                    gyroscope={true}
                    scale={1.0}
                    className="lg:col-span-6 col-span-12 row-span-2 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
                  >
                    <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                      <img
                        src={image.url}
                        className="w-full h-full object-contain rounded-lg"
                        alt=""
                      />
                    </div>
                  </Tilt>
                ) : (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    transitionSpeed={800}
                    gyroscope={true}
                    scale={1.0}
                    className="md:col-span-6 col-span-12 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
                  >
                    <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                      {/* <img
                      src="/images/casestudyPort/SMM/Mazito/Horizontal1-min.png"
                      className="w-full h-full object-contain rounded-lg"
                      alt=""
                    /> */}
                      <img
                        src={image.url}
                        className="w-full h-full object-contain rounded-lg"
                        alt=""
                      />
                    </div>
                  </Tilt>
                )
              )}

              <div className="col-span-12 relative w-full h-full flexy rounded-lg overflow-hidden shadow-drop-5">
                <div className="relative flexy scal102 transitAll w-full h-full rounded-lg">
                  <img
                    src={portfoliosDetails?.bottom_image}
                    className="w-full h-full object-contain rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PortfolioPage;
