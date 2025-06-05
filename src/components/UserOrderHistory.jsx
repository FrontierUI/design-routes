import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  CalendarClock,
  ChevronDown,
  Download,
  Ellipsis,
  FilePlus2,
  Package,
  PackageCheck,
  ReceiptText,
  RefreshCw,
  Settings2,
  Trash2,
  Upload,
  User,
} from "lucide-react";

import { formatDate, getCookie, checkRole, formatFileSize } from "../func";
import Toast from "@/components/Toast";

let user_id = null;

const UserOrderHistory = ({
  OrderDetails,
  OrderDeliverables,
  fetchOrderDetails,
}) => {
  const fileInputRef = useRef(null);

  const [status, setStatus] = useState("");
  const [toasts, setToasts] = useState([]);
  const [enableUpdateButton, setEnableUpdateButton] = useState(false);
  const [files, setFiles] = useState([]);

  const [uploading, setUploading] = useState(false);

  const orderStatus = OrderDetails?.order_status;

  useEffect(() => {
    if (getCookie("token") !== undefined && getCookie("token") !== null) {
      user_id = atob(atob(getCookie("token"))).split("|")[0];
    }
  }, []);

  useEffect(() => {
    if (status !== orderStatus) setEnableUpdateButton(true);
    else setEnableUpdateButton(false);
  }, [status]);

  // useEffect(()=>{
  //   console.log("uploading", uploading)
  // }, [uploading]);

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
  };

  const handleAttachFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxFileSize = 1024 * 1024 * 1024;

    const validFiles = selectedFiles.filter((file) => file.size <= maxFileSize);

    setFiles(validFiles);

    if (validFiles.length > e.target.files)
      addToast("error", "Max allowed file size is 1 GB");
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
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
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

  // const uploaddeliverables = () => {
  //   files.forEach(async (f, index) => {
  //     let Payload = {
  //       token: getCookie('token'),
  //       order_id: OrderDetails.order_id,
  //       description: '',
  //       files: [],
  //     };

  //     if (files && files.length > 0) {
  //       const filePromises = Array.from([files[index]]).map((file) => {
  //         return new Promise((resolve, reject) => {
  //           const reader = new FileReader();

  //           reader.readAsDataURL(file);

  //           reader.onload = () => {
  //             const ext = file.name.split('.').pop().toLowerCase();
  //             const validTypes = {
  //               // Image formats
  //               'image/png': 'png',
  //               'image/jpg': 'jpg',
  //               'image/jpeg': 'jpeg',
  //               'image/gif': 'gif',
  //               'image/webp': 'webp',
  //               'image/avif': 'avif',
  //               'image/svg+xml': 'svg',
  //               'application/postscript': 'ai',
  //               'image/vnd.adobe.photoshop': 'psd',

  //               // Document formats
  //               'application/pdf': 'pdf',
  //               'application/msword': 'doc',
  //               'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
  //                 'docx',
  //               'application/vnd.ms-powerpoint': 'ppt',
  //               'application/vnd.openxmlformats-officedocument.presentationml.presentation':
  //                 'pptx',
  //               'application/vnd.ms-excel': 'xlsx',

  //               // Font formats
  //               'font/woff2': 'woff2',
  //               'font/woff': 'woff',
  //               'font/ttf': 'ttf',
  //               'font/otf': 'otf',
  //               'video/mp4': 'mp4',
  //               'video/x-msvideo': 'avi',
  //               'audio/mpeg': 'mp3',
  //               'model/3mf': 'max',
  //               'application/octet-stream': '3ds',
  //               'model/x3d+fbx': 'fbx',
  //             };
  //             if (!validTypes[file.type]) {
  //               reject(new Error(`Unsupported file type: ${file.type}`));
  //               return;
  //             }
  //             resolve({
  //               name: file.name,
  //               type: file.type,
  //               extension: validTypes[file.type],
  //               size: Math.round(file.size / 1000),
  //               base64: reader.result.split(',')[1], // Remove data URL prefix
  //             });
  //           };
  //           reader.onerror = () =>
  //             reject(new Error(`Failed to read file: ${file.name}`));
  //         });
  //       });

  //       Payload.files = await Promise.all(filePromises);
  //     }

  //     const json = JSON.stringify(Payload);

  //     axios
  //       .post(
  //         `${import.meta.env.VITE_BASE_API}/api.php?action=add_deliverable`,
  //         JSON.stringify({ params: json }),
  //         { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  //       )
  //       .then((response) => {
  //         if (response.data.success === 'true') {
  //           // setResponse("");
  //           // setFiles([]);
  //           // fetchTicketDetails();
  //           // addToast("success", response.data.message);

  //           console.log(response.data.deliverable_id);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(`Error: ${error}`);
  //       });
  //   });
  // };

  const uploaddeliverables = async () => {
    setUploading(true);
    // let currentFileIndex = 0;
    const uploadStatus = files.map((file) => ({
      name: file.name,
      progress: 0,
      status: "pending", // pending, uploading, completed, failed
    }));

    // console.log("uploadStatus", uploadStatus);

    // Function to update progress in UI
    const updateProgress = (index, progress, status) => {
      uploadStatus[index].progress = progress;
      uploadStatus[index].status = status;
      // console.log(`File: ${uploadStatus[index].name}, Progress: ${progress}%, Status: ${status}`);
      // Update UI here, e.g., dispatch an event or update state
      // Example: dispatchEvent(new CustomEvent('uploadProgress', { detail: uploadStatus }));

      setTimeout(() => {
        if (document.getElementById(`pbspan${index}`) !== undefined) {
          document.getElementById(`pbspan${index}`).innerHTML = `${progress}%`;
          document
            .getElementById(`pbcircle${index}`)
            .setAttribute("stroke-dashoffset", `${100 - progress}`);
        }
      }, 1000);
    };

    const uploadFile = async (index) => {
      if (index >= files.length) {
        setFiles([]);
        fetchOrderDetails(OrderDetails.order_id);
        console.log("All uploads completed");
        return;
      }

      const file = files[index];
      updateProgress(index, 0, "uploading");

      let Payload = {
        token: getCookie("token"),
        order_id: OrderDetails.order_id,
        description: "",
        files: [],
      };

      try {
        // Convert file to base64
        const fileData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const ext = file.name.split(".").pop().toLowerCase();
            const validTypes = {
              "image/png": "png",
              "image/jpeg": "jpg",
              "image/jpeg": "jpeg",
              "image/gif": "gif",
              "image/webp": "webp",
              "image/avif": "avif",
              "image/svg+xml": "svg",
              "application/postscript": "ai",
              "image/vnd.adobe.photoshop": "psd",
              "application/pdf": "pdf",
              "application/msword": "doc",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                "docx",
              "application/vnd.ms-powerpoint": "ppt",
              "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                "pptx",
              "application/vnd.ms-excel": "xlsx",
              "font/woff2": "woff2",
              "font/woff": "woff",
              "font/ttf": "ttf",
              "font/otf": "otf",
              "video/mp4": "mp4",
              "video/x-msvideo": "avi",
              "audio/mpeg": "mp3",
              "model/3mf": "max",
              "application/octet-stream": "3ds",
              "model/x3d+fbx": "fbx",
            };

            if (!validTypes[file.type]) {
              reject(new Error(`Unsupported file type: ${file.type}`));
              return;
            }

            resolve({
              name: file.name,
              type: file.type,
              extension: validTypes[file.type],
              size: Math.round(file.size / 1000),
              base64: reader.result.split(",")[1],
            });
          };
          reader.onerror = () =>
            reject(new Error(`Failed to read file: ${file.name}`));
        });

        Payload.files = [fileData];
        const json = JSON.stringify(Payload);

        // Upload file with progress tracking
        await axios.post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=add_deliverable`,
          JSON.stringify({ params: json }),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              updateProgress(index, percentCompleted, "uploading");
            },
          }
        );

        updateProgress(index, 100, "completed");
        // console.log(`File ${file.name} uploaded successfully`);

        // Proceed to next file
        await uploadFile(index + 1);
      } catch (error) {
        updateProgress(index, 0, "failed");
        console.error(`Error uploading ${file.name}: ${error}`);
        // Continue with next file even if one fails
        await uploadFile(index + 1);
      }
    };

    // Start uploading the first file
    await uploadFile(0);

    // setTimeout(()=>{
    //   setUploading(false);
    // }, 1000 * 5)
  };

  const ProgressBar = ({ PBIndex }) => {
    return (
      <div class="relative size-10">
        <svg
          class="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-gray-200 dark:text-neutral-700"
            stroke-width="2"
          ></circle>
          {/* Progress Circle */}
          <circle
            id={`pbcircle${PBIndex}`}
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-blue-600 dark:text-blue-500"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset={`${0}`}
            stroke-linecap="round"
          ></circle>
        </svg>

        {/* Percentage Text */}
        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span
            class="text-center text-2xl font-bold text-blue-600 dark:text-blue-500"
            style={{ fontSize: "10px" }}
            id={`pbspan${PBIndex}`}
          >
            0%
          </span>
        </div>
      </div>
    );
  };

  const downloadFile = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a); // Required for Firefox
    a.click();
    document.body.removeChild(a);
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
      <div
        className={
          checkRole(getCookie("token")) === "admin"
            ? "col-span-12 md:col-span-6 w-full relative rounded-lg"
            : "col-span-12 md:col-span-6 w-full relative rounded-lg"
        }
      >
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
        </div>
      </div>

      <div
        className={
          checkRole(getCookie("token")) === "admin"
            ? "col-span-12 md:col-span-3 w-full relative bg-white rounded-lg"
            : "col-span-12 md:col-span-6 w-full relative bg-white rounded-lg"
        }
      >
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
            {checkRole(getCookie("token")) !== "admin" && (
              <div className="flexBetween gap-5 w-full relative">
                <Link
                  to={`/dashboard/invoice-details/${btoa(
                    btoa(
                      OrderDetails?.order_id +
                        "||" +
                        atob(atob(getCookie("token"))).split("|")[0]
                    )
                  )}`}
                  className="min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg"
                >
                  Download Invoice
                  <ReceiptText className="w-6" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {checkRole(getCookie("token")) === "admin" && (
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
                  to={`/dashboard/invoice-details/${btoa(
                    btoa(
                      OrderDetails?.order_id +
                        "||" +
                        atob(atob(getCookie("token"))).split("|")[0]
                    )
                  )}`}
                  className="min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg"
                >
                  Download Invoice
                  <ReceiptText className="w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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

            {checkRole(getCookie("token")) === "admin" && (
              <>
                <input
                  id="files"
                  type="file"
                  name="files[]"
                  multiple
                  // accept=".png,.jpg,.pdf,.doc,.docx"
                  accept=".max,.3ds,.fbx,.xlsx,.doc,.docx,.ppt,.pptx,.woff2,.woff,.ttf,.otf,.mp4,.mp3,.avi,.avif,.gif,.webp,.jpeg,.jpg,.png,.svg,.ai,.psd,.pdf"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                <button
                  id="btnAttachFile"
                  className="flexBetween px-3 py-2 gap-4 bg-primary text-white rounded-lg"
                  onClick={handleAttachFile}
                >
                  <FilePlus2 className="w-5" />
                  File Attach
                </button>
              </>
            )}
          </div>

          {checkRole(getCookie("token")) === "admin" &&
            files.length > 0 &&
            [...files].map((file, index) => (
              <div
                className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-5 w-full"
                key={index}
              >
                <div className="flex-1 ">
                  {file.name}
                  <span className="pl-2 text-gray-500 text-xs">
                    {formatFileSize(file.size)}
                  </span>
                </div>
                {!uploading ? (
                  <button
                    className="py-2 px-4 flexy gap-3 bg-red-100 text-red-500 rounded-lg"
                    onClick={(e) => removeAttachedFile(e, index)}
                  >
                    Remove
                    <Trash2 className="w-5 h-5" />
                  </button>
                ) : (
                  <ProgressBar PBIndex={index} />
                )}
              </div>
            ))}

          {files.length > 0 && (
            <button
              className="flexBetween px-3 py-2 gap-4 bg-primary text-white rounded-lg"
              onClick={uploaddeliverables}
            >
              Upload files
              <Upload className="w-5" />
            </button>
          )}

          <hr className="bg-gray-200 h-px w-full" />

          {OrderDeliverables?.length > 0 ? (
            <ul className="flex flex-col space-y-5 py-4">
              {OrderDeliverables.map((deliverable, index) => (
                <li
                  className="p-2 sm:p-4 w-full bg-[#e3e2ff] rounded-lg flexBetween"
                  key={index}
                  onClick={() =>
                    downloadFile(
                      `${import.meta.env.VITE_BASE_API}/uploads/deliverables/${
                        deliverable.file_name
                      }`,
                      deliverable.original_file_name
                    )
                  }
                >
                  <span>{deliverable.original_file_name}</span>
                  {/* <Ellipsis className="w-6" /> */}
                  <Download className="w-6" />
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
        </div>
      </div>
    </div>
  );
};

export default UserOrderHistory;
