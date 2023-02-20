import React from "react";
import Card from "./Card/Card";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#a23341" }}>
        Our Technical Team
      </h1>

      <div className="container3">
        {/* mentor section starts */}
        <div className="mentor-section">
          <div className="row" style={{ justifyContent: "center" }}>
            <h3
              className="ourTeam"
              style={{ textAlign: "center", color: "#820000" }}
            >
              Mentor
            </h3>
            <div className="col-md-3">
              <Card
                animation="fade-up"
                name="Mrs. Anita Patil"
                jobTitle="Asst. Professer"
                cardImage="https://i.imgur.com/oYiTqum.jpg"
                roundImage="https://i.imgur.com/7D7I6dI.png"
                description="Cybersecurity Expert in the field of Networking and Mentor for this Mentor Management System."
              />
            </div>
          </div>
        </div>

        {/* Lead section starts */}
        <div className="mentor-section">
          <div className="row" style={{ justifyContent: "center" }}>
            <h3
              className="ourTeam"
              style={{ textAlign: "center", color: "#820000" }}
            >
              Technical Team
            </h3>
            <div className="col-md-3">
              <Card
                animation="fade-right"
                jobTitle="UI Developer and Designer"
                name="Dipesh Patil"
                cardImage="https://i.imgur.com/oYiTqum.jpg"
                roundImage="https://i.imgur.com/7D7I6dI.png"
                description="UI Developer & Designer. Technical Lead in charge for Mentor Management System."
              />
            </div>
            <div className="col-md-3">
              <Card
                animation="fade-up-right"
                jobTitle="UI Developer"
                name="Pradnya Nakate"
                cardImage="https://i.imgur.com/oYiTqum.jpg"
                roundImage="https://i.imgur.com/7D7I6dI.png"
                description="UI Developer and Technical co-lead for Mentor Management System."
              />
            </div>
            <div className="col-md-3">
              <Card
                animation="fade-down-left"
                jobTitle="Content Writer"
                name="Akhilesh Deshpande"
                cardImage="https://i.imgur.com/oYiTqum.jpg"
                roundImage="https://i.imgur.com/7D7I6dI.png"
                description="Content manager and project co-ordinator for Mentor Management System."
              />
            </div>
            <div className="col-md-3">
              <Card
                animation="zoom-in"
                jobTitle="Content Writer"
                name="Sakshi Sawant"
                cardImage="https://i.imgur.com/oYiTqum.jpg"
                roundImage="https://i.imgur.com/7D7I6dI.png"
                description="Content manager and project co-ordinator for Mentor Management System."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
