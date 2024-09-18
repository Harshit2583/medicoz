import React, { useState } from "react";

const Bipolar = () => {
  const [formData, setFormData] = useState({
    Substance_Use: "1", // Default value stage 1
    Anxiety: "1",  // Default value stage 1
    Social_Interaction: "1",  // Default value stage 1
    Energy_Levels: "1", // Default value stage 1
    Family_History: "1", // Default value stage 1
    Sleep_Disturbance: "1",   // Default value stage 1
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const formattedData = {
        Substance_Use: formData.Substance_Use,
        Anxiety: formData.Anxiety,
        Social_Interaction: formData.Social_Interaction,
        Energy_Levels: formData.Energy_Levels,
        Family_History: formData.Family_History,
        Sleep_Disturbance: formData.Sleep_Disturbance,
      };

      const response = await fetch(
        "http://127.0.0.1:5000/service/bipolar/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.message); // Display result from backend
    } catch (error) {
      setError(`Error fetching prediction: ${error.message}`);
    }
  };

  return (
    <div className="w-full md:w-[72%] px-5 py-10 flex flex-col items-center bg-white rounded-md">
      <h2 className="text-center text-4xl mb-10">Bipolar Severity Prediction</h2>
      <div className="w-[90%]">
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Substance Use input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Substance Use</span>
            <select
              name="Substance_Use"
              value={formData.Substance_Use}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="1">None</option>
              <option value="4">Occasional</option>
              <option value="7">Frequent</option>
              <option value="10">Very High</option>
            </select>
          </div>

          {/* Anxiety input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Anxiety</span>
            <select
              name="Anxiety"
              value={formData.Anxiety}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="1">None</option>
              <option value="4">Mild</option>
              <option value="7">Moderate</option>
              <option value="10">Severe</option>
            </select>
          </div>

          {/* Social Interaction input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Social Interaction</span>
            <select
              name="Social_Interaction"
              value={formData.Social_Interaction}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="10">Very High</option>
              <option value="7">Moderate</option>
              <option value="4">Low</option>
              <option value="1">None</option>
            </select>
          </div>

          {/* Energy Levels input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Energy Levels</span>
            <select
              name="Energy_Levels"
              value={formData.Energy_Levels}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="10">Very High</option>
              <option value="7">Moderate</option>
              <option value="4">Low</option>
              <option value="1">Very Low</option>
            </select>
          </div>

          {/* Family History input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Family History</span>
            <select
              name="Family_History"
              value={formData.Family_History}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="1">None</option>
              <option value="4">Mild</option>
              <option value="7">Moderate</option>
              <option value="10">Severe</option>
            </select>
          </div>

          {/* Sleep Disturbance input */}
          <div className=" gap-1 flex flex-col">
            <span className="text-lg font-medium mr-5">Sleep Disturbance</span>
            <select
              name="Sleep_Disturbance"
              value={formData.Sleep_Disturbance}
              onChange={handleChange}
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
            >
              <option value="1">None</option>
              <option value="4">Mild</option>
              <option value="7">Moderate</option>
              <option value="10">Severe</option>
            </select>
          </div>

          {/* Submit button */}
          {/* <div className="text-center mt-5">
            <button type="submit" className="border border-black px-5 py-2 rounded-md">
              Predict
            </button>
          </div> */}
          <button
            className="learn-more submit-button w-36"
            onClick={handleSubmit}
            type="submit"
          >
            <span className="circle bg-[#546edf]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text tracking-wider   font-semibold text-black">Submit</span>
          </button>
        </form>

        {/* Display result */}
        {result && (
          <div className="mt-5">
            <h3 className="text-xl">{result}</h3>
          </div>
        )}

        {/* Display error */}
        {error && (
          <div className="mt-5 text-red-500">
            <h3 className="text-xl">Error: {error}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bipolar;
