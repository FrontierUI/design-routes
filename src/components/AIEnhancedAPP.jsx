import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

import Typewriting from '@/components/Typewriting';

const AIEnhancedAPP = () => {
  return (
    <div className="flexy bg-primary max-w-full mx-auto px-5 lg:px-12">
      <div className="flex flex-wrap items-center w-full py-5 lg:py-12">
        <div className="w-full lg:w-1/2 text-white">
          <div className="w-full space-y-2 sm:max-w-md lg:max-w-2xl md:space-y-5">
            <h3 className="text-2xl font-monaSemibold uppercase">
              FUTURE-READY EFFICIENCY
            </h3>

            <h1 className="text-5xl font-monaBold">
              <Typewriting
                text="AI-Enhanced App Design & Development"
                speed={100}
              />
            </h1>

            <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
              At Routes.Design, we combine cutting-edge AI technology with
              expert design services to enhance efficiency and cost savings. Our
              AI-powered workflows streamline the creation of app UI/UX and web
              design, delivering results up to 60% faster without compromising
              quality.
            </p>

            <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
              This precision ensures that each project meets the highest
              standards, improving both the speed and effectiveness of your
              content production. Experience unmatched innovation and efficiency
              with our AI-driven solutions, crafted to elevate your brand’s
              online presence while achieving your business goals.
            </p>

            <div className="justStartCenter max-w-xs">
              <Link to={'/'} className="flexy">
                <button className="whiteLink">Book a call</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative top-4">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={800}
            gyroscope={true}
            scale={1.05}
            lassName="w-full p-4 h-auto"
          >
            <img
              src="/images/productsPages/AIGlass.png"
              className="img-fluid"
              alt=""
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default AIEnhancedAPP;
