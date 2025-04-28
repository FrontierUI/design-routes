// import React from 'react';

import {
  History,
  Home,
  NotepadText,
  Package,
  Ticket,
  // ClockFading,
} from 'lucide-react';

import Dashboard from '../views/dashboard/Dashboard';

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
    name: 'Dashboard',
    icon: <Home className="w-6 h-6" />,
    layout: '/dashboard',
    path: 'dashboard',
    component: <Dashboard />,
  },
  {
    name: 'Dashboard',
    icon: <Home className="w-6 h-6" />,
    layout: '/order-history',
    path: 'dashboard',
    component: <Dashboard />,
  },
];

export default routes;
