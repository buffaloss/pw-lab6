import React from 'react';
import './LocationList.css';

function LocationList({ locations }) {
  return (
    <div className="location-list">
      {locations.map((location, index) => (
        <div key={index} className="location-item">
          <h3>{location.name}</h3>
          <p>Description: {location.description}</p>
          <p>Rating: {location.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
