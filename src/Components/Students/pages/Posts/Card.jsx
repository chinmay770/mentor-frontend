import React from "react";
import "./Card.css";

const MiniCards = (props) => {
  return (
    <div class="teams" data-aos={props.animation} style={props.style}>
      <img src={props.imageSrc} alt="certificate" style={props.imageStyle} />
      <div class="name">{props.title}</div>
      <div class="desig">{props.subTitle}</div>
      <div class="about">{props.description}</div>
    </div>
  );
};

export default MiniCards;
