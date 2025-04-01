// import React from 'react';
import { Link } from 'react-router-dom';

const PresentationPackage = ({Packages}) => {
  return (
    <div className="flexy flex-col space-y-5 max-w-full lg:px-12">
      <div className="relative w-full campPackBan flexy p-5 lg:p-14">
        <div
          className="absolute w-full h-full rounded-lg -z-[1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/lightBGE2.png)',
          }}
        />

        <div className="packageTop flexStart flex-col w-full h-full py-4 space-y-4">
          <div className="packInfo flexStart lg:items-center flex-col lg:flex-row lg:justify-between w-full text-gray-800 space-y-4">
            <div className="packTitle flexStart flex-col items-center justify-center lg:items-start lg:justify-start w-full space-y-3">
              <h1 className="text-5xl lg:text-[3.8rem] font-monaBold">
              {Packages[0].package_name}
              </h1>
              <p className="w-full text-base lg:text-lg lg:w-9/12">
                {Packages[0].package_details}
              </p>
            </div>
            <div className="packPricing flex flex-col items-end justify-end">
              <h1 className="text-8xl lg:text-9xl filsonHeavy leading-none">
                ${Packages[0].package_price}
              </h1>
              <h4 className="text-xl font-monaSemibold uppercase">per month</h4>
            </div>
          </div>

          <div className="packageListItem flexStart text-gray-800">
            <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40 gap-y-4">
              {
                [...JSON.parse(Packages[0].featured_extras)].map(({feature, included}, i)=>(
                  <li className="flexStart" key={i}>
                    <div className="flexy space-x-2.5">
                      <img
                        src={included ? "/images/icons/roundCheckGray.svg" : "/images/icons/doublecheckgrey.svg"}
                        className="img-fluid"
                        width={28}
                        alt=""
                      />
                      <span className="font-monaMedium text-md xl:text-xl">
                      {feature}
                      </span>
                    </div>
                  </li>
                ))
              }
              {/* <li className="flexStart">
                <div className="flexy space-x-2.5">
                  <img
                    src="/images/icons/roundCheckGray.svg"
                    className="img-fluid"
                    width={28}
                    alt=""
                  />
                  <span className="font-monaMedium text-md xl:text-xl">
                    Custom presentation templates
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
                    Slide design and layout
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
                    Infographic and data visualization
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
                    Copywriting and content structuring
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
                    Interactive elements
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
                    Presentation revisions and updates
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
            <Link to={'/'} className="flexy w-full lg:w-72">
              <button className="tpLGBtn w-full">Get Started</button>
            </Link>
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
              Presentation Design
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-x-7 gap-y-6 w-full items-center justify-center">
            {
              Packages.filter(p=>p.package_name !== Packages[0].package_name).map((pkg, index)=>(
                <div className="col-span-12 lg:col-span-4 relative w-full bg-white p-3.5 shadow-drop-5 rounded-lg">
                  <hr className="w-full absolute top-[8.5rem] left-0 h-[1.5px] bg-gray-400" />
                  <hr className="w-full absolute top-[20.75rem] left-0 h-[1.5px] bg-gray-400" />

                  <div className="flexy relative flex-col space-y-5 w-full">
                    <div className="flexy flex-col space-y-2 py-2 mt-6 text-slate-900">
                      <h2 className="text-4xl lg:text-4xl font-monaBold">{pkg.package_name}</h2>
                      <span className="text-md font-monaMedium">
                        {pkg.package_details}
                      </span>
                    </div>
                    <div className="flexy flex-col w-full text-slate-900 space-y-2.5 py-6">
                      <h1 className="filsonHeavy text-5xl">
                        ${pkg.package_price}/<span className="text-xl">project</span>
                      </h1>
                      <span className="text-md font-monaMedium">Fine Choice</span>
                      <div className="flexy">
                        <Link to={'/'} className="primaryLink">
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="flexy w-full">
                      <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900">
                      {
                          [...JSON.parse(pkg.featured_extras)].map(({feature, included}, i)=>(
                            <li className="flex items-center justify-start gap-x-2.5" key={i}>
                              <img
                                src={included ? "/images/icons/doublecheckPrim.svg" : "/images/icons/doublecheckgrey.svg"}
                                className="img-fluid w-5"
                                alt=""
                              />
                              <span className="text-md lg:text-lg">
                                {feature}
                              </span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }

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
                    $1,199/<span className="text-xl">project</span>
                  </h1>
                  <span className="text-md font-monaMedium">Fine Choice</span>
                  <div className="flexy">
                    <Link to={'/'} className="primaryLink">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flexy w-full">
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900">
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
                      <span className="text-md lg:text-lg">
                        Standard slide design and layout
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Slide Screen Count</span>
                        <span>(12 Slides)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Presentation Coverage Duration</span>
                        <span>(2 Days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Infographic and data visualization
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Copywriting and content structuring
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom presentation templates
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Interactive elements
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
                    $1,999/<span className="text-xl">project</span>
                  </h1>
                  <span className="text-md font-monaMedium">Best Choice</span>
                  <div className="flexy">
                    <Link to={'/'} className="primaryLink">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flexy w-full">
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900">
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
                      <span className="text-md lg:text-lg">
                        Standard slide design and layout
                      </span>
                    </li>

                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Slide Screen Count</span>
                        <span>(20 Slides)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Presentation Coverage Duration</span>
                        <span>(4 Days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Infographic and data visualization
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Copywriting and content structuring
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom presentation templates
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckgrey.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Interactive elements
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
                    $2,499/<span className="text-xl">project</span>
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
                  <ul className="flex items-start justify-center flex-col space-y-3 py-4 text-slate-900">
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
                      <span className="text-md lg:text-lg">
                        Standard slide design and layout
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Slide Screen Count</span>
                        <span>(50+ Slides)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <div className="flex flex-col space-y-0 text-md lg:text-lg">
                        <span>Presentation Coverage Duration</span>
                        <span>(8 Days)</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Infographic and data visualization
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Copywriting and content structuring
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Custom presentation templates
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-x-2.5">
                      <img
                        src="/images/icons/doublecheckPrim.svg"
                        className="img-fluid w-5"
                        alt=""
                      />
                      <span className="text-md lg:text-lg">
                        Interactive elements
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          <div className="flexy flex-col space-y-3 mt-6">
            <span className="text-lg">
              Get your own customized package now!
            </span>

            <div className="flexy w-full max-w-sm">
              <Link to={'/'} className="primaryLGLink flexy w-full">
                Customized Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationPackage;
