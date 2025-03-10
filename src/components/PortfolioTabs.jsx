import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AllPortfolio from './AllPortfolio';
import PortfolioCC from './PortfolioCC';

const tabs = [
  { id: 'allPortfolio', title: 'All Portfolio' },
  { id: 'creativeCampaign', title: 'Creative Campaign' },
  { id: 'brandIdentity', title: 'Brand Identity & Design' },
  { id: 'socialMM', title: 'Social Media Management' },
  { id: 'webDD', title: 'Web Design & Development' },
  { id: 'appDD', title: 'App Design & Development' },
  { id: 'presentationDesign', title: 'Presentation Design' },
];

const TabContent = ({ id }) => {
  const content = {
    allPortfolio: <AllPortfolio />,
    creativeCampaign: <PortfolioCC />,
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

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flexy flex-col pt-6 pb-3 w-full">
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

      <div className="pt-5 mt-5 w-full">
        <TabContent id={activeTab} />
      </div>
    </div>
  );
};

export default PortfolioTabs;
