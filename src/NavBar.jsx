import React from "react";
import classes from "./NavBar.module.css";
import Logo from "./images/WeBridge-Logo-nobackground.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg ${classes.navbar}`}>
      <div className="container w-auto">
        <a className="navbar-brand" href="https://www.webridge.co.za">
          <div className={classes.logo}>
            <a href="https://www.webridge.co.za">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${classes["nav-links"]}`}>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Applynow">
                Apply Now
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Careers">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
