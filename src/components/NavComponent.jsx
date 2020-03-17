import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <a href="../../index3.html" className="navbar-brand">
            <img
              src="../../dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Covid 19 Info</span>
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index3.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="https://abdasis.github.io" className="nav-link">
                  Profile
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
          </div>
          {/* Right navbar links */}
          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="https://instagram.com/id.elasis"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="https://facebook.com/id.abdasis"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="https://twitter.com/idabdasis"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
