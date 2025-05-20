import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from '/images/routeslogo.svg';
import { Menus } from '@/contentData/utils';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Avatar from './Avatar';

const Navbar = () => {
  const [isOpenMain, setIsOpenMain] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Respond to the `storage` event
    function storageEventHandler(event) {
      if (localStorage.getItem('isLoggedIn') !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
    // Hook up the event handler
    window.addEventListener('storage', storageEventHandler);
    return () => {
      // Remove the handler when the component unmounts
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpenMain(!isOpenMain);
  };

  return (
    <header className="h-16 xl:h-[4.5rem] text-lg font-semibold fixed inset-0 xl:top-7 flexy bg-white z-20 xl:rounded-full w-full xl:w-[94%] xl:left-[3%] shadow-lg">
      <nav className="px-2.5 lg:px-5 flexBetween w-full max-w-full mx-auto">
        <div className="itemsCenter gap-x-3 relative">
          <Link
            to="/"
            onClick={() => toggleDrawer()}
            className="transform duration-300 xl:hover:scale-105 transition-all"
          >
            <img src={BrandLogo} className="max-lg:w-40 lg:w-36" alt="" />
          </Link>
        </div>

        <ul className="gap-x-1 lg:itemsCenter hidden">
          {Menus.map((menu) => (
            <DesktopMenu key={menu.name} menu={menu} />
          ))}
        </ul>

        <div className="itemsCenter gap-x-3 lg:gap-x-5">
          <Link
            className="hidden lg:flex items-center justify-center lg:transitAll lg:scal105"
            to="https://koalendar.com/e/meet-with-routes-design"
            onClick={() => toggleDrawer()}
            target="_blank"
          >
            <button
              aria-label="get-a-demo"
              className="bg-primary hidden lg:flex text-white lg:hover:shadow-drop-4 px-6 py-2 shadow rounded-full itemsCenter"
            >
              Get a demo
            </button>
          </Link>

          {isLoggedIn ? (
            <Avatar />
          ) : (
            <Link
              className="flexy transitAll scal105 lg:hover:shadow-drop-4 bg-primary text-white px-6 py-2 shadow rounded-full itemsCenter"
              to="/auth/sign-in"
            >
              Sign in
            </Link>
          )}

          <div className="lg:hidden">
            <MobileMenu Menus={Menus} isOpenMain={isOpenMain} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
