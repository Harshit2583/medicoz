import React, { useState } from "react";
import { disease } from "../../Utils/constant";

const MainContainer = () => {
  const [description1, setdescription1] = useState(null)
  
  const handleClick = async(description1, description2) => {
    try {
        const data = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.2245%2C75.7718&radius=1500&"+description1+"&key=AIzaSyCZ4SEGIjhfwioLKuVtQvNS5WP4T_aY4O4");
        const json = await data.json();
        console.log(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

  return (
    <div className="w-1/4">
      <p className="bg-white text-center py-2 rounded-md font-medium cursor-pointer">
        Select the doctor related to disease
      </p>
        <div className="bg-white rounded-md rounded-t-none -mt-1 py-5 px-2 ">
          <ul className="flex flex-col items-center">
            {disease.map((disease, index) => (
              <li
                key={index}
                className={`w-[85%] text-center font-medium p-2 text-lg border border-black ${index === disease.length - 1 ? 'border-b-0' : ''} cursor-pointer hover:bg-gray-200 hover:border-none rounded-md mb-4`}
                onClick={() => handleClick(disease.description1, disease.description2)}
              >
                {disease.name}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default MainContainer;
