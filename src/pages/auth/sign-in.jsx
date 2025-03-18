import { Link } from 'react-router-dom';

// emails

//  email =--> info@routes.desgin
//  passw =--> B>E?i9a]C

//  email =--> support@routes.desgin
//  passw =--> 3JW/QbL0Qi|

//  email =--> verify@routes.desgin
//  passw =--> g0:HO@=EYS

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
        <div className="w-full flex flex-col items-center justify-start  space-y-5 lg:px-8 pt-28 lg:pt-5 lapy:pt-16">
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

              <Link to={'/'} className="form-oauthBtn">
                <img
                  src="/images/googleAuth.svg"
                  className="img-fluid"
                  width={40}
                  alt=""
                />
                <span className="text-lg font-medium">Sign in with Google</span>
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

export default SignIn;
