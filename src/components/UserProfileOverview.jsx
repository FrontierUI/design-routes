import React from 'react';

const UserProfileOverview = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-6 w-full h-full  mx-auto">
      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-4">
              <img
                src="/images/icons/ProfAvatar.svg"
                className="img-fluid w-12"
                alt=""
              />
              <div className="flex flex-col leading-none">
                <div className="flex gap-2">
                  <span>User ID</span>
                  <span className="font-monaLight">487452</span>
                </div>
                <h2 className="font-monaBold text-xl">Jane Name</h2>
              </div>
            </div>

            <div className="flexy flex-col space-y-3">
              <span>Account Status</span>
              <button className="bg-green-100 text-green-500 py-2 px-8 rounded-lg">
                Active
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:row-span-2 col-span-12 md:col-span-6 w-full bg-white relative rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="justStartCenter flex-col space-y-4 md:space-y-9 w-full">
            <div className="flexBetween gap-4 w-full">
              <span>Role</span>
              <span className="text-green-500">Standard</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Last Visit</span>
              <span className="text-green-500">Feb 19, 2027</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Role</span>
              <span className="text-green-500">Role</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Joined At</span>
              <span className="text-green-500">Jan 20, 2027</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="justStartCenter flex-col space-y-4 w-full">
            <div className="flexBetween gap-4 w-full">
              <span>Current Order</span>
              <span className="text-green-500">548778</span>
            </div>
            <div className="flexBetween gap-4 w-full">
              <span>Current Order</span>
              <span className="text-green-500">548778</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileOverview;
