import React from "react";
import './style.css'

const Footer = () => {
  return (
    <div className="footer pt-3 pb-1" id="footer">
      <div className="container d-flex justify-content-center">
        <div className="text-center">
          <p className="made">Made with Vite + React JS</p>
          <p className="name">by <a href="https://www.linkedin.com/in/rizkidty/">Muhammad Rizki Aditya</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
