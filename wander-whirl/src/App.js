import React, {useState} from 'react';
import './index.css';
// import './reset.css';


function App(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">WanderWhirl</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destinations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container">
      <h1 className="mt-5"> Wander Whirl</h1>
      <p> Welcome to Wander Whirl! </p>
      <p> This is a travel blog where you log your travel destinations. </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
  );
}

export default App;
