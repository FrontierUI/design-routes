import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getCookie, checkRole } from '@/func';

import Toast from '@/components/Toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (getCookie('token') !== undefined && getCookie('token') !== null) {
      //user is already loggedin
      if (checkRole(getCookie('token')) === 'admin')
        navigate(`/dashboard/overview`, { replace: true });
      else navigate(`/dashboard/overview`, { replace: true });
    }

    // Respond to the `storage` eventAdd commentMore actions
    function storageEventHandler(event) {
      navigate(`/dashboard/overview`, { replace: true });
    }
    // Hook up the event handler
    window.addEventListener('storage', storageEventHandler);
    return () => {
      // Remove the handler when the component unmounts
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (
      email.trim() !== '' &&
      password.trim() !== '' &&
      username.trim() !== ''
    ) {
      const json = JSON.stringify({
        name: username.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=register`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            // Replace handleMessage with addToast
            addToast('success', response.data.message);

            setTimeout(() => {
              navigate(`/auth/sign-in`, { replace: true });
            }, 3000);
          } else {
            // Replace handleMessage with addToast
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      if (
        email.trim() === '' &&
        password.trim() === '' &&
        username.trim() === ''
      )
        // Replace handleMessage with addToast
        addToast(
          'error',
          'Please provide username, email, and password to register'
        );
      else if (username.trim() === '')
        // Replace handleMessage with addToast
        addToast('error', 'Please provide username to register');
      else if (email.trim() === '')
        // Replace handleMessage with addToast
        addToast('error', 'Please provide email to register');
      else if (password.trim() === '')
        // Replace handleMessage with addToast
        addToast('error', 'Please provide password to register');
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen relative">
        <section className="bg-primary lg:h-[110vh] lapy:h-screen relative hidden lg:w-1/2 lg:flex items-center justify-center z-[2]">
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat z-[1]"
            style={{ backgroundImage: 'url(/images/authE.svg)' }}
          />
          <div className="w-full relative top-0 lapy:top-10 p-12 z-[2]">
            <img src="/images/register.png" className="img-fluid" alt="" />
          </div>
        </section>

        <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-5 py-8 lg:pb-0 lg:pt-20">
          <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:py-5 lapy:pt-12 lapy:pb-4">
            <div className="w-full flexStart pl-1">
              <h1 className="font-monaBold text-4xl">Sign Up</h1>
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
              onSubmit={registerUser}
            >
              <div className="form-item w-full">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
              <div className="form-item w-full">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-oauth">
                <div className="form-oauthLabel">
                  <hr className="form-lhr" />
                  <span className="text-md text-slate-600">
                    Or Sign up with Google
                  </span>
                  <hr className="form-hr" />
                </div>

                <Link to={'/'} className="form-oauthBtn">
                  <img
                    src="/images/googleAuth.svg"
                    className="img-fluid"
                    width={40}
                    alt=""
                  />
                  <span className="text-lg font-medium">
                    Sign up with Google
                  </span>
                </Link>
              </div>

              <div className="w-full flexy">
                <button
                  type="submit"
                  className="w-full lg:w-4/5 py-2.5 bord transitAll scal105 text-white bg-primary font-monaSemibold text-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flexy gap-x-2 w-full">
              <span>Already have an account?</span>
              <Link to={'/auth/sign-in'} className="text-primary font-semibold">
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
