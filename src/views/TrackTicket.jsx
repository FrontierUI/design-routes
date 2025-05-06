import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';

const TrackTicket = () => {
  return (
    <div className="relative w-full h-full overview">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
          <div className="flex items-center gap-5 w-full lg:w-1/3">
            <h2 className="text-2xl font-monaSemibold">Tickets</h2>

            <Link
              to={'javascript:void(0)'}
              className="text-lg font-monaMedium relative flexy"
            >
              Active
              <hr className="absolute w-4/5 h-px bg-primary bottom-0" />
            </Link>
          </div>
          <div className="flex items-center gap-4 w-full lg:w-2/5">
            <input
              type="text"
              className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
              placeholder="Search"
            />
            <button className="px-3 py-2 flexBetween text-white bg-primary rounded-full whitespace-nowrap">
              <span className="pr-1 lg:pr-5 text-lg">Create Ticket</span>
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-8">
          {/* ticket kaa container ka map loop yahn se start hoga */}

          <div className="flexy relative w-full h-full bg-white p-5 lg:p-10 rounded-lg">
            <div className="grid grid-cols-12 mx-auto w-full gap-5">
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">Ticket ID</span>
                <span className="font-monaLight text-green-500">
                  #TCK-13482
                </span>
              </div>
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">Subject</span>
                <span>Issue Premium Package</span>
              </div>
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">
                  Order ID (if applicable)
                </span>
                <span className="font-monaLight text-green-500">
                  #ORD-45021
                </span>
              </div>
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">Submit on</span>
                <span>Mar 15, 2025</span>
              </div>
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">Status</span>
                <button className="bg-blue-100 px-3 py-1.5 text-primary rounded-md">
                  Progress
                </button>
              </div>
              <div className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 flexStart flex-col space-y-2">
                <span className="font-monaLight text-gray-600">
                  Last Updated
                </span>
                <span>Mar 16, 2025</span>
              </div>
            </div>
          </div>

          {/* ticket kaa container ka map loop yahn se end hoga */}
        </div>
      </div>
    </div>
  );
};

export default TrackTicket;
