import React, { useEffect, useState } from "react";
import axios from "axios";

import DashboardBanner from "@/components/DashboardBanner";
import { Link } from "react-router-dom";
import { ListFilter, Search } from "lucide-react";
import { formatDate, getCookie } from "@/func";

const OrderDetails = () => {
  const [searchText, setSearchText] = useState("");
  const [orders, setOrders] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    fetchOrders();

    return () => {
      setOrders([]);
    };
  }, []);

  const fetchOrders = () => {
    const json = JSON.stringify({
      token: getCookie("token"),
      limit: limit,
      offset: offset,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_orders`,
        JSON.stringify({ params: json }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((response) => {
        if (response.data.success === "true") {
          setOrders(response.data.orders);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const StatusBedge = ({ Status }) => {
    if (Status === "pending")
      return (
        <button className="bg-yellow-100 text-yellow-500 px-5 py-2 rounded-lg">
          Pending
        </button>
      );
    else if (Status === "inprogress")
      return (
        <button className="bg-blue-100 text-blue-500 px-5 py-2 rounded-lg">
          In Progress
        </button>
      );
    else if (Status === "completed")
      <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
        Completed
      </button>;
    else if (Status === "cancelled")
      <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
        Cancelled
      </button>;
  };

  return (
    <div className="userList w-full h-full relative">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">Order Details</h2>
            <div className="flex items-center gap-4 w-full lg:w-1/3">
              <input
                type="text"
                className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <p className="font-monaMedium text-xl">Filter</p>
                <Link to={"javascript:void(0)"} className="flexy">
                  <ListFilter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full mx-auto">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  <th className="rounded-l-lg p-4 text-left text-md font-monaMedium">
                    Date
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Product
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  {/* <th className="p-4 text-left text-md font-monaMedium">
                    Number
                  </th> */}
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Payment
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Action
                  </th>
                </tr>
              </thead>

              {orders.length > 0 ? (
                <tbody className="w-full whitespace-nowrap">
                  {(searchText.length === 0
                    ? [...orders]
                    : [
                        ...orders.filter(
                          (order) =>
                            order.service_name
                              .toLowerCase()
                              .includes(searchText.toLowerCase()) ||
                            order.package_name
                              .toLowerCase()
                              .includes(searchText.toLowerCase()) ||
                            order.buyer_name
                              .toLowerCase()
                              .includes(searchText.toLowerCase()) ||
                            order.order_id
                              .toString()
                              .toLowerCase()
                              .includes(searchText.toLowerCase()) ||
                            order.order_status
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                        ),
                      ]
                  ).map((order, index) => (
                    <tr className="w-full text-sm" key={index}>
                      <td className="rounded-l-lg p-4 text-left">
                        {formatDate(order.order_date)}
                      </td>
                      <td className="p-4">
                        <span className="text-green-500">
                          {order.service_name}
                        </span>
                      </td>
                      <td className="p-4">{order.package_name}</td>
                      <td className="text-left p-4 max-sm:pr-12">
                        {order.order_id}
                      </td>
                      {/* <td className="p-4 text-left">4</td> */}
                      <td className="rounded-r-lg p-4 text-left">
                        <StatusBedge Status={order.order_status} />
                      </td>
                      <td className="rounded-r-lg p-4 text-left">
                        {order.payment_status === "COMPLETED" ? (
                          <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg text-center py-2 px-5 pointer-events-none text-sm">
                            Paid
                          </button>
                        ) : (
                          <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg text-center py-2 px-5 pointer-events-none text-sm">
                            {order.payment_status}
                          </button>
                        )}
                      </td>
                      <td className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                        <Link
                          className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg"
                          to={`/dashboard/user-order-details/${btoa(
                            btoa(order.order_id)
                          )}`}
                        >
                          <span>View</span>
                          <Search className="w-5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody className="w-full whitespace-nowrap">
                  <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                    <td className="p-4 text-center" colSpan={7}>
                      No order created yet
                    </td>
                  </tr>
                </tbody>
              )}

              {/* <tbody className="w-full whitespace-nowrap">
                <tr className="w-full text-sm">
                  <td className="rounded-l-lg p-4 text-left">2026/01/19</td>
                  <td className="p-4">Creative Campaign</td>
                  <td className="p-4">Premium</td>
                  <td className="text-left p-4 max-sm:pr-12">122994</td>
                  <td className="p-4 text-left">4</td>
                  <td className="rounded-r-lg p-4 text-left">
                    <button className="bg-red-100 rounded-lg text-red-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Suspended
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <button className="bg-yellow-100 rounded-lg text-yellow-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Pending
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="rounded-l-lg p-4 text-left">2026/01/19</td>
                  <td className="p-4 text-left">Brand Identity & Design</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">122993</td>
                  <td className="p-4 text-left">12</td>
                  <td className="rounded-r-lg p-4">
                    <button className="bg-blue-100 rounded-lg text-primary text-center py-2 px-5 pointer-events-none text-sm">
                      In progress
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4">
                    <button className="bg-green-100 rounded-lg text-green-500 text-center py-2 px-5 pointer-events-none text-sm">
                      Paid
                    </button>
                  </td>
                </tr>
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
