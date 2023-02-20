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
    imageFile: "",
    description: "",
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
      .post(`http://localhost:8000/student/achievements/${data.email}`, mailer)
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
        setMsg(response.data.msg);
        if (response.data.success === true) {
          window.location.reload(true);
          history(allRoutes.studentAchievements, { replace: true });
        }
      });

    console.log(msg);
  };
  console.log(mailer);

  return (
    <div className="contact formContent container" data-aos="fade-right">
      <form action={allRoutes.commonContactUs} method="post">
        <div className="formBox">
          <div className="row50">
            <div className="inputBox">
              <span>Name of Achievement*</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={mailer.name}
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* <div className="row50">
            <div className="inputBox">
              <span>Add your Certificate below*</span>
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                value={mailer.imageFile}
                placeholder="Add your Certificate"
              />
            </div>
          </div> */}

          <div className="row50">
            <div className="inputBox">
              <span>Description of Achievement*</span>
              <textarea
                name="description"
                id="description"
                value={mailer.description}
                onChange={handleChange}
                placeholder="Write your Description here..."
              ></textarea>
            </div>
          </div>

          <div className="row50">
            <div className="inputBox">
              <input
                type="submit"
                onClick={handleSubmit}
                value="Add an Achievement"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
