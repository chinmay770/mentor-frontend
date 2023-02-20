import React from "react";
import allRoutes from "../../../data/routes";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li>
                <a href={allRoutes.homepage}>Home</a>
              </li>
              <li>
                <a href={allRoutes.aboutPage}>About Us</a>
              </li>
              <li>
                <a href={allRoutes.contactPage}>Contact Us</a>
              </li>
              <li>
                <a href={allRoutes.homepage}>Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <p style={{ color: "#fff", fontSize: "16px" }}>
                  Address :
                  <a href="https://goo.gl/maps/S7q8o4PgRFYMxMvBA">
                    DY Patil University Sector 7. Nerul, Navi Mumbai 400706
                  </a>
                </p>
              </li>

              <li>
                <p style={{ color: "#fff", fontSize: "16px" }}>
                  Telephone :<a href="tel:022 3096 5888">022 3096 5888</a>
                </p>
              </li>

              <li>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Email Address :{" "}
                  <a
                    style={{ textTransform: "none" }}
                    href="mailto:raitmailcheck@gmail.com"
                  >
                    raitmailcheck@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/DYPatilUniversityNaviMumbai">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/c/DYPatilUniversityNaviMumbai/featured">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/dypatiluniversity/?utm_medium=copy_link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/d-y-patil-university-navi-mumbai/?viewAsMember=true">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright" style={{ textAlign: "center" }}>
        <small style={{ color: "#fff", textAlign: "center" }}>
          © {new Date().getFullYear()} Ramrao Adik Institute of Technology.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
