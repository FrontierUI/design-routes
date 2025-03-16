import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex min-h-screen relative">
      <section className="bg-primary lg:h-[110vh] lapy:h-screen relative hidden lg:w-1/2 lg:flex items-center justify-center z-[2]">
        <div
          className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat z-[1]"
          style={{ backgroundImage: 'url(/images/authE.svg)' }}
        />
        <div className="w-full relative top-8 lapy:top-10 p-12 z-[2]">
          <img src="/images/regi.svg" className="img-fluid" alt="" />
        </div>
      </section>

      <section className="w-full h-full lg:w-1/2 relative flex flex-col items-center justify-center px-5 py-8 lg:pb-0 lg:pt-20">
        <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:py-5 lapy:pt-12 lapy:pb-4">
          <div className="w-full flexStart pl-1">
            <h1 className="font-monaBold text-4xl">Sign Up</h1>
          </div>

          <form className="w-full flex flex-col items-center justify-center  space-y-5">
            <div className="form-item w-full">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Your Name"
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
                <span className="text-lg font-medium">Sign up with Google</span>
              </Link>
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
  );
};

export default SignUp;
