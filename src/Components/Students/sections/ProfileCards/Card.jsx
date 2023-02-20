import React, { useState, useEffect } from "react";
import "./Card.css";
import ProfileImage from "../../../../images/Student/dummy-profile.png";
import axios from "axios";

const Card = () => {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);

    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
      });
  }, []);

  console.log("User is as follows: ", user);
  console.log("Information is as follows: ", info);

  return (
    <>
      <div class="card">
        <div class="card-header">
          <div class="card-header-slanted-edge">
            <img className="profileImage" src={ProfileImage} alt="profile" />
          </div>
        </div>

        <div class="card-body">
          <h2 class="name">{info?.name}</h2>
          <h4 class="job-title">{info?.email}</h4>
          <div class="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div>
        </div>

        {/* branch section */}
        <div class="card-footer" style={{ textAlign: "center" }}>
          <div class="stats">
            <div class="stat" style={{ margin: "auto", width: "100%" }}>
              <span class="label">Branch</span>
              <span class="value">{info?.branch || "Engineering"}</span>
            </div>
          </div>
        </div>

        {/* Roll Number section */}
        <div class="card-footer">
          <div class="stats">
            <div class="stat">
              <span class="label">Roll Number</span>
              <span class="value">{info?.rollNumber || "22EG1111"}</span>
            </div>
          </div>
          <div class="stats">
            <div class="stat">
              <span class="label">Divison</span>
              <span class="value">{info?.divison || "A1"}</span>
            </div>
          </div>
        </div>

        {/* contactNumber Section */}
        <div class="card-footer" style={{ textAlign: "center" }}>
          <div class="stats">
            <div class="stat" style={{ margin: "auto", width: "100%" }}>
              <span class="label">Contact Number</span>
              <span class="value">
                {info?.contactNumber || "Add contact Number"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
