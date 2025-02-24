import React from 'react';

import { useSpring, animated } from 'react-spring';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const PDCounter = () => {
  const expertise = [
    {
      title: 'projects completed',
      counter: 859,
      desc: 'Presentation Design products has been sold to date',
    },
    {
      title: 'total customers',
      counter: 1207,
      desc: 'Total customers used our Presentation Design product',
    },
    {
      title: 'total hours',
      counter: 13954,
      desc: 'Hours dedicated to creative campaigns product',
    },
    {
      title: 'CUSTOMER SATISFACTION',
      counter: 4.95,
      desc: 'Average branding product approval rating',
    },
  ];

  return (
    <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-5">
      {expertise.map((expert) => (
        <div
          key={expert.title}
          className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
        >
          <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg text-gray-800 hover:text-white duration-500">
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-monaSemibold uppercase">
                {expert.title}
              </h2>
              <h1 className="text-5xl font-monaBold">
                <Number n={expert.counter} />
              </h1>
              <p className="text-md mb-2">{expert.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PDCounter;
