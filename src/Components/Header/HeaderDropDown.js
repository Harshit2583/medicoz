import { useDispatch, useSelector } from "react-redux";
import {
  showHeaderDropDown,
  showLanguageDropDown,
} from "../../Utils/dropDownSlice";
import lang from "../../Utils/languageConstants";
import { Link } from "react-router-dom";
import { logout } from "../../Utils/authSlice";

const HeaderDropDown = () => {
  const dispatch = useDispatch();
  const handleLanguageDropDown = () => {
    dispatch(showLanguageDropDown());
  };
  const langKey = useSelector((store) => store.config.lang);
  const languageDropDown = useSelector(
    (store) => store.dropDown.languageDropDown
  );
  const handleshowDropDown = () => {
    if (languageDropDown === false) dispatch(showHeaderDropDown());
  };
  const handleLogin = () => {
    dispatch(logout());
    dispatch(showHeaderDropDown());
  }

  return (
    <div
      className="py-5 pl-4 pr-2 absolute right-[4.375rem] top-[4.5rem] border border-black bg-black text-white rounded-md opacity-85 dropdown-content"
      onMouseLeave={handleshowDropDown}
    >
      <ul className="lg:space-y-2 font-medium cursor-pointer ">
        <Link to={"/"}>
          <li
            className={`hover:bg-gray-700 px-2 py-1 rounded block lg:hidden ${
              langKey && langKey === "हिन्दी"
                ? "font-semibold tracking-wide"
                : ""
            }`}
          >
            {lang[langKey].home}
          </li>{" "}
        </Link>
        <Link to={"/about"}>
          <li className="hover:bg-gray-700 px-2 py-1 rounded  block lg:hidden">
            {lang[langKey].aboutus}
          </li>{" "}
        </Link>
        <Link to={"/services"}>
          <li className="hover:bg-gray-700 px-2 py-1 rounded  block lg:hidden">
            {lang[langKey].services}
          </li>{" "}
        </Link>
        <Link to={"/doctor"}>
          <li className="hover:bg-gray-700 px-2 py-1 rounded  block lg:hidden">
            {lang[langKey].doctor}
          </li>{" "}
        </Link>
        <Link to={"/shopping"}>
          <li className="hover:bg-gray-700 px-2 py-1 rounded  block lg:hidden">
            {/* {lang[langKey].doctor} */}
            Shopping
          </li>
        </Link>

        <Link to={"/profile"}>
          <li className="hover:bg-gray-700 px-2 py-1 rounded">
            {lang[langKey].profile}
          </li>
        </Link>

        
        <li
          className="hover:bg-gray-700 px-2 py-1 rounded"
          onClick={"handleLanguageDropDown"}
        >
          {lang[langKey].languages} <span className="text-[0.75rem]">⮞</span>
        </li>
        <li className="hover:bg-gray-700 px-2 py-1 rounded" onClick={handleLogin}>
          {/* {lang[langKey].login} */}
          Log Out
        </li>
        <li className="mr-2 ml-1 mt-2 rounded-md  block lg:hidden">
          <Link to={"/contact"}>
            <button className="p-2 contact-button font-semibold">
              {lang[langKey].connectwithus}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderDropDown;
