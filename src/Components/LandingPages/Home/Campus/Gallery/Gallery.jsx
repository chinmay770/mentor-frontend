import React from "react";
import "../Campus.css";
import Rait1 from "../../../../../images/rait/rait1.jpg";
import Rait2 from "../../../../../images/rait/rait2.jpg";
import Rait3 from "../../../../../images/rait/rait3.jpg";
import Rait4 from "../../../../../images/rait/rait4.jpg";
import Rait5 from "../../../../../images/rait/rait5.jpg";
import Rait6 from "../../../../../images/rait/rait6.jpg";
import Rait7 from "../../../../../images/rait/rait7.jpg";
import Rait8 from "../../../../../images/rait/rait8.jpg";
import Rait9 from "../../../../../images/rait/rait9.jpg";
import Rait10 from "../../../../../images/rait/rait10.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <img alt="rait" src={Rait1} className="gallery-images" />
        <img alt="rait" src={Rait2} className="gallery-images" />
        <img alt="rait" src={Rait3} className="gallery-images" />
        <img alt="rait" src={Rait4} className="gallery-images" />
        <img alt="rait" src={Rait5} className="gallery-images" />
        <img alt="rait" src={Rait6} className="gallery-images" />
        <img alt="rait" src={Rait7} className="gallery-images" />
        <img alt="rait" src={Rait8} className="gallery-images" />
        <img alt="rait" src={Rait9} className="gallery-images" />
        <img alt="rait" src={Rait10} className="gallery-images" />
      </div>
    </>
  );
};

export default Gallery;
