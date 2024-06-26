import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Locations from "./components/Locations";
import LocationForm from "./components/LocationForm";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [locations, setLocations] = useState({});
  const [locationId, setLocationId] = useState(localStorage.getItem("locationId") ? parseInt(localStorage.getItem("locationId")) : 0);

  const initialTheme = localStorage.getItem("appTheme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem("locations"));
    if (savedLocations) {
      setLocations(savedLocations);
    }
  }, []);

  const handleAddLocation = (locationData) => {
    setLocations({...locations, [locationId]: locationData});
    localStorage.setItem("locations", JSON.stringify({...locations, [locationId]: locationData}));
    setLocationId(locationId + 1);
    localStorage.setItem("locationId", locationId + 1);
  };

  const handleFavorite = (locationId) => {
    const updatedLocations = { ...locations };
    updatedLocations[locationId].favourite = !updatedLocations[locationId].favourite;
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
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
      <Locations 
        locations={locations} 
        handleFavorite={handleFavorite}
      />
      <ToggleButton />
    </ThemeProvider>
  );
}

export default App;
