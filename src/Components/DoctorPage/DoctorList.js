import React, { useEffect, useState } from "react";
import pic from "../../Images/NewsCards1.jpg";
const DoctorList = ({ description1, description2 }) => {
  const [hospital, setHospital] = useState([]);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchHospital = async () => {
      await showHospital();
    };

    fetchHospital();
  }, [description1]);
  useEffect(() => {
    const fetchDoctor = async () => {
      await showDoctor();
    };

    fetchDoctor();
  }, [description2]);

  const showDoctor = async () => {
    try {
      const data = await fetch(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.2245%2C75.7718&radius=1500&" +
          description1 +
          "&key=AIzaSyCZ4SEGIjhfwioLKuVtQvNS5WP4T_aY4O4"
      );
      const json = await data.json();
      //   console.log(json);
      setDoctor(json?.results || []);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  const showHospital = async () => {
    try {
      const data = await fetch(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.2245%2C75.7718&radius=1500&" +
          description2 +
          "&key=AIzaSyCZ4SEGIjhfwioLKuVtQvNS5WP4T_aY4O4"
      );
      const json = await data.json();
      //   console.log(json);
      setHospital(json?.results || []);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };
  console.log(doctor);
  console.log(hospital);

  return (
    <div className="w-[80%] flex flex-wrap gap-y-5 gap-x-10 overflow-y-scroll no-scrollbar">
      {doctor.map((doc) => {
        return (
          <div className="">
            <div className="book">
              <p>Hello</p>
              <div className="cover overflow-hidden">
                <img src={pic} className=" rounded-md"></img>
                <div className="mx-2 flex flex-col gap-3 mt-3 mb-5 item-around">
                <p className="text-center font-medium text-lg">
                  {doc.name.split(",")[0]}
                </p>
                <div className="flex justify-around text-lg font-medium">
                  <p className="text-center ">
                    {doc.opening_hours?.open_now ? "Open Now" : "Closed"}
                  </p>
                  <p className="text-center ">Rating: {doc.rating || "N/A"}</p>{" "}
                </div>
                <p className="text-center font-medium">Address: {doc.vicinity}</p>
              </div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorList;
