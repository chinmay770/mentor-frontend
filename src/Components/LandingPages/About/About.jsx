import React from "react";
import "./About.css";
import Navbar from "../../helpers/Navbar/Navbar";
import downArrow from "../../../images/rait/down-arrow.png";
import Container from "./Container/Container";
import Cards from "./PerkCards/Cards";
import Team from "./Teams/Team";
import Footer from "../../helpers/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="section">
        {/* Container Section */}
        <Container />

        {/* bonncing effect Arrow Section */}
        <div className="down-arrow">
          <img src={downArrow} alt="down-arrow" />
        </div>

        {/* Perks cards */}
        <Cards />

        {/* Team cards */}
        <Team />

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
};

export default About;
