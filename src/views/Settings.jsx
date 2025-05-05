import { Pencil } from 'lucide-react';

const Settings = () => {
  return (
    <div className="settings relative w-full h-full">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10 bg-white px-2.5 py-5 lg:pb-12 lg:px-10 rounded-lg">
        <h1 className="font-monaBold text-3xl">Profile</h1>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flex items-center justify-start md:justify-between gap-5 w-full">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/icons/ProfAvatar.svg"
                className="img-fluid w-12"
                alt=""
              />
              <div className="flex flex-col leading-none">
                <h2 className="font-monaBold text-xl">Jane Name</h2>
                <span className="font-monaLight text-sm">
                  jessica.hanson@example.com
                </span>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <button className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full">
                <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flexStart flex-col space-y-5">
            <div className="flex items-center justify-start md:justify-between gap-5 w-full">
              <h3 className="text-md lg:text-xl font-monaSemibold whitespace-nowrap">
                Personal Information
              </h3>
              <div className="flex items-start justify-end w-full">
                <button className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full">
                  <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-2/5">
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">Full Name</span>
                  <span className="font-monaMedium">Jane Cooper</span>
                </div>
                <div className="flex flex-col space-y-1 md:pr-4">
                  <span className="text-sm text-gray-500">Company Name</span>
                  <span className="font-monaMedium">Jane Cooper</span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flexStart flex-col space-y-1">
                  <span className="text-sm text-gray-500">Email Address</span>
                  <span className="font-monaMedium">
                    johnwick123@hotmall.com
                  </span>
                </div>
                <div className="flexStart flex-col space-y-1">
                  <span className="text-sm text-gray-500">Phone</span>
                  <span className="font-monaMedium">+09 345 345 353</span>
                </div>
              </div>
              <div className="flexStart flex-col space-y-1">
                <span className="text-sm text-gray-500">Bio</span>
                <span className="font-monaMedium">Team Manager</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flexStart flex-col space-y-5">
            <div className="flex items-center justify-start md:justify-between gap-5 w-full">
              <h3 className="text-md lg:text-xl font-monaSemibold whitespace-nowrap">
                Address
              </h3>
              <div className="flex items-start justify-end w-full">
                <button className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full">
                  <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-2/5">
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">Country</span>
                  <span className="font-monaMedium">United Kingdom</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">City / State</span>
                  <span className="font-monaMedium">Leeds, East London</span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flexStart flex-col space-y-1">
                  <span className="text-sm text-gray-500">Postal Code</span>
                  <span className="font-monaMedium">ERT 2354</span>
                </div>
                <div className="flexStart flex-col space-y-1 md:pr-8">
                  <span className="text-sm text-gray-500">Company Postion</span>
                  <span className="font-monaMedium">Team Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
