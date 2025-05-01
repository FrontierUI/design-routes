import { Link } from 'react-router-dom';
import DashboardBanner from '@/components/DashboardBanner';
import { FileDown, Pencil } from 'lucide-react';

const Overview = () => {
  return (
    <div className="relative w-full h-full overview">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="grid grid-cols-12 grid-flow-dense gap-6 w-full h-full  mx-auto">
          <div className="md:row-span-3 col-span-12 md:col-span-6 w-full bg-white relative rounded-lg">
            <div className="sm:p-5 p-3 flex flex-col relative w-full">
              <div className="relative flex items-start justify-between w-full">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/icons/ProfAvatar.svg"
                    className="img-fluid w-12"
                    alt=""
                  />
                  <div className="flex flex-col leading-none">
                    <h2 className="font-monaBold text-2xl">Jane Name</h2>
                    <span className="font-monaLight text-md">
                      jessica.hanson@example.com
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <Link
                    to={'/user-profile'}
                    className="flexy p-3 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                  >
                    <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between w-full gap-5 relative mt-6 md:mt-12">
                <div className="flex rounded-lg border border-dashed border-gray-800 p-3 w-full">
                  <div className="flex flex-col w-full space-y-4 text-sm">
                    <div className="flex items-center justify-between gap-5">
                      <p className="">Account Status</p>
                      <span>Active</span>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <p className="">Account Status</p>
                      <span className="text-red-600">Active</span>
                    </div>
                  </div>
                </div>
                <div className="flex rounded-lg border border-dashed border-gray-800 p-3 w-full">
                  <div className="flex flex-col w-full space-y-4 text-sm">
                    <div className="flex items-center justify-between gap-5">
                      <p className="">Account Status</p>
                      <span>Active</span>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <p className="">Account Status</p>
                      <span className="text-green-500">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
            <Link
              to={'javascript:void(0)'}
              className="justStartCenter gap-3 p-3"
            >
              <FileDown className="w-7 h-7" />
              <span>Invoice</span>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
            <Link
              to={'javascript:void(0)'}
              className="justStartCenter gap-3 p-3"
            >
              <FileDown className="w-7 h-7" />
              <span>Invoice</span>
            </Link>
          </div>{' '}
          <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
            <Link
              to={'javascript:void(0)'}
              className="justStartCenter gap-3 p-3"
            >
              <FileDown className="w-7 h-7" />
              <span>Invoice</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          <div className="w-full relative bg-white rounded-lg p-5"></div>
          <div className="w-full relative bg-white rounded-lg p-5"></div>
          <div className="w-full relative bg-white rounded-lg p-5"></div>
          <div className="w-full relative bg-white rounded-lg p-5"></div>
          <div className="w-full relative bg-white rounded-lg p-5"></div>
          <div className="w-full relative bg-white rounded-lg p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
