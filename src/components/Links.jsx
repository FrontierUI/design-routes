/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DashIcon from '@/components/DashIcon';
// chakra imports

export function SidebarLinks(props) {
  let location = useLocation();

  const { dashSidebar } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (dashSidebar) => {
    return dashSidebar.map((route, index) => {
      if (route.layout === '/dashboard') {
        return (
          <Link key={index} to={route.layout + '/' + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? 'font-bold text-primary duration-300 hover:text-primary'
                      : 'font-medium text-gray-700 duration-300 hover:text-primary'
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? 'font-bold text-primary'
                      : 'font-medium text-gray-900 duration-300 hover:text-primary hover:font-bold'
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-primary" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(dashSidebar);
}

export default SidebarLinks;
