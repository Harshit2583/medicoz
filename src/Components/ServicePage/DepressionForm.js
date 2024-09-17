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
      // Prepare the data to send to the Flask API
      const formattedData = {
        gender: parseInt(formData.gender) || 0,
        negative_mood: parseFloat(formData.negative_mood) || 0.0,
        sleep_quantity: parseFloat(formData.sleep_quantity) || 0.0,
        energy_level: parseFloat(formData.energy_level) || 0.0,
        cognitive_decline: parseFloat(formData.cognitive_decline) || 0.0,
        social_engagement: parseFloat(formData.social_engagement) || 0.0,
        stress_level: parseFloat(formData.stress_level) || 0.0,
      };

      // Send a POST request to the Flask depression prediction API
      const response = await fetch(
        "http://127.0.0.1:5000/service/depression/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      const data = await response.json();
      setResult(data.depression_severity); // Set the received prediction result
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="w-[72%] px-5 py-10 flex flex-col items-center bg-white rounded-md">
      <h2 className="text-center text-4xl mb-10">Depression Prediction</h2>
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
            <label htmlFor="negative_mood" className="text-lg font-medium mr-5">
              Negative Mood
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="negative_mood"
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
            <label htmlFor="sleep_quantity" className="text-lg font-medium mr-5">
              Sleep Quantity
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="sleep_quantity"
              name="sleep_quantity"
              onChange={handleChange}
              value={formData.sleep_quantity}
            >
              <option value="2">Adequate</option>
              <option value="5">Insufficient</option>
              <option value="7">Poor</option>
              <option value="9">Severely Inadequate</option>
            </select>
          </div>

          <div className=" gap-1 flex">
            <label htmlFor="energy_level" className="text-lg font-medium mr-5">
              Energy Level
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="energy_level"
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
            <label htmlFor="cognitive_decline" className="text-lg font-medium mr-5">
              Cognitive Decline
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="cognitive_decline"
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
            <label htmlFor="social_engagement" className="text-lg font-medium mr-5">
              Social Engagement
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="social_engagement"
              name="social_engagement"
              onChange={handleChange}
              value={formData.social_engagement}
            >
              <option value="2">Withdrawn</option>
              <option value="5">Low</option>
              <option value="7">Moderate</option>
              <option value="9">High</option>
            </select>
          </div>

          <div className=" gap-1 flex">
            <label htmlFor="stress_level" className="text-lg font-medium mr-5">
              Stress Level
            </label>
            <select
              className="border border-black px-2 rounded-md font-medium "
              id="stress_level"
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
            type="submit"
          >
            <span className="circle bg-[#546edf]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Submit</span>
          </button>
        </form>
      </div>
      {result !== null && (
        <div className="mt-10">
          <h3 className="text-2xl">Depression Severity: {result}%</h3>
        </div>
      )}
    </div>
  );
};

export default DepressionForm;
