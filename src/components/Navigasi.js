import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../src/logo.svg";
import "../style.css";
import "../responsive.css";
import Login from "../components/Login/index";

export default function Navigasi() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light py-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <p className="fw-bold align-self-center" style={{ fontSize: "25px" }}>
              <span style={{ color: "#0000FF" }}>Rental</span>
              <span style={{ color: "#e9c00d" }}>Mobil</span>
            </p>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-1 mb-lg-0 ms-auto">
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="#">
                  Our Service
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="#">
                  Why Us
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="#n">
                  FAQ
                </a>
              </li>
              <li>
                {/* <button
                                    className="btn px-3 text-white"
                                    // data-bs-target="#exampleModal1"
                                    // data-bs-toggle="modal"
                                    // style="background-color: #56b659"
                                    style={{background: "#56b659"}}
                                >
                                    Register
                                </button> */}
                <Login />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
