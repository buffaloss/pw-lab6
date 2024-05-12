import React from "react";
import "./Locations.css";
import LocationList from "./LocationList";
import { useTheme } from "../ThemeContext";

function Locations({ locations }) {
  const { theme } = useTheme();

  return (
    <div className={`locations-container ${theme === "dark" ? "dark" : ""}`}>
      <LocationList locations={locations} />
    </div>
  );
}

export default Locations;
