import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className=" navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="navbar-brand">
                <h2>FIT-Track</h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className=" navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to={"/create/" + name} className="nav-link">
                Create Exercise Log
              </Link>
            </li>

            <li className="navbar-item">
              <Link to={"/list/" + name} className="nav-link">
                My Exercises
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
