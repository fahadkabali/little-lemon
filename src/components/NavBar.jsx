import React from "react";
import logo from "../images/logo.png"; // Assuming that '../images/logo.png' is the correct path

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <img src={logo} alt="Logo" style={{ width: '40px' }} className="rounded-pill" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="nav-link" type="button">Link</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button">Link</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button">Link</button>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
