// import React from 'react';

import Tilt from 'react-parallax-tilt';

const PDPitchDecks = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="mx-auto w-full grid grid-flow-dense grid-cols-12 gap-6">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={800}
          gyroscope={true}
          scale={1.01}
          className="col-span-12 lg:col-span-6 parallax-effect rounded-lg shadow-drop-5 w-full h-full overflow-hidden"
        >
          <div className="flexStart w-full rounded-lg relative innerEffect">
            <img
              src="/images/productsPages/BusinessPresentations.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            />
            <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 lg:space-y-4 lg:w-10/12">
              <h2 className="text-2xl font-monaBold">Business Presentations</h2>
              <p>
                Get professional, effective presentations tailored to your
                business, designed to communicate your message clearly and leave
                a lasting impression on your audience.
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
            <img
              src="/images/productsPages/pitchdecks.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            />
            <div className="absolute text-white p-6 flex flex-col space-y-2 lg:space-y-4 lg:w-10/12">
              <h2 className="text-2xl font-monaBold">Elevator & Pitch Deck</h2>
              <p>
                Collaborate on persuasive pitch decks perfect for supporting
                narratives and sealing partnerships, presented in a compelling
                format to capture immediate interest.
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
            <img
              src="/images/productsPages/salesreport.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            />
            <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">Sales decks & reports</h2>
              <p>
                Get sales decks designed to drive decisions and conversions,
                combining persuasive storytelling with clear data visualizations
                to communicate your message.
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
            <img
              src="/images/productsPages/investorDecks.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            />
            <div className="absolute text-white p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">
                Investor decks & reports
              </h2>
              <p>
                Share detailed presentations and reports to engage investors,
                showcasing your business's value and potential with clear,
                persuasive narratives and visuals.
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
            <img
              src="/images/productsPages/slideDecks.png"
              className="img-fluid w-full h-full object-cover"
              alt=""
            />
            <div className="absolute text-slate-600 p-6 flex flex-col space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-monaBold">Slide Decks</h2>
              <p>
                Get engaging slide decks customized to meet your specific
                objectives, whether you’re presenting ideas or getting buy-in
                from an internal or external audience.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default PDPitchDecks;
