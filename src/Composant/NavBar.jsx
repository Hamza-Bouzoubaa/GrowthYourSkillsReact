import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <a className="navbar-brand mx-3" href="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`}  alt="Logo" height="50" width="142" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white " href="/Prof">Find a mentor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/HowItWorks">How it works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Cours">Our courses</a>
          </li>
          
        </ul>
        </div>
            <div className="dropdown  ">
          <button className="btn btn-link text-white dropdown-toggle" type="button" id="languageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Language
          </button>
          <div className="dropdown-menu" aria-labelledby="languageDropdown">
            <a className="dropdown-item" href="#">English</a>
            <a className="dropdown-item" href="#">French</a>
          </div>
          </div>
         
      
      
    </nav>
    
    

  );
}

export default Navbar;
