import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AdminSidebar from '../../components/AdminSidebar';
import routes from '../../contentData/routes';
import DashboardNavbar from '../../components/DashboardNavbar';

const AdminDashboard = (props) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => setIsOpen(!isOpen);

  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('Main Dashboard');

  useEffect(() => {
    window.addEventListener('resize', () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = 'Main Dashboard';

    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + '/' + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="dashBoard flex relative w-full h-full">
      {/* <AdminSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}

      <AdminSidebar open={open} onClose={() => setOpen(false)} />

      <div className="w-full h-full bg-lightPrimary">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
            <DashboardNavbar
              onOpenSidenav={() => setOpen(true)}
              logoText={'Routes Design'}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />

            <div className="mx-auto mb-auto h-full min-h-[88vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/dashboard"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
