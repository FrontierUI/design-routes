import DashboardBanner from "@/components/DashboardBanner";
import axios from "axios";
import {
  Ban,
  CircleCheckBig,
  Ellipsis,
  ListFilter,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate, getCookie } from "@/func";

const AllOrders = () => {
  const [searchText, setSearchText] = useState('');
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
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
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
    <div className="relative w-full h-full allOrders">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex flex-col space-y-5 lg:space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
            <h2 className="font-monaSemibold text-2xl">All Orders</h2>
            <div className="flex items-center gap-4 w-full lg:w-1/3">
              <input
                type="text"
                className="py-2.5 pl-4 pr-2 placeholder:text-gray-400 text-sm rounded-full w-full outline-none bg-white"
                placeholder="Search"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
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
            <table className="min-w-full">
              <thead className="bg-white whitespace-nowrap w-full">
                <tr>
                  {/* <th className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </th> */}
                  <th className="p-4 text-left text-md font-monaMedium">
                    Date
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Package
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Full Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Order ID
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
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
                        ...orders.filter((order) =>
                          order.service_name.toLowerCase().includes(searchText.toLowerCase()) ||
                          order.package_name.toLowerCase().includes(searchText.toLowerCase()) ||
                          order.buyer_name.toLowerCase().includes(searchText.toLowerCase()) ||
                          order.order_id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
                          order.order_status.toLowerCase().includes(searchText.toLowerCase())
                        )
                      ]
                  ).map((order, index) => (
                    <tr
                      className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg"
                      key={index}
                    >
                      {/* <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                        <input type="checkbox" className="tableChecked" />
                      </td> */}
                      <td className="p-4 text-left">
                        {formatDate(order.order_date)}
                      </td>
                      <td className="p-4 text-left"><span class="text-green-500">{order.service_name}</span><br/> {order.package_name}</td>
                      <td className="p-4 text-left capitalize">{order.buyer_name}</td>
                      <td className="p-4 text-left">{order.order_id}</td>
                      <td className="p-4 text-left">
                        <StatusBedge Status={order.order_status} />
                        {/* <button className="bg-yellow-100 text-yellow-500 px-5 py-2 rounded-lg">
                          Pending
                        </button> */}
                      </td>
                      <td className="p-4 text-left">
                        {order.payment_status === "COMPLETED" ? (
                          <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
                            Paid
                          </button>
                        ) : (
                          <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
                            {order.payment_status}
                          </button>
                        )}
                      </td>
                      <td className="rounded-r-lg p-4 text-left">
                        <div className="flexBetween gap-4">
                          <Link className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg" to={`/dashboard/user-order-details/${btoa(btoa(order.order_id))}`}>
                            <span>View</span>
                            <Search className="w-5" />
                          </Link>
                          {/* <Ellipsis className="w-6 h-6" /> */}
                        </div>
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
              {/* <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className="p-4 text-left">Jan 2, 2027</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">Pablo Rivero Beltrán</td>
                  <td className="p-4 text-left">ORD-22945</td>
                  <td className="p-4 text-left">
                    <button className="bg-yellow-100 text-yellow-500 px-5 py-2 rounded-lg">
                      Pending
                    </button>
                  </td>
                  <td className="p-4 text-left">
                    <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
                      Paid
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <div className="flexBetween gap-4">
                      <Link className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg">
                        <span>View</span>
                        <Search className="w-5" />
                      </Link>
                      <Ellipsis className="w-6 h-6" />
                    </div>
                  </td>
                </tr>

                <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                  <td className="rounded-l-lg p-4 lg:pl-8 text-left">
                    <input type="checkbox" className="tableChecked" />
                  </td>
                  <td className="p-4 text-left">Jan 2, 2027</td>
                  <td className="p-4 text-left">Standard</td>
                  <td className="p-4 text-left">Pablo Rivero Beltrán</td>
                  <td className="p-4 text-left">ORD-22945</td>
                  <td className="p-4 text-left">
                    <button className="bg-blue-100 text-primary px-5 py-2 rounded-lg">
                      Progress
                    </button>
                  </td>
                  <td className="p-4 text-left">
                    <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
                      Refunded
                    </button>
                  </td>
                  <td className="rounded-r-lg p-4 text-left">
                    <div className="flexBetween gap-4">
                      <Link className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg">
                        <span>View</span>
                        <Search className="w-5" />
                      </Link>
                      <Ellipsis className="w-6 h-6" />
                    </div>
                  </td>
                </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
