import LazyImage from './LazyImage';

const SMPlatforms = () => {
  return (
    <section className="max-md:px-5">
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

        <div className="sticky-child controls-panel max-md:pt-6">
          <div className="content-wrapper w-full md:static">
            <div className="flexStart flex-col space-y-6 md:space-y-12">
              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <LazyImage
                    src={`${
                      import.meta.env.VITE_BASE_API
                    }/images/icons/LinkedInSMM.png`}
                    alt=""
                    className="img-fluid w-24 md:w-32 object-cover"
                  />
                </div>
                <div className="flexStart flex-col space-y-1">
                  <h2 className="text-3xl font-monaBold">LinkedIn</h2>
                  <p className="w-10/12">
                    Position your brand as an industry leader with professional
                    and engaging content designed for LinkedIn’s
                    business-focused community.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart">
                  <LazyImage
                    src={`${
                      import.meta.env.VITE_BASE_API
                    }/images/icons/YTSMM.png`}
                    alt=""
                    className="img-fluid w-24 md:w-32 object-cover"
                  />
                </div>
                <div className="flexStart flex-col space-y-1">
                  <h2 className="text-3xl font-monaBold">YouTube</h2>
                  <p className="w-10/12">
                    Optimize viewer interaction with tailored creatives designed
                    for YouTube's diverse audience and video-friendly platform
                    features.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart lg:pl-2">
                  <LazyImage
                    src={`${
                      import.meta.env.VITE_BASE_API
                    }/images/icons/InstagramSMM.png`}
                    alt=""
                    className="img-fluid w-24 md:w-[6.5rem] object-contain"
                  />
                </div>
                <div className="flexStart flex-col space-y-1">
                  <h2 className="text-3xl font-monaBold">Instagram</h2>
                  <p className="w-10/12">
                    Captivate Instagram’s visually-driven audience with stunning
                    graphics and innovative content formats.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart lg:pl-2">
                  <LazyImage
                    src={`${
                      import.meta.env.VITE_BASE_API
                    }/images/icons/FacebookSMM.png`}
                    alt=""
                    className="img-fluid w-24 md:w-[7rem] object-cover"
                  />
                </div>
                <div className="flexStart flex-col space-y-1">
                  <h2 className="text-3xl font-monaBold">Facebook</h2>
                  <p className="w-10/12">
                    Maximize engagement with custom creative tailored for
                    Facebook’s unique audience and platform Products.
                  </p>
                </div>
              </div>

              <div className="flexStart md:justify-between w-full flex-col md:flex-row gap-4">
                <div className="flexStart lg:pl-2">
                  <LazyImage
                    src={`${
                      import.meta.env.VITE_BASE_API
                    }/images/icons/othPlat.png`}
                    alt=""
                    className="img-fluid w-24 md:w-[12rem] object-contain"
                  />
                </div>
                <div className="flexStart flex-col space-y-1">
                  <h2 className="text-3xl font-monaBold">Other platforms</h2>
                  <p className="w-10/12">
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

export default SMPlatforms;
