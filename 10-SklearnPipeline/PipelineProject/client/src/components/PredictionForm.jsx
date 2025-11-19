import React, { useState } from 'react'
import './PredictionForm.css'

function PredictionForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    pclass: '',
    sex: '',
    age: '',
    sibsp: '0',
    parch: '0',
    fare: '',
    embarked: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="pclass">Passenger Class</label>
        <select
          id="pclass"
          name="pclass"
          value={formData.pclass}
          onChange={handleChange}
          required
        >
          <option value="">Select class</option>
          <option value="1">1st Class</option>
          <option value="2">2nd Class</option>
          <option value="3">3rd Class</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="sex">Gender</label>
        <select
          id="sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="0"
          max="120"
          step="0.1"
          placeholder="Enter age (optional)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="sibsp">Siblings/Spouses Aboard</label>
        <input
          type="number"
          id="sibsp"
          name="sibsp"
          value={formData.sibsp}
          onChange={handleChange}
          min="0"
          max="10"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="parch">Parents/Children Aboard</label>
        <input
          type="number"
          id="parch"
          name="parch"
          value={formData.parch}
          onChange={handleChange}
          min="0"
          max="10"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="fare">Ticket Fare</label>
        <input
          type="number"
          id="fare"
          name="fare"
          value={formData.fare}
          onChange={handleChange}
          min="0"
          step="0.01"
          placeholder="Enter fare amount"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="embarked">Port of Embarkation</label>
        <select
          id="embarked"
          name="embarked"
          value={formData.embarked}
          onChange={handleChange}
          required
        >
          <option value="">Select port</option>
          <option value="C">Cherbourg (C)</option>
          <option value="Q">Queenstown (Q)</option>
          <option value="S">Southampton (S)</option>
        </select>
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? (
          <>
            <span className="btn-loader">⏳</span>
            <span>Predicting...</span>
          </>
        ) : (
          <span>Predict Survival</span>
        )}
      </button>
    </form>
  )
}

export default PredictionForm

