import React from "react";
import "../../../About/About.css";
import "../Campus.css";
import Gallery from "../Gallery/Gallery";

const Container = () => {
  return (
    <div className="campus">
      <div className="image-section" data-aos="zoom-in">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <h3 style={{ color: "#820000", margin: "10px 0", fontWeight: "500" }}>
            View 360°
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1666030409646!6m8!1m7!1sCAoSLEFGMVFpcE1CSllIM1VCcFdXdnR1N0p2LTY2ck1ZU0EyaC1OVTU2SnJ2S2Zo!2m2!1d19.0443254!2d73.0253613!3f320!4f20!5f0.7820865974627469"
            className="google360"
            allowfullscreen="true"
            loading="lazy"
            title="Google 360 image"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div
        className="campus-section"
        // style={{ display: "flex" }}
        data-aos="fade-right"
      >
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
        </div>

        <Gallery />
      </div>
    </div>
  );
};

export default Container;
