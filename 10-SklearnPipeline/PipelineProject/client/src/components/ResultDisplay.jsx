import React, { useEffect, useState } from 'react'
import './ResultDisplay.css'

function ResultDisplay({ result }) {
  const [survivalWidth, setSurvivalWidth] = useState(0)
  const [deathWidth, setDeathWidth] = useState(0)

  useEffect(() => {
    // Animate progress bars
    const survivalPercent = (result.survival_probability * 100).toFixed(1)
    const deathPercent = (result.death_probability * 100).toFixed(1)

    setTimeout(() => {
      setSurvivalWidth(survivalPercent)
      setDeathWidth(deathPercent)
    }, 100)
  }, [result])

  const survived = result.prediction === 1
  const survivalPercent = (result.survival_probability * 100).toFixed(1)
  const deathPercent = (result.death_probability * 100).toFixed(1)
  const confPercent = (result.confidence * 100).toFixed(1)

  return (
    <div className="result-container">
      <div className="result-card">
        <div
          className={`result-icon ${survived ? 'survived' : 'died'}`}
          style={{
            color: survived ? '#38ef7d' : '#eb3349',
          }}
        >
          {survived ? '✅' : '❌'}
        </div>
        <h2
          className="result-title"
          style={{
            color: survived ? '#11998e' : '#eb3349',
          }}
        >
          {result.outcome}!
        </h2>
        <p className="result-subtitle">
          {survived
            ? 'The passenger would have survived the Titanic disaster.'
            : 'The passenger would not have survived the Titanic disaster.'}
        </p>

        <div className="probability-section">
          <div className="probability-bar">
            <div className="prob-label">
              <span>Survival Probability</span>
              <span className="prob-value">{survivalPercent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill survival"
                style={{ width: `${survivalWidth}%` }}
              >
                {survivalWidth > 10 && `${survivalPercent}%`}
              </div>
            </div>
          </div>

          <div className="probability-bar">
            <div className="prob-label">
              <span>Death Probability</span>
              <span className="prob-value">{deathPercent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill death"
                style={{ width: `${deathWidth}%` }}
              >
                {deathWidth > 10 && `${deathPercent}%`}
              </div>
            </div>
          </div>
        </div>

        <div className="confidence-badge">
          Confidence: <span>{confPercent}%</span>
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay

