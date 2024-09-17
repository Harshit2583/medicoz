import whoweare from "../../Images/WhoWeAre.jpg";
import SecondaryContainerContent from "./SecondaryContainerContent";

const SecondaryContainer = () => {
  return (
    <div className="mx-20 my-28">
      <div className="flex justify-around">
        <SecondaryContainerContent />
        <img
          src={whoweare}
          alt="whoweare"
          className="hidden lg:block w-[40%] rounded-3xl"
        ></img>
      </div>
    </div>
  );
};

export default SecondaryContainer;
