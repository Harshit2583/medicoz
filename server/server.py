from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load the fuzzy logic model
diabetes_simulation = pickle.load(open('server\OptimizedFuzzyDiabetes.pkl', 'rb'))
depression_simulation = pickle.load(open('server\Depression\OptimizedFuzzyDepression.pkl', 'rb'))
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

@app.route('/service/depression/predict', methods=['POST'])
def DepressionPredict():
    # Log the received data for debugging purposes
    print("Received data:", request.json)
    
    # Parse incoming data from the request
    data = request.json
    negative_mood = float(data['negative_mood'])
    sleep_quantity = float(data['sleep_quantity'])
    energy_levels = float(data['energy_level'])
    cognitive_decline = float(data['cognitive_decline'])
    social_engagement = float(data['social_engagement'])
    stress_levels = float(data['stress_level'])
    
    # Set input values to the fuzzy depression model
    depression_simulation.input['negative_mood'] = negative_mood
    depression_simulation.input['sleep_quantity'] = sleep_quantity
    depression_simulation.input['energy_levels'] = energy_levels
    depression_simulation.input['cognitive_decline'] = cognitive_decline
    depression_simulation.input['social_engagement'] = social_engagement
    depression_simulation.input['stress_levels'] = stress_levels
    
    # Compute the fuzzy logic output
    depression_simulation.compute()
    
    # Extract and return the result
    depression_severity = depression_simulation.output['depression_level']
    return jsonify({'depression_severity': depression_severity})

if __name__ == '__main__':
    app.run(debug=True)
