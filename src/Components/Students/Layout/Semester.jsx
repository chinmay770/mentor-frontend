import React from "react";
import Navbar from "../../helpers/StudentNavbar/Navbar";
import SemesterDetailsForm from "../Forms/SemesterDetailsForm";
import downArrow from "../../../images/rait/down-arrow.png";
import "./styles/Message.css";
import SemesterDetailsTable from "../pages/Table/SemesterDetailsTable";

const Semester = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Add your Semester Details
        </h1>
        <SemesterDetailsForm />

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
            Semester Details listed Below
          </h3>

          <div className="container" style={{ margin: "20px 0" }}>
            <SemesterDetailsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Semester;
