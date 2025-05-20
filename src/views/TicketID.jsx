import React from 'react';

import DashboardBanner from '@/components/DashboardBanner';
import {
  ChevronDown,
  Edit,
  FilePlus2,
  Send,
  SendHorizontal,
  Trash2,
} from 'lucide-react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TicketID = () => {
  return (
    <div className="relative w-full h-full ticketId">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="relative bg-white rounded-lg w-full">
          <div className="w-full p-5">
            <div className="flexStart flex-col space-y-2">
              <h2 className="text-lg font-monaSemibold">Order ID</h2>
              <span>Subject content</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white w-full h-full rounded-lg flex flex-col">
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="relative space-y-5 lg:space-y-7 w-full h-full py-5 lg:px-2">
              <div className="flex flex-wrap w-full gap-5">
                <div className="max-w-full w-full lapy:w-[55%] rounded-lg">
                  <div className="border-2 border-dashed border-gray-400 rounded-lg overflow-hidden shadow w-full lg:min-h-[560px]">
                    <div className="p-5 pt-8 flex flex-wrap w-full">
                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Priority
                          </h3>
                          <Edit className="text-gray-600" />
                        </div>
                        {/* yeh admin pr ayega Edit icon pr clicked hoga phr  select dropdown open hoga or user edit kaa icon hide hoga */}
                        <div className="relative flex items-center w-40">
                          <select className="ticket-select !text-sm">
                            <option className="ticket-selectOpt !text-sm">
                              Select Priority
                            </option>
                            <option className="ticket-selectOpt">Low</option>
                          </select>
                          <div className="absolute right-2 flex items-center">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        {/* yeh admin pr ayega Edit icon pr clicked hoga phr  select dropdown open hoga or user edit kaa icon hide hoga */}
                        <div className="flex pt-2">
                          <span>Urgent</span>
                        </div>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">Status</h3>
                          <Edit className="text-gray-600" />
                        </div>
                        <div className="relative flex items-center w-40">
                          <select className="ticket-select !text-sm">
                            <option className="ticket-selectOpt !text-sm">
                              Select Priority
                            </option>
                            <option className="ticket-selectOpt">Low</option>
                          </select>
                          <div className="absolute right-2 flex items-center">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="flex pt-2">
                          <span className="py-2 px-4 bg-yellow-100 text-yellow-500 rounded-lg">
                            Pending
                          </span>
                        </div>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Created At
                          </h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>Feb March, 2026</span>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">Subject</h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>
                          use these rounded icons on my website in social links
                          container
                        </span>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Request Details:
                          </h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>
                          use these rounded icons on my website in social links
                          container
                        </span>
                      </div>

                      <div className="relative flexStart flex-col space-y-3 w-full pb-8">
                        <button className="ticket-formLabel flexy gap-3 cursor-pointer">
                          <FilePlus2 className="w-8 h-8 text-gray-500" />
                          File Attach
                        </button>
                        <div className="flexBetween flex-wrap gap-3 w-full text-sm">
                          <div className="flex-1 ">
                            filename.psd
                            <span className="pl-2 text-gray-500 text-xs">
                              (204.54 KB)
                            </span>
                          </div>
                          <button className="py-2 px-4 flexy gap-3 bg-red-100 text-red-500 rounded-lg">
                            Remove
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="relative w-full pb-4">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-xl font-monaSemibold">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-full w-full lapy:w-[43%] rounded-lg">
                  <div className="border-2 border-dashed border-gray-400 rounded-lg overflow-hidden shadow w-full lg:min-h-[560px]">
                    <div className="flexStart flex-col space-y-10 p-5 pt-8 w-full">
                      <div className="flexStart flex-col space-y-1">
                        <h2 className="text-xl font-monaSemibold">
                          Discussion
                        </h2>
                        <p className="text-sm">
                          Comment histories for this ticket will be available
                          here.
                        </p>
                      </div>

                      <div className="flexStart flex-col space-y-8 w-full">
                        <div className="flex gap-3 w-full">
                          <div className="flex avatar">
                            <img
                              src="/images/icons/ProfAvatar.svg"
                              className="img-fluid w-12"
                              alt=""
                            />
                          </div>
                          <div className="flexStart flex-col space-y-1.5">
                            <h3 className="text-lg font-monaSemibold">
                              Ustaad
                            </h3>
                            <span className="py-2 px-3 rounded-tr-lg rounded-b-lg bg-blue-200">
                              paayen ye username response
                            </span>
                            <span className="text-xs">time spam 4:10pm</span>
                          </div>
                        </div>
                        <div className="flex lg:items-end lg:justify-end gap-3 w-full">
                          <div className="flex lg:items-end flex-col space-y-1.5">
                            <span className="py-2  px-3 rounded-t-lg rounded-bl-lg bg-blue-200">
                              paayen ye admin response
                            </span>
                            <span className="text-xs">time spam 4:10pm</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative flex items-center gap-2 pb-8 w-full h-full">
                        <ReactQuill
                          theme="snow"
                          className="max-sm:w-10/12 w-[95%] lapy:w-[88%] sm:min-h-24 sm:h-24"
                        />

                        <div className="absolute bottom-8 sm:-bottom-1 right-0">
                          <div className="flexy bg-primary text-white rounded-full p-2">
                            <SendHorizontal className="w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketID;
