import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ChevronDown, Ellipsis, ListFilter } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';
import { formatDate, getCookie } from '@/func';

const UpdateOrderStatus = () => {
  return (
    <div className="relative w-full h-full updateOrderStatus">
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
                // onChange={(e) => setSearchText(e.target.value)}
                // value={searchText}
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
                  <th className="rounded-l-lg p-4 lg:pl-8 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    User Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Current Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Change Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="w-full whitespace-nowrap">
                <tr className="w-full text-sm transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">48745</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">UserName sdas</td>
                  <td className="p-4 text-left">
                    <button className="py-2 px-4 rounded-lg bg-blue-100 text-primary">
                      In Progress
                    </button>
                  </td>
                  <td className="p-4 text-left">
                    <div className="relative flex items-center max-w-40">
                      <select className="changeStatus-select">
                        <option className="changeStatus-select">
                          Choose Status
                        </option>
                        <option className="changeStatus-select">Pending</option>
                        <option className="changeStatus-select">
                          In Progress
                        </option>
                        <option className="changeStatus-select">
                          Delivered
                        </option>
                        <option className="changeStatus-select">Ban</option>
                      </select>
                      <div className="absolute right-1.5 flex items-center">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-left rounded-r-lg">
                    <div className="flexBetween gap-4">
                      <button className="bg-primary text-white py-2 px-4 rounded-lg font-monaMedium">
                        Update
                      </button>
                      <Ellipsis className="w-6 h-6" />
                    </div>
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

export default UpdateOrderStatus;
