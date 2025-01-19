import CreativeCamp from '/images/icons/cc.svg';
import BrandIdenDesNav from '/images/icons/brandIdenNav.svg';
import Presentation from '/images/icons/presentNav.svg';
import SocialMediaMan from '/images/icons/smmNav.svg';
import WebDesDevNav from '/images/icons/webDevNav.svg';
import AppDesDevNav from '/images/icons/appDevNav.svg';
import BrandsNav from '/images/icons/brandsNav.svg';
import Agencies from '/images/icons/agenciess.svg';
import DirCon from '/images/icons/dirCon.svg';

import users from '/images/icons/persons.svg';
import clock24 from '/images/icons/clock24.svg';
import revisionHome from '/images/icons/revision.svg';
import dollar from '/images/icons/dollar.svg';

import web1 from '../assets/images/Sequence01_4.mp4';
import web2 from '../assets/images/Sequence01_5.mp4';
import web3 from '../assets/images/Sequence01_6.mp4';
import web4 from '../assets/images/Sequence01_7.mp4';
import web5 from '../assets/images/SequenceNew.mp4';

import lgSeq1 from '../assets/images/Sequence01.mp4';
import lgSeq2 from '../assets/images/Sequence01_1.mp4';
import lgSeq3 from '../assets/images/Sequence01_2.mp4';
import lgSeq4 from '../assets/images/Sequence01_3.mp4';

import air from '/images/clientLogo/workair.png';
import asc from '/images/clientLogo/workasc.png';
import bayer from '/images/clientLogo/workbayer.png';
import beachfox from '/images/clientLogo/workbeachfox.png';
import bembien from '/images/clientLogo/workbembien.png';
import creactco from '/images/clientLogo/workcreactco.png';
import csquad from '/images/clientLogo/workcsquad.png';
import faizasteel from '/images/clientLogo/workfaizasteel.png';
import faw from '/images/clientLogo/workfaw.png';
import getz from '/images/clientLogo/workgetz.png';
import icipak from '/images/clientLogo/workicipak.png';
import iil from '/images/clientLogo/workiil.png';
import inverex from '/images/clientLogo/workinverex.png';
import mazito from '/images/clientLogo/workmazito.png';
import moosh from '/images/clientLogo/workmoosh.png';
import nixon from '/images/clientLogo/worknixon.png';
import rubies from '/images/clientLogo/workrubies.png';
import soyoung from '/images/clientLogo/worksoyoung.png';
import up from '/images/clientLogo/workup.png';

import thumb1 from '/images/portfolio/homePort/thumbnail-1.jpg';
import thumb2 from '/images/portfolio/homePort/thumbnail-2.jpg';
import thumb3 from '/images/portfolio/homePort/thumbnail-3.jpg';
import thumb4 from '/images/portfolio/homePort/thumbnail-4.jpg';
import thumb5 from '/images/portfolio/homePort/thumbnail-5.jpg';
import thumb6 from '/images/portfolio/homePort/thumbnail-6.jpg';
import thumb7 from '/images/portfolio/homePort/thumbnail-7.jpg';
import thumb8 from '/images/portfolio/homePort/thumbnail-8.jpg';
import thumb9 from '/images/portfolio/homePort/thumbnail-9.jpg';
import thumb10 from '/images/portfolio/homePort/thumbnail-10.jpg';

import CCamp from '/images/Creativecampaign.jpg';
import bIden from '/images/brandingIden.jpg';
import webUIX from '/images/WebsiteUIUX.jpg';
import uixApp from '/images/AppUIUX.jpg';
import socMM from '/images/SMM.jpg';
import preServ from '/images/presentation.jpg';

export const clientsLogo = [
  { cLogoId: 'air', src: air },
  { cLogoId: 'asc', src: asc },
  { cLogoId: 'bayer', src: bayer },
  { cLogoId: 'beachfox', src: beachfox },
  { cLogoId: 'bembien', src: bembien },
  { cLogoId: 'creactco', src: creactco },
  { cLogoId: 'csquad', src: csquad },
  { cLogoId: 'faizasteel', src: faizasteel },
  { cLogoId: 'faw', src: faw },
  { cLogoId: 'getz', src: getz },
  { cLogoId: 'icipak', src: icipak },
  { cLogoId: 'iil', src: iil },
  { cLogoId: 'inverex', src: inverex },
  { cLogoId: 'mazito', src: mazito },
  { cLogoId: 'moosh', src: moosh },
  { cLogoId: 'nixon', src: nixon },
  { cLogoId: 'rubies', src: rubies },
  { cLogoId: 'soyoung', src: soyoung },
  { cLogoId: 'up', src: up },
];

export const Menus = [
  { name: 'Pricing', href: '/pricing' },

  {
    // href: 'javascript:void(0)',
    name: 'Products',
    gridCols: 2,
    subMenu: [
      {
        name: 'Creative Campaigns',
        icon: CreativeCamp,
        href: '/products/creative-campaigns',
      },
      {
        name: 'Social Media Management',
        icon: SocialMediaMan,
        href: '/products/social-media-management',
      },
      {
        name: 'Brand Identity Design',
        icon: BrandIdenDesNav,
        href: '/products/brand-identity-designs',
      },
      {
        name: 'Presentation Design',
        icon: Presentation,
        href: '/products/presentation-designs',
      },
      {
        name: 'Web Design & Development',
        icon: WebDesDevNav,
        href: '/products/web-design-and-development',
      },
      {
        name: 'App Design & Development',
        icon: AppDesDevNav,
        href: '/products/app-design-and-development',
      },
    ],
  },

  {
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      { name: 'Agencies', href: '/vertical/for-agencies', icon: Agencies },
      { name: 'Brands', href: '/vertical/for-brands', icon: BrandsNav },
      {
        name: 'SMEs',
        href: '/vertical/small-and-medium-sized-enterprise',
        icon: DirCon,
      },
    ],
  },

  { name: 'Our Work', href: '/our-work' },
  { name: 'About Us', href: '/about-us' },
];

export const largeVids = [
  { vidId: 'lgSeq1', src: lgSeq1 },
  { vidId: 'lgSeq2', src: lgSeq2 },
  { vidId: 'lgSeq3', src: lgSeq3 },
  { vidId: 'lgSeq4', src: lgSeq4 },
];

export const smallVids = [
  { smVidId: 'web1', src: web1 },
  { smVidId: 'web2', src: web2 },
  { smVidId: 'web5', src: web5 },
  { smVidId: 'web3', src: web3 },
  { smVidId: 'web4', src: web4 },
];

export const homePortFolioUp = [
  {
    homePortUpId: 'thumb1',
    src: thumb1,
    href: '/our-work/internation-industries-ltd',
  },
  {
    homePortUpId: 'thumb2',
    src: thumb2,
    href: '/our-work/dove-creative-campaign',
  },
  {
    homePortUpId: 'thumb3',
    src: thumb3,
    href: '/our-work/digitall-creative-campaign',
  },
  {
    homePortUpId: 'thumb4',
    src: thumb4,
    href: '/our-work/effy-creative-campaign',
  },
  {
    homePortUpId: 'thumb5',
    src: thumb5,
    href: '/our-work/grom-icecream-creative-campaign',
  },
];

export const homePortFolioBot = [
  {
    homePortBotId: 'thumb6',
    src: thumb6,
    href: '/our-work/oudsire-ajmal-fragrance-creative-campaign',
  },
  {
    homePortBotId: 'thumb7',
    src: thumb7,
    href: '/our-work/rivermall-creative-campaign',
  },
  {
    homePortBotId: 'thumb8',
    src: thumb8,
    href: '/our-work/fruit-nation-chilled-nectar-creative-campaign',
  },
  {
    homePortBotId: 'thumb9',
    src: thumb9,
    href: '/our-work/digitall-creative-campaign',
  },
  {
    homePortBotId: 'thumb10',
    src: thumb10,
    href: '/our-work/yap-finance-creative-campaign',
  },
];

export const homeServiceDetails = [
  {
    id: 'sd1',
    icon: dollar,
    title: '7 days money-back guarantee',
    description:
      'Enjoy peace of mind with our hassle-free 7-day money-back guarantee.',
  },
  {
    id: 'sd2',
    icon: clock24,
    title: 'Same-day Delivery',
    description:
      'Get your project delivered the same day without sacrificing quality.',
  },
  {
    id: 'sd3',
    icon: revisionHome,
    title: 'Unlimited Requests & Revisions',
    description: 'Request as many changes as you need until you’re satisfied.',
  },
  {
    id: 'sd4',
    icon: users,
    title: 'Professional team',
    description: 'Work with our dedicated team of experienced professionals.',
  },
];

export const prod1 = [
  {
    id: 'creativeCampaignService',
    href: '/products/creative-campaigns',
    image: CCamp,
    title: 'Creative Campaigns',
    descr:
      'With innovative and compelling campaigns, captivate your unique business goals and resonate with your target audience.',
  },
  {
    id: 'brandIndityDesService',
    href: '/products/brand-identity-designs',
    image: bIden,
    title: 'Brand Identity Design',
    descr:
      'Our branding services encompass everything from logo design to brand strategy, ensuring a cohesive and compelling brand identity.',
  },
];

export const prod2 = [
  {
    id: 'webDesDevService',
    href: '/products/web-design-and-development',
    image: webUIX,
    title: 'Web Design & Development',
    descr:
      'User-friendly, and optimized for performance, our websites are built to enhance user experience and drive conversions.',
  },
  {
    id: 'appDesDevService',
    href: '/products/app-design-and-development',
    image: uixApp,
    title: 'Web Design & Development',
    descr:
      'Bring your ideas to life with intuitive and engaging mobile applications. We ensure your app delivers a seamless user experience across all devices.',
  },
];

export const prod3 = [
  {
    id: 'socialMediaManage',
    href: '/products/social-media-management',
    image: socMM,
    title: 'Social Media Management',
    descr:
      'Engage with your audience and manage content that drives interaction and nurtures community.',
  },
  {
    id: 'presentationDesService',
    href: '/products/presentation-designs',
    image: preServ,
    title: 'Presentation Design',
    descr:
      'Get your presentation design done, we transform your ideas into visually engaging and persuasive presentations.',
  },
];
