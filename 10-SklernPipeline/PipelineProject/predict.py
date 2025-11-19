import pickle
import numpy as np
import sys
import json

# Load the model
MODEL_PATH = 'pipe.pkl'
pipe = pickle.load(open(MODEL_PATH, 'rb'))

def predict(pclass, sex, age, sibsp, parch, fare, embarked):
    """Make prediction based on passenger data"""
    # Create input array matching production code format
    test_input = np.array([pclass, sex, age, sibsp, parch, fare, embarked], dtype=object).reshape(1, 7)
    
    # Get prediction (0 = died, 1 = survived)
    prediction = pipe.predict(test_input)[0]
    
    # Get prediction probabilities
    probabilities = pipe.predict_proba(test_input)[0]
    survival_prob = probabilities[1]  # Probability of surviving
    death_prob = probabilities[0]    # Probability of dying
    
    result = {
        'prediction': int(prediction),
        'outcome': 'Survived' if prediction == 1 else 'Died',
        'survival_probability': float(survival_prob),
        'death_probability': float(death_prob),
        'confidence': float(max(survival_prob, death_prob))
    }
    
    return result

if __name__ == '__main__':
    # Read input from stdin
    data = json.loads(sys.stdin.read())
    
    pclass = int(data.get('pclass'))
    sex = data.get('sex')
    age = float(data.get('age')) if data.get('age') else None
    sibsp = int(data.get('sibsp'))
    parch = int(data.get('parch'))
    fare = float(data.get('fare'))
    embarked = data.get('embarked')
    
    result = predict(pclass, sex, age, sibsp, parch, fare, embarked)
    print(json.dumps(result))

