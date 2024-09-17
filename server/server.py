from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load the fuzzy logic model
diabetes_simulation = pickle.load(open('medicoz_SIH005\server\OptimizedFuzzyDiabetes.pkl', 'rb'))

@app.route('/service/diabetes/predict', methods=['POST'])
def DiabetesPredict():
    data = request.json

    age_val = float(data.get('age', 0.0))
    height = float(data.get('height', 0.0))
    weight = float(data.get('weight', 0.0))
    HbA1c_val = float(data.get('HbA1c', 0.0))
    glucose_val = float(data.get('glucose', 0.0))

    bmi_val = weight / ((height / 100) ** 2)  # Calculate BMI correctly

    # Set input values to the simulation
    diabetes_simulation.input['age'] = age_val
    diabetes_simulation.input['bmi'] = bmi_val
    diabetes_simulation.input['hba1c'] = HbA1c_val
    diabetes_simulation.input['glucose'] = glucose_val

   
    diabetes_simulation.compute()

  
    diabetes_severity = diabetes_simulation.output['diabetes']

   
    return jsonify({'diabetes_severity': diabetes_severity})

if __name__ == '__main__':
    app.run(debug=True)
