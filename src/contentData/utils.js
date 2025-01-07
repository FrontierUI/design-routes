import CreativeCamp from '../assets/images/cc.svg';
import BrandIdenDesNav from '../assets/images/brandIdenNav.svg';
import Presentation from '../assets/images/presentNav.svg';
import SocialMediaMan from '../assets/images/smmNav.svg';
import WebDesDevNav from '../assets/images/webDevNav.svg';
import AppDesDevNav from '../assets/images/appDevNav.svg';
import BrandsNav from '../assets/images/brandsNav.svg';
import Agencies from '../assets/images/agenciess.svg';
import DirCon from '../assets/images/dirCon.svg';

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
        href: '/products/brand-identity-design',
      },
      {
        name: 'Presentation Design',
        icon: Presentation,
        href: '/products/presentation-design',
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
