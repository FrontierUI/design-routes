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
        href: '/creative-campaigns',
      },
      {
        name: 'Social Media Management',
        icon: SocialMediaMan,
        href: '/social-media-management',
      },
      {
        name: 'Brand Identity Design',
        icon: BrandIdenDesNav,
        href: '/brand-identity-design',
      },
      {
        name: 'Presentation Design',
        icon: Presentation,
        href: '/presentation-design',
      },
      {
        name: 'Web Design & Development',
        icon: WebDesDevNav,
        href: '/web-design-and-development',
      },
      {
        name: 'App Design & Development',
        icon: AppDesDevNav,
        href: '/app-design-and-development',
      },
    ],
  },

  {
    // href: 'javascript:void(0)',
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      { name: 'Agencies', href: '/for-agencies', icon: Agencies },
      { name: 'Brands', href: '/for-brands', icon: BrandsNav },
      {
        name: 'SMEs',
        href: '/small-and-medium-sized-enterprise',
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
