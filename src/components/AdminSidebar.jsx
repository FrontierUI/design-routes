import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { History, Home, NotepadText, Package, Ticket } from 'lucide-react';

import brand from '/images/routeslogo.svg';

const navLinks = [
  { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
  {
    name: 'View Order History',
    icon: <History size={20} />,
    path: '/view-order-history',
  },
  {
    name: 'Order Details',
    icon: <Package size={20} />,
    path: '/order-details',
  },

  {
    name: 'Submit Ticket',
    icon: <Ticket size={20} />,
    path: '/order-details',
  },
  {
    name: 'Download Invoice',
    icon: <NotepadText size={20} />,
    path: '/order-details',
  },
  // Add more nav links as needed
];

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      animate={{ width: isOpen ? 256 : 70 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen shadow-lg flex flex-col"
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">{isOpen ? 'Materio' : 'M'}</span>
        <input
          type="radio"
          onClick={toggleSidebar}
          className="cursor-pointer hidden md:block"
        />
      </div>

      <nav className="flex-1 mt-4">
        {navLinks.map(({ name, path, icon }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `group flex items-center gap-4 p-3 transition-all duration-300 ease-in-out hover:bg-primary/10 relative ${
                isActive ? 'text-white font-semibold' : 'text-gray-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-0 top-0 h-full w-[3px] bg-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="min-w-[20px]">{icon}</div>
                {isOpen && <span className="whitespace-nowrap">{name}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default AdminSidebar;
