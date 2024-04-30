import React, { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Intro from "./components/Intro";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Logo/>
      <Intro/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* Render the Card component with sample data */}
            <Card
              title="Sample Destination"
              status="Plan to Visit"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet magna eget tellus consectetur."
              rating={4.5}
              imageUrl="https://via.placeholder.com/400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
