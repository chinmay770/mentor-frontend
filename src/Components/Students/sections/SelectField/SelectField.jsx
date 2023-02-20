import React from "react";
import "../TextInputs/TextInput.css";

const SelectField = (props) => {
  const data = props.options;
  return (
    <div className="row50">
      <div className="inputBox">
        <span>{props.title}*</span>
        <select name={props.name} id={props.name} onChange={props.onChange}>
          <option value="" selected>
            Select Type of Activity
          </option>
          <option value="Extra curricular activity">Extra Curricular</option>
          <option value="Curricular activity">Curricular</option>
        </select>
      </div>
    </div>
  );
};

export default SelectField;
