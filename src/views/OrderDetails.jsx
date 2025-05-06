import React from 'react';

import DashboardBanner from '@/components/DashboardBanner';
import { Link } from 'react-router-dom';
import { ListFilter } from 'lucide-react';

const OrderDetails = () => {
  return (
    <div className="userList w-full h-full relative">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">Order Details</h2>
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
            <table className="min-w-full mx-auto">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  <th className="rounded-l-lg p-4 text-left text-md font-monaMedium">
                    Date
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Product
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Number
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Payment
                  </th>
                </tr>
              </thead>

              <tbody className="w-full whitespace-nowrap">
                <tr className="w-full text-sm">
                  <td className="rounded-l-lg p-4 text-left">2026/01/19</td>
                  <td className="p-4">Creative Campaign</td>
                  <td className="p-4">Premium</td>
                  <td className="text-left p-4 max-sm:pr-12">122994</td>
                  <td className="p-4 text-left">4</td>
                  <td className="rounded-r-lg p-4 text-left">
                    <button className="bg-red-100 rounded-lg text-red-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Suspended
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <button className="bg-yellow-100 rounded-lg text-yellow-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Pending
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="rounded-l-lg p-4 text-left">2026/01/19</td>
                  <td className="p-4 text-left">Brand Identity & Design</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">122993</td>
                  <td className="p-4 text-left">12</td>
                  <td className="rounded-r-lg p-4">
                    <button className="bg-blue-100 rounded-lg text-primary text-center py-2 px-5 pointer-events-none text-sm">
                      In progress
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4">
                    <button className="bg-green-100 rounded-lg text-green-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Paid
                    </button>
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

export default OrderDetails;
