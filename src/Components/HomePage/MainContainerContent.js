import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../../Utils/languageConstants";

const MainContainerContent = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full xl:w-1/2 z-10 pt-28 sm:pt-20 md:pt-28 xl:pt-40">
      <div className="my-0 sm:my-7 ml-0 md:ml-14 w-[75%] sm:w-[85%] md:w-[70%] lg:w-[37.5rem]">
        <h1 className="text-[#fff] text-5xl sm:text-6xl md:text-7xl  font-semibold tracking-wide fadeInUp">
          {lang[langKey].connecting}
          {/* Dignosing Today */}
        </h1>
        <h1 className="text-[#fff]  text-5xl sm:text-6xl md:text-7xl  font-semibold tracking-wide fadeInUpLarge">
          {lang[langKey].patients}
          {/* Securing Tomorrow */}
        </h1>
        <div className="typing-effect">
          <h1
            className={`text-black pt-3 text-5xl sm:text-6xl md:text-6xl lg:text-7xl mb-5 sm:mb-2 font-semibold tracking-wide overflow-scroll no-scrollbar ${
              langKey === "हिन्दी" ? "mt-1 pt-7" : ""
            } `}
          >
            {lang[langKey].toqualitycare}
          </h1>
        </div>
        <div className="mx-1 text-sm sm:text-base sm:mx-3 mt-0">
          <p className=" tracking-wide mb-5 fadeInDown">
            {lang[langKey].maincontainerslogan}
          </p>
        </div>
        <Link to={"/contact"}>
          <button
            className={`learn-more submit-button w-48 popOut ${
              langKey === "spanish" ? "w-52" : ""
            } ${langKey === "french" ? "w-72" : ""}`}
          >
            <span className="circle bg-[#c1e2f0]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text tracking-wider   font-semibold ">
              {lang[langKey].enquirynow}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainContainerContent;
