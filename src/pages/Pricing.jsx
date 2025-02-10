// import React from 'react';

import PricingTabpanel from '../components/PricingTabpanel';
import PricingTabs from '../components/PricingTabs';

const Pricing = () => {
  return (
    <div className="relative flexy flex-col w-full h-full">
      <div className="flexy flex-col w-full px-5 pt-20 lg:pt-28">
        <div className="flexy flex-col py-8 w-full space-y-5 text-center text-slate-900 lg:w-3/4">
          <h3 className="text-xl font-monaBold uppercase">
            Routes Design subscription
          </h3>
          <div className="flexy flex-col space-y-2 leading-none">
            <h1 className="text-4xl lg:text-7xl font-monaBold text-primary">
              One subscription for all your creative needs
            </h1>

            <p className="text-base lg:text-lg">
              We will take care of all your creative needs. No inefficient
              freelancers. No lengthy hiring procedures. No contracts. Just your
              work getting done!
            </p>
          </div>
        </div>
      </div>

      <div className="flexy w-full">
        {/* <PricingTabs /> */}
        <PricingTabpanel />
      </div>
    </div>
  );
};

export default Pricing;
