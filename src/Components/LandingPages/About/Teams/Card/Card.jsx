import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <li>
        <div className="card" data-aos={props.animation}>
          <img src={props.cardImage} className="card__image" alt="card" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={props.roundImage} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{props.name}</h3>
                <span className="card__status">{props.jobTitle}</span>
              </div>
            </div>
            <p className="card__description">{props.description}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
