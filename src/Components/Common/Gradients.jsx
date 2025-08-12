import React from 'react';
import gradient1 from "../../Images/Gradient1.png";
import gradient2 from "../../Images/Gradient2.png";

const Gradients = () => {
  return (
    <div>
      <div className="absolute top-10 -left-20">
        <img src={gradient1} alt="gradient1" className="w-96 opacity-50" />
      </div>
      <div className="absolute -top-56 right-56">
        <img src={gradient2} alt="gradient2" className="w-[28.125rem] opacity-30" />
      </div>
    </div>
  );
};

export default Gradients;
