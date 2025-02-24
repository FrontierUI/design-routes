// import React from 'react';

// import { motion } from 'framer-motion';

const PDPlatforms = () => {
  return (
    <section className="">
      <div className="my-scroll-container">
        <div className="sticky-child flexStart flex-col space-y-4 md:sticky md:top-32 gap-10">
          <div className="itemsStart flex-col space-y-4 md:w-11/12">
            <h3 className="text-2xl uppercase font-monaSemibold">
              Platform Mastery
            </h3>
            <h1 className="text-5xl font-monaBold">
              Expertise across all Social Media platforms
            </h1>
            <p>
              From LinkedIn and Instagram to TikTok and YouTube, every social
              media platform has its own distinct design requirements and
              inherent user expectations. Rely on our in-depth expertise, as
              well as the ability to version and scale any kind of social media
              content, static, motion or video, across your key social media
              channels.
            </p>
          </div>
        </div>

        <div className="sticky-child controls-panel">
          <div className="content-wrapper w-full md:static">
            <div className="flexStart flex-col space-y-6 md:space-y-12">
              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <img
                    src="/images/icons/powerPoint.png"
                    className="img-fluid w-52 object-cover"
                    alt=""
                  />
                </div>
                <div className="flexStart flex-col space-y-2">
                  <div className="flexStart flex-col space-y-0">
                    <h3 className="text-xl font-monaSemibold">
                      SEAMLESS CREATION
                    </h3>
                    <h3 className="text-3xl font-monaBold">
                      Microsoft PowerPoint
                    </h3>
                  </div>
                  <p className="lg:w-10/12">
                    An oldie but a goodie. Our designers are experts in this
                    leading presentation software, ensuring your presentations
                    are visually compelling and easy to build on.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <img
                    src="/images/icons/googleSlides.png"
                    className="img-fluid w-52 object-cover"
                    alt=""
                  />
                </div>
                <div className="flexStart flex-col space-y-2">
                  <div className="flexStart flex-col space-y-0">
                    <h3 className="text-xl font-monaSemibold">CLOUD-BASED</h3>
                    <h3 className="text-3xl font-monaBold">Google Slides</h3>
                  </div>
                  <p className="lg:w-10/12">
                    A versatile staple, Google Slides is another platform our
                    designers know through and through, so they can build you
                    engaging, interactive presentations designs.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <img
                    src="/images/icons/keynote.png"
                    className="img-fluid w-52 object-cover"
                    alt=""
                  />
                </div>
                <div className="flexStart flex-col space-y-2">
                  <div className="flexStart flex-col space-y-0">
                    <h3 className="text-xl font-monaSemibold">
                      CREATIVE ELEGANCE
                    </h3>
                    <h3 className="text-3xl font-monaBold">Keynote</h3>
                  </div>
                  <p className="lg:w-10/12">
                    More of a Keynote connoisseur? Apple’s Keynote is another
                    one of our specialities. We’ll deliver stunning
                    presentations on the double, so you can communicate in
                    style.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <img
                    src="/images/icons/figma-1.png"
                    className="img-fluid w-52 object-cover"
                    alt=""
                  />
                </div>
                <div className="flexStart flex-col space-y-2">
                  <div className="flexStart flex-col space-y-0">
                    <h3 className="text-xl font-monaSemibold">
                      REAL-TIME COLLABORATION
                    </h3>
                    <h3 className="text-3xl font-monaBold">Figma</h3>
                  </div>
                  <p className="lg:w-10/12">
                    If you live in Figma, we’re right there with you. Our
                    designers are fluent in Figma and prepared to deliver
                    high-quality presentation designs using this collaborative
                    platform.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <img
                    src="/images/icons/othPlat.png"
                    className="img-fluid w-52 object-cover"
                    alt=""
                  />
                </div>
                <div className="flexStart flex-col space-y-2">
                  <div className="flexStart flex-col space-y-0">
                    <h3 className="text-xl font-monaSemibold">FULL COVERAGE</h3>
                    <h3 className="text-3xl font-monaBold">Other Platforms</h3>
                  </div>
                  <p className="lg:w-10/12">
                    Have another platform in mind? We’re here for it. With a
                    global team of presentation designers to tap into, we have
                    skills across the board and can cater to any preference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDPlatforms;
