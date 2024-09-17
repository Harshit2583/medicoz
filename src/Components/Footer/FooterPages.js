import { Link } from "react-router-dom";

const FooterPages = () => {
  return (
    <div>
      <div className="md:block hidden">
        <h3 className="mb-8 font-medium text-sm">Pages</h3>
        <Link to={"/"}>
          <p className="text-sm mb-3 transition-custom">Home</p>
        </Link>
        <Link to={"/about"}>
          <p className="text-sm mb-4 transition-custom">About</p>
        </Link>
        <Link to={"/services"}>
          <p className="text-sm mb-4 transition-custom">Services</p>
        </Link>
        <Link to={"/doctor"}>
          <p className="text-sm mb-4 transition-custom">Doctor</p>
        </Link>
        <Link to={"/contact"}>
          <p className="text-sm mb-4 transition-custom">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterPages;
