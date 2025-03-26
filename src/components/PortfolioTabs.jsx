import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import AllPortfolio from './AllPortfolio';
import PortfolioCC from './PortfolioCC';
import PortfolioBID from './PortfolioBID';
import PortfolioSMM from './PortfolioSMM';
import PortfolioPD from './PortfolioPD';
import PortfolioWDD from './PortfolioWDD';
import PortfolioAppDD from './PortfolioAppDD';
import axios from 'axios';

import Tilt from 'react-parallax-tilt';

const tabs = [
  { id: 'allPortfolio', title: 'All Portfolio', },
  { id: 'creativeCampaign', title: 'Creative Campaigns' },
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
    brandIdentity: <PortfolioBID />,
    socialMM: <PortfolioSMM />,
    webDD: <PortfolioWDD />,
    appDD: <PortfolioAppDD />,
    presentationDesign: <PortfolioPD />,
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
  const [portfolios, setPortfolios] = useState([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);

  // const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  useEffect(() => {
    fetchPortfolios();

    return () => {
      setPortfolios([]);
      setFilteredPortfolios([]);
      setActiveTab(tabs[0].title);
    };
  }, []);

  useEffect(()=>{
    if(activeTab !== "All Portfolio")
      setFilteredPortfolios(portfolios.filter(portfolio => portfolio.service === activeTab));
    else
      setFilteredPortfolios(portfolios);
  },[activeTab]);

  const fetchPortfolios = () => {
    const json = JSON.stringify({ limit: 100, offset: 0 });

    axios.post( `${import.meta.env.VITE_BASE_API}/api.php?action=get_portfolio`,
      JSON.stringify({ params: json }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      if (response.data.success === 'true') {
        console.log(response.data.portfolios);
        setPortfolios(response.data.portfolios);
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  }

  return (
    <div className="flexy flex-col pt-6 pb-3 w-full">
      <div className="flexy w-full flex-wrap gap-x-4 gap-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.title)}
            className={`tabsBtn ${
              activeTab === tab.title
                ? '!text-white !bg-primary !border-primary'
                : 'tabsBtn'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="pt-5 mt-5 w-full">
        {/* <TabContent id={activeTab} /> */}
        <div className="flexy w-full h-full">
          <div className="mx-auto grid grid-cols-12 gap-6 lg:gap-10">
            {
              (filteredPortfolios.length === 0 ? portfolios : filteredPortfolios).map(({id, brand_slug, brand_title, header_image})=>(
                // <AnimatePresence mode="wait">
                //   <motion.div
                //     key={id}
                //     initial={{ opacity: 0, y: 10 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     exit={{ opacity: 0, y: -10 }}
                //     transition={{ duration: 0.2 }}
                //   >
                    <Tilt
                      key={id}
                      tiltMaxAngleX={3}
                      tiltMaxAngleY={3}
                      transitionSpeed={800}
                      gyroscope={true}
                      scale={1.01}
                      className="lg:col-span-6 col-span-12 relative w-full h-full overflow-hidden shadow-drop-4 parallax-effect rounded-lg"
                    >
                      <Link
                        to={`/portfolio-page/${brand_slug}`}
                        className="relative flexStart w-full innerEffect rounded-lg"
                      >
                        <img
                          src={header_image}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="absolute text-white p-8 flex">
                          <h2 className="text-3xl font-monaBold">
                            {brand_title}
                          </h2>
                        </div>
                      </Link>
                    </Tilt>
                //   </motion.div>
                // </AnimatePresence>
              ))
            }            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTabs;
