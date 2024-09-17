import { useState } from "react";
import useRazorPay from "../../Hooks/useRazorPay";

const ShoppingCard = ({ name, about, image, price }) => {
  const [transactionStatus, setTransactionStatus] = useState(false);

  const handlePayment = useRazorPay(price, () => {
    setTransactionStatus(false);
  });

  const initiatePayment = () => {
    setTransactionStatus(true);

    handlePayment();
  };

  return (
    <div className="blue-gradient mx-10 md:mx-28 px-2 sm:px-20 py-10 rounded-lg shadow-lg">
      <div className="flex lg:flex-row flex-col gap-5 items-center ">
        <img src={image} alt="glucometer" className="w-52 "></img>
        <div className="flex flex-col lg:gap-3 justify-between py-2 border-t-2 lg:border-t-0 lg:border-l-2  border-gray-400 pl-5">
          <h2 className="text-3xl font-medium">{name}</h2>
          <p className="font-medium text-sm tracking-wide">{about}</p>
          <button
            className="bg-blue-500 mt-4 lg:mt-0 text-white font-semibold py-2 px-6 rounded-lg hover:text-black flex justify-center"
            onClick={initiatePayment}
          >
            Buy Now - {"Rs. " + price / 100}
            {transactionStatus && (
              <svg
                className="animate-spin h-5 w-5 ml-3 mt-[0.15rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M14 2a10 10 0 0 1 0 20" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
