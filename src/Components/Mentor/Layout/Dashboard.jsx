import React, { useState, useEffect } from "react";
import Navbar from "../../helpers/MentorNavbar/Navbar";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../../data/routes";

const Dashboard = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);
  }, []);
  console.log("user email is >>>> ", user);

  const handleSubmit = () => {
    localStorage.clear();
    history(allRoutes.allLoginPage, { replace: true });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div>Dashboard</div>
        <button
          className="logout-icon"
          data-bs-toggle="tooltip"
          title="Logout"
          onClick={handleSubmit}
        >
          <ion-icon size="large" name="exit"></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Dashboard;
