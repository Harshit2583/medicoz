import React, { useEffect, useState } from "react";
import pic from "../../Images/NewsCards1.jpg";
const Hospital = ({ description1 }) => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    const fetchHospital = async () => {
      await showHospital();
    };

    fetchHospital();
  }, [description1]);

  const showHospital = async () => {
  try {
    const response = await fetch(
      `http://localhost:2000/api/doctor?description2=${description1}` // Local API endpoint
    );
    
    const json = await response.json(); // Parse the JSON data
    setHospital(json?.results || []); // Set the doctor data in the state
  } catch (error) {
    console.error("Error fetching hospital data:", error);
  }
};
  return (
    <div className="py-10 r">
        <h1 className="text-center md:text-left font-sans text-4xl mb-4 font-medium">
          Hospitals Near You
        </h1>
        <div className=" flex flex-wrap md:justify-normal justify-center gap-y-5 gap-x-10">
          {hospital.map((doc) => {
            const truncatedName =
              doc.name.length > 20
                ? doc.name.substring(0, 20) + "..."
                : doc.name;
            return (
              <div className="">
                <div className="book">
                  <div className="h-full flex flex-col items-center px-10 py-10 justify-around">
                    <p className="text-xl font-medium text-center">
                      {doc.name}
                    </p>
                    <p className="text-center font-medium">
                      Address: {doc.vicinity}
                    </p>
                    <a
                      target="_blank"
                      href={`https://www.google.com/maps/?q=${doc.geometry.location.lat},${doc.geometry.location.lng}`}
                    >
                      <button className={`map-button  `}>
                        <div class="svg-wrapper-1">
                          <div class="svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span> Get Location </span>
                      </button>
                    </a>
                  </div>
                  <div className="cover overflow-hidden">
                    <img src={pic} className=" rounded-md"></img>
                    <div className="mx-2 flex flex-col gap-3 mt-3 mb-5 item-around">
                      <p className="text-center font-medium text-lg mt-2">
                        {truncatedName.split(",")[0].toUpperCase()}
                      </p>
                      <div className="flex justify-around text-lg font-medium mt-5">
                        <p
                          className={`text-center ${
                            doc.opening_hours?.open_now
                              ? "text-green-600"
                              : "text-red-600"
                          } `}
                        >
                          {doc.opening_hours?.open_now ? "Open Now" : "Closed"}
                        </p>
                        <p className="text-center ">
                          Rating: {doc.rating || "N/A"}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Hospital;
