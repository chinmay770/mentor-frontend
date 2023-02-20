import React, { useState, useEffect } from "react";
import Navbar from "../../helpers/StudentNavbar/Navbar";
import MessageForm from "../Forms/MessageForm";
import downArrow from "../../../images/rait/down-arrow.png";
import "./styles/Message.css";
import ModalComponent from "../pages/Modal/ModalComponent";
import axios from "axios";

const Message = () => {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
        console.log(res.data.studentData[0]);
      });
  }, []);
  console.log(user);
  console.log("messages are :- ", info?.messages);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Send a message
        </h1>
        <MessageForm />
      </div>

      <div className="down-arrow">
        <img src={downArrow} alt="down-arrow" />
      </div>

      <div className="container">
        <h3
          style={{
            color: "#820000",
            textAlign: "center",
            padding: "20px 10px",
          }}
        >
          Messages
        </h3>

        {info?.messages && (
          <div
            className="modal-section"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {info?.messages.map((data) => {
              return (
                <ModalComponent
                  key={data._id}
                  name={data.name}
                  message={data.message}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Message;
