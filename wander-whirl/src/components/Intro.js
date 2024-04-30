import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h2>Track your travel destinations with ease and style!</h2>
        <div className="buttons-container">
          <button className="btn mr-3">Add destination <span role="img" aria-label="plus">+</span></button>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by 
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">All</a>
              <a className="dropdown-item" href="#">Visited</a>
              <a className="dropdown-item" href="#">Plan to Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
