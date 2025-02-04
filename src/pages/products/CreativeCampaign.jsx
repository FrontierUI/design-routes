import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronDown, ChevronUp } from 'lucide-react';

import ComprehensiveCC from '../../components/ComprehensiveCC';
import FormatMastery from '../../components/FormatMastery';
import HomePortfolioMarquee from '../../components/HomePortfolioMarquee';
import LogoMarquee from '../../components/LogoMarquee';
import Professionalism from '../../components/Professionalism';
import Testimonials from '../../components/Testimonials';
import AIEnhanced from '../../components/AIEnhanced';
import ProvenExpertise from '../../components/ProvenExpertise';
// import { Link } from 'react-router-dom';
import CreativeCampaignPackage from '../../components/CreativeCampaignPackage';

const CreativeCampaigns = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqQuestion = [
    {
      id: 1,
      question: 'What services are included in the Creative Campaign Product?',
      answer:
        'The product includes the development of campaign key visuals, up to 5 Point-of-Sale Materials (POSM) adaptations, digital ads, motion graphic videos, email design, and campaign presentation design. These services help create cohesive and engaging campaigns across multiple channels.',
    },
    {
      id: 2,
      question: 'What services are included in the Creative Campaign Product?',
      answer:
        'The product includes the development of campaign key visuals, up to 5 Point-of-Sale Materials (POSM) adaptations, digital ads, motion graphic videos, email design, and campaign presentation design. These services help create cohesive and engaging campaigns across multiple channels.',
    },
  ];

  return (
    <div className="relative w-full h-full creativeCampaigns">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/images/creativeCampBann.svg)' }}
        />

        <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-white">
                <h1 className="monaBold text-5xl">
                  Creative Campaign Design Product
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  From high-volume, multi-channel campaigns to testing and
                  exploration, get the outstanding creative campaign Products
                  you need. Plug-in a fully-stacked design team and start
                  fueling your ad campaigns today.
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 h-auto transitAll scal105">
                <img
                  src="/images/productsPages/Campaign.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-5 px-5">
        <HomePortfolioMarquee />
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="strategyMarketing relative w-full h-full bg-primary text-white py-5 lg:py-10">
        <div className="flexy max-w-full mx-auto px-5 lg:px-12">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-2 sm:max-w-md lg:max-w-2xl md:space-y-5">
                <h3 className="text-2xl monaSemibold uppercase">
                  built for comms, strategy & marketing teams
                </h3>

                <h1 className="text-5xl monaBold">
                  Ad creative for campaigns that perform
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  The need for compelling ad creative has never been greater.
                  But, when your biggest challenge is getting to market, the
                  best solution is plugging into Routes.Design flexible ad
                  design Products.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  The need for compelling ad creative has never been greater.
                  But, when your biggest challenge is getting to market, the
                  best solution is plugging into Routes.Design flexible ad
                  design Products.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto transitAll scal110">
                <img
                  src="/images/productsPages/Ads2.png"
                  className="img-flud"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comprehensive relative w-full h-full py-5 pt-10">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-800">
            <h3 className="text-2xl uppercase monaSemibold">
              MULTIFACETED SOLUTIONS
            </h3>
            <h1 className="text-4xl monaBold">
              Comprehensive Creative Campaign Product
            </h1>
          </div>
        </div>

        <ComprehensiveCC />
      </div>

      <div className="formatMastSect relative w-full h-full py-5 pb-5">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-800">
            <h3 className="text-2xl uppercase monaSemibold">format mastery</h3>
            <h1 className="text-4xl monaBold">
              Mix and match multiple ad formats for maximum impact
            </h1>
          </div>
        </div>

        <FormatMastery />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <AIEnhanced />
      </div>

      <div className="provenExpert relative w-full h-full py-6">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-800">
            <h3 className="text-2xl uppercase monaSemibold">
              PROVEN EXPERTISE
            </h3>
            <h1 className="text-3xl monaBold">
              An extension of your creative team, an accelerator for your ad
              design pipeline
            </h1>
          </div>
        </div>

        <ProvenExpertise />
      </div>

      <div className="relative w-full h-full py-4">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <CreativeCampaignPackage />
      </div>

      <div className="relative w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="monaBold text-center text-4xl">Got any questions?</h1>
        </div>

        <div className="itemsStart mb-2">
          <div className="w-full md:w-3/4 p-5 rounded-lg bg-gray-300">
            {faqQuestion.map((faq) => (
              <div key={faq.id} className="mb-4 last:mb-0">
                <button
                  className="w-full p-4 text-left text-lg monaSemibold focus:outline-none bg-gray-100 rounded-lg shadow-md flexBetween"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                  }
                >
                  {faq.question}
                  {activeQuestion === faq.id ? (
                    <span className="p-1 text-xl flexy rounded-full bg-primary text-white">
                      <ChevronUp />
                    </span>
                  ) : (
                    <span className="p-1 text-xl flexy rounded-full bg-primary text-white">
                      <ChevronDown />
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {activeQuestion === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 ml-3 text-gray-900 w-4/5"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default CreativeCampaigns;
