import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
};

import overview from '/images/icons/overview.svg';
import history from '/images/icons/history.svg';
import invoice from '/images/icons/invoice.svg';
import orderPack from '/images/icons/orderPack.svg';
import mail from '/images/icons/mail.svg';
import cog from '/images/icons/cog.svg';
import helpCent from '/images/icons/helpCent.svg';
import tracking from '/images/icons/tracking.svg';
import ticket from '/images/icons/ticket.svg';

// Menu configuration with icon paths
export const Menus = [
  { name: 'Pricing', href: '/pricing' },
  {
    name: 'Products',
    gridCols: 1,
    subMenu: [
      {
        name: 'Creative Campaigns',
        icon: '/images/icons/cc.svg',
        href: '/products/creative-campaigns',
      },
      {
        name: 'Brand Identity & Design',
        icon: '/images/icons/brandIdenNav.svg',
        href: '/products/brand-identity-designs',
      },
      {
        name: 'Social Media Management',
        icon: '/images/icons/smmNav.svg',
        href: '/products/social-media-management',
      },
      {
        name: 'Web Design & Development',
        icon: '/images/icons/webDevNav.svg',
        href: '/products/web-design-and-development',
      },
      {
        name: 'App Design & Development',
        icon: '/images/icons/appDevNav.svg',
        href: '/products/app-design-and-development',
      },
      {
        name: 'Presentation Design',
        icon: '/images/icons/presentNav.svg',
        href: '/products/presentation-designs',
      },
    ],
  },
  {
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      {
        name: 'Agencies',
        href: '/vertical/for-agencies',
        icon: '/images/icons/agenciess.svg',
      },
      {
        name: 'Brands',
        href: '/vertical/for-brands',
        icon: '/images/icons/brandsNav.svg',
      },
      {
        name: 'SMEs',
        href: '/vertical/small-and-medium-sized-enterprise',
        icon: '/images/icons/dirCon.svg',
      },
    ],
  },
  { name: 'Our Work', href: '/our-work' },
  { name: 'About Us', href: '/about-us' },
];

// Large assets as paths
export const largeVids = [
  { vidId: 'lgSeq1', src: '/images/Sequence01.mp4' },
  { vidId: 'lgSeq2', src: '/images/Sequence01_1.mp4' },
  { vidId: 'lgSeq3', src: '/images/Sequence01_2.mp4' },
  { vidId: 'lgSeq4', src: '/images/Sequence01_3.mp4' },
];

export const smallVids = [
  { smVidId: 'web1', src: '/images/Sequence01_4.mp4' },
  { smVidId: 'web2', src: '/images/Sequence01_5.mp4' },
  { smVidId: 'web5', src: '/images/SequenceNew.mp4' },
  { smVidId: 'web3', src: '/images/Sequence01_6.mp4' },
  { smVidId: 'web4', src: '/images/Sequence01_7.mp4' },
  { smVidId: 'web6', src: '/images/webSeq6.mp4' },
];

export const clientsLogo = [
  { cLogoId: 'air', src: '/images/clientLogo/workair.png' },
  { cLogoId: 'asc', src: '/images/clientLogo/workasc.png' },
  { cLogoId: 'bayer', src: '/images/clientLogo/workbayer.png' },
  { cLogoId: 'beachfox', src: '/images/clientLogo/workbeachfox.png' },
  { cLogoId: 'bembien', src: '/images/clientLogo/workbembien.png' },
  { cLogoId: 'creactco', src: '/images/clientLogo/workcreactco.png' },
  { cLogoId: 'csquad', src: '/images/clientLogo/workcsquad.png' },
  { cLogoId: 'faizasteel', src: '/images/clientLogo/workfaizasteel.png' },
  { cLogoId: 'faw', src: '/images/clientLogo/workfaw.png' },
  { cLogoId: 'getz', src: '/images/clientLogo/workgetz.png' },
  { cLogoId: 'icipak', src: '/images/clientLogo/workicipak.png' },
  { cLogoId: 'iil', src: '/images/clientLogo/workiil.png' },
  { cLogoId: 'inverex', src: '/images/clientLogo/workinverex.png' },
  { cLogoId: 'mazito', src: '/images/clientLogo/workmazito.png' },
  { cLogoId: 'moosh', src: '/images/clientLogo/workmoosh.png' },
  { cLogoId: 'nixon', src: '/images/clientLogo/worknixon.png' },
  { cLogoId: 'rubies', src: '/images/clientLogo/workrubies.png' },
  { cLogoId: 'soyoung', src: '/images/clientLogo/worksoyoung.png' },
  { cLogoId: 'up', src: '/images/clientLogo/workup.png' },
];

export const dashboardSidebar = [
  { hrefName: 'Overview', icon: overview, href: '/dashboard' },
  {
    hrefName: 'View Order History',
    icon: history,
    href: '/view-order-history',
  },
  { hrefName: 'Order Details', icon: orderPack, href: '/order-details' },
  { hrefName: 'Download Invoice', icon: invoice, href: '/download-invoice' },
  { hrefName: 'Submit Ticket', icon: ticket, href: '/submit-ticket' },
  {
    hrefName: 'Track Ticket Status',
    icon: tracking,
    href: '/track-ticket-status',
  },
  { hrefName: 'Settings', icon: cog, href: '/settings' },
  { hrefName: 'Contacts', icon: mail, href: '/contacts' },
  { hrefName: 'Help Center', icon: helpCent, href: '/help-center' },
];

export const homePortFolioUp = [
  {
    src: '/images/portfolio/homePort/thumbnail-1.jpg',
    href: '/our-work/internation-industries-ltd',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-2.jpg',
    href: '/our-work/dove-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-3.jpg',
    href: '/our-work/digitall-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-4.jpg',
    href: '/our-work/effy-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-5.jpg',
    href: '/our-work/grom-icecream-creative-campaign',
  },
];

export const homePortFolioBot = [
  {
    src: '/images/portfolio/homePort/thumbnail-6.jpg',
    href: '/our-work/oudsire-ajmal-fragrance-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-7.jpg',
    href: '/our-work/rivermall-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-8.jpg',
    href: '/our-work/fruit-nation-chilled-nectar-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-9.jpg',
    href: '/our-work/digitall-creative-campaign',
  },
  {
    src: '/images/portfolio/homePort/thumbnail-10.jpg',
    href: '/our-work/yap-finance-creative-campaign',
  },
];

// export const brandPortFolioUp = [
//   { src: '/images/portfolio/brandIdentity/DAmore.jpg', href: '/our-work/damore-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/250.jpg', href: '/our-work/twofifty-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/Beyound.jpg', href: '/our-work/beyond-beverages-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/GU7.jpg', href: '/our-work/gearup7-campaign' },
//   { src: '/images/portfolio/brandIdentity/Aroma.jpg', href: '/our-work/aroma-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/Soguosto.jpg', href: '/our-work/sogusto-brand-identity-design' },
// ];

// export const brandPortFolioBot = [
//   { src: '/images/portfolio/brandIdentity/DAmore.jpg', href: '/our-work/damore-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/250.jpg', href: '/our-work/twofifty-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/Beyound.jpg', href: '/our-work/beyond-beverages-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/GU7.jpg', href: '/our-work/gearup7-campaign' },
//   { src: '/images/portfolio/brandIdentity/Aroma.jpg', href: '/our-work/aroma-brand-identity-design' },
//   { src: '/images/portfolio/brandIdentity/Soguosto.jpg', href: '/our-work/sogusto-brand-identity-design' },
// ];

// export const webPortfolioUp = [
//   { src: '/images/portfolio/wdd/DrkateWebpage.png', href: '/our-work/drkate-web-design-and-development' },
//   { src: '/images/portfolio/wdd/GU7webpage.png', href: '/our-work/gearup7-campaign' },
//   { src: '/images/portfolio/wdd/levelupwebpage.png', href: '/our-work/levelup-web-design-and-development' },
//   { src: '/images/portfolio/wdd/Mazitowebpage.png', href: '/our-work/mazito-web-app-design-development' },
//   { src: '/images/portfolio/wdd/shopcowebpage.png', href: '/our-work/shopco-web-design-and-development' },
//   { src: '/images/portfolio/wdd/SISwebpage.png', href: '/our-work/splendour-in-stone-web-design-and-development' },
//   { src: '/images/portfolio/wdd/wehiwebpage.png', href: '/our-work/wehi-web-design-and-development' },
//   { src: '/images/portfolio/wdd/Wesavewithwebpage.png', href: '/our-work/wesaveforless-web-app-design-development' },
// ];

// export const webPortfolioBot = [
//   { src: '/images/portfolio/wdd/DrkateWebpage.png', href: '/our-work/drkate-web-design-and-development' },
//   { src: '/images/portfolio/wdd/GU7webpage.png', href: '/our-work/gearup7-campaign' },
//   { src: '/images/portfolio/wdd/levelupwebpage.png', href: '/our-work/levelup-web-design-and-development' },
//   { src: '/images/portfolio/wdd/Mazitowebpage.png', href: '/our-work/mazito-web-app-design-development' },
//   { src: '/images/portfolio/wdd/shopcowebpage.png', href: '/our-work/shopco-web-design-and-development' },
//   { src: '/images/portfolio/wdd/SISwebpage.png', href: '/our-work/splendour-in-stone-web-design-and-development' },
//   { src: '/images/portfolio/wdd/wehiwebpage.png', href: '/our-work/wehi-web-design-and-development' },
//   { src: '/images/portfolio/wdd/Wesavewithwebpage.png', href: '/our-work/wesaveforless-web-app-design-development' },
// ];

// export const smmPortfolioUp = [
//   { src: '/images/portfolio/smm/caregiver.png', href: '/our-work/caregiver-smm-campaign' },
//   { src: '/images/portfolio/smm/Ill.png', href: '/our-work/internation-industries-ltd' },
//   { src: '/images/portfolio/smm/Mazito.png', href: '/our-work/mazito-web-app-design-development' },
//   { src: '/images/portfolio/smm/Oral.png', href: '/our-work/oral-smm-campaign' },
//   { src: '/images/portfolio/smm/Shortcast.png', href: '/our-work/shortcast-club-smm-campaign' },
//   { src: '/images/portfolio/smm/FNTomato.png', href: '/our-work/fruit-nation-lush-tomato-ketchup-campign' },
// ];

// export const smmPortfolioBot = [
//   { src: '/images/portfolio/smm/FNTomato.png', href: '/our-work/fruit-nation-lush-tomato-ketchup-campign' },
//   { src: '/images/portfolio/smm/Shortcast.png', href: '/our-work/shortcast-club-smm-campaign' },
//   { src: '/images/portfolio/smm/Oral.png', href: '/our-work/oral-smm-campaign' },
//   { src: '/images/portfolio/smm/Mazito.png', href: '/our-work/mazito-web-app-design-development' },
//   { src: '/images/portfolio/smm/Ill.png', href: '/our-work/internation-industries-ltd' },
//   { src: '/images/portfolio/smm/caregiver.png', href: '/our-work/caregiver-smm-campaign' },
// ]

// export const pdPortfolioUp = [
//   { src: '/images/portfolio/presentDesign/ALJ.jpg', href: '/our-work/alj-toyota-lubricants-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Darent.jpg', href: '/our-work/darent-real-state-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Freshbar.jpg', href: '/our-work/freshbar-beverages-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Getz.jpg', href: '/our-work/getz-pharmaceuticals-presentation-design' },
//   { src: '/images/portfolio/presentDesign/HNAK.jpg', href: '/our-work/hnak-audio-electronics-presentation-design' },
//   { src: '/images/portfolio/presentDesign/timhorton.jpg', href: '/our-work/tim-hortons-restaurants-presentation-design' },
// ];

// export const pdPortfolioBot = [
//   { src: '/images/portfolio/presentDesign/timhorton.jpg', href: '/our-work/tim-hortons-restaurants-presentation-design' },
//   { src: '/images/portfolio/presentDesign/HNAK.jpg', href: '/our-work/hnak-audio-electronics-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Getz.jpg', href: '/our-work/getz-pharmaceuticals-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Freshbar.jpg', href: '/our-work/freshbar-beverages-presentation-design' },
//   { src: '/images/portfolio/presentDesign/Darent.jpg', href: '/our-work/darent-real-state-presentation-design' },
//   { src: '/images/portfolio/presentDesign/ALJ.jpg', href: '/our-work/alj-toyota-lubricants-presentation-design' },
// ];

// export const appPortfolioUp = [
//   { src: '/images/portfolio/appdesdev/Dmart.png', href: '/our-work/dmart-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/ElegantFurniture.png', href: '/our-work/elegent-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/FashionBlogs.png', href: '/our-work/fashion-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/mazitoAppPage.png', href: '/our-work/mazito-web-and-app-design-development' },
//   { src: '/images/portfolio/appdesdev/UBLFintech.png', href: '/our-work/ubl-finance-service-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/wesavewith.png', href: '/our-work/wesaveforless-web-app-design-development' },
// ];

// export const appPortfolioBot = [
//   { src: '/images/portfolio/appdesdev/Dmart.png', href: '/our-work/dmart-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/ElegantFurniture.png', href: '/our-work/elegent-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/FashionBlogs.png', href: '/our-work/fashion-ecommerce-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/mazitoAppPage.png', href: '/our-work/mazito-web-and-app-design-development' },
//   { src: '/images/portfolio/appdesdev/UBLFintech.png', href: '/our-work/ubl-finance-service-app-uiuix-design' },
//   { src: '/images/portfolio/appdesdev/wesavewith.png', href: '/our-work/wesaveforless-web-app-design-development' },
// ];

export const homeServiceDetails = [
  {
    id: 'sd1',
    icon: '/images/icons/moneyReturn.svg',
    title: '7 days money-back guarantee',
    description:
      'Enjoy peace of mind with our hassle-free 7-day money-back guarantee.',
  },
  {
    id: 'sd2',
    icon: '/images/icons/clock24.svg',
    title: 'Same-day Delivery',
    description:
      'Get your project delivered the same day without sacrificing quality.',
  },
  {
    id: 'sd3',
    icon: '/images/icons/revision.svg',
    title: 'Unlimited Requests & Revisions',
    description: 'Request as many changes as you need until you’re satisfied.',
  },
  {
    id: 'sd4',
    icon: '/images/icons/persons.svg',
    title: 'Professional team',
    description: 'Work with our dedicated team of experienced professionals.',
  },
];

export const prod1 = [
  {
    id: 'creativeCampaignService',
    href: '/products/creative-campaigns',
    image: '/images/Creativecampaign.jpg',
    title: 'Creative Campaigns',
    descr:
      'With innovative and compelling campaigns, captivate your unique business goals and resonate with your target audience.',
  },
  {
    id: 'brandIndityDesService',
    href: '/products/brand-identity-designs',
    image: '/images/brandingIden.jpg',
    title: 'Brand Identity & Design',
    descr:
      'Our branding services encompass everything from logo design toOrm brand strategy, ensuring a cohesive and compelling brand identity.',
  },
];

export const prod2 = [
  {
    id: 'webDesDevService',
    href: '/products/web-design-and-development',
    image: '/images/WebsiteUIUX.jpg',
    title: 'Web Design & Development',
    descr:
      'User-friendly, and optimized for performance, our websites are built to enhance user experience and drive conversions.',
  },
  {
    id: 'appDesDevService',
    href: '/products/app-design-and-development',
    image: '/images/AppUIUX.jpg',
    title: 'App Design & Development',
    descr:
      'Bring your ideas to life with intuitive and engaging mobile applications. We ensure your app delivers a seamless user experience across all devices.',
  },
];

export const prod3 = [
  {
    id: 'socialMediaManage',
    href: '/products/social-media-management',
    image: '/images/SMM.jpg',
    title: 'Social Media Management',
    descr:
      'Engage with your audience and manage content that drives interaction and nurtures community.',
  },
  {
    id: 'presentationDesService',
    href: '/products/presentation-designs',
    image: '/images/presentation.jpg',
    title: 'Presentation Design',
    descr:
      'Get your presentation design done, we transform your ideas into visually engaging and persuasive presentations.',
  },
];

export const srcFilesList = [
  { para: 'Unlimited requests', src: '/images/icons/revisions.svg' },
  { para: 'Unlimited revisions', src: '/images/icons/request.svg' },
  { para: 'Unlimited brand profiles', src: '/images/icons/brandProfiles.svg' },
  { para: 'Native source files', src: '/images/icons/src.svg' },
  { para: 'Art Director', src: '/images/icons/artDir.svg' },
  { para: 'Project Manager', src: '/images/icons/projectManager.svg' },
  { para: 'Real-time collabration', src: '/images/icons/collab.svg' },
  { para: 'Trello Project Management', src: '/images/icons/trello.svg' },
  { para: '7-day money-back guarantee', src: '/images/icons/moneyBack.svg' },
  { para: 'Cancel anytime', src: '/images/icons/cancel.svg' },
  { para: 'Middle+/Senior Designer', src: '/images/icons/middle.svg' },
];

export const clientTestimonials = [
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'Cooper Boone',
    comment:
      'Routes.Design team is exceptional! They quickly resolved remaining issues on our website with ease. Communication was smooth, and their responsiveness and reliability were outstanding. We eagerly anticipate continuing our collaboration with them.',
  },
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'Suzanne Brosnan',
    comment:
      "Routes.Design is fantastic to work with—highly experienced, fast, and a great communicator. Both projects we've collaborated on were executed flawlessly. I highly recommend their professional products!",
  },
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'John Law',
    comment:
      'Working with Routes.Design has been a pleasure. They grasped our website needs perfectly and delivered a site that significantly outperforms the previous one. Their valuable suggestions and patience with multiple reviews were much appreciated. I’m very satisfied and will definitely choose them for future projects.',
  },
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'Emiliano Void',
    comment:
      'Routes.Design exceeded our expectations. Their responsiveness, attention to detail, and dedication made the entire process seamless. They delivered top-quality work, and we highly recommend their products.',
  },
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'Susanna Mason',
    comment:
      'Stephen of Routes.Design Ltd designed two amazing sales videos for my company. He was provided with limited original digital resources but worked around the limitations and delivered two excellent sales videos for our products. Will definitely use Stephen again and would 100% recommend his company! Money absolutely well spent!',
  },
  {
    clAvatar: '/images/icons/avatar.png',
    clientName: 'Devid',
    comment:
      "Routes.Design Ltd is an outstanding website design company that I had the pleasure of working with. From start to finish, their team impressed me with their professionalism, creativity, and attention to detail. Here's why I highly recommend their services!",
  },
];

export const formatMaster = [
  {
    src: '/images/icons/MotionAds.svg',
    title: 'Animated / Motion Ads',
    para: 'Bring your ads to life with captivating animation and illustrations. Motion design can also be applied with other formats like video.',
  },
  {
    src: '/images/icons/staticImg.svg',
    title: 'Static Image Ads',
    para: 'From a single campaign to multichannel rollouts, design striking static ads that make a statement and leave a lasting impression.',
  },
  {
    src: '/images/icons/GraphicVideo.svg',
    title: 'Video Ads',
    para: 'Move at a solid clip with full-service video Products that let you make an instant impact across a wide range of platforms and channels.',
  },
  {
    src: '/images/icons/augmentedReality.svg',
    title: 'Augmented Reality Ads',
    para: 'Push the boundaries of creativity with world and front-facing AR applications for innovative immersive campaigns and experiences.',
  },
];

export const dynamicFormat = [
  {
    src: '/images/icons/MotionAds.svg',
    title: 'Animated / Motion Ads',
    para: 'Bring your ads to life with captivating animation and illustrations. Motion design can also be applied with other formats like video.',
  },
  {
    src: '/images/icons/staticImgAds.svg',
    title: 'Static Imagery',
    para: 'Create impactful static ads that convey your message clearly and effectively.',
  },
  {
    src: '/images/icons/GraphicVideo.svg',
    title: 'Video Content',
    para: 'Leverage the power of video to tell your brand’s story with engaging and memorable content.',
  },
  {
    src: '/images/icons/augmentedReality.svg',
    title: 'Augmented Reality',
    para: 'Explore the immersive social media creative with AR experiences that engage and amaze your audience.',
  },
];

export const choossUs = [
  {
    src: '/images/icons/expertTeam.svg',
    title: 'Expert Team',
    para: 'Our team consists of professionals with years of experience in various design fields.',
  },
  {
    src: '/images/icons/innovateSol.svg',
    title: 'Innovative Solutions',
    para: 'We keep up with the latest trends and technologies to implement the most modern and effective design approaches.',
  },
  {
    src: '/images/icons/personalApproach.svg',
    title: 'Personalized Approach',
    para: "We carefully study each client's needs to offer unique solutions that align with your business goals.",
  },
  {
    src: '/images/icons/flexSpeed.svg',
    title: 'Flexibility & Speed',
    para: 'We understand the importance of timely project completion and are ready to adapt to your deadlines and requirements.',
  },
];

export const appDevStrategies = [
  {
    src: '/images/icons/responsiveLayout.svg',
    title: 'Responsive Layout',
    para: 'Design the app with flexible grid systems (e.g., CSS Grid, Flexbox) and media queries to ensure compatibility across all devices (mobile, tablet, desktop).',
  },
  {
    src: '/images/icons/adaptive.svg',
    title: 'Adaptive UI Components',
    para: 'Implement reusable and adaptive components (e.g., buttons, forms, menus) that adjust automatically based on screen size and user input methods (touch vs. click).',
  },
  {
    src: '/images/icons/GraphicVideo.svg',
    title: 'Optimized Images & Media',
    para: 'Use responsive image techniques (e.g., srcset, lazy loading) to ensure the app loads appropriate media files based on device resolution, improving performance.',
  },
  {
    src: '/images/icons/crossPlat.svg',
    title: 'Cross-Platform Functionality',
    para: 'Build a cross-platform solution (React Native or Flutter for mobile, React/Angular/Vue for web) that offers a consistent user experience, ensuring all features work seamlessly on multiple platforms.',
  },
  {
    src: '/images/icons/apiData.svg',
    title: 'API & Data Management',
    para: 'Design RESTful APIs or GraphQL queries that can handle requests from various devices with different data needs, optimizing the backend to support fast load times and responsiveness.',
  },
  {
    src: '/images/icons/performOpt.svg',
    title: 'Performance Optimization',
    para: 'Implement strategies like code splitting, minification, and caching to improve performance, ensuring the app remains fast and responsive even under heavy load across different devices.',
  },
];

export const wddStrategies = [
  {
    src: '/images/icons/webStrategy.svg',
    title: 'Website Strategy',
    para: 'Our marketing consulting team can help you craft channel and campaign plans that drive traffic to your website.',
  },
  {
    src: '/images/icons/webDesign.svg',
    title: 'Website Design',
    para: 'Routes.Design creates conversion-focused websites and landing pages that are tailored to your campaign goals.',
  },
  {
    src: '/images/icons/landingPage.svg',
    title: 'Landing Page Designs',
    para: 'A UX/UI audit optimizes digital products by identifying design Landing page templates and designs created from scratch to maximize conversions of your products or services.',
  },
  {
    src: '/images/icons/webflowDev.svg',
    title: 'Webflow Development',
    para: 'Utilize Webflow to efficiently develop responsive, animated websites and landing pages that engage and convert.',
  },
  {
    src: '/images/icons/webillustration.svg',
    title: 'Website Illustrations',
    para: 'Our illustrators craft unique, custom designs to add a creative touch that sets your website and landing pages apart.',
  },
  {
    src: '/images/icons/webuiux.svg',
    title: 'UX/UI Audit',
    para: 'Utilize Webflow to efficiently develop responsive, animated websites and landing pages that engage and convert.',
  },
  {
    src: '/images/icons/BrandDev.svg',
    title: 'Design Systems',
    para: 'Compilation and development of a design system taking into account your brand’s requirements and objectives.',
  },
  {
    src: '/images/icons/webConte.svg',
    title: 'Content Development',
    para: 'Our copywriters develop compelling, clear content that communicates your message and drives conversions.',
  },
];

export const smmStrat = [
  {
    src: '/images/icons/orgCont.svg',
    title: 'Organic Social Media Content',
    para: 'Engage your audience with authentic and compelling content that boosts your organic reach and brand loyalty.',
  },
  {
    src: '/images/icons/GraphicVideo.svg',
    title: 'Social Media Video Content',
    para: 'Optimize for algorithms and engagement across social media platforms, like Instagram, TikTok and YouTube. Livestream and UGC support is available.',
  },
  {
    src: '/images/icons/smPostDesign.svg',
    title: 'Social Media Post Design',
    para: 'Capture attention with visually stunning post designs that reflect your brand’s identity and message.',
  },
  {
    src: '/images/icons/smColletral.svg',
    title: 'Social Media Collateral',
    para: 'From profile banners to story graphics, ensure every aspect of your social media presence is on brand and impactful.',
  },
  {
    src: '/images/icons/smResponse.svg',
    title: 'Social Media Response Guide',
    para: 'Equip your team with a comprehensive guide to maintain a consistent and engaging brand voice across all interactions.',
  },
  {
    src: '/images/icons/smcd.svg',
    title: 'Social Media Concept Design',
    para: 'Innovate and set yourself apart from the competition with unique concept designs that set trends and engage audiences in new ways.',
  },
];

export const fullScope = [
  {
    src: '/images/icons/BrandDev.svg',
    title: 'Brand Development',
    para: 'Starting from scratch? Craft a robust, one-of-a-kind foundation that ensures engagement and resonance across all platforms and audiences.',
  },
  {
    src: '/images/icons/BrandDevDesign.svg',
    title: 'Brand Design',
    para: 'From fundamentals like logos, colors, and typography to templates and custom image libraries, get the tools you need to get to market faster.',
  },
  {
    src: '/images/icons/scopeLogo.svg',
    title: 'Logo Design',
    para: 'Need help updating existing logos or creating new ones? Create a rand of options, including static and animated logos suitable for a range of applications.',
  },
  {
    src: '/images/icons/guideLines.svg',
    title: 'Brand Guidelines',
    para: 'Ensure brand consistency, capture your distinct voice and iconography all in one place for ease of use and scale.',
  },
  {
    src: '/images/icons/book.svg',
    title: 'Brand Story Development',
    para: 'Your brand has a feel as well as a look. Develop a narrative that speaks to this essence and can be expressed time and again.',
  },
  {
    src: '/images/icons/rebrand.svg',
    title: 'Rebranding Services',
    para: 'From a refresh to a full rebrand, revitalize your brand seamlessly with a global network of branding talent that brings diverse perspectives and signature expertise.',
  },
];

export const designProcess = [
  {
    src: '/images/icons/researchStrategy.svg',
    title: 'Research and Strategy',
    para: "Before any work begins, we want to understand the business landscape you operate within. This involves studying market trends, gathering insights on customer preferences, and analyzing competitors. This initial phase provides us with a robust foundation, helping our brand design services to align your subsequent designs with both market demands and your brand's core essence.",
  },
  {
    src: '/images/icons/Conceptualization.svg',
    title: 'Conceptualization',
    para: 'With the insights from the first phase of our brand identity design services, our team of creative minds comes together to brainstorm. This phase is all about exploration, where we draft initial concepts, play with colors, typography, and visuals, and envision what the brand could look like in various scenarios.',
  },
  {
    src: '/images/icons/designExecution.svg',
    title: 'Design Execution',
    para: 'Once the initial concepts are presented, we actively seek feedback to refine our designs. As part of our branding design services, we include iterative adjustments based on the insights we gather. We want the end result to not only look good but also resonate with the intended audience.',
  },
  {
    src: '/images/icons/BrandDev.svg',
    title: 'Implementation',
    para: "Once the designs have been polished and finalized, we reach the real-world application phase of our brand identity design services. This isn't just about placing a logo on a website. Your new identity should be at every customer touchpoint, from business cards to digital ads and beyond. Our brand design services team makes sure that your new identity seamlessly integrates across various mediums, maintaining consistency and reinforcing brand recognition.",
  },
];

export const comprehensive = [
  {
    src: '/images/icons/VisualDev.svg',
    title: 'Campaign Key Visual Development',
    para: "Create a powerful, cohesive visual identity that becomes the cornerstone of your campaign, ensuring consistency across all touchpoints and capturing your brand's essence.",
  },
  {
    src: '/images/icons/POSMAdapt.svg',
    title: 'Up to 5 Campaign POSM Adaptations',
    para: 'Adapt your campaign visuals into up to 5 Point-of-Sale Materials (POSM), customized to engage customers at critical in-store and display touchpoints, seamlessly integrating with your campaign theme.',
  },
  {
    src: '/images/icons/DigitalAds.svg',
    title: 'Campaign Digital Ads',
    para: "Design high-impact digital ads tailored for social media, display networks, and programmatic platforms, driving engagement and amplifying your campaign's reach across the digital landscape.",
  },
  {
    src: '/images/icons/GraphicVideo.svg',
    title: 'Motion Graphic Video',
    para: 'Bring your campaign to life with dynamic motion graphic videos that tell your brand story, engage your audience, and deliver your message with flair and creativity.',
  },
  {
    src: '/images/icons/EmailDesign.svg',
    title: 'Campaign Email Design',
    para: "Craft visually stunning, conversion-focused email designs that align with your campaign's goals, driving engagement and delivering your message straight to the inbox.",
  },
  {
    src: '/images/icons/PresDesign.svg',
    title: 'Campaign Presentation Design',
    para: 'Develop sleek, on-brand presentations to showcase your campaign strategy, results, or creative concepts, ensuring your ideas are communicated with impact and clarity.',
  },
];

export const provenExpert = [
  {
    id: 'numb1',
    title: 'projects completed',
    numbering: 809,
    desc: 'Brand design products sold and counting',
  },
  {
    id: 'numb2',
    title: 'TOTAL CUSTOMERS',
    numbering: 1109,
    desc: 'Total customers used our creative campaign product',
  },
  {
    id: 'numb3',
    title: 'TOTAL HOURS',
    numbering: 11594,
    desc: 'Hours dedicated to creative campaigns product',
  },
  {
    id: 'numb4',
    title: 'CUSTOMER SATISFACTION',
    numbering: '4.95',
    desc: 'Average branding product approval rating',
  },
];

export const professionalism = [
  {
    src: '/images/icons/fixedRate.png',
    title: 'Fixed Monthly Rate',
    para: 'No hidden costs Pay the same price every month.',
  },
  {
    src: '/images/icons/UnlimitedReq.svg',
    title: 'Unlimited Requests',
    para: "Request as many designs as needed — we won't stop you.",
  },
  {
    src: '/images/icons/UnlimRev.svg',
    title: 'Unlimited Revisions',
    para: 'Request as many revisions as your project needs.',
  },
  {
    src: '/images/icons/sameday.svg',
    title: 'Same-day Delivery',
    para: 'Get your design back same day.',
  },
  {
    src: '/images/icons/ProDesigners.svg',
    title: 'Professional Designers',
    para: 'Work with battle-tested professionals only.',
  },
  {
    src: '/images/icons/DesignerMatch.svg',
    title: 'Designer Match',
    para: 'Each request goes to the most qualified designer for the job.',
  },
];
