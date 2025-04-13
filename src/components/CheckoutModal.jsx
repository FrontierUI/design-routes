import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

import Toast from './Toast';
import { useNavigate } from 'react-router-dom';

const CheckoutModal = ({ orderData, type }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [toasts, setToasts] = useState([]);

  const stripe = useStripe();
  const elements = useElements();

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Open/close modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setError(null); // Reset error when closing
  };

  // Handle payment submission
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe is not initialized.');
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    try {
      // Create payment method
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });

      if (paymentMethodError) {
        setError(paymentMethodError.message);
        setLoading(false);
        return;
      }

      var json = JSON.stringify({
        service: orderData.service,
        package_id: orderData.package_id,
        package_name: orderData.package_name,
        order_amount: orderData.order_amount,
        method: 'stripe',
        payment_method_id: paymentMethod.id,
        user_id: orderData.user_id,
        order_details: orderData.order_details,
      });

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=save_order`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            addToast('success', response.data.message);
            toggleModal(); // Close modal on success

            setTimeout(() => {
              navigate('/thankyou', {
                replace: true,
                state: {
                  orderData,
                  paymentResult: {
                    payment_intent_id: response.data.payment_intent_id,
                    message: response.data.message,
                    order_id: response.data.order_id,
                  },
                },
              });
            }, 2000);
          } else {
            addToast('error', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Buy Now Button */}
      {type === 'white' && (
        <button
          className="flexy w-full lg:w-72 whiteLGButton"
          onClick={toggleModal}
        >
          Get Started
        </button>
      )}
      {type === 'blue' && (
        <button className="primaryLink" onClick={toggleModal}>
          Get Started
        </button>
      )}

      {/* <button
          onClick={toggleModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buy Now
        </button> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Complete Your Payment</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
              />
            ))}

            {/* Order Summary */}
            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Service:</span> {orderData.service}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Package:</span>{' '}
                {orderData.package_name}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Amount:</span> $
                {orderData.order_amount}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Details:</span>{' '}
                {orderData.order_details}
              </p>
            </div>

            {/* Stripe Card Element */}
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Card Details
                </label>
                <div className="border rounded-md p-3">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#374151',
                          '::placeholder': { color: '#9CA3AF' },
                        },
                        invalid: { color: '#EF4444' },
                      },
                    }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!stripe || loading}
                className={`w-full py-2 rounded-lg text-white transition ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Processing...' : `Pay $${orderData.order_amount}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
