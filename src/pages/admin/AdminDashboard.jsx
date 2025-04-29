import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AdminSidebar from '../../components/AdminSidebar';
// import routes from '../../contentData/routes';
import dashSidebar from '../../contentData/dashSidebar';
import DashboardNavbar from '../../components/DashboardNavbar';

const AdminDashboard = (props) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => setIsOpen(!isOpen);

  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('Overview');

  useEffect(() => {
    window.addEventListener('resize', () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  useEffect(() => {
    getActiveRoute(dashSidebar);
  }, [location.pathname]);

  const getActiveRoute = (dashSidebar) => {
    let activeRoute = 'Main Dashboard';

    for (let i = 0; i < dashSidebar.length; i++) {
      if (
        window.location.href.indexOf(dashSidebar[i].href + '/dashboard') !== -1
      ) {
        setCurrentRoute(dashSidebar[i].hrefName);
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (dashBoard) => {
    let activeNavbar = false;
    for (let i = 0; i < dashBoard.length; i++) {
      if (window.location.href.indexOf(dashBoard[i].href) !== -1) {
        return dashBoard[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/dashboard') {
        return (
          <Route path={`/${prop.href}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="dashBoard flex relative w-full h-full">
      <AdminSidebar open={open} onClose={() => setOpen(false)} />

      <div className="w-full h-full bg-lightPrimary">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
            <DashboardNavbar
              onOpenSidenav={() => setOpen(true)}
              logoText={'Routes Design'}
              brandText={currentRoute}
              secondary={getActiveNavbar(dashSidebar)}
              {...rest}
            />

            <div className="mx-auto mb-auto h-full min-h-[88vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(dashSidebar)}

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
