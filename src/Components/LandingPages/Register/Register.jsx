import React from "react";
import allRoutes from "../../../data/routes";
import Navbar from "../../helpers/Navbar/Navbar";
import Card from "../Login/Card";
import StudentImage from "../../../images/Authentication/Registration/student-resized.jpg";
import MentorImage from "../../../images/Authentication/Registration/mentor.jpg";
import TeacherImage from "../../../images/Authentication/Registration/teacher.jpg";

const Register = () => {
  return (
    <div style={{ height: "100%" }} className="wrapper">
      <Navbar />
      <div
        className="container text-center mx-auto"
        style={{ marginTop: "8%" }}
      >
        <div className="row">
          <div className="col-sm-4 py-2">
            <Card
              animation="fade-right"
              name="Register"
              imageURL={TeacherImage}
              title="Class CC Register"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.ccRegister}
            />
          </div>
          <div className="col-sm-4 py-2">
            <Card
              animation="zoom-in"
              name="Register"
              imageURL={MentorImage}
              title="Mentor Register"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.mentorRegister}
            />
          </div>
          <div className="col-sm-4 py-2">
            <Card
              animation="fade-left"
              name="Register"
              imageURL={StudentImage}
              title="Student Register"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.studentRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
