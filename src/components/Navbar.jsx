import { useState } from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from '../assets/images/routeslogo.svg';
import { Menus } from '../contentData/utils';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpenMain, setIsOpenMain] = useState(false);

  const toggleDrawer = () => {
    setIsOpenMain(!isOpenMain);
  };

  return (
    <header className="h-16 xl:h-[4.5rem] text-lg font-semibold fixed inset-0 xl:top-7 flexy bg-white z-20 lg:rounded-full w-full xl:w-[90%] xl:left-[4.5%] shadow-lg">
      <nav className="px-3.5 lg:px-5 flexBetween w-full max-w-full mx-auto">
        <div className="itemsCenter gap-x-3 relative">
          <Link
            to="/"
            onClick={() => toggleDrawer()}
            className="transform duration-300 xl:hover:scale-105 transition-all"
          >
            <img src={BrandLogo} className="w-32 lg:w-36" alt="" />
          </Link>
        </div>

        <ul className="gap-x-1 lg:itemsCenter hidden">
          {Menus.map((menu) => (
            <DesktopMenu key={menu.name} menu={menu} />
          ))}
        </ul>

        <div className="itemsCenter gap-x-5">
          <Link
            className="flexy transform duration-300 xl:hover:scale-105 transition-all"
            to="/"
            onClick={() => toggleDrawer()}
            target="_blank"
          >
            <button
              aria-label="get-a-demo"
              className="bg-primary text-white z-[5] relative px-6 py-2 shadow rounded-full itemsCenter"
            >
              Get a Demo
            </button>
          </Link>

          <div className="lg:hidden">
            <MobileMenu Menus={Menus} isOpenMain={isOpenMain} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
