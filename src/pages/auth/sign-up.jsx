import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      <section className="bg-primary hidden lg:w-1/2 items-center justify-center lg:flex">
        <div className="flexy w-full h-full">
          <img
            src="/images/sin.png"
            className="w-full h-full img-fluid object-cover"
            alt=""
          />
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex items-start justify-center flex-col p-5 py-10 lg:py-0">
        <div className="w-full flex items-start justify-start flex-col space-y-6 lg:px-8">
          <div className="w-full hidden lg:block items-start justify-start">
            <img
              src="/images/routeslogo.svg"
              className="img-fluid w-40 h-full object-cover"
              alt=""
            />
          </div>
          <form className="w-full flexy flex-col space-y-5">
            <div className="form-item w-full">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-item w-full">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-item w-full">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-item w-full">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
