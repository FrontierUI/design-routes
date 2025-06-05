import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { LogOut, Settings, User } from 'lucide-react';

import { eraseCookie } from '../func';

const Avatar = () => {
  const navigate = useNavigate();

  const [profilePicture, setProfilePicture] = useState(null);
  const [registrationMethod, setregistrationMethod] = useState(null);

  useEffect(() => {
    if (
      window.localStorage.getItem('loginSecret') !== null &&
      window.localStorage.getItem('loginSecret') !== undefined
    ) {
      let temp = JSON.parse(
        atob(atob(window.localStorage.getItem('loginSecret')))
      );
      setProfilePicture(temp['profile_picture']);
      setregistrationMethod(temp['registration_method']);
    }

    // Define event handlerAdd commentMore actions
    const handleCustomStorageEvent = (event) => {
      // console.log('Custom event triggered:', event.detail);
      // alert(`Custom event received with message: ${event.detail.message}`);

      if (localStorage.getItem('loginSecret') !== null) {
        let temp = JSON.parse(
          atob(atob(window.localStorage.getItem('loginSecret')))
        );
        setProfilePicture(temp['profile_picture']);
        setregistrationMethod(temp['registration_method']);
      }
    };

    // Add event listenerAdd commentMore actions
    window.addEventListener('myCustomStorageEvent', handleCustomStorageEvent);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener(
        'myCustomStorageEvent',
        handleCustomStorageEvent
      );
    };
  }, []);

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
        {profilePicture !== '' && profilePicture !== null ? (
          <img
            src={
              registrationMethod === 'website'
                ? `${import.meta.env.VITE_BASE_API}${profilePicture}`
                : `${(profilePicture.startsWith("http://") || profilePicture.startsWith("https://")) ? profilePicture : `${import.meta.env.VITE_BASE_API}${profilePicture}`}`
            }
            className="w-10 h-10 img-fluid rounded-full shadow"
            alt="Profile"
          />
        ) : (
          <img
            src="/images/icons/ProfAvatar.svg"
            className="w-10 h-10 img-fluid rounded-full shadow"
            alt="Profile"
          />
        )}
      </div>

      <div className="absolute right-0 mt-1 w-48 bg-stone-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top pointer-events-none group-hover:pointer-events-auto">
        <div className="py-1">
          <Link
            to="#account"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            <User className="w-4 h-4 mr-2" /> Account
          </Link>
          <Link
            to={'/dashboard/settings'}
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
