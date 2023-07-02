import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  return (
    <footer className="footer bg-black text-white mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-1 text-left"> {/* Added 'text-left' class */}
            <a className="navbar-brand text-white mr-3" href="#">
                <img src={`${process.env.PUBLIC_URL}/logo.png`}  alt="Logo" height="50" width="142" />
            </a>
          </div>
          <div className="col-md-8 text-center"> {/* Added 'text-center' class */}
            <a className="nav-link text-white d-block mb-0" href="/GrowthYourSkillsReact/Prof">Find a mentor</a>
            <a className="nav-link text-white d-block mb-0" href="/GrowthYourSkillsReact/HowItWorks">How it works</a>
            <a className="nav-link text-white d-block mb-0 " href="/GrowthYourSkillsReact/Cours">Our courses</a>
            
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
