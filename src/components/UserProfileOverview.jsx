import React from "react";
import { formatDate } from "../func/index";

const UserProfileOverview = ({ UserDetails, LatestOrders }) => {
  const ProfilePicture = ({ PictureUrl }) => {
    if (PictureUrl !== "" && PictureUrl !== null) {
      return (
        <img
          src={`${import.meta.env.VITE_BASE_API}${PictureUrl}`}
          className="img-fluid w-12"
          alt=""
        />
      );
    } else {
      return (
        <img
          src="/images/icons/ProfAvatar.svg"
          className="img-fluid w-12"
          alt=""
        />
      );
    }
  };

  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-6 w-full h-full  mx-auto">
      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-4">
              {/* <img
                src="/images/icons/ProfAvatar.svg"
                className="img-fluid w-12"
                alt=""
              /> */}
              <ProfilePicture PictureUrl={UserDetails?.profile_picture} />
              <div className="flex flex-col leading-none">
                <div className="flex gap-2">
                  <span>User ID</span>
                  <span className="font-monaLight">{UserDetails?.id}</span>
                </div>
                <h2 className="font-monaBold text-xl">{UserDetails?.name}</h2>
              </div>
            </div>

            <div className="flexy flex-col space-y-3">
              <span>Account Status</span>
              <div className="bg-green-100 text-green-500 py-2 px-8 rounded-lg">
                {UserDetails?.status === 0 ? "Blocked" : "Active"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:row-span-2 col-span-12 md:col-span-6 w-full bg-white relative rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="justStartCenter flex-col space-y-4 md:space-y-9 w-full">
            <div className="flexBetween gap-4 w-full">
              <span>Email Verified</span>
              {UserDetails?.verified ? (
                <span className="text-green-500">Verified</span>
              ) : (
                <span className="text-red-500">Not Verified</span>
              )}
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Role</span>
              <span className="text-green-500">{UserDetails?.role}</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Email</span>
              <span className="text-green-500">{UserDetails?.email}</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Registration Method</span>
              <span className="text-green-500">
                {UserDetails?.registration_method}
              </span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Joined At</span>
              <span className="text-green-500">
                {formatDate(UserDetails?.created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          {LatestOrders?.length > 0 ? (
            <div className="justStartCenter flex-col space-y-4 w-full">
              {LatestOrders.map((order, index) => (
                <div className="flexBetween gap-4 w-full">
                  <div><span className="text-green-500">{order.service_name}</span> - {order.package_name}</div>
                  <span className="text-green-500">${order.order_price}</span>
                </div>
              ))}
              {/* <div className="flexBetween gap-4 w-full">
                <span>Current Order</span>
                <span className="text-green-500">548778</span>
              </div>
              <div className="flexBetween gap-4 w-full">
                <span>Current Order</span>
                <span className="text-green-500">548778</span>
              </div> */}
            </div>
          ) : (
            <div className="justStartCenter flex-col space-y-4 w-full">
              <div className="text-center gap-4 w-full">
                <span>No Order created yet</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileOverview;
