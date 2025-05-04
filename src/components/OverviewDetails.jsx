// import React from 'react';

import {
  History,
  LifeBuoy,
  Mail,
  NotepadText,
  Settings,
  Ticket,
} from 'lucide-react';

const OverviewDetails = () => {
  //

  const userDetails = [
    {
      icon: <History className="w-7 h-7" />,
      name: 'View Order History',
      detaling: '3 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <NotepadText className="w-7 h-7" />,
      name: 'Manage Your Invoices',
      detaling: '1 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <Ticket className="w-7 h-7" />,
      name: 'Manage Ticket',
      detaling: '2 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <Settings className="w-7 h-7" />,
      name: 'Settings',
    },
    {
      icon: <Mail className="w-7 h-7" />,
      name: 'Contact',
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      name: 'Help Center',
    },
  ];

  // admin
  const overviewDetails = [
    {
      icon: <History className="w-7 h-7" />,
      name: 'View Order History',
      detaling: '3 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <NotepadText className="w-7 h-7" />,
      name: 'Manage Your Invoices',
      detaling: '1 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <Ticket className="w-7 h-7" />,
      name: 'Manage Ticket',
      detaling: '2 active of 4 Orders', // yeh dynamic hoga paayen
    },
    {
      icon: <Settings className="w-7 h-7" />,
      name: 'Settings',
    },
    {
      icon: <Mail className="w-7 h-7" />,
      name: 'Contact',
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      name: 'Help Center',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
      {userDetails.map((detail) => (
        <div
          key={detail.name}
          className="justStartCenter flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
        >
          <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
            <div className="flexy bg-primary text-white rounded-full w-12 h-12 p-1">
              {detail.icon}
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="text-2xl font-monaSemibold">{detail.name}</h2>
              <p className="text-sm mb-2 font-monaLight">{detail.detaling}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewDetails;
