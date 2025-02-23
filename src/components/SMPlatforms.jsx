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
