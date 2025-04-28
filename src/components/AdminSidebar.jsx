// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

// import { History, Home, NotepadText, Package, Ticket } from 'lucide-react';

import routes from '../contentData/routes';
import Links from './Links';

import { CircleX } from 'lucide-react';
import brand from '/images/routeslogo.svg';
import { Link } from 'react-router-dom';

const AdminSidebar = ({ open, onClose }) => {
  // const [isOpen, setIsOpen] = useState(true);

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

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <Link to={'javascript:void(0)'} className="">
          <img src={brand} className="img-fluid w-36" alt="" />
        </Link>
      </div>

      <div className="mt-[58px] mb-7 h-px bg-gray-300" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* <div className="flex justify-center"><SidebarCard /></div> */}
    </div>
  );
};

export default AdminSidebar;
