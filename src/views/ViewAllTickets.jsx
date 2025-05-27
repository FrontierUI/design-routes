import { Link } from 'react-router-dom';
import { Plus, SquarePen } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';
import { useEffect, useState } from 'react';
import { formatDate, getCookie } from '../func';
import axios from 'axios';

const ViewAllTickets = () => {
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

        <div className="flex flex-col space-y-5 lg:space-y-8">
          {tickets?.map((ticket, index) => (
            <div
              className="flexy relative w-full h-full bg-white p-5 lg:p-10 rounded-lg"
              key={index}
            >
              <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full gap-6">
                <div className="flex items-center justify-between md:w-1/2 w-full">
                  <div className="flexStart flex-col space-y-1">
                    <span className="text-gray-600">Ticket:</span>
                    <span className="text-green-500">
                      {ticket?.ticket_id !== '' && `st-`}
                      {ticket?.ticket_id?.toString().padStart(5, '0')}
                    </span>
                  </div>
                  <div className="flexStart flex-col space-y-1">
                    <span className="text-gray-600">Order Id:</span>
                    <span>{ticket?.order_id}</span>
                  </div>
                  <div className="flexStart flex-col space-y-1">
                    <span className="text-gray-600">Created At</span>
                    <span>{formatDate(ticket?.created_at)}</span>
                  </div>
                  {ticket?.updated_at !== '' && (
                    <div className="flexStart flex-col space-y-1">
                      <span className="text-gray-600">Updated At</span>
                      <span>{formatDate(ticket?.updated_at)}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/dashboard/ticket-details/${btoa(
                      btoa(ticket?.ticket_id)
                    )}`}
                    className="bg-primary py-2 px-6 font-monaSemibold rounded-full text-white"
                  >
                    Open
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flexy relative w-full h-full bg-white p-5 lg:p-10 rounded-lg">
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
                  to={"/"}
                  className="bg-primary py-2 px-6 font-monaSemibold rounded-full text-white"
                >
                  Open
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewAllTickets;
