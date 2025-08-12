import { loadStripe } from '@stripe/stripe-js';

const useStripe = (amount, onSuccess) => {
  const currency = "inr";

  const paymentHandler = async () => {
    try {
      // Debug: Check if environment variable is loaded
      console.log('REACT_APP_STRIPE_PUBLISHABLE_KEY:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      
      // Load Stripe with fallback
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

      if (!stripe) {
        console.error('Stripe failed to load');
        return;
      }

      // Create payment intent
      const response = await fetch("http://localhost:5001/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
        }),
      });

      const { clientSecret, paymentIntentId } = await response.json();

      if (!clientSecret) {
        console.error('Failed to create payment intent');
        return;
      }

      // Confirm the payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // You can add card details here for testing
            // For production, use Stripe Elements
          },
        },
      });

      if (error) {
        console.error('Payment failed:', error);
        alert(`Payment failed: ${error.message}`);
        
        // Call onSuccess to reset transaction status
        if (onSuccess) {
          onSuccess();
        }
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
          console.log('Payment verified:', verifyResult);
          
          // Call onSuccess callback
          if (onSuccess) {
            onSuccess();
          }
        } else {
          alert('Payment verification failed');
          console.error('Payment verification failed:', verifyResult);
          
          if (onSuccess) {
            onSuccess();
          }
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return paymentHandler;
};

export default useStripe;
