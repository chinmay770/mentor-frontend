import React from "react";
import "./Navbar.css";
import "../../helpers/common.css";
import allRoutes from "../../../data/routes";
import RAITlogo from "../../../images/Authentication/raitLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={allRoutes.homepage}>
            <img src={RAITlogo} alt="logo" className="rait-logo" />
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
            <ul className="navbar-nav justify-content-end ms-auto">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  aria-current="page"
                  href={allRoutes.homepage}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.aboutPage}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.contactPage}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item mx-2 px-3">
                <a
                  href={allRoutes.allLoginPage}
                  className="btn authBtns authButtons"
                  style={{ color: "#fff" }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item mx-2 px-3 ">
                <a
                  href={allRoutes.allRegisterPage}
                  className="btn authBtns authButtons"
                  style={{ color: "#fff" }}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
