import React from "react";
import Navbar from "../../helpers/StudentNavbar/Navbar";
import AcademicForm from "../Forms/AcademicForm";
import downArrow from "../../../images/rait/down-arrow.png";
import "./styles/Message.css";
import AcademicTable from "../pages/Table/AcademicTable";

const Academic = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Add your Academics Activities Here
        </h1>

        <AcademicForm />

        <div className="down-arrow">
          <img src={downArrow} alt="down-arrow" />
        </div>

        <div className="container">
          <h3
            style={{
              color: "#820000",
              textAlign: "center",
              padding: "20px 10px",
            }}
          >
            Academic Activities Details
          </h3>
        </div>

        <div className="container" style={{ margin: "20px 0" }}>
          <AcademicTable />
        </div>
      </div>
    </>
  );
};

export default Academic;
