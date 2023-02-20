import React from "react";
import "./Cards.css";
import TeacherImage from "../../../../images/Authentication/Registration/teacher.jpg";
import MentorImage from "../../../../images/Authentication/Registration/mentor.jpg";
import StudentImage from "../../../../images/Authentication/Registration/student-resized.jpg";
import MiniCards from "./MiniCards/MiniCards";

const Cards = () => {
  return (
    <div class="container2">
      <div class="header">
        <h1>Benefits of Our Website</h1>
      </div>
      <div class="sub-container">
        <MiniCards
          animation="zoom-in"
          image={StudentImage}
          alt="student pic"
          title="Lorem Ipsum"
          subTitle="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
        />
        <MiniCards
          animation="zoom-in"
          image={MentorImage}
          alt="student pic"
          title="Lorem Ipsum"
          subTitle="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
        />
        <MiniCards
          animation="zoom-in"
          image={TeacherImage}
          alt="student pic"
          title="Lorem Ipsum"
          subTitle="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
        />
      </div>
    </div>
  );
};

export default Cards;
