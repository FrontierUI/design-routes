import {
  CalendarClock,
  ChevronDown,
  Ellipsis,
  FileDown,
  MessageCircleMore,
  Package,
  PackageCheck,
  Receipt,
  ReceiptText,
  RefreshCw,
  Settings2,
  Undo2,
  Upload,
  User,
  UserRoundCog,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "@/components/Toast";

import { formatDate, getCookie } from "@/func";
import axios from "axios";

const UserOrderHistory = ({ OrderDetails, OrderDeliverables }) => {
  const [status, setStatus] = useState("");
  const [enableUpdateButton, setEnableUpdateButton] = useState(false);
  const [toasts, setToasts] = useState([]);

  const orderStatus = OrderDetails?.order_status;

  useEffect(() => {
    if (status !== orderStatus) setEnableUpdateButton(true);
    else setEnableUpdateButton(false);
  }, [status]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleChange = (e) => {
    const newStatus = e.target.value;
    if (newStatus !== "") setStatus(newStatus);
    // You can also call an API or trigger any side effect here
  };

  const updateOrderStatus = () => {
    if (status !== orderStatus) {
      const json = JSON.stringify({
        token: getCookie("token"),
        order_id: OrderDetails.order_id,
        status: status,
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=update_order`,
          JSON.stringify({ params: json }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.data.success === "true") {
            addToast("success", response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  };

  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-6 w-full  mx-auto">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <div className="col-span-12 md:col-span-6 w-full relative rounded-lg">
        <div className="sm:p-5 p-3 bg-white rounded-lg flex flex-col relative w-full space-y-4">
          <div className="flex items-center gap-4">
            <User className="w-6 text-gray-400" />
            <h3 className="font-monaMedium text-md">User Information</h3>
          </div>
          <hr className="bg-gray-200 h-px w-full" />
          <div className="flex flex-col md:flex-row items-start justify-start md:justify-between w-full gap-5">
            <div className="flex items-center gap-3 w-full">
              <img
                src="/images/icons/ProfAvatar.svg"
                className="img-fluid w-12"
                alt=""
              />
              <div className="flex flex-col space-y-0">
                <div className="flex items-center gap-3">
                  <span>User ID</span>
                  <span className="text-sm font-monaLight">
                    {OrderDetails?.user_id}
                  </span>
                </div>
                <h2 className="font-monaSemibold text-lg capitalize">
                  {OrderDetails?.buyer_name}
                </h2>
              </div>
            </div>

            <div className="flex flex-col space-y-5 w-full">
              <div className="flexBetween gap-5 w-full">
                <p>Signup Method:</p>
                <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg capitalize">
                  {OrderDetails?.registration_method}
                </span>
              </div>
              <div className="flexBetween gap-5 w-full">
                <p>Join At:</p>
                <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg">
                  {formatDate(OrderDetails?.join_at)}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex items-end justify-end pt-3">
            <Link className="px-3 py-2 flexBetween gap-4 rounded-lg bg-primary text-white w-3/5 md:w-1/3">
              Download Invoice
              <FileDown className="w-6" />
            </Link>
          </div> */}
        </div>
      </div>

      <div className="col-span-12 md:col-span-3 w-full relative bg-white rounded-lg">
        <div className="sm:p-4 p-2 flex flex-col relative w-full space-y-4">
          <div className="flex items-center gap-4">
            <Package className="w-6 text-gray-400" />
            <h3 className="font-monaMedium text-md">Order Summary</h3>
          </div>
          <hr className="bg-gray-200 h-px w-full" />

          <div className="flexStart flex-col w-full px-1 text-sm space-y-5">
            <div className="flexBetween gap-5 w-full">
              <span>Order ID:</span>
              <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg">
                {OrderDetails?.order_id}
              </span>
            </div>
            <div className="flexBetween gap-5 w-full">
              <span>Placed on:</span>
              <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg">
                {formatDate(OrderDetails?.order_date)}
              </span>
            </div>
            <div className="flexBetween gap-5 w-full">
              <span>Amount</span>
              <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg">
                $ {OrderDetails?.order_price}
              </span>
            </div>
            <div className="flexBetween gap-5 w-full">
              <span>Method</span>
              <span className="bg-green-100 text-green-500 py-2 px-4 rounded-lg capitalize">
                {OrderDetails?.payment_method}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3 w-full relative bg-white rounded-lg">
        <div className="sm:p-4 p-2 flex flex-col space-y-4 relative w-full">
          <div className="flex items-center gap-4">
            <Settings2 className="w-6 text-gray-400" />
            <h3 className="font-monaMedium text-md">Admin Actions</h3>
          </div>
          <hr className="bg-gray-200 h-px w-full" />

          <div className="flexStart flex-col w-full text-sm space-y-5">
            <div className="flexBetween gap-5 w-full relative">
              <div className="flex items-center w-2/5">
                <span>Status</span>
              </div>
              <div className="relative flex items-center w-full">
                <select
                  className="invoice-select border border-gray-400"
                  value={status !== "" ? status : OrderDetails?.order_status}
                  onChange={handleChange}
                >
                  <option
                    className="invoice-selectOpt"
                    value={""}
                    onClick={() => setEnableUpdateButton(false)}
                  >
                    Select Status
                  </option>
                  <option className="invoice-selectOpt" value={"pending"}>
                    Pending
                  </option>
                  <option className="invoice-selectOpt" value={"in progres"}>
                    In Progress
                  </option>
                  <option className="invoice-selectOpt" value={"delivered"}>
                    Delivered
                  </option>
                  <option className="invoice-selectOpt" value={"cancelled"}>
                    Cancelled
                  </option>
                </select>
                <div className="absolute right-1.5 flex items-center">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* <div className="flexBetween gap-5 w-full relative">
              <div className="flex items-center w-2/5">
                <span>Invoice</span>
              </div>
              <Link
                to={'javascript:void(0)'}
                className="min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg"
              >
                Resend Invoice
                <ReceiptText className="w-6" />
              </Link>
            </div> */}

            {/* <div className="flexBetween gap-5 w-full relative">
              <div className="flex items-center w-2/5">
                <span>Message</span>
              </div>
              <Link
                to={'javascript:void(0)'}
                className="min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg"
              >
                Send Message
                <MessageCircleMore className="w-6" />
              </Link>
            </div> */}

            <div className="flexBetween gap-5 w-full relative">
              <button
                className={`min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg${
                  status !== "" && enableUpdateButton
                    ? ""
                    : " opacity-50 cursor-not-allowed"
                }`}
                disabled={status === "" || !enableUpdateButton}
                onClick={updateOrderStatus}
              >
                Update
                <RefreshCw className="w-6" />
              </button>
            </div>
            <div className="flexBetween gap-5 w-full relative">
              <Link
                to={"javascript:void(0)"}
                className="min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg"
              >
                Download Invoice
                <ReceiptText className="w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 relative md:-mt-12 w-full bg-white rounded-lg">
        <div className="sm:p-4 p-2 flex flex-col space-y-4 relative w-full">
          <div className="flex items-center gap-4">
            <CalendarClock className="w-6 text-gray-400" />
            <h3 className="font-monaMedium text-md">Timeline</h3>
          </div>
          <hr className="bg-gray-200 h-px w-full" />

          <ul className="flex flex-col w-full space-y-6">
            <li className="flexBetween w-full gap-4">
              <div className="flex items-center w-1/2 md:w-1/3">
                <span>Order Placed</span>
              </div>
              <div className="flex items-end justify-end">
                <div className="flexy flex-col w-full space-y-3">
                  <button className="py-2 px-6 rounded-lg bg-green-100 text-green-500">
                    User
                  </button>
                  <span className="text-xs">
                    {formatDate(OrderDetails?.order_date)}
                  </span>
                </div>
              </div>
            </li>
            <li className="flexBetween w-full gap-4">
              <div className="flex items-center w-1/2 md:w-1/3">
                <span>Payment Received</span>
              </div>
              <div className="flex items-end justify-end">
                <div className="flexy flex-col w-full space-y-3">
                  <button className="py-2 px-6 rounded-lg bg-blue-100 text-primary">
                    System
                  </button>
                  <span className="text-xs">
                    {formatDate(OrderDetails?.order_date)}
                  </span>
                </div>
              </div>
            </li>
            <li className="flexBetween w-full gap-4">
              <div className="flex items-center w-1/2 md:w-1/3">
                <span>First Delivery Uploaded</span>
              </div>
              <div className="flex items-end justify-end">
                <div className="flexy flex-col w-full space-y-3">
                  <button className="py-2 px-6 rounded-lg bg-blue-100 text-primary">
                    Admin
                  </button>
                  <span className="text-xs">
                    {
                      OrderDeliverables[OrderDeliverables.length - 1]
                        ?.upload_date
                    }
                  </span>
                </div>
              </div>
            </li>

            {/* <li className="flexBetween w-full gap-4">
              <div className="flex items-center w-1/2 md:w-1/3">
                <span>Revision Requested</span>
              </div>
              <div className="flex items-end justify-end">
                <div className="flexy flex-col w-full space-y-3">
                  <button className="py-2 px-6 rounded-lg bg-green-100 text-green-500">
                    User
                  </button>
                  <span className="text-xs">Mar 5, 2028 – 3:42 PM</span>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 relative w-full">
        <div className="sm:p-5 p-3 bg-white rounded-lg flex flex-col relative w-full space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-5 w-full">
            <div className="flex items-center gap-4">
              <PackageCheck className="w-6 text-gray-400" />
              <h3 className="font-monaMedium text-md">Project Deliverables</h3>
            </div>

            <Link
              to={"javascript:void(0)"}
              className="flexBetween px-3 py-2 gap-4 bg-primary text-white rounded-lg"
            >
              Upload files
              <Upload className="w-5" />
            </Link>
          </div>
          <hr className="bg-gray-200 h-px w-full" />

          {OrderDeliverables?.length > 0 ? (
            <ul className="flex flex-col space-y-5 py-4">
              {OrderDeliverables.map((deliverable, index) => (
                <li
                  className="p-2 sm:p-4 w-full bg-[#e3e2ff] rounded-lg flexBetween"
                  key={index}
                >
                  <span>{deliverable.original_file_name}</span>
                  <Ellipsis className="w-6" />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col space-y-5 py-4">
              <li className="p-2 sm:p-4 w-full bg-[#e3e2ff] rounded-lg flexBetween">
                <span>Nothing delivered yet</span>
              </li>
            </ul>
          )}
          {/* <ul className="flex flex-col space-y-5 py-4">
            <li className="p-2 sm:p-4 w-full bg-[#e3e2ff] rounded-lg flexBetween">
              <span>File Name.zip</span>
              <Ellipsis className="w-6" />
            </li>
            <li className="p-2 sm:p-4 w-full bg-[#e3e2ff] rounded-lg flexBetween">
              <span>File Name.zip</span>
              <Ellipsis className="w-6" />
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default UserOrderHistory;
