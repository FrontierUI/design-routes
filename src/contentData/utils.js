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

export const Menus = [
  { name: 'Pricing', href: '/pricing' },

  {
    // href: 'javascript:void(0)',
    name: 'Products',
    // subMenuHeading: ['', ''],
    gridCols: 2,
    subMenu: [
      { name: 'Creative Campaigns', icon: Bolt, href: '/creative-campaigns' },
      {
        name: 'Social Media Management',
        icon: Users,
        href: '/social-media-management',
      },
      {
        name: 'Brand Identity Design',
        icon: Dessert,
        href: '/brand-identity-design',
      },
      { name: 'Presentation Design', icon: Lock, href: '/presentation-design' },
      {
        name: 'Web Design & Development',
        icon: Lock,
        href: '/web-design-and-development',
      },
      {
        name: 'App Design & Development',
        icon: Lock,
        href: '/app-design-and-development',
      },
    ],
  },

  {
    // href: 'javascript:void(0)',
    name: 'Vertical',
    gridCols: 1,
    subMenu: [
      { name: 'Agencies', href: '/for-agencies', icon: CircleHelp },
      { name: 'Brands', href: '/for-brands', icon: MessageCircle },
      {
        name: 'SMEs',
        href: '/small-and-medium-sized-enterprise',
        icon: TriangleAlert,
      },
    ],
  },

  { name: 'Our Work', href: '/our-work' },
  { name: 'About Us', href: '/about-us' },
];
