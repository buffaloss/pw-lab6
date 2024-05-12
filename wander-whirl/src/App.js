import React, { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Locations from "./components/Locations";
import LocationForm from "./components/LocationForm";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleAddLocation = (locationData) => {
    setLocations([...locations, locationData]);
    setShowForm(false);
  };


  return (
    <ThemeProvider>
        <Logo />
        <Header onShowForm={() => setShowForm(true)} />
        {showForm && (
          <LocationForm
            onSubmit={handleAddLocation}
            onClose={() => setShowForm(false)}
          />
        )}
        <Locations locations={locations} />
        <ToggleButton />
    </ThemeProvider>
  );
}

export default App;
