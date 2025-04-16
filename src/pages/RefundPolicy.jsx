import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Routes.Design</title>
        <meta
          name="description"
          content="Read Routes.Design's terms and conditions to understand how we collect, use, and protect your personal information."
        />
      </Helmet>

      <Navbar />

      <div className="relative w-full h-full">
        <div className="flexy w-full h-full py-6 lg:pt-12 px-5 lg:px-12">
          <div className="itemsStart flex-col w-full mt-6 lg:mt-20 lg:mb-6">
            <div className="flexStart flex-col max-lg:mt-12">
              <h1 className="text-4xl font-monaBold">Routes.Design</h1>
              <h1 className="text-2xl font-monaBold">Refund Policy</h1>
            </div>

            <div className="flexStart flex-col space-y-3 lg:space-y-6 w-full lg:w-4/5 mt-8">
              <div className="flexStart flex-col space-y-2 lg:space-y-3">
                <h4 className="text-lg monaSemibold uppercase">introduction</h4>
                <p className="text-sm">
                  All payments are secured by Stripe. The client may request a
                  refund no longer than 7 days after the first transaction. We
                  guarantee a full refund of the subscription and trial
                  purchased on
                  <Link target="_blank" to={'/'}>
                    <b> Routes.Design </b>
                  </Link>
                  website.
                </p>
                <p className="text-sm">
                  <Link target="_blank" to={'/'}>
                    <b> Routes.Design Ltd. </b>
                  </Link>
                  may reject the refund request in the following cases:
                </p>
                <ol className="flex flex-col items-start space-y-1.5 list-inside list-decimal text-sm">
                  <li>
                    When the client tries to hack the data or damages company’s
                    services, team, assets, reputation.
                  </li>
                  <li>
                    When the client has the intention of re-selling
                    <Link target="_blank" to={'/'}>
                      <b> Routes.Design </b>
                    </Link>
                    Product Services.
                  </li>
                  <li>
                    When client’s account was used for the fraud actions
                    (affiliate fee fraud, etc).
                  </li>
                </ol>
              </div>

              <div className="flex flex-col space-y-2 lg:space-y-3 items-start justify-start">
                <h4 className="text-lg monaSemibold">Procedure of Refund</h4>
                <p className="text-sm">
                  The client should contact
                  <Link target="_blank" to={'/'}>
                    <b> routes.design Routes.Design Ltd. </b>
                  </Link>
                  by
                  <Link
                    target="_blank"
                    to="mailto:contact@routes.design"
                    className="font-font-monaSemibold"
                  >
                    <b> contact@routes.design </b>
                  </Link>
                  email about a refund.
                </p>
                <p className="text-sm">Email message should:</p>
                <ol className="flex flex-col items-start space-y-1.5 list-decimal ml-4 text-sm">
                  <li>Be sent from the payment email.</li>
                  <li>Include the date of the transaction;</li>
                </ol>
                <p className="text-sm">
                  <Link target="_blank" to={'/'}>
                    <b> routes.design, Routes.Design Ltd. </b>
                  </Link>
                  may take up to 3 business days to review refund request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RefundPolicy;
