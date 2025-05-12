import DashboardBanner from '@/components/DashboardBanner';
import {
  Ban,
  CircleCheckBig,
  Ellipsis,
  ListFilter,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllOrders = () => {
  return (
    <div className="relative w-full h-full allOrders">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">All Orders</h2>
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
                    Date
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Full Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Payment
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="w-full whitespace-nowrap">
                <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className="p-4 text-left">Jan 2, 2027</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">Pablo Rivero Beltrán</td>
                  <td className="p-4 text-left">ORD-22945</td>
                  <td className="p-4 text-left">
                    <button className="bg-yellow-100 text-yellow-500 px-5 py-2 rounded-lg">
                      Pending
                    </button>
                  </td>
                  <td className="p-4 text-left">
                    <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
                      Paid
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <div className="flexBetween gap-4">
                      <Link className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg">
                        <span>View</span>
                        <Search className="w-5" />
                      </Link>
                      <Ellipsis className="w-6 h-6" />
                    </div>
                  </td>
                </tr>

                <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className="p-4 text-left">Jan 2, 2027</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">Pablo Rivero Beltrán</td>
                  <td className="p-4 text-left">ORD-22945</td>
                  <td className="p-4 text-left">
                    <button className="bg-blue-100 text-primary px-5 py-2 rounded-lg">
                      Progress
                    </button>
                  </td>
                  <td className="p-4 text-left">
                    <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
                      Refunded
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <div className="flexBetween gap-4">
                      <Link className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg">
                        <span>View</span>
                        <Search className="w-5" />
                      </Link>
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

export default AllOrders;
