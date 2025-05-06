import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';

const SubmitTicket = () => {
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
            <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full gap-6">
              <div className="flex items-center justify-between md:w-1/3 w-full">
                <div className="flexStart flex-col space-y-1">
                  <span className="text-gray-600">Ticket:</span>
                  <span className="text-green-500">7812115</span>
                </div>
                <div className="flexStart flex-col space-y-1">
                  <span className="text-gray-600">Date</span>
                  <span>2027/04/25</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to={'/'}
                  className="bg-primary py-2 px-6 font-monaSemibold rounded-full text-white"
                >
                  Open
                </Link>
                <Link
                  to={'/'}
                  className="bg-lightPrimary py-2 px-6 font-monaSemibold rounded-full"
                >
                  Open
                </Link>
              </div>
            </div>
          </div>

          {/* ticket kaa container ka map loop yahn se end hoga */}
        </div>
      </div>
    </div>
  );
};

export default SubmitTicket;
