import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const HomePortTopThumbCard = ({ image }) => {
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
          <motion.div
            className="absolute inset-0 z-10 flexy "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute pointer-events-none opacity-50 h-full w-full" />
            <motion.a
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              href={'/'}
              className="bg-white font-monaSemibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
            >
              <span>Explore Now</span>
              <Link2 className="h-4 w-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <img src={image} alt="image" className="img-fluid" />
    </motion.div>
  );
};

export default HomePortTopThumbCard;
