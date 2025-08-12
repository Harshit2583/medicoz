import React, { useState } from 'react';
import useStripeElements from '../../Hooks/useStripeElements';

const StripePayment = () => {
  const [amount, setAmount] = useState(100);
  const [transactionStatus, setTransactionStatus] = useState(false);

  // Debug: Check environment variables
  console.log('Environment Variables Debug:');
  console.log('REACT_APP_STRIPE_PUBLISHABLE_KEY:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  console.log('NODE_ENV:', process.env.NODE_ENV);

  const handlePaymentSuccess = () => {
    setTransactionStatus(false);
    alert('Payment completed successfully!');
  };

  const handlePaymentCancel = () => {
    setTransactionStatus(false);
    console.log('Payment cancelled');
  };

  const { openPaymentForm, PaymentModal } = useStripeElements(
    amount,
    handlePaymentSuccess,
    handlePaymentCancel
  );

  const handlePaymentClick = () => {
    setTransactionStatus(true);
    openPaymentForm();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Stripe Payment Demo</h2>
      
      {/* Debug Info */}
      <div className="mb-4 p-3 bg-gray-100 rounded text-sm">
        <p><strong>Environment Variable Status:</strong></p>
        <p>REACT_APP_STRIPE_PUBLISHABLE_KEY: {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ? '✅ Loaded' : '❌ Not Found'}</p>
        <p>NODE_ENV: {process.env.NODE_ENV}</p>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount (₹)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>

      <button
        onClick={handlePaymentClick}
        disabled={transactionStatus || amount <= 0}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {transactionStatus ? 'Processing...' : `Pay ₹${amount}`}
      </button>

      {/* Payment Modal */}
      <PaymentModal />

      <div className="mt-4 text-sm text-gray-600">
        <p>Test Card Numbers:</p>
        <ul className="mt-2 space-y-1">
          <li>• 4242 4242 4242 4242 (Visa)</li>
          <li>• 4000 0000 0000 0002 (Visa - Declined)</li>
          <li>• 5555 5555 5555 4444 (Mastercard)</li>
        </ul>
        <p className="mt-2">Use any future expiry date and any 3-digit CVC.</p>
      </div>
    </div>
  );
};

export default StripePayment;
