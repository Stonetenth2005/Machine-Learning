# Titanic Survival Predictor

A modern web application built with React and Node.js that predicts whether a passenger would have survived the Titanic disaster based on their details.

## Tech Stack

- **Frontend**: React 18 with Vite
- **Backend**: Node.js with Express
- **ML Model**: Python scikit-learn pipeline (loaded via Python script)
- **Styling**: Modern CSS with gradients and animations

## Features

- Modern, responsive UI with beautiful gradient design
- Real-time probability visualization with animated progress bars
- Fast predictions using pre-trained machine learning model
- Mobile-friendly interface
- Hot module replacement with Vite

## Project Structure

```
PipelineProject/
├── server.js              # Node.js/Express backend
├── predict.py             # Python script for model predictions
├── pipe.pkl               # Trained model file
├── package.json           # Backend dependencies
├── requirements.txt       # Python dependencies
├── client/                # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── App.css        # App styles
│   │   ├── main.jsx       # React entry point
│   │   ├── index.css      # Global styles
│   │   └── components/
│   │       ├── PredictionForm.jsx
│   │       ├── PredictionForm.css
│   │       ├── ResultDisplay.jsx
│   │       └── ResultDisplay.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json       # Frontend dependencies
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 16+ and npm
- Python 3.8+ with pip
- `pipe.pkl` model file in the project root

### Installation

1. **Install backend dependencies:**
   ```bash
   npm install
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

1. **Start the backend server** (from project root):
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the React development server** (in a new terminal, from project root):
   ```bash
   cd client
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Fill in the passenger details:
   - **Passenger Class**: 1st, 2nd, or 3rd class
   - **Gender**: Male or Female
   - **Age**: Passenger's age (optional)
   - **Siblings/Spouses Aboard**: Number of siblings or spouses
   - **Parents/Children Aboard**: Number of parents or children
   - **Ticket Fare**: Price of the ticket
   - **Port of Embarkation**: C (Cherbourg), Q (Queenstown), or S (Southampton)

2. Click "Predict Survival" to get the prediction

3. View the results:
   - Survival/Death prediction with icon
   - Probability percentages with animated progress bars
   - Confidence level

## API Endpoint

### POST `/api/predict`

Predicts survival based on passenger details.

**Request Body:**
```json
{
  "pclass": 1,
  "sex": "male",
  "age": 31.0,
  "sibsp": 0,
  "parch": 0,
  "fare": 10.5,
  "embarked": "S"
}
```

**Response:**
```json
{
  "prediction": 0,
  "outcome": "Died",
  "survival_probability": 0.23,
  "death_probability": 0.77,
  "confidence": 0.77
}
```

## Development

- Backend runs on port 5000
- Frontend runs on port 3000 (Vite dev server)
- Vite proxy is configured to forward `/api` requests to the backend

## Model Information

The model uses a scikit-learn pipeline with:
- Feature preprocessing (imputation, encoding, scaling)
- Decision Tree Classifier
- Trained on the Titanic dataset

## Production Build

To build the React app for production:

```bash
cd client
npm run build
```

The built files will be in `client/dist/`. You can serve them with any static file server or configure your Node.js server to serve them.
