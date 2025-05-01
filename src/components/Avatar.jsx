import { LogOut, Settings, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { eraseCookie } from '../func';

const Avatar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = () => {
    eraseCookie('token');

    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('loginSecret');
    window.dispatchEvent(new Event('storage'));

    navigate(`/`, { replace: true });
  };

  return (
    <div className="relative inline-block group min-w-8">
      <div className="flex items-center cursor-pointer">
        <img
          src="/images/icons/ProfAvatar.svg"
          alt="Profile"
          className="w-10 h-10 img-fluid rounded-full shadow"
        />
        {/* <ChevronDown className="w-4 h-4 text-white" /> */}
      </div>
      {/* <img src="/images/icons/avatar.png" className="img-fluid w-12" alt="" /> */}

      <div className="absolute right-0 mt-1 w-48 bg-stone-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top pointer-events-none group-hover:pointer-events-auto">
        <div className="py-1">
          <Link
            href="#account"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            <User className="w-4 h-4 mr-2" /> Account
          </Link>
          <Link
            href="#settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Link>
          <hr className="my-1" />
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
