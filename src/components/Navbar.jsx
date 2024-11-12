// import React from 'react';

import { Link } from 'react-router-dom';

import BrandLogo from '../assets/images/routeslogo.svg';
import { Menus } from '../contentData/utils';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <header className="h-16 xl:h-[4.5rem] text-lg font-semibold fixed inset-0 lg:top-7 flexy bg-white lg:rounded-full w-full xl:w-[78%] xl:left-[9.2%] shadow-lg">
      <nav className="px-3.5 lg:px-5 flexBetween w-full max-w-full mx-auto">
        <div className="itemsCenter gap-x-3 z-40 relative">
          <Link to="/">
            <img src={BrandLogo} className="w-32 lg:w-36" alt="" />
          </Link>
        </div>

        <ul className="gap-x-1 lg:itemsCenter hidden">
          {Menus.map((menu) => (
            <DesktopMenu key={menu.name} menu={menu} />
          ))}
        </ul>

        <div className="itemsCenter gap-x-5">
          <button
            aria-label="sign-in"
            className="bg-white/5 z-[999] relative px-8 py-1.5 shadow rounded-full itemsCenter"
          >
            Sign In
          </button>

          <div className="lg:hidden">
            <MobileMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
