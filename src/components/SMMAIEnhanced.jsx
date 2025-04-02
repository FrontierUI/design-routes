import { Link } from 'react-router-dom';

import Tilt from 'react-parallax-tilt';

import Typewriting from '@/components/Typewriting';

const SMMAIEnhanced = () => {
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
                text="AI-Enhanced Social Media Management"
                speed={70}
              />
            </h1>

            <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
              Leverage the power of AI to improve efficiency and cost savings in
              our design services. Routes AI-enhanced workflows streamline the
              creation of brand creative, delivering up to 60% savings for our
              customers.
            </p>

            <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
              This ensures that every project is handled with precision,
              enhancing both the quality and speed of your creative production.
              Experience unparalleled efficiency and innovation with our
              AI-driven design solutions, tailored to elevate your brand’s
              image.
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
              src={`${import.meta.env.VITE_BASE_API}/images/productsPages/AIGlass.png`}
              className="img-fluid"
              alt=""
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default SMMAIEnhanced;
