import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Dashboard.css";
import allRoutes from "../../../data/routes";
import Navbar from "../../helpers/StudentNavbar/Navbar";
import axios from "axios";
import BarChart from "../Charts/BarChart";
import BarData from "../../../data/ChartData/BarData";
import LineChart from "../Charts/LineChart";
import RadarChart from "../Charts/RadarChart";
import RadarData from "../../../data/ChartData/RadarData";

const DashBoard = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);

  const [userData, setUserData] = useState({
    labels: BarData.map((data) => data.semester),
    datasets: [
      {
        label: "Semester Results",
        data: BarData.map((data) => data.cgpa),
        backgroundColor: ["#820000"],
      },
    ],
  });

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);
  }, []);
  console.log("user email is >>>> ", user);

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
      });
  }, []);
  console.log("User information is> ", info);

  const handleSubmit = () => {
    localStorage.clear();
    history(allRoutes.allLoginPage, { replace: true });
  };

  return (
    <>
      <Navbar />

      <div
        className="container py-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="mb-5 header-container">
          <div className="dashboard-section">
            <h1 style={{ color: "#820000" }}>Welcome, {info?.name}!</h1>
            <button
              className="logout-icon"
              data-bs-toggle="tooltip"
              title="Logout"
              onClick={handleSubmit}
            >
              <ion-icon size="large" name="exit"></ion-icon>
            </button>
          </div>

          <div className="chart-section">
            <div className="chart-subsection">
              <div className="charts">
                <BarChart data={userData} />
              </div>
              <div className="charts">
                <LineChart data={userData} />
              </div>
            </div>
            <div className="chart-subsection">
              <div className="charts">
                <RadarChart data={RadarData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
