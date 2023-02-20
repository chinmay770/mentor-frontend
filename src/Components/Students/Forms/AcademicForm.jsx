import React, { useState, useEffect } from "react";
import allRoutes from "../../../data/routes";
import "./styles/MessageForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextInput from "../sections/TextInputs/TextInput";
import SelectField from "../sections/SelectField/SelectField";

const AcademicForm = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const [msg, setMsg] = useState("");
  const [mailer, setMailer] = useState({
    activity: "",
    activityName: "",
    description: "",
    // imageFile: "",
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
      .post(`http://localhost:8000/student/academics/${data.email}`, mailer)
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
        setMsg(response.data.msg);
        if (response.data.success === true) {
          window.location.reload(true);
          history(allRoutes.studentAcademic, { replace: true });
        }
      });

    console.log(msg);
  };
  console.log(mailer);

  return (
    <div className="contact formContent container" data-aos="fade-right">
      <form action={allRoutes.commonContactUs} method="post">
        <div className="formBox">
          <SelectField
            title="Select Type of Activity"
            name="activity"
            onChange={handleChange}
            value={mailer.activity}
            placeholder="Select Activity"
          />

          <TextInput
            title="Name of Activity"
            type="text"
            name="activityName"
            onChange={handleChange}
            value={mailer.activityName}
            placeholder="Name of Activity"
          />

          {/* <div className="row50">
            <div className="inputBox">
              <span>Add your Activity Certificate below*</span>
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                value={mailer.imageFile}
                placeholder="Add your Activity Certificate"
              />
            </div>
          </div> */}

          <div className="row50">
            <div className="inputBox">
              <span>Description of Activity*</span>
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

export default AcademicForm;
