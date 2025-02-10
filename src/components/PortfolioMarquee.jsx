import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Link as Link5 } from 'lucide-react';

const PortfolioMarquee = ({ imgSrc, href }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="portfolioMarquee"
      onHoverStart={() => {
        setShowOverlay(true);
      }}
      onHoverEnd={() => {
        setShowOverlay(false);
      }}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.a
            href={href}
            className="absolute inset-0 z-10 flexStart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.a
              href={href}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="bg-slate-200 absolute mx-3 bottom-4 font-monaSemibold text-md z-10 px-3 py-2.5 rounded-full flex items-center gap-x-3 hover:opacity-[0.95]"
            >
              <Link5 className="h-5 w-5" />
              <span>{href}</span>
            </motion.a>
          </motion.a>
        )}
      </AnimatePresence>

      <img src={imgSrc} alt="image" className="img-fluid" />
    </motion.div>
  );
};

export default PortfolioMarquee;
