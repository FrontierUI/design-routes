import { Fragment, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import AdminSidebar from '@/components/AdminSidebar';

import { dashSidebar } from '@/contentData/dashSidebar';
import DashboardNavbar from '@/components/DashboardNavbar';

// import { getCookie } from '../../func';

const AdminDashboard = (props) => {
  // const navigate = useNavigate();
  const { ...rest } = props;

  const params = useParams();
  const location = useLocation();

  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('Overview');

  useEffect(() => {
    // if (getCookie('token') === undefined && getCookie('token') === null)
    //   navigate(`/auth/sign-in`, { replace: true });

    window.addEventListener('resize', () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  useEffect(() => {
    getActiveRoute(dashSidebar);
  }, [location.pathname]);

  const getActiveRoute = (dashSidebar) => {
    let activeRoute = 'Overview';
    for (let i = 0; i < dashSidebar.length; i++) {
      if (
        window.location.href.indexOf(
          dashSidebar[i].layout + '/' + dashSidebar[i].path
        ) !== -1
      ) {
        setCurrentRoute(dashSidebar[i].name);
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (dashSidebar) => {
    let activeNavbar = false;
    for (let i = 0; i < dashSidebar.length; i++) {
      if (
        window.location.href.indexOf(
          dashSidebar[i].layout + dashSidebar[i].path
        ) !== -1
      ) {
        return dashSidebar[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (dashSidebar) => {
    if (
      params.page !== undefined &&
      params.page !== null &&
      params.page.toString().trim() !== ''
    ) {
      return dashSidebar.map((prop, index) => {
        if (prop.layout === '/dashboard' && prop.path === params.page) {
          return <Fragment key={index}>{prop.component}</Fragment>;
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  return (
    <div className="dashBoard flex w-full h-full">
      <AdminSidebar open={open} onClose={() => setOpen(false)} />

      <div className="w-full h-full bg-lightPrimary">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[290px] lapy:ml-[300px]">
          <div className="relative h-full w-full">
            <DashboardNavbar
              onOpenSidenav={() => setOpen(true)}
              logoText={'Routes Design'}
              brandText={currentRoute}
              secondary={getActiveNavbar(dashSidebar)}
              {...rest}
            />

            <div className="mx-auto mb-auto w-full relative min-h-[88vh] p-2 md:pr-2">
              {getRoutes(dashSidebar)}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
