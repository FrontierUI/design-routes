import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutModal from "./CheckoutModal";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Replace with your Stripe publishable key

const CheckoutModalWrapper = ({ orderData, type }) => (
    <Elements stripe={stripePromise}>
      <CheckoutModal orderData={orderData} type={type} />
    </Elements>
  );
  
  export default CheckoutModalWrapper;