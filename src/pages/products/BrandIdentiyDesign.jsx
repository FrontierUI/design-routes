import { useEffect, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';
import Marquee from 'react-fast-marquee';
import useMeasure from 'react-use-measure';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { brandPortFolioBot, brandPortFolioUp } from '../../contentData/utils';

import LogoMarquee from '../../components/LogoMarquee';
import PortfolioMarquee from '../../components/PortfolioMarquee';
import FullScope from '../../components/FullScope';
import AIEnhancedBrandIdentity from '../../components/AIEnhancedBrandIdentity';
import DesignProcess from '../../components/DesignProcess';
import ProvenExpertise from '../../components/ProvenExpertise';
import Professionalism from '../../components/Professionalism';
import BrandIdentityPackage from '../../components/BrandIdentityPackage';
import Testimonials from '../../components/Testimonials';
import HomePortTopThumbCard from '../../components/HomePortTopThumbCard';

const BrandIdentiyDesign = () => {
  //

  const FAST_DURATION = 25;

  const SLOW_DURATION = 60;

  const [activeQuestion, setActiveQuestion] = useState(null);

  const [durtion, setDurtion] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPositions = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPositions], {
        ease: 'linear',
        duration: durtion * (1 - xTranslation.get() / finalPositions),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    } else {
      controls = animate(xTranslation, [0, finalPositions], {
        ease: 'linear',
        duration: durtion,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, durtion, rerender, mustFinish]);

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
    <div className="relative w-full h-full brandIdenDes">
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-screen -z-[1] bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/lightBGE2.png)',
          }}
        />

        <div className="w-full  max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5 text-slate-100">
                <h1 className="font-monaBold text-5xl">
                  Brand Identity Design Product
                </h1>

                <p className="mx-auto md:max-w-3xl leading-tight lg:text-lg">
                  From brand exploration and development to refreshes and
                  rebrands, our world-class brand designers create cohesive,
                  scalable brand experiences. Learn more and book a call today.
                </p>

                <div className="justStartCenter">
                  <button className="whiteButton">Get Started</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full relative top-6 p-4 h-auto transitAll scal105">
                <img
                  src="/images/productsPages/GM2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full max-lg:mt-9 imac:mt-10 py-5 px-5 flexy flex-col space-y-5">
        <div className="relative flexy w-full h-full">
          <motion.div
            className="relative w-full h-full flex gap-x-2"
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDurtion(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDurtion(FAST_DURATION);
            }}
          >
            {[...brandPortFolioUp, ...brandPortFolioBot].map((item) => (
              <HomePortTopThumbCard
                key={item.href}
                imgSrc={item.imgSrc}
                href={item.href}
              />
            ))}
          </motion.div>
        </div>
        <div className="relative flexy w-full h-full">
          <Marquee
            direction="left"
            autoFill={true}
            gradient={false}
            delay={1}
            speed={30}
            pauseOnHover={false}
          >
            {[...brandPortFolioBot].map((item) => (
              <PortfolioMarquee
                imgSrc={item.imgSrc}
                href={item.href}
                key={item.href}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="relative w-full h-full flexy px-5 py-5 overflow-hidden">
        <LogoMarquee />
      </div>

      <div className="strategyMarketing relative w-full h-full bg-primary text-white py-5 lg:py-10">
        <div className="flexy max-w-full mx-auto px-5 lg:px-12">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-2 sm:max-w-md lg:max-w-2xl md:space-y-5">
                <h3 className="text-2xl font-monaSemibold uppercase">
                  BUILT FOR BRAND, CREATIVE & MARKETING TEAMS
                </h3>

                <h1 className="text-5xl font-monaBold">
                  Strategic branding for every business
                </h1>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Brands are fueled by a mixture of emotion and strategy. The
                  true art of branding design is combining both—to stand out
                  from the competition and forge memorable connections.
                </p>

                <p className="mx-auto text-base lg:text-lg sm:max-w-md md:max-w-3xl">
                  Our global team of brand experts, who’ve worked at top brand
                  design agencies and well-known brands, will help you grow and
                  elevate your brand. Whether it's a logo or a complete brand
                  development, we help you express what makes your brand unique.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-5 xl:flex-row text-white">
                  <button className="transBorderBtn">
                    Cost-effective
                    <Check />
                  </button>
                  <button className="transBorderBtn">
                    Hassle-free
                    <Check />
                  </button>
                  <button className="transBorderBtn">
                    Built for speed & efficiency
                    <Check />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto transitAll scal110">
                <img
                  src="/images/productsPages/BrandingImage.png"
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
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
            <h3 className="text-2xl uppercase font-monaSemibold">
              MULTIFACETED SOLUTIONS
            </h3>
            <h1 className="text-5xl font-monaBold">
              Full-scope Branding Product
            </h1>
          </div>
        </div>

        <FullScope />
      </div>

      <div className="enhanced relative w-full h-full py-6">
        <AIEnhancedBrandIdentity />
      </div>

      <div className="bid relative w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <div className="flexy flex-col space-y-4 text-center text-slate-900">
            <div className="flex flex-col space-y-0">
              <h1 className="text-5xl font-monaBold">Our Brand Identity</h1>
              <h1 className="text-5xl font-monaBold">Design Process:</h1>
            </div>
            <div className="mt-3 lg:w-3/5 leading-tight">
              <p>
                Branding design services start with a purpose. The primary goal
                is to effectively communicate the brand's values and essence.
                Our brand identity services make sure that the visual elements
                align with the brand's personality and speak to the target
                audience. This helps to:
              </p>
            </div>
          </div>
        </div>

        <DesignProcess />
      </div>

      <div className="provenExpert relative w-full h-full py-6">
        <div className="flexy max-w-full px-5 pb-6">
          <div className="flexy flex-col space-y-2.5 text-center text-slate-900">
            <h3 className="text-2xl uppercase font-monaSemibold">
              STRIKE UP THE BRAND
            </h3>
            <h1 className="text-3xl lg:text-4xl font-monaBold">
              Branding product that maximize speed, value and impact
            </h1>
          </div>
        </div>

        <ProvenExpertise />
      </div>

      <div className="relative w-full h-full py-4">
        <Professionalism />
      </div>

      <div className="relative w-full h-full py-6">
        <BrandIdentityPackage />
      </div>

      <div className="relative w-full h-full py-6">
        <div className="flexy px-5 pb-6">
          <h1 className="font-monaBold text-center text-4xl">
            Got any questions?
          </h1>
        </div>

        <div className="itemsStart mb-2">
          <div className="w-full md:w-3/4 p-5 rounded-lg bg-gray-300">
            {faqQuestion.map((faq) => (
              <div key={faq.id} className="mb-4 last:mb-0">
                <button
                  className="w-full p-4 text-left text-lg font-monaSemibold focus:outline-none bg-gray-100 rounded-lg shadow-md flexBetween"
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

export default BrandIdentiyDesign;
