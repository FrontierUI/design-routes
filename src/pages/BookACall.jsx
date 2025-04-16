import { Helmet } from 'react-helmet-async';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const BookACall = () => {
  return (
    <div className="relative w-full h-full bookAcall">
      <Helmet>
        <title>Schedule a Consultation with Routes.Design</title>
        <meta
          name="description"
          content="Book a call with Routes.Design to discuss how our design services can elevate your brand and meet your creative needs."
        />
      </Helmet>
      <Navbar />
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 w-full h-full -z-[1] bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/productsPages/lightBGE2.png)',
          }}
        />

        <div className="w-full max-w-full items-center mx-auto px-5 lg:px-12">
          <div className="w-full flex flex-wrap items-center max-md:pt-24">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="w-full h-full flex-col sm:max-w-md lg:max-w-xl space-y-3 md:space-y-5">
                <h1 className="font-monaBold tracking-wider text-5xl lg:text-8xl">
                  Let’s work <br /> together!
                </h1>
                <div className="flex flex-col space-y-2">
                  <p className="lg:text-lg">Know what you want? Great</p>
                  <p className="lg:text-lg">Got questions? Even better</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="itemsStart w-full flex-col space-y-5 text-gray-900 py-10 mt-24">
                <div className="itemsStart">
                  <h1 className="text-3xl font-monaBold">
                    Tell us about your design needs:
                  </h1>
                </div>

                <form className="itemsStart flex-col space-y-4 w-full text-gray-900">
                  <div className="contact-item">
                    <label className="contact-label">Full Name</label>
                    <input
                      className="contact-input"
                      placeholder="Enter your Name"
                      type="text"
                    />
                  </div>

                  <div className="contact-item">
                    <label className="contact-label">Email Address</label>
                    <input
                      className="contact-input"
                      placeholder="Enter your Email"
                      type="email"
                    />
                  </div>

                  <div className="contact-item">
                    <label className="contact-label">Company Name</label>
                    <input
                      className="contact-input"
                      placeholder="Enter your Company Name"
                      type="text"
                    />
                  </div>

                  <div className="contact-textarea">
                    <label className="contact-label">Comment</label>
                    <textarea
                      className="contact-input"
                      rows="4"
                      placeholder="Leave your Message here..."
                      type="text"
                    />
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="py-2.5 px-8 bg-white text-primary rounded-full text-lg font-monaSemibold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full pb-6">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default BookACall;
