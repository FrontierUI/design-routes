// import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { currencyformator, getCookie } from '../func';
import CheckoutModalWrapper from './CheckoutModalWrapper';

const SMMPackage = ({ Packages }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (getCookie('token') !== undefined && getCookie('token') !== null) {
      setIsLoggedIn(true);
      var userDetails = JSON.parse(
        atob(atob(window.localStorage.getItem('loginSecret')))
      );
      setUserDetails(userDetails);
    }

    // Respond to the `storage` event
    function storageEventHandler(event) {
      if (localStorage.getItem('isLoggedIn') !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
    // Hook up the event handler
    window.addEventListener('storage', storageEventHandler);
    return () => {
      // Remove the handler when the component unmounts
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  return (
    <div className="flexy flex-col space-y-5 max-w-full lg:px-12">
      <div className="relative w-full campPackBan flexy p-5 lg:p-14">
        <div
          className="absolute w-full h-full rounded-lg -z-[1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/pricePackBlueBG.png)',
          }}
        />

        <div className="packageTop flexStart flex-col w-full h-full py-4 space-y-4">
          <div className="packInfo flexStart lg:items-center flex-col lg:flex-row lg:justify-between w-full text-white space-y-4">
            <div className="packTitle flexStart flex-col items-center justify-center lg:items-start lg:justify-start w-full space-y-3">
              <h1 className="text-5xl lg:text-[3.5rem] font-monaBold">
                {Packages[0]?.package_name}
              </h1>
              <p className="w-full text-base lg:text-lg lg:w-11/12">
                {Packages[0]?.package_details}
              </p>
            </div>
            <div className="packPricing flex flex-col items-end justify-end">
              <h1 className="text-8xl lg:text-9xl filsonHeavy leading-none">
                ${currencyformator(Packages[0]?.package_price)}
              </h1>
              <h4 className="text-xl font-monaSemibold uppercase">per month</h4>
            </div>
          </div>

          <div className="packageListItem flexStart text-white">
            <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40 gap-y-4">
              {[...JSON.parse(Packages[0].featured_extras)].map(
                ({ feature, included }, i) => (
                  <li className="flexStart" key={i}>
                    <div className="flexy space-x-2.5">
                      <img
                        src={
                          included
                            ? '/images/icons/roundCheckWhite.svg'
                            : '/images/icons/doublecheckgrey.svg'
                        }
                        className="img-fluid"
                        width={28}
                        alt=""
                      />
                      <span className="font-monaMedium text-md xl:text-xl">
                        {feature}
                      </span>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="w-full pt-4 max-w-full md:max-w-xs flexy lg:justify-start">
            {/* <Link to={'/'} className="flexy w-full lg:w-72">
              <button className="tpLGBtn w-full">Get Started</button>
            </Link> */}
            {isLoggedIn ? (
              <CheckoutModalWrapper
                orderData={{
                  service: 'Social Media Management',
                  package_id: Packages[0]?.package_id,
                  package_name: Packages[0]?.package_name,
                  order_amount: Packages[0]?.package_price,
                  user_id: userDetails?.id,
                  order_details: Packages[0]?.package_details,
                }}
                type={'white'}
              />
            ) : (
              <Link
                to="/auth/sign-in"
                state={{ from: '/products/social-media-management' }}
                className="flexy w-full lg:w-72"
              >
                <button className="whiteLGButton w-full">Get Started</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="relative flexy w-full h-full max-md:px-5">
        <div
          className="absolute hidden top-8 lg:block w-full h-full max-w-[50rem] bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/pricePackBG.svg)',
          }}
        />

        <div className="flexy flex-col w-full h-full relative z-[2]">
          <div className="flexy w-full text-center py-4 mt-4 text-slate-900">
            <h1 className="text-center font-monaBold text-4xl lg:text-5xl">
              Social Media Management
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-x-7 gap-y-6 w-full items-center justify-center">
            {Packages.filter(
              (p) => p.package_name !== Packages[0].package_name
            ).map((pkg, index) => (
              <div
                key={index}
                className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg"
              >
                <hr className="w-full absolute top-[8.5rem] left-0 h-[1.5px] bg-gray-400" />
                <hr className="w-full absolute top-[20.75rem] left-0 h-[1.5px] bg-gray-400" />

                <div className="flexy relative flex-col space-y-5 w-full">
                  <div className="flexy flex-col space-y-2 py-2 mt-6 text-slate-900">
                    <h2 className="text-4xl lg:text-4xl font-monaBold">
                      {pkg.package_name}
                    </h2>
                    <span className="text-md font-monaMedium">
                      {pkg.package_details}
                    </span>
                  </div>
                  <div className="flexy flex-col w-full text-slate-900 space-y-2.5 py-6">
                    <h1 className="filsonHeavy text-5xl">
                      ${currencyformator(pkg.package_price)}/
                      <span className="text-xl">project</span>
                    </h1>
                    <span className="text-md font-monaMedium">
                      {index === 0 && 'Fine Choice'}
                      {index === 1 && 'Best Choice'}
                      {index === 2 && 'Recommended Choice'}
                    </span>
                    <div className="flexy">
                      {/* <Link to={"/"} className="primaryLink">
                        Get Started
                      </Link> */}
                      {isLoggedIn ? (
                        <CheckoutModalWrapper
                          orderData={{
                            service: 'Social Media Management',
                            package_id: pkg?.package_id,
                            package_name: pkg?.package_name,
                            order_amount: pkg?.package_price,
                            user_id: userDetails?.id,
                            order_details: pkg?.package_details,
                          }}
                          type={'blue'}
                        />
                      ) : (
                        <Link
                          to="/auth/sign-in"
                          state={{ from: '/products/social-media-management' }}
                          className="primaryLink"
                        >
                          Get Started
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="flexy w-full">
                    <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900">
                      {[...JSON.parse(pkg.featured_extras)].map(
                        ({ feature, included }, i) => (
                          <li
                            className="flex items-center justify-start gap-x-2.5"
                            key={i}
                          >
                            <img
                              src={
                                included
                                  ? '/images/icons/doublecheckPrim.svg'
                                  : '/images/icons/doublecheckgrey.svg'
                              }
                              className="img-fluid w-5"
                              alt=""
                            />
                            <div className="flex flex-col space-y-1">
                              <span className="text-md leading-none">
                                {feature}
                                {console.log(feature)}
                              </span>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMMPackage;
