import React, { useState } from "react";

const Hyper = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    currentSmoker: "",
    BPMeds: "",
    totChol: "",
    sysBP: "",
    diaBP: "",
    BMI: "",
    heart_rate: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data to send to the Flask API
      const formattedData = {
        gender: parseInt(formData.gender) || 0,
        age: parseInt(formData.age) || 0,
        currentSmoker: parseInt(formData.currentSmoker) || 0,
        BPMeds: parseFloat(formData.BPMeds) || 0.0,
        totChol: parseFloat(formData.totChol) || 0.0,
        sysBP: parseFloat(formData.sysBP) || 0.0,
        diaBP: parseFloat(formData.diaBP) || 0.0,
        BMI: parseFloat(formData.BMI) || 0.0,
        heart_rate: parseFloat(formData.heart_rate) || 0.0,
      };

      // Send a POST request to the Flask hypertension prediction API
      const response = await fetch(
        "http://127.0.0.1:5000/service/hypertension/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      const data = await response.json();
      setResult(data["Prediction Result"]); // Set the received prediction result
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="w-full md:w-[72%] px-5 py-10 flex flex-col items-center bg-white rounded-md">
      <h2 className="text-center text-4xl mb-10 border-b-[1px] border-gray-400 w-[90%] pb-3">Hypertension Prediction</h2>
      <div className="w-[90%]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="gap-1 flex flex-col">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Gender
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="gender"
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>

          <div className="gap-1 flex flex-col">
            <p htmlFor="age" className="text-lg font-medium mr-5">
              Age
            </p>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              value={formData.age}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="currentSmoker" className="text-lg font-medium mr-5">
              Current Smoker (1 for Yes, 0 for No)
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="currentSmoker"
              name="currentSmoker"
              onChange={handleChange}
              value={formData.currentSmoker}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="BPMeds" className="text-lg font-medium mr-5">
              Blood Pressure Medication (BPMeds)
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="BPMeds"
              name="BPMeds"
              onChange={handleChange}
              value={formData.BPMeds}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="totChol" className="text-lg font-medium mr-5">
              Total Cholesterol (totChol)
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="totChol"
              name="totChol"
              onChange={handleChange}
              value={formData.totChol}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="sysBP" className="text-lg font-medium mr-5">
              Systolic Blood Pressure (sysBP)
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="sysBP"
              name="sysBP"
              onChange={handleChange}
              value={formData.sysBP}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="diaBP" className="text-lg font-medium mr-5">
              Diastolic Blood Pressure (diaBP)
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="diaBP"
              name="diaBP"
              onChange={handleChange}
              value={formData.diaBP}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="BMI" className="text-lg font-medium mr-5">
              Body Mass Index (BMI)
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="BMI"
              name="BMI"
              onChange={handleChange}
              value={formData.BMI}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="heart_rate" className="text-lg font-medium mr-5">
              Heart Rate
            </label>
            <input
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              type="number"
              id="heart_rate"
              name="heart_rate"
              onChange={handleChange}
              value={formData.heart_rate}
            />
          </div>

          <button
            className="learn-more submit-button w-36"
            onClick={handleSubmit}
            type="submit"
          >
            <span className="circle bg-[#546edf]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text tracking-wider   font-semibold text-black ">Submit</span>
          </button>
        </form>
      </div>
      {result && (
        <div className="mt-10">
          <h3 className="text-2xl">Prediction Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Hyper;
