import React from "react";
import "./LocationList.css";
import { useTheme } from "../ThemeContext";

function LocationList({ locations, handleFavorite }) {
  const { theme } = useTheme();

  return (
    <div className={`location-list ${theme === "dark" ? "dark" : ""}`}>
      {Object.entries(locations)
        .sort(([, a], [, b]) => b.favourite - a.favourite)
        .map(([locationId, location]) => (
          <div
            key={locationId}
            className={`location-item ${theme === "dark" ? "dark" : ""}`}
          >
            <section className={`location-title-section ${theme === "dark" ? "dark" : ""}`}>
              <h3>{location.name}</h3>
              <input
                type="checkbox"
                className="favorite-checkbox"
                id={"favorite-" + locationId}
                defaultChecked={location.favourite}
                onChange={() => handleFavorite(locationId)}
              />
            </section>
            <h6>Rating: {location.rating} out of 5</h6>
            <div className={`description ${theme === "dark" ? "dark" : ""}`}>
              Description:
            </div>
            <p>{location.description}</p>
          </div>
        ))}
    </div>
  );
}

export default LocationList;
