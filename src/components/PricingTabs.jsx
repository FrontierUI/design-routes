import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreativeCampaignPackage from './CreativeCampaignPackage';
import BrandIdentityPackage from './BrandIdentityPackage';

const tabs = [
  { id: 'creativeCampaign', title: 'Creative Campaign' },
  { id: 'brandIdentity', title: 'Brand Identity & Design' },
  { id: 'socialMM', title: 'Social Media Management' },
  { id: 'webDD', title: 'Web Design & Development' },
  { id: 'appDD', title: 'App Design & Development' },
  { id: 'presentationDesign', title: 'Presentation Design' },
  { id: 'tab7', title: 'Tab 7' },
];

const TabContent = ({ id }) => {
  const content = {
    creativeCampaign: <CreativeCampaignPackage />,
    brandIdentity: <BrandIdentityPackage />,
    socialMM: <div>Content for Tab 3</div>,
    webDD: <div>Content for Tab 4</div>,
    appDD: <div>Content for Tab 5</div>,
    presentationDesign: <div>Content for Tab 6</div>,
    tab7: <div>Content for Tab 7</div>,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {content[id]}
      </motion.div>
    </AnimatePresence>
  );
};

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flexy flex-col py-6 w-full max-w-full">
      <div className="flexy w-full flex-wrap gap-x-4 gap-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tabsBtn ${
              activeTab === tab.id
                ? '!text-white !bg-primary !border-primary'
                : 'tabsBtn'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="pt-5 my-5 w-full">
        <TabContent id={activeTab} />
      </div>
    </div>
  );
};

export default PricingTabs;
