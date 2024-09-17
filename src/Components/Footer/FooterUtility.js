import { Link } from "react-router-dom";

const FooterUtility = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <h3 className="mb-8 font-medium text-sm">Utility Pages</h3>
        <Link to={"/"}>
          <p className="text-sm mb-4 transition-custom">Start Here</p>
        </Link>
        <p className="text-sm mb-4">Style Guide</p>
        <Link to={"/error"}>
          <p className="text-sm mb-4 transition-custom">404 Not Found</p>
        </Link>
        <p className="text-sm mb-4">Licenses</p>
        <Link to={"/about"}>
          <p className="text-sm mb-4 transition-custom">View More</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterUtility;
