import React from "react";
import "./Card.css";
import MiniCards from "../../../About/PerkCards/MiniCards/MiniCards";
import StudentImage from "../../../../../images/Student/dummy-profile.png";

const Card = () => {
  return (
    <div class="container2">
      <div class="header">
        <h1>Testimonial Section</h1>
        <p style={{ color: "#000" }}>Some Reviews by our students</p>
      </div>
      <div class="sub-container marquee">
        <ul className="marquee-content">
          <li
            className="marquee-item"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
            />
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          labore quam reprehenderit vitae aliquam dicta!"
            />
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
            />
          </li>
          <li
            className="marquee-item"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
            />
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          labore quam reprehenderit vitae aliquam dicta!"
            />
            <MiniCards
              imageStyle={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              image={StudentImage}
              alt="student pic"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore quam reprehenderit vitae aliquam dicta!"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
