// import React from 'react';

import {
  History,
  LifeBuoy,
  Mail,
  NotepadText,
  Package,
  Settings,
  Ticket,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const OverviewDetails = ({ Role, DashboardData }) => {
  //

  const userDetails = [
    // {
    //   icon: <History className="w-7 h-7" />,
    //   name: "View Order History",
    //   detaling: "3 active of 4 Orders", // yeh dynamic hoga paayen
    // },
    // {
    //   icon: <NotepadText className="w-7 h-7" />,
    //   name: "Manage Your Invoices",
    //   detaling: "1 active of 4 Orders", // yeh dynamic hoga paayen
    // },
    // {
    //   icon: <Ticket className="w-7 h-7" />,
    //   name: "Manage Ticket",
    //   detaling: "2 active of 4 Orders", // yeh dynamic hoga paayen
    // },
    {
      icon: <Settings className="w-7 h-7" />,
      name: "Settings",
      url: "/dashboard/user-profile",
    },
    {
      icon: <Mail className="w-7 h-7" />,
      name: "Contact",
      url: "/dashboard/contact",
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      name: "Help Center",
      url: "/dashboard/help-center",
    },
  ];

  // admin
  const overviewDetails = [
    {
      icon: <History className="w-7 h-7" />,
      name: "Order",
      detaling: <p>Total Orders: <span className="font-monaBold text-lg">{DashboardData.total_orders}</span></p>,//`${DashboardData.total_orders}`,//"3 active of 4 Orders", // yeh dynamic hoga paayen
    },
    {
      icon: <Users className="w-7 h-7" />,
      name: "Users",
      detaling: <p>Total Users: <span className="font-monaBold text-lg">{DashboardData.total_users}</span></p>,//`${DashboardData.total_users}`,//"1 active of 4 Orders", // yeh dynamic hoga paayen
    },
    {
      icon: <Ticket className="w-7 h-7" />,
      name: "Ticket",
      detaling: <p>Total Tickets: <span className="font-monaBold text-lg">{DashboardData.total_tickets}</span></p>,//`${DashboardData.total_tickets}`,//"2 active of 4 Orders", // yeh dynamic hoga paayen
    },
    {
      icon: <Ticket className="w-7 h-7" />,
      name: "Services",
      detaling: <p>Total Services: <span className="font-monaBold text-lg">{DashboardData.total_services}</span></p>,//`${DashboardData.total_services}`,//"2 active of 4 Orders", // yeh dynamic hoga paayen
    },
    {
      icon: <Package className="w-7 h-7" />,
      name: "Packages",
      detaling: <p>Total Packages: <span className="font-monaBold text-lg">{DashboardData.total_packages}</span></p>,//`${DashboardData.total_packages}`,//"2 active of 4 Orders", // yeh dynamic hoga paayen
    },
    // {
    //   icon: <Settings className="w-7 h-7" />,
    //   name: "Settings",
    // },
    // {
    //   icon: <Mail className="w-7 h-7" />,
    //   name: "Contact",
    // },
    // {
    //   icon: <LifeBuoy className="w-7 h-7" />,
    //   name: "Help Center",
    // },
  ];

  return (
    <div
      className={
        Role === "admin"
          ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mx-auto"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
      }
    >
      {/* className={`grid ${Role === "admin" ? 'grid-cols-2' : 'grid-cols-1'} sm:grid-cols-2 ${Role === "admin" ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-6 w-full mx-auto`} */}
      {(Role === "admin" ? [...overviewDetails] : [...userDetails]).map(
        (detail, index) => (
          <div
            key={index}
            className="justStartCenter flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            {detail.url !== undefined ? (
              <Link
                to={detail.url}
                className="bgChange w-full h-full p-6 space-y-6 rounded-lg"
              >
                <div className="flexy bg-primary text-white rounded-full w-12 h-12 p-1">
                  {detail.icon}
                </div>
                <div className="flex flex-col space-y-1">
                  <h2 className="text-2xl font-monaSemibold">{detail.name}</h2>
                  <p className="text-sm mb-2 font-monaLight">
                    {detail.detaling}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                to={detail.url}
                className="bgChange w-full h-full p-6 space-y-6 rounded-lg"
              >
                <div className="flexy bg-primary text-white rounded-full w-12 h-12 p-1">
                  {detail.icon}
                </div>
                <div className="flex flex-col space-y-1">
                  <h2 className="text-2xl font-monaSemibold">{detail.name}</h2>
                  <p className="text-sm mb-2 font-monaLight">
                    {detail.detaling}
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default OverviewDetails;
