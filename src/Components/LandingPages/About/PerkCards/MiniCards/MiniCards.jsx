import React from "react";
import "../Cards.css";

const MiniCards = (props) => {
  return (
    <div class="teams" data-aos={props.animation} style={props.style}>
      <img src={props.image} alt={props.alt} style={props.imageStyle} />
      <div class="name">{props.title}</div>
      <div class="desig">{props.subTitle}</div>
      <div class="about">{props.description}</div>
    </div>
  );
};

export default MiniCards;
