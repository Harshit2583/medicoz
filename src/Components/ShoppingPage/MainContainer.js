import glucometer from "../../Images/Glucometer.png";

import ShoppingCard from "../Common/ShoppingCard";

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
          price={166000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Blood Pressure Monitor"}
          about={
            "Keep a close watch on your heart health with our reliable blood pressure monitor. Offering accurate and fast results, this user-friendly device tracks your systolic and diastolic pressures, as well as heart rate, from the comfort of your home. Its digital display and memory function make it easy to monitor trends over time, helping you stay informed and in control."
          }
          image={glucometer}
          price={207500}
        />
      </div>

      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={"Thermometer"}
          about={
            "Ensure the well-being of your family with our easy-to-use thermometer, designed for fast and precise temperature readings. Whether you’re checking for fever or tracking body temperature changes, this essential tool provides accurate results in seconds. With digital displays and memory recall, staying on top of your health has never been simpler."
          }
          image={glucometer}
          price={85000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Covid test Kit"}
          about={
            "Safeguard yourself and those around you with our reliable COVID test kit, providing quick and accurate results from the comfort of your home. With easy instructions and fast testing capabilities, you can detect the presence of the virus in minutes, allowing for timely decisions about health and safety. A must-have for anyone prioritizing public health and well-being."
          }
          image={glucometer}
          price={125000}
        />
      </div>

      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={"First Aid Kit"}
          about={
            "Be prepared for minor injuries and emergencies with our comprehensive first aid kit. Stocked with essential medical supplies like bandages, antiseptic wipes, and more, this kit provides everything you need for on-the-spot treatment. Compact and portable, it’s perfect for home, travel, or outdoor activities, ensuring you’re always ready to handle unexpected situations."
          }
          image={glucometer}
          price={124500}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Pulse Oximeter"}
          about={
            "Keep an eye on your oxygen levels and heart rate with our compact and easy-to-use pulse oximeter. This non-invasive device delivers quick and accurate readings with just a fingertip placement, allowing you to monitor your health at any time. Ideal for respiratory conditions and fitness tracking, it’s a vital tool for maintaining wellness."
          }
          image={glucometer}
          price={166000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={"Pregnancy Test Kit"}
          about={
            "Get clear and reliable results with our easy-to-use pregnancy test kit, designed to deliver accurate answers quickly. With simple instructions and high sensitivity, it provides peace of mind by confirming pregnancy within minutes. Discreet and dependable, it’s the ideal companion for women seeking accurate reproductive health information."
          }
          image={glucometer}
          price={41500}
        />
      </div>


    </div>
  );
};

export default MainContainer;
