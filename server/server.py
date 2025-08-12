from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load the fuzzy logic model
Bipolar = pickle.load(open(r'Bipolar\Bipolar.pkl', 'rb'))
adhd = pickle.load(open(r'Adhd\Adhd.pkl', 'rb'))
diabetes_simulation = pickle.load(open(r'OptimizedFuzzyDiabetes.pkl', 'rb'))
hyper = pickle.load(open(r'hypertension\hypertension.pkl', 'rb'))
depression_simulation = pickle.load(open(r'Depression\OptimizedFuzzyDepression.pkl', 'rb'))

@app.route('/service/diabetes/predict', methods=['POST'])
def DiabetesPredict():
    data = request.json

    age_val = float(data.get('age', 0.0))
    height = float(data.get('height', 0.0))
    weight = float(data.get('weight', 0.0))
    HbA1c_val = float(data.get('HbA1c', 0.0))
    glucose_val = float(data.get('glucose', 0.0))

    bmi_val = weight / ((height / 100) ** 2)  

    diabetes_simulation.input['age'] = age_val
    diabetes_simulation.input['bmi'] = bmi_val
    diabetes_simulation.input['hba1c'] = HbA1c_val
    diabetes_simulation.input['glucose'] = glucose_val

   
    diabetes_simulation.compute()

  
    diabetes_severity = diabetes_simulation.output['diabetes']
    if 0 <= diabetes_severity < 33:
        result=("Diabetes Severity: Very Low. No significant diabetic symptoms detected.")
    elif 33 <= diabetes_severity < 49:
        result=("Diabetes Severity: Low. Mild Diabetic symptoms might be present. Consider seeking support or monitoring your well-being.")
    elif 49 <= diabetes_severity < 67:
        result=("Diabetes Severity: Medium. Moderate Diabetic symptoms are likely. Seeking professional help is recommended.")
    elif 67 <= diabetes_severity < 100:
        result=("Diabetes Severity: High. Significant diabetic symptoms are present. Professional evaluation and treatment are strongly advised.")
    return jsonify({'diabetes_severity': result})

   
    

@app.route('/service/depression/predict', methods=['POST'])
def DepressionPredict():
    print("Received data:", request.json)
    
    data = request.json
    negative_mood = float(data['negative_mood'])
    sleep_quantity = float(data['sleep_quantity'])
    energy_levels = float(data['energy_level'])
    cognitive_decline = float(data['cognitive_decline'])
    social_engagement = float(data['social_engagement'])
    stress_levels = float(data['stress_level'])
    
    depression_simulation.input['negative_mood'] = negative_mood
    depression_simulation.input['sleep_quantity'] = sleep_quantity
    depression_simulation.input['energy_levels'] = energy_levels
    depression_simulation.input['cognitive_decline'] = cognitive_decline
    depression_simulation.input['social_engagement'] = social_engagement
    depression_simulation.input['stress_levels'] = stress_levels
    
    depression_simulation.compute()
    
    output_level = depression_simulation.output['depression_level']
    if 0 <= output_level < 33:
        result=("Depression Level: Very Low. No significant depressive symptoms detected.")
    elif 33 <= output_level < 49:
        result=("Depression Level: Low. Mild depressive symptoms might be present. Consider seeking support or monitoring your well-being.")
    elif 49 <= output_level < 67:
        result=("Depression Level: Medium. Moderate depressive symptoms are likely. Seeking professional help is recommended.")
    elif 67 <= output_level < 100:
        result=("Depression Level: High. Significant depressive symptoms are present. Professional evaluation and treatment are strongly advised.")
    return jsonify({'depression_severity': result})
@app.route('/service/hypertension/predict', methods=['POST'])
def HyperPredict():
    # Log the received data for debugging purposes
    print("Received data:", request.json)
    
    # Parse incoming data from the request
    data = request.json
    gender_val=int(data['gender'])
    age_val = int(data['age'])
    CSmoker_Val = int(data['currentSmoker'])
    BPMeds_val = float(data['BPMeds'])
    totChol_val = float(data['totChol'])
    sysBP_val = float(data['sysBP'])
    diaBP_val = float(data['diaBP'])
    BMI_val = float(data['BMI'])
    heartRate_val = float(data['heart_rate'])
    
    
    
    data=[gender_val,age_val,CSmoker_Val,BPMeds_val,totChol_val,sysBP_val,diaBP_val,BMI_val,heartRate_val]
    
    output=hyper.predict([data])
    
    if output[0]==1:
        result="You need a Doctor's Consultancy"
    else:
        result="You are Safe to continue your life"
    return jsonify({'Prediction Result': result})

@app.route('/service/adhd/predict', methods=['POST'])
def AdhdPredict():
    # Log the received data for debugging purposes
    result=("Received data:", request.json)
    
    # Parse incoming data from the request
    data = request.json
    AS_val = data.get('Attention_Span')
    MR_val = data.get('Memory_Recall')
    H_val = data.get('Hyperactivity')
    TM_val = data.get('Time_Management')
    FHOA_val = data.get('Family_History_of_ADHD')
    I_val = data.get('Impulsivity')
    

    
    # Check if the values are valid floats
    
    AS_val = float(AS_val)
    MR_val = float(MR_val)
    H_val = float(H_val)
    TM_val = float(TM_val)
    FHOA_val = float(FHOA_val)
    I_val = float(I_val)
    
    
    # Set the fuzzy logic inputs
    
    adhd.input['Attention_Span'] = AS_val
    adhd.input['Memory_Recall'] = MR_val
    adhd.input['Hyperactivity'] = H_val
    adhd.input['Time_Management'] = TM_val
    adhd.input['Family_History_of_ADHD'] = FHOA_val
    adhd.input['Impulsivity'] = I_val
        # Compute the fuzzy logic output
    adhd.compute()
        
        # Extract and return the result
    adhd_severity = adhd.output['adhd_severity']
    if 0 <= adhd_severity < 33:
        result=("Adhd Severity: Very Low. No significant ADHD symptoms detected.")
    elif 33 <= adhd_severity < 49:
        result=("Adhd Severity: Low. Mild ADHD symptoms might be present. Consider seeking support or monitoring your well-being.")
    elif 49 <= adhd_severity < 67:
        result=("Adhd Severity: Medium. Moderate ADHD symptoms are likely. Seeking professional help is recommended.")
    elif 67 <= adhd_severity < 100:
        result=("Adhd Severity: High. Significant ADHD symptoms are present. Professional evaluation and treatment are strongly advised.")
    return jsonify({'adhd_severity': result})

@app.route('/service/bipolar/predict', methods=['POST'])
def BipolarPredict():
    # Log the received data for debugging purposes
    print("Received data:", request.json)
    
    # Parse incoming data from the request
    data = request.json
    SB_val = float(data.get('Substance_Use'))
    A_val = float(data.get('Anxiety'))
    SI_val = float(data.get('Social_Interaction'))
    EL_val = float(data.get('Energy_Levels'))
    FH_val = float(data.get('Family_History'))
    SD_val = float(data.get('Sleep_Disturbance'))
    
    # Set the fuzzy logic inputs
    Bipolar.input['Substance_Use'] = SB_val
    Bipolar.input['Anxiety'] = A_val
    Bipolar.input['Social_Interaction'] = SI_val
    Bipolar.input['Energy_Levels'] = EL_val
    Bipolar.input['Family_History'] = FH_val
    Bipolar.input['Sleep_Disturbance'] = SD_val
    
    # Compute the fuzzy logic output
    Bipolar.compute()
    
    # Extract the result
    Bipolar_severity = Bipolar.output['bipolar_level']
    
    # Interpret the result
    if 0 <= Bipolar_severity < 33:
        result = "Bipolar Severity: Very Low. No significant disease symptoms detected."
    elif 33 <= Bipolar_severity < 49:
        result = "Bipolar Severity: Low. Mild disease symptoms might be present. Consider seeking support or monitoring your well-being."
    elif 49 <= Bipolar_severity < 67:
        result = "Bipolar Severity: Medium. Moderate disease symptoms are likely. Seeking professional help is recommended."
    elif 67 <= Bipolar_severity < 100:
        result = "Bipolar Severity: High. Significant disease symptoms are present. Professional evaluation and treatment are strongly advised."
    
    # Return result as JSON serializable format (dictionary)
    return jsonify({"message": result})
if __name__ == '__main__':
    app.run(debug=True)
