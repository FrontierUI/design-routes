import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FileDown, Package, Pencil, Ticket } from 'lucide-react';

const ProfileOverview = ({ TotalOrders, TotalTickets }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    let loginSecret = window.localStorage.getItem('loginSecret');
    if (loginSecret !== undefined) {
      setUserDetails(JSON.parse(atob(atob(loginSecret))));
    }
  }, []);

  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-6 w-full h-full  mx-auto">
      <div className="md:row-span-2 col-span-12 md:col-span-6 w-full bg-white relative rounded-lg">
        <div className="sm:p-5 p-3 flex flex-col relative w-full">
          <div className="relative flex items-start justify-between w-full">
            <div className="flex items-center gap-3">
              {userDetails.profile_picture !== null &&
              userDetails.profile_picture !== undefined &&
              userDetails.profile_picture !== '' ? (
                <img
                  src={`${import.meta.env.VITE_BASE_API}${
                    userDetails.profile_picture
                  }`}
                  className="img-fluid w-12"
                  alt=""
                />
              ) : (
                <img
                  src="/images/icons/ProfAvatar.svg"
                  className="img-fluid w-12"
                  alt=""
                />
              )}
              <div className="flex flex-col leading-none">
                <h2 className="font-monaBold text-xl capitalize">
                  {userDetails.name}
                </h2>
                <span className="font-monaLight text-sm">
                  {userDetails.email}
                </span>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <Link
                to={'/dashboard/user-profile'}
                className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
              >
                <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <Link
          to={'/dashboard/view-order-history'}
          className="justStartCenter gap-3 p-3"
        >
          <Package className="w-7 h-7" />
          <p>
            Orders: <span className="font-monaBold text-lg">{TotalOrders}</span>
          </p>
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 w-full bg-white rounded-lg">
        <Link
          to={'/dashboard/view-all-tickets'}
          className="justStartCenter gap-3 p-3"
        >
          <Ticket className="w-7 h-7" />
          <p>
            Tickets:{' '}
            <span className="font-monaBold text-lg">{TotalTickets}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfileOverview;
