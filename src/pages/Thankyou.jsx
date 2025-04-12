import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { currencyformator } from "../func";

const Thankyou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { orderData, paymentResult } = location.state || {};

  if (!orderData || !paymentResult) {
    navigate('/', { replace: true});
  }

  const CurrentDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };

  const GetUserName = (type="upper") => {
    if (window.localStorage.getItem("loginSecret")) {
      var userDetails = JSON.parse(
        atob(atob(window.localStorage.getItem("loginSecret")))
      );
      return type === "upper" ? (userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1)) : (userDetails.name);
    }
  };

  return (
    <>
      <Helmet>
        <title>User name Thank you for subscribing us | Routes.Design</title>
        <meta
          name="description"
          content="Browse our portfolio to see how Routes.Design has helped brands and agencies with innovative and impactful design solutions."
        />
      </Helmet>

      <div className="relative w-full h-full thnksHero">
        <div className="relative w-full h-full bg-primary text-white">
          <div className="flexy relative w-full h-full px-5 lg:px-12 pt-20 pb-12">
            <div className="flexy flex-col relative h-full w-full lg:pt-12">
              <div className="flexy w-16 h-16 rounded-full text-primary p-3 bg-white max-lg:mt-5">
                <img
                  src="images/icons/Checkmark.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="flexy flex-col space-y-8 w-full lg:w-3/4 text-center py-10">
                <h1 className="text-5xl font-monaBold">Thank you {GetUserName()}</h1>
                <p className="text-xl">
                  Thank you {GetUserName("lower")} for buying our product
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative h-full flexy">
            <div className="absolute flexy -bottom-5 z-10 bg-primary w-10 h-10 rotate-[45deg]" />
          </div>
        </div>

        <div className="relative w-full h-full userOrderDetails">
          <div className="w-full h-full relative flexy px-5 lg:px-12 lg:pt-20 pt-12 pb-6 lg:pb-12">
            <div className="w-full lg:w-3/5 flexy flex-col py-5 space-y-6">
              <div className="flexy text-center">
                <h3 className="text-xl lg:text-2xl font-monaSemibold">
                {GetUserName()} | We received your order we will contact at shortly
                </h3>
              </div>

              <div className="justStartCenter bg-gray-200 w-full p-5 rounded-lg">
                <div className="lg:p-5 flex flex-wrap items-center justify-start gap-3 lg:gap-5 w-full">
                  <div className="flex flex-col space-y-2">
                    <p className="font-monaLight">Order Id</p>
                    <p className="font-monaMedium">{paymentResult?.order_id}</p>
                  </div>

                  <div className="justStartCenter py-2 border-x border-gray-300">
                    <div className="flex flex-col space-y-2 px-2 lg:px-5">
                      <p className="font-monaLight">Date</p>
                      <p className="font-monaMedium">{CurrentDate()}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <p className="font-monaLight">Total</p>
                    <p className="font-monaMedium">
                      ${currencyformator(orderData?.order_amount)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="justStartCenter bg-gray-200 w-full p-5 rounded-lg">
                <div className="flexStart w-full flex-col lg:p-5 space-y-8">
                  <h4 className="text-2xl font-monaSemibold max-lg:pt-2">
                    Order Details
                  </h4>

                  <ul className="flex flex-col space-y-2 w-full max-lg:pb-3">
                    <li className="font-monaSemibold flex flex-wrap items-center justify-between pb-2">
                      <p>Product</p>
                      <span>Total</span>
                    </li>

                    <li className="flex flex-wrap items-center justify-between border-y border-dashed border-gray-400 py-2">
                      <p>
                        {orderData?.service + " - " + orderData?.package_name}
                      </p>
                      <span>${currencyformator(orderData?.order_amount)}</span>
                    </li>

                    <li className="flex flex-wrap items-center justify-between pt-1">
                      <p>Total</p>
                      <span>${currencyformator(orderData?.order_amount)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
