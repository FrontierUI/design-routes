import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ChevronDown, Ellipsis, ListFilter } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';
import { getCookie } from '@/func';
import Toast from '@/components/Toast';

const UpdateOrderStatus = () => {
  const [searchText, setSearchText] = useState('');
  const [orders, setOrders] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    fetchOrders();

    return () => {
      setOrders([]);
    };
  }, []);

  useEffect(() => {
    setSelectedStatuses(
      orders.reduce((acc, order) => {
        acc[order.order_id] = order.order_status;
        return acc;
      }, {})
    );
  }, [orders]);

  useEffect(() => {
    console.log('selectedStatuses', selectedStatuses);
  }, [selectedStatuses]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const fetchOrders = () => {
    const json = JSON.stringify({
      token: getCookie('token'),
      limit: limit,
      offset: offset,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_orders`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setOrders(response.data.orders);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const StatusBedge = ({ Status }) => {
    if (Status === 'pending')
      return (
        <button className="bg-yellow-100 text-yellow-500 px-5 py-2 rounded-lg">
          Pending
        </button>
      );
    else if (Status === 'in progres')
      return (
        <button className="bg-blue-100 text-blue-500 px-5 py-2 rounded-lg">
          In Progress
        </button>
      );
    else if (Status === 'completed')
      return (
        <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
          Completed
        </button>
      );
    else if (Status === 'delivered')
      return (
        <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
          Delivered
        </button>
      );
    else if (Status === 'cancelled')
      return (
        <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
          Cancelled
        </button>
      );
  };

  const handleStatusChange = (id, newStatus) => {
    setSelectedStatuses((prev) => ({
      ...prev,
      [id]: newStatus,
    }));
  };

  const updateOrderStatus = (id, newStatus) => {
    const json = JSON.stringify({
      token: getCookie('token'),
      order_id: id,
      status: newStatus,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=update_order`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          addToast('success', response.data.message);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleUpdate = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.order_id === id
          ? { ...order, order_status: selectedStatuses[id] }
          : order
      )
    );
    //console.log(`Order ${id} updated to status: ${selectedStatuses[id]}`);
    updateOrderStatus(id, selectedStatuses[id]);
  };

  return (
    <div className="relative w-full h-full updateOrderStatus">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">User List</h2>
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
                <Link to={'javascript:void(0)'} className="flexy">
                  <ListFilter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
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
                    User Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Current Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Change Status
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
                    <tr
                      className="w-full text-sm transitAll hover:bg-[#e3e2ff] rounded-lg"
                      key={index}
                    >
                      <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                        <Link
                          className="text-blue-500 text-bold"
                          to={`/dashboard/user-order-details/${btoa(
                            btoa(order.order_id)
                          )}`}
                        >
                          {order.order_id}
                        </Link>
                      </td>
                      <td className="p-4 text-left">
                        <span className="text-green-500">
                          {order.service_name}
                        </span>
                        <br /> {order.package_name}
                      </td>
                      <td className="p-4 text-left capitalize">
                        {order.buyer_name}
                      </td>
                      <td className="p-4 text-left">
                        <StatusBedge Status={order.order_status} />
                      </td>
                      <td className="p-4 text-left">
                        <div className="relative flex items-center max-w-40">
                          <select
                            className="changeStatus-select"
                            value={selectedStatuses[order.order_id]}
                            onChange={(e) =>
                              handleStatusChange(order.order_id, e.target.value)
                            }
                          >
                            <option className="changeStatus-select">
                              Choose Status
                            </option>
                            <option
                              className="changeStatus-select"
                              value={'pending'}
                            >
                              Pending
                            </option>
                            <option
                              className="changeStatus-select"
                              value={'in progres'}
                            >
                              In Progress
                            </option>
                            <option
                              className="changeStatus-select"
                              value={'delivered'}
                            >
                              Delivered
                            </option>
                            <option
                              className="changeStatus-select"
                              value={'cancelled'}
                            >
                              Cancelled
                            </option>
                          </select>
                          <div className="absolute right-1.5 flex items-center">
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </div>
                      </td>

                      <td className="p-4 text-left rounded-r-lg">
                        <div className="flexBetween gap-4">
                          <button
                            className={`bg-primary text-white py-2 px-4 rounded-lg font-monaMedium${
                              selectedStatuses[order.order_id] ===
                              order.order_status
                                ? ' opacity-50 cursor-not-allowed'
                                : ''
                            }`}
                            onClick={() => handleUpdate(order.order_id)}
                            disabled={
                              selectedStatuses[order.order_id] ===
                              order.order_status
                            }
                          >
                            Update
                          </button>
                          {/* <Ellipsis className="w-6 h-6" /> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody className="w-full whitespace-nowrap">
                  <tr className="w-full text-sm transitAll hover:bg-[#e3e2ff] rounded-lg">
                    <td className="p-4 text-left rounded-r-lg" colSpan={6}>
                      No order created yet
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderStatus;
