import React, { useEffect } from 'react';

import Tilt from 'react-parallax-tilt';

const PortfolioPage = () => {
  //

  useEffect(() => {
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

  return (
    <div className="relative w-full h-full caseStudies">
      <div className="flexy w-full h-full py-6 px-5 lg:px-12">
        <div className="flexy w-full h-full rounded-lg relative mt-24 overflow-hidden">
          <div className="flexy w-full h-full transitAll scal102 rounded-lg">
            <img
              src="/images/casestudyPort/SMM/Mazito/Mainimageapp.png"
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
                  Mazito - A Pet Community Platform
                </h1>

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="routes-tag">App UI/UX</span>
                  <span className="routes-tag">Brand Identity</span>
                  <span className="routes-tag">Web Design</span>
                  <span className="routes-tag">Social Media</span>
                </div>
              </div>
            </div>

            <div className="sticky-child controls-panel">
              <div className="content-wrapper w-full md:static">
                <div className="lg:w-11/12 text-[16.5px]">
                  <p className="leading-snug">
                    We manage the social media presence for Mazito, a vibrant
                    pet community platform. Our approach focuses on fostering a
                    strong sense of community among pet owners, creating
                    engaging content that resonates with animal lovers. Through
                    consistent and interactive social media strategies, we help
                    Mazito grow its online following, share valuable pet care
                    tips, and highlight user-generated content, all while
                    maintaining a fun and welcoming brand voice. The goal is to
                    position Mazito as the go-to platform for pet owners to
                    connect, share experiences, and celebrate their pets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative w-full h-full pb-6">
        <div className="flexy w-full h-full px-5 lg:px-12 py-6">
          <div className="mx-auto grid grid-flow-dense grid-cols-12 gap-5">
            <Tilt
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="lg:col-span-6 col-span-12 row-span-2 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Vertical-min.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="md:col-span-6 col-span-12 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Horizontal1-min.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="md:col-span-6 col-span-12 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Horizontal2web.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="md:col-span-6 col-span-12 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Horizontal1web.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="lg:col-span-6 col-span-12 row-span-2 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Verticalweb.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              transitionSpeed={800}
              gyroscope={true}
              scale={1.0}
              className="md:col-span-6 col-span-12 flexy rounded-lg overflow-hidden relative w-full h-full shadow-drop-5"
            >
              <div className="relative flexy scal102 transitAll parallax-effect w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/1-min.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </Tilt>

            <div className="col-span-12 relative w-full h-full flexy rounded-lg overflow-hidden shadow-drop-5">
              <div className="relative flexy scal102 transitAll w-full h-full rounded-lg">
                <img
                  src="/images/casestudyPort/SMM/Mazito/Mainimage-min.png"
                  className="w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
