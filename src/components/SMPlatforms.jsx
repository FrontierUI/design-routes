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
      imgSrc: '/images/icons/keynote.png',
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
      imgSrc: '/images/icons/FacebookSMM.png',
      paraDesc:
        'An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on.',
    },
  ];

  return (
    // <div className="w-full mx-auto px-5 lg:px-12 smmPlatforms">
    //   <div className="flex items-start flex-col lg:flex-row max-lg:space-y-5 gap-10 relative">
    //     <div className="sticked">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //         className="bg-blue-500 text-white p-6 rounded-xl shadow-lg"
    //       >
    //         <h2 className="text-2xl font-bold">Sticky Content</h2>
    //         <p className="mt-4">
    //           Yeh section sticky rehega jab tak right-side content end nahi
    //           hota.
    //         </p>
    //       </motion.div>
    //     </div>

    //     <div className="lg:w-1/2 flex flex-col lg:h-auto space-y-5 lg:space-y-7">
    //       {ssmPlat.map((plat, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           className="bg-slate-100/[0.05] flexStart flex-col lg:flex-row rounded-xl shadow-md p-5 gap-4"
    //         >
    //           <div className="flexStart">
    //             <img
    //               src={plat.imgSrc}
    //               width={200}
    //               className="img-fluid"
    //               alt=""
    //             />
    //           </div>

    //           <div className="flexStart flex-col">
    //             <h3 className="text-xl font-semibold">{plat.title}</h3>
    //             <p className="mt-2">{plat.paraDesc}</p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <section className="px-5 lg:px-12">
      <div className="my-scroll-container">
        <div className="sticky-child flexStart flex-col space-y-4 md:sticky md:top-32 ">
          <div className="itemsStart flex-col space-y-4 md:w-11/12">
            <h3 className="text-2xl uppercase font-monaSemibold">
              Platform Mastery
            </h3>
            <h1 className="text-5xl font-monaBold">
              Expertise across all Social Media platforms
            </h1>
            <p>
              From LinkedIn and Instagram to TikTok and YouTube, every social
              media platform has its own distinct design requirements and
              inherent user expectations. Rely on our in-depth expertise, as
              well as the ability to version and scale any kind of social media
              content, static, motion or video, across your key social media
              channels.
            </p>
          </div>
        </div>

        <div className="sticky-child controls-panel">
          <div className="content-wrapper w-full md:static">
            <div className="flexStart flex-col space-y-5 md:space-y-7">
              {ssmPlat.map(({ title, imgSrc, paraDesc }, index) => (
                <div
                  key={index}
                  className="flexStart h-full flex-col md:flex-row gap-2"
                >
                  <div className="flexStart">
                    <img src={imgSrc} className="img-fluid w-[100px]" alt="" />
                  </div>
                  <div className="flexStart flex-col">
                    <h2 className="text-2xl font-monaBold">{title}</h2>
                    <p>{paraDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMPlatforms;
