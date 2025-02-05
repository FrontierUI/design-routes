// import React from 'react';

const SignUp = () => {
  return (
    <div className="flex min-h-screen relative">
      <section className="bg-primary hidden lg:w-1/2 items-center justify-center lg:flex">
        <div className="w-full h-full">
          <img src="/images/sin.png" className="img-fluid h-full" alt="" />
        </div>
      </section>

      <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-start px-3 py-8 lg:py-0">
        <div className="w-full flex items-start justify-start flex-col space-y-5 lg:px-8 pt-10 lg:pt-28">
          <div className="w-full block items-start justify-start">
            <img
              src="/images/routeslogo.svg"
              className="img-fluid w-32 lg:w-40"
              alt=""
            />
          </div>
          <form className="w-full flex items-center justify-center flex-col space-y-5">
            <div className="form-item w-full">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Your Full Name"
              />
            </div>
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
            <div className="form-item w-full">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Confirm Your Password"
              />
            </div>

            <div className="w-full lg:ml-20">
              <button
                type="submit"
                className="w-full lg:w-3/4 py-2.5 bord transitAll scal105 text-white bg-primary font-monaSemibold text-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
