import React, { useState, useEffect } from "react";
import allRoutes from "../../../data/routes";
import "./styles/MessageForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MessageForm = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const [msg, setMsg] = useState("");
  const [mailer, setMailer] = useState({
    name: "",
    message: "",
  });

  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);

    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
      });
  }, []);
  console.log(user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailer({
      ...mailer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/student/message/${data.email}`, mailer)
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
        setMsg(response.data.msg);
        window.location.reload(true);

        history(allRoutes.commonThankyou, { replace: true });
      });

    console.log(msg);
  };

  return (
    <div className="contact formContent container" data-aos="fade-right">
      <form action={allRoutes.commonContactUs} method="post">
        <div className="formBox">
          <div className="row50">
            <div className="inputBox">
              <span>Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={mailer.name}
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="row50">
            <div className="inputBox">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={info?.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                disabled
                style={{ backgroundColor: "#ccc", color: "#000" }}
              />
            </div>
          </div>

          <div className="row50">
            <div className="inputBox">
              <span>Message</span>
              <textarea
                name="message"
                id="message"
                value={mailer.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          <div className="row50">
            <div className="inputBox">
              <input
                type="submit"
                onClick={handleSubmit}
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
