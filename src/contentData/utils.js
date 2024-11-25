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
  { name: 'Pricing', href: "/pricing" },

  {
    name: 'Products',
    subMenuHeading: ['', ''],
    gridCols: 2,
    href: "/products",
    // subMenu: [
    //   { name: 'Creative Campaigns', icon: CreativeCamp },
    //   { name: 'Brand Identification Design', icon: BrandIdenDesNav },
    //   { name: 'Social Media Management', icon: SocialMediaMan },
    //   { name: 'Presentation Design', icon: Presentation },
    //   { name: 'Web Design & Development', icon: WebDesDevNav },
    //   { name: 'App Design & Development', icon: AppDesDevNav },
    // ],

    subMenu: [
      { name: 'Creative Campaigns', icon: ShieldPlus, href: "/creative-campaigns" },
      { name: 'Social Media Management', icon: Users, href: "/social-media-management" },
      { name: 'Brand Identity Design', icon: Dessert, href: "/brand-identity-design" },
      { name: 'Presentation Design', icon: Lock, href: "/presentation-design" },
      { name: 'Web Design & Development', icon: Lock, href: "/webdesign-and-development" },
      { name: 'App Design & Development', icon: Lock, href: "/appdesign-and-development" },
    ],
  },

  {
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      { name: 'Agencies', icon: CircleHelp, href: "/agencies" },
      { name: 'Brands', icon: MessageCircle, href: "/brands" },
      { name: 'SMEs', icon: TriangleAlert, href: "/smes" },
    ],
    href: "/vertical",
  },

  { href: '/our-work', name: 'Our Work' },
  { href: '/about-us', name: 'About Us' },
];
