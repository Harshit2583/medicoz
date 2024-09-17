import call from "../../Images/Call.png";
import message from "../../Images/Message.png";
import location from "../../Images/Location.png";
import { useSelector } from "react-redux";
import lang from "../../Utils/languageConstants";

const ContactContent = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="z-10 flex flex-row lg:w-1/2 xl:w-2/3">
      <div className=" text-white pl-0 lg:pl-28 lg:pr-72 py-10">
        <p className="text-lg lg:text-4xl tracking-wider mb-4">
          {lang[langKey].getintouch}
        </p>
        <h1 className="text-[#f3d64c] text-6xl font-semibold tracking-wide fadeInUp">
          {lang[langKey].conveyyour}
        </h1>
        <h1 className="text-6xl mb-4 font-semibold tracking-wide fadeInUpLarge">
          {lang[langKey].ideastous}
        </h1>
        <p
          className={`text-sm tracking-wide fadeInDown ${
            langKey === "हिन्दी" ? "tracking-wider text-base" : ""
          }`}
        >
          {lang[langKey].contactpageslogan}
        </p>
        <div className="flex items-center gap-4 my-5 transition-custom cursor-pointer popOut">
          <button className="bg-[#f3d64c] rounded-full">
            <img src={call} alt="call" className="w-10 p-2"></img>
          </button>
          <p>+123-456-789</p>
        </div>
        <div className="flex items-center gap-4 my-5 transition-custom cursor-pointer popOut">
          <button className="bg-[#f3d64c] rounded-full">
            <img src={message} alt="message" className="w-10 p-2"></img>
          </button>
          <p>medicoz@medwithai.com</p>
        </div>
        <div className="flex items-center gap-4 my-5 transition-custom cursor-pointer popOut">
          <button className="bg-[#f3d64c] rounded-full">
            <img src={location} alt="location" className="w-10 p-2"></img>
          </button>
          <p className="text-xs lg:text-base">{lang[langKey].address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
