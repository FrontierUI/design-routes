// import React from 'react';

import Tilt from 'react-parallax-tilt';
import LazyImage from './LazyImage';

// import './ParallaxEffect.css';

const TailoredPD = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="mx-auto w-full grid grid-flow-dense grid-cols-12 gap-6">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.03}
          className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            {/* <img
              src="/images/productsPages/customPowerPoint.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            /> */}
            <LazyImage src={`${ import.meta.env.VITE_BASE_API }/images/icons/productsPages/customPowerPoint.png`} alt="" className="img-fluid w-full h-full object-cover" />
            <div className="absolute text-white p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">
                Custom PowerPoint Design
              </h2>
              <p>
                Get unique, visually stunning PowerPoint designs that bring your
                ideas to life, ensuring your presentations are engaging and
                persuasive.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.03}
          className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            {/* <img
              src="/images/productsPages/presentTemplate.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            /> */}
            <LazyImage src={`${ import.meta.env.VITE_BASE_API }/images/icons/productsPages/presentTemplate.png`} alt="" className="img-fluid w-full h-full object-cover" />
            <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">Presentation Templates</h2>
              <p>
                Add visually striking infographics to your presentation designs
                to convey information visually and share engagingly digestible
                messages.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.03}
          className="col-span-12 xl:col-span-4 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            {/* <img
              src="/images/productsPages/customMotionGraphics.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            /> */}
            <LazyImage src={`${ import.meta.env.VITE_BASE_API }/images/icons/productsPages/customMotionGraphics.png`} alt="" className="img-fluid w-full h-full object-cover" />
            <div className="absolute text-white p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">
                Custom & Motion Graphics
              </h2>
              <p>
                Request captivating animations and custom graphics to add flair
                to your presentation designs and a dynamic layer to your
                storytelling.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="col-span-12 lg:col-span-6 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            {/* <img
              src="/images/productsPages/dataVisualization.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            /> */}
            <LazyImage src={`${ import.meta.env.VITE_BASE_API }/images/icons/productsPages/dataVisualization.png`} alt="" className="img-fluid w-full h-full object-cover" />
            <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 lg:space-y-4 lg:w-10/12">
              <h2 className="text-2xl font-monaBold">Data Visualization</h2>
              <p>
                Let us transform your complex data into clear, insightful and
                delightful visuals, making your information more accessible and
                impactful.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="col-span-12 lg:col-span-6 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            {/* <img
              src="/images/productsPages/infographics.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            /> */}
            <LazyImage src={`${ import.meta.env.VITE_BASE_API }/images/icons/productsPages/infographics.png`} alt="" className="img-fluid w-full h-full object-cover" />
            <div className="absolute text-white p-6 flex flex-col space-y-2 lg:space-y-4 lg:w-10/12">
              <h2 className="text-2xl font-monaBold">Infographics</h2>
              <p>
                Add visually striking infographics to your presentation designs
                to convey information visually and share engagingly digestible
                messages.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default TailoredPD;
