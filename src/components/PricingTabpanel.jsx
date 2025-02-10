// import React from 'react';
import CreativeCampaignPackage from './CreativeCampaignPackage';
import BrandIdentityPackage from './BrandIdentityPackage';
import TabsPricing from './TabsPricing';
import SMMPackage from './SMMPackage';

const PricingTabpanel = () => {
  const tabs = [
    {
      title: 'Creative Campaign',
      value: 'creativeCampaign',
      content: <CreativeCampaignPackage />,
    },
    {
      title: 'Brand Identity & Designs',
      value: 'brandIdentity',
      content: <BrandIdentityPackage />,
    },
    {
      title: 'Social Media Management',
      value: 'socialMM',
      content: <SMMPackage />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-40">
      <TabsPricing tabs={tabs} />
    </div>
  );
};

export default PricingTabpanel;
