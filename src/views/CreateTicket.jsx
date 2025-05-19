import { Link } from 'react-router-dom';

import { Editor } from '@tinymce/tinymce-react';

import DashboardBanner from '@/components/DashboardBanner';
import { ChevronDown, FilePlus2, Trash2 } from 'lucide-react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateTicket = () => {
  return (
    <div className="relative w-full h-full createTicket">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="relative bg-white w-full h-full rounded-lg flex flex-col">
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="flex flex-col space-y-5 lg:space-y-7 w-full h-full relative py-5 lg:px-2">
              <form className="ticket-form ">
                <div className="ticket-formItem">
                  <label className="ticket-formLabel">Order ID</label>
                  <input
                    required
                    placeholder="Enter Order ID"
                    type="text"
                    className="ticket-formInput"
                  />
                </div>
                <div className="ticket-formItem relative">
                  <label className="ticket-formLabel">Priority</label>
                  <div className="relative flex items-center w-full">
                    <select className="ticket-select">
                      <option className="ticket-selectOpt">
                        Select Priority
                      </option>
                      <option className="ticket-selectOpt">Low</option>
                      <option className="ticket-selectOpt">Medium</option>
                      <option className="ticket-selectOpt">High</option>
                    </select>
                    <div className="absolute right-2 flex items-center">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="ticket-subject">
                  <label className="ticket-formLabel">Subject</label>
                  <input
                    required
                    placeholder="Enter Subject"
                    type="text"
                    className="ticket-formInput"
                  />
                </div>

                <div className="ticket-details">
                  <label className="ticket-formLabel">Request Details:</label>
                  <ReactQuill className="w-full min-h-full rounded-xl" />
                </div>

                <div className="ticket-fileAttach mt-20 max-lg:mt-24">
                  <button className="ticket-formLabel flexy gap-4 cursor-pointer">
                    <FilePlus2 className="w-8 h-8 text-gray-500" />
                    File Attach
                  </button>
                  <div className="flexBetween w-full md:w-1/2 text-sm">
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

                <div className="ticket-btn ">
                  <button
                    type="submit"
                    className="py-2 px-4 flexBetween gap-3 rounded-lg bg-primary text-white font-monaSemibold"
                  >
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
