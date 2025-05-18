import React from 'react';

import DashboardBanner from '@/components/DashboardBanner';

import brand from '/images/routeslogo.svg';
import { Download, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvoiceId = () => {
  return (
    <div className="relative w-full h-full ticketId">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col w-full h-full relative rounded-lg bg-white">
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="flex flex-col space-y-5 lg:space-y-7 w-full h-full relative lg:pb-5 lg:px-2">
              <div className="flex items-start flex-col space-y-5 lg:space-y-7 w-full">
                <div className="flex w-full relative lg:-left-3">
                  <img src={brand} className="img-fluid w-32 sm:w-36" alt="" />
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full">
                  <h2>Invoice Number</h2>
                  <h2>Invoice ID</h2>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full  border-y border-gray-300">
                <div className="flex items-center py-4">
                  <p className="font-monaLight">
                    Projec Desc:
                    <span className="ml-2 font-monaMedium">
                      Product Name / Package
                    </span>
                  </p>
                </div>
                <div className="flex items-center pb-4 lg:py-4">
                  <p className="font-monaLight">
                    Date:
                    <span className="ml-2 font-monaMedium">Jan 26, 2027</span>
                  </p>

                  <p className="font-monaLight ml-4">
                    Due Date:
                    <span className="ml-2 font-monaMedium">Feb 7, 2027</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full  border-b border-gray-300">
                <div className="flexStart flex-col space-y-4 py-2 lg:py-4">
                  <p className="font-monaLight">
                    From:
                    <span className="ml-2 text-xl font-monaBold">
                      Usman Ghani
                    </span>
                  </p>
                  <div className="flex flex-col space-y-1.5">
                    <span>+923179655442</span>
                    <span>usman.ghani@routes.design</span>
                  </div>
                </div>

                <div className="flexStart flex-col space-y-4 pb-4 lg:py-4">
                  <p className="font-monaLight">
                    To:
                    <span className="ml-2 text-xl font-monaBold">
                      Arsalan Paayen
                    </span>
                  </p>
                  <div className="flex lg:items-end flex-col space-y-1.5">
                    <span>+923179655442</span>
                    <span>sheikchilli@routes.design</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-5 w-full">
                <div className="flexBetween gap-3 w-full border-b border-gray-300">
                  <div className="flexStart py-4">
                    <span className="text-gray-400 uppercase font-monaSemibold">
                      job description
                    </span>
                  </div>
                  <div className="flex items-end py-4">
                    <span className="text-gray-400 uppercase font-monaSemibold">
                      price
                    </span>
                  </div>
                </div>

                {/* yeh map lloop pr run hoga */}
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 border-b border-gray-300">
                  <div className="flex lg:py-4">
                    <span className="font-monaSemibold">App Design</span>
                  </div>
                  <div className="flex pb-4 lg:py-4">
                    <span className="font-monaSemibold">$3999</span>
                  </div>
                </div>
              </div>

              <div className="flex lg:items-center lg:justify-end">
                <div className="flex flex-col space-y-4">
                  <div className="flex lg:justify-end">
                    <p className="font-monaMedium text-gray-400">
                      SubTotal:
                      <span className="ml-4 text-gray-900 font-monaBold">
                        $3900
                      </span>
                    </p>
                  </div>

                  <Link className="bg-primary flexBetween gap-3 text-white rounded-lg px-4 py-2 font-monaSemibold">
                    Download PDF
                    <FileDown className="w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceId;
