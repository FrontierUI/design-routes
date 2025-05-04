import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import { getCookie, setCookie, checkRole } from '@/func';

import Toast from '@/components/Toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Verify = () => {
  const location = useLocation();

  const params = useParams();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (getCookie('token') !== undefined && getCookie('token') !== null) {
      //user is already loggedin
      if (checkRole(getCookie('token')) === 'admin')
        navigate(`/dashboard/overview`, { replace: true });
      else navigate(`/dashboard/overview`, { replace: true });
    } else {
      if (
        params.token !== undefined &&
        params.token !== null &&
        params.token.toString().trim() !== ''
      )
        validateToken(params.token);
      else {
        navigate(`/`, { replace: true });
      }
    }
  }, []);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const validateToken = (token) => {
    if (token.trim() !== '') {
      const json = JSON.stringify({ token: token.trim() });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=validate_token`,
          JSON.stringify({ params: json }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            setTimeout(() => {
              VerifyUser(token.trim());
            }, 2000);
          } else if (response.data.success === 'false') {
            addToast('error', response.data.message); // Replaced handleMessage

            setTimeout(() => {
              // navigate(`/admin/login`, { replace: true });
              navigate(`/`, { replace: true });
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      addToast('error', 'Request is invalid'); // Replaced handleMessage
    }
  };

  const VerifyUser = (token) => {
    if (token.trim() !== '') {
      const json = JSON.stringify({ verify_token: token.trim() });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=verify_user`,
          JSON.stringify({ params: json }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          if (response.data.success === 'false') {
            addToast('error', response.data.message); // Replaced handleMessage

            setTimeout(() => {
              // navigate(`/admin/login`, { replace: true });
              navigate(`/`, { replace: true });
            }, 3000);
          } else if (response.data.success === 'true') {
            addToast('success', response.data.message); // Replaced handleMessage

            setTimeout(() => {
              // navigate(`/admin/`, { replace: true });
              navigate(`/`, { replace: true });
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      addToast('error', 'Request is invalid'); // Replaced handleMessage
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative flex min-h-screen">
        <section className="bg-primary h-screen relative hidden lg:w-1/2 lg:flex items-center justify-center z-[2]">
          <div
            className="absolute top-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[1]"
            style={{ backgroundImage: 'url(/images/authE.svg)' }}
          />
          <div className="w-full relative top-16 p-12 z-[2]">
            <img src="/images/login.svg" className="img-fluid" alt="" />
          </div>
        </section>

        <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-5 py-8 lg:pb-0 lg:pt-20">
          <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:pt-5 lapy:pt-16">
            <h5 className="font-monaBold text-4xl pt-28">
              Verifying your email ...
            </h5>
            <p className="text-muted">
              We are verifying your email. Please Wait
            </p>

            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Verify;
