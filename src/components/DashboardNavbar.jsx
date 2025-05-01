import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AlignJustify, Search } from 'lucide-react';
import Avatar from './Avatar';

const DashboardNavbar = (props) => {
  const { onOpenSidenav, brandText } = props;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10); // trigger after 10px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl p-2 backdrop-blur-xl transition-all ${
        scrolled ? 'bg-white/80 shadow-md' : 'bg-white/10'
      }`}
    >
      <div className="ml-px">
        <div className="h-6 w-[224px] pt-1">
          <a className="text-sm font-normal" href=" ">
            Pages
            <span className="mx-1 text-sm "> / </span>
          </a>
          <Link className="text-sm font-normal capitalize" to="#">
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-gray-900">
          <Link
            to="#"
            className="font-bold capitalize hover:text-primary tracking-wider"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:w-[384px] md:flex-grow-0 md:gap-1 xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-gray-900 xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <Search className="h-4 w-4 text-gray-700" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-monaMedium text-gray-800 outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>
        <span
          className="xl:hidden flex cursor-pointer text-xl text-gray-900"
          onClick={onOpenSidenav}
        >
          <AlignJustify className="h-5 w-5" />
        </span>

        <Avatar />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
