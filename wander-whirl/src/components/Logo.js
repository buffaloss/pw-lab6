import './Logo.css'
import React from 'react';
import logoImage from '../images/logo.png'; 

function Logo() {
  return (
    <div className="d-flex justify-content-center">
      <img src={logoImage} alt="Logo" className="img-fluid" />
    </div>
  );
}

export default Logo;