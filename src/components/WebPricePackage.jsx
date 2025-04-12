// import React from 'react';
import { Link } from "react-router-dom";
import { currencyformator } from "../func";
import CheckoutModalWrapper from "./CheckoutModalWrapper";

const WebPricePackage = ({ Packages }) => {
  return (
    <div className="flexy flex-col space-y-5 max-w-full lg:px-12">
      <div className="relative w-full campPackBan flexy p-5 lg:p-14">
        <div
          className="absolute w-full h-full rounded-lg -z-[1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/productsPages/lightBGE2.png)",
          }}
        />

        <div className="packageTop flexStart flex-col w-full h-full py-4 space-y-4">
          <div className="packInfo flexStart lg:items-center flex-col lg:flex-row lg:justify-between w-full text-gray-800 space-y-4">
            <div className="packTitle flexStart flex-col items-center justify-center lg:items-start lg:justify-start w-full space-y-3">
              <h1 className="text-5xl lg:text-[3.25rem] font-monaBold">
                {Packages[0]?.package_name}
              </h1>
              <p className="w-full text-base lg:text-lg lg:w-9/12">
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

          <div className="packageListItem flexStart text-gray-800">
            <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-28 gap-y-4">
              {[...JSON.parse(Packages[0]?.featured_extras)].map(
                ({ feature, included }, i) => (
                  <li className="flexStart" key={i}>
                    <div className="flexy space-x-2.5">
                      <img
                        src={
                          included
                            ? "/images/icons/roundCheckGray.svg"
                            : "/images/icons/roundCheckWhite.svg"
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
              {/* <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    Custom UI/UX
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    Responsive web development
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    CMS integration (Webflow, WordPress, Shopify, Squarespace
                    etc.)
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    E-commerce solutions
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    Website maintenance and support
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    SEO-Friendly development
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    24/7 timezone coverage
                  </span>
                </div>
              </li>
              <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    Turnaround times from 12 hours
                  </span>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="w-full pt-4 max-w-full md:max-w-xs flexy lg:justify-start">
            {/* <Link to={"/"} className="flexy w-full lg:w-72">
              <button className="tpLGBtn w-full">Get Started</button>
            </Link> */}
            <CheckoutModalWrapper
              orderData={{
                service: "Web Design And Development",
                package_id: Packages[0]?.package_id,
                package_name: Packages[0]?.package_name,
                order_amount: Packages[0]?.package_price,
                user_id: "user123",
                order_details: Packages[0]?.package_details,
              }}
              type={"white"}
            />
          </div>
        </div>
      </div>

      <div className="relative flexy w-full h-full max-md:px-5">
        <div
          className="absolute hidden lg:block top-8  w-full h-full max-w-[50rem] bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/productsPages/pricePackBG.svg)",
          }}
        />

        <div className="flexy flex-col w-full h-full relative z-[2]">
          <div className="flexy w-full text-center py-4 mt-4 text-slate-900">
            <h1 className="text-center font-monaBold text-4xl lg:text-5xl">
              Web Design & Development
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-x-7 gap-y-6 w-full items-center justify-center">
            {Packages.filter(
              (p) => p.package_name !== Packages[0].package_name
            ).map((pkg, index) => (
              <div className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg">
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
                      {index === 0 && "Fine Choice"}
                      {index === 1 && "Best Choice"}
                      {index === 2 && "Recommended Choice"}
                    </span>
                    <div className="flexy">
                      {/* <Link to={'/'} className="primaryLink">
                          Get Started
                        </Link> */}
                      <CheckoutModalWrapper
                        orderData={{
                          service: "Web Design And Development",
                          package_id: pkg?.package_id,
                          package_name: pkg?.package_name,
                          order_amount: pkg?.package_price,
                          user_id: "user123",
                          order_details: pkg?.package_details,
                        }}
                        type={"blue"}
                      />
                    </div>
                  </div>
                  <div className="flexy w-full">
                    <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900 p-3">
                      {[...JSON.parse(pkg.featured_extras)].map(
                        ({ feature, included }, i) => (
                          <li
                            className="flex items-center justify-start gap-x-2.5"
                            key={i}
                          >
                            <img
                              src={
                                included
                                  ? "/images/icons/doublecheckPrim.svg"
                                  : "/images/icons/doublecheckgrey.svg"
                              }
                              className="img-fluid w-5"
                              alt=""
                            />
                            <span className="text-md lg:text-lg">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg">
              <hr className="w-full absolute top-[8.5rem] left-0 h-[1.5px] bg-gray-400" />
              <hr className="w-full absolute top-[20.75rem] left-0 h-[1.5px] bg-gray-400" />

              <div className="flexy relative flex-col space-y-5 w-full">
                <div className="flexy flex-col space-y-2 py-2 mt-6 text-slate-900">
                  <h2 className="text-4xl lg:text-4xl font-monaBold">Basic</h2>
                  <span className="text-md font-monaMedium">
                    Good for Startups
                  </span>
                </div>
                <div className="flexy flex-col w-full text-slate-900 space-y-2.5 py-6">
                  <h1 className="filsonHeavy text-5xl">
                    $1,799/<span className="text-xl">project</span>
                  </h1>
                  <span className="text-md font-monaMedium">Fine Choice</span>
                  <div className="flexy">
                    <Link to={'/'} className="primaryLink">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flexy w-full">
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900 p-3">
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Turnaround times from 12 hours
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">Theme based</span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Website Pages</span>
                        <span>(7 pages)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Responsive web development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg leading-none">
                        CMS integration (Webflow, WordPress, Shopify,
                        Squarespace, etc.)
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Project Coverage Duration</span>
                        <span>(5 days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        SEO-Friendly development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Payment Integration
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Website maintenance and support
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        E-commerce solutions
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom UI/UX Design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg">
              <hr className="w-full absolute top-[8.5rem] left-0 h-[1.5px] bg-gray-400" />
              <hr className="w-full absolute top-[20.75rem] left-0 h-[1.5px] bg-gray-400" />

              <div className="flexy relative flex-col space-y-5 w-full">
                <div className="flexy flex-col space-y-2 py-2 mt-6 text-slate-900">
                  <h2 className="text-4xl lg:text-4xl font-monaBold">
                    Professional
                  </h2>
                  <span className="text-md font-monaMedium">
                    Perfect for Small Businesses
                  </span>
                </div>
                <div className="flexy flex-col w-full text-slate-900 space-y-2.5 py-6">
                  <h1 className="filsonHeavy text-5xl">
                    $2,999/<span className="text-xl">project</span>
                  </h1>
                  <span className="text-md font-monaMedium">Best Choice</span>
                  <div className="flexy">
                    <Link to={'/'} className="primaryLink">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flexy w-full">
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900 p-3">
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Turnaround times from 12 hours
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">Theme based</span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Website Pages</span>
                        <span>(15 pages)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Responsive web development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg leading-none">
                        CMS integration (Webflow, WordPress, Shopify,
                        Squarespace, etc.)
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Project Coverage Duration</span>
                        <span>(8 days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        SEO-Friendly development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Payment Integration
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Website maintenance and support
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        E-commerce solutions
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom UI/UX Design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg">
              <hr className="w-full absolute top-[8.5rem] left-0 h-[1.5px] bg-gray-400" />
              <hr className="w-full absolute top-[20.75rem] left-0 h-[1.5px] bg-gray-400" />

              <div className="flexy relative flex-col space-y-5 w-full">
                <div className="flexy flex-col space-y-2 py-2 mt-6 text-slate-900">
                  <h2 className="text-4xl lg:text-4xl font-monaBold">
                    Premium
                  </h2>
                  <span className="text-md font-monaMedium">
                    Excellent for Growing Businesses
                  </span>
                </div>
                <div className="flexy flex-col w-full text-slate-900 space-y-2.5 py-6">
                  <h1 className="filsonHeavy text-5xl">
                    $4,999/<span className="text-xl">project</span>
                  </h1>
                  <span className="text-md font-monaMedium">
                    Recommended Choice
                  </span>
                  <div className="flexy">
                    <Link to={'/'} className="primaryLink">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flexy w-full">
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900 p-3">
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Turnaround times from 12 hours
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">Theme based</span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Website Pages</span>
                        <span>(25+ pages)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Responsive web development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg leading-none">
                        CMS integration (Webflow, WordPress, Shopify,
                        Squarespace, etc.)
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Project Coverage Duration</span>
                        <span>(15 days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        SEO-Friendly development
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Payment Integration
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Website maintenance and support
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        E-commerce solutions
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom UI/UX Design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="flexy flex-col space-y-3 mt-6">
            <span className="text-lg">
              Get your own customized package now!
            </span>

            <div className="flexy w-full max-w-sm">
              <Link to={"/"} className="primaryLGLink flexy w-full">
                Customized Package
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WebPricePackage;
