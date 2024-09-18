const useRazorPay = (amount, onSuccess) => {
  const currency = "INR";
  const receiptID = "12345";

  const paymentHandler = async () => {
    const response = await fetch("http://localhost:5001/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptID,
      }),
    });

    const order = await response.json();
    // console.log("order", order);

    var option = {
      key: "", // Add Razorpay API Key here
      amount,
      currency,
      name: "Medicoz",
      description: "afdsadf",
      image: "https://i.ibb.co/5Y3m33n/test.png",
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response };

        const validateResponse = await fetch("http://localhost:5001/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const jsonResponse = await validateResponse.json();
        // console.log("Transaction validated:", jsonResponse);

        // Trigger the onSuccess callback to update the transactionStatus to false
        if (onSuccess) {
          onSuccess(); // Invoke the callback to set transaction status to false
        }
        // window.location.href = "/transaction";
      },
      notes: {
        address: "Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(option);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);

      // Set the transaction status to false if payment failed
      if (onSuccess) {
        onSuccess();
      }
    });

    rzp1.open();
  };

  return paymentHandler;
};

export default useRazorPay;
