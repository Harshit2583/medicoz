import { useDispatch } from "react-redux";
import { supported_languages } from "../../Utils/constant";
import { changeLanguage } from "../../Utils/configSlice";
import { showLanguageDropDown } from "../../Utils/dropDownSlice";

const LanguageDropDown = () => {
  const dispatch = useDispatch();
  

  const handleLanguageDropDown = () => {
    dispatch(showLanguageDropDown());
  };

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
  };

  return (
    <div className="py-4 px-5 absolute right-[14.688rem] lg:right-[13.875rem] top-[18.125rem] lg:top-[8.625rem] z-30 border border-black bg-black  text-white rounded-md  opacity-85 language-dropdown-content" onMouseLeave={handleLanguageDropDown} >
      <ul className="space-y-2 font-medium">
        {supported_languages.map((lang) => (
          <li 
            key={lang.name}
            onClick={() => handleLanguageChange(lang.identifier)}
            className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded"
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropDown;
