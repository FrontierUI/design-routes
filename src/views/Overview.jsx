import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { ListFilter, Search } from "lucide-react";
import { checkRole, getCookie, formatDate } from "../func";

import DashboardBanner from "@/components/DashboardBanner";
import OverviewDetails from "@/components/OverviewDetails";
import ProfileOverview from "@/components/ProfileOverview";

const Overview = () => {
  const navigate = useNavigate();

  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [dashboardData, setDashboardData] = useState({});
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    if (getCookie("token") !== undefined && getCookie("token") !== null)
      setCurrentUserRole(checkRole(getCookie("token")));
    else navigate(`auth/sign-in`, { replace: true });

    fetchDashboardData();
  }, []);

  const fetchDashboardData = () => {
    const json = JSON.stringify({
      token: getCookie("token"),
      limit: limit,
      offset: offset,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_dashboard_data`,
        JSON.stringify({ params: json }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.success === "true") {
          setDashboardData(response.data);
          // setOrderIds(response.data.order_ids);
          // setTicketDetails(response.data.ticket_details);
          // setTicketResponses(response.data.ticket_responses);
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
    else if (Status === "completed" || Status === "delivered")
      return (
        <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg capitalize">
          {Status}
        </button>
      );
    else if (Status === "cancelled")
      return (
        <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
          Cancelled
        </button>
      );
  };

  const RecentOrders = () => (
    <div className="flex flex-col space-y-5 lg:space-y-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4 w-full h-full">
        <h2 className="font-monaSemibold text-2xl">Recent Orders</h2>
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
        <table className="min-w-full">
          <thead className="bg-white whitespace-nowrap w-full">
            <tr>
              <th className="rounded-l-lg p-4 text-left text-md font-monaMedium">
                Date
              </th>
              <th className="p-4 text-left text-md font-monaMedium">Package</th>
              <th className="p-4 text-left text-md font-monaMedium">
                Full Name
              </th>
              <th className="p-4 text-left text-md font-monaMedium">
                Order ID
              </th>
              <th className="p-4 text-left text-md font-monaMedium">Status</th>
              <th className="p-4 text-left text-md font-monaMedium">Payment</th>
              <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                Action
              </th>
            </tr>
          </thead>
          {dashboardData?.orders.length > 0 ? (
            <tbody className="w-full whitespace-nowrap">
              {(searchText.length === 0
                ? [...dashboardData.orders]
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
                  className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg"
                  key={index}
                >
                  <td className="rounded-l-lg p-4 text-left">
                    {formatDate(order.order_date)}
                  </td>
                  <td className="p-4 text-left">
                    <span className="text-green-500">{order.service_name}</span>
                    <br /> {order.package_name}
                  </td>
                  <td className="p-4 text-left capitalize">
                    {order.buyer_name}
                  </td>
                  <td className="p-4 text-left">{order.order_id}</td>
                  <td className="p-4 text-left">
                    <StatusBedge Status={order.order_status} />
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
                      <Link
                        className="flexBetween gap-3 bg-primary text-white py-2 px-4 rounded-lg"
                        to={`/dashboard/user-order-details/${btoa(
                          btoa(order.order_id)
                        )}`}
                      >
                        <span>View</span>
                        <Search className="w-5" />
                      </Link>
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
        </table>
      </div>
    </div>
  );

  return currentUserRole !== null ? (
    <div className="relative w-full h-full overview">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        {checkRole(getCookie("token")) !== "admin" && (
          <ProfileOverview
            TotalOrders={dashboardData?.total_orders}
            TotalTickets={dashboardData?.total_tickets}
          />
        )}

        <OverviewDetails
          Role={checkRole(getCookie("token"))}
          DashboardData={dashboardData}
        />

        {dashboardData.orders !== undefined && <RecentOrders />}
      </div>
    </div>
  ) : null;
};

export default Overview;
