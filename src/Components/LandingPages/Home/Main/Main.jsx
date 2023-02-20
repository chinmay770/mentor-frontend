import React from "react";
import "./Main.css";
import Rait1 from "../../../../images/rait/rait1.jpg";
import Rait3 from "../../../../images/rait/rait3.jpg";
import Rait4 from "../../../../images/rait/rait4.jpg";
import Rait5 from "../../../../images/rait/rait5.jpg";
import Rait6 from "../../../../images/rait/rait6.jpg";
import Rait7 from "../../../../images/rait/rait7.jpg";
import Rait8 from "../../../../images/rait/rait8.jpg";
import Rait9 from "../../../../images/rait/rait9.jpg";
import Rait10 from "../../../../images/rait/rait10.jpg";
import allRoutes from "../../../../data/routes.js";

const Helper = () => {
  return (
    <div className="carousel-container-content">
      <h2 data-aos="fade-right">Ramrao Adik Institute of Technology</h2>
      <h1 data-aos="fade-left">Welcome, Mentor Form Application</h1>
      <div data-aos="zoom-out" className="button">
        <a href={allRoutes.aboutPage}>About Us</a>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-container">
            <img
              src={Rait1}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>

          <div class="carousel-item">
            <img
              src={Rait3}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait4}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait5}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait6}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait7}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait8}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait9}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
          <div class="carousel-item">
            <img
              src={Rait10}
              className="d-block w-100 rait-carousel-images"
              alt="RAIT"
            />
            <Helper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
