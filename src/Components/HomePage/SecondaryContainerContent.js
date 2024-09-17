import lang from "../../Utils/languageConstants";
import { useSelector } from "react-redux";

const SecondaryContainerContent = () => {
  const langKey = useSelector((store) => store.config.lang);
  
  return (
    <div className="w-full lg:w-[40%] flex flex-col gap-6 mt-5 text-[#757575] slideInLeft">
      <div>
        <h1 className="text-3xl font-medium text-black">{lang[langKey].whoarewe}</h1>
        <hr className="bg-[#2235a2] h-[0.2rem] border-0 w-[23%] mt-1" />
      </div>
      <p className="font-medium">
      {lang[langKey].whoarewecontent1}
        {/* Medicoz offers a comprehensive health platform that leverages machine
        learning to provide personalized disease severity predictions, helping
        users manage conditions like diabetes, hypertension, heart disease, etc. */}
      </p>
      <p className="font-medium tracking-wide text-sm">
      {lang[langKey].whoarewecontent1}
        {/* The platform connects users with top doctors and clinics based on their
        health needs and offers a convenient shopping option for essential
        health monitoring devices. */}
      </p>
      <div className="flex gap-6">
        <ul className="text-xs list-disc space-y-2 font-medium ">
          <li>{lang[langKey].whoarewepoint1}</li>
          <li>{lang[langKey].whoarewepoint2}</li>
          <li>{lang[langKey].whoarewepoint3}</li>
        </ul>
        <ul className="text-xs list-disc space-y-2 font-medium ">
          <li>{lang[langKey].whoarewepoint4}</li>
          <li>{lang[langKey].whoarewepoint5}</li>
          <li>{lang[langKey].whoarewepoint6}</li>
        </ul>
      </div>
    </div>
  );
};

export default SecondaryContainerContent;
