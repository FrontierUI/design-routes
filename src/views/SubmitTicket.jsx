import { Link } from "react-router-dom";
import { Plus, SquarePen } from "lucide-react";

import DashboardBanner from "@/components/DashboardBanner";
import axios from "axios";
import { useEffect, useState } from "react";

import { formatDate, getCookie } from "../func";

const SubmitTicket = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();

    return () => {
      setTickets([]);
    };
  }, []);

  const fetchTickets = () => {
    const json = JSON.stringify({
      token: getCookie("token"),
      limit: 10,
      offset: 0,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_tickets`,
        JSON.stringify({ params: json }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.success === "true") {
          // console.log(response.data.tickets);
          setTickets(response.data.tickets);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div className="relative w-full h-full viewAllTickets">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <div className="flex items-center gap-5 w-full lg:w-1/3">
              <h2 className="text-2xl font-monaSemibold">Tickets</h2>

              {/* <Link
              to={'javascript:void(0)'}
              className="text-lg font-monaMedium relative flexy"
            >
              Active
              <hr className="absolute w-4/5 h-px bg-primary bottom-0" />
            </Link> */}
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full lg:w-2/5">
              <input
                type="text"
                className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
                placeholder="Search"
              />
              {/* <Link
                to={'/dashboard/create-ticket'}
                className="px-4 py-2 flexBetween text-white bg-primary rounded-full whitespace-nowrap max-lg:w-2/3"
              >
                <span className="pr-1 lg:pr-5 text-lg">Create Ticket</span>
                <Plus className="w-6 h-6" />
              </Link> */}
            </div>
          </div>

          <div className="overflow-x-hidden">
            <table className="min-w-full">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  <th className="rounded-l-lg p-4 lg:pl-8 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Date
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Updated
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="w-full whitespace-nowrap">
                {tickets?.map((ticket, index) => (
                  <tr
                    className="w-full text-sm transitAll hover:bg-[#e3e2ff] rounded-lg"
                    key={index}
                  >
                    <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                      {ticket?.ticket_id !== "" && `st-`}
                      {ticket?.ticket_id?.toString().padStart(5, "0")}
                    </td>
                    <td className="p-4 text-left">Standard</td>
                    <td className="p-4 text-left">
                      <button className="py-2 px-4 rounded-lg bg-blue-100 text-primary">
                        In Progress
                      </button>
                    </td>
                    <td className="p-4 text-left">
                      {formatDate(ticket?.created_at)}
                    </td>
                    <td className="p-4 text-left">
                      {ticket?.updated_at !== ""
                        ? `${formatDate(ticket?.updated_at)}`
                        : "--"}
                    </td>
                    <td className="rounded-r-lg p-4 text-left">
                      <Link
                        to={`/dashboard/ticket-details/${btoa(
                          btoa(ticket?.ticket_id)
                        )}`}
                        className="flexBetween rounded-lg gap-2 px-4 py-2 bg-primary text-white"
                      >
                        Edit
                        <SquarePen className="w-6" />
                      </Link>
                    </td>
                  </tr>
                ))}
                {/* <tr className="w-full text-sm transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">78945</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">
                    <button className="py-2 px-4 rounded-lg bg-blue-100 text-primary">
                      In Progress
                    </button>
                  </td>
                  <td className="p-4 text-left">Jan 25, 2026</td>
                  <td className="p-4 text-left">Feb 4, 2026</td>
                  <td className="rounded-r-lg p-4 text-left">
                    <Link
                      to={'/dashboard/ticketId'}
                      className="flexBetween rounded-lg gap-2 px-4 py-2 bg-primary text-white"
                    >
                      Edit
                      <SquarePen className="w-6" />
                    </Link>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-5 lg:space-y-8">
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
        </div> */}
      </div>
    </div>
  );
};

export default SubmitTicket;
