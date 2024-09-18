import React, { useState } from "react";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    HbA1c: "",
    glucose: "",
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
      <h2 className="text-center text-4xl mb-10 border-b-[1px] border-gray-400 w-[90%] pb-3">Diabetes Prediction</h2>
      <div className="w-[90%]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className=" gap-1 flex flex-col">
            <label htmlFor="gender" className="text-lg font-medium mr-5">
              Enter your Gender
            </label>
            <select
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="gender"
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="1" className="appearance-none">Male</option>
              <option value="0">Female</option>
              <option value="2">Other</option>
            </select>
          </div>

          <div className="gap-1 flex flex-col">
            <p htmlFor="age" className="text-lg font-medium">Enter Your Age</p>
            <input
              type="number"
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="age"
              name="age"
              placeholder="In Years"
              onChange={handleChange}
              value={formData.age}
            />
            
          </div>

          {/* <div className="form-group mb-2">
                    <label htmlFor="hypertension">Your Hypertension Status</label>
                    <select className="form-control" id="hypertension" name="hypertension" onChange={handleChange} value={formData.hypertension}>
                        <option value="">Select</option>
                        <option value="1">Suffering</option>
                        <option value="0">Not Suffering</option>
                    </select>
                </div> */}

          {/* <div className="form-group mb-2">
                    <label htmlFor="heart">Your Heart Status</label>
                    <select className="form-control" id="heart" name="heart" onChange={handleChange} value={formData.heart}>
                        <option value="">Select</option>
                        <option value="1">Suffering from a Heart Disease</option>
                        <option value="0">Healthy Heart</option>
                    </select>
                </div> */}

          {/* <div className="form-group mb-2">
                    <label htmlFor="smoke">Your Smoking Status</label>
                    <select className="form-control" id="smoke" name="smoke" onChange={handleChange} value={formData.smoke}>
                        <option value="">Select</option>
                        <option value="4">Never</option>
                        <option value="1">Currently Smoking</option>
                        <option value="3">Former Smoker</option>
                        <option value="2">Ever Smoking</option>
                        <option value="5">Not Currently</option>
                        <option value="0">Don't want to share</option>
                    </select>
                </div> */}

          <div className="gap-1 flex flex-col">
            <label htmlFor="height" className="text-lg font-medium">Enter Your Height</label>
            <input
              type="number"
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="height"
              name="height"
              placeholder="In cms"
              onChange={handleChange}
              value={formData.height}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="weight" className="text-lg font-medium">Enter Your Weight</label>
            <input
              type="number"
             className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="weight"
              name="weight"
              placeholder="In kgs"
              onChange={handleChange}
              value={formData.weight}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="HbA1c" className="text-lg font-medium">HbA1c Level as per Report</label>
            <input
              type="number"
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="HbA1c"
              name="HbA1c"
              placeholder="In mmol/mol"
              onChange={handleChange}
              value={formData.HbA1c}
            />
          </div>

          <div className="gap-1 flex flex-col">
            <label htmlFor="glucose" className="text-lg font-medium">Blood Glucose Level as per Report</label>
            <input
              type="number"
              className="px-3 py-2 rounded-md w-[60%] outline-none font-medium border border-black"
              id="glucose"
              name="glucose"
              placeholder="As per device or report"
              onChange={handleChange}
              value={formData.glucose}
            />
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

export default DiabetesForm;
