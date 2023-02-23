import React, { useState, useEffect } from "react";
import Navbar from "../../helpers/MentorNavbar/Navbar";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../../data/routes";
import "../graphs/BarChart";
import BarData from "../../../data/ChartData/BarData";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Inbox from "../DashboardContent/Inbox";
import "../Layout/styles/Dashboard.css";
import { withWidth } from "@material-ui/core";
import CircularProgress from "@material-ui/core";
import {Box, Card, CardContent, Typography, CardMedia} from '@material-ui/core';

const Dashboard = () => {  

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
  console.log("User information is> ", info);

  const handleSubmit = () => {
    localStorage.clear();
    history(allRoutes.allLoginPage, { replace: true });
  };

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(`Sending message: ${message}`);
    setMessage("");
  };


 
  return (
    <>
      <Navbar />

      <div className="container py-3" style={{ display: "flex", flexDirection: "column" }}>
        <div className="mb-5 header-container">
          <div className="dashboard-section">
            <h1 style={{ color: "#820000" }}>Welcome, {info?.name}!</h1>
            <button className="logout-icon" data-bs-toggle="tooltip" title="Logout" onClick={handleSubmit}>
              <ion-icon size="large" name="exit"></ion-icon>
            </button>
          </div>

          <div className="chart-section">
            <div className="chart-subsection">
              <div className="calendar">
                <Calendar />
                <div className="years">
                  <h5 style={{padding: "10px", color: "#373737",paddingRight: "50px", marginTop: "-50px"}}>Curriculam</h5>
                  <h6 style={{padding: "10px", backgroundColor: "#820000",width: "250px"}}>Second year</h6>
                  <h6 style={{padding: "10px", backgroundColor: "#820000",width: "250px"}}>Third year</h6>
                  <h6 style={{padding: "10px", backgroundColor: "#820000",width: "250px"}}onClick>
                    <a href="https://drive.google.com/file/d/11Cc9DZYxsMyYas5yt3KX8ptddL5PZ7_3/view?usp=share_link"></a>
                    Last year
                  </h6>
                </div>
                <br></br>

                <div className="StudentMessage">
                  <textarea style={{height: "200px", marginTop: "10px"}}
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                  /><br></br>
                   <button style={{width: "200px", height: "30px", backgroundColor: "#820000", color: "white", marginLeft: "65px"}}
                   
                   onClick={sendMessage}>Send to all Students</button>
                  
                </div>
              </div>
              <div className="Inbox">
                <Inbox />
              </div>
              <div className="cards">
                <Box width="300px">
                  <Card>
                    <CardMedia
                      component={'img'}
                      height='150'
                      image="https://t4.ftcdn.net/jpg/03/98/01/63/360_F_398016387_RFTYf2qo8T4NPpATELaMGWFXI5QKgIsy.jpg"
                      alt='unsplash image'
                    />
                    <CardContent style={{backgroundColor: "#820000"}}>
                      <Typography style={{textAlign: "center", color: "white"}}>
                        <h6>STUDENT COUNT</h6>
                      </Typography>
                      <Typography style={{textAlign: "center", color: "white"}}>
                        82
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <br/>
                <Box width="300px">
                  <Card>
                    <CardMedia
                      component={'img'}
                      height='150'
                      image="data:image/png;base64,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"
                      alt='unsplash image'
                    />
                    <CardContent style={{backgroundColor: "#820000"}}>
                      <Typography style={{textAlign: "center", color: "white"}}>
                        <h6>Parents Connected</h6>
                      </Typography>
                      <Typography style={{textAlign: "center", color: "white"}}>
                        80
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                
                <div className="StudentMessage">
                  <textarea style={{height: "200px", marginTop: "30px"}}
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                  /><br></br>
                   <button style={{width: "200px", height: "30px", backgroundColor: "#820000", color: "white", marginLeft: "65px"}}
                   
                   onClick={sendMessage}>Send to all Students</button>
                  
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
          
        
      
    </>
  );
};

export default Dashboard;
