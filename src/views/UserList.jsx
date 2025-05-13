import React, { act, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ListFilter } from 'lucide-react';
import DashboardBanner from '@/components/DashboardBanner';

import { formatDate, getCookie } from '@/func';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    fetchUsers();

    return () => {
      setUsers([]);
    };
  }, []);

  const fetchUsers = () => {
    const json = JSON.stringify({
      authorization: getCookie('token'),
      limit: limit,
      offset: offset,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_users`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setUsers(response.data.users);
          setTotalUsers(response.data.total_users);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const activateDeactivateUser = (user_id, action) => {
    const json = JSON.stringify({
      authorization: getCookie('token'),
      id: user_id,
      action: action.toString(),
    });

    axios
      .post(
        `${
          import.meta.env.VITE_BASE_API
        }/api.php?action=activate_deactivate_user`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          let tempUsers = [...users];
          tempUsers.find((user) => user.id === user_id).status = action;
          setUsers([...tempUsers]);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const ProfilePicture = ({ PictureUrl }) => {
    if (PictureUrl !== '' && PictureUrl !== null) {
      return (
        <img
          src={`${import.meta.env.VITE_BASE_API}${PictureUrl}`}
          className="w-10 h-10 img-fluid"
          alt=""
        />
      );
    } else {
      return (
        <img
          src="/images/icons/ProfAvatar.svg"
          className="w-10 h-10 img-fluid"
          alt=""
        />
      );
    }
  };

  const StatusBadge = ({ Verified, Status }) => {
    if (Verified === 1 && Status === 1) {
      return (
        <div className="bg-green-100 rounded-lg flexBetween text-green-500 text-center py-2 px-5 gap-4 w-2/3 pointer-events-none text-sm">
          <span>Active</span>
        </div>
      );
    } else if (Verified === 1 && Status === 0) {
      return (
        <div className="bg-red-100 rounded-lg flexBetween text-red-500 text-center py-2 px-5 gap-4 w-2/3 pointer-events-none text-sm">
          <span>Banned</span>
        </div>
      );
    } else if (Verified === 0 && (Status === 1 || Status === 0)) {
      return (
        <div className="bg-blue-100 rounded-lg flexBetween text-blue-500 text-center py-2 px-5 gap-4 w-2/3 pointer-events-none text-sm">
          <span>Not verified</span>
        </div>
      );
    }
  };

  const ActionButton = ({ User_id, Verified, Status }) => {
    if (Verified === 1 && Status === 1) {
      return (
        <button
          className="bg-red-100 rounded-lg flexBetween text-red-500 text-center py-2 px-5 gap-4 w-2/3 text-sm"
          onClick={() => activateDeactivateUser(User_id, 0)}
        >
          <span>Block</span>
        </button>
      );
    } else if (Verified === 1 && Status === 0) {
      return (
        <button
          className="bg-green-100 rounded-lg flexBetween text-green-500 text-center py-2 px-5 gap-4 w-2/3 text-sm"
          onClick={() => activateDeactivateUser(User_id, 1)}
        >
          <span>Un-block</span>
        </button>
      );
    }
  };

  return (
    <div className="userList w-full h-full relative">
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
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
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
                  <th className="rounded-l-lg p-4 text-left text-md font-monaMedium">
                    User ID
                  </th>
                  <th className="p-4 lg:pl-7 text-left text-md font-monaMedium">
                    Full Name
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Email Address
                  </th>
                  <th className="p-4 text-left text-md font-monaMedium">
                    Join At
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Status
                  </th>
                  <th className="rounded-r-lg p-4 text-left text-md font-monaMedium">
                    Action
                  </th>
                </tr>
              </thead>

              {users.length > 0 ? (
                <tbody className="w-full whitespace-nowrap">
                  {(searchText.length === 0
                    ? [...users]
                    : [
                        ...users.filter((user) =>
                          user.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        ),
                      ]
                  ).map((user, index) => {
                    return (
                      <tr
                        className={
                          index % 2 === 0
                            ? 'text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg'
                            : 'text-sm w-full transitAll hover:bg-teal-100'
                        }
                        key={index}
                      >
                        <td className="rounded-l-lg p-4 text-left">
                          {user.id}
                        </td>
                        <td className="p-4 max-sm:pr-10">
                          <div className="flex items-center gap-3">
                            <ProfilePicture PictureUrl={user.profile_picture} />
                            <span className="text-left">{user.name}</span>
                          </div>
                        </td>
                        <td className="text-left p-4 max-sm:pr-12">
                          {user.email}
                        </td>
                        <td className="p-4 text-left">
                          {formatDate(user.created_at)}
                        </td>
                        <td className="rounded-r-lg p-4">
                          <StatusBadge
                            Verified={user.verified}
                            Status={user.status}
                          />
                        </td>
                        <td className="rounded-r-lg p-4">
                          <ActionButton
                            User_id={user.id}
                            Verified={user.verified}
                            Status={user.status}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody className="w-full whitespace-nowrap">
                  <tr className="text-sm w-full transitAll hover:bg-[#e3e2ff] rounded-lg">
                    <td className="p-4 text-center" colSpan={6}>
                      No account created yet
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

export default UserList;
