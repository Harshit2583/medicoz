import { Link } from "react-router-dom";
import logoCapsule from "../../Images/LogoCapsule.png";
import logoShape from "../../Images/LogoShape.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex gap-1">
        <img src={logoCapsule} alt="img" className="w-8 h-8"></img>
        <p className="text-white font-medium text-[1.20rem] cursor-pointer">
          Medicoz
        </p>
        <img
          src={logoShape}
          alt="img"
          className="w-12 h-[2.438rem] opacity-40 -ml-9"
        ></img>
      </div>
    </Link>
  );
};

export default Logo;
// absolute left-[6.25rem] md:left-[10.125rem] top-[1.625rem]
