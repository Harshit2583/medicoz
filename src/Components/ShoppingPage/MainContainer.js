import glucometer from "../../Images/Glucometer.png";
import ShoppingCard from "../common/shoppingCard.js";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-20">


      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>

      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>


      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Glucose Meter"}
          about={
            "Stay in control of your health with our advanced glucose meter, designed for quick and accurate blood sugar monitoring. Ideal for diabetes management, it requires a simple fingertip prick to deliver precise readings. Compact and easy to use, this essential device helps you track your glucose levels effortlessly. With features like digital displays, memory storage, and smartphone connectivity, managing your blood sugar has never been easier or more convenient."
          }
          image={glucometer}
          price={80000}
        />
      </div>


    </div>
  );
};

export default MainContainer;
