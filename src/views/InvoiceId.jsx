import DashboardBanner from "@/components/DashboardBanner";

import brand from "/images/routeslogo.svg";
import { FileDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { formatDate, getCookie } from "@/func";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceId = () => {
  const divRef = useRef();
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      fetchOrderDetails(atob(atob(id)).split("||")[0]);
    }

    return () => {
      setOrderDetails({});
      setIsDownloading(false);
    };
  }, []);

  const fetchOrderDetails = (id) => {
    const json = JSON.stringify({ token: getCookie("token"), order_id: id });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_order_details`,
        JSON.stringify({ params: json }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.success === "true") {
          setOrderDetails(response.data.order_details);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleDownload = () => {
    setIsDownloading(true); // Hide button

    setTimeout(() => {
      const input = divRef.current;

      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("download.pdf");
      }, 1500);

      setTimeout(() => {
        setIsDownloading(false); // Show button again after download
      }, 500);
    });
  };

  return (
    <div className="relative w-full h-full ticketId">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div
          ref={divRef}
          className="flex flex-col w-full h-full relative rounded-lg bg-white"
        >
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="flex flex-col space-y-5 lg:space-y-7 w-full h-full relative lg:pb-5 lg:px-2">
              <div className="flex items-start flex-col space-y-5 lg:space-y-7 w-full">
                <div className="flex w-full relative lg:-left-3">
                  <img src={brand} className="img-fluid w-32 sm:w-36" alt="" />
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full">
                  <h2>Invoice Number</h2>
                  <h2>
                    Inv-{orderDetails?.order_id?.toString().padStart(5, "0")}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full  border-y border-gray-300">
                <div className="flex items-center py-4">
                  <p className="font-monaLight">
                    Projec Desc:
                    <span className="ml-2 font-monaMedium">
                      {orderDetails?.service_name} /{" "}
                      {orderDetails?.package_name}
                    </span>
                  </p>
                </div>
                <div className="flex items-center pb-4 lg:py-4">
                  <p className="font-monaLight">
                    Date Paid:
                    <span className="ml-2 font-monaMedium">
                      {formatDate(orderDetails?.order_date)}
                    </span>
                  </p>

                  {/* <p className="font-monaLight ml-4">
                    Due Date:
                    <span className="ml-2 font-monaMedium">Feb 7, 2027</span>
                  </p> */}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 w-full  border-b border-gray-300">
                <div className="flexStart flex-col space-y-4 py-2 lg:py-4">
                  <p className="font-monaLight">
                    From:
                    <span className="ml-2 text-xl font-monaBold">
                      Routes.Design
                    </span>
                  </p>
                  <div className="flex flex-col space-y-1.5">
                    <span>+18179484842</span>
                    <span>contact@routes.design</span>
                  </div>
                </div>

                <div className="flexStart flex-col space-y-4 pb-4 lg:py-4">
                  <p className="font-monaLight">
                    To:
                    <span className="ml-2 text-xl font-monaBold capitalize">
                      {orderDetails?.buyer_name}
                    </span>
                  </p>
                  <div className="flex lg:items-end flex-col space-y-1.5">
                    {orderDetails?.buyer_phone !== "" &&
                    orderDetails?.buyer_phone !== null ? (
                      <span>{orderDetails?.buyer_phone}</span>
                    ) : (
                      "n/a"
                    )}
                    <span>{orderDetails?.buyer_email}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-5 w-full">
                <div className="flexBetween gap-3 w-full border-b border-gray-300">
                  <div className="flexStart py-4">
                    <span className="text-gray-400 uppercase font-monaSemibold">
                      job description
                    </span>
                  </div>
                  <div className="flex items-end py-4">
                    <span className="text-gray-400 uppercase font-monaSemibold">
                      price
                    </span>
                  </div>
                </div>

                {/* yeh map lloop pr run hoga */}
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-3 border-b border-gray-300">
                  <div className="flex lg:py-4">
                    <span className="font-monaSemibold">
                      <span className="text-green-500">Service: </span>
                      {orderDetails?.service_name}
                      <br />
                      <span className="text-green-500">Package:</span>
                      {orderDetails?.package_name}
                    </span>
                  </div>
                  <div className="flex pb-4 lg:py-4">
                    <span className="font-monaSemibold">{`$${orderDetails?.order_price}`}</span>
                  </div>
                </div>
              </div>

              <div className="flex lg:items-center lg:justify-end">
                <div className="flex flex-col space-y-4">
                  <div className="flex lg:justify-end">
                    <p className="font-monaMedium text-gray-400">
                      SubTotal:
                      <span className="ml-4 text-gray-900 font-monaBold">
                        {`$${orderDetails?.order_price}`}
                      </span>
                    </p>
                  </div>

                  {!isDownloading && (
                    <button
                      id="btnDownload"
                      className="bg-primary flexBetween gap-3 text-white rounded-lg px-4 py-2 font-monaSemibold"
                      onClick={handleDownload}
                    >
                      Download PDF
                      <FileDown className="w-6" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceId;
