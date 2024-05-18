import React from "react";
import "./LocationList.css";
import { useTheme } from "../ThemeContext";

function LocationList({ locations }) {
  const { theme } = useTheme();

  return (
    <div className={`location-list ${theme === "dark" ? "dark" : ""}`}>
      {/* {locations.map((location, index) => (
        <div
          key={index}
          className={`location-item ${theme === "dark" ? "dark" : ""}`}
        >
          <h3>{location.name}</h3>
          <h6>Rating: {location.rating} out of 5</h6>
          <div className={`description ${theme === "dark" ? "dark" : ""}`}>
            Description:
          </div>
          <p>{location.description}</p>
        </div>
      ))} */}
      {Object.keys(locations).map((locationId) => (
        <div
          key={locationId}
          className={`location-item ${theme === "dark" ? "dark" : ""}`}
        >
          <h3>{locations[locationId].name}</h3>
          <h6>Rating: {locations[locationId].rating} out of 5</h6>
          <div className={`description ${theme === "dark" ? "dark" : ""}`}>
            Description:
          </div>
          <p>{locations[locationId].description}</p>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
