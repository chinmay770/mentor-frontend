import React from "react";
import "../../helpers/Navbar/Navbar.css";
import "./Login.css";

const Card = (props) => {
  return (
    <>
      <div
        className="card mx-auto zoomClass"
        style={{ width: "18rem" }}
        data-aos={props.animation}
      >
        <img src={props.imageURL} className="card-img-top" alt="login-card" />
        <div className="card-body">
          <h4 className="my-2">{props.title}</h4>
          <p className="card-text my-2" style={{ fontSize: "14px" }}>
            {props.description}
          </p>
          <a
            href={props.routeLink}
            className="btn authBtns authButtons my-2"
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: "16px",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            {props.name}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
