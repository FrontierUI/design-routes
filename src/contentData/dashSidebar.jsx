// import overview from '/images/icons/overview.svg';
// import history from '/images/icons/history.svg';
// import invoice from '/images/icons/invoice.svg';
// import orderPack from '/images/icons/orderPack.svg';
// import mail from '/images/icons/mail.svg';
// import cog from '/images/icons/cog.svg';
// import helpCent from '/images/icons/helpCent.svg';
// import tracking from '/images/icons/tracking.svg';
// import ticket from '/images/icons/ticket.svg';

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
} from 'lucide-react';

import Overview from '@/views/Overview';
import UserList from '@/views/UserList';
import Invoices from '@/views/Invoices';
import SubmitTicket from '@/views/SubmitTicket';
import Settings from '../views/Settings';

const dashSidebar = [
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
    component: <UserList />,
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
    component: <UserList />,
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

export default dashSidebar;
