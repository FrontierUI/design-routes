// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-primary w-full h-full px-5 lg:px-12">
      <div className="flexy flex-col w-full text-white lg:pt-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
          <div className="w-full relative flex flex-col items-start justify-start">
            <div className="relative flex flex-col w-full space-y-5">
              <Link to="/" className="w-full">
                <img
                  src="/images/whiteLogo.svg"
                  className="img-fluid w-[120px] lg:w-[150px] transitAll scal105"
                  alt=""
                />
              </Link>

              <div className="flex gap-x-2.5">
                <Link
                  to="https://www.linkedin.com/company/routesdesign"
                  target="_blank"
                  className="transitAll scal105"
                >
                  <img
                    src="/images/icons/linkedInBLue.svg"
                    className="img-fluid"
                    width={40}
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/routes.design/"
                  target="_blank"
                  className="transitAll scal105"
                >
                  <img
                    src="/images/icons/instagramBlue.svg"
                    className="img-fluid"
                    width={40}
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.facebook.com/Routes.Design/"
                  target="_blank"
                  className="transitAll scal105"
                >
                  <img
                    src="/images/icons/facebookBlue.svg"
                    className="img-fluid"
                    width={40}
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.youtube.com/@Routes.Design"
                  target="_blank"
                  className="transitAll scal105"
                >
                  <img
                    src="/images/icons/linkedInBLue.svg"
                    className="img-fluid"
                    width={40}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full relative flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start space-y-5">
              <h3 className="text-2xl font-monaSemibold hover:text-gray-300">
                Products
              </h3>
              <ul className="space-y-1.5">
                <li className="hover:text-gray-300">
                  <Link to="/products/creative-campaign">
                    Creative Campaign
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/products/brand-identity-design">
                    Brand Identity Design
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/products/social-media-management">
                    Social Media Management
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/products/web-design-and-development">
                    Web Design & Development
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/products/app-design-and-development">
                    App Design & Development
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/products/presentation-design">
                    Presentation Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full relative flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start space-y-5">
              <h3 className="text-2xl font-monaSemibold hover:text-gray-300">
                About Us
              </h3>
              <ul className="space-y-1.5">
                <li className="hover:text-gray-300">
                  <Link to="/about-us">About Us</Link>
                </li>

                <li className="hover:text-gray-300">
                  <Link to="/our-work">Our Work</Link>
                </li>

                <li className="hover:text-gray-300">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link to="/book-a-call">Book a Call</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full relative flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start space-y-5">
              <h3 className="text-2xl font-monaSemibold hover:text-gray-300">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-300">
                  <span>6301 Gaston Ave. Dallas, TX 75214</span>
                </li>

                <li className="hover:text-gray-300">
                  <Link to="mailto:contact@routes.design" target="_blank">
                    contact@routes.design
                  </Link>
                </li>

                <li className="hover:text-gray-300">
                  <Link to="tel:+18179484842" target="_blank">
                    +1-(817)-948-4842
                  </Link>
                </li>
                <li className="hover:text-gray-300">
                  <Link
                    to="/book-a-call"
                    className="mt-3 flex items-center"
                    target="_blank"
                  >
                    <button className="bg-white text-primary rounded-full py-2 px-6 font-monaSemibold transitAll scal105 text-lg">
                      Book a Call
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between max-lg:space-y-2">
          <div className="flexStart flex-col mt-4 font-monaMedium space-y-2">
            <ul className="flexStart flex-col lg:flex-row lg:items-center lg:justify-between text-sm">
              <li className="mr-4">
                <Link to="privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li className="mr-4">
                <Link to="terms-conditions" className="hover:text-gray-300">
                  Terms Conditions
                </Link>
              </li>
              <li>
                <Link to="refunds-policy" className="hover:text-gray-300">
                  Refunds Policy
                </Link>
              </li>
            </ul>

            <span className="text-sm monaRegular hover:text-gray-300">
              © 2024 Routes.Design. All Rights Reserved.
            </span>
          </div>

          <div className="flexStart lg:items-center lg:justify-between gap-x-4 pt-4 relative lg:right-32">
            <img
              src="/images/icons/upw.png"
              width={90}
              className="img-fluid"
              alt=""
            />
            <img
              src="/images/icons/bark.svg"
              width={90}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
