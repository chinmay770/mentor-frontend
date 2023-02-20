import React from "react";
import Navbar from "../../helpers/Navbar/Navbar";

//component imports
import Main from "./Main/Main";
import Testimonial from "./Testimonial/Testimonial";
import Campus from "./Campus/Campus";
import Footer from "../../helpers/Footer/Footer";
import Cards from "../About/PerkCards/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Cards />
      <Campus />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
