import "./Logo.css";
import React from "react";
import logoImage from "../images/logo.png";
import darkLogoImage from "../images/logo-dark.png";
import { useTheme } from "../ThemeContext";

function Logo() {
  const { theme } = useTheme();

  return (
    <div
      className={`d-flex justify-content-center text-center ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className={` ${theme === "dark" ? "dark" : ""}`}>
        {theme === "light" ? (
          <img src={logoImage} alt="Light Logo" className="logo" />
        ) : (
          <img src={darkLogoImage} alt="Dark Logo" className="logo" />
        )}
      </div>
    </div>
  );
}

export default Logo;
