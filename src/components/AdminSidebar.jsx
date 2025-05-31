import { Link } from 'react-router-dom';
import { CircleX } from 'lucide-react';

import { dashSidebar } from '@/contentData/dashSidebar';
import Links from './Links';

import brand from '/images/routeslogo.svg';

const AdminSidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-300 ease-in-out fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <CircleX />
      </span>

      <div className={`mx-auto mt-8 flex items-center`}>
        <Link to={'/'} className="">
          <img src={brand} className="img-fluid w-36" alt="" />
        </Link>
      </div>

      <div className="mt-[20px] mb-5 h-px bg-gray-300" />

      <ul className="mb-auto pt-1 flex flex-col space-y-2">
        <Links dashSidebar={dashSidebar} />
      </ul>
    </div>
  );
};

export default AdminSidebar;
