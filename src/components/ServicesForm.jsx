import React from 'react';
import { Link } from 'react-router-dom';

import { Phone } from 'lucide-react';

const ServicesForm = () => {
  return (
    <div className="relative w-full h-full py-6 lg:py-12 bg-primary">
      <div
        className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/formETrans.svg)' }}
      />

      <div className="flexy relative w-full h-full lg:py-6 px-5 lg:px-12">
        <div className="w-full h-full grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6 relative flexStart flex-col w-4/5 md:w-full space-y-5 lg:space-y-12 text-white">
            <div className="flexStart flex-col space-y-5 w-full">
              <h3 className="font-monaSemibold text-2xl">Connect with Us</h3>
              <div className="flexStart flex-col leading-loose">
                <h2 className="font-monaLight text-5xl">We're Ready to</h2>
                <h2 className="font-monaLight text-5xl">
                  Explore Opportunities
                </h2>
              </div>
            </div>

            <div className="flexStart flex-col space-y-6 lg:space-y-12 w-full">
              <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                <div className="flexStart flex-col w-full lg:w-10/12">
                  <h1 className="font-monaBold text-6xl">55%</h1>
                  <h3 className="font-monaRegular text-xl">
                    Years in Business
                  </h3>
                </div>
                <div className="flexStart flex-col w-full">
                  <h1 className="font-monaBold text-6xl">300+</h1>
                  <h3 className="font-monaRegular text-xl">Clients Served</h3>
                </div>
              </div>
              <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                <div className="flexStart flex-col w-full lg:w-10/12">
                  <h1 className="font-monaBold text-6xl">1200+</h1>
                  <h3 className="font-monaRegular text-xl">
                    Successfull Projects
                  </h3>
                </div>
                <div className="flexStart flex-col w-full">
                  <h1 className="font-monaBold text-6xl">96%</h1>
                  <h3 className="font-monaRegular text-xl">
                    Repeat Customer Rate
                  </h3>
                </div>
              </div>
            </div>

            <Link
              to={'/'}
              className="flexy gap-x-2 transitAll scal105 py-2.5 px-6 rounded-full font-monaSemibold text-xl bg-white text-primary"
            >
              <Phone className="w-6 h-6" />
              <span className="pr-1">Call Us</span>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-6 relative w-4/5 md:w-full h-full">
            <form className="service-form">
              <div className="service-formItem">
                <label className="service-formLabel">Full Name</label>
                <input
                  required
                  placeholder="Enter your Name"
                  type="text"
                  className="service-formInput"
                />
              </div>
              <div className="service-formItem">
                <label className="service-formLabel">Email Address</label>
                <input
                  required
                  placeholder="Enter your Email"
                  type="email"
                  className="service-formInput"
                />
              </div>
              <div className="service-formItem">
                <label className="service-formLabel">Company Name</label>
                <input
                  placeholder="https://yourcompany.xyz"
                  type="text"
                  className="service-formInput"
                />
              </div>
              <div className="service-formItem">
                <label className="service-formLabel">Phone</label>
                <input
                  required
                  placeholder="+008 654 231"
                  type="tel"
                  className="service-formInput"
                />
              </div>

              <div className="service-formSelect">
                <label htmlFor="prodServices" className="service-formLabel">
                  Select your service
                </label>
                <select
                  id="prodServices"
                  name="prodServices"
                  required
                  className="service-select w-full"
                >
                  <option value="" className="service-selectOpt">
                    Select your service
                  </option>
                  <option
                    value="creativeCampaign"
                    className="service-selectOpt"
                  >
                    Creative Campaign
                  </option>
                  <option value="brandIdentity" className="service-selectOpt">
                    Brand Identity & Design
                  </option>
                  <option value="socialMM" className="service-selectOpt">
                    Social Media Management
                  </option>
                  <option value="webDD" className="service-selectOpt">
                    Web Design & Development
                  </option>
                  <option value="appDD" className="service-selectOpt">
                    App Design & Development
                  </option>
                  <option
                    value="presentationDesign"
                    className="service-selectOpt"
                  >
                    Presentation Design
                  </option>
                </select>
              </div>

              <div className="service-formSelect">
                <label className="service-formLabel">Message</label>
                <textarea
                  rows={5}
                  className="service-formInput"
                  placeholder="Briefly tell us about your project..."
                />
              </div>
              <div className="service-formBtn">
                <button type="submit" className="service-button">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm;
