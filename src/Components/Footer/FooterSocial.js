import sthethoscope from "../../Images/Sthethoscope.png";
import pills from "../../Images/Pills.jpg";

const FooterSocial = () => {
  return (
    <div>
      <div className=" w-80 md:block hidden">
        <h2 className="font-medium text-sm mb-8">Follow us on instagram</h2>
        <div className="flex flex-wrap gap-3">
          <img src={sthethoscope} alt="img" className="w-36  h-28"></img>
          <img src={pills} alt="img" className="w-36 rounded-xl h-28"></img>
        </div>
        <h1 className="mt-4 font-medium text-sm">
          Address:- 456 Lotus Street, Block C, Sector 22, Gurugram, Haryana,
          122001, India
        </h1>
      </div>
    </div>
  );
};

export default FooterSocial;
