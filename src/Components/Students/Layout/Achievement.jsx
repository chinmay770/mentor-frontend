import React from "react";
import Navbar from "../../helpers/StudentNavbar/Navbar";
import AchievementsForm from "../Forms/AchievementsForm";
import downArrow from "../../../images/rait/down-arrow.png";
import "./styles/Message.css";
import AchievementTable from "../pages/Table/AchievementTable";

const Achievement = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Add your Achievements
        </h1>
        <AchievementsForm />

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
            Achievements
          </h3>

          <div className="container" style={{ margin: "20px 0" }}>
            <AchievementTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
