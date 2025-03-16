// import React from 'react';

const SignIn = () => {
  return (
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
        <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-40 lg:pt-32">
          <div className="w-full flexStart pl-1">
            <h1 className="font-monaBold text-4xl">Sign In</h1>
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
