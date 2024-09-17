import ServicesCard from "../Common/ServicesCard";
import lang from "../../Utils/languageConstants"
import { useSelector } from "react-redux";
const ThirdContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" bg-[#f8f8f7] py-20 mb-20">
      <div>
        <h1 className="text-center text-4xl font-medium text-[#2C2D3F] mb-1">
          {lang[langKey].weoffer}
          {/* We Offer Different Services{" "} */}
        </h1>
        <h1 className="text-center text-4xl font-medium text-[#2C2D3F] mb-4">
        {lang[langKey].toimprove}
          {/* To Improve Your Health */}
        </h1>
        <hr className="mx-auto bg-[#2235a2] h-[0.2rem] border-0 w-[23%] mb-10" />
        <div className="flex justify-center flex-wrap gap-20 mx-5 lg:mx-20 mb-12 ">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
