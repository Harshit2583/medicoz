import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Debug: Check if environment variable is loaded
console.log('REACT_APP_STRIPE_PUBLISHABLE_KEY:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// Load Stripe with fallback
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

// Payment form component
const PaymentForm = ({ amount, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      // Create payment intent
      const response = await fetch("http://localhost:5001/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "inr",
        }),
      });

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('Failed to create payment intent');
      }

      // Confirm the payment
      const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (paymentError) {
        setError(paymentError.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Verify payment on server
        const verifyResponse = await fetch("http://localhost:5001/confirm-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
          }),
        });

        const verifyResult = await verifyResponse.json();

        if (verifyResult.success) {
          alert('Payment successful!');
          if (onSuccess) {
            onSuccess();
          }
        } else {
          setError('Payment verification failed');
        }
      }
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <p className="text-gray-600 mb-4">Amount: ₹{amount}</p>
        
        <div className="border border-gray-300 rounded-md p-3 mb-4">
          <CardElement options={cardElementOptions} />
        </div>
        
        {error && (
          <div className="text-red-600 text-sm mb-4">
            {error}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={!stripe || loading}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : `Pay ₹${amount}`}
        </button>
        
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

// Main hook component
const useStripeElements = (amount, onSuccess, onCancel) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showPaymentForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPaymentForm]);

  const openPaymentForm = () => {
    setShowPaymentForm(true);
  };

  const closePaymentForm = () => {
    setShowPaymentForm(false);
    if (onCancel) {
      onCancel();
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentForm(false);
    if (onSuccess) {
      onSuccess();
    }
  };

  const PaymentModal = () => {
    if (!showPaymentForm) return null;

    const modalContent = (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div 
          className="bg-white rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
          style={{
            position: 'relative',
            zIndex: 10000,
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Complete Payment</h2>
              <button
                onClick={closePaymentForm}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            
            <Elements stripe={stripePromise}>
              <PaymentForm
                amount={amount}
                onSuccess={handlePaymentSuccess}
                onCancel={closePaymentForm}
              />
            </Elements>
          </div>
        </div>
      </div>
    );

    // Use portal to render modal at root level
    return createPortal(modalContent, document.body);
  };

  return {
    openPaymentForm,
    closePaymentForm,
    PaymentModal,
  };
};

export default useStripeElements;
