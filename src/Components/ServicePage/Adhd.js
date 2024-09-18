import React, { useState } from "react";

const Adhd = () => {
  const [formData, setFormData] = useState({
    Attention_Span: "",
    Memory_Recall: "",
    Hyperactivity: "",
    Time_Management: "",
    Family_History_of_ADHD: "",
    Impulsivity: "",
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
      // Prepare the data to send to the Flask API
      const formattedData = {
        Attention_Span: formData.Attention_Span,
        Memory_Recall: formData.Memory_Recall,
        Hyperactivity: formData.Hyperactivity,
        Time_Management: formData.Time_Management,
        Family_History_of_ADHD: formData.Family_History_of_ADHD,
        Impulsivity: formData.Impulsivity,
      };

      // Send a POST request to the Flask ADHD prediction API
      const response = await fetch(
        "http://127.0.0.1:5000/service/adhd/predict",
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
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.adhd_severity); // Set the received prediction result
      }
    } catch (error) {
      setError(`Error fetching prediction: ${error.message}`);
    }
  };

  return (
    <div className="w-[72%] px-5 py-10 flex flex-col items-center bg-white rounded-md">
      <h2 className="text-center text-4xl mb-10">ADHD Prediction</h2>
      <div className="w-[90%]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className=" gap-1 flex flex-col">
            <label htmlFor="Attention_Span" className="text-lg font-medium mr-5">
              Attention Span
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="Attention_Span"
              name="Attention_Span"
              onChange={handleChange}
              value={formData.Attention_Span}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

          <div className=" gap-1 flex flex-col">
            <label htmlFor="Memory_Recall" className="text-lg font-medium mr-5">
              Memory Recall
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="Memory_Recall"
              name="Memory_Recall"
              onChange={handleChange}
              value={formData.Memory_Recall}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

          <div className=" gap-1 flex flex-col">
            <label htmlFor="Hyperactivity" className="text-lg font-medium mr-5">
              Hyperactivity
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black "
              id="Hyperactivity"
              name="Hyperactivity"
              onChange={handleChange}
              value={formData.Hyperactivity}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

          <div className=" gap-1 flex flex-col">
            <label htmlFor="Time_Management" className="text-lg font-medium mr-5">
              Time Management
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="Time_Management"
              name="Time_Management"
              onChange={handleChange}
              value={formData.Time_Management}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

          <div className=" gap-1 flex flex-col">
            <label htmlFor="Family_History_of_ADHD" className="text-lg font-medium mr-5">
              Family History of ADHD
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="Family_History_of_ADHD"
              name="Family_History_of_ADHD"
              onChange={handleChange}
              value={formData.Family_History_of_ADHD}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

          <div className=" gap-1 flex flex-col">
            <label htmlFor="Impulsivity" className="text-lg font-medium mr-5">
              Impulsivity
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="Impulsivity"
              name="Impulsivity"
              onChange={handleChange}
              value={formData.Impulsivity}
            >
              <option value="1">Mild</option>
              <option value="4">Moderate</option>
              <option value="7">Severe</option>
              <option value="10">Extreme</option>
            </select>
          </div>

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

        {result && (
          <div className="mt-5">
            <h3 className="text-xl">{result}</h3>
          </div>
        )}

        {error && (
          <div className="mt-5 text-red-500">
            <h3 className="text-xl">Error: {error}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adhd;
