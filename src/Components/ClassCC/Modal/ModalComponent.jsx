import React from "react";
import { useState } from "react";
import "./Modal.css";

const ModalComponent = (props) => {
  const [color, setColor] = useState("");
  const handleRead = () => {
    setColor("#cff4fc");
  };
  const handleUnRead = () => {
    setColor("#fff3cd");
  };
  return (
    <>
      <div
        className="alert alert-warning modal-container"
        style={{ backgroundColor: `${color}`, flexBasis: "30%" }}
        role="alert"
        key={props.key}
      >
        <h4 className="alert-heading">{props.name}</h4>
        <p className="message-text">{props.message}</p>
        <hr />
        <div className="modal-bottom">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleRead}
          >
            Mark as Read
          </button>
          <button
            type="button button-bottom"
            className="btn btn-info"
            onClick={handleUnRead}
          >
            Mark as unread
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
