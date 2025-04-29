import overview from '/images/icons/overview.svg';
import history from '/images/icons/history.svg';
import invoice from '/images/icons/invoice.svg';
import orderPack from '/images/icons/orderPack.svg';
import mail from '/images/icons/mail.svg';
import cog from '/images/icons/cog.svg';
import helpCent from '/images/icons/helpCent.svg';
import tracking from '/images/icons/tracking.svg';
import ticket from '/images/icons/ticket.svg';

import Dashboard from '../views/dashboard/Dashboard';

const dashSidebar = [
  {
    hrefName: 'Overview',
    icon: overview,
    href: '/dashboard',
    component: <Dashboard />,
  },
  {
    hrefName: 'View Order History',
    icon: history,
    href: '/view-order-history',
    component: <Dashboard />,
  },
  {
    hrefName: 'Order Details',
    icon: orderPack,
    href: '/order-details',
    component: <Dashboard />,
  },
  {
    hrefName: 'Download Invoice',
    icon: invoice,
    href: '/download-invoice',
    component: <Dashboard />,
  },
  {
    hrefName: 'Submit Ticket',
    icon: ticket,
    href: '/submit-ticket',
    component: <Dashboard />,
  },
  {
    hrefName: 'Track Ticket Status',
    icon: tracking,
    href: '/track-ticket-status',
    component: <Dashboard />,
  },
  {
    hrefName: 'Settings',
    icon: cog,
    href: '/settings',
    component: <Dashboard />,
  },
  {
    hrefName: 'Contacts',
    icon: mail,
    href: '/contacts',
    component: <Dashboard />,
  },
  {
    hrefName: 'Help Center',
    icon: helpCent,
    href: '/help-center',
    component: <Dashboard />,
  },
];

export default dashSidebar;
