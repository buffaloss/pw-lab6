// LocationForm.js
import React, { useState } from 'react';
import "./LocationForm.css";

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
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="locationName">Location Name:</label>
            <input
              type="text"
              id="locationName"
              name="name"
              value={locationData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={locationData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
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
            />
          </div>
          <div className="form-group">
            <button className="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationForm;
