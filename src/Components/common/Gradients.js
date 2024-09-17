import gradient1 from "../../Images/Gradient1.png";
import gradient2 from "../../Images/Gradient2.png";

const Gradients = () => {
  return (
    <div>
      <div className="absolute top-10 -left-20 ">
        <img src={gradient1} alt="img" className="w-96 opacity-50"></img>
      </div>
      <div className="absolute -top-56   right-56">
        <img src={gradient2} alt="img" className="w-[28.125rem] opacity-30"></img>
      </div>
    </div>
  );
};

export default Gradients;
