import React, { useState } from "react";

const DepressionForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    negative_mood: "",
    sleep_quantity: "",
    energy_level: "",
    cognitive_decline: "",
    social_engagement: "",
    stress_level: "",
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
      // Convert necessary fields to appropriate types
      const formattedData = {
        gender: parseInt(formData.gender) || 0,
        age: parseFloat(formData.age) || 0.0,
        height: parseFloat(formData.height) || 0.0,
        weight: parseFloat(formData.weight) || 0.0,
        HbA1c: parseFloat(formData.HbA1c) || 0.0,
        glucose: parseFloat(formData.glucose) || 0.0,
      };

      // Send a POST request to the Flask server
      const response = await fetch(
        "http://127.0.0.1:5000/service/diabetes/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      // if (!response.ok) {
      //     throw new Error(HTTP error! status: ${response.status});
      // }

      const data = await response.json();
      setResult(data.diabetes_severity); // Set the received prediction result
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="w-[72%] px-5 py-10 flex flex-col items-center bg-white rounded-md">
      <h2 className="text-center text-4xl mb-10">Diabetes</h2>
      <div className="w-[90%]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Enter your Gender
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="1">Male</option>
              <option value="0">Female</option>
              <option value="2">Other</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Negative Mood
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="negative_mood"
              onChange={handleChange}
              value={formData.negative_mood}
            >
              <option value="2">Mild</option>
              <option value="5">Moderate</option>
              <option value="7">Severe</option>
              <option value="9">Extreme</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Sleep Quantity
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="sleep_quantity"
              onChange={handleChange}
              value={formData.sleep_quantity}
            >
              <option value="2">Adequate</option>
              <option value="5">Insufficient</option>
              <option value="7">Poor</option>
              <option value="9">Severly Inadequate</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Energy Level
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="energy_level"
              onChange={handleChange}
              value={formData.energy_level}
            >
              <option value="2">Exhausted</option>
              <option value="5">Low</option>
              <option value="7">Moderate</option>
              <option value="9">High</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Cognitive Decline
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="cognitive_decline"
              onChange={handleChange}
              value={formData.cognitive_decline}
            >
              <option value="2">None</option>
              <option value="5">Mild</option>
              <option value="7">Moderate</option>
              <option value="9">Severe</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Social Engagement
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="social_engagement"
              onChange={handleChange}
              value={formData.social_engagement}
            >
              <option value="2">Withdrawl</option>
              <option value="5">Low</option>
              <option value="7">Moderate</option>
              <option value="9">High</option>
            </select>
          </div>
          <div className=" gap-1 flex">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Stress Level
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="gender"
              name="stress_level"
              onChange={handleChange}
              value={formData.stress_level}
            >
              <option value="2">Low</option>
              <option value="5">Moderate</option>
              <option value="7">High</option>
              <option value="9">Overwhelming</option>
            </select>
          </div>

          

          <button
              className="learn-more submit-button w-36"
              onClick={handleSubmit}
            >
              <span className="circle bg-[#546edf]" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span
                className={`button-text tracking-wider   font-semibold text-black `}
              >
                {/* {lang[langKey].submit} */}
                Submit
              </span>
            </button>
        </form>
      </div>
      {result !== null && (
        <div>
          <h3>Diabetes Severity Prediction</h3>
          <p>Severity: {result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default DepressionForm;
