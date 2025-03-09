// import React from 'react';

const SignIn = () => {
  return (
    <div className="relative flex min-h-screen">
      <section className="bg-primary h-screen hidden lg:w-1/2 lg:flex items-center justify-center">
        <div className="w-full">
          <img src="/images/sin.png" className="img-fluid" alt="" />
        </div>
      </section>

      <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-3.5 py-8 lg:py-0">
        <div className="w-full flex flex-col items-start justify-start  space-y-5 lg:px-8 pt-48 lg:pt-28">
          <div className="w-full hidden lg:block items-start justify-start">
            <img
              src="/images/routeslogo.svg"
              className="img-fluid w-32 lg:w-40"
              alt=""
            />
          </div>

          <form className="w-full flex flex-col items-center justify-center  space-y-5">
            <div className="form-item w-full">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form-item w-full">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter Your Password"
              />
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
        </div>
      </section>
    </div>
  );
};

export default SignIn;
