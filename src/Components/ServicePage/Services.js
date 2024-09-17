import React, { useState } from "react";
import DiseaseList from "./DiseaseList";
import DepressionForm from "./DepressionForm";
import DiabetesForm from "./DiabetesForm";
import { diseases } from "../../Utils/constant";
import Hyper from "./Hyper";
import Adhd from "./Adhd";
const Services = () => {
  
  const [disease_no, setDisease_No] = useState(0);

  const handleClick = (index) => {
    setDisease_No(index);
  };
  return (
    <div className=" body-bg pt-32 px-20 flex justify-between">
      {/* <DiseaseList /> */}
      <div className=" w-1/4 bg-white px-5 py-10 rounded-md">
        <ul>
          {diseases.map((disease, index) => (
            <li
              key={index}
              className="mb-4 border border-black text-center px-5 py-2 rounded-md cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {disease}
            </li>
          ))}
        </ul>
      </div>
      {disease_no === 0 && <DepressionForm />}
      {disease_no === 1 && <DiabetesForm />}
      {disease_no === 2 && <Hyper />}
      {disease_no === 3 && <Adhd />}
    </div>
  );
};

export default Services;
