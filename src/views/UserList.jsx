import React from 'react';

import { Link } from 'react-router-dom';

import DashboardBanner from '@/components/DashboardBanner';
import { FileDown, Filter, Pencil } from 'lucide-react';

const UserList = () => {
  return (
    <div className="userList w-full h-full relative">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-6 w-full h-full">
          <h2 className="font-monaBold text-2xl">Orders</h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              className="w-2/3 py-2 pl-3 pr-2 lg:w-1/3 placeholder:text-gray-400 text-sm"
              placeholder="Search"
            />
            <div className="flex items-center gap-2">
              <p className="font-monaSemibold text-xl">Filter</p>
              <div className="flexy">
                <Filter className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
