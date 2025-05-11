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

import Overview from '@/views/Overview';
import UserList from '@/views/UserList';
import Invoices from '@/views/Invoices';
import SubmitTicket from '@/views/SubmitTicket';
import Settings from '@/views/Settings';
import OrderDetails from '@/views/OrderDetails';
import TrackTicket from '@/views/TrackTicket';

import { checkRole, getCookie } from '@/func';
import UserDetails from '../views/UserDetails';

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
  },
  {
    name: 'View Order History',
    icon: <History className="w-6 h-6" />,
    path: 'view-order-history',
    component: <OrderDetails />,
    layout: '/dashboard',
  },
  {
    name: 'Order Details',
    icon: <Package className="w-6 h-6" />,
    path: 'order-details',
    component: <UserList />,
    layout: '/dashboard',
  },
  {
    name: 'Download Invoice',
    icon: <FileDown className="w-6 h-6" />,
    path: 'invoice',
    component: <Invoices />,
    layout: '/dashboard',
  },
  {
    name: 'Submit Ticket',
    icon: <Ticket className="w-6 h-6" />,
    path: 'submit-ticket',
    component: <SubmitTicket />,
    layout: '/dashboard',
  },
  {
    name: 'Track Ticket Status',
    icon: <ClockFading />,
    path: 'track-ticket-status',
    component: <TrackTicket />,
    layout: '/dashboard',
  },
  {
    name: 'Settings',
    icon: <Cogg className="w-6 h-6" />,
    path: 'settings',
    component: <Settings />,
    layout: '/dashboard',
  },
  {
    name: 'Contacts',
    icon: <Mail className="w-6 h-6" />,
    path: 'contacts',
    component: <UserList />,
    layout: '/dashboard',
  },
  {
    name: 'Help Center',
    icon: <LifeBuoy className="w-6 h-6" />,
    path: 'help-center',
    component: <UserList />,
    layout: '/dashboard',
  },
];

export const adminDashSidebar = [
  {
    name: 'Overview',
    icon: <LayoutDashboard className="w-6 h-6" />,
    path: 'overview',
    component: <Overview />,
    layout: '/dashboard',
  },
  {
    name: 'User List',
    icon: <ReceiptText className="w-6 h-6" />,
    path: 'users-list',
    component: <UserList />,
    layout: '/dashboard',
  },
  {
    name: 'View User Details',
    icon: <CircleUserRound className="w-6 h-6" />,
    path: 'view-user-details',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'Ban Or Suspend Users',
    icon: <Ban className="w-6 h-6" />,
    path: 'ban-or-suspend-users',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'View All Users',
    icon: <Package className="w-6 h-6" />,
    path: 'view-all-users',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'Users Order Details',
    icon: <FileText className="w-6 h-6" />,
    path: 'user-order-details',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'Update Order Status',
    icon: <CircleFadingArrowUp className="w-6 h-6" />,
    path: 'update-order-status',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'View All Tickets',
    icon: <Package className="w-6 h-6" />,
    path: 'view-all-tickets',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'Update Ticket Status',
    icon: <History className="w-6 h-6" />,
    path: 'update-ticket-status',
    component: <UserDetails />,
    layout: '/dashboard',
  },
  {
    name: 'View Transactions',
    icon: <ArrowRightLeft className="w-6 h-6" />,
    path: 'view-transactions',
    component: <UserDetails />,
    layout: '/dashboard',
  },
];

export const dashSidebar =
  role === 'admin' ? [...adminDashSidebar] : [...userDashSidebar];
