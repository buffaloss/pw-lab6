import React, { useState } from "react";
import "./Locations.css";
import LocationList from "./LocationList";

function Locations({ locations }) {
    return (
      <div className="locations-container">
        <LocationList locations={locations} />
      </div>
    );
  }
  
  export default Locations;