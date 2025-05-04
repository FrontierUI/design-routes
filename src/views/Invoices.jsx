import React from 'react';

import { Link } from 'react-router-dom';

import DashboardBanner from '@/components/DashboardBanner';
import { ChevronDown, CircleArrowDown } from 'lucide-react';

const Invoices = () => {
  return (
    <div className="invoices relative w-full h-full">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-2 w-full h-full">
          <h2 className="font-monaSemibold text-2xl">Invoice</h2>
          <div className="flex items-center gap-4 w-full lg:w-1/3">
            <div className="relative flex items-center w-full">
              <select className="invoice-select">
                <option className="invoice-selectOpt">Select Product</option>
                <option className="invoice-selectOpt" value="creativeCampaign">
                  Creative Campaign
                </option>
                <option className="invoice-selectOpt" value="brandIdentity">
                  Brand Identity & Design
                </option>
                <option className="invoice-selectOpt" value="socialMM">
                  Social Media Management
                </option>
                <option className="invoice-selectOpt" value="webDD">
                  Web Design & Development
                </option>
                <option className="invoice-selectOpt" value="appDD">
                  App Design & Development
                </option>
                <option
                  className="invoice-selectOpt"
                  value="presentationDesign"
                >
                  Presentation Design
                </option>
              </select>
              <div className="absolute right-1.5 flex items-center">
                <ChevronDown className="w-6 h-6" />
              </div>
            </div>
            <div className="relative flex items-center w-full">
              <select className="invoice-select">
                <option className="invoice-selectOpt">Select Status</option>
                <option className="invoice-selectOpt" value="approved">
                  Approved
                </option>
                <option className="invoice-selectOpt" value="pending">
                  Pending
                </option>
                <option className="invoice-selectOpt" value="overdue">
                  Overdue
                </option>
              </select>
              <div className="absolute right-1.5 flex items-center">
                <ChevronDown className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 lg:p-6 w-full">
          <div className="w-full h-full relative flex flex-wrap items-start justify-start md:justify-between gap-4">
            <div className="flexStart flex-col space-y-2">
              <span className="font-monaLight text-sm">Invoice ID</span>
              <span className="font-monaLight text-sm text-green-500">
                579975
              </span>
            </div>
            <div className="flexStart flex-col space-y-2">
              <span className="font-monaLight text-sm">Invoice Date</span>
              <span className="font-monaLight text-sm">
                UTC 2024-12-26, 21:05
              </span>
            </div>
            <div className="flexStart flex-col space-y-2">
              <span className="font-monaLight text-sm">Due Date</span>
              <span className="font-monaLight text-sm">
                UTC 2024-12-27, 21:05
              </span>
            </div>
            <div className="flexStart flex-col space-y-2">
              <span className="font-monaLight text-sm">Status</span>
              <button className="px-4 py-2 rounded-lg text-sm pointer-events-none bg-red-100 text-red-500">
                Overdue
              </button>
            </div>

            <div className="flexStart flex-col">
              <div className="flexStart flex-col space-y-2">
                <span className="font-monaLight text-sm">Total</span>
                <span className="font-monaMedium text-md">$6999</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary text-white py-2 px-4 mt-10">
                <span>PDF</span>
                <CircleArrowDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
