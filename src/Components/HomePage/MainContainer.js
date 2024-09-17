import MainContainerContent from "./MainContainerContent";
// import Gradients from "../Common/Gradients";
// import ribbon from "../../Images/Ribbon.png";
import plusSign from "../../Images/PlusSign.png";
import plusSignWhite from "../../Images/PlusSignWhite.png";
import Lottie from "react-lottie";
import animationData from "../../Lotties/Doctor.json";

const MainContainer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-5 w-full body-bg p-4 sm:px-16 xl:pb-[9.8rem] h-screen sm:h-full xl:h-screen flex xl:flex-row flex-col justify-between items-center relative">
      <MainContainerContent />
      <div>
        <div className="relative">
          {/* <img
            src={doctor}
            alt="doctor-img"
            className="w-[450px] lg:mr-20 bg-white rounded-full shadow-lg"
          ></img>{" "} */}
          <div className="-mt-36 sm:-mt-40  xl:-mt-0 lg:mr-24 popOut w-[25rem] h-[25rem] sm:h-[37.5rem] sm:w-[37.5rem]">
            <Lottie options={defaultOptions} />
          </div>
          {/* <div className="w-[450px] lg:mr-20 absolute  bottom-0 left-0">
            <img src={ribbon} alt="img"></img>
          </div> */}
        </div>
        {/* <Gradients /> */}
      </div>
      <div className="hidden sm:block w-5 h-5 rounded-full absolute top-[30rem] sm:top-[12.813rem] md:top-[14rem] lg:top-[17.8rem] left-[15.625rem] sm:left-[2.5rem] md:left-[5.313rem] bg-[#298ee0]"></div>
      <div className=" w-5 h-5 rounded-full absolute top-[6.563rem] sm:top-[9.375rem] right-[7.5rem] bg-[#2235a2]"></div>
      <div className="hidden sm:block w-5 h-5 rounded-full absolute top-[31.875rem] right-[41.25rem] bg-[#2235a2] md:hidden lg:block"></div>
      <div className="hidden sm:block w-16 h-32 rounded-l-full absolute top-[48.125rem] md:top-[35.625rem] right-0 bg-[#2235a2]"></div>
      <div className="hidden sm:block w-28 h-28 rounded-tr-full absolute bottom-0 left-0 bg-[#9b1f53]"></div>

      {/* <div className="absolute top-[370px] right-32 lg:block hidden">
        <img src={ribbon} alt="img"></img>
      </div> */}
      <div className="absolute top-[35.625rem] right-[36.25rem]">
        <img src={plusSign} alt="img" className="w-12"></img>
      </div>
      <div className="absolute top-[14.375rem] right-[4.375rem]">
        <img src={plusSignWhite} alt="img" className="w-12"></img>
      </div>
    </div>
  );
};

export default MainContainer;
