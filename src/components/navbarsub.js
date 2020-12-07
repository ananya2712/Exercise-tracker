import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarSub extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/" className="navbar-brand">
                  <h2>FIT-Track</h2>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>

              <li className="navbar-item ">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
