import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { getCookie, checkRole } from '@/func';

import Toast from '@/components/Toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (getCookie('token') !== undefined && getCookie('token') !== null) {
      //user is already loggedin
      if (checkRole(getCookie('token')) === 'admin')
        navigate(`/projects`, { replace: true });
      else navigate(`/projects`, { replace: true });
    }
  }, []);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const sendResetLink = (e) => {
    e.preventDefault();

    if (email.trim() !== '') {
      const json = JSON.stringify({ email: email.trim() });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=forgotpassword`,
          JSON.stringify({ params: json }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            addToast('success', response.data.message);
            //console.log("token: ", response.data.token);

            setTimeout(() => {
              navigate(`/`, { replace: true });
            }, 2000);
          } else {
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      addToast('error', 'Please provide your email to reset password');
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
            <img
              src="/images/forgetPassword.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </section>

        <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-5 py-8 lg:pb-0 lg:pt-20">
          <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:py-5 lapy:pt-12 lapy:pb-4">
            <div className="w-full flexStart pl-1 flex-col">
              <h1 className="font-monaBold text-4xl">Forget Your Password</h1>
              <h6>
                Enter your email and we will send you a link to reset your
                password.
              </h6>
            </div>

            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
              />
            ))}

            <form
              className="w-full flex flex-col items-center justify-center  space-y-5"
              onSubmit={sendResetLink}
            >
              <div className="form-item w-full">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="w-full flexy">
                <button
                  type="submit"
                  className="w-full lg:w-4/5 py-2.5 bord transitAll scal105 text-white bg-primary font-monaSemibold text-lg"
                >
                  Send Password Reset Link
                </button>
              </div>
            </form>

            <div className="flexy gap-x-2 w-full">
              <span>Don't have an account?</span>
              <Link to={'/auth/sign-up'} className="text-primary font-semibold">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
