import { Link } from 'react-router-dom';

import { ChevronDown, Phone } from 'lucide-react';

import Typewriting from '@/components/Typewriting';
import CounterNumbers from '@/components/CounterNumbers';

const ServicesForm = () => {
  return (
    <div className="relative w-full h-full py-6 lg:py-12 bg-primary">
      <div
        className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/formETrans.svg)' }}
      />

      <div className="flexy relative w-full h-full lg:py-6 px-5 lg:px-12">
        <div className="w-full h-full grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6 relative flexStart flex-col w-4/5 sm:w-full space-y-5 lg:space-y-12 text-white">
            <div className="flexStart flex-col space-y-5 w-full">
              <h3 className="font-monaSemibold text-2xl">Connect with us</h3>
              <div className="flexStart flex-col space-y-2">
                <h2 className="font-monaLight text-5xl">We're ready to</h2>
                <h2 className="font-monaLight text-5xl min-h-12 max-sm:min-h-24">
                  <Typewriting text="explore opportunities" speed={40} />
                </h2>
              </div>
            </div>

            <div className="flexStart flex-col space-y-6 lg:space-y-12 w-full">
              <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                <div className="flexStart flex-col w-full lg:w-10/12">
                  <h1 className="font-monaBold text-6xl">5+</h1>
                  <h3 className="font-monaRegular text-xl">
                    Years in business
                  </h3>
                </div>
                <div className="flexStart flex-col w-full">
                  <h1 className="font-monaBold text-6xl">300+</h1>
                  <h3 className="font-monaRegular text-xl">Clients served</h3>
                </div>
              </div>
              <div className="flexStart flex-col lg:flex-row w-full max-lg:gap-y-5 lg:gap-x-10">
                <div className="flexStart flex-col w-full lg:w-10/12">
                  <h1 className="font-monaBold text-6xl">800+</h1>
                  <h3 className="font-monaRegular text-xl">
                    Successfull projects
                  </h3>
                </div>
                <div className="flexStart flex-col w-full">
                  <h1 className="font-monaBold text-6xl">89%</h1>
                  <h3 className="font-monaRegular text-xl">
                    Repeat customer rate
                  </h3>
                </div>
              </div>
            </div>

            <Link
              to={'/'}
              className="flexy gap-x-2 transitAll scal105 py-2.5 px-6 rounded-full font-monaSemibold text-xl bg-white text-primary"
            >
              <Phone className="w-6 h-6" />
              <span className="pr-1">Call us</span>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-6 relative w-4/5 sm:w-full h-full">
            <form className="service-form">
              <div className="service-formItem">
                <label className="service-formLabel">Full name</label>
                <input
                  required
                  placeholder="Enter your name"
                  type="text"
                  className="service-formInput"
                />
              </div>
              <div className="service-formItem">
                <label className="service-formLabel">Email address</label>
                <input
                  required
                  placeholder="Enter your email"
                  type="email"
                  className="service-formInput"
                />
              </div>
              <div className="service-formItem">
                <label className="service-formLabel">Company name</label>
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
                  placeholder="+1 (310) 555-4099"
                  type="tel"
                  className="service-formInput"
                />
              </div>

              <div className="relative w-full service-formSelect">
                <label htmlFor="prodServices" className="service-formLabel">
                  Select your service
                </label>
                <select
                  id="prodServices"
                  name="prodServices"
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
                <div className="absolute bottom-[9px] right-2 flex items-center">
                  <ChevronDown className="w-7 h-7" />
                </div>
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
