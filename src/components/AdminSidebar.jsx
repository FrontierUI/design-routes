// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

// import { History, Home, NotepadText, Package, Ticket } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';
import Links from './Links';

import { CircleX } from 'lucide-react';
import brand from '/images/routeslogo.svg';

import DashSidebar from '@/contentData/dashSidebar';
// import DashIcon from './DashIcon';
// import DashIcon from './DashIcon';

const AdminSidebar = ({ open, onClose }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // let location = useLocation();

  // const activeRoute = (routeName) => {
  //   return location.pathname.includes(routeName);
  // };

  return (
    <div
      className={`sm:none duration-300 ease-in-out linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96'
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <CircleX />
      </span>

      <div className={`mx-auto mt-8 flex items-center`}>
        <Link to={'javascript:void(0)'} className="">
          <img src={brand} className="img-fluid w-36" alt="" />
        </Link>
      </div>

      <div className="mt-[28px] mb-7 h-px bg-gray-300" />

      <ul className="mb-auto pt-1 flex flex-col space-y-2 lg:space-y-4">
        <Links dashSidebar={DashSidebar} />
      </ul>

      {/* {dashboardSidebar.map((linky) => (
          <Link key={linky.hrefName} className="relative w-full cursor-pointer">
            <li className="flex items-center cursor-pointer px-8">
              <img src={linky.icon} className="w-6 h-6" alt="" />
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(linky.href) === true
                    ? 'font-bold text-gray-800'
                    : 'font-medium text-gray-900'
                }`}
              >
                {linky.hrefName}
              </p>
            </li>
            {activeRoute(linky.href) ? (
              <div className="absolute right-0 top-px h-8 w-1 rounded-lg bg-primary" />
            ) : null}
          </Link>
        ))} */}

      {/* <div className="flex justify-center"><SidebarCard /></div> */}
    </div>
  );
};

export default AdminSidebar;
