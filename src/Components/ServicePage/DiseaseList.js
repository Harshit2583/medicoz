import React from "react";

const DiseaseList = () => {
  const diseases = [
    "Hypertension",
    "Dementia",
    "Aids",
    "Heart",
    "Diabetes",
    "Stroke",
    "Thyroid",
    "Asthma",
    "Breast Cancer",
    "Lung Cancer",
  ];

  return (
    <div className="border border-black w-1/4 bg-white px-5 py-10" >
      <ul>
        {diseases.map((disease, index) => (
          <li key={index} className="mb-4 border border-black text-center px-5 py-2 rounded-md">
            {disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseList;
