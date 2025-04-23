// import React from 'react';

import {
  History,
  Home,
  NotepadText,
  Package,
  Ticket,
  // ClockFading,
} from 'lucide-react';

// Admin Imports
// import MainDashboard from 'views/admin/default';
// import NFTMarketplace from 'views/admin/marketplace';
// import Profile from 'views/admin/profile';
// import DataTables from 'views/admin/tables';
// import RTLDefault from 'views/rtl/default';

// Auth Imports
// import SignIn from 'views/auth/SignIn';

// Icon Imports
// import {
//   MdHome,
//   MdOutlineShoppingCart,
//   MdBarChart,
//   MdPerson,
//   MdLock,
// } from 'react-icons/md';

const routes = [
  {
    name: 'Main Dashboard',
    // layout: '/admin',
    // path: 'default',
    icon: Home,
    // component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    // layout: '/admin',
    // path: 'nft-marketplace',
    icon: History,
    // component: <NFTMarketplace />,
    // secondary: true,
  },
  {
    name: 'Data Tables',
    // layout: '/admin',
    icon: NotepadText,
    // path: 'data-tables',
    // component: <DataTables />,
  },
  {
    name: 'Profile',
    // layout: '/admin',
    // path: 'profile',
    icon: Package,
    // component: <Profile />,
  },
  {
    name: 'Sign In',
    // layout: '/auth',
    // path: 'sign-in',
    icon: Ticket,
    // component: <SignIn />,
  },
  // {},
  // layout: '/rtl',
  // component: <RTLDefault />,
  // name: 'RTL Admin',
  // path: 'rtl',
  // icon: ClockFading,
];

export default routes;
