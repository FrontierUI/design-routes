import { Link } from 'react-router-dom';
import { Plus, SquarePen } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { formatDate, getCookie } from '../func';

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
      token: getCookie('token'),
      limit: 10,
      offset: 0,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_tickets`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
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
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full lg:w-2/5">
              <input
                type="text"
                className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="overflow-x-hidden">
            <table className="min-w-full">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  <th className="rounded-l-lg p-4 lg:pl-8 text-left text-md font-monaMedium">
                    Ticket ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
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
                      {ticket?.ticket_id !== '' && `st-`}
                      {ticket?.ticket_id?.toString().padStart(5, '0')}
                    </td>
                    <td className="p-4 text-left">{ticket?.order_id}</td>
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
                      {ticket?.updated_at !== ''
                        ? `${formatDate(ticket?.updated_at)}`
                        : '--'}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTicket;
