import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-black text-white mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-1 text-left">
            <Link className="navbar-brand text-white mr-3" to="/">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" height="50" width="142" />
            </Link>
          </div>
          <div className="col-md-8 text-center">
            <Link to="/Prof" className="nav-link text-white d-block mb-0">
              Find a mentor
            </Link>
            <Link to="/HowItWorks" className="nav-link text-white d-block mb-0">
              How it works
            </Link>
            <Link to="/Cours" className="nav-link text-white d-block mb-0">
              Our courses
            </Link>
          </div>
          <div className="col-md-3 text-right">
            <p>123 Main Street<br />City, State ZIP<br />Phone: 555-555-5555<br />Email: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
