import React from "react";
import "../Navbar/Navbar.css";
import "../../helpers/common.css";
import allRoutes from "../../../data/routes";
import RAITlogo from "../../../images/Authentication/raitLogo.png";
import ProfileImage from "../../../images/Student/dummy-profile.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={allRoutes.studentDashboard}>
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
              <li className="nav-item">
                <a
                  className="nav-link active links Expandli"
                  style={{ color: "#000" }}
                  aria-current="page"
                  href={allRoutes.studentDashboard}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item Expandli">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.studentAcademic}
                >
                  Academics Activities
                </a>
              </li>
              <li className="nav-item Expandli">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.studentAchievements}
                >
                  Achivements
                </a>
              </li>
              <li className="nav-item Expandli">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.studentAllSemesterDetails}
                >
                  Semester Details
                </a>
              </li>
              <li className="nav-item Expandli">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.studentMessage}
                >
                  Messages
                </a>
              </li>
              <li className="nav-item Expandli">
                <a
                  className="nav-link active links"
                  style={{ color: "#000" }}
                  href={allRoutes.studentProfile}
                >
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "30%",
                    }}
                    src={ProfileImage}
                    alt="Profile"
                  />
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
