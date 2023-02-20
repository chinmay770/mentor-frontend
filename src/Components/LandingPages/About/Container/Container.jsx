import React from "react";
import "../About.css";
import raitMain1 from "../../../../images/rait/rait-main1.jpg";
import raitMain2 from "../../../../images/rait/rait-main2.jpg";
import allRoutes from "../../../../data/routes";

const Container = () => {
  return (
    <div className="container">
      <div className="content-section" data-aos="fade-right">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <h3>Ramrao Adik Institute of Technology</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="button">
            <a href={allRoutes.commonContactUs}>Contact Us</a>
          </div>
        </div>

        <ul className="sci">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/DYPatilUniversityNaviMumbai"
            >
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/dypatiluniversity/?utm_medium=copy_link"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/c/DYPatilUniversityNaviMumbai/featured"
            >
              <ion-icon size="large" name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/d-y-patil-university-navi-mumbai/?viewAsMember=true"
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <div className="image-section" data-aos="fade-left">
        {/* <img src={raitMain1} alt="rait main" /> */}
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={raitMain1} class="d-block w-100" alt="rait carousel" />
            </div>
            <div class="carousel-item">
              <img src={raitMain2} class="d-block w-100" alt="rait carousel" />
            </div>
            <div class="carousel-item">
              <img src={raitMain1} class="d-block w-100" alt="rait carousel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
