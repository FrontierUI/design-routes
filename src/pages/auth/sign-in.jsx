import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

import { getCookie, setCookie, checkRole } from '@/func';

import Toast from '@/components/Toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// emails

//  email =--> info@routes.desgin
//  passw =--> B>E?i9a]C

//  email =--> support@routes.desgin
//  passw =--> 3JW/QbL0Qi|

//  email =--> verify@routes.desgin
//  passw =--> g0:HO@=EYS

// Google Login Button Component
const GoogleLoginButton = ({ addToast, removeToast, location, navigate }) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const json = JSON.stringify({
        access_token: tokenResponse.access_token,
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=google_login`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            addToast('success', response.data.message);

            setTimeout(() => {
              if (typeof location.state?.from !== 'undefined') {
                setCookie('token', response.data.token, 1);

                window.localStorage.setItem('isLoggedIn', 'true');
                window.localStorage.setItem(
                  'loginSecret',
                  response.data.secret
                );

                navigate(location.state?.from, { replace: true });
              } else {
                setCookie('token', response.data.token, 1);

                window.localStorage.setItem('isLoggedIn', 'true');
                window.localStorage.setItem(
                  'loginSecret',
                  response.data.secret
                );

                if (checkRole(response.data.token) === 'admin')
                  navigate(`/dashboard`, { replace: true });
                else navigate(`/dashboard`, { replace: true });
              }
            }, 2000);
          } else {
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
    },
    scope: 'profile email',
  });

  return (
    <div className="form-oauthBtn" onClick={() => login()}>
      <img
        src="/images/googleAuth.svg"
        className="img-fluid"
        width={40}
        alt=""
      />
      <span className="text-lg font-medium">Sign in with Google</span>
    </div>
  );
};

const SignIn = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (getCookie('token') !== undefined && getCookie('token') !== null) {
      //user is already loggedin
      if (checkRole(getCookie('token')) === 'admin')
        navigate(`/dashboard`, { replace: true });
      else navigate(`/dashboard`, { replace: true });
    }
  }, []);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const validateUser = (e) => {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '') {
      const json = JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=login`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            addToast('success', response.data.message);

            setTimeout(() => {
              if (typeof location.state?.from !== 'undefined') {
                setCookie('token', response.data.token, 1);

                window.localStorage.setItem('isLoggedIn', 'true');
                window.localStorage.setItem(
                  'loginSecret',
                  response.data.secret
                );
                window.dispatchEvent(new Event('storage'));

                navigate(location.state?.from, { replace: true });
              } else {
                setCookie('token', response.data.token, 1);
                if (checkRole(response.data.token) === 'admin')
                  navigate(`/dashboard`, { replace: true });
                else navigate(`/dashboard`, { replace: true });

                window.localStorage.setItem('isLoggedIn', 'true');
                window.localStorage.setItem(
                  'loginSecret',
                  response.data.secret
                );
                window.dispatchEvent(new Event('storage'));
              }
            }, 2000);
          } else {
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      if (email.trim() === '' && password.trim() === '')
        addToast('error', 'Please provide email and password to signin');
      else if (email.trim())
        addToast('error', 'Please provide email to signin');
      else if (password.trim() === '')
        addToast('error', 'Please provide password to signin');
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
            <img src="/images/login.png" className="img-fluid" alt="" />
          </div>
        </section>

        <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-5 py-8 lg:pb-0 lg:pt-20">
          <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:pt-5 lapy:pt-16">
            <div className="w-full flexStart pl-1">
              <h1 className="font-monaBold text-4xl">Sign In</h1>
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
              onSubmit={validateUser}
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
              <div className="form-forget">
                <div className="flexy gap-x-1">
                  <input type="checkbox" />
                  <span className="text-[15px]">Remember me</span>
                </div>
                <Link
                  to={'/auth/forgot-password'}
                  className="flex text-primary font-monaSemibold"
                >
                  Forget Password
                </Link>
              </div>

              <div className="form-oauth">
                <div className="form-oauthLabel">
                  <hr className="form-lhr" />
                  <span className="text-md text-slate-600">
                    Or Sign in with Google
                  </span>
                  <hr className="form-hr" />
                </div>

                {/* <Link to={'/'} className="form-oauthBtn">
                <img
                  src="/images/googleAuth.svg"
                  className="img-fluid"
                  width={40}
                  alt=""
                  />
                <span className="text-lg font-medium">Sign in with Google</span>
              </Link> */}

                <GoogleOAuthProvider clientId="1003705889448-lbljd7fb2aeelnavgbuev859u9re9pom.apps.googleusercontent.com">
                  <GoogleLoginButton
                    addToast={addToast}
                    removeToast={removeToast}
                    location={location}
                    navigate={navigate}
                  />
                </GoogleOAuthProvider>
              </div>

              <div className="w-full flexy">
                <button
                  type="submit"
                  className="w-full lg:w-4/5 py-2.5 bord transitAll scal105 text-white bg-primary font-monaSemibold text-lg"
                >
                  Sign In
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

export default SignIn;
