import React from "react";
import Logo from "../Common/Logo";
import userProfile from "../../Images/UserProfile.png";
import HeaderDropDown from "../Header/HeaderDropDown";
import LanguageDropDown from "../Header/LanguageDropDown";
import { showHeaderDropDown, showLanguageDropDown } from "../../Utils/dropDownSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
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
    <div>
      <div className="fixed top-0 w-full z-20 body-bg fadeInDownHeader">
        <div className="flex justify-between">
          <div className="mx-4 md:mx-20 mt-7 font-medium text-white text-2xl">
            <Logo />
          </div>
          <div className="mt-7 mr-16 " onClick={handleshowDropDown}>
            <img
              src={userProfile}
              alt="profile img"
              className="w-10 mt-0"
            ></img>
          </div>

        </div>
        <div className="pt-3">
          <hr className="bg-[#2235a2] h-1 border-0 mx-16" />
        </div>
        {headerDropDown && <HeaderDropDown />}
        {languageDropDown && headerDropDown && <LanguageDropDown />}
      </div>
    </div>
  );
};

export default Header;
