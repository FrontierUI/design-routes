import CreativeCamp from '../assets/images/cc.svg';
import BrandIdenDesNav from '../assets/images/brandIdenNav.svg';
import Presentation from '../assets/images/presentNav.svg';
import SocialMediaMan from '../assets/images/smmNav.svg';
import WebDesDevNav from '../assets/images/webDevNav.svg';
import AppDesDevNav from '../assets/images/appDevNav.svg';
import BrandsNav from '../assets/images/brandsNav.svg';
import Agencies from '../assets/images/agenciess.svg';
import DirCon from '../assets/images/dirCon.svg';

import { Bolt } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { BellDot } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { Users } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Dessert } from 'lucide-react';
import { ShieldPlus } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Images } from 'lucide-react';
import { Figma } from 'lucide-react';
import { Play } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Database } from 'lucide-react';
import { PanelsTopLeft } from 'lucide-react';
import { PanelTop } from 'lucide-react';

// export const Menus = [
//   { name: 'Pricing' },

//   {
//     // subMenuHeading: [
//     //   'Creative Campaigns',
//     //   'Brand Identification Design',
//     //   'Social Media Management',
//     //   'Web Design & Development',
//     //   'App Design & Development',
//     //   'Presentation Design',
//     // ],

//     name: 'Products',
//     subMenuHeading: ['Services'],
//     subMenu: [
//       { name: 'Creative Campaigns', icon: CreativeCamp },
//       { name: 'Brand Identification Design', icon: BrandIdenDesNav },
//       { name: 'Social Media Management', icon: SocialMediaMan },
//       { name: 'Web Design & Development', icon: WebDesDevNav },
//       { name: 'App Design & Development', icon: AppDesDevNav },
//       { name: 'Presentation Design', icon: Presentation },
//     ],
//   },
//   {
//     name: 'Vertical',
//     subMenuHeading: ['Availablity'],
//     subMenu: [
//       { name: 'Agencies', icon: Agencies },
//       { name: 'Brands', icon: BrandsNav },
//       { name: 'SMEs', icon: DirCon },
//     ],
//   },
//   { name: 'Our Work' },
//   { name: 'About Us' },
// ];

export const Menus = [
  { name: 'Pricing' },

  {
    name: 'Products',
    subMenuHeading: ['', ''],
    gridCols: 2,
    // subMenu: [
    //   { name: 'Creative Campaigns', icon: CreativeCamp },
    //   { name: 'Brand Identification Design', icon: BrandIdenDesNav },
    //   { name: 'Social Media Management', icon: SocialMediaMan },
    //   { name: 'Presentation Design', icon: Presentation },
    //   { name: 'Web Design & Development', icon: WebDesDevNav },
    //   { name: 'App Design & Development', icon: AppDesDevNav },
    // ],

    subMenu: [
      { name: 'Creative Campaigns', icon: ShieldPlus },
      { name: 'Social Media Management', icon: Users },
      { name: 'Brand Identity Design', icon: Dessert },
      { name: 'Presentation Design', icon: Lock },
      { name: 'Web Design & Development', icon: Lock },
      { name: 'App Design & Development', icon: Lock },
    ],
  },

  {
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      { name: 'Agencies', icon: CircleHelp },
      { name: 'Brands', icon: MessageCircle },
      { name: 'SMEs', icon: TriangleAlert },
    ],
  },

  { href: '/our-work', name: 'Our Work' },
  { href: '/about-us', name: 'About Us' },
];
