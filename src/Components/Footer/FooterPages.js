import { Link } from "react-router-dom";
import lang from "../../Utils/languageConstants";
import { useSelector } from "react-redux";

const FooterPages = () => {
  const langKey = useSelector((store) => store.config.lang); 
  return (
    <div>
      <div className="md:block hidden">
        <h3 className="mb-8 font-medium text-sm">Pages</h3>
        <Link to={"/"}>
          <p className="text-sm mb-3 transition-custom">  {lang[langKey].home}</p>
        </Link>
        <Link to={"/about"}>
          <p className="text-sm mb-4 transition-custom">  {lang[langKey].about}</p>
        </Link>
        <Link to={"/services"}>
          <p className="text-sm mb-4 transition-custom">  {lang[langKey].services}</p>
        </Link>
        <Link to={"/doctor"}>
          <p className="text-sm mb-4 transition-custom"> {lang[langKey].doctor}</p>
        </Link>
        <Link to={"/contact"}>
          <p className="text-sm mb-4 transition-custom">{lang[langKey].contact}</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterPages;
