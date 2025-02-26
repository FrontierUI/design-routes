import TabsPricing from '@/components/TabsPricing';

import CreativeCampaignPackage from '@/components/CreativeCampaignPackage';
import BrandIdentityPackage from '@/components/BrandIdentityPackage';
import SMMPackage from '@/components/SMMPackage';
import WebPricePackage from '@/components/WebPricePackage';
import AppPricePackage from '@/components/AppPricePackage';
import PresentationPackage from '@/components/PresentationPackage';

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
    {
      title: 'Web Design & Development',
      value: 'webDD',
      content: <WebPricePackage />,
    },
    {
      title: 'App Design & Development',
      value: 'appDD',
      content: <AppPricePackage />,
    },
    {
      title: 'Presentaion Design',
      value: 'PresentDesign',
      content: <PresentationPackage />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-40">
      <TabsPricing tabs={tabs} />
    </div>
  );
};

export default PricingTabpanel;
