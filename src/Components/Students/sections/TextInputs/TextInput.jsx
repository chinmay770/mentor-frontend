import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  return (
    <div className="row50">
      <div className="inputBox">
        <span>{props.title}*</span>
        <input
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
