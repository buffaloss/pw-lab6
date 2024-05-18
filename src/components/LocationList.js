import React from "react";
import "./LocationList.css";
import { useTheme } from "../ThemeContext";

function LocationList({ locations }) {
  const { theme } = useTheme();

  return (
    <div className={`location-list ${theme === "dark" ? "dark" : ""}`}>
      {Object.keys(locations).map((locationId) => (
        <div
          key={locationId}
          className={`location-item ${theme === "dark" ? "dark" : ""}`}
        >
          <section className={`location-title-section ${theme === "dark" ? "dark" : ""}`}>
            <h3>{locations[locationId].name}</h3>
            <input
              type="checkbox"
              className="favorite-checkbox"
              id={"favorite-" + locationId}
              defaultChecked={locations[locationId].favourite}
            />
          </section>
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
