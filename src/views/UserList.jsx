import React from 'react';

import { Link } from 'react-router-dom';

import DashboardBanner from '@/components/DashboardBanner';
import { Ban, CircleCheckBig, ListFilter } from 'lucide-react';

const UserList = () => {
  return (
    <div className="userList w-full h-full relative">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">User List</h2>
            <div className="flex items-center gap-4 w-full lg:w-1/3">
              <input
                type="text"
                className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
                placeholder="Search"
              />
              <div className="flex items-center gap-2">
                <p className="font-monaMedium text-xl">Filter</p>
                <Link to={'javascript:void(0)'} className="flexy">
                  <ListFilter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  <th className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    User ID
                  </th>
                  <th className="p-4 lg:pl-7 text-left text-md font-monaMedium">
                    Full Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Email Address
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Join At
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="w-full whitespace-nowrap">
                <tr className="text-sm w-full transitAll hover:bg-teal-100">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className="p-4 text-left">122994</td>
                  <td className="p-4 max-sm:pr-10">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/icons/ProfAvatar.svg"
                        className="w-10 h-10 img-fluid"
                        alt=""
                      />
                      <span className="text-left">Pablo Rivero Beltrán</span>
                    </div>
                  </td>
                  <td className="text-left p-4 max-sm:pr-12">
                    johnwick2025@example.com
                  </td>
                  <td className="p-4 text-left">26/02/2026</td>
                  <td className="rounded-r-lg p-4 relative flex">
                    <Link
                      to={'javascript:void(0)'}
                      className="bg-red-100 rounded-lg flexBetween text-red-500 text-center py-2 px-5 gap-4 w-2/3 pointer-events-none text-sm"
                    >
                      <span>Ban</span>
                      <Ban className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>

                <tr className="text-sm w-full transitAll hover:bg-teal-100">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className=" p-4 text-left">122994</td>
                  <td className="p-4 max-sm:pr-12">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/icons/ProfAvatar.svg"
                        className="w-10 h-10 img-fluid"
                        alt=""
                      />
                      <span className="text-left">Pablo Rivero Beltrán</span>
                    </div>
                  </td>
                  <td className="text-left p-4 ">johnwick2025@example.com</td>
                  <td className="p-4 text-left">26/02/2026</td>
                  <td className="rounded-r-lg p-4 relative flex">
                    <Link
                      to={'javascript:void(0)'}
                      className="bg-primary text-white rounded-lg flexBetween  text-center py-2 px-5 gap-4 w-2/3 pointer-events-none text-sm font-monaMedium"
                    >
                      <span>Active</span>
                      <CircleCheckBig className="w-5 h-5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
