import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CreativeCampaignPackage from "@/components/CreativeCampaignPackage";
import BrandIdentityPackage from "@/components/BrandIdentityPackage";
import SMMPackage from "@/components/SMMPackage";
import WebPricePackage from "@/components/WebPricePackage";
import AppPricePackage from "@/components/AppPricePackage";
import PresentationPackage from "@/components/PresentationPackage";
import axios from "axios";

const tabs = [
  // { id: 'creativeCampaign', title: 'Creative Campaign' },
  // { id: 'brandIdentity', title: 'Brand Identity & Design' },
  // { id: 'socialMM', title: 'Social Media Management' },
  // { id: 'webDD', title: 'Web Design & Development' },
  // { id: 'appDD', title: 'App Design & Development' },
  // { id: 'presentationDesign', title: 'Presentation Design' },
  { id: "creativeCampaign", title: "Creative Campaigns" },
  { id: "brandIdentity", title: "Brand Identity Designs" },
  { id: "socialMM", title: "Social Media Management" },
  { id: "webDD", title: "Web Design and Development" },
  { id: "appDD", title: "App Design and Development" },
  { id: "presentationDesign", title: "Presentation Designs" },
];

const TabContent = ({ id, packages }) => {
  const content = {
    creativeCampaign: <CreativeCampaignPackage Packages={packages.filter(p=> p.service_slug === "creative-campaigns")} />,
    brandIdentity: <BrandIdentityPackage Packages={packages.filter(p=> p.service_slug === "brand-identity-designs")} />,
    socialMM: <SMMPackage Packages={packages.filter(p=> p.service_slug === "social-media-management")} />,
    webDD: <WebPricePackage Packages={packages.filter(p=> p.service_slug === "web-design-and-development")} />,
    appDD: <AppPricePackage Packages={packages.filter(p=> p.service_slug === "app-design-and-development")} />,
    presentationDesign: <PresentationPackage Packages={packages.filter(p=> p.service_slug === "presentation-designs")} />,
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
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();

    return () => {
      setPackages([]);
    };
  }, []);

  const fetchPackages = () => {
    const json = JSON.stringify({ offset: 0, limit: 1000 });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_packages`,
        JSON.stringify({ params: json }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.success === "true") {
          setPackages(response.data.packages);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div className="flexy flex-col py-6 w-full">
      <div className="flexy w-full flex-wrap gap-x-4 gap-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tabsBtn ${
              activeTab === tab.id
                ? "!text-white !bg-primary !border-primary"
                : "tabsBtn"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="pt-5 my-5 w-full">
        {packages.length > 0 && <TabContent id={activeTab} packages={packages}/>}
      </div>
    </div>
  );
};

export default PricingTabs;
