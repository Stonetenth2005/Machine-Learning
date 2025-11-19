import React, { useState } from 'react'
import './App.css'
import PredictionForm from './components/PredictionForm'
import ResultDisplay from './components/ResultDisplay'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handlePredict = async (formData) => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Prediction failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
      console.error('Prediction error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>Titanic Survival Predictor</h1>
            <p className="subtitle">Enter passenger details to predict survival</p>
          </div>

          <PredictionForm onSubmit={handlePredict} loading={loading} />

          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
            </div>
          )}

          {result && <ResultDisplay result={result} />}
        </div>
      </div>
    </div>
  )
}

export default App

