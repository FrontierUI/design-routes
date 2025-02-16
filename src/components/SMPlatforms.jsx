// import React from 'react';

import { motion } from 'framer-motion';

const SMPlatforms = () => {
  const ssmPlat = [
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/InstagramSMM.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/keynote.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/othPlat.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/YoutubeSMM.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/LinkedInSMM.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/othPlat.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
    {
      title: 'Google Slides',
      imgSrc: '/images/icons/YoutubeSMM.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 h-auto md:sticky top-32">
          <motion.div
            // style={{ position: 'sticky' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-500 text-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold">Sticky Content</h2>
            <p className="mt-4">
              Yeh section sticky rehega jab tak right-side content end nahi
              hota.
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 space-y-5 md:space-y-7">
          {ssmPlat.map((plat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 flexStart flex-col lg:flex-row rounded-xl shadow-md p-5 gap-4"
            >
              <div className="flexStart">
                <img src={plat.imgSrc} className="img-fluid" alt="" />
              </div>

              <div className="flexStart flex-col">
                <h3 className="text-xl font-semibold">{plat.title}</h3>
                <p className="mt-2">{plat.paraDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SMPlatforms;
