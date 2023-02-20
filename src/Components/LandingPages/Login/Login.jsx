import React from "react";
import allRoutes from "../../../data/routes";
import Navbar from "../../helpers/Navbar/Navbar";
import Card from "./Card";
import StudentImage from "../../../images/Authentication/Registration/student-resized.jpg";
import MentorImage from "../../../images/Authentication/Registration/mentor.jpg";
import TeacherImage from "../../../images/Authentication/Registration/teacher.jpg";
import "./Login.css";

const Login = () => {
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
              name="Login"
              imageURL={TeacherImage}
              title="Class CC Login"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.ccLogin}
            />
          </div>
          <div className="col-sm-4 py-2">
            <Card
              animation="zoom-in"
              name="Login"
              imageURL={MentorImage}
              title="Mentor Login"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.mentorLogin}
            />
          </div>
          <div className="col-sm-4 py-2">
            <Card
              animation="fade-left"
              name="Login"
              imageURL={StudentImage}
              title="Student Login"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              routeLink={allRoutes.studentLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
