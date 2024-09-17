import React, { useState } from "react";
import MainContainer from "./MainContainer";
import DoctorList from "./DoctorList";
import { disease } from "../../Utils/constant";
const Doctor = () => {
  const [description1, setdescription1] = useState("type=hospital");
  const [description2, setdescription2] = useState("type=doctor");
  const handleClick = async (description1, description2) => {
    setdescription1(description1);
    setdescription2(description2);
  };
  return (
    <div className="h-screen body-bg pt-32 px-20 flex gap-10">
      <div className="w-1/4">
        <p className="bg-white text-center py-2 rounded-md font-medium cursor-pointer">
          Select the doctor related to disease
        </p>
        <div className="bg-white rounded-md rounded-t-none -mt-1 py-5 px-2 ">
          <ul className="flex flex-col items-center">
            {disease.map((disease, index) => (
              <li
                key={index}
                className={`w-[85%] text-center font-medium p-2 text-lg border border-black ${
                  index === disease.length - 1 ? "border-b-0" : ""
                } cursor-pointer hover:bg-gray-200 rounded-md mb-4`}
                onClick={() =>
                  handleClick(disease.description1, disease.description2)
                }
              >
                {disease.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <DoctorList description1={description1} description2={description2} />
    </div>
  );
};

export default Doctor;
