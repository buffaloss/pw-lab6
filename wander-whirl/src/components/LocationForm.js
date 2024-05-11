// LocationForm.js
import React, { useState } from 'react';
import "./LocationForm.css";
import { useTheme } from "../ThemeContext";

function LocationForm({ onSubmit, onClose }) {
  const [locationData, setLocationData] = useState({
    name: '',
    description: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData({
      ...locationData,
      [name]: value
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(locationData);
    setLocationData({
      name: '',
      description: '',
      rating: ''
    });
    onClose();
  };

  const { theme } = useTheme();

  return (
    <div className={`popup ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`popup-content ${theme === 'dark' ? 'dark' : ''}`}>
        <span className="close" onClick={onClose}>&times;</span>
        <form className={`popup-content ${theme === 'dark' ? 'dark' : ''}`} onSubmit={handleSubmit}>
          <div className={`form-group ${theme === 'dark' ? 'dark' : ''}`}>
            <label htmlFor="locationName">Location Name:</label>
            <input
              type="text"
              id="locationName"
              name="name"
              value={locationData.name}
              onChange={handleChange}
              required
              className={`${theme === 'dark' ? 'dark' : ''}`}
            />
          </div>
          <div className={`form-group ${theme === 'dark' ? 'dark' : ''}`}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={locationData.description}
              onChange={handleChange}
              required
              className={`${theme === 'dark' ? 'dark' : ''}`}
            />
          </div>
          <div className={`form-group ${theme === 'dark' ? 'dark' : ''}`}>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={locationData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.5"
              required
              className={`${theme === 'dark' ? 'dark' : ''}`}
            />
          </div>
          <div className={`form-group ${theme === 'dark' ? 'dark' : ''}`}>
            <button className={`submit-btn ${theme === 'dark' ? 'dark' : ''}`} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationForm;
