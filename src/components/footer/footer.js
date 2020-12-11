import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="Footer">
      <h6>Contact Information</h6>
      <div className="portfolio-resume-contact-info">
        <a href={"mailto:#"}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          simplyvpthar@gmail.com
        </a>
      </div>
      <div className="portfolio-resume-contact-info">
        <a href={"tel:+8179485381"}>
          <i className="fa fa-phone" aria-hidden="true"></i>817.948.5381
        </a>
      </div>
    </footer>
  );
}

export default Footer
