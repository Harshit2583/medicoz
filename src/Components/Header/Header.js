import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../Utils/languageConstants";
import Logo from "../Common/Logo";
import userProfile from "../../Images/UserProfile.png";
import {
  showHeaderDropDown,
  showLanguageDropDown,
} from "../../Utils/dropDownSlice";
import HeaderDropDown from "./HeaderDropDown";
import LanguageDropDown from "./LanguageDropDown";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const languageDropDown = useSelector(
    (store) => store.dropDown.languageDropDown
  );
  const headerDropDown = useSelector((store) => store.dropDown.headerDropDown);
  const handleshowDropDown = () => {
    dispatch(showHeaderDropDown());
    if (languageDropDown) {
      dispatch(showLanguageDropDown());
    }
  };

  return (
    <div className="fixed top-0 w-full z-20 body-bg fadeInDownHeader">
      <div className="flex justify-between">
        <div className="mx-4 md:mx-20 mt-7 font-medium text-white text-2xl">
          <Logo />
        </div>
        <div className="mt-7 mr-16 lg:hidden" onClick={handleshowDropDown}>
          <img src={userProfile} alt="profile img" className="w-10 mt-0"></img>
        </div>


        <div className="mt-6  hidden lg:block">
          <ul className="flex    font-medium tracking-wide">
            <Link to={"/"}>
              <li
                className={`mx-3 py-2 transition-custom ${
                  isActive("/") ? "underline underline-offset-8" : ""
                } ${
                  langKey && langKey === "हिन्दी"
                    ? "font-semibold tracking-wide"
                    : ""
                }`}
              >
                {lang[langKey].home}
              </li>{" "}
            </Link>
            <Link to={"/services"}>
              <li
                className={`mx-3 py-2 transition-custom ${
                  isActive("/services") ? "underline underline-offset-8" : ""
                } ${langKey === "हिन्दी" ? "font-semibold tracking-wide" : ""}`}
              >
                {lang[langKey].services}
              </li>{" "}
            </Link>
            <Link to={"/doctor"}>
              <li
                className={`mx-3 py-2 transition-custom ${
                  isActive("/doctor") ? "underline underline-offset-8" : ""
                } ${langKey === "हिन्दी" ? "font-semibold tracking-wide" : ""}`}
              >
                {lang[langKey].doctor}
              </li>{" "}
            </Link>
            <Link to={"/shopping"}>
              <li
                className={`mx-3 py-2 transition-custom ${
                  isActive("/shopping") ? "underline underline-offset-8" : ""
                } ${langKey === "हिन्दी" ? "font-semibold tracking-wide" : ""}`}
              >
                {lang[langKey].shopping}
                {/* Shopping */}
              </li>{" "}
            </Link>
            <li className="mr-2 ml-3 rounded-md">
              <Link to={"/contact"}>
                <button className="p-2 contact-button font-semibold">
                  {lang[langKey].connectwithus}
                </button>
              </Link>
            </li>
            <li
              className="mr-16 cursor-pointer"
              onMouseEnter={handleshowDropDown}
            >
              <img
                src={userProfile}
                alt="profile img"
                className="w-10 mt-[0.1rem] bg-[#655c5c] rounded-full p-1 pl-[0.33rem]"
              ></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-3">
        <hr className="bg-[#2235a2] h-1 border-0 mx-16" />
      </div>
      {headerDropDown && <HeaderDropDown />}
      {languageDropDown && headerDropDown && <LanguageDropDown />}
    </div>
  );
};

export default Header;
