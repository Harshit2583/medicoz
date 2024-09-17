import FooterAbout from "./FooterAbout";
import FooterPages from "./FooterPages";
import FooterUtility from "./FooterUtility";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <div className="pt-10 md:pt-16 lg:pt-24 pb-4 px-2 md:px-10 lg:px-12 xl:px-36 bg-[#f8f8f7]">
      <div className="flex flex-col md:flex-row items-center justify-between text-black">
        <FooterAbout />
        <FooterPages />
        <FooterUtility />
        <FooterSocial />
      </div>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
