import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../Forms/ProfileForm";
import Card from "../../Mentor/ProfileCards/Card";
import Navbar from "../../helpers/MentorNavbar/Navbar";
import allRoutes from "../../../data/routes";
import axios from "axios";
import "./styles/Profile.css";

const Profile = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);

    axios
      .get(`http://localhost:8000/mentor/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studenttData[0]);
      });
  }, []);
  console.log(user);

  const handleLogout = () => {
    localStorage.clear();
    history(allRoutes.homepage, { replace: true });
  };

  return (
    <>
      <Navbar />

      <div
        className="container py-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="mb-5 header-container">
          <h1 className="header-title">Welcome, {info?.name}!</h1>
          <button
            className="logout-icon"
            data-bs-toggle="tooltip"
            // data-bs-placement="top"
            title="Logout"
            onClick={handleLogout}
          >
            <ion-icon size="large" name="exit"></ion-icon>
          </button>
        </div>
        <div className="row">
          <div className="col-md-6 profile-card-section">
            <Card />
          </div>
          <div className="col-md-6 profile-form-section">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
