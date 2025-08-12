# Stripe Migration Example

This document shows how to migrate from Razorpay to Stripe in your existing components.

## 🔄 Before (Razorpay)

```javascript
// Old Razorpay implementation
import useRazorPay from './Hooks/useRazorPay';

const ShoppingComponent = () => {
  const [transactionStatus, setTransactionStatus] = useState(false);

  const handlePaymentSuccess = () => {
    setTransactionStatus(false);
    // Handle success
  };

  const handlePayment = useRazorPay(amount, handlePaymentSuccess);

  return (
    <button onClick={handlePayment} disabled={transactionStatus}>
      Pay with Razorpay
    </button>
  );
};
```

## ✅ After (Stripe)

```javascript
// New Stripe implementation
import useStripeElements from './Hooks/useStripeElements';

const ShoppingComponent = () => {
  const [transactionStatus, setTransactionStatus] = useState(false);

  const handlePaymentSuccess = () => {
    setTransactionStatus(false);
    // Handle success
  };

  const handlePaymentCancel = () => {
    setTransactionStatus(false);
    // Handle cancel
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
    <>
      <button onClick={handlePaymentClick} disabled={transactionStatus}>
        Pay with Stripe
      </button>
      <PaymentModal />
    </>
  );
};
```

## 🎯 Key Differences

| Feature | Razorpay | Stripe |
|---------|----------|--------|
| **Payment Form** | External popup | Modal with Elements |
| **Card Input** | Razorpay handles | Stripe Elements |
| **Styling** | Limited customization | Full CSS control |
| **Error Handling** | Basic | Advanced |
| **Testing** | Test mode | Test cards |
| **Security** | Good | Excellent |

## 🚀 Benefits of Stripe

1. **Better UX**: Embedded payment form
2. **More Control**: Customizable styling
3. **Better Error Handling**: Detailed error messages
4. **Global Support**: Works worldwide
5. **Advanced Features**: Subscriptions, refunds, etc.
6. **Better Documentation**: Comprehensive guides

## 📝 Migration Checklist

- [ ] Replace `useRazorPay` with `useStripeElements`
- [ ] Add `PaymentModal` component to JSX
- [ ] Update payment button click handler
- [ ] Test with Stripe test cards
- [ ] Update error handling
- [ ] Test success and failure scenarios
- [ ] Update any payment-related styling

## 🔧 Environment Setup

Make sure you have these environment variables:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🧪 Testing

Use these test cards:

- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

## 📞 Support

If you need help with migration, check:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com/)
- This repository's issues
