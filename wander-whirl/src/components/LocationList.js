import React from "react";
import "./LocationList.css";

function LocationList({ locations }) {
  return (
    <div className="location-list">
      {locations.map((location, index) => (
        <div key={index} className="location-item">
          <h3>{location.name}</h3>
          <h6>Rating: {location.rating} out of 5</h6>
          <div className="description">Description:</div>
          <p>{location.description}</p>
        </div>
      ))}

    </div>
  );
}

export default LocationList;
