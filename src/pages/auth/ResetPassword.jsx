import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Toast from '../../components/Toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (
      params.token !== undefined &&
      params.token !== null &&
      params.token.toString().trim() !== ''
    )
      validateToken(params.token);
    else {
      navigate(`/`, { replace: true });
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
          if (response.data.success === 'false') {
            addToast('error', response.data.message);

            setTimeout(() => {
              // navigate(`/admin/login`, { replace: true });
              navigate(`/`, { replace: true });
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      addToast('error', 'Request is invalid');
    }
  };
  const resetPassword = (e) => {
    e.preventDefault();

    if (
      password.trim() !== '' &&
      confirmpassword.trim() !== '' &&
      password === confirmpassword
    ) {
      const json = JSON.stringify({
        token: params.token,
        newpassword: password.trim(),
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=resetpassword`,
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

            setTimeout(() => {
              navigate(`/auth/sign-in`, { replace: true });
            }, 2000);
          } else {
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else {
      if (password.trim() === '' && confirmpassword.trim() === '')
        addToast('error', 'Please provide password and confirmation password');
      else if (
        password.trim() !== '' &&
        confirmpassword.trim() !== '' &&
        password.trim() !== confirmpassword.trim()
      )
        addToast('error', 'Password and confirmation password do not match');
      else if (password.trim() === '')
        addToast('error', 'Please provide password');
      else if (confirmpassword.trim() === '')
        addToast('error', 'Please provide confirmation password');
    }
  };

  return (
    <div className="flex min-h-screen relative">
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
          <div className="w-full flexStart pl-1 flex-col">
            <h1 className="font-monaBold text-4xl">Reset Your Password</h1>
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
            onSubmit={resetPassword}
          >
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

            <div className="form-item w-full">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Re-enter Your Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="w-full flexy">
              <button
                type="submit"
                className="w-full lg:w-4/5 py-2.5 bord transitAll scal105 text-white bg-primary font-monaSemibold text-lg"
              >
                Set New Password
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
  );
};

export default ResetPassword;
