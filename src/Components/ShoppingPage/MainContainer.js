import glucometer from "../../Images/Glucometer.png";
import BpMeasure from "../../Images/BloodPressureMoniter.jpg";
import ThermoMeasure from "../../Images/clinical-digital-thermometer.jpg";
import CovidTests from "../../Images/covidTest.jpg";
import FirstAid from "../../Images/firstAidKit.jpg";
import PulseOximeter from "../../Images/pulseOximeter.jpg";
import PregnancyKit from "../../Images/PregnancyTestingKit.jpg";
import lang from "../../Utils/languageConstants";
import { useSelector } from "react-redux";


import ShoppingCard from "../Common/ShoppingCard";

const MainContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex flex-col gap-20">

      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={lang[langKey].glucosemeterkey}
          about={lang[langKey].glucosemeter}
          image={glucometer}
          price={166000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
         name={lang[langKey].bloodpressuremonitorkey}
         about={lang[langKey].bloodpressuremonitor}
          image={BpMeasure}
          price={207500}
        />
      </div>

      <div className="z-10 relative slideInRight">
        <ShoppingCard
          name={lang[langKey].thermometerkey}
          about={lang[langKey].thermometer}
          image={ThermoMeasure}
          price={85000}
        />
      </div>

      <div className="z-10 relative slideInRight">
        <ShoppingCard
        name={lang[langKey].firstaidkitkey}
        about={lang[langKey].firstaidkit}
          image={FirstAid}
          price={124500}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
         name={lang[langKey].pulseoximeterkey}
         about={lang[langKey].pulseoximeter}
          image={PulseOximeter}
          price={166000}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
          name={lang[langKey].pregnancytestkitkey}
          about={lang[langKey].pregnancytestkit}
          image={PregnancyKit}
          price={41500}
        />
      </div>

      <div className="z-10 relative slideInLeft">
        <ShoppingCard
         name={lang[langKey].covidtestkitkey}
         about={lang[langKey].covidtestkit}
          image={CovidTests}
          price={125000}
        />
      </div>


    </div>
  );
};

export default MainContainer;
