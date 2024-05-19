import React from "react";
import "./Locations.css";
import LocationList from "./LocationList";
import { useTheme } from "../ThemeContext";

function Locations({ locations, handleFavorite }) {
  const { theme } = useTheme();

  return (
    <div className={`locations-container ${theme === "dark" ? "dark" : ""}`}>
      <LocationList 
        locations={locations}
        handleFavorite={handleFavorite} 
      />
    </div>
  );
}

export default Locations;
