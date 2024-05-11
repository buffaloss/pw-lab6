import React, { useState } from "react";
import "./Header.css";
import LocationForm from "./LocationForm";
import LocationList from "./LocationList";

function Header({onShowForm}) {

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h2>Track your travel destinations with ease and style!</h2>
        <div className="buttons-container">
            <button className="btn" onClick={onShowForm}>Add Location</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
