import React from "react";
import classes from "./NavBar.module.css";
import Logo from "./images/WeBridge-Logo-nobackground.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <a href="https://www.webridge.co.za">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className={classes["nav-links"]}>
        <li className={classes["nav-links li"]}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Applynow">Apply Now</Link>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
