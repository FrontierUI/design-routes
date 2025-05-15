import React from 'react';

import { History, MoveUp, ScrollText, Ticket, TicketCheck } from 'lucide-react';

const UsersOverviewDetails = ({ UserStatistics }) => {
  // console.log("UserStatistics",UserStatistics);
  const overviewDetails = [
    {
      icon: <History className="w-7 h-7" />,
      name: 'Order History',
      orders: UserStatistics?.total_orders,
      detaling: 'Previous Order History',
    },
    {
      icon: <TicketCheck className="w-7 h-7" />,
      name: 'Ticket History',
      orders: UserStatistics?.total_tickets,
      detaling: 'Pending Tickets',
    },
    {
      icon: <ScrollText className="w-7 h-7" />,
      name: 'Orders History',
      orders: UserStatistics?.total_pending,
      detaling: 'Pending Orders',
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 w-full mx-auto">
      {overviewDetails.map((detal) => (
        <div
          key={detal.name}
          className="col-span-12 sm:col-span-6 lg:col-span-4 justStartCenter flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
        >
          <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
            <div className="flexy bg-primary text-white rounded-full w-12 h-12 p-2">
              {detal.icon}
            </div>

            <div className="flexBetween w-full pt-4">
              <div className="flexStart flex-col space-y-0">
                <h2 className="text-3xl font-monaSemibold">{detal.orders}</h2>
                <p className="mb-2 text-sm font-monaLight">{detal.detaling}</p>
              </div>
              <div className="flexy rounded-lg p-3 bg-green-100 text-green-500">
                <MoveUp />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersOverviewDetails;
