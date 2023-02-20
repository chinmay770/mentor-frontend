import React from "react";
import Select from "react-select";
import "../TextInputs/TextInput.css";

const SemesterSelectField = (props) => {
  const data = props.options;
  return (
    <div className="row50">
      <div className="inputBox">
        <span>{props.title}*</span>
        <select name={props.name} id={props.name} onChange={props.onChange}>
          <option value="">Select Semester</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
          <option value="five">Five</option>
          <option value="six">Six</option>
          <option value="seven">Seven</option>
          <option value="eight">Eight</option>
        </select>
      </div>
    </div>
  );
};

export default SemesterSelectField;
