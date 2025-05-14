import {
  LayoutDashboard,
  History,
  Package,
  Ticket,
  FileDown,
  LifeBuoy,
  Settings as Cogg,
  ClockFading,
  Mail,
  ReceiptText,
  CircleUserRound,
  Ban,
  MessageSquareDot,
  FileText,
  CircleFadingArrowUp,
  ArrowRightLeft,
} from 'lucide-react';

import { checkRole, getCookie } from '@/func';

import Overview from '@/views/Overview';
import UserList from '@/views/UserList';
import Invoices from '@/views/Invoices';
import SubmitTicket from '@/views/SubmitTicket';
import Settings from '@/views/Settings';
import OrderDetails from '@/views/OrderDetails';
import TrackTicket from '@/views/TrackTicket';

import UserDetails from '@/views/UserDetails';
import AllOrders from '@/views/AllOrders';
import OrderHistory from '@/views/OrderHistory';
import UpdateOrderStatus from '@/views/UpdateOrderStatus';

var role = '';
if (getCookie('token') !== undefined && getCookie('token') !== null) {
  role = checkRole(getCookie('token'));
  console.log('role', role);
}

export const userDashSidebar = [
  {
    name: 'Overview',
    icon: <LayoutDashboard className="w-6 h-6" />,
    path: 'overview',
    component: <Overview />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'View Order History',
    icon: <History className="w-6 h-6" />,
    path: 'view-order-history',
    component: <OrderDetails />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Order Details',
    icon: <Package className="w-6 h-6" />,
    path: 'order-details',
    component: <UserList />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Download Invoice',
    icon: <FileDown className="w-6 h-6" />,
    path: 'invoice',
    component: <Invoices />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Submit Ticket',
    icon: <Ticket className="w-6 h-6" />,
    path: 'submit-ticket',
    component: <SubmitTicket />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Track Ticket Status',
    icon: <ClockFading />,
    path: 'track-ticket-status',
    component: <TrackTicket />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Settings',
    icon: <Cogg className="w-6 h-6" />,
    path: 'settings',
    component: <Settings />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Contacts',
    icon: <Mail className="w-6 h-6" />,
    path: 'contacts',
    component: <UserList />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Help Center',
    icon: <LifeBuoy className="w-6 h-6" />,
    path: 'help-center',
    component: <UserList />,
    layout: '/dashboard',
    direct: true,
  },
];

export const adminDashSidebar = [
  {
    name: 'Overview',
    icon: <LayoutDashboard className="w-6 h-6" />,
    path: 'overview',
    component: <Overview />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'User List',
    icon: <ReceiptText className="w-6 h-6" />,
    path: 'users-list',
    component: <UserList />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'View User Details',
    icon: <CircleUserRound className="w-6 h-6" />,
    path: 'view-user-details',
    component: <UserDetails />,
    layout: '/dashboard',
    direct: false,
  },
  // {
  //   name: 'Ban Or Suspend Users',
  //   icon: <Ban className="w-6 h-6" />,
  //   path: 'ban-or-suspend-users',
  //   component: <UserDetails />,
  //   layout: '/dashboard',
  // },
  {
    name: 'View All Orders',
    icon: <Package className="w-6 h-6" />,
    path: 'view-all-orders',
    component: <AllOrders />,
    layout: '/dashboard',
  },
  {
    name: 'User Order Details',
    icon: <FileText className="w-6 h-6" />,
    path: 'user-order-details',
    component: <OrderHistory />,
    layout: '/dashboard',
    direct: false,
  },
  {
    name: 'Update Order Status',
    icon: <CircleFadingArrowUp className="w-6 h-6" />,
    path: 'update-order-status',
    component: <UpdateOrderStatus />,
    layout: '/dashboard',
    direct: false,
  },
  {
    name: 'View All Tickets',
    icon: <Package className="w-6 h-6" />,
    path: 'view-all-tickets',
    component: <UserDetails />,
    layout: '/dashboard',
    direct: true,
  },
  {
    name: 'Update Ticket Status',
    icon: <History className="w-6 h-6" />,
    path: 'update-ticket-status',
    component: <UserDetails />,
    layout: '/dashboard',
    direct: false,
  },
  {
    name: 'View Transactions',
    icon: <ArrowRightLeft className="w-6 h-6" />,
    path: 'view-transactions',
    component: <UserDetails />,
    layout: '/dashboard',
    direct: true,
  },
];

export const dashSidebar =
  role === 'admin' ? [...adminDashSidebar] : [...userDashSidebar];
